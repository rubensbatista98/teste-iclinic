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
    },
    as: {
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

export const AsLink: Story<ButtonProps<{ href: string }>> = (args) => (
  <Button {...args} />
);

AsLink.args = {
  children: 'My Link',
  as: 'a',
  href: '#'
};
