import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import rawData from "../../common/data";
import PolarAreaChart from "../../components/charts/PolarAreaChart";
import Rate from "../../components/uiParts/RateStars";
import Button from "../../components/uiParts/Button";

const lastSubject = rawData.length - 1;

const makeQuestionForm = (question: string, index: number) => {
  return (
    <div key={question + index}>
      <H3>{question}</H3>
      <Rate />
    </div>
  );
};

export default function Evaluate() {
  const [subject, setSubject] = useState(0);
  const router = useRouter();
  const data = useMemo(() => rawData[subject], [subject]);
  const isLastSubject = lastSubject === subject;

  const toNextSubject = useCallback(() => {
    setSubject((subject) => subject + 1);
  }, [subject]);

  return (
    <Container>
      <Contents>
        <H2>{data.name}</H2>
        <div>{data.questions.map(makeQuestionForm)}</div>
        <PolarAreaChart style={chartStyle} />
      </Contents>
      <Button
        onClick={isLastSubject ? () => router.push("/result") : toNextSubject}
        style={buttonStyle}
      >
        {isLastSubject ? "결과보기!" : "다음으로이동"}
      </Button>
    </Container>
  );
}

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
  margin: 19% 0 11% 0;
  font-weight: 510;
`;

const H3 = styled.h3`
  font-size: 1.16em;
  margin: 4% 0 0 0;
`;
