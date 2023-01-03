import Document, { Html, Head, Main, NextScript } from "next/document";
// This will apply on every project screen
class MyDocument extends Document {
  // Don't need to modify every page in my project
  //   static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx);
  //     return { ...initialProps };
  //   }

  render() {
    return (
      <Html>
        {/* Cases where I would want to extend the Head tag
          - favicons
          - fonts / webfonts
          - stylesheets
          - scripts
          */}
        <Head />
        <body>
          <Main />
          <div id="cart" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
