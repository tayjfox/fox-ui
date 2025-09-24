import { isWeb } from '../../platform';
import { tva } from '../../tva';

const baseStyle = isWeb ? 'flex flex-col relative z-0' : '';

export const ContainerStyle = tva({
  base: `px-6 bg-body ${baseStyle} `,
});
