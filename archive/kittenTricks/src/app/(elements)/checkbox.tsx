import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  CheckBoxShowcase,
} from '@/scenes/components/checkbox/checkbox-showcase.component';
import {
  checkboxSettings,
  checkboxShowcase,
} from '@/scenes/components/checkbox/type';
import {
  CheckBoxElement,
  CheckBoxProps,
} from '@fox-ui/components';

export const CheckBoxScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: CheckBoxProps): CheckBoxElement => (
    <CheckBoxShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={checkboxShowcase}
      settings={checkboxSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};
export default CheckBoxScreen;
