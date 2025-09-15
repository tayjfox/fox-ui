import React from 'react';

import { StyleSheet } from 'react-native';

import { ArrowIosBackIcon } from '@/components/icons';
import { SafeAreaLayout } from '@/components/safe-area-layout.component';
import {
  TopNavigation,
  TopNavigationAction,
} from '@meow-ui/components';

import ContentView from '../../layouts/social/profile-5';

export const Profile5Screen = (): React.ReactElement => {
  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={router.back} />
  );

  return (
    <SafeAreaLayout style={styles.container} insets='top'>
      <TopNavigation title='Profile' accessoryLeft={renderBackAction} />
      <ContentView />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
