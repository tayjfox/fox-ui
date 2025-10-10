import { TextProps as RNTextProps } from 'react-native';

import { ComponentStatus } from '@/shared/types';

type ChildElement = string | number | TextElement;

export interface TextProps extends RNTextProps {
  children?: ChildElement | ChildElement[];
  appearance?: 'default' | 'alternative' | 'hint';
  category?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 's1'
    | 's2'
    | 'p'
    | 'p1'
    | 'p2'
    | 'c1'
    | 'c2'
    | 'label';
  className?: string;
  status?: ComponentStatus;
}

export type TextElement = React.ReactElement<TextProps>;
