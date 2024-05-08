import React, { useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [farms, setFarms] = useState<{ _id: string; name: string }[]>([]);
  const [calibrations, setCalibrations] = useState<
    { _id: string; name: string }[]
  >([]);
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    variety: "",
    plantingDate: "",
    harvestDate: "",
    area: "",
    pests: "",
    fertilizers: "",
    irrigationNeeds: "",
    calibrations_id: "",
    farms_id: "",
  });

  useEffect(() => {
    fetch("https://bazafarm-backend-v2-rlnd.onrender.com/api/v1/farms")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch farms");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setFarms(data.data);
        } else {
          console.error("Farms data is not in the expected format:", data);
        }
      })
      .catch((error) => console.error("Error fetching farms:", error));

    fetch("https://bazafarm-backend-v2-rlnd.onrender.com/api/v1/calibrations")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch calibrations");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setCalibrations(data.data);
        } else {
          console.error(
            "Calibrations data is not in the expected format:",
            data
          );
        }
      })
      .catch((error) => console.error("Error fetching calibrations:", error));
  }, []);

  const handleCancel = () => {
    onClose();
  };
  const handleAddCrop = async () => {
    try {
      const response = await fetch(
        "https://bazafarm-backend-v2-rlnd.onrender.com/api/v1/crops",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            farms_id: formData.farms_id, // Include selected farm ID
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add crop");
      }

      
      console.log("Crop added successfully!");
    } catch (error) {
      console.error("Error adding crop:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className=" bg-white p-8 rounded shadow-lg z-10 w-full max-w-2xl">
        <h1 className="text-gray-900 text-center font-medium mb-4 mt-4">
          ADD A NEW CROP
        </h1>
        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">CROP NAME</p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter a crop name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">SPECIES</p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter a species"
              value={formData.species}
              onChange={(e) =>
                setFormData({ ...formData, species: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">VARIETY</p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter a specific name of crop"
              value={formData.variety}
              onChange={(e) =>
                setFormData({ ...formData, variety: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              AREA COVERED (HECTARES)
            </p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="number"
              placeholder="Enter area covered"
              value={formData.area}
              onChange={(e) =>
                setFormData({ ...formData, area: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              PLANTING DATE
            </p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="date"
              placeholder="Select date"
              value={formData.plantingDate}
              onChange={(e) =>
                setFormData({ ...formData, plantingDate: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              HARVEST DATE
            </p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="date"
              placeholder="Select harvest date"
              value={formData.harvestDate}
              onChange={(e) =>
                setFormData({ ...formData, harvestDate: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">PESTS</p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter common pests for the crop"
              value={formData.pests}
              onChange={(e) =>
                setFormData({ ...formData, pests: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              FERTILIZERS
            </p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter fertilizers for the crop"
              value={formData.fertilizers}
              onChange={(e) =>
                setFormData({ ...formData, fertilizers: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              IRRIGATION NEEDS
            </p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter irrigation needs for the crop"
              value={formData.irrigationNeeds}
              onChange={(e) =>
                setFormData({ ...formData, irrigationNeeds: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">FARM</p>
            <select
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              defaultValue=""
              value={formData.farms_id}
              onChange={(e) =>
                setFormData({ ...formData, farms_id: e.target.value })
              }
            >
              <option value="" disabled hidden>
                Select a farm
              </option>
              {farms.map((farm) => (
                <option key={farm._id} value={farm._id}>
                  {farm.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              CALIBRATIONS
            </p>
            <select
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              defaultValue=""
              value={formData.calibrations_id}
              onChange={(e) =>
                setFormData({ ...formData, calibrations_id: e.target.value })
              }
            >
              <option value="" disabled hidden>
                Select a calibration
              </option>
              {calibrations.map((calibration) => (
                <option key={calibration._id} value={calibration._id}>
                  {calibration.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="w-[160.39px] h-[41.46px] bg-emerald-800 rounded-[14.62px] text-white text-lg font-normal font-inter capitalize mr-4"
            onClick={handleCancel}
          >
            CANCEL
          </button>
          <button
            className="w-[160.15px] h-[44.50px] bg-emerald-800 rounded-[14.62px] text-white text-lg font-normal font-inter capitalize"
            onClick={handleAddCrop}
          >
            ADD Crop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
