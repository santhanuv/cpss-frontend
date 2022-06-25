import styled from "@emotion/styled";
import { ReactComponent as Graduation } from "../../assets/images/graduation.svg";

const StyledImg = styled.img`
  width: 100%;
  aspect-ratio: 1.779;
  color: ${({ theme: { colors } }) => colors.primary};
`;

export default StyledImg;
