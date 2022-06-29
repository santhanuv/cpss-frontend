import styled from "@emotion/styled";
import { GoTriangleDown } from "react-icons/go";

const StyledIcon = styled(GoTriangleDown)`
  font-size: 16px;
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;

export default StyledIcon;
