import styled from "styled-components";
import rawData from "../../common/data";
import { useResultContext } from "../../common/contexts/ResultContext";
import { useRouter } from "next/router";
import RadarChart from "../../components/charts/RadarChart";
import Logo from "../../components/uiParts/Logo";

const labels = rawData.map((subject) => {
  const { name } = subject;
  return name.slice(3);
});

export default function Result() {
  const router = useRouter();
  const { result } = useResultContext();

  if (!result) {
    router.push("/");
    return "error";
  }

  return (
    <Container>
      <H2>진단 결과</H2>
      <RadarChart series={result} labels={labels} />
      <a href="http://grownbetter.com/">
        <Logo />
      </a>
    </Container>
  );
}
const H2 = styled.h2`
  font-size: 1.7em;
  font-weight: 510;
  margin-bottom: 10%;
`;

const Container = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
