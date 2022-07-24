import { useState, useEffect, useRef } from "react";
import Button from "../../../components/Button";
import CheckBox from "../../../components/CheckBox";
import SelectInput from "../../../components/SelectInput";
import Table from "../../../components/Table";
import TextField from "../../../components/TextField";
import useForm from "../../../hooks/useForm";
import StyledExport from "./Export.Styled";
import { getAllBranches } from "../../../api/branch";
import { getAllBatches } from "../../../api/batch";
import useAuthAxious from "../../../hooks/useAuthAxios";
import { filterStudentData } from "../../../api/admin";
import formatDate from "../../../utility/formatDate";
import { MdError } from "react-icons/md";
import filterSchema from "./filterSchema";
import { CSVLink } from "react-csv";

const columns = [
  { label: "First Name", key: "first_name" },
  { label: "Last Name", key: "last_name" },
  { label: "Email", key: "email" },
  { label: "DOB", key: "dob" },
  { label: "address", key: "address" },
  { label: "Phone", key: "phone" },
  { label: "Gender", key: "gender" },
  { label: "Twelth School", key: "twelth_school" },
  { label: "Twelth Percentage", key: "twelth_percentage" },
  { label: "Tenth School", key: "tenth_school" },
  { label: "Tenth Percentage", key: "tenth_percentage" },
  { label: "Admission NO", key: "adm_no" },
  { label: "Register NO", key: "register_no" },
  { label: "S1 SGPA", key: "sgpa_s1" },
  { label: "S2 SGPA", key: "sgpa_s2" },
  { label: "S3 SGPA", key: "sgpa_s3" },
  { label: "S4 SGPA", key: "sgpa_s4" },
  { label: "S5 SGPA", key: "sgpa_s5" },
  { label: "S6 SGPA", key: "sgpa_s6" },
  { label: "S7 SGPA", key: "sgpa_s7" },
  { label: "S8 SGPA", key: "sgpa_s8" },
  { label: "CGPA", key: "cgpa" },
  { label: "Current Backlogs", key: "current_backlogs" },
  { label: "Backlog History", key: "backlog_history" },
  { label: "Skills", key: "skills" },
  { label: "Batch", key: "batch" },
  { label: "Branch", key: "branch" },
];

