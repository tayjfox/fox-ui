import React from 'react';

// @ts-ignore: styled is not recognized
import { styled } from 'nativewind';
import { SvgProps as SvgPropsBase } from 'react-native-svg';

import { IconProvider } from '@fox-ui/components';

export interface SvgProps extends SvgPropsBase {
  className?: string;
}

type IconElement = React.ReactElement<SvgProps>;
type IconComponent = React.ComponentType<SvgProps>;

export class EvaIcon implements IconProvider<SvgProps> {

  constructor(private content: IconComponent) {
  }

  public toReactElement(props: SvgProps): IconElement {
    const Icon: IconComponent = styled(this.content, {
      className: {
        target: 'style',
        nativeStyleToProp: { color: true, fill: true }
      },
    });

    const { style, ...svgProps } = props;

    return (
      <Icon
        {...svgProps}

      />
    );
  }
}
