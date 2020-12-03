import { Story, Meta } from '@storybook/react/types-6-0';

import { ReactComponent as ArrowLeft } from 'assets/img/arrow-icon.svg';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select'
    },
    disabled: {
      control: 'boolean'
    },
    onClick: {
      action: 'Clicked!'
    },
    icon: {
      control: ''
    }
  },
  args: {
    children: 'choose your path again, Padawan'
  }
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  icon: <ArrowLeft />
};
