import 'expo-dev-client';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Router } from '@/routes';
import { tokens } from '@/ui/themes';
import { QueryClientProvider, useReactQuery } from '@/utils/react-query';
import { useSupabase } from '@/utils/supabase';
import { Prefetch } from './Prefetch';
import { StatusBar } from 'expo-status-bar';
SplashScreen.preventAutoHideAsync();

export default function App() {
  /**
   * Expo Go에서 커스텀 폰트를 사용하기 위한 임시 코드다.
   *
   * TODO:
   * - 개발 빌드로 전환할 때 제거해야함
   */
  // const [fontsLoaded] = useFonts({
  //   'Pretendard-Black': require('../assets/fonts/Pretendard-Black.otf'),
  //   'Pretendard-ExtraBold': require('../assets/fonts/Pretendard-ExtraBold.otf'),
  //   'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
  //   'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf'),
  //   'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.otf'),
  //   'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.otf'),
  //   'Pretendard-Light': require('../assets/fonts/Pretendard-Light.otf'),
  //   'Pretendard-ExtraLight': require('../assets/fonts/Pretendard-ExtraLight.otf'),
  //   'Pretendard-Thin': require('../assets/fonts/Pretendard-Thin.otf'),
  // });

  const defaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: tokens.st.color.neutral[950],
    },
  };

  useReactQuery();
  useSupabase();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider>
        <BottomSheetModalProvider>
          <NavigationContainer theme={defaultTheme}>
            <Prefetch>
              <StatusBar backgroundColor={tokens.st.color.neutral[950]} />
              <Router />
            </Prefetch>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
