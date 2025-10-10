import { tv } from 'tailwind-variants';

import { isWeb } from '@fox-ui/utils';

const baseStyle = isWeb
  ? ''
  : '';

export const TextStyle = tv({
  base: `${baseStyle}`,
  variants: {
    appearance: {
      default: '',
      alternative: '',
      hint: '',
    },
    status: {
      basic: 'text-basic-800',
      primary: 'text-primary',
      success: 'text-success',
      info: 'text-info',
      warning: 'text-warning',
      danger: 'text-danger',
      control: 'text-control',
    },
    category: {
      h1: 'text-5xl font-extrabold',
      h2: 'text-4xl font-extrabold',
      h3: 'text-3xl font-extrabold',
      h4: 'text-2xl font-extrabold',
      h5: 'text-xl font-extrabold',
      h6: 'text-lg font-extrabold',
      s1: 'text-base font-semibold',
      s2: 'text-xs font-semibold',
      p: 'text-base font-normal',
      p1: 'text-base font-normal',
      p2: 'text-xxs font-normal',
      c1: 'text-xxs font-normal',
      c2: 'text-xxs font-semibold',
      label: 'text-xxs font-extrabold',
    }
  },
  compoundVariants: [
    { appearance: 'hint', status: 'basic', class: 'text-basic-600' },
    { appearance: 'alternative', status: 'basic', class: 'text-basic-100' },

  ],
  defaultVariants: {
    appearance: 'default',
    status: 'basic',
    category: 'p1',
  },
});
