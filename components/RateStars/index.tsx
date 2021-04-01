import styled from "styled-components";
import { Rate } from "antd";

type Props = {
  onChange: (value: number) => void;
};

const RateStars = ({ onChange }: Props) => {
  return <StyledRate allowHalf defaultValue={0} onChange={onChange} />;
};

export default RateStars;

const StyledRate = styled(Rate)`
  font-size: 35px;
  color: black;
`;
