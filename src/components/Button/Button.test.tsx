import userEvent from '@testing-library/user-event';

import { ReactComponent as ArrowLeft } from 'assets/img/arrow-icon.svg';
import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/theme';

import Button from '.';

describe('<Button />', () => {
  test('should render Button with medium size by default', () => {
    const { getByRole } = renderWithTheme(<Button>Hello</Button>);

    expect(getByRole('button', { name: /hello/i })).toHaveStyle({
      'font-size': theme.font.sizes.medium,
      padding: `0px ${theme.spacings.medium}`
    });
  });

  test('should render Button with large size', () => {
    const { getByRole } = renderWithTheme(<Button size="large">Hello</Button>);

    expect(getByRole('button', { name: /hello/i })).toHaveStyle({
      'font-size': theme.font.sizes.large,
      padding: `0px ${theme.spacings.xlarge}`
    });
  });

  test('should render Button with uppercase content', () => {
    const { getByRole } = renderWithTheme(<Button uppercase>Hello</Button>);

    expect(getByRole('button', { name: /hello/i })).toHaveStyle({
      'text-transform': 'uppercase',
      'letter-spacing': '0.5rem'
    });
  });

  test('should render a disabled Button', () => {
    const onClick = jest.fn();

    const { getByRole } = renderWithTheme(
      <Button onClick={onClick} disabled>
        Hello
      </Button>
    );

    const button = getByRole('button', { name: /hello/i });

    expect(button).toHaveStyle({
      opacity: '0.5',
      'pointer-events': 'none'
    });

    userEvent.click(button);

    expect(onClick).not.toBeCalled();
  });

  test('should render a Button with icon', () => {
    const { getByTestId } = renderWithTheme(
      <Button icon={<ArrowLeft data-testid="icon" />}>Hello</Button>
    );

    expect(getByTestId(/icon/i)).toBeInTheDocument();
  });

  test('should render a minimalist version', () => {
    const { getByRole } = renderWithTheme(<Button minimal>My Button</Button>);

    expect(getByRole('button', { name: /my button/i })).toHaveStyle({
      backgroundColor: 'none',
      padding: '0 1.5rem'
    });
  });

  test('should render Button as link', () => {
    const HREF = '/something-page';

    const { getByRole } = renderWithTheme(
      <Button<{ href: string }> as="a" href={HREF}>
        My Button
      </Button>
    );

    const link = getByRole('link', { name: /my button/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', HREF);
  });
});
