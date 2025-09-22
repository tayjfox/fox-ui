import React from 'react';

import {
  TabBar,
  TabBarProps,
  ThemeProvider,
} from '@fox-ui/components';

import { Theming } from '../services/theme.service';

export const BrandTabBar = (props: TabBarProps): React.ReactElement => {

  const brandTheme = Theming.useTheme('brand');

  return (
    <ThemeProvider theme={brandTheme}>
      <TabBar {...props} />
    </ThemeProvider>
  );
};
