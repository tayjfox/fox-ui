import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { DatepickerShowcase } from '@/scenes/components/datepicker/datepicker-showcase.component';
import { datepickerShowcase } from '@/scenes/components/datepicker/type';
import { DatepickerElement, DatepickerProps } from '@meow-ui/components';

export const DatepickerScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: DatepickerProps): DatepickerElement => (
    <DatepickerShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={datepickerShowcase}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};
export default DatepickerScreen;
