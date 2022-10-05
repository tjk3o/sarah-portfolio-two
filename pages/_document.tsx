import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html lang='en' style={{ visibility: 'hidden' }}>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/touch-icon-iphone.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
