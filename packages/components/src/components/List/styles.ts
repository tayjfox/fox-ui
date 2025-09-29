import { isWeb } from '../../platform';
import { tva } from '../../tva';

const baseStyle = isWeb ? 'outline-0' : '';

export const ContainerStyle = tva({
  base: `${baseStyle} flex-row items-center px-2 py-3 bg-basic-100`,
  variants: {
    state: {
      active: 'bg-basic-transparent-300',
    },
  },
});

export const TitleStyle = tva({
  base: 'mx-2 text-base font-semibold text-basic-800 text-left',
});

export const DescriptionStyle = tva({
  base: 'mx-2 text-left text-sm font-normal text-basic-600',
});

export const IconStyle = tva({
  base: 'w-6 h-6 mx-2 text-basic-600 fill-basic-600',
});
