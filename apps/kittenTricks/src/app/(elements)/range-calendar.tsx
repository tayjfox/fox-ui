import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { RangeCalendarShowcase } from '@/scenes/components/range-calendar/range-calendar-showcase.component';
import { calendarShowcase } from '@/scenes/components/range-calendar/type';
import { RangeCalendarElement, RangeCalendarProps } from '@meow-ui/components';

export const RangeCalendarScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: RangeCalendarProps): RangeCalendarElement => (
    <RangeCalendarShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={calendarShowcase}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default RangeCalendarScreen;
