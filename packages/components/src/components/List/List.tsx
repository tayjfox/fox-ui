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
  FlashList,
  FlashListRef,
} from '@shopify/flash-list';

import {
  BaseScrollParams,
  ListProps,
  ScrollToIndexParams,
  ScrollToOffsetParams,
} from './types';

const FlashListRN = FlashList as React.ComponentType<ListProps>;
export class List<ItemT = any> extends React.Component<ListProps<ItemT>> {

  private listRef = React.createRef<FlashListRef<ItemT>>();

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
    const {
      style,
      className,
      keyExtractor,
      sectionHeaderItem,
      data,
      renderItem,
      ref,
      ...restProps
    } = this.props;


    const isSectionList = Array.isArray(data) &&
      data.length > 0 &&
      typeof data[0] === 'object' &&
      data[0] !== null &&
      'title' in data[0] &&
      ('data' in data[0] || 'items' in data[0]);

    if (isSectionList && sectionHeaderItem) {
      // Transform section data to flat array with headers
      const flatData: any[] = [];
      const stickyHeaderIndices: number[] = [];

      (data as any[]).forEach((section) => {

        stickyHeaderIndices.push(flatData.length);
        flatData.push({ type: 'sectionHeader', ...section });


        const items = section.data || section.items || [];
        items.forEach((item: any) => {
          flatData.push({ type: 'item', ...item });
        });
      });

      return (
        <FlashListRN
          style={style}
          className={className}
          data={flatData}
          renderItem={({ item, index }) => {
            if (item.type === 'sectionHeader') {
              return sectionHeaderItem ? sectionHeaderItem({ item, index }) : null;
            } else {
              return renderItem ? renderItem({ item, index, target: 'Cell' }) : null;
            }
          }}
          stickyHeaderIndices={stickyHeaderIndices}
          getItemType={(item) => item.type === 'sectionHeader' ? 'sectionHeader' : 'row'}
          keyExtractor={keyExtractor || this.keyExtractor}
          {...restProps}
          ref={this.listRef}
        />
      );
    }

    return (
      <FlashListRN
        style={style}
        className={className}
        data={data as ItemT[]}
        renderItem={renderItem}
        keyExtractor={keyExtractor || this.keyExtractor}
        {...restProps}
        ref={this.listRef}
      />
    );
  }
}