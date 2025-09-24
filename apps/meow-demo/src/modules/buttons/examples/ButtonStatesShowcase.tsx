import React from 'react';

import {
  Button,
  HStack,
} from '@fox-ui/components';

export const ButtonStatesShowcase = (): React.ReactElement => (
  <HStack alignment='center' distribution='start' gap="sm">
    <Button>
      Text/ACTIVE
    </Button>
    <Button
      disabled={true}
    >
      DISABLED
    </Button>
  </HStack>
);
