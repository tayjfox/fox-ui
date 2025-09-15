import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { ModalShowcase } from '@/scenes/components/modal/modal-showcase.component';
import { modalShowcase } from '@/scenes/components/modal/type';
import { ModalElement, ModalProps } from '@meow-ui/components';

export const ModalScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: ModalProps): ModalElement => (
    <ModalShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={modalShowcase}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default ModalScreen;
