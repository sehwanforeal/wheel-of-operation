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
      <H1>Wheel of Operation</H1>
      <SubTitle>최고의 CXM으로 성장하기 위한 8가지 핵심역량</SubTitle>
      <Description>
        <span>
          휠 오브 오퍼레이션은 회사 혹은 CXM관점에서 회사의 오퍼레이션을
          성장시키는 핵심요소 8 가지를 하나의 바퀴로 시각화하여 나와 우리회사의
          장점과 개선점을 파악하여 균형감있게 성장시킬 수 있게 돕는 온라인
          진단지 입니다.
          <br />
          8가지 운영역량 항목별로 3가지 질문을 주어지며 완료하는데 10분 내외로
          소요되며, 전혀 그렇지않다 (1점) ~ 매우 그렇다 (5점) 척도에서 회사 혹은
          개인의 관점에서 주관적으로 체크해 보세요.
        </span>
      </Description>
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
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 550;
  margin: 1% 0;
  color: rgb(94, 94, 94);
`;

const Container = styled.div`
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 35px;
`;
const Description = styled.div`
  font-size: 0.8rem;
  padding: 4% 2%;
  border-radius: 10px;
  color: rgb(124, 124, 124);
`;
