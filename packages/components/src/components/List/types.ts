import React from 'react';

import {
  ImageProps,
  ViewProps,
} from 'react-native';

import {
  FlashListProps,
  FlashListRef,
} from '@shopify/flash-list';

import { TextProps } from '../../components';
import {
  RenderProp,
  TouchableWebProps,
} from '../../devsupport';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ListProps<ItemT = any> extends FlashListProps<ItemT> {
  className?: string;
  ref?: React.Ref<FlashListRef<ItemT>>;
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

export type ListItemElement = React.ReactElement<ListProps>;
