import { Container } from "@/components/Container"
import { Sidebar } from "@/pages/_components/Sidebar"
import { Leads } from "../_components/Leads"

import { useGetLeadsQuery } from "@/store"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

import { HomeIcon, UsersIcon } from "@heroicons/react/20/solid"
import { useGetLeadsClientQuery } from "@/store"
const navigation = [
  { name: 'Dashboard', href: '/client', icon: HomeIcon, current: false },
  { name: 'Leads', href: '/client/leads', icon: UsersIcon, current: true },
]

export default function AllLeads() {
  const { data, error, isFetching } = useGetLeadsClientQuery("643f5ae58d838ad3fd3706c2")

  return (
    <>
      <Sidebar navigation={navigation} />

      <Container className="lg:pl-[30%] relative">
        <div className="border-b mb-4 border-gray-200 pb-5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">All leads</h3>
        </div>
        {
          !error && !isFetching &&
          <Leads leads={data.foundLeads} />
        }
        <div className="border-b mb-4 mt-4 border-gray-200 pb-5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Analytics</h3>
        </div>
      </Container>

    </>
  )
}