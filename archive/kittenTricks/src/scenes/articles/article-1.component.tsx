import React from 'react';

import { StyleSheet } from 'react-native';

import { ArrowIosBackIcon } from '@/components/icons';
import { SafeAreaLayout } from '@/components/safe-area-layout.component';
import {
  TopNavigation,
  TopNavigationAction,
} from '@fox-ui/components';

import ContentView from '../../layouts/articles/article-1';

export const Article1Screen = (): React.ReactElement => {
  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={router.back} />
  );

  return (
    <SafeAreaLayout style={styles.container} insets='top'>
      <TopNavigation title='Blog' accessoryLeft={renderBackAction} />
      <ContentView />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
