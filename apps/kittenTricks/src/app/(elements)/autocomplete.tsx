import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { AutocompleteShowcase } from '@/scenes/components/autocomplete/autocomplete-showcase.component';
import {
  AutocompletePropsCustom,
  autocompleteSettings,
  autocompleteShowcase,
} from '@/scenes/components/autocomplete/type';
import { AutocompleteElement } from '@meow-ui/components';

export const AutocompleteScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: AutocompletePropsCustom): AutocompleteElement => (
    <AutocompleteShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={autocompleteShowcase}
      settings={autocompleteSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default AutocompleteScreen;
