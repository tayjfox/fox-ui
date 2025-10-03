import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import { ButtonGroupShowcase } from '@/modules';

export default function ButtonGroup() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ headerShown: true, title: 'Button Group' });
  }, [navigation]);
  return (
    <View className='p-safe h-full'>
      <ButtonGroupShowcase />
    </View>
  );
}


