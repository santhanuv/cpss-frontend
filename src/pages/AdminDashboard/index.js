import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthAxios from "../../hooks/useAuthAxios";
import { getAllAdvisors } from "../../api/admin";

const AdminDashboard = () => {
  const axios = useAuthAxios();
  const [advisors, setAdvisors] = useState([]);

  const fetchData = async () => {
    try {
      const { response, err } = await getAllAdvisors(axios);
      if (response) {
        setAdvisors(response.data);
      } else {
        console.error(err);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Outlet context={[advisors, fetchData]} />
    </div>
  );
};

export default AdminDashboard;
