import styled from "styled-components";
import PolarAreaChart from "../../components/charts/PolarAreaChart";
import Rate from "../../components/uiParts/RateStars";

export default function Evaluate() {
  return (
    <Container>
      <H2>Q1. 목표관리 및 목표공유</H2>
      <Questions>
        <H3>우리 회사의 미션과 비젼을 나는 정확히 이해하고 있나요?</H3>
        <Rate />
        <H3 style={marginTop}>
          우리 회사의 월간 정량적 목표를 나는 공유받고 있나요?
        </H3>
        <Rate />
        <H3 style={marginTop}>
          우리 팀 /회사의 목표와 나의 KPI와 일치화 되어 있나요?
        </H3>
        <Rate />
      </Questions>
      <PolarAreaChart style={chartStyle} />
    </Container>
  );
}

const marginTop = {
  marginTop: "4%",
};

const chartStyle = {
  marginTop: "18%",
  height: "24%",
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Questions = styled.div``;

const H2 = styled.h2`
  font-size: 1.7em;
  margin: 20% 0 15% 0;
  font-weight: 510;
`;

const H3 = styled.h3`
  font-size: 1.16em;
  margin: 0;
`;
