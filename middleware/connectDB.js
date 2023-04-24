import mongoose from "mongoose";
import Admin from "@/server/models/Admin"
import Lead from "@/server/models/Lead"
import Client from "@/server/models/Client"
const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current DB connection
    return handler(req, res);
  }
  // create a new db connection
  await mongoose.connect("mongodb://localhost:27017")
  return handler(req, res)
}

export default connectDB