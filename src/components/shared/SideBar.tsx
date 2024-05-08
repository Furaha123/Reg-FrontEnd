import baz from "../../assets/bazfarm-svg.svg";
import baz1 from "../../assets/b-svg.svg";
import { HiViewGrid } from "react-icons/hi";
import { SiGooglelens } from "react-icons/si";
import { RiBookReadLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMiniBars4 } from "react-icons/hi2";
import { useState } from "react";

import { BsDatabase } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineHelpCenter } from "react-icons/md";
import { CiViewList, CiCalendarDate } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdOutlineSubscriptions } from "react-icons/md";
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex">
      <div className="sm:hidden ">
        <button onClick={toggleSidebar}>
          <HiMiniBars4 className="h-12 w-12" />
        </button>
      </div>
      <div
        className={`w-56 bg-white shadow border border-gray-100 sm:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="w-[74px] h-[23px] left-[20px] top-[7px] absolute">
          <img src={baz} alt="bazfarm" />
        </div>
        <div className=" top-[50px] absolute flex-col justify-start items-center gap-4 inline-flex">
          <div className="w-40 h-[52px]  bg-white rounded-2xl border border-gray-200">
            <img
              className="w-8 h-8 left-[27px] top-[7px] absolute"
              src={baz1}
            />
            <div className="left-[77px] top-[7px] absolute text-slate-900 text-xs font-bold font-['Inter'] leading-tight">
              Farm
            </div>
            <div className="left-[77px] top-[22px] absolute text-gray-400 text-xs font-normal font-['Inter'] leading-[18px]">
              Monitoring
            </div>
            <div className=" px-0.5 py-[5px] left-[140px] top-[3px] absolute justify-center items-center inline-flex">
              <RiArrowDropDownLine color="#949494" className=" w-10 h-10" />
            </div>
          </div>
          <div className="flex-col ml-3 justify-start items-start gap-3 flex ">
            <div className="flex-col justify-start items-start gap-0.1 flex">
              <div className=" pl-8  pb-1.5 justify-start items-center inline-flex">
                <div className="text-gray-400 text-xs font-normal font-['Inter'] leading-[18px]">
                  Home
                </div>
              </div>
              <div className="flex-col  justify-start items-start flex ">
                <Link to="dashboard">
                  <div className="self-stretch  h-6 w-48 rounded-[8px] justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800 ">
                    <div className="w-5 h-5 relative " />
                    <div className="text-[10px]">
                      <HiViewGrid />
                    </div>
                    <div className="grow flex gap-3 shrink hover:text-green-800 basis-0 text-slate-900 text-[10px] font-normal font-['Inter']">
                      <b> Overview</b>
                    </div>
                  </div>
                </Link>
                <Link to="farm">
                  <div className="self-stretch  h-6 w-48 rounded-[8px] justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800">
                    <div className="w-5 h-5 relative" />
                    <div className="text-[10px]">
                      <GrDeliver />
                    </div>
                    <div className="grow flex gap-3 shrink hover:text-green-800 basis-0 text-slate-900 text-[10px] font-normal font-['Inter']">
                      <b> Farm Analytics</b>
                    </div>
                  </div>
                </Link>
                <Link to="Reporting">
                  <div className="self-stretch hover:text-green-800 h-6 w-48 rounded-[8px] justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800">
                    <div className="w-5 h-5 relative" />
                    <div className="text-[10px]">
                      <BsDatabase />
                    </div>
                    <div className="grow flex text-[10px] gap-3 hover:text-green-800 shrink basis-0 text-slate-800 font-medium font-['Inter']">
                      <div className="">
                        <b>Reporting/Data</b>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="w-48 pl-8  pb-1.5 justify-start items-center inline-flex">
                <div className="text-gray-400 text-xs font-normal font-['Inter'] leading-[0px]">
                  <b>Platform</b>
                </div>
              </div>
              <div className="flex-col justify-start items-start flex">
                <Link to="crop">
                  <div className="w-48  h-6 rounded-[8px] hover:text-green-800 justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800">
                    <div className="w-5 h-5 relative" />
                    <div className="text-[10px]">
                      <CiViewList />
                    </div>
                    <div className="text-slate-900 flex gap-3 hover:text-green-800 text-[10px] font-medium font-['Inter']">
                      <div className="">
                        <b> Crop management</b>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="device_config">
                  <div className="w-48  h-6 rounded-[8px] hover:text-green-800 justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800 ">
                    <div className="w-5 h-5 relative" />
                    <div className="text-[10px]">
                      <CiCalendarDate />
                    </div>
                    <div className="text-slate-900 flex gap-3 hover:text-green-800 text-[10px] font-medium font-['Inter']">
                      <div className="">
                        <b>Configure Device</b>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="">
                  <div className="w-48  h-6 rounded-[8px] hover:text-green-800 justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800 ">
                    <div className="w-5 h-5 relative" />
                    <div className="text-[10px]">
                      <RiMessage2Line />
                    </div>
                    <div className="text-slate-900 hover:text-green-800 flex gap-3 text-[10px] font-medium font-['Inter']">
                      <div className="">
                        <b> Irrigation Panel</b>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="Prediction">
                  <div className="self-stretch h-6 rounded-[8px] hover:text-green-800 hover:border-2 hover:border-emerald-800 justify-start items-center gap-2.5 flex">
                    <div className="w-5 h-5 relative" />
                    <div className="text-[10px]">
                      <SiGooglelens />
                    </div>
                    <div className="w-[160px] text-slate-900 hover:text-green-800 flex gap-3 text-[10px] font-medium font-['Inter']">
                      <div className="">
                        <b> Predictions</b>
                      </div>
                      <div className=" ">
                        <RiArrowDropDownLine
                          color="#949494"
                          className=" w-5 h-5 ml-14"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" top-[415px] absolute ml-3 flex-col justify-start items-start gap-0 inline-flex">
          <div className="w-48 pl-8 pb-1.5 justify-start items-center inline-flex">
            <div className="text-gray-400 text-xs font-normal font-['Inter'] leading-[18px]">
              Preferences
            </div>
          </div>
          <div className="flex-col justify-start items-start flex">
            <Link to="settings/profile">
              <div className="w-48  h-6 rounded-[8px] hover:text-green-800 justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800">
                <div className="w-5 h-5 relative" />
                <div className="text-[10px]">
                  <MdOutlineSettings />
                </div>
                <div className="text-slate-900 flex hover:text-green-800 gap-3 text-[10px] font-medium font-['Inter']">
                  <div className="">
                    <b>Settings</b>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="Subscription">
              <div className="w-48  h-6 rounded-[8px] hover:text-green-800 justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800">
                <div className="w-5 h-5 relative" />
                <div className="text-[10px]">
                  <MdOutlineSubscriptions />
                </div>
                <div className="text-slate-900 flex gap-3 text-[10px] hover:text-green-800 font-medium font-['Inter']">
                  <div className="">
                    <b>Subscription</b>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="">
              <div className="w-48 h-6 rounded-[8px] justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800">
                <div className="w-4 h-4 ml-1 justify-center items-center flex">
                  <div className="w-4 h-4 relative"></div>
                </div>
                <div className="text-[10px]">
                  <RiBookReadLine />
                </div>
                <div className="text-slate-900 text-[10px] flex gap-3 font-medium font-['Inter']">
                  <div className="">
                    <b>References</b>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="helping">
              <div className="w-48 h-6 rounded-[8px] justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800">
                <div className="w-5 h-5 relative" />
                <div className="text-[10px]">
                  <MdOutlineHelpCenter />
                </div>
                <div className="text-slate-900 flex gap-3 text-[10px] font-medium font-['Inter']">
                  <div className="">
                    <b>Help Center</b>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
