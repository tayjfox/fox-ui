import { tv } from 'tailwind-variants';

import { isWeb } from '@kits-ui/utils';

const baseStyle = isWeb ? 'flex flex-col relative z-0' : '';

export const ContainerStyle = tv({
  base: `px-6 bg-body ${baseStyle} `,
});
