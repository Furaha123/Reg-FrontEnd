import React, { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnSort,
} from "@tanstack/react-table";

import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import EditModal from "./EditModal";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FiTrash2, FiEdit } from "react-icons/fi";
import Modal from "./Modal";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const CropMgtTable = () => {
  const [data, setData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sorting, setSorting] = useState<ColumnSort[]>([]);

  const [sortBy, setSortBy] = useState("Date");
  const [filtering, setfiltering] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [id, setId] = useState("");
  const fetchData = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjM5ZGQ1YjkxOGIzN2FlODhlOTdmNGIiLCJlbWFpbCI6ImZ1cmFoYW1vc2VzMTRAZ21haWwuY29tIiwiaWF0IjoxNzE1MTU0MDQ0LCJleHAiOjE3MTUxOTcyNDR9.3LTK2y7xYpOH0MCGAcQ4R0ICY8gIjtK21wkncn0nMcA";

      const response = await fetch(
        "https://bazafarm-backend-v2-rlnd.onrender.com/api/v1/crops",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            permissions: "admin",
          },
        }
      );
      const jsonData = await response.json();
      setData(jsonData.crops);

      const ids = jsonData.crops.map((crop: any) => crop._id);

      setId(ids[0]); // Assuming you want to set the first ID
      console.log("IDs:", ids);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleEditClick = (id) => {
    console.log("Clicked crop ID:", id); // Log the ID here
    setId(id); // Set the single ID here
    setShowEditModal(true);
  };

  const handleOpenEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  console.log();
  const handleSortBy = (option: string, label: string) => {
    let newSorting: ColumnSort[] = [];
    if (option === "date") {
      newSorting = [{ id: "plantingDate", desc: false }];
    } else if (option === "name") {
      newSorting = [{ id: "name", desc: false }];
    } else if (option === "status") {
      newSorting = [{ id: "current_status", desc: false }];
    }
    setSorting(newSorting);
    setSortBy(label);
    setShowDropdown(false);
  };

  const columns = [
    {
      header: "Crop Name",
      accessorKey: "name",
    },
    {
      header: "Species",
      accessorKey: "species",
    },
    {
      header: "Variety",
      accessorKey: "variety",
    },
    {
      header: "Planting Date",
      accessorKey: "plantingDate",
    },
    {
      header: "Harvest Date",
      accessorKey: "harvestDate",
    },
    {
      header: "Area",
      accessorKey: "area",
    },
    {
      header: "Create Date",
      accessorKey: "createdAt",
    },
    {
      accessorKey: "Actions",
      Header: "Actions",
      cell: () => (
        <div className="flex space-x-2">
          <FaRegEye
            className="text-green-500 cursor-pointer"
            onClick={handleOpenEditModal}
          />
          <FiTrash2 className="text-red-500 cursor-pointer" />
          <FiEdit
            className="text-blue-500 cursor-pointer"
            onClick={() => handleEditClick(crop._id)}
          />
        </div>
      ),
    },
  ];

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
    <div className="  ml-3  mb-4 h-full">
      <div className="flex justify-between items-center  mb-3 w-[92%] ">
        <div className="flex items-center space-x-3 ">
          <p className="font-semibold ml-4">SORT BY</p>
          <div className="relative">
            <div
              className="flex items-center space-x-1 px-2 py-1 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaCalendarAlt />
              <span>{sortBy}</span>
              <FaAngleDown />
            </div>
            {showDropdown && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-md">
                <button
                  onClick={() => handleSortBy("date", "Date")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Date
                </button>
                <button
                  onClick={() => handleSortBy("name", "Name")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Name
                </button>
                <button
                  onClick={() => handleSortBy("status", "Status")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Status
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="relative">
          <input
            value={filtering}
            onChange={(e) => setfiltering(e.target.value)}
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-[400px]"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
        <button
          className="ml-3 px-4 py-2  bg-[#00743f] text-white rounded-lg hover:bg-black focus:outline-none focus:bg-[#000]"
          onClick={() => setShowModal(true)}
        >
          Add Crop
        </button>
      </div>

      <table className="table-auto border-collapse border-none w-[92%] bg-white rounded-[22px] ml-2">
        <thead>
          <tr className="text-[#000] text-[12px] bolder">
            {table.getHeaderGroups().map((headerGroup) => (
              <React.Fragment key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left font-semibold text-gray-700"
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
        <tbody className="w-[101px] h-[19px] text-black text-xs font-normal font-['Inter']">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border-none">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-[40%] h-[32px] relative bg-white rounded-lg flex justify-end items-center mt-2 shadow border-[#00743F] left-[33rem]">
        <button
          className="w-1/3 h-7 text-center font-medium font-sans flex justify-center items-center"
          onClick={() =>
            setPagination((prevState) => ({
              ...prevState,
              pageIndex: prevState.pageIndex - 1,
            }))
          }
          disabled={pagination.pageIndex === 0}
        >
          <span>
            <GrFormPrevious />
          </span>
        </button>
        {[...Array(table.getPageCount()).keys()].map((index) => (
          <button
            key={index}
            className={`w-1/3 h-7 text-center font-medium font-sans flex justify-center items-center ${
              index === pagination.pageIndex
                ? "border bg-emerald-500 text-white"
                : ""
            }`}
            onClick={() =>
              setPagination((prevState) => ({
                ...prevState,
                pageIndex: index,
              }))
            }
          >
            <span>{index + 1}</span>
          </button>
        ))}
        <button
          className="w-1/3 h-7 text-center font-medium font-sans rounded-r-full flex justify-center items-center"
          onClick={() =>
            setPagination((prevState) => ({
              ...prevState,
              pageIndex: prevState.pageIndex + 1,
            }))
          }
          disabled={pagination.pageIndex === table.getPageCount() - 1}
        >
          <span>
            <MdOutlineNavigateNext />
          </span>
        </button>
      </div>

      {showModal && <Modal onClose={handleModalClose} />}
      {showEditModal && <EditModal onClose={handleCloseEditModal} id={id} />}
    </div>
  );
};

export default CropMgtTable;
