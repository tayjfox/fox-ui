// styles/button.variants.ts
import { tva } from '../../../tva';

/**
 * Text (label) colour + size
 * Matches Eva's textColor per appearance/status/state.
 */
export const TextVariants = tva({
  base: 'font-bold',
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
      tiny: 'px-[6px] py-[6px]',
      small: 'px-2 py-2',
      medium: 'px-[10px] py-3',
      large: 'px-[10px] py-[14px]',
      giant: 'px-3 py-4',
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
