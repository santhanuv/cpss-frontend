import styled from "@emotion/styled";
import Card from "../../components/Card";

const LoginCard = styled(Card)`
  padding: 0;
  max-width: 865px;
  width: 100%;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  display: flex;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { LoginCard, ContentWrapper };
