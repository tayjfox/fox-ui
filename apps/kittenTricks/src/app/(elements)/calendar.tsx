import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  CalendarElement,
  CalendarProps,
} from '@meow-ui/components';

import {
  CalendarShowcase,
} from '../../scenes/components/calendar/calendar-showcase';
import { calendarShowcase } from '../../scenes/components/calendar/type';

export const CalendarScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: CalendarProps): CalendarElement => (
    <CalendarShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={calendarShowcase}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default CalendarScreen;
