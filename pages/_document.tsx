// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          rel="preload"
          href="/_next/static/css/chunks/303d85040bd35e91.css"
          as="style"
          onLoad={(e) => {
            const link = e.currentTarget as HTMLLinkElement;
            link.onload = null;
            link.rel = "stylesheet";
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="/_next/static/css/chunks/303d85040bd35e91.css"
          />
        </noscript>

        <link
          rel="preload"
          href="/_next/static/css/chunks/a7fc385ebc3a82f4.css"
          as="style"
          onLoad={(e) => {
            const link = e.currentTarget as HTMLLinkElement;
            link.onload = null;
            link.rel = "stylesheet";
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="/_next/static/css/chunks/a7fc385ebc3a82f4.css"
          />
        </noscript>

        <meta name="theme-color" content="#2cb67d" />
        <meta name="author" content="Felipe Panebianco Pontin" />
        <meta
          name="description"
          content="Monte seu deck do Clash Royale na vida real! Ímãs colecionáveis de alta qualidade para fãs do jogo."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
