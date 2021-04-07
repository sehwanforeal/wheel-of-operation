import "antd/dist/antd.css";
import "../styles.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layouts/MainLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
