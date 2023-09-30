import mongoose from "mongoose";

const mobilesSchema = new mongoose.Schema({
  id: Number,
  title: String,
  details: String,
  phoneImagePath: String,
  price: String,
  camera: String,
  display: String,
  processor: String,
  battery: String
});

export const mobilesModel = mongoose.model("mobiles", mobilesSchema);
