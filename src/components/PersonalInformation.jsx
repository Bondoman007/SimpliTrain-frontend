import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import EducationWorkExp from "./EducationWorkExp";
import EditPersonalInfo from "./EditPersonalInfo"; // Import the EditPersonalInfo component
import axios from "axios";
import EditLanguage from "./EditLanguage";
import EditBio from "./EditBio";
import EditInterestedTopic from "./EditInterestedTopic";
import EditSocialMedia from "./EditSocialMedia";

const PersonalInformation = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // Manage modal visibility
  const dispatch = useDispatch();
  const showEditBio = useSelector((store) => store.configApp.bioEditShow);

  useEffect(() => {
    fetchProfileData();
  }, [isEditing]);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/profile", {
        withCredentials: true,
      });
      setProfileData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center text-lg">Loading profile...</p>;

  return (
    <div className="rounded-lg shadow-sm p-4 sm:p-6 w-full min-w-3xl mx-auto relative">
      <div className="rounded-lg shadow-sm p-4 sm:p-6 w-full min-w-3xl mx-auto relative">
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

        {/* Edit Button */}
        <div className="flex justify-end mb-2">
          <button
            className="text-gray-500 text-sm flex items-center"
            onClick={() => setIsEditing(true)} // Open edit modal
          >
            Edit <Pencil className="ml-1" size={14} />
          </button>
        </div>

        {/* Personal Info */}
        <div className="space-y-4">
          {profileData &&
            [
              { label: "First Name", value: profileData.firstName },
              { label: "Last Name", value: profileData.lastName },
              { label: "Age", value: profileData.age },
              { label: "Gender", value: profileData.gender },
              { label: "Address", value: profileData.address },
            ].map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b pb-3"
              >
                <div className="text-gray-500 text-sm uppercase">
                  {item.label}
                </div>
                <div className="col-span-2 font-medium">{item.value}</div>
              </div>
            ))}
        </div>
      </div>

      {/*Bio Section */}
      <EditBio />

      {/* Language */}
      <EditLanguage />

      {/* Interested Topic */}
      <EditInterestedTopic topics={profileData.interestedTopics} />

      {/* Social Media*/}
      <EditSocialMedia />

      {/* Edit Personal Info Modal */}
      {isEditing && (
        <EditPersonalInfo
          info={profileData}
          onClose={() => setIsEditing(false)}
        />
      )}

      {/* Education & Work Experience */}
      <EducationWorkExp
        education={profileData?.education}
        workExperience={profileData?.workExperience}
      />
    </div>
  );
};

export default PersonalInformation;
