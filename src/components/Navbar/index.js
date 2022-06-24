import {
  StyledNav,
  StyledNavList,
  StyledListItem,
  StyledActive,
} from "./StyledNav";
import Link from "../Link";

const Navbar = ({ links }) => {
  return (
    <StyledNav>
      <StyledNavList>
        <StyledListItem>
          <Link text="Logo" />
        </StyledListItem>
      </StyledNavList>
      <StyledNavList>
        {links.map((link) => {
          return (
            <StyledListItem key={link.id}>
              {link.isActive ? (
                <StyledActive>{link.name}</StyledActive>
              ) : (
                <Link text={link.name} to={link.to} />
              )}
            </StyledListItem>
          );
        })}
      </StyledNavList>
    </StyledNav>
  );
};

export default Navbar;
