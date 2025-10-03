import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import { TopNavShowcase } from '@/modules';

export default function TopNavigationScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ headerShown: true, title: 'Top Navigation' });
  }, [navigation]);
  return (
    <View className='py-safe h-full'>
      <TopNavShowcase />
    </View>
  );
}


