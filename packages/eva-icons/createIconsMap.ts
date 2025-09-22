import { SvgProps } from 'react-native-svg';

import { IconProvider } from '../components';
import { EvaIcon } from './EvaIcon';
import { findIconByName } from './icons';
import NotFound from './icons/NotFound';

export const createIconsMap = (): { [key: string]: IconProvider<SvgProps> } => {
  return new Proxy(
    {},
    {
      get(target, name: string): IconProvider<SvgProps> {
        const icon = findIconByName(name);
        if (!icon) {
          console.error(`Icon with name "${name}" does not exist.`);
          return new EvaIcon(NotFound);
        }
        return new EvaIcon(icon);
      },
    }
  );
};
