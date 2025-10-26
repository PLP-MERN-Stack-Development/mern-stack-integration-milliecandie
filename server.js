// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log("⚠️ Using local memory storage (MongoDB not connected)");

app.use("/api", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("✅ Week4 MERN Blog Backend running — local mode");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});