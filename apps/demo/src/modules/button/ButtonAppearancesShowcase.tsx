import React from 'react';

import {
  Button,
  HStack,
} from '@fox-ui/components-legacy';

export const ButtonAppearancesShowcase = (): React.ReactElement => (
  <HStack alignment='center' distribution='start' gap="sm">

    <Button appearance='filled'>
      FILLED
    </Button>

    <Button appearance='outline'>
      OUTLINE
    </Button>

    <Button appearance='ghost'>
      GHOST
    </Button>

  </HStack>
);