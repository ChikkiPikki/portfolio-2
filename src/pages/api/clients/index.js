import connectDB from "middleware/connectDB"
import Lead from "@/server/models/Lead"
import Client from "@/server/models/Client"


// Request to this route with the id: client_id in the request body
// returns all of the leads of that client


const handler = async (req, res) => {

  if (req.method === 'PATCH') {

    // validate request

    // find all leads for given client

    try {
      // find client from request's body's id
      console.log("here")
      console.log(req)
      const client = await Client.findById(req.body.id)
      const leads = []
      // collect all leads from the database
      console.log(client)
      for await (const lead of client.leads) {
        const foundLead = await Lead.findById(lead)
        leads.push(foundLead)
      }
      return res.status(200).json({ foundLeads: leads })
    }
    catch (err) {
      return console.log(err)
    }
  }

  if (req.method === "POST") {
    // request object contains id of the client as well as the lead details
    // validate request via middleware
    try {
      // validate input via middleware
      const newLead = await Lead.create(req.body)
      const client = await Client.findById(req.body.id)
      client.leads.push(newLead)
      await client.save()
      return res.status(200).json({ newLead })
    }
    catch (err) {
      return console.log(err)
    }
  }
  if (req.method === 'PUT') {
    console.log("hi")
    const { lead_id } = req.body
    console.log(req)
    const client = await Client.findById(req.body.id)
    console.log(req.body)
    try {
      // check if this lead belongs to the client making this request
      const lead = await Lead.findById(lead_id)
      lead.seen = true
      await lead.save()
      console.log(lead)
      return res.status(200).json({ message: "Marked as read" })
    }
    catch (err) {
      console.log(err)
    }
  }
}

export default connectDB(handler)