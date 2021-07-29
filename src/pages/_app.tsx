import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

import { AuthProvider } from '../hooks/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
