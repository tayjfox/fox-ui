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

import {
  IconPack,
  IconProvider,
} from './types';

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
