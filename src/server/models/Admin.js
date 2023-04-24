import { Schema, model, models } from "mongoose";

const AdminSchema = new Schema({
  loginKey: String,
  clients: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: 'Client'
    }
  }],
  leads: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: 'Lead'
    }
  }]
});


const Admin = models.Admin || model("Admin", AdminSchema)
export default Admin;