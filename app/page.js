// pages/_app.js
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css';
import RootLayout from '@/app/layout';
function Home({ Component, pageProps }) {
  return (
      <SessionProvider session={pageProps.session}>
        <RootLayout Component={Component} pageProps={pageProps} />
      </SessionProvider>
  );
}

export default Home;

