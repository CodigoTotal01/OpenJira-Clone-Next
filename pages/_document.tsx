import { Html, Head, Main, NextScript } from 'next/document'
//Permite modificar el doumento HMTL de la pagina, para los meta tag estilos globales o scripsts
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />

        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
