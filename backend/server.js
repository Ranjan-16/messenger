import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "./config/dotenv.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(
  cors({
    origin: [process.env.ORIGIN],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);
app.use(express.json());
app.use(cookieParser());

// Define a route
app.use("/auth", authRoutes);

// Start the server
app.listen(config.port, () => {
  mongoose.connect(config.dbUri).then(() => console.log("mongodb connected"));
  console.log(`Server is running at http://localhost:${config.port}`);
});
