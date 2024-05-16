import "react-native-gesture-handler";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Router } from "@/routes";

export default function App() {
  /**
   * Expo Go에서 커스텀 폰트를 사용하기 위한 임시 코드다.
   *
   * TODO:
   * - 개발 빌드로 전환할 때 제거해야함
   */
  const [fontsLoaded] = useFonts({
    "Pretendard-Regular": require("../assets/fonts/Pretendard-Regular.otf"),
  });

  return (
    fontsLoaded && (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    )
  );
}
