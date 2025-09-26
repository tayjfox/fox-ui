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
      filled: 'text-basic-100',
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
    { appearance: 'filled', status: 'basic', class: 'text-basic-800' },
    { appearance: 'filled', status: 'control', class: 'text-basic-800' },

    { appearance: 'outline', status: 'basic', class: 'text-basic-700' },
    { appearance: 'outline', status: 'primary', class: 'text-primary' },
    { appearance: 'outline', status: 'success', class: 'text-success' },
    { appearance: 'outline', status: 'info', class: 'text-info' },
    { appearance: 'outline', status: 'warning', class: 'text-warning' },
    { appearance: 'outline', status: 'danger', class: 'text-danger' },
    { appearance: 'outline', status: 'control', class: 'text-white' },

    { appearance: 'ghost', status: 'basic', class: 'text-basic-700' },
    { appearance: 'ghost', status: 'primary', class: 'text-primary' },
    { appearance: 'ghost', status: 'success', class: 'text-success' },
    { appearance: 'ghost', status: 'info', class: 'text-info' },
    { appearance: 'ghost', status: 'warning', class: 'text-warning' },
    { appearance: 'ghost', status: 'danger', class: 'text-danger' },
    { appearance: 'ghost', status: 'control', class: 'text-white' },

    { state: 'disabled', class: 'text-basic-transparent-600' },
  ],
  defaultVariants: {
    appearance: 'filled',
    status: 'primary',
    size: 'medium',
    state: 'default',
  },
});
