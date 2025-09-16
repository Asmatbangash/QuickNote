import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/Note.routes.js";
import { dbConnection } from "./DB/db.connect.js";
import cors from "cors";
const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

dbConnection();

// middle ware
app.use(cors();
app.use(express.json());
app.use("/api/v1/noteapp/", router);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
