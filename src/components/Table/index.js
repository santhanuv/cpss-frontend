import React from "react";
import { StyledTable, TableWrapper } from "./StyledTable";

const Table = ({ colNames = [], data = [], rowCallback = () => {} }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {colNames.map((colName, index) => (
              <th key={index}>{colName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} onClick={rowCallback}>
              {row.map((col, index) => (
                <td key={index}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
