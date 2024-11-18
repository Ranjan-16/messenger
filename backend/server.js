import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "./config/dotenv.js";

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
app.use("/", (req, res) => {
  console.log("response");
});

// Start the server
app.listen(process.env.PORT, () => {
  mongoose.connect(config.dbUri).then(() => console.log("mongodb connected"));
  console.log(`Server is running at http://localhost:${config.port}`);
});
