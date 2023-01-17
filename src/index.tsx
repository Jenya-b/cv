import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App/App';
import { baseTheme } from 'styles/theme';
import GlobalStyles from 'styles/global';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ThemeProvider theme={baseTheme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
