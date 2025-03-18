// import React from 'react';
// import { Pencil } from 'lucide-react';

// const PersonalInformation = ({ info, onEdit }) => {
//   return (
//     <div className="mb-8">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-medium">Personal Information</h3>
//         <button onClick={onEdit} className="text-gray-600 hover:text-gray-900">
//           <Pencil size={16} />
//         </button>
//       </div>

//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <p className="text-sm text-gray-500 mb-1">FIRST NAME</p>
//           <p className="text-gray-900">{info.firstName}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500 mb-1">LAST NAME</p>
//           <p className="text-gray-900">{info.lastName}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500 mb-1">EMAIL</p>
//           <p className="text-gray-900">{info.email}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500 mb-1">GENDER</p>
//           <p className="text-gray-900">{info.gender}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500 mb-1">AGE</p>
//           <p className="text-gray-900">{info.age}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500 mb-1">ADDRESS</p>
//           <p className="text-gray-900">{info.address}</p>
//           <p className="text-gray-900">{info.street}</p>
//           <p className="text-gray-900">{`${info.city}, ${info.state} ${info.pincode}`}</p>
//           <p className="text-gray-900">{info.country}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalInformation;

import React, { useState } from "react";
import { Pencil } from "lucide-react";
import EducationWorkExp from "../components/EducationWorkExp";

const PersonalInformation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Rakesh",
    lastName: "Raushan",
    email: "rakesh.raushan@gmail.com",
    gender: "Male",
    age: "35",
    address: "No. 10, Office no 3",
    street: "Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560095",
    country: "India",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSaveProfile = (updatedData) => {
    setPersonalInfo(updatedData);
    console.log("Profile updated:", updatedData);
    // Here you would typically send the updated data to your backend
  };

  return (
    <div className=" max-h-screen p-4">
      <div className="bg-white rounded-lg shadow-sm p-6 max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
        <div className="flex justify-end mb-2">
          <button className="text-gray-500 text-sm flex items-center">
            Edit <Pencil className="ml-1" size={14} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 border-b pb-3">
            <div className="text-gray-500 text-sm uppercase">First Name</div>
            <div className="col-span-2 font-medium">Rohan</div>
          </div>

          <div className="grid grid-cols-3 gap-2 border-b pb-3">
            <div className="text-gray-500 text-sm uppercase">Last Name</div>
            <div className="col-span-2 font-medium">Raushan</div>
          </div>

          <div className="grid grid-cols-3 gap-2 border-b pb-3">
            <div className="text-gray-500 text-sm uppercase">Age</div>
            <div className="col-span-2 font-medium">35</div>
          </div>

          <div className="grid grid-cols-3 gap-2 border-b pb-3">
            <div className="text-gray-500 text-sm uppercase">Gender</div>
            <div className="col-span-2 font-medium">Male</div>
          </div>

          <div className="grid grid-cols-3 gap-2 border-b pb-3">
            <div className="text-gray-500 text-sm uppercase">Address</div>
            <div className="col-span-2 font-medium">
              2nd Floor, 99, 5th Cross Rd, 4th Block, Koramangala, Bengaluru,
              Karnataka 560095
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-8 mb-4">Contact Information</h2>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 border-b pb-3">
            <div className="text-gray-500 text-sm uppercase">Email</div>
            <div className="col-span-2 font-medium">Rohanraushan@Gmail.Com</div>
          </div>

          <div className="grid grid-cols-3 gap-2 border-b pb-3">
            <div className="text-gray-500 text-sm uppercase">Phone Number</div>
            <div className="col-span-2 font-medium">+91 9922004656</div>
          </div>
        </div>

        <div className="mt-8 mb-2 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Bio</h2>
          <button
            className="text-gray-500 text-sm flex items-center"
            onClick={handleOpenModal}
          >
            Edit <Pencil className="ml-1" size={14} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          I'm a recent graduate with a passion for data. I'm eager to learn data
          analysis techniques and build a strong foundation in this exciting
          field. I'm excited to explore the courses offered on SimpliLearn and
          gain the necessary skills to kickstart my data analyst career.
        </p>

        <div className="mt-8 mb-2 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Preferred Language</h2>
          <button className="text-gray-500 text-sm flex items-center">
            Edit <Pencil className="ml-1" size={14} />
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            English
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            Hindi
          </span>
        </div>

        <div className="mt-8 mb-2 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Interested Topic</h2>
          <button className="text-gray-500 text-sm flex items-center">
            Edit <Pencil className="ml-1" size={14} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            Web Development
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            Mobile Development
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            Programming Languages
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            Leadership
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            Career Development
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            Digital Marketing
          </span>
        </div>

        <div className="mt-8 mb-2 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Social Media</h2>
          <button
            className="text-gray-500 text-sm flex items-center"
            onClick={handleOpenModal}
          >
            Edit <Pencil className="ml-1" size={14} />
          </button>
        </div>

        <div className="flex gap-3 mb-4">
          <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
            </svg>
          </div>
          <div className="w-8 h-8 flex items-center justify-center bg-black rounded text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </div>
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              ></path>
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              ></path>
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              ></path>
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              ></path>
            </svg>
          </div>
          <div className="w-8 h-8 flex items-center justify-center bg-pink-500 rounded text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"></path>
            </svg>
          </div>
        </div>
      </div>
      <EducationWorkExp />
    </div>
  );
};

export default PersonalInformation;
