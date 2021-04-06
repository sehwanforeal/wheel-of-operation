import styled from "styled-components";
import { Button } from "antd";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: string;
};

export default function StyledButton({ onClick, children }: Props) {
  return <OverridedButton onClick={onClick}>{children}</OverridedButton>;
}

const OverridedButton = styled(Button)`
  width: 100%;
`;
