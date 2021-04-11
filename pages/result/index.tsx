import styled from "styled-components";
import { useRouter } from "next/router";
// import PolarAreaChart from "../../components/charts/PolarAreaChart";
import Button from "../../components/uiParts/Button";

export default function Result() {
  const router = useRouter();

  console.log(router.query);
  return (
    <Container>
      {/* <PolarAreaChart /> */}
      결과<Button onClick={() => router.push("/")}>홈으로</Button>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20%;
`;