const ExportData = () => {
  const [filterOpen, setFilterOpen] = useState(true);
  const axios = useAuthAxious();
  const { validateFormData } = useForm();
  const [studentData, setStudentData] = useState([]);
  const [branches, setBranches] = useState([]);
  const [batches, setBatches] = useState([]);
  const [errors, setErrors] = useState({});
  const csvLinkRef = useRef();

  const [filterOptions, setFilterOptions] = useState({
    requiredColumns: [
      "first_name",
      "last_name",
      "email",
      "dob",
      "address",
      "phone",
      "gender",
      "twelth_school",
      "tenth_school",
      "twelth_percentage",
      "tenth_percentage",
      "cgpa",
      "skills",
      "batch",
      "branch",
    ],

    selectedBranches: branches || [],
    batch: "",
    minCGPA: 0,
    currentBacklogs: "",
    backlogHistory: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const {
          response: { data: batches },
          err: batchErr,
        } = await getAllBatches();

        const {
          response: { data: branches },
          err: branchErr,
        } = await getAllBranches();

        if (branches) {
          setBranches(branches);
        }

        if (batches) {
          setBatches(batches);
        }

        if (batchErr || branchErr) {
          batchErr && console.error(batchErr);
          branchErr && console.error(branchErr);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    setFilterOptions((prev) => ({ ...prev, selectedBranches: branches }));
  }, [branches]);

  const handleColumnChange = (e) => {
    const isChecked = e.currentTarget.checked;
    const name = e.currentTarget.name;

    if (isChecked)
      setFilterOptions((prev) => ({
        ...prev,
        requiredColumns: [...prev.requiredColumns, name],
      }));
    else
      setFilterOptions((prev) => ({
        ...prev,
        requiredColumns: prev.requiredColumns.filter(
          (column) => column !== name
        ),
      }));

    // setFilterOptions((prev) => ({
    //   ...prev,
    //   requiredColumns: { ...prev.requiredColumns, [name]: isChecked },
    // }));
  };

  const handleSelectedBranchChange = (e) => {
    const isChecked = e.currentTarget.checked;
    const name = e.currentTarget.name;

    if (isChecked)
      setFilterOptions((prev) => ({
        ...prev,
        selectedBranches: [...prev.selectedBranches, name],
      }));
    else
      setFilterOptions((prev) => ({
        ...prev,
        selectedBranches: prev.selectedBranches.filter(
          (branch) => branch !== name
        ),
      }));
  };

  const onInputChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFilterOptions((prev) => ({ ...prev, [name]: value }));
  };

  const filterData = async () => {
    try {
      const formData = {
        batch: filterOptions.batch,
        minCGPA: filterOptions.minCGPA,
        currentBacklogs: filterOptions.currentBacklogs
          ? filterOptions.currentBacklogs
          : null,
        backlogHistory: filterOptions.backlogHistory
          ? filterOptions.backlogHistory
          : null,
      };

      const { data, errors: currentErrors } = await validateFormData(
        filterSchema,
        formData
      );
      setErrors(currentErrors || {});
      if (currentErrors && Object.keys(currentErrors).length !== 0) {
        return false;
      }

      const { response, err } = await filterStudentData(axios, data);
      if (response) {
        const formatedData =
          response.data &&
          response.data.map((student) =>
            student.dob
              ? { ...student, dob: formatDate(student.dob) }
              : { ...student }
          );
        setStudentData(formatedData);
        return true;
      } else {
        alert("Filter error inside");
        console.error(err);
        return false;
      }
    } catch (err) {
      alert("Filter error");
      console.error(err);
      return false;
    }
  };

  const selectedBranchStudents = studentData.filter(
    (student) => filterOptions.selectedBranches.indexOf(student.branch) > -1
  );

  const tableData = selectedBranchStudents.map((student) => {
    return filterOptions.requiredColumns
      .map((column) => (student[column] ? student[column] : " "))
      .filter((value) => value);
  });

  // const tableColumns = Object.keys(
  //   studentData.length !== 0 ? studentData[0] : []
  // ).filter((column) => filterOptions.requiredColumns[column]);

  // const branchIndex = tableColumns ? tableColumns.indexOf("branch") : -1;

  // const tableData = studentData
  //   .map((student) => Object.values(student))
  //   .filter((data) =>
  //     branchIndex
  //       ? filterOptions.selectedBranches.indexOf(data[branchIndex])
  //       : false
  //   );

  const csvColumns = columns.filter(
    (column) => filterOptions.requiredColumns.indexOf(column.key) > -1
  );

  const csvData = selectedBranchStudents.map((student) => {
    const formated = {};
    csvColumns.map((column) => (formated[column.key] = student[column.key]));
    return formated;
  });

  const tableColumns = csvColumns.map((column) => column.label);

  // const tableColumns = filterOptions.requiredColumns.map((column) =>
  //   column.split("_").join(" ")
  // );

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
          <CSVLink
            className="csv-button"
            data={csvData}
            headers={csvColumns}
            ref={csvLinkRef}
            filename="my-file.csv"
          />
          <Button
            text="Export"
            onClick={(e) => {
              e.preventDefault();
              csvLinkRef.current.link.click();
            }}
          />
        </div>
      </div>
      {tableData.length === 0 ? (
        <div className="done-msg">
          <MdError className="icon" />
          No Students With Applied Filters
        </div>
      ) : (
        <Table colNames={tableColumns} data={tableData} />
      )}
      {filterOpen && (
        <div className="filter-box">
          <h3>Filters</h3>
          <h4>Columns</h4>
          <form>
            <div className="column-box">
              {/* {(() => {
                const columns = [];
                for (const [key, value] of Object.entries(
                  filterOptions.requiredColumns
                )) {
                  columns.push(
                    <CheckBox
                      name={key}
                      key={key}
                      value={value}
                      label={key}
                      onChange={handleColumnChange}
                    />
                  );
                }
                return columns;
              })()} */}

              {columns.map((column) => (
                <CheckBox
                  key={column.key}
                  name={column.key}
                  value={filterOptions.requiredColumns.indexOf(column.key) > -1}
                  label={column.label}
                  onChange={handleColumnChange}
                />
              ))}
            </div>
            <h4>Branches</h4>
            <div className="column-box">
              {branches.map((branch) => (
                <CheckBox
                  key={branch}
                  name={branch}
                  value={filterOptions.selectedBranches.indexOf(branch) > -1}
                  label={branch}
                  onChange={handleSelectedBranchChange}
                />
              ))}
            </div>
            <div className="textfield-box">
              <SelectInput
                name="batch"
                value={filterOptions.batch}
                options={batches.map((batch) => ({ value: batch }))}
                onChange={onInputChange}
                label="Batch"
                errMsg={errors["batch"]}
              />
              <TextField
                name="minCGPA"
                label="Min CGPA"
                value={filterOptions.minCGPA}
                onChange={onInputChange}
                errorMsg={errors["minCGPA"]}
              />
              <TextField
                value={filterOptions.currentBacklogs}
                name="currentBacklogs"
                label="Current Backlogs"
                onChange={onInputChange}
                errorMsg={errors["currentBacklogs"]}
              />
              <TextField
                value={filterOptions.backlogHistory}
                name="backlogHistory"
                label="Backlog History"
                onChange={onInputChange}
                errorMsg={errors["backlogHistory"]}
              />
            </div>
            <div className="apply-btn-box">
              <Button
                text="Apply"
                onClick={async (e) => {
                  e.preventDefault();
                  const res = await filterData();
                  if (res) setFilterOpen(false);
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
