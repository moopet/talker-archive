import { useRouter } from 'next/router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} key={router.asPath} />
    </ThemeProvider>
  );
}

export default App
