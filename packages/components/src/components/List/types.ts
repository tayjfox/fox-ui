import React from 'react';

import { FlatList, FlatListProps, ImageProps, ViewProps } from 'react-native';

import { RenderProp, TouchableWebProps } from '../../devsupport';
import { TextProps } from '../../ui/text/text.component';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ListProps<ItemT = any> extends FlatListProps<ItemT> {
  className?: string;
  ref?: React.Ref<React.ComponentRef<typeof FlatList>>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ListElement<ItemT = any> = React.ReactElement<ListProps<ItemT>>;

export interface BaseScrollParams {
  animated?: boolean;
}

export interface ViewScrollParams {
  viewOffset?: number;
  viewPosition?: number;
}

export interface ScrollToIndexParams extends BaseScrollParams, ViewScrollParams {
  index: number;
}

export interface ScrollToOffsetParams extends BaseScrollParams {
  offset: number;
}

export interface ListItemProps extends TouchableWebProps {
  title?: RenderProp<TextProps> | React.ReactNode;
  description?: RenderProp<TextProps> | React.ReactNode;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<ViewProps>;
  children?: React.ReactNode;
  className?: string;
  accesoryClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export type ListItemElement = React.ReactElement<ListItemProps>;
