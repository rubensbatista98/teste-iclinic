import { Story, Meta } from '@storybook/react/types-6-0';

import { Spinner, SpinnerProps } from '.';

export default {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'select' },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } }
  }
} as Meta;

export const Default: Story<SpinnerProps> = (args) => <Spinner {...args} />;
