import React, { useContext, useState } from "react";
import { NoteContext } from "../Context/NoteContex";

function NoteCard({ data }) {
  const { deleteNote, updateNote } = useContext(NoteContext);

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(data.title);
  const [newContent, setNewContent] = useState(data.content);

  const handleUpdate = (id) => {
    updateNote(id, newTitle, newContent);
    setIsEditing(false);
  };

  return (
    <div className="card bg-[#000022] shadow-lg rounded-xl hover:shadow-lg transition duration-300 w-full text-white border border-amber-50">
      <div className="card-body p-5">
        {/* Title */}
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
        ) : (
          <h2
            className="card-title line-clamp-10 break-words text-lg font-semibold"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        )}

        {/* Content */}
        {isEditing ? (
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full mt-2 p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
        ) : (
          <p
            className="mt-2 whitespace-normal break-words"
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          />
        )}

        {/* Date */}
        <p className="text-sm mt-3">
          {new Date(data.createdAt).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>

        {/* Actions */}
        <div className="card-actions justify-end mt-4 space-x-3">
          {isEditing ? (
            <>
              <button
                className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg text-sm"
                onClick={() => handleUpdate(data._id)}
              >
                Update
              </button>
              <button
                className="bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded-lg text-sm"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-sm"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-sm"
                onClick={() => deleteNote?.(data._id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
