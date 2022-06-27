import styled from "@emotion/styled";

const StyledMenu = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  height: 40%;
  width: 100%;
  position: absolute;
  right: 0px;
  top: 0;
  padding: 30px;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
  display: flex;
  flex-direction: column;
`;

const StyledTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledContentSection = styled.div``;

const StyledList = styled.ul`
  list-style-type: none;
  line-height: 30px;
`;
const StyledListItem = styled.li`
  padding: 5px;
  text-align: center;
  cursor: pointer;
  background-color: ${({ theme: { colors }, isActive = true }) =>
    isActive && colors.lightGrey};
`;

export {
  StyledMenu,
  StyledTopSection,
  StyledContentSection,
  StyledList,
  StyledListItem,
};
