import React from 'react';

import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { LayoutShowcase } from '@/scenes/components/layout/layout-showcase.component';
import {
  layoutSettings,
  layoutShowcase,
} from '@/scenes/components/layout/type';
import { LayoutElement, LayoutProps } from '@meow-ui/components';

export const LayoutScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: LayoutProps): LayoutElement => (
    <LayoutShowcase {...props} style={[styles.component, props.style]} />
  );

  return (
    <ShowcaseContainer
      showcase={layoutShowcase}
      settings={layoutSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    height: 256,
  },
});

export default LayoutScreen;
