import "antd/dist/antd.css";
import "../styles.css";
import styled from "styled-components";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Screen>
      <ViewContainer>
        <Contents>
          <Component {...pageProps} />
        </Contents>
      </ViewContainer>
    </Screen>
  );
}

const Screen = styled.div`
  display: flex;
  justify-content: center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
`;

const ViewContainer = styled.div`
  max-width: 420px;
  min-height: 100vh;
  display: block;
  width: 100%;
  background-color: rgb(250, 250, 250);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  margin-top: 30px;
`;
