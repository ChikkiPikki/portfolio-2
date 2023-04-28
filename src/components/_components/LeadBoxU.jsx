import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { useSeenLeadClientMutation, useSeenLeadMutation } from "@/store"
import { useEffect, useState } from 'react'



export function LeadBox({ lead, clientId, forClient }) {
  const [markSeen, results] = useSeenLeadClientMutation(lead._id)
  const [markSeenAdmin, resultsAdmin] = useSeenLeadMutation(lead._id)
  console.log(results)
  const handleDone = (event) => {
    event.preventDefault()
    if (forClient) {
      alert("??")
      markSeen({ clientId, lead_id: lead._id })
    } else {
      markSeenAdmin(lead._id)
    }
  }


  return (
    !results.isSuccess && !resultsAdmin.isSuccess &&
    <li
      key={lead.email}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
    >
      <div className="flex flex-1 flex-col p-8">
        <p className="justify-center">{lead.requirements}</p>
        <h3 className="mt-6 text-sm font-medium text-gray-900">{lead.firstName} {lead.lastName}</h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Date</dt>
          <dd className="text-sm text-gray-500">{lead.date}</dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              href={`mailto:${lead.email}`}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              Email
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              href={`tel:${lead.phone}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              Call
            </a>
          </div>

          {!lead.seen && <div className="-ml-px flex w-0 flex-1">
            <a
              href="#"
              onClick={handleDone}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              Mark as Done
            </a>
          </div>}
        </div>
      </div>
    </li>
  )
}