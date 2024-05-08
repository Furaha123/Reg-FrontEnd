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
import messageData from "./help.json";
import { useMemo } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCaretRight } from "react-icons/fa";

import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { IoMdArrowDown } from "react-icons/io";

const HelpTable = () => {
  const data = useMemo(() => messageData, []);

  const [showModal, setShowModal] = useState(false);
  const handleEditClick = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const [sorting, setSorting] = useState<ColumnSort[]>([]);

  const [filtering, setfiltering] = useState("");
  const columns = [
    {
      Header: "ID",
      accessorKey: "ID",
      cell: (info: { row: { index: number } }) => (
        <span>{info.row.index + 1}</span>
      ),
    },
    {
      header: () => (
        <div className="    flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Full Names
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "names",
    },
    {
      header: () => (
        <div className=" justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Email
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "email",
    },
    {
      header: () => (
        <div className=" justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Messages
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      accessorKey: "message",
    },
    {
      header: "Arrival Date",
      accessorKey: "date",
    },
    {
      accessorKey: "actions",
      header: () => (
        <div className="  justify-start items-center gap-1 inline-flex">
          <div className="text-gray-500 font-medium font-['Inter'] leading-[18px]">
            Action
          </div>
          <div className="w-4 h-4 p-[3.33px]  flex">
            <IoMdArrowDown />
          </div>
        </div>
      ),
      cell: () => (
        <button
          onClick={handleEditClick}
          className="w-[80px] h-5 px-1 py-1 bg-white rounded-xl border border-emerald-800 justify-start items-center gap-2.5 inline-flex"
        >
          <div className="w-[27px] text-emerald-800 text-[10px] font-semibold font-['Inter']">
            REPLY
          </div>
          <div className="w-6 h-6 pl-4 py-[5px] justify-end items-center text-emerald-500 flex">
            <FaCaretRight />
          </div>
        </button>
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
  ];
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
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

   const exampleMessages = [
     {
       from: "Client",
       text: "Hi there, I have a question about your product.",
     },
     { from: "You", text: "Sure, what would you like to know?" },
     { from: "Client", text: "I'm curious about the warranty policy." },
    
     { from: "You", text: "Sure, what would you like to know?" },
     { from: "Client", text: "I'm curious about the warranty policy." },
     
   ];

  return (
    <div className="w-[90%]  ml-3  mb-4 h-full">
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

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-end items-center">
          <div className="bg-white rounded-lg p-6 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Reply to Client</h2>
              <button
                onClick={handleModalClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <RxCross2 />
              </button>
            </div>
            <div className="mb-4">
              {exampleMessages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    message.from === "Client"
                      ? "text-left mr-20 "
                      : "text-right ml-20"
                  }`}
                >
                  <div
                    className={`font-semibold ${
                      message.from === "Client"
                        ? "text-blue-700"
                        : "text-green-700"
                    } text-sm`}
                  >
                    {message.from}
                  </div>
                  <div
                    className={`py-1 px-3 rounded-lg ${
                      message.from === "Client"
                        ? "bg-gray-200 text-xs"
                        : "bg-green-200 text-xs"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <form>
              <textarea
                // value={reply}
                // onChange={(e) => setReply(e.target.value)}
                className="w-full h-32 p-2 border border-gray-300 rounded-lg resize-none"
                placeholder="Type your reply here..."
              ></textarea>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="px-4 py-2 mr-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 focus:outline-none"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpTable;
