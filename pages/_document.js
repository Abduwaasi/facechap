import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='dark'>
      <Head>
      <title>Pagechap</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}