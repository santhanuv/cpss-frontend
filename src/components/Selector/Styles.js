import styled from "@emotion/styled";

const Styles = styled.div`
  #active {
    color: ${({ theme: { colors } }) => colors.complimentary};
    text-decoration: underline;
  }
`;
