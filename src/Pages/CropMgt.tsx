import CropMgtTable from "@/components/shared/CropMgtTable";

const CropMgt = () => {
  return (
    <div className="bg-[#F6FAF7]  flex gap-5 overflow-hidden h-screen">
      <div className="w-[100%]  overflow-y-auto h-full">
        <div className="flex justify-between p-4 rounded-lg  w-[94%] ">
          <div className=" shadow-sm  bg-white p-4 rounded-lg w-[140px] h-[100px]">
            <p className="text-sm text-gray-600 ">Total crops</p>
            <p className=" font-bold text-2xl">
              15 <span className="text-gray-500 text-[10px]">crops</span>
            </p>
          </div>
          <div className=" shadow-sm bg-white p-4 rounded-lg w-[140px] h-[100px]">
            <p className="text-sm text-gray-600 ">Planted Area</p>
            <p className=" font-bold text-2xl">
              16 <span className="text-gray-500 text-[10px]">Hectares</span>
            </p>
          </div>
          <div className="rounded-lg w-[300px] bg-white shadow-sm ">
            <p className="text-sm text-gray-600 ml-3">Need support?</p>
            <div className="flex justify-center items-center mt-2">
              <textarea
                className="w-[200px]  px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Leave comment..."
              ></textarea>
              <button className="ml-2 px-4 py-2 bg-[#00743f] text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <CropMgtTable />
        </div>
      </div>
    </div>
  );
};

export default CropMgt;
