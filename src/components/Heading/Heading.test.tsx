import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/theme';

import Heading from '.';

describe('<Heading />', () => {
  test('should render Heading with medium size by default', () => {
    const { getByRole } = renderWithTheme(<Heading>Hello World</Heading>);

    expect(getByRole('heading', { name: /hello world/i })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge
    });
  });

  test('should render Heading with huge size', () => {
    const { getByRole } = renderWithTheme(
      <Heading size="huge">Hello World</Heading>
    );

    expect(getByRole('heading', { name: /hello world/i })).toHaveStyle({
      'font-size': theme.font.sizes.huge
    });
  });
});
