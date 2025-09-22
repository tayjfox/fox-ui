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
 * @since MeowUI 0.1.0
 */

import React from 'react';

import {
  IconPack,
  IconProvider,
} from './type';

type IconsProp = IconPack<unknown> | IconPack<unknown>[];

export interface IconRegistryProps {
  icons: IconsProp;
  defaultIcons?: string;
}

export type IconRegistryElement = React.ReactElement<IconRegistryProps>;

function throwPackNotFoundError(name: string): void {
  const docRoot = 'https://akveo.github.io/react-native-ui-kitten/docs';

  const message: string = [
    `\nIcon: Icon Pack '${name}' is not registered`,
    'Using UI Kitten components is only possible with configuring ApplicationProvider.',
    `📖 Documentation: ${docRoot}/guides/setting-up-icons`,
  ].join('\n');

  throw Error(message);
}

function throwIconNotFoundError(name: string, pack: string): void {
  const docRoot = 'https://akveo.github.io/react-native-ui-kitten/docs';

  const message: string = [
    `\nIcon: '${name}' icon is not registered in pack '${pack}'.`,
    'Check icon name or consider switching icon pack.',
    `📖 Documentation: ${docRoot}/guides/setting-up-icons`,
  ].join('\n');

  throw Error(message);
}

export interface RegisteredIcon<T> {
  name: string;
  pack: string;
  icon: IconProvider<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconProps = any;

/**
 * This service allows to register multiple icon packs to use them later within
 * `<Icon/>` component.
 */
class RegistryService {
  protected packs: Map<string, IconPack<IconProps>> = new Map();
  protected defaultPack!: string;

  /**
   * Registers multiple icon packs and sets the first one as default if there is no default packs
   *
   * @param {IconPack[]} packs - array of icon packs
   */
  public register<T>(...packs: IconPack<T>[]): void {
    packs.forEach((pack) => {
      this.registerIconPack(pack);
    });
  }

  /**
   * Sets pack as default
   *
   * @param {string} name
   * @throws {Error} if pack is nor registered
   */
  public setDefaultIconPack(name: string): void {
    if (!this.packs.has(name)) {
      throwPackNotFoundError(name);
    }

    this.defaultPack = name;
  }

  /**
   * @param {string} name
   * @returns {IconPack} pack by name
   */
  public getIconPack<T>(name: string): IconPack<T> {
    return this.getPackOrThrow<T>(name);
  }

  /**
   * @param {string} name - icon name
   * @param {string} pack - pack name
   * @throws {Error} if requested icon pack is not registered
   * @returns {RegisteredIcon} - registered icon of a requested/default pack
   */
  public getIcon<T>(name: string, pack?: string): RegisteredIcon<T> {
    const iconsPack: IconPack<T> = pack ? this.getPackOrThrow(pack) : this.getDefaultPack();

    return {
      name,
      pack: iconsPack.name,
      icon: this.getIconFromPack(name, iconsPack),
    };
  }

  /**
   * Registers single icon pack
   *
   * @param {IconPack} pack - icon pack to register
   */
  protected registerIconPack<T>(pack: IconPack<T>): void {
    this.packs.set(pack.name, pack);
  }

  protected getPackOrThrow<T>(name: string): IconPack<T> {
    const pack = this.packs.get(name);

    if (!pack) {
      throwPackNotFoundError(name);
    }

    return pack as IconPack<T>;
  }

  protected getDefaultPack<T>(): IconPack<T> {
    return this.getIconPack(this.defaultPack);
  }

  protected getIconFromPack<T>(
    name: string,
    pack: IconPack<T>,
    shouldThrow = true
  ): IconProvider<T> {
    if (shouldThrow && !pack.icons[name]) {
      throwIconNotFoundError(name, pack.name);
    }

    return pack.icons[name];
  }
}

export const IconRegistryService = new RegistryService();


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
 * import { ApplicationProvider, IconRegistry, Layout, Text, Icon, Button } from '@fox-ui/components';
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
