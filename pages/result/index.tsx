import styled from "styled-components";
import rawData from "../../common/data";
import { useResultContext } from "../../common/contexts/ResultContext";
import PolarAreaChart from "../../components/charts/PolarAreaChart";
// import Button from "../../components/uiParts/Button";

const labels = rawData.map((subject) => subject.name);

export default function Result() {
  const { result } = useResultContext();
  if (!result) {
    return;
  }

  return (
    <Container>
      <PolarAreaChart series={result} labels={labels} showLegend={true} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20%;
`;
