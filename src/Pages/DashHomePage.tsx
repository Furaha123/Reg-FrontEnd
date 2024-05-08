import { useState } from "react";
import { useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import UserData from "./../components/shared/usersdata.json";
import { FaRegEye } from "react-icons/fa";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { MouseEvent } from "react";

import ChartBar from "../components/ChartBar";

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Active":
      return {
        textColor: "text-green-500 ",
      };
    case "Paused":
      return {
        textColor: "text-red-500",
      };
    case "Vocations":
      return {
        textColor: "text-[#C3841D]",
      };
    default:
      return {
        textColor: "",
        backgroundGradient: "",
      };
  }
};

const DashHomePage = () => {
  const [selectedDate, setDate] = useState(new Date());
  interface CustomDatePickerInputProps {
    value: Date;
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
  }

  const CustomDatePickerInput: React.FC<CustomDatePickerInputProps> = ({
    value,
    onClick,
  }) => (
    <div className="flex items-center">
      <div className="mr-6 cursor-pointer" onClick={onClick}>
        <FaCalendarAlt className="text-gray-500 ml-2" />
      </div>
      <div className="p-1">{value.toString()}</div>{" "}
      {/* Convert Date to string */}
    </div>
  );

  const columns = [
    {
      header: "Names",
      accessorKey: "username",
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Actions",
      accessorKey: "status",
    },
    {
      accessorKey: "Actions",
      Header: "Actions",
      cell: () => (
        <div className="flex space-x-2">
          <FaRegEye className="text-green-500 cursor-pointer" />
          <FiTrash2 className="text-red-500 cursor-pointer" />
          <FiEdit className="text-blue-500 cursor-pointer" />
        </div>
      ),
    },
  ];
  const data = useMemo(() => UserData, []);

  return (
    <section className="bg-[#F6FAF7] overflow-hidden h-screen  ">
      <div className="w-[95%] ml-4 h-full">
        <div className="grid  md:grid-cols-3    lg:flex lg:justify-between">
          <div className="flex items-center relative ">
            <input
              type="text"
              placeholder="Search Farm"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
            />
          </div>
          <div className="md:items-end  md:text-left ">
            <p className=" text-[#999] bold">Choose date</p>
            <div className="bg-white py-1 w-[200px] rounded-sm">
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date) => setDate(date)}
                customInput={
                  <CustomDatePickerInput
                    value={selectedDate}
                    onClick={(event) => console.log(event)}
                  />
                }
              />
            </div>
          </div>
        </div>

        <div className="grid  gap-8  p-2 rounded-lg w-[100%] md:flex  lg:justify-between ">
          <div className="grid gap-8 md:flex ">
            <div className="shadow-sm bg-white p-4 rounded-lg w-[140px] h-[100px]">
              <p className="text-sm text-gray-600">Data Collected</p>
              <p className="font-bold text-2xl">
                5 <span className="text-gray-500 text-[10px]">data</span>
              </p>
              <a href="#" className="text-[#00743F] hover:underline">
                <p className="text-[10px] float-right">View Details</p>
              </a>
            </div>
            <div className="shadow-sm bg-white p-4 rounded-lg w-[180px] h-[100px]">
              <p className="text-sm text-gray-600">Parameters measured</p>
              <p className="font-bold text-2xl">
                7 <span className="text-gray-500 text-[10px]">parameters</span>
              </p>
              <a href="#" className="text-[#00743F] hover:underline">
                <p className="text-[10px] float-right">View Details</p>
              </a>
            </div>
          </div>

          <div className="shadow-sm bg-white p-4 rounded-lg w-[140px] h-[100px]">
            <p className="text-sm text-gray-600">Attended Alerts</p>
            <p className="font-bold text-2xl">
              5 <span className="text-gray-500 text-[10px]">Alerts</span>
            </p>
            <a href="#" className="text-[#00743F] hover:underline">
              <p className="text-[10px] float-right">View Details</p>
            </a>
          </div>
        </div>
        
        <div className="flex  justify-between">
          <div className=" ">
            <table className="table-auto border-collapse border-none w-full bg-white rounded-lg ml-2 h-full shadow-md">
              <thead>
                <tr className="text-[#000] text-[12px] bolder bg-[#f4f4f5]">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="px-4 py-2 text-left font-semibold text-gray-700"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-black text-xs font-normal">
                {data.map((user, index) => (
                  <tr key={index} className="">
                    <td className="px-4 py-2 border-none">
                      <div>
                        <p className="font-semibold ">{user.username}</p>
                        <p className="text-gray-500">{user.email}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-none mt-20">
                      <div>
                        <p className="font-semibold">{user.role}</p>
                        <p className="text-gray-500">{user.meaning}</p>
                      </div>
                    </td>
                    <td
                      className={`px-4 py-2 text-center  ${
                        getStatusStyle(user.status).textColor
                      } ${getStatusStyle(user.status).backgroundGradient}`}
                    >
                      {user.status}
                    </td>
                    <td className="px-4 py-2 border-none">
                      <div className="flex space-x-2">
                        <FaRegEye className="text-green-500 cursor-pointer" />
                        <FiTrash2 className="text-red-500 cursor-pointer" />
                        <FiEdit className="text-blue-500 cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="">
            <ChartBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashHomePage;
