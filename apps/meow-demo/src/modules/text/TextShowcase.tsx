import React from 'react';

import {
  Container,
  List,
} from '@fox-ui/components';

import ShowcaseCard from '../showcase/ShowcaseCard';
import { TextDemoTypes } from './TextDemoTypes';

export const TextShowcase = () => (
  <Container className='h-full'>

    <List
      data={TextDemoTypes}
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
