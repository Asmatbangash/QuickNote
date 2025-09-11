import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("database connected successfully");
  } catch (error) {
    console.log("database connection error", error);
  }
};

export { dbConnection };
