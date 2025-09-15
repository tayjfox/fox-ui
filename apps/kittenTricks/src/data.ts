import React from 'react';

import { ImageStyle } from 'react-native';

import {
  AssetAutocompleteDarkIcon,
  AssetAutocompleteIcon,
  AssetAvatarDarkIcon,
  AssetAvatarIcon,
  AssetBottomNavigationDarkIcon,
  AssetBottomNavigationIcon,
  AssetButtonDarkIcon,
  AssetButtonGroupDarkIcon,
  AssetButtonGroupIcon,
  AssetButtonIcon,
  AssetCalendarDarkIcon,
  AssetCalendarIcon,
  AssetCardDarkIcon,
  AssetCardIcon,
  AssetCheckBoxDarkIcon,
  AssetCheckBoxIcon,
  AssetDatepickerDarkIcon,
  AssetDatepickerIcon,
  AssetDrawerDarkIcon,
  AssetDrawerIcon,
  AssetIconDarkIcon,
  AssetIconIcon,
  AssetInputDarkIcon,
  AssetInputIcon,
  AssetListDarkIcon,
  AssetListIcon,
  AssetMenuDarkIcon,
  AssetMenuIcon,
  AssetModalDarkIcon,
  AssetModalIcon,
  AssetOverflowMenuDarkIcon,
  AssetOverflowMenuIcon,
  AssetPopoverDarkIcon,
  AssetPopoverIcon,
  AssetRadioDarkIcon,
  AssetRadioIcon,
  AssetSelectDarkIcon,
  AssetSelectIcon,
  AssetSpinnerDarkIcon,
  AssetSpinnerIcon,
  AssetTabViewDarkIcon,
  AssetTabViewIcon,
  AssetTextDarkIcon,
  AssetTextIcon,
  AssetToggleDarkIcon,
  AssetToggleIcon,
  AssetTooltipDarkIcon,
  AssetTooltipIcon,
  AssetTopNavigationDarkIcon,
  AssetTopNavigationIcon,
} from '@/components/icons';
import { ThemedIcon } from '@/components/themed-icon.component';
import { MenuItem } from '@/model/menu-item.model';

export interface ComponentData extends MenuItem {
  route: string;
}

export const data: ComponentData[] = [
  {
    title: 'Autocomplete',
    route: '(elements)/autocomplete',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetAutocompleteIcon,
        dark: AssetAutocompleteDarkIcon,
      });
    },
  },
  {
    title: 'Avatar',
    route: '(elements)/avatar',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetAvatarIcon,
        dark: AssetAvatarDarkIcon,
      });
    },
  },
  {
    title: 'BottomNavigation',
    route: '(elements)/bottom-navigation',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetBottomNavigationIcon,
        dark: AssetBottomNavigationDarkIcon,
      });
    },
  },
  {
    title: 'Button',
    route: '(elements)/button',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetButtonIcon,
        dark: AssetButtonDarkIcon,
      });
    },
  },
  {
    title: 'ButtonGroup',
    route: '(elements)/button-group',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetButtonGroupIcon,
        dark: AssetButtonGroupDarkIcon,
      });
    },
  },
  {
    title: 'Calendar',
    route: '(elements)/calendar',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetCalendarIcon,
        dark: AssetCalendarDarkIcon,
      });
    },
  },
  {
    title: 'Card',
    route: '(elements)/card',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetCardIcon,
        dark: AssetCardDarkIcon,
      });
    },
  },
  {
    title: 'CheckBox',
    route: '(elements)/checkbox',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetCheckBoxIcon,
        dark: AssetCheckBoxDarkIcon,
      });
    },
  },
  {
    title: 'Datepicker',
    route: '(elements)/datepicker',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetDatepickerIcon,
        dark: AssetDatepickerDarkIcon,
      });
    },
  },
  {
    title: 'Drawer',
    route: '(elements)/drawer',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetDrawerIcon,
        dark: AssetDrawerDarkIcon,
      });
    },
  },
  {
    title: 'Icon',
    route: '(elements)/icon',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetIconIcon,
        dark: AssetIconDarkIcon,
      });
    },
  },
  {
    title: 'Input',
    route: '(elements)/input',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetInputIcon,
        dark: AssetInputDarkIcon,
      });
    },
  },
  {
    title: 'Layout',
    route: '(elements)/layout',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetModalIcon,
        dark: AssetModalDarkIcon,
      });
    },
  },
  {
    title: 'List',
    route: '(elements)/list',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetListIcon,
        dark: AssetListDarkIcon,
      });
    },
  },
  {
    title: 'Menu',
    route: '(elements)/menu',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetMenuIcon,
        dark: AssetMenuDarkIcon,
      });
    },
  },
  {
    title: 'Modal',
    route: '(elements)/modal',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetModalIcon,
        dark: AssetModalDarkIcon,
      });
    },
  },
  {
    title: 'OverflowMenu',
    route: '(elements)/overflow-menu',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetOverflowMenuIcon,
        dark: AssetOverflowMenuDarkIcon,
      });
    },
  },
  {
    title: 'Popover',
    route: '(elements)/popover',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetPopoverIcon,
        dark: AssetPopoverDarkIcon,
      });
    },
  },
  {
    title: 'Radio',
    route: '(elements)/radio',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetRadioIcon,
        dark: AssetRadioDarkIcon,
      });
    },
  },
  {
    title: 'RadioGroup',
    route: '(elements)/radio-group',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetRadioIcon,
        dark: AssetRadioDarkIcon,
      });
    },
  },
  {
    title: 'RangeCalendar',
    route: '(elements)/range-calendar',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetCalendarIcon,
        dark: AssetCalendarDarkIcon,
      });
    },
  },
  {
    title: 'RangeDatepicker',
    route: '(elements)/range-datepicker',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetDatepickerIcon,
        dark: AssetDatepickerDarkIcon,
      });
    },
  },
  {
    title: 'Select',
    route: '(elements)/select',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetSelectIcon,
        dark: AssetSelectDarkIcon,
      });
    },
  },
  {
    title: 'Spinner',
    route: '(elements)/spinner',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetSpinnerIcon,
        dark: AssetSpinnerDarkIcon,
      });
    },
  },
  {
    title: 'TabView',
    route: '(elements)/tab-view',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetTabViewIcon,
        dark: AssetTabViewDarkIcon,
      });
    },
  },
  {
    title: 'Text',
    route: '(elements)/text',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetTextIcon,
        dark: AssetTextDarkIcon,
      });
    },
  },
  {
    title: 'Toggle',
    route: '(elements)/toggle',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetToggleIcon,
        dark: AssetToggleDarkIcon,
      });
    },
  },
  {
    title: 'Tooltip',
    route: '(elements)/tooltip',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetTooltipIcon,
        dark: AssetTooltipDarkIcon,
      });
    },
  },
  {
    title: 'TopNavigation',
    route: '(elements)/top-navigation',
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style,
        light: AssetTopNavigationIcon,
        dark: AssetTopNavigationDarkIcon,
      });
    },
  },
];
