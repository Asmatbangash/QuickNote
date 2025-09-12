import React, { useContext, useState } from "react";
import { NoteContext } from "../Context/NoteContex";

function CreateNote() {
  const { createNote } = useContext(NoteContext);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNote(formData);
    setFormData({ title: "", content: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-scree p-4 my-10 ">
      <div className="w-full max-w-md bg-[#000022] text-white rounded-2xl shadow-lg p-6 border border-amber-50">
        <h2 className="text-2xl font-bold text-center mb-6">Create Note</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block  font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full px-4 py-2 border  rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block  font-medium mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your content here..."
              rows="5"
              className="w-full px-4 py-2 border  rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Create Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
