import express from "express";
import cors from "cors";
import http from "http";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/User.route.js";
import messageRouter from "./routes/Message.route.js";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

export const io = new Server(server , {
  cors : {origin: "*"}
})

export const userSocketMap = {};

io.on("connection" , (socket)=>{
  const userId = socket.handshake.query.userId;

  console.log("UserConnected" , userId);

  if(userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers" , Object.keys(userSocketMap));

  socket.on("disconnect" , ()=>{
    console.log("User disconnected" , userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers" , Object.keys(userSocketMap));
  })
})

app.use(express.json({limit: "4mb"}))
app.use(cors());

app.use("/api/v1/status", (req, res) => {
  res.send("Server is live");
});

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/messages", messageRouter);
await connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
