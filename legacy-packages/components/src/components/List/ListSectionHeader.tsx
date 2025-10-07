/**
 * @license
 * Copyright (c) 2025 Vedla Labs by Tay Fox. All Rights Reserved.
 *
 * This project is licensed under the MIT License.
 * See the LICENSE file in the project root for full license information.
 *
 * @author Tay Fox <tay@vedla.ca>
 * @description: A React Native implementation of Eva Design System's Button component.
 * @since foxUI 1.0.0
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
  HeaderDescriptionStyle,
  HeaderIconStyle,
  HeaderStyle,
  HeaderTitleStyle,
} from './styles';
import { type ListSectionHeaderProps } from './types';

class ListSectionHeader extends React.Component<ListSectionHeaderProps, ActiveState> {



  private getClassName = (): string => {
    const { className } = this.props;



    return HeaderStyle({
      class: className,

    });
  };

  private getAccesoryStyle = (): string => {
    const { accesoryClassName } = this.props;

    return HeaderIconStyle({
      class: accesoryClassName,
    });
  }

  private getTextStyle = (): string => {
    const { titleClassName } = this.props;

    return HeaderTitleStyle({
      class: titleClassName,
    });
  }

  private getDescriptionStyle = (): string => {
    const { descriptionClassName } = this.props;

    return HeaderDescriptionStyle({
      class: descriptionClassName,
    });
  }

  private TemplateChildren = (props: ListSectionHeaderProps): React.ReactElement => {

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
      >
        {children || this.TemplateChildren(this.props)}
      </TouchableWeb>
    );
  }
}

export { ListSectionHeader };
