import 'react-native-reanimated';
import '../global.css';

import React from 'react';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppIconsPack } from '@/components/app-icons-pack';
import {
  AppLoading,
  LoadFontsTask,
  Task,
} from '@/components/app-loading.component';
import { SplashImage } from '@/components/splash-image.component.ex';
import {
  appMappings,
  appThemes,
} from '@/constants/app-theming';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AppStorage } from '@/services/app-storage.service';
// import { StatusBar } from 'expo-status-bar';
import {
  ApplicationProvider,
  IconRegistry,
} from '@fox-ui/components';
import { EvaIconsPack } from '@meow-ui/eva-icons';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';

import {
  Mapping,
  Theme,
  Theming,
} from '../services/theme.service';

export { ErrorBoundary } from 'expo-router';
export const unstable_settings = {
  anchor: '(tabs)',
};

const loadingTasks: Task[] = [
  () =>
    LoadFontsTask({
      'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
      'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),
    }),
  () =>
    AppStorage.getMapping(defaultConfig.mapping).then(result => [
      'mapping',
      result,
    ]),
  () =>
    AppStorage.getTheme(defaultConfig.theme).then(result => ['theme', result]),
];

const defaultConfig: { mapping: Mapping; theme: Theme } = {
  mapping: 'eva',
  theme: 'light',
};

const Splash = ({ loading }): React.ReactElement => (
  <SplashImage
    loading={loading}
    source={require('../assets/images/image-splash.png')}
  />
);

export default (): React.ReactElement => (
  <AppLoading
    tasks={loadingTasks}
    initialConfig={defaultConfig}
    placeholder={Splash}>
    {props => <RootLayout {...props} />}
  </AppLoading>
);

export function RootLayout({ mapping, theme }) {
  const colorScheme = useColorScheme();

  const [mappingContext, currentMapping] = Theming.useMapping(
    appMappings,
    mapping,
  );
  const [themeContext, currentTheme] = Theming.useTheming(
    appThemes,
    mapping,
    theme,
  );
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ApplicationProvider {...currentMapping} theme={currentTheme}>
          <Theming.MappingContext.Provider value={mappingContext}>
            <Theming.ThemeContext.Provider value={themeContext}>
              <SafeAreaProvider>
                <AppLayout />
              </SafeAreaProvider>
            </Theming.ThemeContext.Provider>
          </Theming.MappingContext.Provider>
        </ApplicationProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export function AppLayout() {
  // const { fontsLoaded, fontError } = LoadFonts();

  // useEffect(() => {
  //   if (fontError) throw fontError;
  // }, [fontError]);

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded ) {
  //   return <Loading />;
  // }

  return (
    <GestureHandlerRootView>
      <AppProviders />
    </GestureHandlerRootView>
  );
}

function AppProviders() {

  const SCREEN_OPTIONS = { headerShown: false } as const;


  return (
    // <View className='h-full flex-1 bg-body'>
    <Stack screenOptions={SCREEN_OPTIONS} />
    // </View>
  );
}
