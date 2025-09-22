import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  RangeDatepickerShowcase,
} from '@/scenes/components/range-datepicker/range-datepicker-showcase.component';
import {
  rangeDatepickerShowcase,
} from '@/scenes/components/range-datepicker/type';
import {
  RangeDatepickerElement,
  RangeDatepickerProps,
} from '@fox-ui/components';

export const RangeDatepickerScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: RangeDatepickerProps): RangeDatepickerElement => (
    <RangeDatepickerShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={rangeDatepickerShowcase}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default RangeDatepickerScreen;
