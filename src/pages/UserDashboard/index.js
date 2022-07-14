import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { StyledWrapper, ContentWrapper } from "./StyledWrapper";
import { StyledTopSection } from "./StyledUserDashboard";
import { MdHome } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import StudentDashboard from "../StudentDashboard";
import Avatar from "../../components/Avatar";
import { Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const findAndSetActiveLink = (links, path) => {
  const activeLink = links.filter((link) => link.to === path)[0];
  activeLink.isActive = true;
  return activeLink.name;
};

const UserDashboard = () => {
  const { auth } = useAuth();
  const location = useLocation();

  const sidebarLinks = {
    student: [
      {
        name: "Home",
        icon: <MdHome />,
        to: "/dashboard/student",
        isActive: false,
      },
      {
        name: "My Data",
        icon: <FaUserGraduate />,
        to: "/dashboard/student/mydata",
        isActive: false,
      },
    ],
  };

  const activeLinkName = findAndSetActiveLink(
    sidebarLinks.student,
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
