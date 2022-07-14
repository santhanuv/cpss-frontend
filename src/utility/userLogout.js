import { deleteSession } from "../api/session";

const userLogout = async () => {
  try {
    const { response, err } = await deleteSession();
    if (response) {
      return true;
    } else {
      console.error(err);
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export default userLogout;
