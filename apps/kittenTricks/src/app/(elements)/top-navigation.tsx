import React from 'react';

import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  TopNavigationElement,
  TopNavigationProps,
} from '@meow-ui/components';

import {
  TopNavigationShowcase,
} from '../../scenes/components/top-navigation/top-navigation-showcase';
import {
  topNavigationSettings,
  topNavigationShowcase,
} from '../../scenes/components/top-navigation/type';

export const TopNavigationScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: TopNavigationProps): TopNavigationElement => (
    <TopNavigationShowcase {...props} style={[styles.component, props.style]} />
  );

  return (
    <ShowcaseContainer
      showcase={topNavigationShowcase}
      settings={topNavigationSettings}
      renderItem={renderItem}
      onBackPress={() => router.back()}
    />
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
});

export default TopNavigationScreen;
