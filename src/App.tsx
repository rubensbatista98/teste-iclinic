import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { SideProvider } from 'context/SideContext';
import Routes from 'Routes';

import GlobalStyles from 'styles/global';

import theme from 'styles/theme';

function App() {
  return (
    <SideProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </SideProvider>
  );
}

export default App;
