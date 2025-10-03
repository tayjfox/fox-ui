import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import { ButtonShowcase } from '@/modules';

export default function ButtonScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ headerShown: true, title: 'Button Group' });
  }, [navigation]);
  return (
    <View className='p-safe h-full'>
      <ButtonShowcase />
    </View>
  );
}


