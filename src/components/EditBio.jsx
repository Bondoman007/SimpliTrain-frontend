import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateBio } from "../redux/profileSlice"; // Import Redux action

const EditBio = ({ bio, onClose }) => {
  const [text, setText] = useState(bio);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSave = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.patch("http://localhost:5000/api/profile/edit", {
        bio: text,
      });

      // Update Redux store with new bio
      dispatch(updateBio(text));

      onClose(); // Close modal after successful save
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update bio");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Edit Bio</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-40 px-3 py-2 border rounded-lg mb-6 resize-none"
          placeholder="Write something about yourself..."
          disabled={loading}
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleSave}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          disabled={loading}
        >
          {loading ? "Saving..." : "SAVE"}
        </button>
      </div>
    </div>
  );
};

export default EditBio;
