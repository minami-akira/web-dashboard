import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/layouts/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PreDiscovered</title>
        <meta name="description" content="preDiscovered" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
