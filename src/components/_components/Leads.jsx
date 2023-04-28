import { LeadBox } from "./LeadBoxU"

export function Leads({ leads, clientId, reRender, forClient }) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
      {leads.map((lead) => (
        lead &&
        <LeadBox lead={lead} clientID={clientId} forClient={forClient} />
      ))}
    </ul>
  )
}
