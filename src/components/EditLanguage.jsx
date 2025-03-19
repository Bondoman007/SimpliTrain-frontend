import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { preferredLanguageEditShowOption } from "../store/configAppSlice";
import { X, Pencil } from "lucide-react";
import axios from "axios";
const EditLanguage = () => {
  const dispatch = useDispatch();
  const preferredLanguageShow = useSelector(
    (store) => store.configApp.preferredLanguageEditShow
  );
  // Language
  const [languages, setLanguages] = useState([
    { name: "Search language", checked: false },
    { name: "English", checked: false },
    { name: "Spanish", checked: false },
    { name: "Arabic", checked: false },
    { name: "Tamil", checked: false },
    { name: "Hindi", checked: false },
  ]);
  async function handleData(formData) {
    try {
      const res = await axios.patch(
        "http://localhost:5000/api/profile/edit",
        {
          preferredLanguage: text,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Profile Updated:", res.data);

      // ✅ Update Redux Store
      // dispatch(
      //   updatePersonalInfo({
      //     ...formData,
      //     address: fullAddress,
      //   })
      // );

      onClose();
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
    }
  }

  const checkedLanguages = languages.filter((language) => language.checked);

  const handleCheckboxChange = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].checked = !newLanguages[index].checked;
    setLanguages(newLanguages);
  };

  const handleSave = () => {
    dispatch(preferredLanguageEditShowOption(false));
    // Save logic here
  };

  return (
    <div className="rounded-lg shadow-sm p-4 sm:p-6 w-full min-w-3xl mx-auto relative">
      <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

      {/* Edit Button */}
      <div className="flex justify-end mb-2">
        <button
          className="text-gray-500 text-sm flex items-center"
          onClick={() => dispatch(preferredLanguageEditShowOption(true))} // Open edit modal
        >
          Edit <Pencil className="ml-1" size={14} />
        </button>
      </div>

      <div className="space-y-2">
        {checkedLanguages.map((language) => (
          <div key={language.name} className="flex items-center">
            <span>{language.name}</span>
          </div>
        ))}
      </div>

      {preferredLanguageShow && (
        <div className=" z-10 fixed inset-0 bg-opacity-10 backdrop-blur-xs flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Edit Preferred Language</h2>
              <button
                onClick={() => dispatch(preferredLanguageEditShowOption(false))}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={language.name} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={language.checked}
                    onChange={() => handleCheckboxChange(index)}
                    className="mr-2"
                  />
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleSave}
              className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              SAVE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditLanguage;
