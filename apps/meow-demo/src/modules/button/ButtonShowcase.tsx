import React from 'react';

import {
  Container,
  List,
} from '@fox-ui/components';

import ShowcaseCard from '../showcase/ShowcaseCard';
import { ButtonDemoTypes } from './ButtonDemoTypes';

export const ButtonShowcase = () => (
  <Container className='h-full'>



    <List
      data={ButtonDemoTypes}
      renderItem={(info) => {

        const CardContent = info.item.component;

        return (
          <ShowcaseCard title={info.item.title} description={info.item.description} >
            <CardContent />
          </ShowcaseCard>

        )

      }}
    />

  </Container>
);
