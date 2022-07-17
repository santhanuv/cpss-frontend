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
    advisor: [
      {
        name: "Home",
        icon: <MdHome />,
        to: "/dashboard/advisor",
        isActive: false,
      },
      {
        name: "Verify Students",
        icon: <FaUserCheck />,
        to: "/dashboard/advisor/verify",
        isActive: false,
      },
    ],
    admin: [
      {
        name: "Home",
        icon: <MdHome />,
        to: "/dashboard/admin",
        isActive: false,
      },
      {
        name: "New Advisors",
        icon: <FaUserPlus />,
        to: "/dashboard/admin/new-advisors",
        isActive: false,
      },
      {
        name: "Export Data",
        icon: <BiExport />,
        to: "/dashboard/admin/export",
        isActive: false,
      },
    ],
  };

  const activeLinkName = findAndSetActiveLink(
    sidebarLinks[auth.role || "student"],
    location.pathname
  );

  const selectedSidebar = sidebarLinks[auth.role || "student"];

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
