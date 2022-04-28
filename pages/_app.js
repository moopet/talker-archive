import { useRouter } from 'next/router';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const router = useRouter();

  return <Component {...pageProps} key={router.asPath} />
}

export default App
