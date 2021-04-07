import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

export default function MainLayout({ children }: PropsWithChildren<ReactNode>) {
  return (
    <Screen>
      <ViewContainer>
        <Contents>{children}</Contents>
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
`;
