import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

// Connect Database
const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log("⚠️ Starting server without MongoDB...");
  }

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();