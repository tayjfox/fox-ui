const { hairlineWidth, platformSelect } = require('nativewind/theme');

let generated = {};
try {
  generated = require('./tailwind.theme.generated.js');
} catch {}

console.log('Using generated theme:', Object.keys(generated).length, 'keys');

module.exports = {
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      ...(generated || {}),
      borderWidth: { hairline: hairlineWidth() },
    },
  },
  corePlugins: {
    backgroundOpacity: true,
  },
  plugins: [],
};
