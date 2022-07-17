import StyledHome from "./Home.Styled";

import Table from "../../../components/Table";
import { MdDelete } from "react-icons/md";

const addDeleteIcon = (data) => {
  return data.map((row) => {
    row.push(
      <div className="action-btns">
        <button className="delete-icon">
          <MdDelete className="icon" /> Delete
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

const Home = () => {
  return (
    <StyledHome>
      <h2>Advisors</h2>
      <Table colNames={headCols} data={data} />
    </StyledHome>
  );
};

export default Home;
