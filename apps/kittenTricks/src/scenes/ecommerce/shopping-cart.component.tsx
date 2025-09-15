import React from 'react';

import { StyleSheet } from 'react-native';

import {
  ArrowIosBackIcon,
  SearchIcon,
} from '@/components/icons';
import { SafeAreaLayout } from '@/components/safe-area-layout.component';
import {
  TopNavigation,
  TopNavigationAction,
} from '@meow-ui/components';

import ContentView from '../../layouts/ecommerce/shopping-cart';

export const ShoppingCartScreen = (): React.ReactElement => {
  const onSearchActionPress = (): void => {
    navigation.navigate('ProductList');
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={router.back} />
  );

  const renderSearchAction = (): React.ReactElement => (
    <TopNavigationAction icon={SearchIcon} onPress={onSearchActionPress} />
  );

  return (
    <SafeAreaLayout style={styles.container} insets='top'>
      <TopNavigation
        title='Shopping Cart'
        accessoryLeft={renderBackAction}
        accessoryRight={renderSearchAction}
      />
      <ContentView />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
