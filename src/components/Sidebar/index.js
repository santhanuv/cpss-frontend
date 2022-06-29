import Logo from "../Logo";
import {
  StyledSidebarLink,
  StyledIcon,
  StyledText,
} from "./StyledSidebarButton";
import { MdHome } from "react-icons/md";
import {
  StyledWrapper,
  StyledLinksWrapper,
  StyledLinkWrapper,
} from "./StyledWrapper";

const Sidebar = ({ links = [] }) => {
  return (
    <StyledWrapper>
      <Logo />
      <StyledLinksWrapper>
        {links.map((link, index) => {
          return (
            <StyledLinkWrapper key={index} isActive={link.isActive}>
              <StyledSidebarLink to={link.to}>
                <StyledIcon isActive={link.isActive}>{link.icon}</StyledIcon>
                <StyledText isActive={link.isActive}>{link.name}</StyledText>
              </StyledSidebarLink>
            </StyledLinkWrapper>
          );
        })}
      </StyledLinksWrapper>
    </StyledWrapper>
  );
};

export default Sidebar;
