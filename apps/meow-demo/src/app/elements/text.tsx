import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import { TextShowcase } from '@/modules';

export default function TextScreen() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ headerShown: true, title: 'Text' });
  }, [navigation]);


  navigation.getParent()
  return (
    <View className='py-safe h-full'>
      <TextShowcase />
    </View>
  );
}


