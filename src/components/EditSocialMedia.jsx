import React, { useState } from "react";
import {
  X,
  Pencil,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { socialMediaEditShowOption } from "../store/configAppSlice"; // Import Redux action

const EditSocialMedia = () => {
  const dispatch = useDispatch();
  const editSocialMediaShow = useSelector(
    (store) => store.configApp.socialMediaEditShow
  );
  const [socialMediaLinks, setSocialMediaLinks] = useState({
    linkedin: "https://www.linkedin.com/in/raushan",
    instagram: "instagram.com/raushan",
    facebook: "facebook.com/raushan07",
    x: "https://X/raushan07",
    youtube: "youtube.com/@raushan",
  });

  // Map platform names to their respective icons
  const platformIcons = {
    linkedin: <Linkedin size={30} className="text-blue-600" />,
    instagram: <Instagram size={30} className="text-pink-600" />,
    facebook: <Facebook size={30} className="text-blue-600" />,
    x: <Twitter size={30} className="text-black" />, // X (formerly Twitter)
    youtube: <Youtube size={30} className="text-red-600" />,
  };

  const handleSave = () => {
    dispatch(socialMediaEditShowOption(false));
    // Save logic here
  };

  const handleInputChange = (platform, value) => {
    setSocialMediaLinks({ ...socialMediaLinks, [platform]: value });
  };

  return (
    <div className="rounded-lg shadow-sm p-4 sm:p-6 w-full min-w-3xl mx-auto relative">
      <h2 className="text-lg font-semibold mb-4">Social Media Links</h2>

      {/* Edit Button */}
      <div className="flex justify-end mb-2">
        <button
          className="text-gray-500 text-sm flex items-center"
          onClick={() => dispatch(socialMediaEditShowOption(true))} // Open edit modal
        >
          Edit <Pencil className="ml-1" size={14} />
        </button>
      </div>

      {/* <h3 className="text-sm font-semibold">
                {platform.toUpperCase()}
              </h3> */}
      <div className="flex space-x-4">
        {Object.entries(socialMediaLinks).map(([platform]) => (
          <div key={platform} className="flex items-center">
            {platformIcons[platform]} {/* Render platform icon */}
          </div>
        ))}
      </div>

      {editSocialMediaShow && (
        <div className="fixed inset-0 bg-opacity-10 backdrop-blur-xs flex items-center justify-center z-10">
          <div className="bg-white rounded-lg w-full max-w-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Edit Social Media Links</h2>
              <button
                onClick={() => dispatch(socialMediaEditShowOption(false))}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              {Object.entries(socialMediaLinks).map(([platform, link]) => (
                <div key={platform} className="space-y-1">
                  <h3 className="text-sm font-semibold">
                    {platform.toUpperCase()}
                  </h3>
                  <input
                    type="text"
                    value={link}
                    onChange={(e) =>
                      handleInputChange(platform, e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-lg"
                  />
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

export default EditSocialMedia;
