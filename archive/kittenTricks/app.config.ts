import type {
  ConfigContext,
  ExpoConfig,
} from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Meow UI',
  description: 'A Demo React Native Meow UI based application',
  slug: 'meow-ui',
  version: '1.0.0',
  scheme: 'meowui',
  orientation: 'portrait',
  icon: './src/assets/images/image-app-icon.png',
  userInterfaceStyle: 'dark',

  developmentClient: {
    silentLaunch: true,
  },
  newArchEnabled: true,
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'io.vedla.meowui',
    buildNumber: '1',
    // icon: {
    //   dark: './src/assets/icon/ios/Furlab-iOS-Dark-1024x1024@2x.png',
    //   light: './src/assets/icon/ios/Furlab-iOS-Default-1024x1024@2x.png',
    //   tinted: './src/assets/icon/ios//Furlab-iOS-TintedLight-1024x1024@2x.png',
    // },

    config: {
      usesNonExemptEncryption: false,
    },
  },
  android: {
    edgeToEdgeEnabled: true,
    icon: './src/assets/images/image-app-icon.png',
    versionCode: 1,
    // adaptiveIcon: {
    //   foregroundImage:
    //     './src/assets/icon/android/res/mipmap-xxxhdpi/ic_launcher_foreground.png',
    //   backgroundImage:
    //     './src/assets/icon/android/res/mipmap-xxxhdpi/ic_launcher_background.png',
    //   monochromeImage:
    //     './src/assets/icon/android/res/mipmap-xxxhdpi/ic_launcher_monochrome.png',
    // },
    package: 'io.vedla.meowui',
    // permissions: [
    //   'android.permission.USE_BIOMETRIC',
    //   'android.permission.USE_FINGERPRINT',
    //   'android.permission.RECORD_AUDIO',
    //   'android.permission.USE_BIOMETRIC',
    //   'android.permission.USE_FINGERPRINT',
    //   'android.permission.RECORD_AUDIO',
    // ],
  },
  web: {
    // favicon: './src/assets/icon/favicon.png',
    bundler: 'metro',

  },
  extra: { projectId: '1471c27d-44c1-4138-aaf1-f1d776daef5d' },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  owner: 'vedla',
  runtimeVersion: {
    policy: 'appVersion',
  },

  plugins: ['expo-router', 'expo-web-browser'],
});
