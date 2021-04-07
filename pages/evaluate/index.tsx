import styled from "styled-components";
import Button from "../../components/uiParts/Button";
import PolarAreaChart from "../../components/charts/PolarAreaChart";
import Rate from "../../components/uiParts/RateStars";

export default function Evaluate() {
  return (
    <Container>
      <h2>목표관리 및 목표공유</h2>
      <Questions>
        <H3>1. "우리 회사의 미션과 비젼을 나는 정확히 이해하고 있나요?"</H3>
        <Rate />
        <H3 style={{ marginTop: "15px" }}>
          2. "우리 회사의 월간 정량적 목표를 나는 공유받고 있나요?"
        </H3>
        <Rate />
        <H3 style={{ marginTop: "15px" }}>
          3. "우리 팀 /회사의 목표와 나의 KPI와 일치화 되어 있나요?"
        </H3>
        <Rate />
      </Questions>
      <PolarAreaChart />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Questions = styled.div``;

const H3 = styled.h3`
  font-size: 1.12em;
  margin: 0;
`;
