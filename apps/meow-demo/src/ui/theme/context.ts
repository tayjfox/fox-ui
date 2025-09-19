import { createContext, useContext } from 'react';

import { Appearance } from 'react-native';

import { ThemeContextProps } from '@/types';

/**
 * The context creation with some default properties.
 */
export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  systemTheme: Appearance.getColorScheme() === 'light' ? 'light' : 'dark',
  systemEnabled: true,
} as ThemeContextProps);

/**
 * A hook to use the theme provider functions and properties.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
