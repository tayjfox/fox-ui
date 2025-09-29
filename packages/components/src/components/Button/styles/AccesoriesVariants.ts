// styles/button.variants.ts
import { tva } from '../../../tva';

/**
 * Icon tint matches text rules.
 * Use together with size-specific width/height if you want (Eva sets 12/16/20/24).
 */
export const AccesoriesVariants = tva({
  base: '',
  variants: {
    appearance: {
      filled: 'fill-basic-100',
      outline: '',
      ghost: '',
    },
    status: {
      basic: '',
      primary: '',
      success: '',
      info: '',
      warning: '',
      danger: '',
      control: '',
    },
    size: {
      tiny: 'w-3 h-3 mx-1.5',
      small: 'w-4 h-4 mx-2',
      medium: 'w-5 h-5 mx-2.5', // 20px
      large: 'w-6 h-6 mx-2.5',
      giant: 'w-6 h-6 mx-3',
    },
    state: {
      default: '',
      focused: '',
      hover: '',
      active: '',
      disabled: '',
    },
  },
  compoundVariants: [
    { appearance: 'filled', status: 'basic', class: 'fill-basic-800' },
    { appearance: 'filled', status: 'control', class: 'fill-basic-800' },

    { appearance: 'outline', status: 'basic', class: 'fill-basic-700' },
    { appearance: 'outline', status: 'primary', class: 'fill-primary' },
    { appearance: 'outline', status: 'success', class: 'fill-success' },
    { appearance: 'outline', status: 'info', class: 'fill-info' },
    { appearance: 'outline', status: 'warning', class: 'fill-warning' },
    { appearance: 'outline', status: 'danger', class: 'fill-danger' },
    { appearance: 'outline', status: 'control', class: 'fill-white' },

    { appearance: 'ghost', status: 'basic', class: 'fill-basic-700' },
    { appearance: 'ghost', status: 'primary', class: 'fill-primary' },
    { appearance: 'ghost', status: 'success', class: 'fill-success' },
    { appearance: 'ghost', status: 'info', class: 'fill-info' },
    { appearance: 'ghost', status: 'warning', class: 'fill-warning' },
    { appearance: 'ghost', status: 'danger', class: 'fill-danger' },
    { appearance: 'ghost', status: 'control', class: 'fill-white' },

    { state: 'disabled', class: 'fill-basic-transparent-600' },
  ],
  defaultVariants: {
    appearance: 'filled',
    status: 'primary',
    size: 'medium',
    state: 'default',
  },
});
