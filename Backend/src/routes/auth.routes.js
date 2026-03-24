import express from "express";
import { registerValidationRules } from "../validator/auth.validator";
import { register } from "../constroller/auth.controller ";
const Authroutes = express.Router();
Authroutes.post("/register", registerValidationRules, register);


