import connectDB from "middleware/connectDB"
import Admin from "@/server/models/Admin"
import Lead from "@/server/models/Lead"
const handler = async (req, res) => {


  if (req.method === 'GET') {

    try {
      const admin = await Admin.findOne()
      const foundLeads = []

      for await (const lead of admin.leads) {
        const foundLead = await Lead.findById(lead)
        foundLeads.push(foundLead)
      }

      return res.status(200).json({ foundLeads })

    } catch (error) {
      return console.log(error)
    }
  }

  // create new leads
  if (req.method === 'POST') {
    try {
      // validate input via middleware
      // check captcha validity
      console.log(req.body)
      const newLead = await Lead.create(req.body)
      console.log(newLead)
      const admin = await Admin.findOne({})
      admin.leads.push(newLead)
      await admin.save()
      return res.status(200).json({ newLead })
    }

    catch (error) {
      return console.log(error)
    }
  }

  // mark lead as read
  if (req.method === 'PUT') {
    const { lead_id } = req.body
    try {
      const lead = await Lead.findById(lead_id)
      lead.seen = true
      await lead.save()
      return res.status(200).json({ message: "Marked as read" })
    }
    catch (error) {
      return console.log(error)
    }
  }
}
export default connectDB(handler)