import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// routes
import menuRoutes from "./routes/menuRoutes.js";
import authRoutes from "./routes/authRoutes.js";

app.use("/api/menu", menuRoutes);
app.use("/api/auth", authRoutes);

// 🔴 THIS PART IS CRITICAL
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});