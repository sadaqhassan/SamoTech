import { Router } from "express";
import { getUserProfile, loginUser, registerUser } from "../Controllers/user.controller.js";
import { isAuth } from "../Middlewares/user.middleware.js";


export const userRoute = Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.get("/get-user", isAuth, getUserProfile);