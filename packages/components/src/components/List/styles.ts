import { isWeb } from '../../platform';
import { tva } from '../../tva';

const baseStyle = isWeb ? 'flex-row align-center' : '';

export const ContainerStyle = tva({
  base: `${baseStyle} `,
});

export const TitleStyle = tva({
  base: `text-left`,
});

export const DescriptionStyle = tva({
  base: `text-left`,
});
export const IconStyle = tva({
  base: `w-6 h-6 mx-2 text-red-600 fill-red-600`,
});
