import React from 'react';

import { View } from 'react-native';

import {
  Container,
  List,
  Text,
} from '@fox-ui/components';

import { TopNavDemoTypes } from './TopNavDemoTypes';

export const TopNavShowcase = () => (


  <List
    data={TopNavDemoTypes}
    renderItem={(info) => {

      const CardContent = info.item.component;

      return (
        <View className='mb-4 pt-3'>

          <Container className='mb-4 py-2'>

            <Text category='h6'>
              {info.item.title}
            </Text>

            <Text

              appearance='hint'
              category='s2'
            >
              {info.item.description}
            </Text>

          </Container>

          <CardContent />
        </View>

      )

    }}
  />


);
