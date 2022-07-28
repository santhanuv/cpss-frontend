import { useState } from "react";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import StyledTable from "./Table.Styled";

const defaultData = [
  {
    firstName: "Santhanu",
    lastName: "V",
    dob: "10-02-2001",
  },
  {
    firstName: "Shone",
    lastName: "Mathew",
    dob: "11-07-2002",
  },
  {
    firstName: "Shefton",
    lastName: "Phlip",
    dob: "27-05-2001",
  },
];

const columnHelper = createColumnHelper();

const Table = ({ columns, data }) => {
  const tableColumns = columns.map(({ label, key }) =>
    columnHelper.accessor(key, {
      cell: (info) => info.getValue(),
      header: () => label,
    })
  );

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <StyledTable>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTable>
  );
};

export default Table;
