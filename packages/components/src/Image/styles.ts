import { tv } from 'tailwind-variants';

import { isWeb } from '@fox-ui/utils';

const baseStyle = isWeb ? 'outline-0' : '';

export const ImageStyle = tv({
  base: `${baseStyle} flex-row items-center px-2 py-3 bg-basic-100`,
  variants: {
    state: {
      active: 'bg-basic-transparent-300',
    },
  },
});
