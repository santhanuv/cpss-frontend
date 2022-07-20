import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuthAxios from "../../hooks/useAuthAxios";
import StyledAD from "./AD.Styled";
import { getAllAdvisoryStudents } from "../../api/advisory";
import useAuth from "../../hooks/useAuth";

const AdvisorDashboard = () => {
  const axios = useAuthAxios();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [advisoryStudents, setAdvisoryStudents] = useState([]);

  const fetchData = async () => {
    try {
      const { response, err } = await getAllAdvisoryStudents(axios);
      if (response) {
        setAdvisoryStudents(response.data);
      } else {
        console.error(err);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!auth.status && auth.role === "advisor") navigate("/advisor/register");

    if (auth.status === "updated") navigate("/advisor/not-approved");
    else if (auth.status === "rejected") navigate("/logout");

    fetchData();
  }, []);

  return (
    <StyledAD>
      <Outlet context={[advisoryStudents, fetchData]} />
    </StyledAD>
  );
};

export default AdvisorDashboard;
