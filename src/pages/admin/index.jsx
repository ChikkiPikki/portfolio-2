import { Container } from "@/components/Container"
import { Sidebar } from "@/pages/_components/Sidebar"
import { Leads } from "../_components/Leads"

import { useGetLeadsQuery } from "@/store"
import { HomeIcon, UsersIcon } from "@heroicons/react/20/solid"

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: true },
  { name: 'Leads', href: '/admin/leads', icon: UsersIcon, current: false },
]

export default function Home() {
  console.log(useGetLeadsQuery)
  const { data, error, isFetching } = useGetLeadsQuery()

  return (
    <>
      <Sidebar navigation={navigation} />

      <Container className="lg:pl-[30%] relative">
        <div className="border-b mb-4 border-gray-200 pb-5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">New leads</h3>
        </div>
        {
          !isFetching && !error &&
          <Leads leads={data.foundLeads.map((lead) => { if (lead && !lead.seen) { return lead } })} />
        }
        <div className="border-b mb-4 mt-4 border-gray-200 pb-5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Analytics</h3>
        </div>
      </Container>
    </>
  )
}