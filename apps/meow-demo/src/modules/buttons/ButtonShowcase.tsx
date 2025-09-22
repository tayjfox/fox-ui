import React from 'react';

import { ListRenderItemInfo } from 'react-native';

import {
  Container,
  List,
} from '@fox-ui/components';

import ShowcaseCard from '../showcase/ShowcaseCard';
import { ShowcaseItem } from '../showcase/types';
import { ButtonDemoTypes } from './ButtonDemoTypes';

export const ButtonShowcase = () => (
  <Container className='h-full'>

    <ListCustomItemShowcase />

  </Container>
);



const ListCustomItemShowcase = (): React.ReactElement => {

  return (
    <List
      data={ButtonDemoTypes}
      renderItem={(info: ListRenderItemInfo<ShowcaseItem>): React.ReactElement => {

        const CardContent = info.item.component;

        return (
          <ShowcaseCard title={info.item.title} description={info.item.description} >
            <CardContent />
          </ShowcaseCard>

        )

      }}
    />
  );
};

