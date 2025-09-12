import React from "react";

function NoteCard({ data }) {
  return (
    <div className="card bg-[#000022] shadow-lg rounded-xl hover:shadow-lg transition duration-300 w-full text-white border border-amber-50">
      <div className="card-body p-5">
        {/* Title */}
        <h2 className="card-title text-lg font-semibold">{data.title}</h2>

        {/* Description */}
        <p className="mt-2">{data.content}</p>

        {/* Date */}
        <p className="text-sm mt-3">
          {new Date(data.createdAt).toLocaleDateString()}
        </p>

        {/* Actions */}
        <div className="card-actions justify-end mt-4 space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition cursor-pointer">
            Edit
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
