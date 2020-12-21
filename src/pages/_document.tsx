import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            className="daum_roughmap_loader_script"
            src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
