import axios from "../config/axios";
const uri = "/user";

const registerUser = async ({ firstName, lastName, email, role, password }) => {
  try {
    const response = await axios.post(
      uri,
      {
        role,
        email,
        password,
        firstName,
        lastName,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    return { response: response.data };
  } catch (err) {
    return { err };
  }
};

export { registerUser };
