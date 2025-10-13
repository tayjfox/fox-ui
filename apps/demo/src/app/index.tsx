import React, { useEffect } from 'react';

import {
  useNavigation,
  useRouter,
} from 'expo-router';

import {
  Divider,
  HStack,
  Icon,
  List,
  ListItem,
  ListItemTitle,
  ListSectionHeader,
  Text,
  View,
} from '@fox-ui/components';

type ShowCaseList = {
  title?: string;
  items: IListItem[];
};

interface IListItem {
  title: string;
  badge?: 'new' | 'updated' | 'deprecated' | 'beta';
  description: string;
  route: string;
}

const dataSection: ShowCaseList[] = [
  {
    title: 'Content',
    items: [
      {
        title: 'Text',
        description: 'Text. Self explanatory right?',
        route: '/components/global/text',
      },
      {
        title: 'Image',
        badge: 'New',
        description: 'Images are used to display well... Images',
        route: '/components/global/image',
      },
      {
        title: 'Avatar',
        description: 'Avatars are used to represent people.',
        route: '/components/content/avatar',
      },
      {
        title: 'Badge',
        description: 'Badges are used to show status or notification count.',
        route: '/components/content/badge',
      },
    ],
  },
  {
    title: 'Global',
    items: [
      {
        title: 'Layouts',
        badge: 'new',
        description: 'Separate content with hirarchy.',
        route: '/components/global/layout',
      },

      {
        title: 'Divider',
        description: 'A divider is a thin line.',
        route: '/components/global/divider',
      },
      {
        title: 'Icon',
        description: 'Icons are used to enhance the UI.',
        route: '/components/global/icon',
      },
      {
        title: 'Card',
        description: 'Cards are used to display content.',
        route: '/components/global/card',
      },
      {
        title: 'List',
        description: 'List renders a scrollable list of items.',
        route: '/components/global/list',
      },
    ],
  },
  {
    title: 'Navigation',
    items: [
      {
        title: 'Top Navigation',
        description: 'The thing at the top of the screen',
        route: '/components/navigation/top-navigation',
      },
    ],
  },
  {
    title: 'Form',
    items: [
      {
        title: 'Buttons',
        description: 'Tappable thingies',
        route: '/components/form/button',
      },
      {
        title: 'Button Group',
        description: 'Group of tappable thingies',
        route: '/components/form/button/group',
      },
    ],
  },
];

export const ListAccessoriesShowcase = (): React.ReactElement => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true, title: 'UI Elements' });
  }, [navigation]);

  const router = useRouter();

  const renderItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => {
    const Badge1 = item.badge ? (
      <HStack>
        <Text>Badge</Text>
        <Text>{item.title}</Text>
      </HStack>
    ) : null;

    const Badge = (props: ListItemTitle) => {
      return (
        <HStack alignment="center" gap="sm">
          <Text {...props}>{item.title}</Text>
          {item.badge ? <Text category="label">{item.badge.toUpperCase()}</Text> : null}
        </HStack>
      );
    };

    return (
      <ListItem
        title={Badge}
        description={item.description}
        onPress={() => {
          router.navigate(item.route);
        }}
        accessoryRight={(props) => <Icon {...props} name="chevron-right-outline" />}
      />
    );
  };
  const titleItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => {
    return <ListSectionHeader title={item.title} />;
  };

  return (
    <View className="p-safe h-full">
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
