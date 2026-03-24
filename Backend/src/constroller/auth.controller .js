import jwt from "jsonwebtoken";
import crypto from "crypto";
import { model } from "mongoose";
import { Usermodel } from "../models/user.model";
import config from "../config.js";

export async function register(req, res) {
  const { email, username, password ,fullname } = req.body;
  const existinguser = await model.findOne({
    $or: [email, username],
  });
  if (existinguser) {
    res.status(400).json({
      message: "Username or email already exists",
    });
  }
  const hashpassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  const user = await Usermodel.create({
    username,
    email,
    fullname,
    password: hashpassword,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    config.JWT_SCRETE,
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "",
  });
}
