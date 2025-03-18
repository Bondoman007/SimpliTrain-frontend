import React, { useState } from "react";

const ProfileSidebar = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-md  ">
      <div className="flex flex-col items-center pt-6 pb-8 px-6">
        {/* Profile Image Section */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>

          {/* Edit Icon */}
          <div
            className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md cursor-pointer"
            onClick={() => document.getElementById("imageInput").click()}
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          </div>

          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold mb-6">Rakesh Raushan</h1>

        {/* Menu Items */}
        <div className="w-full space-y-4">
          <div className="flex items-center bg-gray-50 rounded-lg p-4">
            <div className="w-6 h-6 bg-gray-200 rounded mr-4"></div>
            <span className="text-lg">Profile</span>
          </div>

          <div className="flex items-center bg-gray-50 rounded-lg p-4">
            <div className="w-6 h-6 bg-gray-200 rounded mr-4"></div>
            <span className="text-lg">Education</span>
          </div>

          <div className="flex items-center bg-gray-50 rounded-lg p-4">
            <div className="w-6 h-6 bg-gray-200 rounded mr-4"></div>
            <span className="text-lg">Work Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
