import React from 'react';

import {
  Container,
  List,
} from '@fox-ui/components';

import ShowcaseCard from '../showcase/ShowcaseCard';
import { DividerDemoTypes } from './DividerDemoTypes';

export const DividerShowcase = () => (
  <Container className='h-full'>

    <List
      data={DividerDemoTypes}
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
