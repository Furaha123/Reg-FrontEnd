import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnSort,
} from "@tanstack/react-table";
import { BsThreeDotsVertical } from "react-icons/bs";
import dataj from "./data.json";
import { useMemo } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { IoMdArrowDown } from "react-icons/io";

const DataTable = () => {
  const data = useMemo(() => dataj, []);

  const [sorting, setSorting] = useState<ColumnSort[]>([]);

  const [filtering, setfiltering] = useState("");
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
      cell: (info: { row: { index: number } }) => (
        <span>{info.row.index + 1}</span>
      ),
    },
    {
      accessorKey: "sn",
      header: () => (
        <div>
          <MdOutlineIndeterminateCheckBox className="h-4 w-4" color="blue" />
        </div>
      ),
      cell: () => (
        <input
          type="checkbox"
          className="form-checkbox h-3 w-3  text-[#00743F]"
        />
      ),
    },
    {
      header: () => (
        <div className="    flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Device Name
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "Device",
    },
    {
      header: () => (
        <div className=" justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Soil Moisture
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "Moisture",
    },
    {
      header: () => (
        <div className=" justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Soil Temperature
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "Temperature",
    },
    {
      header: () => (
        <div className=" justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Electro-conductivity
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "Electro",
    },
    {
      header: () => (
        <div className=" justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Nitrogen
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "Nitrogen",
    },
    {
      header: () => (
        <div className=" justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Phosphorus
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "Phosphorus",
    },
    {
      header: () => (
        <div className=" justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            PH
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "PH",
    },
    {
      header: () => (
        <div className=" justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Battery level
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "Battery",
    },
    {
      accessorKey: "Status",
      header: () => (
        <div className="  justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Status
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      cell: (info: { row: { index: number } }) => {
        const isOdd = info.row.index % 2 === 1;

        return (
          <button className="w-[48px] h-[22px] mix-blend-multiply justify-start items-start inline-flex">
            <div
              className={
                isOdd
                  ? "pl-1.5 pr-2 py-0.5 bg-gray-100 rounded-2xl justify-center items-center gap-1.5 flex"
                  : "pl-1.5 pr-2 py-0.5 bg-emerald-50 rounded-2xl justify-center items-center gap-1.5 flex"
              }
            >
              <div className="w-2 h-2 p-px justify-center items-center flex">
                <div
                  className={
                    isOdd
                      ? "w-1.5 h-1.5 bg-slate-500 rounded-full"
                      : "w-1.5 h-1.5 bg-emerald-500 rounded-full"
                  }
                />
              </div>
              <div
                className={
                  isOdd
                    ? "text-center text-gray-700 text-[10px] font-medium font-['Inter'] leading-[18px]"
                    : "text-center text-emerald-700 text-[10px] font-medium font-['Inter'] leading-[18px]"
                }
              >
                {isOdd ? "Inactive" : "Active"}
              </div>
            </div>
          </button>
        );
      },
    },
    {
      header: () => (
        <div>
          <BsThreeDotsVertical />
        </div>
      ),
      accessorKey: "Phosphorus",
      cell: () => (
        <div>
          <BsThreeDotsVertical />
        </div>
      ),
    },
  ];
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 9,
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      pagination,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setfiltering,
  });

  return (
    <div className="w-full  ml-3  mb-4 h-full">
      <table className="table-auto   w-[93%] bg-white  ml-2">
        <thead>
          <tr className="font-['Inter'] font-medium text-[#667085] text-[9px] border-b-[1px]">
            {table.getHeaderGroups().map((headerGroup) => (
              <React.Fragment key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left font-medium text-gray-700"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  </th>
                ))}
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody className="w-[101px] text-[#667085] text-[10px] font-normal font-['Inter']">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border-b-[1px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-[50%] h-[40px] relative bg-white rounded-lg  flex justify-between items-center mt-2 ml-3 border border-[#00743F] left-[25rem]">
        <button
          className="w-1/3 h-7 text-center font-medium font-sans  flex justify-center items-center "
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <span>
            <GrFormPrevious />
          </span>
        </button>
        <button
          className="w-1/3 h-7 text-center  font-medium font-sans flex justify-center items-center"
          onClick={() => table.setPageIndex(0)}
        >
          <span>1</span>
        </button>
        <button
          className="w-1/3 h-7 text-center  font-medium font-sans flex justify-center items-center"
          onClick={() => table.setPageIndex(1)}
        >
          <span>2</span>
        </button>
        <button
          className="w-1/3 h-7 text-center  font-normal font-sans flex justify-center items-center"
          onClick={() => table.setPageIndex(2)}
        >
          <span>3</span>
        </button>
        <button
          className="w-1/3 h-7 text-center  font-medium font-sans rounded-r-full flex justify-center items-center"
          onClick={() => table.nextPage()}
        >
          <span>
            {" "}
            <MdOutlineNavigateNext />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DataTable;
