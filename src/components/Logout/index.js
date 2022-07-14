import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteSession } from "../../api/session";
import userLogout from "../../utility/userLogout";

const Logout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("logout");
    (async () => {
      const status = await userLogout();
      if (status) navigate("/login", { replace: true });
      else navigate("/error", { replace: true });
    })();
  }, []);

  return children;
};

export default Logout;
