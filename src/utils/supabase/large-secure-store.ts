import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import * as aesjs from 'aes-js';

/**
 * Expo의 SecureStore는 민감한 데이터를 안전하게 저장하기 위한 저장소다.
 * 그러나 SecureStore는 2048바이트 이하의 작은 크기 데이터만 저장할 수 있다는 제한이 있다.
 * 따라서 2048바이트보다 큰 데이터를 안전하게 저장하기 위해서는 다른 방법이 필요하다.
 *
 * 이를 위해 다음과 같은 과정을 거친다:
 *
 * 1. AES-256 암호화 알고리즘을 사용하여 임의의 암호화 키를 생성한다.
 * 2. 생성된 암호화 키는 SecureStore에 안전하게 저장한다. (키의 크기는 작기 때문에 SecureStore에 저장할 수 있다.)
 * 3. 큰 크기의 데이터는 일반적인 AsyncStorage에 저장한다. 하지만 이때 데이터를 그대로 저장하는 것이 아니라, 앞서 생성한 암호화 키를 사용하여 데이터를 암호화한 후 저장한다.
 * 4. 데이터를 읽어올 때는 AsyncStorage에서 암호화된 데이터를 가져온 후, SecureStore에 저장된 암호화 키를 사용하여 복호화한다.
 *
 * 이렇게 함으로써 큰 크기의 데이터도 안전하게 저장할 수 있다.
 * 데이터 자체는 일반 AsyncStorage에 저장되지만, 암호화되어 저장되기 때문에 외부에서 접근하더라도 내용을 확인할 수 없다.
 * 데이터를 복호화할 수 있는 키는 SecureStore에 안전하게 보관되므로, 키에 대한 접근 권한이 없으면 데이터를 복호화할 수 없다.
 * 이 방법은 SecureStore의 크기 제한을 우회하면서도 데이터를 안전하게 보호할 수 있는 효과적인 방법이다.
 */
export class LargeSecureStore {
  private async encrypt(key: string, value: string) {
    // 256비트(32바이트) 크기의 임의의 암호화 키(encryptionKey)를 생성한다.
    // 이 키는 AES-256 암호화에 사용된다.
    const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));

    // AES-CTR (Counter Mode) 암호화 객체(cipher)를 생성한다.
    // 이 객체는 생성된 암호화 키와 초기 카운터 값 1을 사용한다.
    const cipher = new aesjs.ModeOfOperation.ctr(
      encryptionKey,
      new aesjs.Counter(1),
    );

    // 주어진 값(value)을 UTF-8 바이트로 변환한 후 AES-CTR 모드로 암호화한다.
    const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));

    // 생성된 암호화 키를 16진수 문자열로 변환하여 SecureStore에 저장한다.
    await SecureStore.setItemAsync(
      key,
      aesjs.utils.hex.fromBytes(encryptionKey),
    );

    // 암호화된 바이트를 16진수 문자열로 변환하여 반환한다. 이 값은 암호화된 데이터를 나타낸다.
    return aesjs.utils.hex.fromBytes(encryptedBytes);
  }
  private async decrypt(key: string, value: string) {
    // SecureStore에서 주어진 키(key)에 해당하는 암호화 키를 가져온다.
    const encryptionKeyHex = await SecureStore.getItemAsync(key);
    if (!encryptionKeyHex) return encryptionKeyHex;

    // AES-CTR (Counter Mode) 복호화 객체(cipher)를 생성한다.
    // 이 객체는 SecureStore에서 가져온 암호화 키를 16진수 문자열에서 바이트 배열로 변환하여 사용하며, 초기 카운터 값 1을 사용한다.
    const cipher = new aesjs.ModeOfOperation.ctr(
      aesjs.utils.hex.toBytes(encryptionKeyHex),
    );

    // 주어진 암호화된 값(value)을 16진수 문자열에서 바이트 배열로 변환한 후 AES-CTR 모드로 복호화한다.
    const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));

    return aesjs.utils.utf8.fromBytes(decryptedBytes);
  }

  async getItem(key: string) {
    const encrypted = await AsyncStorage.getItem(key);
    if (!encrypted) return encrypted;

    return await this.decrypt(key, encrypted);
  }

  async removeItem(key: string) {
    await AsyncStorage.removeItem(key);
    await SecureStore.deleteItemAsync(key);
  }

  async setItem(key: string, value: string) {
    const encrypted = await this.encrypt(key, value);

    await AsyncStorage.setItem(key, encrypted);
  }
}
