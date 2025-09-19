import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import {
  Appearance,
  View,
} from 'react-native';

import { storage } from '@/hooks';
import {
  SystemThemesVariants,
  ThemeProps,
  ThemesVariables,
  ThemesVariants,
} from '@/types';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import {
  furlabThemes,
  themeMapping,
} from './colors';
import { ThemeContext } from './context';
import { themesVariables } from './themes';

/**
 * Provides all the theme colors and variables for the app based on the themes inside the `./index.ts` file.
 */
const TheThemeProvider = ({ children, className, ...props }: ThemeProps) => {
  const colorScheme = Appearance.getColorScheme();
  const userPreferedTheme = colorScheme === 'light' ? 'light' : 'dark';

  const [theme, setTheme] = useState<ThemesVariants | null>(userPreferedTheme);
  const [systemEnabled, setSystemEnabled] = useState<boolean>(true);
  const [systemTheme, setSystemTheme] = useState<SystemThemesVariants>(userPreferedTheme);

  const { setColorScheme } = useColorScheme();

  console.log('User preferred style:', colorScheme);
  useEffect(
    useCallback(() => {
      const storedTheme = storage.getString('user-themed');
      console.log('Stored theme:', storedTheme, typeof storedTheme);
      if (storedTheme === 'light' || storedTheme === 'dark') {
        setTheme(storedTheme as ThemesVariants);
        setSystemEnabled(false);
      } else {
        setTheme(userPreferedTheme);
        setSystemEnabled(true);
      }
    }, []),
    []
  );

  const contextValue = useMemo(
    () => ({ theme, systemEnabled, systemTheme }),
    [theme, systemEnabled, systemTheme]
  );

  Appearance.addChangeListener((listener) => {
    const storedTheme = storage.getString('user-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') return;

    if (systemEnabled) {
      if (listener.colorScheme === 'light' || listener.colorScheme === 'dark') {
        setTheme(listener.colorScheme);
      }
    }
  });

  useEffect(() => {
    const appearanceListener = Appearance.addChangeListener(({ colorScheme }) => {
      if (systemEnabled) {
        const newTheme = colorScheme === 'light' || colorScheme === 'dark' ? colorScheme : 'light';
        setTheme(newTheme);
        setSystemTheme(newTheme);
        setColorScheme(newTheme);
      }
    });

    return () => {
      appearanceListener.remove();
    };
  }, [systemEnabled, setColorScheme]);

  useEffect(() => {
    const updateNativeWindColorScheme = () => {
      const appScheme: 'light' | 'dark' = systemEnabled
        ? (Appearance.getColorScheme() ?? 'light')
        : (themeMapping[theme ?? 'light'] ?? 'light') as 'light' | 'dark';
      setColorScheme(appScheme);
    };

    updateNativeWindColorScheme();
  }, [theme, systemEnabled, setColorScheme]);

  useEffect(() => {
    const mappedTheme =
      theme === 'system'
        ? 'system'
        : (themeMapping[theme ?? 'light'] as 'light' | 'dark') ?? 'light';
    setColorScheme(mappedTheme);
  }, [theme]);

  /**
   * Use this function to get the color for a certain variable and use it as a string.
   *
   * @param cssVariable Pass the CSS variable that you want to get the color from.
   * @returns A string with the color using hsl like this: `hsl(`*`n`* *`n`* *`n`*`%)`
   */
  const getThemeColorByVariable = useCallback(
    (colorKey: ThemesVariables) => {
      return theme === 'system'
        ? `hsl(${themesVariables[systemTheme ?? 'light'][`--${colorKey}`]})`
        : theme
          ? `hsl(${themesVariables[theme][`--${colorKey}`]})`
          : '';
    },
    [theme]
  );

  /**
   * Use this function to get the color for a certain variable and use it as a string.
   *
   * @param cssVariable Pass the CSS variable that you want to get the color from.
   * @param alpha The opacity of the color from 0 to 1 (0 = 0% and 1 = 100%).
   * @returns A string with the color using hsl like this: `hsla(`*`n`* *`n`* *`n`*`% *`a`*)`
   */
  const getThemeColorByVariableAndAlpha = useCallback(
    (colorKey: ThemesVariables, alpha: number) => {
      return theme === 'system'
        ? `hsla(${themesVariables[systemTheme ?? 'light'][`--${colorKey}`]?.replaceAll(' ', ', ') ?? ''}, ${alpha})`
        : theme
          ? `hsla(${themesVariables[theme][`--${colorKey}`]?.replaceAll(' ', ', ') ?? ''}, ${alpha})`
          : '';
    },
    [theme, systemTheme]
  );

  const handleThemeSwitch = useCallback(
    (newTheme: ThemesVariants) => {
      if (newTheme === 'system') {
        setSystemEnabled(true);
        setTheme(Appearance.getColorScheme() === 'light' ? 'light' : 'dark');
        setSystemTheme(Appearance.getColorScheme() === 'light' ? 'light' : 'dark');
        storage.set('user-theme', 'light');
      } else {
        setSystemEnabled(false);
        setTheme(newTheme);
        storage.set('user-theme', newTheme);
      }
    },
    [setSystemEnabled, setTheme, setSystemTheme]
  );

  let appTheme = [];
  if (theme) {
    appTheme =
      theme === 'system'
        ? furlabThemes['dark']
        : furlabThemes[theme === 'light' ? 'light' : theme] || furlabThemes['light'];
  }
  const evaThemeKey: 'light' | 'dark' =
    theme === 'system'
      ? systemTheme === 'light'
        ? 'light'
        : 'dark'
      : theme === 'light'
        ? 'light'
        : 'dark';

  const evaTheme = {
    ...eva[evaThemeKey],
    ...appTheme,
  };

  console.log('Current theme:', appTheme);
  // console.log('Current theme:', theme, systemEnabled, systemTheme, evaThemeKey);

  console.log(theme === 'system'
    ? (furlabThemes as any)[systemTheme ?? 'dark']
    : (furlabThemes as any)[theme ?? userPreferedTheme])

  return theme ? (
    <ApplicationProvider mapping={eva.mapping as any} theme={evaTheme}>
      <IconRegistry icons={EvaIconsPack} />
      <View
        style={
          theme === 'system'
            ? (furlabThemes as any)[systemTheme ?? 'dark']
            : (furlabThemes as any)[theme]
        }
        className="flex-1"
        {...props}>
        <StatusBar
          style={theme === 'light' ? 'dark' : 'light'}
          backgroundColor={getThemeColorByVariable('background')}
        />
        <ThemeContext.Provider
          value={{
            systemEnabled: contextValue.systemEnabled,
            systemTheme: contextValue.systemTheme,
            theme: contextValue.theme ?? 'dark',
            getThemeColorByVariable,
            getThemeColorByVariableAndAlpha,
            handleThemeSwitch,
          }}>
          {children}
        </ThemeContext.Provider>
      </View>
    </ApplicationProvider>
  ) : (
    <></>
  );
};

export const ThemeProvider = memo(TheThemeProvider);

