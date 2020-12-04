import { Story, Meta } from '@storybook/react/types-6-0';
import parse from 'html-react-parser';

import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    size: { control: 'select' }
  },
  args: {
    children: 'Welcome to <strong>iClinic</strong>'
  }
} as Meta;

export const Default: Story<HeadingProps> = (args) => (
  // convert string into HTML to be render by React

  // eslint-disable-next-line react/no-children-prop
  <Heading {...args} children={parse(args.children as string)} />
);
