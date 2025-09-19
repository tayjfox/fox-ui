import { SvgProps } from 'react-native-svg';

import { IconProvider } from '@ui-kitten/components';

import { EvaIcon } from './evaIcon.component';
import { findIconByName } from './node_modules/react-native-eva-icons/icons';

export const createIconsMap = (): { [key: string]: IconProvider<SvgProps> } => {
  return new Proxy({}, {
    get(target, name: string): IconProvider<SvgProps> {
      return new EvaIcon(findIconByName(name));
    },
  });
};
