import { useEffect, useState } from "react";
import { useTable, useSortBy, HeaderGroup, Column, Row } from "react-table";
import { MatterTableRowCustomize } from "@/utils/types";
import Image from "next/image";
import { MatterTableData } from "@/utils/types";

interface AdminTableProps {
  columns: Column[];
  data: MatterTableData[];
  rowCustomize?: MatterTableRowCustomize[];
  isLoading?: boolean;
}

const AdminTable: React.FC<AdminTableProps> = ({
  columns,
  data,
  rowCustomize = [],
  isLoading = true,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="rounded-lg overflow-x-auto max-w-full list-scrollbar">
      <div className="w-[1080px] lg:w-full pb-3">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-black-light-300 font-sans"
        >
          <thead className="bg-black-light-200 text-white">
            {headerGroups.map((headerGroup, idx) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
                {headerGroup.headers.map((column, idx) => (
                  <th
                    {...column.getHeaderProps(
                      (column as any).getSortByToggleProps()
                    )}
                    key={idx}
                  >
                    <div className="flex items-center justify-between py-4 pl-4 text-left font-medium tracking-wider gap-1 ">
                      <span>{column.render("Header")}</span>
                      {columns.length !== idx + 1 && (
                        <div className="pr-4 border-r border-solid border-black-light-300">
                          {(column as any).isSorted ? (
                            (column as any).isSortedDesc ? (
                              <Image
                                src={"/assets/img/arrow-down.svg"}
                                width={24}
                                height={24}
                                alt="arrow-up"
                                className="min-w-6 min-h-6"
                              />
                            ) : (
                              <Image
                                src={"/assets/img/arrow-down.svg"}
                                width={24}
                                height={24}
                                alt="arrow-down"
                                className="rotate-180 min-w-6 min-h-6"
                              />
                            )
                          ) : (
                            <Image
                              src={"/assets/img/arrow-down.svg"}
                              width={24}
                              height={24}
                              alt="arrow-up"
                              className="min-w-6 min-h-6"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="divide-y divide-black-light-300 bg-black-light-100 text-black-300 whitespace-nowrap font-normal text-sm "
          >
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) =>
                  headerGroups.map((headerGroup, idx) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      className="p-4"
                      key={idx}
                    >
                      {headerGroup.headers.map((column, idx) => (
                        <th
                          className="p-4"
                          {...column.getHeaderProps(
                            (column as any).getSortByToggleProps()
                          )}
                          key={idx}
                        >
                          <div className="w-full h-4 bg-gray-600 animate-pulse"></div>
                        </th>
                      ))}
                    </tr>
                  ))
                )
              : rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      key={i}
                      className="cursor-pointer"
                    >
                      {row.cells.map((cell, idx) => {
                        const rowItem = rowCustomize.find(
                          (item) => item.rownum === idx
                        );
                        if (rowItem) {
                          return (
                            <td
                              {...cell.getCellProps()}
                              key={idx}
                              className="p-4"
                            >
                              <rowItem.component data={row.original} />
                            </td>
                          );
                        } else {
                          return (
                            <td
                              {...cell.getCellProps()}
                              key={idx}
                              className="p-4"
                            >
                              {cell.value}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
