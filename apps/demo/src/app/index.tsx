import React, { useEffect } from 'react';

import {
  useNavigation,
  useRouter,
} from 'expo-router';
import { View } from 'react-native';

import {
  Button,
  Divider,
  Icon,
  IconElement,
  List,
  ListItem,
  ListSectionHeader,
} from '@fox-ui/components-legacy';

interface IListItem {
  title: string;
  description: string;
  route: string
}



const dataSection = [
  {
    title: "Global",
    items: [
      {
        title: 'Layout',
        description: 'Separate content with hirarchy.',
        route: '/components/global/layout'
      },
      {
        title: 'Text',
        description: 'Text. Self explanatory right?',
        route: '/components/global/text'
      },
      {
        title: 'Divider',
        description: 'A divider is a thin line.',
        route: '/components/global/divider'
      },
      {
        title: 'Icon',
        description: 'Icons are used to enhance the UI.',
        route: '/components/global/icon'
      },
      {
        title: 'Card',
        description: 'Cards are used to display content.',
        route: '/components/global/card'
      }, {
        title: 'List',
        description: 'List renders a scrollable list of items.',
        route: '/components/global/list'
      },
    ]
  },
  {
    title: "Navigation",
    items: [
      {
        title: 'Top Navigation',
        description: 'The thing at the top of the screen',
        route: '/components/navigation/top-navigation'
      }]
  },
  {
    title: "Form",
    items: [
      {
        title: 'Buttons',
        description: 'Tappable thingies',
        route: '/components/form/button'
      },
      {
        title: 'Button Group',
        description: 'Group of tappable thingies',
        route: '/components/form/button/group'
      }
    ]
  }
];

export const ListAccessoriesShowcase = (): React.ReactElement => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true, title: 'UI Elements' });
  }, [navigation]);

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

  const titleItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => {

    return (
      <ListSectionHeader title={item.title} />
    )
  };

  return (
    <View className='p-safe h-full'>
      <List
        data={dataSection}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        sectionHeaderItem={titleItem}
      />
    </View>
  );
};



export default ListAccessoriesShowcase;