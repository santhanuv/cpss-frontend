import Sidebar from "../../components/Sidebar";
import { StyledWrapper, ContentWrapper } from "./StyledWrapper";
import { StyledTopSection } from "./StyledUserDashboard";
import { MdHome } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import StudentDashboard from "./StudentDashboard";
import Avatar from "../../components/Avatar";

const sidebarLinks = [
  {
    name: "Home",
    icon: <MdHome />,
    to: "/user/home",
    isActive: true,
  },
  {
    name: "My Data",
    icon: <FaUserGraduate />,
    to: "/user/mydata",
    isActive: false,
  },
];

const UserDashboard = () => {
  return (
    <StyledWrapper>
      <Sidebar links={sidebarLinks} />
      <ContentWrapper>
        <StyledTopSection>
          <h1>Home</h1>
          <Avatar />
        </StyledTopSection>
        <StudentDashboard />
      </ContentWrapper>
    </StyledWrapper>
  );
};

export default UserDashboard;
