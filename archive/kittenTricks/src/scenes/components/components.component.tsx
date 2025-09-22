import React from 'react';

import { StyleSheet } from 'react-native';

import { MenuIcon } from '@/components/icons';
import { MenuGridList } from '@/components/menu-grid-list.component';
import { SafeAreaLayout } from '@/components/safe-area-layout.component';
import {
  Divider,
  TopNavigation,
  TopNavigationAction,
} from '@fox-ui/components';

import { data } from './data';

export const ComponentsScreen = (): React.ReactElement => {
  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction icon={MenuIcon} onPress={navigation.toggleDrawer} />
  );

  return (
    <SafeAreaLayout style={styles.safeArea} insets='top'>
      <TopNavigation title='Kitten Tricks' accessoryLeft={renderDrawerAction} />
      <Divider />
      <MenuGridList data={data} onItemPress={onItemPress} />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
