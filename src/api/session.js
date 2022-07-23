import { sessionAxios as axios } from "../config/axios";
const url = "/auth";

const createSession = async ({ email, password }) => {
  if (!email || !password)
    throw new Error("Provide a valid username and password");

  try {
    const response = await axios.post(
      `${url}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return { response };
  } catch (err) {
    return { err };
  }
};

const refreshAccessToken = async () => {
  try {
    const response = await axios.get(`${url}/refresh`);
    return { response };
  } catch (err) {
    return { err };
  }
};

const deleteSession = async () => {
  try {
    const response = await axios.post(`${url}/logout`);
    return { response };
  } catch (err) {
    return { err };
  }
};

export { createSession, refreshAccessToken, deleteSession };
