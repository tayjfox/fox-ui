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
  FalsyFC,
  FalsyText,
  TouchableWeb,
  TouchableWebElement,
} from '../../devsupport';
import { ActiveState } from '../shared/types';
import { View } from '../View/View';
import {
  ContainerStyle,
  DescriptionStyle,
  IconStyle,
  TitleStyle,
} from './styles';
import {
  type ListItemElement,
  type ListItemProps,
} from './types';

/**
 * A single item rendered in List.
 * Items should be rendered within List by providing them through `renderItem` property to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} description - String, number or a function
 * component to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 *
 * @property {ReactNode} children - Component to render within the item.
 * Useful when needed to render a custom item and get a feedback when it is pressed.
 * If provided, *title* and other properties will be ignored.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ListItemSimpleUsage
 *
 * @overview-example ListItemStyling
 * List Item and it's inner views can be styled by passing them as function components.
 *
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 * ```
 * import { ListItem, Text } from '@fox-ui/components';
 *
 * <ListItem
 *   title={evaProps => <Text {...evaProps}>TITLE</Text>}
 *   description={evaProps => <Text {...evaProps}>DESCRIPTION</Text>}
 * />
 * ```
 */

class ListItem extends React.Component<ListItemProps, ActiveState> {

  constructor(props: ListItemProps) {
    super(props);
    this.state = {
      interactionState: undefined,
    };
  }

  private onPressIn = (): void => {
    this.setState({ interactionState: 'active' });
  };

  private onPressOut = (): void => {
    this.setState({ interactionState: undefined });
  };

  private getClassName = (): string => {
    const { className } = this.props;
    const { interactionState } = this.state;
    const state = interactionState;

    return ContainerStyle({
      class: className,
      state,
    });
  };

  private getAccesoryStyle = (): string => {
    const { accesoryClassName } = this.props;

    return IconStyle({
      class: accesoryClassName,
    });
  }

  private getTextStyle = (): string => {
    const { titleClassName } = this.props;

    return TitleStyle({
      class: titleClassName,
    });
  }

  private getDescriptionStyle = (): string => {
    const { descriptionClassName } = this.props;

    return DescriptionStyle({
      class: descriptionClassName,
    });
  }

  private TemplateChildren = (props: ListItemProps): React.ReactElement => {

    const accesoryStyle = this.getAccesoryStyle();
    const textStyle = this.getTextStyle();
    const descriptionStyle = this.getDescriptionStyle();

    return (
      <>
        <FalsyFC
          className={accesoryStyle}
          component={props.accessoryLeft}
        />
        <View className="flex-1">
          <FalsyText
            className={textStyle}
            component={props.title}
          />
          <FalsyText
            className={descriptionStyle}
            component={props.description}
          />
        </View>
        <FalsyFC
          className={accesoryStyle}
          component={props.accessoryRight}
        />
      </>
    );
  };




  public render(): TouchableWebElement {
    const {
      children,
      ...touchableProps
    } = this.props;

    const className = this.getClassName();

    return (
      <TouchableWeb
        className={className}
        {...touchableProps}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
      >
        {children || this.TemplateChildren(this.props)}
      </TouchableWeb>
    );
  }
}

export { ListItem, type ListItemElement, type ListItemProps };
