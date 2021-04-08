import styled from "styled-components";
import { Rate } from "antd";

type Props = {
  onChange?: (value: number) => void;
};

const RateStars = ({ onChange }: Props) => {
  return (
    <>
      <StyledRate defaultValue={3} onChange={onChange} />
    </>
  );
};

export default RateStars;

const StyledRate = styled(Rate)`
  font-size: 30px;
  display: flex;
  color: black;
  justify-content: center;
`;
