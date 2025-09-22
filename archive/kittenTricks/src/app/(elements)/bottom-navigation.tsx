import React from 'react';

import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  BottomNavigationShowcase,
} from '@/scenes/components/bottom-navigation/bottom-navigation-showcase.component';
import {
  bottomNavigationSettings,
  bottomNavigationShowcase,
} from '@/scenes/components/bottom-navigation/type';
import {
  BottomNavigationElement,
  BottomNavigationProps,
} from '@fox-ui/components';

export const BottomNavigationScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (
    props: BottomNavigationProps,
  ): BottomNavigationElement => (
    <BottomNavigationShowcase {...props} style={styles.bottomNavigation} />
  );

  return (
    <ShowcaseContainer
      showcase={bottomNavigationShowcase}
      settings={bottomNavigationSettings}
      renderItem={renderItem}
      onBackPress={router.back}></ShowcaseContainer>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    flex: 1,
  },
});

export default BottomNavigationScreen;