import "antd/dist/antd.css";
import "../styles.css";
import styled from "styled-components";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
const Container = styled.div`
  max-width: 370px;
  min-width: 330px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
