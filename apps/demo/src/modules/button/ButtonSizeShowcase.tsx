import React from 'react';

import { StyleSheet } from 'react-native';

import {
  Button,
  Layout,
} from '@fox-ui/components-legacy';

export const ButtonSizeShowcase = (): React.ReactElement => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    button: {
      margin: 2,
    },
  });
  return (
    <Layout
      style={styles.container}
      level='2'
    >

      <Button
        style={styles.button}
        size='tiny'
      >
        TINY
      </Button>

      <Button
        style={styles.button}
        size='small'
      >
        SMALL
      </Button>

      <Button
        style={styles.button}
        size='medium'
      >
        MEDIUM
      </Button>

      <Button
        style={styles.button}
        size='large'
      >
        LARGE
      </Button>

      <Button
        style={styles.button}
        size='giant'
      >
        GIANT
      </Button>

    </Layout>
  )
};

