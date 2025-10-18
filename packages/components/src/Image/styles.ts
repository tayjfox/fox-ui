import { tv } from 'tailwind-variants';

export const ImageStyle = tv({
  base: 'max-w-full',
  variants: {
    size: {
      xs: 'h-6 w-6',
      sm: 'h-18 w-18',
      md: 'h-24  w-24',
      lg: 'h-32 w-32',
      xl: 'h-40 w-40',
      '2xl': 'h-48 w-48',
      '3xl': 'h-60 w-60',
      '4xl': 'h-72 w-72',
      full: 'w-full h-100',
    },
  },
  defaultVariants: {
    size: 'full',
  },
});
