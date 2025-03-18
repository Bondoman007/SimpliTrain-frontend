import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updatePersonalInfo } from "../redux/profileSlice";

const EditPersonalInfo = ({ info, onClose }) => {
  const [formData, setFormData] = useState(info);
  const dispatch = useDispatch();

  async function handleData(formData) {
    const fullAddress = `${formData.street}, ${formData.city}, ${formData.state}, ${formData.pincode}, ${formData.country}`;

    try {
      const res = await axios.patch("http://localhost:5000/api/profile/edit", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
        gender: formData.gender,
        address: fullAddress,
      });

      console.log("Profile Updated:", res.data);

      // ✅ Update Redux Store
      dispatch(
        updatePersonalInfo({
          ...formData,
          address: fullAddress,
        })
      );

      onClose();
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Edit Personal Information</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleData(formData);
          }}
        >
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              "firstName",
              "lastName",
              "age",
              "street",
              "city",
              "state",
              "pincode",
              "country",
            ].map((field) => (
              <div key={field}>
                <label className="block text-sm text-gray-600 mb-1">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "age" ? "number" : "text"}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm text-gray-600 mb-1">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPersonalInfo;
