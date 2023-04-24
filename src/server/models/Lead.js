import { Schema, model, models } from "mongoose";


// All clients will be making requests for leads to the webslush.in endpoints

const LeadSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  requirements: String,
  date: Date,
  seen: Boolean
});


// We don't want to create a new model every single time
// we hit an API route in Next.js
const Lead = models.Lead || model("Lead", LeadSchema)
export default Lead;