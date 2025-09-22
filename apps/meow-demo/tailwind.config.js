const { hairlineWidth, platformSelect } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{mjs,js,jsx,ts,tsx}',
    '../../packages/components/src/**/*.{mjs,js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugin: {
    backgroundOpacity: true,
  },
};

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return platformSelect({
        ios: `hsl(var(--${variableName}) / ${opacityValue})`,
        android: `hsl(var(--android-${variableName}) / ${opacityValue})`,
      });
    }
    return platformSelect({
      ios: `hsl(var(--${variableName}))`,
      android: `hsl(var(--android-${variableName}))`,
    });
  };
}
