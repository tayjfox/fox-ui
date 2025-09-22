import React from 'react';

import { StyleSheet } from 'react-native';

import { ArrowIosBackIcon } from '@/components/icons';
import { SafeAreaLayout } from '@/components/safe-area-layout.component';
import {
  TopNavigation,
  TopNavigationAction,
} from '@fox-ui/components';

import ContentView from '../../layouts/social/profile-settings-2';

export const ProfileSettings2Screen = (): React.ReactElement => {
  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={router.back} />
  );

  return (
    <SafeAreaLayout style={styles.container} insets='top'>
      <TopNavigation title='Profile' accessoryLeft={renderBackAction} />
      <ContentView navigation={navigation} />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
