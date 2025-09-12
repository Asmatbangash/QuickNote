import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const NoteContext = createContext({
  note: [],
  createNote: () => {},
  getNote: () => {},
  updateNote: () => {},
  deleteNote: () => {},
});

function NoteProvider({ children }) {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState();

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
    }
  };

  // update-note funcation
  const updateNote = () => {};

  // delete-note funcation
  const deleteNote = () => {};

  useEffect(() => {
    getNote();
  }, []);

  return (
    <NoteContext.Provider
      value={{ note, createNote, getNote, updateNote, deleteNote }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export default NoteProvider;
