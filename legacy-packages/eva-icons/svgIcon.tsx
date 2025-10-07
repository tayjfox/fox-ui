import * as React from 'react';

import { SvgProps } from './EvaIcon';
import { findIconByName } from './icons/';

export interface SvgIconProps extends SvgProps {
  name: string;
}

export type SvgIconElement = React.ReactElement<SvgIconProps>;



export const SvgIcon = (props: SvgIconProps): React.ReactElement<SvgProps> => {
  const { name, ...svgProps } = props;
  const IconComponent = findIconByName(name);
  if (!IconComponent) {
    throw new Error(`Icon "${name}" not found.`);
  }



  return React.createElement(IconComponent, svgProps);
};
