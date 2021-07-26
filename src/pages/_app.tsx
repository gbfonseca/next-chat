import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../hooks/auth';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

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
