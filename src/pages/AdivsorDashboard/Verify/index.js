import Table from "../../../components/Table";
import StyledVerify from "./Verify.Styled";
import { MdCheckCircle } from "react-icons/md";

const addVerifyIcon = (data) => {
  return data.map((row) => {
    row.push(
      <button className="verify-icon">
        <MdCheckCircle className="icon" /> Verify
      </button>
    );
    return row;
  });
};

const headCols = ["#", "Name", "Adm NO", "Updated ON", "Action"];

const data = addVerifyIcon([
  ["1", "Student One", "CS-19-544", "24-07-2022"],
  ["1", "Student Two", "CS-19-534", "24-07-2022"],
]);

const Verify = () => {
  return (
    <StyledVerify>
      <h2>Updated Students</h2>
      <Table colNames={headCols} data={data} />
    </StyledVerify>
  );
};

export default Verify;
