import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import '../styles/globals.css'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} key={router.asPath} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
