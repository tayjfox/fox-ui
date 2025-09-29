import React from 'react';

import {
  type RelativePathString,
  useRouter,
} from 'expo-router';
import {
  Dimensions,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';

import {
  Card,
  List,
  ListElement,
  type ListItemElement,
  type ListProps,
  Text,
} from '@fox-ui/components';

import { MenuItem } from '../model/menu-item.model';

export interface MenuGridListProps extends Omit<ListProps, 'renderItem'> {
  data: MenuItem[];
}

export const MenuGridList = (props: MenuGridListProps): ListElement => {
  const { contentContainerStyle, ...listProps } = props;
  const router = useRouter();
  const renderItem = (info: ListRenderItemInfo<MenuItem>): ListItemElement => {
    return (
      <Card
        style={styles.item}
        onPress={() =>
          router.push({ pathname: info.item.route as RelativePathString })
        }>
        {info.item.icon({ width: 64, height: 64, alignSelf: 'center' })}
        <Text style={styles.itemTitle} category='s2'>
          {info.item.title}
        </Text>
      </Card>
    );
  };

  return (
    <List
      {...listProps}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      numColumns={3}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    aspectRatio: 1.0,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
  },
  itemImage: {
    alignSelf: 'center',
    width: 64,
    height: 64,
  },
  itemTitle: {
    alignSelf: 'center',
    marginTop: 8,
  },
});
