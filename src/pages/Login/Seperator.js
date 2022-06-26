import styled from "@emotion/styled";

const StyledSeperator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  margin: 16px 0;

  &::before {
    content: "";
    display: block;
    margin-right: 4px;
    width: 100%;
    height: 1px;
    background-color: grey;
  }

  &::after {
    content: "";
    display: block;
    margin-left: 4px;
    width: 100%;
    height: 1px;
    background-color: grey;
  }
`;

const Seperator = () => {
  return <StyledSeperator>or</StyledSeperator>;
};

export default Seperator;
