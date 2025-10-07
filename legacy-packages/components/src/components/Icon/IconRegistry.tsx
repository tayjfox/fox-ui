/**
 * @license
 * Copyright (c) 2025 Vedla Labs by Tay Fox. All Rights Reserved.
 * Originally developed as UI Kitten by Akveo.
 *
 * This project is licensed under the MIT License.
 * See the LICENSE file in the project root for full license information.
 *
 * @author Tay Fox <tay@vedla.ca>
 * @description: A React Native implementation of Eva Design System's Button component.
 * @since foxUI 1.0.0
 */

import React from 'react';

import { IconRegistryService } from './IconRegistryService';
import { IconPack } from './types';

type IconsProp = IconPack<unknown> | IconPack<unknown>[];

export interface IconRegistryProps {
  icons: IconsProp;
  defaultIcons?: string;
}

/**
 * Registers one or more icon packs for later usage in Icon component.
 * Renders nothing, but should be added as a child of an Application Root.
 *
 * @extends React.Component
 *
 * @property {IconPack<any> | IconPack<any>[]} icons - Icon packs to register.
 * @property {string} defaultIcons - A name of an icon pack that is used by default.
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import * as eva from '@eva-design/eva';
 * import { ApplicationProvider, IconRegistry, Layout, Text, Icon, Button } from '@fox-ui/components-legacy';
 * import { EvaIconsPack } from '@fox-ui/icons'; // <-- Make sure it is installed. npm i @fox-ui/icons
 *
 * const LikeIcon = (props) => (
 *   <Icon {...props} name='like' />
 * );
 *
 * export default () => (
 *   <>
 *     <IconRegistry icons={EvaIconsPack}/>
 *     <ApplicationProvider {...eva} theme={eva.light}>
 *       <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 *         <Text>Welcome to UI Kitten</Text>
 *         <Button accessoryLeft={LikeIcon}>LIKE</Text>
 *       </Layout>
 *     </ApplicationProvider>
 *   </>
 * );
 * ```
 */
export class IconRegistry extends React.Component<IconRegistryProps> {

  static defaultProps: Partial<IconRegistryProps> = {
    icons: [],
  };

  private findDefaultIconPack = (packs: IconPack<unknown>[], name: string): IconPack<unknown> => {
    const requestedPackIndex: number = packs.findIndex((pack: IconPack<unknown>): boolean => {
      return pack.name === name;
    });

    return packs[Math.max(0, requestedPackIndex)];
  };

  private registerIcons = (source: IconsProp, defaultPack: string): void => {
    const packs: IconPack<unknown>[] = Array.isArray(source) ? source : [source];
    const defaultIconPack: IconPack<unknown> = this.findDefaultIconPack(packs, defaultPack);

    IconRegistryService.register(...packs);
    IconRegistryService.setDefaultIconPack(defaultIconPack.name);
  };

  public render(): React.ReactNode {
    const { icons, defaultIcons = '' } = this.props;
    this.registerIcons(icons, defaultIcons);

    return null;
  }
}
