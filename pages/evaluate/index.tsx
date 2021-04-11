import { useState, useMemo, ReactElement } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import rawData from "../../common/data";
import PolarAreaChart from "../../components/charts/PolarAreaChart";
import Rate from "../../components/uiParts/RateStars";
import Button from "../../components/uiParts/Button";

const sum = (arr: number[]) => arr.reduce((s, c) => s + c, 0);

const copyWithNewValue = (source: number[], index: number, value: number) => {
  const copy = [...source];
  copy[index] = value;
  return copy;
};

const lastSubject = rawData.length - 1;

const labels = rawData.map((subject) => subject.name);

export default function Evaluate() {
  const [subject, setSubject] = useState(0);
  const [thisScore, setThisScore] = useState([0, 0, 0]);
  const [totalScore, setTotalScore] = useState(rawData.map(() => 0));

  const router = useRouter();
  const data = useMemo(() => rawData[subject], [subject]);
  const isLastSubject = lastSubject === subject;

  const toNextSubject = () => {
    setSubject((subject) => subject + 1);
    setThisScore([0, 0, 0]);
  };

  const makeQuestionForm = (question: string, index: number): ReactElement => {
    return (
      <div key={`${question}-div-${index}`}>
        <H3>{question}</H3>
        <Rate rateIndex={index} onChange={onRateChange} />
      </div>
    );
  };

  const onRateChange = (value: number, rateIndex: number): void => {
    const thisScoreCopy = copyWithNewValue(thisScore, rateIndex, value);
    const totalScoreCopy = copyWithNewValue(
      totalScore,
      subject,
      sum(thisScoreCopy)
    );
    setThisScore(thisScoreCopy);
    setTotalScore(totalScoreCopy);
  };

  console.log(`
  subject : ${subject}
  thisScore : ${thisScore}
  totalScore : ${totalScore}`);

  return (
    <Container>
      <Contents>
        <H2>{data.name}</H2>
        <div>{data.questions.map(makeQuestionForm)}</div>
        <PolarAreaChart
          style={chartStyle}
          series={totalScore}
          labels={labels}
        />
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
