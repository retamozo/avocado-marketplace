import { AppProps } from "next/app";
import { Layout } from "components";
import "../style.css";
import "semantic-ui-css/semantic.min.css";
import { CartProvider } from "store/CartProvider";
/*
    Cases where I would want to extend the App
        - Providers
        - Theme
        - Layouts
        - Data
        - additional props
   */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
