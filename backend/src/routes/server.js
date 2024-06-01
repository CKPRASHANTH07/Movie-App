import mongoose from "mongoose";
import express from 'express'
import { MONGODB_URI } from "../utils/config_env.js";
import { auth } from "./auth/auth.js";

mongoose.connect(MONGODB_URI)

const app=express()
app.use(express.json())
app.use(auth)

export {app}