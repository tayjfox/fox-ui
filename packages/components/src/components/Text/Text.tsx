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

import { Text as TextBase } from 'react-native';

import { TextStyle } from './styles';
import { TextProps } from './types';

/**
 * Basic text writing.
 *
 * @extends React.Component
 *
 * @property {ReactText | ReactElement<TextProps>} children - String or number to be rendered as text.
 * Also can be ReactElement<TextProps> (nested Text component).
 *
 * @property {string} appearance - Can be `default`, `alternative` or `hint`.
 * Use `alternative` for displaying light text on a dark content and vice versa.
 * Use `hint` for giving user a hint on something.
 *
 * @property {string} category - Can be `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `s1`, `s2`, `p1`, `p2`, `c1`, `c2`, `label`.
 * Defaults to *p1*.
 * Use *h* categories when needed to display headings.
 * Use *s* categories when needed to display subtitles.
 * Use *p* categories when needed to display regular text.
 * Use *c* and *label* categories when needed to give user a hint on something.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {TextProps} ...TextProps - Any props applied to Text component.
 *
 * @overview-example TextCategories
 * Text has pre-defined set of styles for headings, subtitles, paragraphs, and more.
 *
 * @overview-example TextAppearances
 * Also, it has 2 types of additional appearances:
 * `hint` and `alternative`.
 *
 * Use hints when needed to give user a hint on action.
 * And use alternative when needed to display light text in light themes (same for dark).
 *
 * @overview-example TextStatuses
 *
 * @overview-example TextStyling
 * Text can be styled with `style` property.
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 * ```
 * import { Text } from '@fox-ui/components';
 *
 * <Text style={...}>Place your Text</Text>
 * ```
 */

const TextRN = TextBase as React.ComponentType<TextProps>;
export class Text extends React.Component<TextProps> {


  private getClassName = (): string => {
    const { appearance, status, category, className, } = this.props;


    return TextStyle({
      class: className,
      appearance,
      status,
      category,
    });
  };
  public render(): React.ReactElement<TextProps> {
    const { style, appearance, category, status, className, ...textProps } = this.props;

    const TextClassName = this.getClassName();

    return (
      <TextRN
        className={TextClassName}
        {...textProps}
        style={[style]}
      />
    );
  }
}
