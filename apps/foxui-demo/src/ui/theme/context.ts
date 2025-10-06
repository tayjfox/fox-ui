import { createContext, useContext } from 'react';

import { ThemeContextProps } from '@/types';

/**
 * The context creation with some default properties.
 */
export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
} as ThemeContextProps);

/**
 * A hook to use the theme provider functions and properties.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
