import 'dotenv/config';

export default {
  expo: {
    name: 'Exsplash',
    slug: 'expo-unsplash-clone',
    version: '1.0.0',
    owner: 'vigor-13',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.vigor13.expounsplashclone',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#000000',
        softwareKeyboardLayoutMode: 'pan',
      },
      package: 'com.vigor13.expounsplashclone',
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAP_API_KEY,
        },
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      [
        'expo-font',
        {
          fonts: [
            './assets/fonts/Pretendard-Black.otf',
            './assets/fonts/Pretendard-ExtraBold.otf',
            './assets/fonts/Pretendard-Bold.otf',
            './assets/fonts/Pretendard-SemiBold.otf',
            './assets/fonts/Pretendard-Medium.otf',
            './assets/fonts/Pretendard-Regular.otf',
            './assets/fonts/Pretendard-Light.otf',
            './assets/fonts/Pretendard-ExtraLight.otf',
            './assets/fonts/Pretendard-Thin.otf',
          ],
        },
      ],
      'expo-secure-store',
      'expo-asset',
    ],
    extra: {
      eas: {
        projectId: 'eea33eed-684f-45bb-98d0-5326200c4f2c',
      },
    },
  },
};
