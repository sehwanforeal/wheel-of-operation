import styled from "styled-components";
import Button from "../components/uiParts/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const startEvaluate = () => {
    router.push("/evaluate");
  };

  return (
    <Container>
      <h1>wheel of operation</h1>
      <span>
        안녕하세요 여기에 내용이 들어갈꺼에요 우리 회사의 미션과 비젼을 나는
        정확히 이해하고 있나요?
      </span>
      <Button onClick={startEvaluate} style={{ marginTop: "50px" }}>
        진단시작하기
      </Button>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20%;
`;
