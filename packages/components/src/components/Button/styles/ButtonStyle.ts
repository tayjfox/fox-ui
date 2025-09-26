// styles/button.variants.ts
import { tva } from '../../../tva';

/**
 * Container (background + border)
 * Mirrors appearance → status → state mapping from Eva.
 */
export const ButtonStyle = tva({
  base: 'flex-row items-center justify-center rounded border',
  variants: {
    appearance: {
      filled: '',
      outline: '',
      ghost: 'border-0',
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
      tiny: 'min-w-6 min-h-6 p-1.5',
      small: 'min-w-8 min-h-8 p-2',
      medium: 'min-w-10 min-h-10 px-[10px] py-[12px]',
      large: 'min-w-12 min-h-12 px-2.5 py-3.5',
      giant: 'min-w-14 min-h-14 px-3 py-4',
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
    {
      appearance: 'filled',
      status: 'primary',
      state: 'default',
      class: 'bg-primary border-primary',
    },
    {
      appearance: 'filled',
      status: 'primary',
      state: 'focused',
      class: 'bg-primary-focus border-primary-700',
    },
    {
      appearance: 'filled',
      status: 'primary',
      state: 'hover',
      class: 'bg-primary-hover border-primary-hover',
    },
    {
      appearance: 'filled',
      status: 'primary',
      state: 'active',
      class: 'bg-primary-active border-primary-active',
    },
    {
      appearance: 'filled',
      status: 'primary',
      state: 'disabled',
      class: 'bg-basic-transparent-300 border-basic-transparent-300',
    },

    {
      appearance: 'filled',
      status: 'success',
      state: 'default',
      class: 'bg-success border-success',
    },
    {
      appearance: 'filled',
      status: 'success',
      state: 'focused',
      class: 'bg-success-focus border-success-700]',
    },
    {
      appearance: 'filled',
      status: 'success',
      state: 'hover',
      class: 'bg-success-hover border-success-hover',
    },
    {
      appearance: 'filled',
      status: 'success',
      state: 'active',
      class: 'bg-success focus:border-success',
    },
    {
      appearance: 'filled',
      status: 'success',
      state: 'disabled',
      class: 'bg-basic-transparent-300 border-basic-transparent-300',
    },

    { appearance: 'filled', status: 'info', state: 'default', class: 'bg-info border-info' },
    {
      appearance: 'filled',
      status: 'info',
      state: 'focused',
      class: 'bg-info-focus border-info-700',
    },
    {
      appearance: 'filled',
      status: 'info',
      state: 'hover',
      class: 'bg-info-hover border-info-hover',
    },
    {
      appearance: 'filled',
      status: 'info',
      state: 'active',
      class: 'bg-info-active border-info-active',
    },
    {
      appearance: 'filled',
      status: 'info',
      state: 'disabled',
      class: 'bg-basic-transparent-300 border-basic-transparent-300',
    },

    {
      appearance: 'filled',
      status: 'warning',
      state: 'default',
      class: 'bg-warning border-warning',
    },
    {
      appearance: 'filled',
      status: 'warning',
      state: 'focused',
      class: 'bg-warning-focus border-warning-700',
    },
    {
      appearance: 'filled',
      status: 'warning',
      state: 'hover',
      class: 'bg-warning-hover border-warning-hover',
    },
    {
      appearance: 'filled',
      status: 'warning',
      state: 'active',
      class: 'bg-warning-active border-warning-active',
    },
    {
      appearance: 'filled',
      status: 'warning',
      state: 'disabled',
      class: 'bg-basic-transparent-300 border-basic-transparent-300',
    },

    {
      appearance: 'filled',
      status: 'danger',
      state: 'default',
      class: 'bg-danger border-danger',
    },
    {
      appearance: 'filled',
      status: 'danger',
      state: 'focused',
      class: 'bg-danger-focus border-danger-700',
    },
    {
      appearance: 'filled',
      status: 'danger',
      state: 'hover',
      class: 'bg-danger-hover border-danger-hover',
    },
    {
      appearance: 'filled',
      status: 'danger',
      state: 'active',
      class: 'bg-danger-active border-danger-active',
    },
    {
      appearance: 'filled',
      status: 'danger',
      state: 'disabled',
      class: 'bg-basic-transparent-300 border-basic-transparent-300',
    },

    {
      appearance: 'filled',
      status: 'basic',
      state: 'default',
      class: 'bg-basic border-basic',
    },
    {
      appearance: 'filled',
      status: 'basic',
      state: 'focused',
      class: 'bg-basic-focus border-basic-500',
    },
    {
      appearance: 'filled',
      status: 'basic',
      state: 'hover',
      class: 'bg-basic-hover border-basic-hover',
    },
    {
      appearance: 'filled',
      status: 'basic',
      state: 'active',
      class: 'bg-basic-active border-basic-active',
    },
    {
      appearance: 'filled',
      status: 'basic',
      state: 'disabled',
      class: 'bg-basic-transparent-300 border-basic-transparent-300',
    },

    {
      appearance: 'filled',
      status: 'control',
      state: 'default',
      class: 'bg-control-default border-basic-transparent-100',
    },
    {
      appearance: 'filled',
      status: 'control',
      state: 'focused',
      class: 'bg-control-focus border-basic-500',
    },
    {
      appearance: 'filled',
      status: 'control',
      state: 'hover',
      class: 'bg-control-hover border-control-hover',
    },
    {
      appearance: 'filled',
      status: 'control',
      state: 'active',
      class: 'bg-control-active border-control-active',
    },
    {
      appearance: 'filled',
      status: 'control',
      state: 'disabled',
      class: 'bg-control-disabled border-control-disabled',
    },

    {
      appearance: 'outline',
      status: 'primary',
      state: 'default',
      class: 'border-primary text-primary bg-primary-transparent-100',
    },
    {
      appearance: 'outline',
      status: 'primary',
      state: 'focused',
      class: 'border-primary-500 bg-primary-transparent-300 text-primary',
    },
    {
      appearance: 'outline',
      status: 'primary',
      state: 'hover',
      class: 'border-primary-500 bg-primary-transparent-200 text-primary',
    },
    {
      appearance: 'outline',
      status: 'primary',
      state: 'active',
      class: 'border-primary-500 bg-primary-transparent-300 text-primary',
    },
    {
      appearance: 'outline',
      status: 'primary',
      state: 'disabled',
      class: 'border-basic-transparent-300 bg-basic-transparent-200 text-basic-transparent-600',
    },

    {
      appearance: 'outline',
      status: 'success',
      state: 'default',
      class: 'border-success text-success bg-success-transparent-100',
    },
    {
      appearance: 'outline',
      status: 'success',
      state: 'focused',
      class: 'border-success-500 bg-success-transparent-300 text-success',
    },
    {
      appearance: 'outline',
      status: 'success',
      state: 'hover',
      class: 'border-success-500 bg-success-transparent-200 text-success',
    },
    {
      appearance: 'outline',
      status: 'success',
      state: 'active',
      class: 'border-success-500 bg-success-transparent-300 text-success',
    },
    {
      appearance: 'outline',
      status: 'success',
      state: 'disabled',
      class: 'border-basic-transparent-300 bg-basic-transparent-200 text-basic-transparent-600',
    },

    {
      appearance: 'outline',
      status: 'info',
      state: 'default',
      class: 'border-info text-info bg-info-transparent-100',
    },
    {
      appearance: 'outline',
      status: 'info',
      state: 'focused',
      class: 'border-info-500 bg-info-transparent-300 text-info',
    },
    {
      appearance: 'outline',
      status: 'info',
      state: 'hover',
      class: 'border-info-500 bg-info-transparent-200 text-info',
    },
    {
      appearance: 'outline',
      status: 'info',
      state: 'active',
      class: 'border-info-500 bg-info-transparent-300 text-info',
    },
    {
      appearance: 'outline',
      status: 'info',
      state: 'disabled',
      class: 'border-basic-transparent-300 bg-basic-transparent-200 text-basic-transparent-600',
    },

    {
      appearance: 'outline',
      status: 'warning',
      state: 'default',
      class: 'border-warning text-warning bg-warning-transparent-100',
    },
    {
      appearance: 'outline',
      status: 'warning',
      state: 'focused',
      class: 'border-warning-500 bg-warning-transparent-300 text-warning',
    },
    {
      appearance: 'outline',
      status: 'warning',
      state: 'hover',
      class: 'border-warning-500 bg-warning-transparent-200 text-warning',
    },
    {
      appearance: 'outline',
      status: 'warning',
      state: 'active',
      class: 'border-warning-500 bg-warning-transparent-300 text-warning',
    },
    {
      appearance: 'outline',
      status: 'warning',
      state: 'disabled',
      class: 'border-basic-transparent-300 bg-basic-transparent-200 text-basic-transparent-600',
    },

    {
      appearance: 'outline',
      status: 'danger',
      state: 'default',
      class: 'border-danger text-danger bg-danger-transparent-100',
    },
    {
      appearance: 'outline',
      status: 'danger',
      state: 'focused',
      class: 'border-danger-500 bg-danger-transparent-300 text-danger',
    },
    {
      appearance: 'outline',
      status: 'danger',
      state: 'hover',
      class: 'border-danger-500 bg-danger-transparent-200 text-danger',
    },
    {
      appearance: 'outline',
      status: 'danger',
      state: 'active',
      class: 'border-danger-500 bg-danger-transparent-300 text-danger',
    },
    {
      appearance: 'outline',
      status: 'danger',
      state: 'disabled',
      class: 'border-basic-transparent-300 bg-basic-transparent-200 text-basic-transparent-600',
    },

    {
      appearance: 'outline',
      status: 'basic',
      state: 'default',
      class: 'border-basic-600 text-basic-600 bg-basic-transparent-100',
    },
    {
      appearance: 'outline',
      status: 'basic',
      state: 'focused',
      class: 'border-basic-600 bg-basic-transparent-300 text-basic-600',
    },
    {
      appearance: 'outline',
      status: 'basic',
      state: 'hover',
      class: 'border-basic-600 bg-basic-transparent-200 text-basic-600',
    },
    {
      appearance: 'outline',
      status: 'basic',
      state: 'active',
      class: 'border-basic-600 bg-basic-transparent-300 text-basic-600',
    },
    {
      appearance: 'outline',
      status: 'basic',
      state: 'disabled',
      class: 'border-basic-transparent-300 bg-basic-transparent-200 text-basic-transparent-600',
    },

    {
      appearance: 'outline',
      status: 'control',
      state: 'default',
      class: 'border-white/100 text-white bg-control-transparent-100',
    },
    {
      appearance: 'outline',
      status: 'control',
      state: 'focused',
      class: 'border-white/100 bg-control-transparent-300 text-white',
    },
    {
      appearance: 'outline',
      status: 'control',
      state: 'hover',
      class: 'border-white/100 bg-control-transparent-200 text-white',
    },
    {
      appearance: 'outline',
      status: 'control',
      state: 'active',
      class: 'border-white/100 bg-control-transparent-300 text-white',
    },
    {
      appearance: 'outline',
      status: 'control',
      state: 'disabled',
      class: 'border-basic-transparent-300 bg-basic-transparent-200 text-basic-transparent-600',
    },

    { appearance: 'ghost', state: 'hover', class: 'bg-basic-transparent-100' },
    { appearance: 'ghost', state: 'focused', class: 'bg-basic-transparent-200' },
    { appearance: 'ghost', state: 'active', class: 'bg-basic-transparent-200' },
    { appearance: 'ghost', state: 'disabled', class: 'bg-basic-transparent-200' },
  ],
  defaultVariants: {
    appearance: 'filled',
    status: 'primary',
    size: 'medium',
    state: 'default',
  },
});
