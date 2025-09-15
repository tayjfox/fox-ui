import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { MultiselectShowcase } from '@/scenes/components/select/multiselect-showcase.component';
import { SelectShowcase } from '@/scenes/components/select/select-showcase.component';
import {
  selectSettings,
  selectShowcase,
} from '@/scenes/components/select/type';
import { SelectElement, SelectProps } from '@meow-ui/components';

interface ShowcaseProps extends SelectProps {
  data: any[];
}

export const SelectScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: ShowcaseProps): SelectElement => {
    return props.multiSelect ? (
      <MultiselectShowcase {...props} />
    ) : (
      <SelectShowcase {...props} />
    );
  };

  return (
    <ShowcaseContainer
      showcase={selectShowcase}
      settings={selectSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default SelectScreen;
