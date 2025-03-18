import React, { useState } from "react";
import { X, Calendar } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addEducation } from "../redux/profileSlice";

const AddEducation = ({ onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    degree: "",
    college: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/education",
        formData
      );

      console.log("Education Added:", response.data);
      dispatch(addEducation(response.data)); // Update Redux state
      onClose();
    } catch (error) {
      console.error(
        "Error adding education:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add Education</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Degree</label>
              <select
                value={formData.degree}
                onChange={(e) =>
                  setFormData({ ...formData, degree: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">Select degree</option>
                <option value="bachelor">Bachelor's</option>
                <option value="master">Master's</option>
                <option value="phd">Ph.D.</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                College
              </label>
              <input
                type="text"
                value={formData.college}
                onChange={(e) =>
                  setFormData({ ...formData, college: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="e.g. MIT"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Field of Study
              </label>
              <input
                type="text"
                value={formData.fieldOfStudy}
                onChange={(e) =>
                  setFormData({ ...formData, fieldOfStudy: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="e.g. Computer Science"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEducation;
