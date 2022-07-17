import Table from "../../../components/Table";
import StyledNewAdvisors from "./NewAdvisors.Styled";
import { MdCheckCircle } from "react-icons/md";
import { BsXCircleFill } from "react-icons/bs";

const addDeleteIcon = (data) => {
  return data.map((row) => {
    row.push(
      <div className="action-btns">
        <button className="icon-btn" id="approve-btn">
          <MdCheckCircle className="icon" />
          Approve
        </button>
        <button className="icon-btn" id="reject-btn">
          <BsXCircleFill className="icon" />
          Reject
        </button>
      </div>
    );
    return row;
  });
};

const headCols = ["#", "Name", "Branch", "Batch", "Employee Code", "Action"];

const data = addDeleteIcon([
  ["1", "Advisor One", "CSE", "19-23", "Emp-123"],
  ["2", "Advisor Two", "CSE", "19-23", "Emp-124"],
]);

const NewAdvisors = () => {
  return (
    <StyledNewAdvisors>
      <h2>New Advisors</h2>
      <Table colNames={headCols} data={data} />
    </StyledNewAdvisors>
  );
};

export default NewAdvisors;
