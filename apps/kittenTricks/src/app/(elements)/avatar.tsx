import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { AvatarShowcase } from '@/scenes/components/avatar/avatar-showcase.component';
import { avatarShowcase } from '@/scenes/components/avatar/type';

export const AvatarScreen = (): React.ReactElement => {
  const router = useRouter();

  return (
    <ShowcaseContainer
      showcase={avatarShowcase}
      renderItem={AvatarShowcase}
      onBackPress={router.back}
    />
  );
};

export default AvatarScreen;
