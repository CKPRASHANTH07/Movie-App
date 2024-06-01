import mongoose from "mongoose";
import express from 'express'
import { MONGODB_URI } from "../utils/config_env.js";
import { auth_signup } from "./auth/sign_up.js";
import { auth_login } from "./auth/login.js";

mongoose.connect(MONGODB_URI)

const app=express()
app.use(express.json())
app.use(auth_login,auth_signup)

export {app}