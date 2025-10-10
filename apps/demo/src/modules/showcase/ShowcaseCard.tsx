import React from 'react';

import { View } from 'react-native';

import { Text } from '@fox-ui/components';
import { Card } from '@fox-ui/components-legacy';

import { ShowcaseCardProps } from './types';

export const ShowcaseCard = (props: ShowcaseCardProps): React.ReactElement => {

  const { title, description, children } = props;
  return (
    <Card
      status='primary'
      header={(headerProps) => (
        <View {...headerProps}>
          <Text category='h6'>
            {title}
          </Text>
          {description && (
            <Text

              appearance='hint'
              category='s2'
            >
              {description}
            </Text>
          )}
        </View>
      )}
    >
      {children}
    </Card>
  );
}

export default ShowcaseCard;