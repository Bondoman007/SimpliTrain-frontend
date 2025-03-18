import React, { useState } from "react";
import { X, Calendar } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addWorkExperience } from "../redux/profileSlice"; // Use profileSlice

const AddWorkExperience = ({ onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    startDate: "",
    endDate: "",
    employmentType: "",
    industry: "",
    locationCity: "",
  });

  const employmentTypes = [
    "Full Time",
    "Part Time",
    "Contract",
    "Internship",
    "Freelance",
  ];
  const industries = [
    "Information Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Other",
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/work-experience",
        formData
      );

      console.log("Work Experience Added:", response.data);
      dispatch(addWorkExperience(response.data?.data)); // Update Redux state in profileSlice
      onClose();
    } catch (error) {
      console.error(
        "Error adding work experience:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add Work Experience</h2>
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
              <label className="block text-sm text-gray-600 mb-1">
                Job Title
              </label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="e.g. Software Engineer"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="e.g. Google"
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

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Employment Type
              </label>
              <select
                value={formData.employmentType}
                onChange={(e) =>
                  setFormData({ ...formData, employmentType: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">Select employment type</option>
                {employmentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) =>
                  setFormData({ ...formData, industry: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">Select industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Location/City
              </label>
              <input
                type="text"
                value={formData.locationCity}
                onChange={(e) =>
                  setFormData({ ...formData, locationCity: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="e.g. San Francisco"
              />
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

export default AddWorkExperience;
