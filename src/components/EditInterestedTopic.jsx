import React, { useState } from "react";
import { X, Pencil } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { intrestedTopicEditShow } from "../store/configAppSlice";

import axios from "axios";
const EditInterestedTopic = ({ topics }) => {
  const dispatch = useDispatch();
  const editInterestedTopicShow = useSelector(
    (store) => store.configApp.intrestedTopicEditShow
  );
  const [selectedTopics, setSelectedTopics] = useState(topics);
  const [suggestedTopics, setSuggestedTopics] = useState([
    "IT",
    "Web Development",
    "Mobile Development",
    "Programming Languages",
    "Leadership",
    "Career Development",
    "Digital Marketing",
    "Design",
    "Marketing",
    "Sales",
    "Finance",
    "Dance",
    "Business",
  ]);

  const handleRemoveTopic = (topic) => {
    setSuggestedTopics([...suggestedTopics, topic]);
    setSelectedTopics(selectedTopics.filter((t) => t !== topic));
  };

  const handleAddTopic = (topic) => {
    setSelectedTopics([...selectedTopics, topic]);
    setSuggestedTopics(suggestedTopics.filter((t) => t !== topic));
  };

  const handleSave = async () => {
    // Save logic here
    try {
      const res = await axios.patch(
        "http://localhost:5000/api/profile/edit",
        {
          interestedTopics: selectedTopics,
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

      dispatch(intrestedTopicEditShow(false));
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="rounded-lg shadow-sm p-4 sm:p-6 w-full min-w-3xl mx-auto relative">
      <h2 className="text-lg font-semibold mb-4">Interested Topic</h2>

      {/* Edit Button */}
      <div className="flex justify-end mb-2">
        <button
          className="text-gray-500 text-sm flex items-center"
          onClick={() => dispatch(intrestedTopicEditShow(true))} // Open edit modal
        >
          Edit <Pencil className="ml-1" size={14} />
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {selectedTopics.map((topic) => (
            <div
              key={topic}
              className="flex items-center bg-gray-200 rounded-full px-3 py-1"
            >
              <span>{topic}</span>
              {/* <button
                onClick={() => handleRemoveTopic(topic)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <X size={14} />
              </button> */}
            </div>
          ))}
        </div>
      </div>

      {editInterestedTopicShow && (
        <div className="z-10 fixed inset-0 bg-opacity-10 backdrop-blur-xs flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Edit Interested Topic</h2>
              <button
                onClick={() => dispatch(intrestedTopicEditShow(false))}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tag (maximum 20)</h3>
              <div className="flex flex-wrap gap-2">
                {selectedTopics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center bg-gray-200 rounded-full px-3 py-1"
                  >
                    <span>{topic}</span>
                    <button
                      onClick={() => handleRemoveTopic(topic)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Suggested</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => handleAddTopic(topic)}
                    className="flex items-center bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300"
                  >
                    <span>+ {topic}</span>
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleSave()}
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

export default EditInterestedTopic;
