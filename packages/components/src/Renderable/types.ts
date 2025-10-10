import { TextProps } from '@/Text/types';

export type RenderFCProp<Props> = (props?: Props) => React.ReactElement | null;
export type RenderProp<Props> = RenderFCProp<Props> | React.ReactElement | null | undefined;

export type RenderableProps<Props> = Props & {
  component?: RenderProp<Props>;
  className?: string;
  fallback?: React.ReactElement | null;
};
export interface RenderableTextProps extends Omit<TextProps, 'children'> {
  component?: RenderProp<TextProps> | React.ReactNode;
}
