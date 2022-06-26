import styled from "@emotion/styled";
import StyledButton from "./StyledButton";
import { ReactComponent as GoogleIcon } from "../../assets/images/googleIcon.svg";

const StyledGoogleButton = styled(StyledButton)`
  background-color: ${({ theme: { colors } }) => colors.background};
  border: ${({ theme: { colors } }) => `1px solid ${colors.primary}`};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.lightGrey};
    cursor: pointer;
  }

  &:focus {
    border: ${({ theme: { colors } }) => `1px solid ${colors.complimentary}`};
  }
`;

const StyledGoogleIcon = styled(GoogleIcon)`
  width: 24px;
  height: 24px;
`;

const StyledGoogleText = styled.h3`
  color: ${({ theme: { colors } }) => colors.textPrimary};

  ${({
    theme: {
      typo: { label },
    },
  }) => `
        font-size: ${label.smallPlus.fontSize};
        font-weight: ${label.smallPlus.fontWeight}
        `};
`;

// const GoogleButton = () => {
//   return (
//     <StyledGoogleButton>
//       <StyledGoogleIcon />
//       <StyledText>Login with Google</StyledText>
//     </StyledGoogleButton>
//   );
// };

export { StyledGoogleButton, StyledGoogleIcon, StyledGoogleText };
