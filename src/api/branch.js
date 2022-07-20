import axios from "../config/axios";
const url = "/branch";

const getData = async (axios, url) => {
  try {
    if (!axios || !url) throw new Error("No axios or url");
    return await axios.get(url);
  } catch (err) {
    throw err;
  }
};

const getAllBranches = async () => {
  try {
    if (!axios) throw new Error("No axios");
    const response = await getData(axios, url);
    return { response };
  } catch (err) {
    return { err };
  }
};

export { getAllBranches };
