import React, { useState } from "react";
import { X, Pencil } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { bioEditShowOption } from "../store/configAppSlice"; // Import Redux action
import axios from "axios";

const EditBio = () => {
  const dispatch = useDispatch();
  const editBioShow = useSelector((store) => store.configApp.bioEditShow);
  const [bio, setBio] = useState(
    "I’m a recent graduate with a passion for data. I’m eager to learn data analysis techniques and build a strong foundation in this exciting field. I’m excited to explore the courses offered on Simplifrain and gain the necessary skills to kickstart my data analyst career."
  );

  async function handleSave(bio) {
    try {
      const res = await axios.patch(
        "http://localhost:5000/api/profile/edit",
        {
          bio: bio,
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

      dispatch(bioEditShowOption(false));
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <div className="rounded-lg shadow-sm p-4 sm:p-6 w-full min-w-3xl mx-auto relative">
      <h2 className="text-lg font-semibold mb-4">Bio</h2>

      {/* Edit Button */}
      <div className="flex justify-end mb-2">
        <button
          className="text-gray-500 text-sm flex items-center"
          onClick={() => dispatch(bioEditShowOption(true))} // Open edit modal
        >
          Edit <Pencil className="ml-1" size={14} />
        </button>
      </div>

      <div className="space-y-2">
        <p>{bio}</p>
      </div>

      {editBioShow && (
        <div className="z-10 fixed inset-0 bg-opacity-10 backdrop-blur-xs flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Edit Bio</h2>
              <button
                onClick={() => dispatch(bioEditShowOption(false))}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full h-40 px-3 py-2 border rounded-lg mb-6 resize-none"
              placeholder="Write something about yourself..."
            />
            <button
              onClick={() => handleSave(bio)}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              SAVE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBio;
