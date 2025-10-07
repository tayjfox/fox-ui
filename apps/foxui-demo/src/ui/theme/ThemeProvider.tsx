import React, {
  memo,
  useState,
} from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  Appearance,
  View,
} from 'react-native';

import {
  ThemeProps,
  ThemesVariants,
} from '@/types';
import {
  ApplicationProvider,
  IconRegistry,
} from '@fox-ui/components';
import { EvaIconsPack } from '@fox-ui/icons';
import * as eva from '@fox-ui/themes';

import { ThemeContext } from './context';

/**
 * Provides all the theme colors and variables for the app based on the themes inside the `./index.ts` file.
 */
const TheThemeProvider = ({ children, className, ...props }: ThemeProps) => {
  const colorScheme = Appearance.getColorScheme();
  const userPreferedTheme = colorScheme === 'light' ? 'light' : 'dark';

  const [theTheme, setTheme] = useState<ThemesVariants | null>(userPreferedTheme);



  return (
    // <ApplicationProvider mapping={eva.mapping as any} theme={evaTheme}>
    <ApplicationProvider {...eva as any} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <View

        className="flex-1"
        {...props}>
        <StatusBar
          style={theTheme === 'light' ? 'dark' : 'light'}

        />
        <ThemeContext.Provider
          value={{
            theme: theTheme || userPreferedTheme,
            systemTheme: userPreferedTheme,
            systemEnabled: true,
          }}>
          {children}
        </ThemeContext.Provider>
      </View>
    </ApplicationProvider>

  );
};

export const ThemeProvider = memo(TheThemeProvider);

