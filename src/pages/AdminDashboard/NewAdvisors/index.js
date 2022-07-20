import Table from "../../../components/Table";
import StyledNewAdvisors from "./NewAdvisors.Styled";
import { MdCheckCircle, MdDoneAll } from "react-icons/md";
import { BsXCircleFill } from "react-icons/bs";
import { useOutletContext } from "react-router-dom";
import { updateMyStatus } from "../../../api/admin";
import useAuthAxios from "../../../hooks/useAuthAxios";

const addIcons = (data, callback) => {
  return data.map((row, index) => {
    row.push(
      <div className="action-btns">
        <button
          className="icon-btn approve-btn"
          id="approve-btn"
          onClick={() => callback("approved", index)}
        >
          <MdCheckCircle className="icon" />
          Approve
        </button>
        <button
          className="icon-btn reject-btn"
          id="reject-btn"
          onClick={() => callback("rejected", index)}
        >
          <BsXCircleFill className="icon" />
          Reject
        </button>
      </div>
    );
    return row;
  });
};

const headCols = ["#", "Name", "Branch", "Batch", "Action"];

const NewAdvisors = () => {
  const [advisors, fetchData] = useOutletContext();
  const axios = useAuthAxios();

  const handleStatusUpdate = async (status, index) => {
    try {
      const advisorID = advisors[index].advisor_id;
      // const advisorName = `${advisors[index].first_name} ${advisors[index].last_name}`;

      const { response, err } = await updateMyStatus(axios, advisorID, status);
      if (response) {
        fetchData();
      } else if (err) {
        console.error(err);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const tableData = addIcons(
    advisors
      .map((advisor, index) =>
        advisor.status !== "approved"
          ? [
              index + 1,
              `${advisor.first_name} ${advisor.last_name}`,
              advisor.branch,
              advisor.batch,
            ]
          : []
      )
      .filter((row) => row.length !== 0),
    handleStatusUpdate
  );

  return (
    <StyledNewAdvisors>
      <h2>New Advisors</h2>
      {tableData.length === 0 ? (
        <div className="done-msg">
          <MdDoneAll className="icon" />
          No new Advisors
        </div>
      ) : (
        <Table colNames={headCols} data={tableData} />
      )}
    </StyledNewAdvisors>
  );
};

export default NewAdvisors;
