import mongoose from "mongoose";

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
