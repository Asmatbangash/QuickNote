import express from "express";
import dotenv from "dotenv";
import { router } from "./src/routes/Note.routes.js";
import { dbConnection } from "./src/DB/db.connect.js";
import cors from "cors";
const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

dbConnection();

// middle ware
app.use(
  cors({
    origin: ["https://quick-note-orpin.vercel.app"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/v1/noteapp/", router);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
