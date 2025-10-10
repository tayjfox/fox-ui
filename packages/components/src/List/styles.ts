import { tv } from 'tailwind-variants';

import { isWeb } from '@fox-ui/utils';

const baseStyle = isWeb ? 'outline-0' : '';

export const ContainerStyle = tv({
  base: `${baseStyle} flex-row items-center px-2 py-3 bg-basic-100`,
  variants: {
    state: {
      active: 'bg-basic-transparent-300',
    },
  },
});

export const TitleStyle = tv({
  base: 'mx-2 text-base font-semibold text-basic-800 text-left',
});

export const DescriptionStyle = tv({
  base: 'mx-2 text-left text-sm font-normal text-basic-600',
});

export const IconStyle = tv({
  base: 'w-6 h-6 mx-2 text-basic-600 fill-basic-600',
});

export const HeaderStyle = tv({
  base: `${baseStyle}  px-2 py-2 bg-basic-200`,
});

export const HeaderTitleStyle = tv({
  base: 'mx-2 text-sm font-semibold text-basic-600 text-left',
});

export const HeaderDescriptionStyle = tv({
  base: 'mx-2 text-left text-xs font-normal text-basic-500',
});

export const HeaderIconStyle = tv({
  base: 'w-5 h-5 mx-2 text-basic-500 fill-basic-500',
});
