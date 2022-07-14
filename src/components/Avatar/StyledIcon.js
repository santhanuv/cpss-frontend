import styled from "@emotion/styled";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const StyledIconDown = styled(GoTriangleDown)`
  font-size: 16px;
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;

const StyledIconUp = styled(GoTriangleUp)`
  font-size: 16px;
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;

export { StyledIconDown, StyledIconUp };
