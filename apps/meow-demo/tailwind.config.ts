// @ts-expect-error - no types
import nativewind from 'nativewind/preset';
import type { Config } from 'tailwindcss';

import { BaseContent, BaseTheme } from '@fox-ui/components/theme';

export default initFoxUI({
  content: ['./src/**/*.{mjs,js,jsx,ts,tsx}', ...BaseContent],
  presets: [BaseTheme, nativewind],
  theme: BaseTheme.theme,
}) satisfies Config;

function initFoxUI($config: Config) {
  return $config;
}
