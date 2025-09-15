import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { cardSettings, cardShowcase } from '@/scenes/components/card/type';
import { StyleService, useStyleSheet } from '@meow-ui/components';

import { CardShowcase } from './card-showcase';

export const CardScreen = (): React.ReactElement => {
  const router = useRouter();
  const styles = useStyleSheet(themedStyle);

  return (
    <ShowcaseContainer
      style={styles.container}
      showcase={cardShowcase}
      settings={cardSettings}
      renderItem={CardShowcase}
      onBackPress={router.back}
    />
  );
};

const themedStyle = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-2',
  },
});

export default CardScreen;
