import { Container } from "@/components/Container";
import { Sidebar } from "@/pages/_components/Sidebar"
import { Leads } from "../_components/Leads"
import { HomeIcon, UsersIcon } from "@heroicons/react/20/solid"

import { useGetLeadsClientQuery } from "@/store";
import { useEffect, useState } from "react";
export default function Home() {
  const { data, error, isFetching } = useGetLeadsClientQuery("643f5ae58d838ad3fd3706c2")
  const navigation = [
    { name: 'Dashboard', href: '/client', icon: HomeIcon, current: true },
    { name: 'Leads', href: '/client/leads', icon: UsersIcon, current: false },
  ]
  if (!error && !isFetching) { console.log(data) }
  return (
    <>

      <Sidebar navigation={navigation} />
      <Container className="lg:pl-[30%] relative">
        <div className="border-b mb-4 border-gray-200 pb-5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">New leads</h3>
        </div>
        {
          !error && !isFetching &&
          <Leads forClient={true} leads={data.foundLeads.map((lead) => { if (!lead.seen) { return lead } })} clientId={"643f5ae58d838ad3fd3706c2"} />
        }
        <div className="border-b mb-4 mt-4 border-gray-200 pb-5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Analytics</h3>
        </div>
      </Container>
    </>
  )
}