import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "OK", message: "API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

// 🚨 DO NOT BLOCK SERVER START
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect DB AFTER server is listening
connectDB().catch(err => {
  console.error("Mongo connection error:", err.message);
});