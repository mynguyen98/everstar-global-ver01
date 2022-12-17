import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { LangProvider } from "../store/lang-switch-context";
function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </LangProvider>
  );
}

export default MyApp;
