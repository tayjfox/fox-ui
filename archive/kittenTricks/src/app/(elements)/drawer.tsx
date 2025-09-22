import React from 'react';

import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  DrawerShowcase,
} from '@/scenes/components/drawer/drawer-showcase.component';
import { drawerShowcase } from '@/scenes/components/drawer/type';
import {
  ButtonProps,
  DrawerElement,
} from '@fox-ui/components';

export const DrawerScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: ButtonProps): DrawerElement => (
    <DrawerShowcase
      {...props}
      style={[styles.component, props.style]}
    // onPress={router.}
    />
  );

  return (
    <ShowcaseContainer
      showcase={drawerShowcase}
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
export default DrawerScreen;
