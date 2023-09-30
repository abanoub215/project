import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userFirstName: String,
  userLastName: String,
  userEmail: String,
  userPassword:String,
  isVerified:Boolean,

});
export const userModel= mongoose.model("User", userSchema);
