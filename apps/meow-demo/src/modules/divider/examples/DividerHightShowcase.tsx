import React from 'react';

import {
  Divider,
  Text,
  VStack,
} from '@ui-kitten/components';

export const DividerHightShowcase = (): React.ReactElement => (
  <VStack gap="md">

    <Divider />
    <Text>
      This divider has the default height of 1 pixel.
    </Text>
    <Divider style={{ height: 8 }} />
    <Text>
      This divider has a height of 8 pixels.
    </Text>
    <Divider style={{ height: 16 }} />
    <Text>
      This divider has a height of 16 pixels.
    </Text>
    <Text>
      Diviers can have colour too.
    </Text>
    <Divider style={{ height: 4, backgroundColor: 'red' }} />
    <Text>
      This divider has a height of 4 pixels and a red background colour.
    </Text>
    <Divider style={{ height: 64, backgroundColor: 'orange' }} />
    <Text>
      This divider is huge. What would you use it for? That is the question.
    </Text>

  </VStack>
);


