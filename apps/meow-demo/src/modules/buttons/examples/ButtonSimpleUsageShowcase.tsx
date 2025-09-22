import React, {
  ReactElement,
  useState,
} from 'react';

import { View } from 'react-native';

import {
  Button,
  Text,
} from '@fox-ui/components';

export const ButtonSimpleUsageShowcase = (): ReactElement => {

  const [counter, setCounter] = useState(0);

  return (
    <View className='flex-row items-center' >

      <Button onPress={() => setCounter(counter + 1)}>
        I am a button
      </Button>

      <Text className="mx-2" >
        {`Pressed ${counter} times`}
      </Text>

    </View>
  );
};


