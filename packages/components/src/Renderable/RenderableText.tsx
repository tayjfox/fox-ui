import React from 'react';

import {
  Text,
  TextProps,
} from '@/Text';

import { RenderableTextProps } from './types';

/**
 * RenderableText
 *
 * Helper for optional text content.
 * - If `component` is null/undefined → renders nothing.
 * - If `component` is a React element → clones it with Text props.
 * - If `component` is a function → calls it with Text props.
 * - Otherwise → renders a <Text> with `component` as its children.
 */
export function RenderableText(props: RenderableTextProps): React.ReactElement | null {
  const { component, ...textProps } = props;

  if (!component) return null;

  if (React.isValidElement(component)) {
    return React.cloneElement(component, textProps as TextProps);
  }

  if (typeof component === 'function') {
    return (component as (p?: TextProps) => React.ReactElement | null)(textProps);
  }

  return <Text {...textProps}>{component as any}</Text>;
}