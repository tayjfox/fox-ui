import React from 'react';

import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  InputShowcase,
} from '@/scenes/components/input/input-showcase.component';
import {
  inputSettings,
  inputShowcase,
} from '@/scenes/components/input/type';
import {
  InputElement,
  InputProps,
} from '@fox-ui/components';

export const InputScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: InputProps): InputElement => (
    <InputShowcase style={styles.component} {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={inputShowcase}
      settings={inputSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
});

export default InputScreen;
