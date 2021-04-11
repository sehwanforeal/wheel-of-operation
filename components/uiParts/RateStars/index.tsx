import styled from "styled-components";
import { Rate } from "antd";

type Props = {
  onChange: (value: number, rateIndex: number) => void;
  rateIndex: number;
};

const RateStars = ({ onChange, rateIndex }: Props) => {
  return (
    <>
      <StyledRate
        allowClear={false}
        defaultValue={0}
        onChange={(value) => onChange(value, rateIndex)}
      />
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
