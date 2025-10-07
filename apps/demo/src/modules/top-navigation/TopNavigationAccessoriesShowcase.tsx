import React from 'react';

import { StyleSheet } from 'react-native';

import {
  Icon,
  IconElement,
  IconProps,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@fox-ui/components-legacy';
import { TouchableWebElement } from '@fox-ui/components-legacy/src/devsupport';

const BackIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='arrow-back'
  />
);

const EditIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='edit'
  />
);

const MenuIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='more-vertical'
  />
);

const InfoIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='info'
  />
);

const LogoutIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='log-out'
  />
);

export const TopNavigationAccessoriesShowcase = (): React.ReactElement => {

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={toggleMenu}
    />
  );

  const renderRightActions = (): React.ReactElement => (
    <>
      <TopNavigationAction icon={EditIcon} />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={InfoIcon}
          title='About'
        />
        <MenuItem
          accessoryLeft={LogoutIcon}
          title='Logout'
        />
      </OverflowMenu>
    </>
  );

  const renderBackAction = (): TouchableWebElement => (
    <TopNavigationAction icon={BackIcon} />
  );

  return (
    <Layout
      style={styles.container}
      level='1'
    >
      <TopNavigation
        alignment='center'
        title='Eva Application'
        subtitle='Subtitle'
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});
