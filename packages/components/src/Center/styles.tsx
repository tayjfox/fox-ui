import { tv } from 'tailwind-variants';

import { isWeb } from '@fox-ui/utils';

const baseStyle = isWeb ? 'flex flex-col relative z-0' : '';

export const CenterStyle = tv({
  base: `justify-center items-center ${baseStyle}`,
});
