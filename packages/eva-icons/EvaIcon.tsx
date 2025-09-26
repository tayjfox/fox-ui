import React from 'react';

import { cssInterop } from 'nativewind';
import { SvgProps as SvgPropsBase } from 'react-native-svg';

import {
  IconProvider,
  isMobile,
} from '@fox-ui/components';

interface SvgProps extends SvgPropsBase {
  className?: string;
}

type IconElement = React.ReactElement<SvgProps>;
type IconComponent = React.ComponentType<SvgProps>;

export class EvaIcon implements IconProvider<SvgProps> {

  constructor(private content: IconComponent) {
  }

  public toReactElement(props: SvgProps): IconElement {
    const Icon: IconComponent = this.content;

    const { style, ...svgProps } = props;

    // cssInterop(Icon, {
    //   // className: 'style',
    //   iconClassName: {
    //     target: false,
    //     nativeStyleToProp: {
    //       color: 'fill',
    //       width: 'width',
    //       height: 'height',

    //     },

    //   },
    // });

    if (isMobile) {
      cssInterop(Icon, {
        className: {
          target: false,
          nativeStyleToProp: { fill: true }
        },
      });
    }

    return (
      <Icon
        className={props.className}
        fill={'currentColor'}
        {...svgProps}
        style={style}

      />
    );
  }
}
