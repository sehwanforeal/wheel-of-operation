import styled from "styled-components";

type Props = {
  onClick?: () => void;
};

export default function Logo({ onClick }: Props) {
  return (
    <LogoImage onClick={onClick} src="/images/logo_round.png" alt="logo" />
  );
}

const LogoImage = styled.img`
  width: 100px;
`;
