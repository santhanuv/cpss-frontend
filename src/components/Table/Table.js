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
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <StyledTable>
      <table {...{ style: { width: table.getCenterTotalSize() } }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  {...{
                    key: header.id,
                    colSpan: header.colSpan,
                    style: { width: header.getSize() },
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  <div
                    {...{
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: `resizer ${
                        header.column.getIsResizing() ? "isResizing" : ""
                      }`,
                      style: {
                        transform:
                          false && header.column.getIsResizing()
                            ? `translateX(${
                                table.getState().columnSizingInfo.deltaOffset
                              }px)`
                            : "",
                      },
                    }}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  {...{ key: cell.id, style: { width: cell.column.getSize() } }}
                >
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
