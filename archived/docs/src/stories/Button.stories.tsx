import { Button } from '@fox-ui/components';
import type {
  Meta,
  StoryObj,
} from '@storybook/react';

export default {
  component: Button,
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {

  },
}
