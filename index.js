import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./server/DB/databaseConfigs.js";
import authRoutes from "./server/routes/auth.routes.js";
import eventRoutes from "./server/routes/event.routes.js";


const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); 
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

app.get("/", (req, res) => {
  res.send("Hello to online API");
});
app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on port ${PORT}`);
});
