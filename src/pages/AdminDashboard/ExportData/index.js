import { useState } from "react";
import Button from "../../../components/Button";
import CheckBox from "../../../components/CheckBox";
import SelectInput from "../../../components/SelectInput";
import Table from "../../../components/Table";
import TextField from "../../../components/TextField";
import useForm from "../../../hooks/useForm";
import StyledExport from "./Export.Styled";

const defaultFilterOptions = {
  firstName: false,
  lastName: false,
  email: false,
  mobNo: false,
  rollNo: false,
  admNo: false,
  cgpa: false,
  branch: false,
};

const columns = [
  "First Name",
  "Last Name",
  "Email",
  "MobNo",
  "RollNo",
  "AdmNo",
  "Cgpa",
  "Branch",
];

const branches = ["CSE", "CE", "ME", "CHE"];

const batches = [{ value: "19-23" }, { value: "20-24" }, { value: "25-26" }];

const ExportData = () => {
  const [filterOpen, setFilterOpen] = useState(true);
  const { register, onSubmit } = useForm({ firstName: false });
  const [filterOptions, setFilterOptions] = useState([]);

  const handleChange = (e) => {
    const isChecked = e.currentTarget.checked;
    const name = e.currentTarget.value;
  };

  const headCols = [
    "#",
    "First Name",
    "Last Name",
    "Batch",
    "branch",
    "DOB",
    "Adm No",
    "Roll No",
    "Mob No",
    "Email",
    "CGPA",
  ];

  const data = [
    [
      "1",
      "Student",
      "One",
      "19-23",
      "CSE",
      "10-02-2001",
      "CS-19-544",
      "51",
      "1233456789",
      "someone@email.com",
      "7.5",
    ],
    [
      "1",
      "Student",
      "One",
      "19-23",
      "CSE",
      "10-02-2001",
      "CS-19-544",
      "51",
      "1233456789",
      "someone@email.com",
      "7.5",
    ],
    [
      "1",
      "Student",
      "One",
      "19-23",
      "CSE",
      "10-02-2001",
      "CS-19-544",
      "51",
      "1233456789",
      "someone@email.com",
      "7.5",
    ],
  ];

  return (
    <StyledExport>
      <div className="primary-btns-box">
        <div className="primary-btn">
          <Button
            text="Filter"
            onClick={(e) => {
              e.preventDefault();
              setFilterOpen(true);
            }}
          />
        </div>
        <div className="primary-btn">
          <Button
            text="Export"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </div>
      </div>
      <Table colNames={headCols} data={data} />
      {filterOpen && (
        <div className="filter-box">
          <h3>Filters</h3>
          <h4>Columns</h4>
          <form
            onSubmit={(e) =>
              onSubmit(e, (data) => {
                console.log(filterOptions);
              })
            }
          >
            <div className="column-box">
              {columns.map((column) => (
                <CheckBox
                  key={column}
                  value={column}
                  label={column}
                  onChange={handleChange}
                />
              ))}
            </div>
            <h4>Branches</h4>
            <div className="column-box">
              {branches.map((column) => (
                <CheckBox
                  key={column}
                  value={column}
                  label={column}
                  onChange={handleChange}
                />
              ))}
            </div>
            <div className="textfield-box">
              <SelectInput
                options={batches}
                {...register("batch")}
                label="Batch"
              />
              <TextField
                {...register("cgpa-max")}
                label="Min CGPA"
                errorMsg={false}
              />
              <TextField
                {...register("currBacklogs")}
                label="Current Backlogs"
                errorMsg={false}
              />
            </div>
            <div className="apply-btn-box">
              <Button
                text="Apply"
                onClick={(e) => {
                  e.preventDefault();
                  setFilterOpen(false);
                }}
              />
            </div>
          </form>
        </div>
      )}
    </StyledExport>
  );
};

export default ExportData;
