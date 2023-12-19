import mongoose, { ConnectOptions } from "mongoose";
import { MongoClient } from "mongodb";

const connect = async (): Promise<void> => {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Connected to database!.");
  } catch (error) {
    throw new Error("Connected to database faield!");
  }
};

export default connect;
