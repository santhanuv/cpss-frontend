import {
  StyledMenu,
  StyledTopSection,
  StyledContentSection,
  StyledList,
  StyledListItem,
} from "./StyledMenu";
import { StyledActive } from "../StyledNav";
import { StyledCloseIcon, StyledNavButton } from "../NavButton";
import Link from "../../Link";
import Logo from "../../Logo";

const MobileMenu = ({
  links,
  CLOSE_BTN_ID,
  callback = () => {
    console.log("no callback");
  },
}) => {
  return (
    <StyledMenu>
      <StyledTopSection>
        <Logo />
        <StyledNavButton>
          <StyledCloseIcon
            id={CLOSE_BTN_ID}
            onClick={(e) => callback(e.currentTarget.id)}
          />
        </StyledNavButton>
      </StyledTopSection>
      <StyledContentSection>
        <StyledList>
          {links.map((link) => {
            return (
              <StyledListItem isActive={link.isActive} key={link.id}>
                {link.isActive ? (
                  <StyledActive isOpen={true}>{link.name}</StyledActive>
                ) : (
                  <Link text={link.name} to={link.to} />
                )}
              </StyledListItem>
            );
          })}
        </StyledList>
      </StyledContentSection>
    </StyledMenu>
  );
};

export default MobileMenu;
