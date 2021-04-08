import styled from "styled-components";
import PolarAreaChart from "../../components/charts/PolarAreaChart";
import Rate from "../../components/uiParts/RateStars";
import Button from "../../components/uiParts/Button";

export default function Evaluate() {
  return (
    <Container>
      <Contents>
        <H2>Q1. 목표관리 및 목표공유</H2>
        <div>
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
        </div>
        <PolarAreaChart style={chartStyle} />
      </Contents>
      <Button style={buttonStyle}>다음으로</Button>
    </Container>
  );
}

const marginTop = {
  marginTop: "4%",
};

const chartStyle = {
  marginTop: "11%",
  height: "26%",
};

const buttonStyle = {
  marginBottom: "7%",
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const H2 = styled.h2`
  font-size: 1.7em;
  margin: 19% 0 15% 0;
  font-weight: 510;
`;

const H3 = styled.h3`
  font-size: 1.16em;
  margin: 0;
`;
