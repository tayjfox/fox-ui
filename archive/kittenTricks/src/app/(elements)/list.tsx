import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { ListShowcase } from '@/scenes/components/list/list-showcase';
import {
  listSettings,
  listShowcase,
} from '@/scenes/components/list/type';
import {
  ListElement,
  ListProps,
  StyleService,
  useStyleSheet,
} from '@fox-ui/components';

export const ListScreen = (): React.ReactElement => {
  const router = useRouter();
  const styles = useStyleSheet(themedStyle);

  const renderItem = (props: ListProps): ListElement => (
    <ListShowcase {...props} style={[props.style, styles.component]} />
  );

  return (
    <ShowcaseContainer
      style={styles.container}
      showcase={listShowcase}
      settings={listSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

const themedStyle = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-2',
  },
  component: {
    // ignore showcase container padding
    marginHorizontal: -24,
  },
});

export default ListScreen;
