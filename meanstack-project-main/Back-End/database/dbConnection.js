import mongoose from "mongoose";

export function dbConnection() {
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb+srv://Mongo:1234@cluster0.ksfnxmi.mongodb.net/e-commerce")
    .then(() => {
      console.log("database connection ESTABLISHED SUCCESSFULLY!");
    })
    .catch((error) => {
      console.log("SORRY.. database connection FAILED!!!", error);
    });
  
}