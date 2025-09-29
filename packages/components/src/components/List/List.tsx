/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';

import { FlashList } from '@shopify/flash-list';

import {
  BaseScrollParams,
  ListProps,
  ScrollToIndexParams,
  ScrollToOffsetParams,
} from './types';

const FlashListRN = FlashList as unknown as typeof FlashList;

export class List<ItemT = any> extends React.Component<ListProps<ItemT>> {

  private listRef = React.createRef<FlashList<ItemT>>();

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
    const { style, className, keyExtractor, ...flatListProps } = this.props;


    const DataCount = flatListProps.data ? flatListProps.data.length : 0;
    // FlashList requires estimatedItemSize if the data is not empty
    if (DataCount > 0 && !flatListProps.estimatedItemSize) {
      // Default to 100 if not provided
      flatListProps.estimatedItemSize = 100;
    }

    return (
      <FlashListRN

        keyExtractor={keyExtractor || this.keyExtractor}
        {...flatListProps}
        ref={this.listRef}
      />
    );
  }
}