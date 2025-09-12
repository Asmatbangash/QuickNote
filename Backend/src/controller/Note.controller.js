import { NoteDb } from "../models/Note.model.js";

// create note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title && !content) {
      return res
        .status(400)
        .json({ message: "Tittle and content are required." });
    }

    const saveNote = new NoteDb({ title, content });
    await saveNote.save();
    res.status(201).json(saveNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get note
const getNote = async (req, res) => {
  try {
    const allNotes = await NoteDb.find().sort({ createdAt: -1 });
    res.status(200).json(allNotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update note
const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatingNote = await NoteDb.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updateNote) {
      return res.status(404).json({ message: "Note did not update." });
    }
    res.status(200).json(updatingNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await NoteDb.findByIdAndDelete(id);
    if (!deleteNote) {
      res.status(400).json({ message: "note not found!" });
    }
    res.status(200).json({ message: "note succesfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createNote, getNote, updateNote, deleteNote };
