import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  fullname:{
    type:String,
    required:true
  },
  password: {
    type: String,
    required: () => {
      return !this.googleid;
    },
  },
  googleid: {
    type: String,
    unique: true,
  },
});

export const Usermodel = mongoose.model("user", userschema);
