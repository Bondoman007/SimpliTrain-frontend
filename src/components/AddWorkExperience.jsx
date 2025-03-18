import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';

const AddWorkExperience = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    employmentType: '',
    industry: '',
    locationCity: ''
  });

  const employmentTypes = ['Full Time', 'Part Time', 'Contract', 'Internship', 'Freelance'];
  const industries = ['Information Technology', 'Finance', 'Healthcare', 'Education', 'Manufacturing', 'Other'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add Work Experience</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          onAdd(formData);
        }}>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Job Title</label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="e.g. Software Engineer"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Company Name</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="e.g. Google"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <Calendar className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">End Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <Calendar className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Employment Type</label>
              <select
                value={formData.employmentType}
                onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">Select employment type</option>
                {employmentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Industry</label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">Select industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Location/City</label>
              <input
                type="text"
                value={formData.locationCity}
                onChange={(e) => setFormData({ ...formData, locationCity: e.target.value })}
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