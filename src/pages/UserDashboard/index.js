import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { StyledWrapper, ContentWrapper } from "./StyledWrapper";
import { StyledTopSection } from "./StyledUserDashboard";
import { MdHome } from "react-icons/md";
import { BiExport } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import StudentDashboard from "../StudentDashboard";
import Avatar from "../../components/Avatar";
import { Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const findAndSetActiveLink = (links, path) => {
  let activeLink = links.filter((link) => link.to === path)[0];
  activeLink?.subLink && (activeLink = links[activeLink?.activeIndex]);
  activeLink && (activeLink.isActive = true);
  return activeLink?.name;
};

const UserDashboard = () => {
  const { auth } = useAuth();
  const location = useLocation();

  const sidebarLinks = {
    student: [
      // {
      //   name: "Home",
      //   icon: <MdHome />,
      //   to: "/student/home",
      //   isActive: false,
      // },
      {
        name: "My Profile",
        icon: <FaUserGraduate />,
        to: "/student",
        isActive: false,
      },
    ],
    advisor: [
      {
        name: "Home",
        icon: <MdHome />,
        to: "/advisor",
        isActive: false,
      },
      {
        name: "Verify Students",
        icon: <FaUserCheck />,
        to: "/advisor/verify",
        isActive: false,
      },
      {
        to: "/advisor/verify/profile",
        subLink: true,
        activeIndex: 1,
      },
    ],
    admin: [
      {
        name: "Home",
        icon: <MdHome />,
        to: "/admin",
        isActive: false,
      },
      {
        name: "New Advisors",
        icon: <FaUserPlus />,
        to: "/admin/new-advisors",
        isActive: false,
      },
      {
        name: "Export Data",
        icon: <BiExport />,
        to: "/admin/export",
        isActive: false,
      },
    ],
  };

  const activeLinkName = findAndSetActiveLink(
    sidebarLinks[auth.role],
    location.pathname
  );

  const selectedSidebar = sidebarLinks[auth.role];

  return (
    <StyledWrapper>
      <Sidebar links={selectedSidebar} />
      <ContentWrapper>
        <StyledTopSection>
          <h1>{activeLinkName}</h1>
          <Avatar />
        </StyledTopSection>
        <Outlet />
      </ContentWrapper>
    </StyledWrapper>
  );
};

export default UserDashboard;
