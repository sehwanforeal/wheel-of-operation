import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <title>WheelOfOperation</title>
          <style />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
          />
          <link
            href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
            rel="stylesheet"
            type="text/css"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="그로우엔베터(grownbetter) 오퍼레이션 자가진단 서비스"
          />
          <meta
            name="keyword"
            content="wheelofoperation, 오퍼레이션, cxm, 더자람, grownbetter, 그로우엔베터"
          />
          <meta name="author" content="grownbetter" />
          <meta
            property="og:url"
            content="https://wheelofoperation.grownbetter.com/"
          />
          <meta property="og:title" content="Wheel of Operation" />
          <meta
            property="og:description"
            content="오퍼레이션 자가진단 서비스"
          />
          <meta
            property="og:image"
            content="https://wheelofoperation.s3.ap-northeast-2.amazonaws.com/Group_1.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
