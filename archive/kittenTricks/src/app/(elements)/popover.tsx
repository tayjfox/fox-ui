import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  PopoverShowcase,
} from '@/scenes/components/popover/popover-showcase.component';
import {
  popoverSettings,
  popoverShowcase,
} from '@/scenes/components/popover/type';
import {
  PopoverElement,
  PopoverProps,
} from '@fox-ui/components';

export const PopoverScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: PopoverProps): PopoverElement => (
    <PopoverShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={popoverShowcase}
      settings={popoverSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default PopoverScreen;
