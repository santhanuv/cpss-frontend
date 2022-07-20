const url = "/admin";

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

const updateMyStatus = async (axios, advisorID, status) => {
  try {
    if (!axios) throw new Error("No axios");
    if (!advisorID || !status) throw new Error("provide advisor id and status");
    const response = await putData(
      axios,
      { status },
      `${url}/advisors/${advisorID}/status`
    );
    return { response };
  } catch (err) {
    return { err };
  }
};

const getAllAdvisors = async (axios) => {
  try {
    if (!axios) throw new Error("No axios");
    const response = await getData(axios, `${url}/advisors`);
    return { response };
  } catch (err) {
    return { err };
  }
};

const deleteAdvisor = async (axios, advisorID) => {
  try {
    if (!axios) throw new Error("No axios");
    const response = await deleteData(
      axios,
      {},
      `${url}/advisors/${advisorID}`
    );
    return { response };
  } catch (err) {
    return { err };
  }
};

export { getAllAdvisors, updateMyStatus, deleteAdvisor };
