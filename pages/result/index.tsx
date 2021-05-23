import styled from "styled-components";
import rawData from "../../common/data";
import { useResultContext } from "../../common/contexts/ResultContext";
import { useRouter } from "next/router";
import RadarChart from "../../components/charts/RadarChart";
import Logo from "../../components/uiParts/Logo";
import { useEffect } from "react";

const labels = rawData.map((subject) => {
  const { name } = subject;
  return name.slice(3);
});

export default function Result() {
  const router = useRouter();
  const { result } = useResultContext();

  useEffect(() => {
    if (!result) {
      router.push("/");
    }
  }, []);

  return (
    <Container>
      <H2>진단 결과</H2>
      <Description>우상단 세줄을 클릭하면 다운로드 가능합니다.</Description>
      <RadarChart series={result} labels={labels} />
      <CopyRight>
        Copyright ©️ <A href="http://grownbetter.com/">GROW&BETTER</A>
      </CopyRight>
      <a href="http://grownbetter.com/">
        <Logo />
      </a>
    </Container>
  );
}
const H2 = styled.h2`
  font-size: 1.7em;
  font-weight: 510;
  margin-bottom: 5%;
`;

const Description = styled.div`
  margin-bottom: 5%;
  font-size: 1em;
  color: rgb(163, 163, 163);
`;

const Container = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CopyRight = styled.span`
  margin: 5% 0;
  color: rgb(145, 145, 145);
`;
const A = styled.a`
  color: rgb(145, 145, 145);
  text-decoration: underline;
`;
