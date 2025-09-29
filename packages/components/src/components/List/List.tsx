/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';

import { FlatList } from 'react-native';

import {
  BaseScrollParams,
  ListProps,
  ScrollToIndexParams,
  ScrollToOffsetParams,
} from './types';

export { type ListElement, type ListProps } from './types';

/**
 * Performant interface for rendering simple, flat lists.
 *
 * @extends React.Component
 *
 * @property {any[]} data - An array of anything to be rendered within the list
 *
 * @property {(ListRenderItemInfo<ItemT>) => ReactElement} renderItem - Takes an
 * item from *data* and renders it into the list.
 *
 * @property {FlatListProps} ...FlatListProps - Any props applied to FlatList component.
 *
 * @overview-example ListSimpleUsage
 * Lists should render ListItem components by providing them through `renderItem` property
 * to provide a useful component.
 *
 * @overview-example ListDividers
 * It is a good idea to separate items with `Divider` component.
 *
 * @overview-example ListAccessories
 * Items may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 *
 * @overview-example ListCustomItem
 * Using ListItem is helpful for basic lists, but not required. For example, `Card` may be used.
 */

const FlatListRN = FlatList as React.ComponentType<ListProps>;

export class List<ItemT = any> extends React.Component<ListProps<ItemT>> {

  private listRef = React.createRef<FlatList>();

  public scrollToEnd = (params?: BaseScrollParams): void => {
    this.listRef.current?.scrollToEnd(params);
  };

  public scrollToIndex = (params: ScrollToIndexParams): void => {
    this.listRef.current?.scrollToIndex(params);
  };

  public scrollToOffset(params: ScrollToOffsetParams): void {
    this.listRef.current?.scrollToOffset(params);
  }

  private keyExtractor = (item: ItemT, index: number): string => {
    return index.toString();
  };

  public render(): React.ReactElement {
    const { style, ref, className, keyExtractor, ...flatListProps } = this.props;

    return (
      <FlatListRN
        className={className}
        keyExtractor={keyExtractor || this.keyExtractor}
        {...flatListProps}
        ref={this.listRef}
      />
    );
  }
}