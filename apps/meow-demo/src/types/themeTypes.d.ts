import { Appearance, View, ViewProps } from 'react-native';

export type ThemesVariants = 'system' | 'light' | 'dark' | 'fire-n-fox' | 'big-bad-wolf';

// CSS variable map
export type ThemeSection = {
  [cssVar: `--${string}`]: string;
};

// Map all variants except "system" to a ThemeSection
export type ThemeMap = {
  [K in Exclude<ThemesVariants, 'system'>]: ThemeSection;
};

/**
 * This are the possible variables to choose from your theme,
 * this is used to get the color by the variable name in the `getThemeColorByVariable`
 * and `getThemeColorByVariableAndAlpha` functions, that are set in the theme provider.
 */
export type ThemesVariables = 'background' | 'body';
// | 'foreground'
// | 'primary'
// | 'primary-foreground'
// | 'secondary'
// | 'secondary-foreground'
// | 'accent'
// | 'accent-foreground'
// | 'muted'
// | 'muted-foreground'
// | 'popover'
// | 'popover-foreground'
// | 'destructive'
// | 'destructive-foreground'
// | 'input';

/**
 * The system theme which is always dark, light or a custom theme in the app.
 */
export type SystemThemesVariants = 'dark' | 'light' | undefined;

/**
 * These are the properties and functions that will be provided from our theme provider.
 */
export type ThemeContextProps = {
  theme: ThemesVariants;
  systemTheme: SystemThemesVariants;
  systemEnabled: boolean;
  handleThemeSwitch: (newTheme: ThemesVariants) => void;
  getThemeColorByVariable: (colorKey: ThemesVariables) => string;
  getThemeColorByVariableAndAlpha: (colorKey: ThemesVariables, alpha: number) => string;
};

export type ThemeProps = ViewProps & {
  className?: string; // NativeWind extension
};
