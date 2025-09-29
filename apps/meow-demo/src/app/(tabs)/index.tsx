import React from 'react';

import { useRouter } from 'expo-router';
import { View } from 'react-native';

import {
  Button,
  Divider,
  Icon,
  IconElement,
  List,
  ListItem,
} from '@fox-ui/components';

interface IListItem {
  title: string;
  description: string;
  route: string
}

const data = [
  {
    title: 'Top Navigation',
    description: 'Top navigation bar',
    route: '/elements/top-navigation'
  },
  {
    title: 'Buttons',
    description: 'Different styles of buttons',
    route: '/elements/button'
  },
  {
    title: 'Button Group',
    description: 'Group of buttons',
    route: '/elements/button/group'
  }
];

export const ListAccessoriesShowcase = (): React.ReactElement => {

  const router = useRouter();
  const renderItemAccessory = (): React.ReactElement => (
    <Button size='tiny'>
      View more
    </Button>
  );

  interface RenderItemIconProps extends React.ComponentProps<typeof Icon> { }

  const renderItemIcon = (props: RenderItemIconProps): IconElement => (
    <Icon
      {...props}
      name='person'
    />
  );
  const renderItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => (
    <ListItem
      title={item.title}
      description={item.description}
      onPress={() => {
        router.navigate(item.route);
      }}
      accessoryRight={(props) => (
        <Icon
          {...props}
          name='chevron-right-outline'
        />
      )}

    />
  );

  return (
    <View className='p-safe'>

      <List

        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </View>
  );
};



export default ListAccessoriesShowcase;