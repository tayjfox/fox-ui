import React from 'react';

import { useRouter } from 'expo-router';
import {
  Text,
  View,
} from 'react-native';

import { Button } from '@fox-ui/components';

const NotFoundScreen = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
      </Text>
      <Text style={{ fontSize: 16, textAlign: "center" }}>
        The page you are looking for does not exist.
      </Text>

      <Button onPress={() => {
        router.navigate('/');
      }} className='bg-black' appearance='ghost'>Go Home</Button>

    </View>
  );
};

export default NotFoundScreen;