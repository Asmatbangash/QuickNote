import React, { useContext, useState } from "react";
import { NoteContext } from "../Context/NoteContex";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreateNote() {
  const { createNote } = useContext(NoteContext);
  const navigate = useNavigate();

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
    toast.success("note created successfully!.", {
      position: "top-center",
      autoClose: 1500,
    });
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 px-[15px] sm:px-10 flex justify-center items-center">
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
