import express from "express";
import { authUser } from "../middlewares/Auth.middleware";
import {
  getMessages,
  getUsersForSidebar,
  markMessageAsSeen,
  sendMessage,
} from "../controllers/Message.controller";

const messageRouter = express.Router();

messageRouter.get("/users", authUser, getUsersForSidebar);
messageRouter.get("/:id", authUser, getMessages);
messageRouter.put("mark/:id", authUser, markMessageAsSeen);
messageRouter.post("/send/:id", authUser, sendMessage);

export default messageRouter;
