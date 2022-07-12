import Table from "../../../components/Table";

const headCols = ["#", "Field", "New", "Old", "Updated On", "Status"];

const data = [
  ["1", "DOB", "12-05-2001", "12-04-2001", "28-01-2022", "Not Approved"],
  ["2", "First Name", "Shoun", "Shawn", "12-08-2001", "Approved"],
];

const StudentDashboard = () => {
  return (
    <div>
      <Table colNames={headCols} data={data} />
    </div>
  );
};

export default StudentDashboard;
