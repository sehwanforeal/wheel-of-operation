import styled, { CSSProperties } from "styled-components";
import { Button } from "antd";

type Props = {
  children: string;
  onClick: () => void;
  style?: CSSProperties;
};

export default function StyledButton({ children, onClick, style }: Props) {
  return (
    <OverridedButton style={style} onClick={onClick}>
      {children}
    </OverridedButton>
  );
}

const OverridedButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
  height: 50px;
  font-size: 14px;
  font-weight: 600;
`;
