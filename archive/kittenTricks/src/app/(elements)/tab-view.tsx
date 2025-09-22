import React from 'react';

import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  TabViewShowcase,
} from '@/scenes/components/tab-view/tab-view-showcase.component';
import { tabViewShowcase } from '@/scenes/components/tab-view/type';
import {
  TabViewElement,
  TabViewProps,
} from '@fox-ui/components';

export const TabViewScreen = (): React.ReactElement => {
  const renderItem = (props: TabViewProps): TabViewElement => (
    <TabViewShowcase {...props} style={[styles.component, props.style]} />
  );
  const router = useRouter();
  return (
    <ShowcaseContainer
      showcase={tabViewShowcase}
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

export default TabViewScreen;
