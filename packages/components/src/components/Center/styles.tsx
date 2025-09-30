import { tv } from 'tailwind-variants';

import { isWeb } from '../../platform';

const baseStyle = isWeb ? 'flex flex-col relative z-0' : '';

export const CenterStyle = tv({
  base: `justify-center items-center ${baseStyle}`,
});
