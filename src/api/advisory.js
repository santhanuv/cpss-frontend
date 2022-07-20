const url = "/advisory";

const postData = async (axios, data, url) => {
  try {
    if (!axios || !data || !url)
      throw new Error("Provide axios, data and valid url");
    return await axios.post(url, data);
  } catch (err) {
    throw err;
  }
};

const deleteData = async (axios, data, url) => {
  try {
    if (!axios || !data || !url)
      throw new Error("Provide axios, data and valid url");
    return await axios.delete(url, data);
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

const putData = async (axios, data, url) => {
  try {
    if (!axios || !data || !url)
      throw new Error("Provide axios, data and valid url");
    return await axios.put(url, data);
  } catch (err) {
    throw err;
  }
};

const registerAdvisor = async (axios, data) => {
  try {
    if (!axios || !data) throw new Error("No axios or data");
    const response = await postData(axios, data, url);
    return { response };
  } catch (err) {
    return { err };
  }
};

const getAllAdvisoryStudents = async (axios) => {
  try {
    if (!axios) throw new Error("No axios");
    const response = await getData(axios, `${url}/students`);
    return { response };
  } catch (err) {
    return { err };
  }
};

const getStudentData = async (axios, admNO) => {
  try {
    if (!axios) throw new Error("No axios");
    if (!admNO) throw new Error("NO admission no");
    const response = await getData(axios, `${url}/students/${admNO}`);
    return { response };
  } catch (err) {
    return { err };
  }
};

const updateStudentStatus = async (axios, admNO, status) => {
  try {
    if (!axios) throw new Error("No axios");
    if (!admNO || !status) throw new Error("provide admission no and status");
    const response = await putData(
      axios,
      { status },
      `${url}/students/${admNO}/status`
    );
    return { response };
  } catch (err) {
    return { err };
  }
};

const deleteStudent = async (axios, stduentID) => {
  try {
    if (!axios) throw new Error("No axios");
    if (!stduentID) throw new Error("No Student ID");
    const response = await deleteData(
      axios,
      {},
      `${url}/students/${stduentID}`
    );
    return { response };
  } catch (err) {
    return { err };
  }
};

export {
  registerAdvisor,
  getAllAdvisoryStudents,
  getStudentData,
  updateStudentStatus,
  deleteStudent,
};
