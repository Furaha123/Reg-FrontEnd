import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,

} from "@tanstack/react-table";
import { useMemo } from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { BiLoaderCircle } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

import DeviceTableData from "./DeviceTable.json";


const DeviceConfig = () => {
  const [deviceCode, setDeviceCode] = useState("");
  const data = useMemo(() => DeviceTableData, []);

  // State to store selected rows
  const [selectedRows, setSelectedRows] = useState<string[]>([]);



   // Function to handle row selection
   const toggleRowSelection = (rowId: string) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Function to handle form submission
  const handleSubmit = () => {
    // Add logic to handle form submission
    console.log("Form submitted");
    // Close modal after form submission
    setShowModal(false);
  };

  const handleEdit = (id: string) => {
    // Logic to fetch device information for editing
    console.log("Edit", id);
    // Set modal visibility to true
    setShowEditModal(true);
  };

  const handleDelete = (id: string) => {
    // Implement delete functionality here
    console.log("Delete", id);
  };

  const handleAssign = (id: string) => {
    // Implement assign functionality here
    console.log("Assign", id);
  };

  const columns = [
    {
      accessorKey: "selection",
      header: () => (
        <input
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              const allRowIds = table.getRowModel().rows.map((row) => row.id);
              setSelectedRows(allRowIds);
            } else {
              setSelectedRows([]);
            }
          }}
          checked={selectedRows.length === data.length}
          
        />
      ),
      cell: (cell: { row: { id: string } }) => (
        <input
          type="checkbox"
          onChange={() => toggleRowSelection(cell.row.id)}
          checked={selectedRows.includes(cell.row.id)}
        />
      ),
    },
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      accessorKey: "location",
      header: "LOCATION",
    },
    {
      accessorKey: "deviceCode",
      header: "DEVICE CODE",
    },
    {
      accessorKey: "deviceName",
      header: "DEVICE NAME",
    },
    {
      accessorKey: "plantType",
      header: () => (
        <select
          onChange={(e) => {
            // Handle assignment logic here
            console.log("Assigned plant type:", e.target.value);
          }}
        >
          <option value="">PLANT TYPE</option>
          <option value="ibigori">Ibigori</option>
          <option value="amasaka">Amasaka</option>
          <option value="ibijumba">Ibijumba</option>
          <option value="amateke">Amateke</option>
        </select>
      ),
    },
    {
      accessorKey: "status",
      header: "STATUS",
      cell: () => (
        <div className="bg-[#00743F] text-white rounded py-1 text-center">
          Pending
        </div>
      ),
    },
    {
      accessorKey: "actions",
      header: "ACTIONS",
      cell: (cell: { row: { original: { id: string } } }) => (
        <div className="flex space-x-2">
          <BiLoaderCircle
            className="text-green-950 cursor-pointer"
            onClick={() => handleAssign(cell.row.original.id)}
          />
          <FiEdit
            className="text-blue-500 cursor-pointer"
            onClick={() => handleEdit(cell.row.original.id)}
          />
          <FiTrash2
            className="text-red-500 cursor-pointer"
            onClick={() => handleDelete(cell.row.original.id)}
          />
        </div>
      ),
    },
  ];
  
  

  const table = useReactTable({
    data,   
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      {showEditModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded shadow-lg z-10 w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Update the device</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="deviceCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Device Code:
                </label>
                <input
                  type="text"
                  id="deviceCode"
                  name="deviceCode"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={deviceCode}
                  onChange={(e) => setDeviceCode(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cropType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Crop Type:
                </label>
                <select
                  id="cropType"
                  name="cropType"
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="crop1">Crop 1</option>
                  <option value="crop2">Crop 2</option>
                  <option value="crop3">Crop 3</option>
                  <option value="crop3">Crop 3</option>
                  <option value="crop3">Crop 3</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="deviceName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Device Name:
                </label>
                <input
                  type="text"
                  id="deviceName"
                  name="deviceName"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-[#00743F] hover:bg-[#00743F] text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="flex items-center space-x-3 mb-4">
      <div className="relative mr-4 border bg-white border-gray-300 rounded-md">
          <div className="flex items-center">
            <FaShoppingCart className="ml-2 text-gray-500" />
            <select className="px-4 py-2 pr-10 w-[200px] bg-transparent text-gray-500 outline-none">
              <option value="farm1a">FARM 1A</option>
            </select>
          </div>
        </div>
        <button
          className="bg-[#00743F] hover:bg-[#00743F] text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Add Device
        </button>
      </div>

      <div className="overflow-y-auto rounded-md max-h-[480px]">
      <table className="w-full bg-white ">
          <thead>
            <tr className="bg-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <React.Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 text-left font-semibold text-gray-700"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-200">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 text-sm font-['Inter']">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
 
      </div>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded shadow-lg z-10 w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Publish New Device Here</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="deviceCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Device Code:
                </label>
                <input
                  type="text"
                  id="deviceCode"
                  name="deviceCode"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cropType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Crop Type:
                </label>
                <select
                  id="cropType"
                  name="cropType"
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="crop1">Crop 1</option>
                  <option value="crop2">Crop 2</option>
                  <option value="crop3">Crop 3</option>
                  <option value="crop3">Crop 3</option>
                  <option value="crop3">Crop 3</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="deviceName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Device Name:
                </label>
                <input
                  type="text"
                  id="deviceName"
                  name="deviceName"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-[#00743F] hover:bg-[#00743F] text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceConfig;