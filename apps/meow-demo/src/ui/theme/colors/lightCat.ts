import { hsl } from '../helper';
import { light as DefaultLight } from './light';

export const lightCat = {
  ...DefaultLight,

  /**
   * Background colors
   * **/
  'color-background': '#211a3d',
  'color-body': '#3D1A36',
  'color-surface': '#170c38',
  'color-surface-0': '#130c30',
  'color-surface-10': '#292344',
  'color-surface-20': '#413a59',
  'color-surface-30': '#5a536f',
  'color-surface-40': '#736d86',
  'color-surface-50': '#8e899d',

  /**
   * Basic colors
   * **/
  'color-basic-100': '#E6E3F3',
  'color-basic-200': '#D6D1EB',
  'color-basic-300': '#B6ADDC',
  'color-basic-400': '#9789CD',
  'color-basic-500': '#7765BE',
  'color-basic-600': '#5B48A8',
  'color-basic-700': '#483885',
  'color-basic-800': '#342961',
  'color-basic-900': '#211A3D',
  'color-basic-1000': '#0C0916',
  'color-basic-1100': '#010102',
  /**
   * Primary colors
   * **/
  'color-primary-100': '#F9E2FC',
  'color-primary-200': '#F0C6FA',
  'color-primary-300': '#DEA5F1',
  'color-primary-400': '#C88AE3',
  'color-primary-500': '#A964D1',
  'color-primary-600': '#8649B3',
  'color-primary-700': '#653296',
  'color-primary-800': '#471F79',
  'color-primary-900': '#321364',
  /**
   * Success colors
   * **/
  'color-success-100': '#E8FBD9',
  'color-success-200': '#CCF8B4',
  'color-success-300': '#A5EA8A',
  'color-success-400': '#7ED669',
  'color-success-500': '#4BBC3C',
  'color-success-600': '#30A12B',
  'color-success-700': '#1E8722',
  'color-success-800': '#136D1E',
  'color-success-900': '#0B5A1B',
  /**
   * Info colors
   * **/
  'color-info-100': '#D7FCF9',
  'color-info-200': '#B0FAF8',
  'color-info-300': '#85EBF1',
  'color-info-400': '#64D3E3',
  'color-info-500': '#36B2D1',
  'color-info-600': '#278DB3',
  'color-info-700': '#1B6B96',
  'color-info-800': '#114D79',
  'color-info-900': '#0A3764',
  /**
   * Warning colors
   * **/
  'color-warning-100': '#FFFCD2',
  'color-warning-200': '#FFF9A4',
  'color-warning-300': '#FFF578',
  'color-warning-400': '#FFF256',
  'color-warning-500': '#FFEC1E',
  'color-warning-600': '#DBC815',
  'color-warning-700': '#B7A60F',
  'color-warning-800': '#938409',
  'color-warning-900': '#7A6C05',
  /**
   * Danger colors
   * **/
  'color-danger-100': '#FFE8D5',
  'color-danger-200': '#FFCAAC',
  'color-danger-300': '#FFA682',
  'color-danger-400': '#FF8463',
  'color-danger-500': '#FF4B30',
  'color-danger-600': '#DB2C23',
  'color-danger-700': '#B7181C',
  'color-danger-800': '#930F1D',
  'color-danger-900': '#7A091E',
};

const theme = lightCat;

export const TW_LIGHTCAT = {
  '--background': hsl(theme['color-background']),
  '--body': hsl(theme['color-surface-0']),
  '--surface': hsl(theme['color-surface-0']),
  '--surface-foreground': hsl(theme['color-surface-0']),
  '--surface-0': hsl(theme['color-surface-0']),
  '--surface-10': hsl(theme['color-surface-10']),
  '--surface-20': hsl(theme['color-surface-20']),
  '--surface-30': hsl(theme['color-surface-30']),
  '--surface-40': hsl(theme['color-surface-40']),
  '--surface-50': hsl(theme['color-surface-50']),
};
