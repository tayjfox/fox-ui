import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  TooltipShowcase,
} from '@/scenes/components/tooltip/tooltip-showcase.component';
import {
  tooltipSettings,
  tooltipShowcase,
} from '@/scenes/components/tooltip/type';
import {
  TooltipElement,
  TooltipProps,
} from '@fox-ui/components';

export const TooltipScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: TooltipProps): TooltipElement => (
    <TooltipShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={tooltipShowcase}
      settings={tooltipSettings}
      renderItem={renderItem}
      onBackPress={() => router.back()}
    />
  );
};

export default TooltipScreen;
