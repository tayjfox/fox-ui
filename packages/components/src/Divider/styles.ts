import { tv } from 'tailwind-variants';

export const DividerStyle = tv({
  base: 'bg-basic-300 w-full h-[1.5px]',
  variants: {
    height: {
      xs: 'h-[1.5px]',
      sm: 'h-1',
      md: 'h-1.5',
      lg: 'h-2',
      xl: 'h-2.5',
      '2xl': 'h-3',
      '3xl': 'h-3.5',
      '4xl': 'h-4 w-full bg-basic-300 relative',

    },

  },


});
