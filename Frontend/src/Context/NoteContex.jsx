import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const NoteContext = createContext({
  note: [],
  createNote: () => {},
  getNote: () => {},
  updateNote: () => {},
  deleteNote: () => {},
});

function NoteProvider({ children }) {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  // create-note funcation
  const createNote = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/noteapp/create-note",
        formData
      );
    } catch (error) {
      console.log(error);
    }
  };

  // get-note funcation
  const getNote = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/v1/noteapp/get-notes"
      );
      setNote(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // update-note funcation
  const updateNote = async (id, title, content) => {
    try {
      const updateTheNote = await axios.put(
        `http://localhost:4000/api/v1/noteapp/update-note/${id}`,
        { title, content }
      );
      toast.success("Note updated successfully!.", {
        position: "top-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  // delete-note funcation
  const deleteNote = async (id) => {
    try {
      const deleteTheNote = await axios.delete(
        `http://localhost:4000/api/v1/noteapp/delete-note/${id}`
      );
      toast.success("Note deleted successfully!.", {
        position: "top-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNote();
  }, []);

  return (
    <NoteContext.Provider
      value={{ note, loading, createNote, getNote, updateNote, deleteNote }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export default NoteProvider;
