import React from "react";
import { StyledTable, TableWrapper } from "./StyledTable";

const Table = ({ colNames = [], data = [] }) => {
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
            <tr key={index}>
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
