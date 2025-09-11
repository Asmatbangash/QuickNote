import express from "express";
import dotenv from "dotenv";
import { router } from "./src/routes/Note.routes.js";
import { dbConnection } from "./src/DB/db.connect.js";
const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

dbConnection();

// middle ware
app.use(express.json());
app.use("/api/v1/noteapp/", router);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
