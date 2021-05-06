import "antd/dist/antd.css";
import "../styles.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ResultProvider } from "../common/contexts/ResultContext";
import MainLayout from "../components/layouts/MainLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WheelOfOperation</title>
      </Head>
      <ResultProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ResultProvider>
    </>
  );
}
