import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import { DividerShowcase } from '@/modules';

export default function DividerScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ headerShown: true, title: 'Dividers' });
  }, [navigation]);
  return (
    <View className='py-safe h-full'>
      <DividerShowcase />
    </View>
  );
}


