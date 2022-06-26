import styled from "@emotion/styled";
import { ReactComponent as GoogleIcon } from "../../assets/images/googleIcon.svg";

const StyledGoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 5px 16px;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.background};
  border: ${({ theme: { colors } }) => `1px solid ${colors.primary}`};
  border-radius: 4px;
  margin-bottom: 16px;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.lightGrey};
    cursor: pointer;
  }
`;
const StyledGoogleIcon = styled(GoogleIcon)`
  width: 24px;
`;

const StyledText = styled.h3`
  color: ${({ theme: { colors } }) => colors.textPrimary};

  ${({
    theme: {
      typo: { label },
    },
  }) => `
        font-size: ${label.miniPlus.fontSize};
        font-weight: ${label.miniPlus.fontWeight}
        `};
`;

const GoogleButton = () => {
  return (
    <StyledGoogleButton>
      <StyledGoogleIcon />
      <StyledText>Login with Google</StyledText>
    </StyledGoogleButton>
  );
};

export default GoogleButton;
