import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        className={`font-body overflow-x-hidden bg-white text-gray-600 antialiased`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
