import styled from "styled-components";
import rawData from "../common/data";
import Button from "../components/uiParts/Button";
import RadarChart from "../components/charts/RadarChart";
import { useRouter } from "next/router";

const labels = rawData.map((subject) => {
  const { name } = subject;
  return name.slice(3);
});

export default function Home() {
  const router = useRouter();

  const startEvaluate = () => {
    router.push("/evaluate");
  };

  return (
    <Container>
      <H1>wheel of operation</H1>
      <RadarChart labels={labels} />
      <Button onClick={startEvaluate} style={{ marginTop: "50px" }}>
        진단시작하기
      </Button>
    </Container>
  );
}

const H1 = styled.h1`
  font-weight: 600;
  font-size: 30px;
  text-align: center;
`;

const Container = styled.div`
  margin-top: 20%;
`;
