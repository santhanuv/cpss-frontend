import StyledHome from "./Home.Styled";
import Table from "../../../components/Table";
import { MdDelete, MdError } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
import { deleteAdvisor } from "../../../api/admin";
import useAuthAxios from "../../../hooks/useAuthAxios";

const addDeleteIcon = (data, callback) => {
  return data.map((row, index) => {
    row.push(
      <div className="action-btns">
        <button
          id={index}
          onClick={() => callback(index)}
          className="delete-icon"
        >
          <MdDelete className="icon" /> Delete
        </button>
      </div>
    );
    return row;
  });
};

const headCols = ["#", "Name", "Branch", "Batch", "Action"];

const data = addDeleteIcon([
  ["1", "Advisor One", "CSE", "19-23", "Emp-123"],
  ["2", "Advisor Two", "CSE", "19-23", "Emp-124"],
]);

const Home = () => {
  const [advisors, fetchData] = useOutletContext();
  const axios = useAuthAxios();

  const deleteData = async (index) => {
    try {
      const advisorID = advisors[index].advisor_id;
      const { response, err } = await deleteAdvisor(axios, advisorID);
      if (response) {
        console.log(response.data);
        await fetchData();
      } else if (err) {
        console.error(err);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const tableData = addDeleteIcon(
    advisors
      .map((advisor, index) =>
        advisor.status === "approved"
          ? [
              index + 1,
              `${advisor.first_name} ${advisor.last_name}`,
              advisor.branch,
              advisor.batch,
            ]
          : []
      )
      .filter((row) => row.length !== 0),
    deleteData
  );

  return (
    <StyledHome>
      <h2>Approved Advisors</h2>
      {tableData.length === 0 ? (
        <div className="done-msg">
          <MdError className="icon" />
          No Advisors Approved Advisors
        </div>
      ) : (
        <Table colNames={headCols} data={tableData} />
      )}
    </StyledHome>
  );
};

export default Home;
