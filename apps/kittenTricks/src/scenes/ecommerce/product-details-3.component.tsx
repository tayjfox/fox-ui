import React from 'react';

import { StyleSheet } from 'react-native';

import {
  ArrowIosBackIcon,
  BookmarkIcon,
  BookmarkOutlineIcon,
} from '@/components/icons';
import { SafeAreaLayout } from '@/components/safe-area-layout.component';
import {
  TopNavigation,
  TopNavigationAction,
} from '@meow-ui/components';

import ContentView from '../../layouts/ecommerce/product-details-3';

export const ProductDetails3Screen = (): React.ReactElement => {
  const [bookmarked, setBookmarked] = React.useState<boolean>(false);

  const onBookmarkActionPress = (): void => {
    setBookmarked(!bookmarked);
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={router.back} />
  );

  const renderBookmarkAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={bookmarked ? BookmarkIcon : BookmarkOutlineIcon}
      onPress={onBookmarkActionPress}
    />
  );

  return (
    <SafeAreaLayout style={styles.container} insets='top'>
      <TopNavigation
        title='Product Details'
        accessoryLeft={renderBackAction}
        accessoryRight={renderBookmarkAction}
      />
      <ContentView navigation={navigation} />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
