import express from "express";
import cors from "cors";
import http from "http";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/User.route.js";

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/status", (req, res) => {
  res.send("Server is live");
});

app.use("/api" , userRouter);

await connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
