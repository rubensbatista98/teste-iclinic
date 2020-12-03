import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select'
    },
    onClick: {
      action: 'Clicked!'
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    children: 'choose your path again, Padawan'
  }
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;
