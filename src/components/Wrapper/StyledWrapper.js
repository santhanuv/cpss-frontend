import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  padding: 30px 120px;
  min-height: fit-content;
  display: flex;
  flex-direction: column;

  @media (max-width: 789px) {
    padding: 30px;
  }

  @media (max-width: 490px) {
    padding: 15px;
  }
`;

export default StyledWrapper;
