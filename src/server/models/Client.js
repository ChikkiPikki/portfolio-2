import { Schema, model, models } from "mongoose";

const ClientSchema = new Schema({
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  publicKey: String,
  privateKey: String,
  phone: String,
  date: Date, // date client was created
  leads: [{
    type: Schema.Types.ObjectId,
    ref: 'Lead'
  }]
});


const Client = models.Client || model("Client", ClientSchema)
export default Client;