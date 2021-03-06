export default {
  expo: {
    name: 'sahayak',
    slug: 'sahayak',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 2,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      bundleIdentifier: 'com.zaid.sahayak',
      buildNumber: '1.0.0',
      supportsTablet: true,
    },
    android: {
      package: 'com.zaid.sahayak',
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
  },
  assets: ['fonts'],
};
