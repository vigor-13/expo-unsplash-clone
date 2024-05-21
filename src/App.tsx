import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Router } from '@/routes';
import { tokens } from '@/ui/themes';
import { QueryClientProvider } from '@/utils/react-query';
import { Prefetch } from './Prefetch';
SplashScreen.preventAutoHideAsync();

export default function App() {
  /**
   * Expo Go에서 커스텀 폰트를 사용하기 위한 임시 코드다.
   *
   * TODO:
   * - 개발 빌드로 전환할 때 제거해야함
   */
  const [fontsLoaded] = useFonts({
    'Pretendard-Black': require('../assets/fonts/Pretendard-Black.otf'),
    'Pretendard-ExtraBold': require('../assets/fonts/Pretendard-ExtraBold.otf'),
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-Light': require('../assets/fonts/Pretendard-Light.otf'),
    'Pretendard-ExtraLight': require('../assets/fonts/Pretendard-ExtraLight.otf'),
    'Pretendard-Thin': require('../assets/fonts/Pretendard-Thin.otf'),
  });

  const defaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: tokens.st.color.neutral[900],
    },
  };

  return (
    fontsLoaded && (
      <QueryClientProvider>
        <NavigationContainer theme={defaultTheme}>
          <Prefetch>
            <Router />
          </Prefetch>
        </NavigationContainer>
      </QueryClientProvider>
    )
  );
}
