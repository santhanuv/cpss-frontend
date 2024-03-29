import styled from "@emotion/styled";
import Card from "../../components/Card";

const LoginCard = styled(Card)`
  padding: 0;
  width: fit-content;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  display: flex;

  @media (max-width: 1023px) {
    flex-direction: column;
    max-width: 480px;
  }

  @media (max-width: 539px) {
    max-width: 540px;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  flex: 0;
  margin-top: 5%;
  display: flex;
  justify-content: center;

  .login {
    display: block;
    margin-top: 25px;
  }

  .email-textbox {
    position: relative;
  }

  .email-textbox::before {
  }
`;

export { LoginCard, ContentWrapper };
