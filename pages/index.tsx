import styled from "styled-components";
import RateStars from "../components/uiParts/RateStars";
import Button from "../components/uiParts/Button";

export default function Home() {
  const onRateChange = (value: number) => console.log(value);
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    console.log(e);
  return (
    <>
      <RateStars onChange={onRateChange}></RateStars>
      <Button onClick={onButtonClick}>버튼입니다</Button>
      <h3>하이염</h3>
    </>
  );
}
