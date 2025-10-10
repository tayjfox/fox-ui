import React from 'react';

import { RenderableProps } from './types';

/**
 * Renderable
 *
 * A helper component that conditionally renders a given component or render function.
 * Useful for optional props that can either be:
 *  - A React element
 *  - A render function (receiving props)
 *  - Or undefined/null
 *
 * If no component is provided, renders the fallback (if any).
 *
 * @example
 * <Renderable
 *   component={(props) => <Text {...props}>Hello!</Text>}
 * />
 *
 * @example
 * <Renderable
 *   component={<Text>Static Element</Text>}
 *   fallback={<Text>Nothing here</Text>}
 * />
 */
export function Renderable<Props>(props: RenderableProps<Props>): React.ReactElement | null {
  const { component, fallback, ...rest } = props;

  if (!component) return fallback || null;

  if (React.isValidElement(component)) {
    return React.cloneElement(component, rest);
  }

  if (typeof component === 'function') {
    return component(rest as Props);
  }

  return fallback || null;
}