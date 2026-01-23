import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is missing");
    return;
  }

  if (!process.env.MONGO_URI.startsWith("mongodb://") &&
      !process.env.MONGO_URI.startsWith("mongodb+srv://")) {
    console.error("Invalid MONGO_URI:", process.env.MONGO_URI);
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDB;