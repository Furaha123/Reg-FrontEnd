import React, { useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;
  id: string;
}

const EditModal: React.FC<ModalProps> = ({ onClose, id }) => {
  const [cropData, setCropData] = useState<any>(null);

  useEffect(() => {
    const fetchCropData = async () => {
      try {
        const response = await fetch(
          `https://bazafarm-backend-v2-rlnd.onrender.com/api/v1/crops/${id}`
        );
        const jsonData = await response.json();
        // setCropData(jsonData.cropData);
        console.log("the individual id is ", id); // Corrected line
      } catch (error) {
        console.error("Error fetching crop data:", error);
      }
    };

    fetchCropData(); // Call the function to fetch data
  }, [id]);

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded shadow-lg z-10 w-full max-w-2xl">
        {cropData && (
          <div className="p-4 rounded-lg bg-gray-100 mb-4">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
              CROP DETAILS
            </h1>
            <div className="flex items-center mb-4">
              <h5 className="text-sm font-bold text-gray-800 mr-2">
                CROP NAME:
              </h5>
              <p className="text-sm text-gray-600">{cropData.name}</p>
            </div>
            <div className="flex items-center mb-4">
              <h5 className="text-sm font-bold text-gray-800 mr-2">
                CROP SPECIES:
              </h5>
              <p className="text-sm text-gray-600">{cropData.species}</p>
            </div>
            <div className="flex items-center mb-4">
              <h5 className="text-sm font-bold text-gray-800 mr-2">
                CROP VARIETY:
              </h5>
              <p className="text-sm text-gray-600">{cropData.variety}</p>
            </div>
            <div className="flex items-center mb-4">
              <h5 className="text-sm font-bold text-gray-800 mr-2">
                PLANTING DATE:
              </h5>
              <p className="text-sm text-gray-600">{cropData.plantingDate}</p>
            </div>
            <div className="flex items-center mb-4">
              <h5 className="text-sm font-bold text-gray-800 mr-2">
                HARVEST DATE:
              </h5>
              <p className="text-sm text-gray-600">{cropData.harvestDate}</p>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <button
            className="w-[160.39px] h-[41.46px] bg-emerald-800 rounded-[14.62px] text-white text-lg font-normal font-inter capitalize"
            onClick={handleCancel}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
