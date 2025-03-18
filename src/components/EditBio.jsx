import React, { useState } from 'react';
import { X } from 'lucide-react';

const EditBio = ({ bio, onClose, onSave }) => {
  const [text, setText] = useState(bio);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Edit Bio</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-40 px-3 py-2 border rounded-lg mb-6 resize-none"
          placeholder="Write something about yourself..."
        />

        <button
          onClick={() => onSave(text)}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default EditBio;