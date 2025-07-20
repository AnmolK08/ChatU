import express from "express";
import {
  checkAuth,
  login,
  signup,
  updateProfile,
} from "../controllers/User.controller.js";
import { authUser } from "../middlewares/Auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/is-auth", authUser, checkAuth);
userRouter.put("/update-profile", authUser, updateProfile);

export default userRouter;
