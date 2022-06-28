import { useState, useEffect } from "react";
import { StyledNavButton, StyledOpenIcon } from "./NavButton";
import MobileMenu from "./MobileMenu";
import {
  StyledNav,
  StyledNavList,
  StyledListItem,
  StyledActive,
} from "./StyledNav";
import Logo from "../Logo";
import Link from "../Link";

const OPEN_BTN_ID = "open_btn";
const CLOSE_BTN_ID = "close_btn";
const MENU_BREAKPOINT = 789;

const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleIsOpenOnResize = () => {
      if (window.innerWidth > MENU_BREAKPOINT) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleIsOpenOnResize);

    return () => window.removeEventListener("resize", handleIsOpenOnResize);
  }, []);

  const handleOpen = (id) => {
    if (id === OPEN_BTN_ID) {
      setIsOpen(true);
    } else if (id === CLOSE_BTN_ID) {
      setIsOpen(false);
    }
  };

  return (
    <StyledNav>
      {isOpen && (
        <MobileMenu
          links={links}
          CLOSE_BTN_ID={CLOSE_BTN_ID}
          callback={handleOpen}
        />
      )}
      <StyledNavList>
        <Logo />
      </StyledNavList>
      <StyledNavList>
        <StyledNavButton
          id={OPEN_BTN_ID}
          onClick={(e) => handleOpen(e.currentTarget.id)}
        >
          <StyledOpenIcon />
        </StyledNavButton>
        {links.map((link) => {
          return (
            <StyledListItem key={link.id}>
              {link.isActive ? (
                <StyledActive isOpen={false}>{link.name}</StyledActive>
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
