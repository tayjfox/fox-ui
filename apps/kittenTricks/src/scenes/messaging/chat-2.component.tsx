import React from 'react';

import {
  Image,
  StyleSheet,
} from 'react-native';

import { ArrowIosBackIcon } from '@/components/icons';
import { SafeAreaLayout } from '@/components/safe-area-layout.component';
import {
  TopNavigation,
  TopNavigationAction,
} from '@meow-ui/components';

import ContentView from '../../layouts/messaging/chat-2';

export const Chat2Screen = (): React.ReactElement => {
  const onProfileActionPress = (): void => {
    navigation.navigate('Profile7');
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={router.back} />
  );

  const renderProfileAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={renderProfileImage}
      onPress={onProfileActionPress}
    />
  );

  const renderProfileImage = (): React.ReactElement => (
    <Image
      style={styles.profileImage}
      source={require('../../assets/images/image-app-icon.png')}
    />
  );

  return (
    <SafeAreaLayout style={styles.container} insets='top'>
      <TopNavigation
        title='Helen Kuper'
        subtitle='Last seen just now'
        accessoryLeft={renderBackAction}
        accessoryRight={renderProfileAction}
      />
      <ContentView />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    tintColor: null,
  },
});
