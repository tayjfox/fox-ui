import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupElement,
  ButtonGroupProps,
} from '@meow-ui/components';

export const ButtonGroupShowcase = (
  props?: ButtonGroupProps,
): ButtonGroupElement => (
  <ButtonGroup {...props}>
    <Button>L</Button>
    <Button>M</Button>
    <Button>R</Button>
  </ButtonGroup>
);
