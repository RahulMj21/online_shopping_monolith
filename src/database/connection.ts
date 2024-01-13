import config from "@/config";
import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(config.DB_URL as string);
    console.log("DB Connected...");
  } catch (error) {
    console.log(`Failed to Connect DB : ${error}`);
  }
};

export default ConnectDB;
