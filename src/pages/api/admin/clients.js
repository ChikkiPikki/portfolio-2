import Admin from "@/server/models/Admin"
import Client from "@/server/models/Client"
import Lead from "@/server/models/Lead"
import connectDB from "middleware/connectDB"

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const admin = await Admin.findOne()
      const clientIds = admin.clients
      const clients = []
      // figure out a way to make multiple sync requests at once to get
      // all clients
      for await (const client of clientIds) {
        const foundClient = await Client.findById(client)
        clients.push(foundClient)
      }
      return res.status(200).json({ clients })
    }
    catch (err) {
      return console.log(err)
    }
  }
  if (req.method === 'POST') {
    try {
      const newClient = await Client.create(req.body)
      const admin = await Admin.findOne()
      admin.clients.push(newClient)
      await admin.save()
      return res.status(200).json({ message: "New client created", newClient })
    } catch (error) {
      return console.log(err)
    }
  }
  if (req.method === 'PUT') {
    try {
      const updatedClient = await Client.findByIdAndUpdate(req.body.id, req.body)
      return res.status(200).json({ message: `Client ${updatedClient.firstName} updated` })
    }
    catch (err) {
      return console.log(err)
    }
  }
}

export default connectDB(handler)