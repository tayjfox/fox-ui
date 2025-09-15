import React from 'react';

import { StyleSheet } from 'react-native';

import { MenuGridList } from '@/components/menu-grid-list.component';
import { SafeAreaLayout } from '@/components/safe-area-layout.component';
import { data } from '@/data';
import {
  Divider,
  TopNavigation,
} from '@meow-ui/components';

export default function HomeScreen() {
  // const onItemPress = (index: number): void => {
  //   navigation.navigate(data[index].route);
  // };

  // const renderDrawerAction = (): React.ReactElement => (
  //   <TopNavigationAction icon={MenuIcon} onPress={navigation.toggleDrawer} />
  // );

  return (
    <SafeAreaLayout style={styles.safeArea} insets='top'>
      <TopNavigation title='Kitten Tricks' />
      <Divider />
      <MenuGridList data={data} />
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  safeArea: {
    flex: 1,
  },
});
