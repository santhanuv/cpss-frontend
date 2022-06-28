import styled from "@emotion/styled";

const StyledLogo = styled.div`
  font-size: ${({
    theme: {
      typo: {
        title: { small },
      },
    },
  }) => small.fontSize};
`;

const Logo = () => {
  return <StyledLogo>Logo</StyledLogo>;
};

export default Logo;
