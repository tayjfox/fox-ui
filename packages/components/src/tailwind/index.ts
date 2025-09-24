import type { Config } from 'tailwindcss';

import base from './base';

const { hairlineWidth, platformSelect } = require('nativewind/theme');

const BaseTheme = {
  content: base.content,
  presets: [base],
  theme: base.theme,
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: {
  //         100: '#F2F6FF',
  //         200: '#D9E4FF',
  //         300: '#A6C1FF',
  //         400: '#598BFF',
  //         500: '#3366FF',
  //         600: '#274BDB',
  //         700: '#1A34B8',
  //         800: '#102694',
  //         900: '#091C7A',
  //         DEFAULT: '#3366FF',
  //         hover: '#598BFF',
  //         focus: '#274BDB',
  //         active: '#274BDB',
  //         disabled: 'rgba(51,102,255,0.24)',
  //       },
  //       success: {
  //         DEFAULT: '#00E096',
  //         hover: '#51F0B0',
  //         focus: '#00B383',
  //         active: '#00B383',
  //         disabled: 'rgba(0,224,150,0.24)',
  //       },
  //       info: {
  //         DEFAULT: '#0095FF',
  //         hover: '#42AAFF',
  //         focus: '#006FD6',
  //         active: '#006FD6',
  //         disabled: 'rgba(0,149,255,0.24)',
  //       },
  //       warning: {
  //         DEFAULT: '#FFAA00',
  //         hover: '#FFC94D',
  //         focus: '#DB8B00',
  //         active: '#DB8B00',
  //         disabled: 'rgba(255,170,0,0.24)',
  //       },
  //       danger: {
  //         DEFAULT: '#FF3D71',
  //         hover: '#FF708D',
  //         focus: '#DB2C66',
  //         active: '#DB2C66',
  //         disabled: 'rgba(255,61,113,0.24)',
  //       },
  //       // Eva "basic" & "control"
  //       basic: {
  //         100: '#FFFFFF',
  //         200: '#F7F9FC',
  //         300: '#EDF1F7',
  //         400: '#E4E9F2',
  //         500: '#C5CEE0',
  //         600: '#8F9BB3',
  //         700: '#2E3A59',
  //         800: '#222B45', // text-basic-color
  //         900: '#1A2138',
  //         1000: '#151A30',
  //         1100: '#101426',
  //         DEFAULT: '#EDF1F7', // color-basic-default
  //         hover: '#F7F9FC',
  //         focus: '#E4E9F2',
  //         active: '#E4E9F2',
  //         disabled: 'rgba(143,155,179,0.24)',
  //         transparent200: 'rgba(143,155,179,0.16)',
  //         transparent300: 'rgba(143,155,179,0.24)',
  //         transparent600: 'rgba(143,155,179,0.48)', // text-disabled
  //       },
  //       control: {
  //         DEFAULT: '#FFFFFF',
  //         hover: '#F7F9FC',
  //         focus: '#EDF1F7',
  //         active: '#EDF1F7',
  //         disabled: 'rgba(255,255,255,0.24)',
  //       },
  //     },
  //     // Optional: make 10/12/14/16/18px easy
  //     fontSize: {
  //       '10px': '10px',
  //       '12px': '12px',
  //       '14px': '14px',
  //       '16px': '16px',
  //       '18px': '18px',
  //     },
  //     borderRadius: {
  //       // Eva uses token "border-radius"—pick what matches your design
  //       DEFAULT: '8px', // tweak if you want
  //     },
  //     borderWidth: {
  //       DEFAULT: '1px',

  //       hairline: hairlineWidth(), // usage: border-hairline
  //     },
  //   },
  // },
} satisfies Config;

export default BaseTheme;
export { BaseTheme };
