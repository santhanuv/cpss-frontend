const url = "/student";

const postData = async (axios, data, url) => {
  try {
    if (!axios || !data || !url)
      throw new Error("Provide axios, data and valid url");
    return await axios.post(url, data);
  } catch (err) {
    throw err;
  }
};

const putData = async (axios, data, url) => {
  try {
    if (!axios || !data || !url)
      throw new Error("Provide axios, data and valid url");
    return await axios.put(url, data);
  } catch (err) {
    throw err;
  }
};

const getData = async (axios, url) => {
  try {
    if (!axios || !url) throw new Error("No axios or url");
    return await axios.get(url);
  } catch (err) {
    throw err;
  }
};

const registerStudent = async (axios, data) => {
  try {
    if (!axios || !data) throw new Error("No axios or data");
    const response = await postData(axios, data, url);
    return { response };
  } catch (err) {
    return { err };
  }
};

const updateStudent = async (axios, data) => {
  try {
    if (!axios || !data) throw new Error("No axios or data");
    const response = await putData(axios, data, url);
    return { response };
  } catch (err) {
    return { err };
  }
};

const getAllStudentData = async (axios) => {
  try {
    if (!axios) throw new Error("No axios");
    const response = await getData(axios, `${url}/all`);
    return { response };
  } catch (err) {
    return { err };
  }
};

export { registerStudent, getAllStudentData, updateStudent };
