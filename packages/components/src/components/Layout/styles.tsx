import { tv } from 'tailwind-variants';

import { isWeb } from '../../platform';

const baseStyle = isWeb ? '' : '';

export const LayoutStyle = tv({
  base: `px-6 bg-body ${baseStyle} `,
  variants: {
    level: {
      '1': 'bg-basic-100',
      '2': 'bg-basic-200',
      '3': 'bg-basic-300',
      '4': 'bg-basic-400',
    },
  },
  defaultVariants: {
    level: '1',
  },
});
