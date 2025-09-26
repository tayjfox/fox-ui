import React from 'react';

import {
  ImageProps,
  StyleSheet,
} from 'react-native';

import {
  Button,
  HStack,
  Icon,
  IconElement,
  IconProps,
  Spinner,
  View,
} from '@fox-ui/components';

const StarIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='star'
  />
);

const LoadingIndicator = (props: Partial<ImageProps> = {}): React.ReactElement => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size='small' />
  </View>
);

export const ButtonAccessoriesShowcase = (): React.ReactElement => (
  <View>
    <HStack className='flex-wrap'>

      <Button
        style={styles.button}
        status='primary'
        accessoryLeft={StarIcon}
      >
        PRIMARY
      </Button>

      <Button
        style={styles.button}
        status='success'
        accessoryRight={StarIcon}
      >
        SUCCESS
      </Button>

      <Button
        style={styles.button}
        status='danger'
        accessoryLeft={StarIcon}
      />
    </HStack>
    <HStack>
      <Button
        style={styles.button}
        appearance='ghost'
        status='danger'
        accessoryLeft={StarIcon}
      />

      <Button
        style={styles.button}
        appearance='outline'
        accessoryLeft={LoadingIndicator}
      >
        LOADING
      </Button>

    </HStack>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
  },
  button: {
    margin: 2,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
