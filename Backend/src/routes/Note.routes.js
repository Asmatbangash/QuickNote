import express from "express";
import {
  createNote,
  deleteNote,
  getNote,
  updateNote,
} from "../controller/Note.controller.js";

const router = express.Router();

router.post("/create-note", createNote);
router.get("/get-notes", getNote);
router.put("/update-note/:id", updateNote);
router.delete("/delete-note/:id", deleteNote);

export { router };
