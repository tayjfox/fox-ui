import React, {
  ReactElement,
  useState,
} from 'react';

import {
  Button,
  HStack,
  Text,
} from '@fox-ui/components-legacy';

export const ButtonSimpleUsageShowcase = (): ReactElement => {

  const [counter, setCounter] = useState(0);

  return (
    <HStack alignment='center' distribution='start' gap="sm">

      <Button onPress={() => setCounter(counter + 1)}>
        I am a button
      </Button>

      <Text className="mx-2" >
        {`Pressed ${counter} times`}
      </Text>

    </HStack>
  );
};


