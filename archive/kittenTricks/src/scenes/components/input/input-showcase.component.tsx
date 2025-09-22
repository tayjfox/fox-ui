import React from 'react';

import {
  Input,
  InputElement,
  InputProps,
} from '@fox-ui/components';

export const InputShowcase = (props?: InputProps): InputElement => {
  const [value, setValue] = React.useState<string>(null);

  return (
    <Input
      {...props}
      value={value}
      onChangeText={setValue}
      placeholder='Place your Text'
    />
  );
};
