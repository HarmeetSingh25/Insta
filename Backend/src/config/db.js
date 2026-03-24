import mongoose from "mongoose";
import { config } from "./config.js";

export async function ConnectToDB() {
  await mongoose.connect(config.MONGO_URI);
  console.log("server is connected");
}
