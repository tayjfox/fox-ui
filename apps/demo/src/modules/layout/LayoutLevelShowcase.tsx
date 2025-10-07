import React from 'react';

import { StyleSheet } from 'react-native';

import {
  Layout,
  Text,
  View,
} from '@fox-ui/components-legacy';

export const LayoutLevelShowcase = (): React.ReactElement => (
  <View>

    <Layout
      style={styles.layout}
      level='4'
    >
      <Text>
        4
      </Text>
    </Layout>

    <Layout
      style={styles.layout}
      level='3'
    >
      <Text>
        3
      </Text>
    </Layout>

    <Layout
      style={styles.layout}
      level='2'
    >
      <Text>
        2
      </Text>
    </Layout>

    <Layout
      style={styles.layout}
      level='1'
    >
      <Text>
        1
      </Text>
    </Layout>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
