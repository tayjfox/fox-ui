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
  findNodeHandle,
  StatusBar,
  UIManager,
} from 'react-native';

import { Frame } from './type';

export interface MeasureElementProps {
  force?: boolean;
  shouldUseTopInsets?: boolean;
  onMeasure: (frame: Frame) => void;
  children: React.ReactElement;
}

export type MeasuringElement = React.ReactElement;
/**
 * Measures child element size and it's screen position asynchronously.
 * Returns measure result in `onMeasure` callback.
 *
 * Usage:
 *
 * ```tsx
 * const onMeasure = (frame: Frame): void => {
 *   const { x, y } = frame.origin;
 *   const { width, height } = frame.size;
 *   ...
 * };
 *
 * <MeasureElement
 *   shouldUseTopInsets={ModalService.getShouldUseTopInsets}
 *   onMeasure={onMeasure}>
 *   <ElementToMeasure />
 * </MeasureElement>
 * ```
 *
 * By default, it measures each time onLayout is called,
 * but `force` property may be used to measure any time it's needed.
 * DON'T USE THIS FLAG IF THE COMPONENT RENDERS FIRST TIME OR YOU KNOW `onLayout` WILL BE CALLED.
 */
export const MeasureElement: React.FC<MeasureElementProps> = ({ force, shouldUseTopInsets = false, onMeasure, children }): MeasuringElement => {

  const ref = React.useRef<any>(null);

  const bindToWindow = (frame: Frame, window: Frame): Frame => {
    if (frame.origin.x < window.size.width) {
      return frame;
    }

    const boundFrame: Frame = new Frame(
      frame.origin.x - window.size.width,
      frame.origin.y,
      frame.size.width,
      frame.size.height,
    );

    return bindToWindow(boundFrame, window);
  };

  const onUIManagerMeasure = (x: number, y: number, w: number, h: number): void => {
    if (!w && !h) {
      measureSelf();
    } else {
      const originY = shouldUseTopInsets ? y + (StatusBar.currentHeight ?? 0) : y;
      const frame: Frame = bindToWindow(new Frame(x, originY, w, h), Frame.window());
      onMeasure(frame);
    }
  };

  const measureSelf = (): void => {
    const node = findNodeHandle(ref.current);
    if (node != null) {
      UIManager.measureInWindow(node, onUIManagerMeasure);
    }
  };

  if (force) {
    measureSelf();
  }

  return React.cloneElement(
    children as React.ReactElement<any>,
    { ref, onLayout: measureSelf },
  );
};

