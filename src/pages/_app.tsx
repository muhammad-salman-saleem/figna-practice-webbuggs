import FooterPart from "@/components/Footerpage/FooterPart";
import NavHeaderTop from "@/components/NavHeaderTop";
import Nav from "@/components/NavbarSection";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Figma Dsigne</title>
      </Head>
      <NavHeaderTop />
      <Nav />
      <Component {...pageProps} />
      <FooterPart />
    </>
  );
}
