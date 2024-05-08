import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import LineSoilChart from "@/components/LineSoilChart";
import PiChart from "@/components/PiChart";

const FarmAnalyst = () => {
  return (
    <section className="ml-4 w-[95%]">
      <p>Filters</p>
      <div className="flex  ">
        <div className="relative mr-4 border bg-white border-gray-300 rounded-md">
          <div className="flex items-center">
            <FaShoppingCart className="ml-2 text-gray-500" />
            <select className="px-4 py-2 pr-10 w-[200px] bg-transparent text-gray-500 outline-none">
              <option value="farm1a">FARM 1A</option>
            </select>
          </div>
        </div>
        <div className="relative mr-4 border bg-white border-gray-300 rounded-md">
          <div className="flex items-center">
            <FaShoppingCart className="ml-2 text-gray-500" />
            <select className="px-4 py-2 pr-10 w-[200px] bg-transparent text-gray-500 outline-none">
              <option value="farm1a">Soil Moisture</option>
            </select>
          </div>
        </div>

        <div className="relative mr-4 border bg-white border-gray-300 rounded-md">
          <div className="flex items-center">
            <FaCalendarAlt className="ml-2 text-gray-500" />
            <select className="px-4 py-2 pr-10 w-[200px] bg-transparent text-gray-500 outline-none">
              <option value="1">01-01-2024</option>
              <option value="2">02-01-2024</option>
              <option value="3">03-01-2024</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex gap-[2rem]">
        <LineSoilChart />
        <div className="">
          <PiChart />
        </div>
      </div>
    </section>
  );
};

export default FarmAnalyst;
