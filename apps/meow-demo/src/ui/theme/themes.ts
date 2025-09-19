import { vars } from 'nativewind';

import type { ThemeMap } from '@/types';

import { TW_BIGBADWOLF, TW_FIRENFOX, TW_LIGHTCAT, TW_MIDNIGHTDOG } from './colors';

// Your defaultTheme just becomes part of the full object
export const themesVariables: ThemeMap = {
  dark: TW_MIDNIGHTDOG,
  light: TW_LIGHTCAT,
  'fire-n-fox': TW_FIRENFOX,
  'big-bad-wolf': TW_BIGBADWOLF,
};

export const themes = {
  light: vars(themesVariables.light),
  dark: vars(themesVariables.dark),

  'fire-n-fox': vars(themesVariables['fire-n-fox']),
  'big-bad-wolf': vars(themesVariables['big-bad-wolf']),
};
