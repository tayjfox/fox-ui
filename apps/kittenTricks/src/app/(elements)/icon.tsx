import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { IconShowcase } from '@/scenes/components/icon/icon-showcase.component';
import { iconSettings, iconShowcase } from '@/scenes/components/icon/type';
import { IconElement, IconProps } from '@meow-ui/components';

export const IconScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: IconProps): IconElement => (
    <IconShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={iconShowcase}
      settings={iconSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};
export default IconScreen;
