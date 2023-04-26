import { Breadcrumbs } from "@/components/Breadcrumb";
const pages = [
  { name: 'Pricing', href: '/pricing', current: false },
]
import { Pricing } from "@/components/Pricing";
import { useState } from 'react'
import { Dialog, RadioGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon as XMarkIconOutline } from '@heroicons/react/24/outline'
import { CheckIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container"
import { Faqs } from "@/components/Faqs"
import { CallToActionLight } from "@/components/CallToActionLight"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingPage() {


  return (
    <>
      <Header />
      <br />
      <Container className="mb-5">
        <Breadcrumbs pages={pages} />
        <Pricing />
        {/* <Faqs /> */}
        <CallToActionLight />

      </Container>
      <Footer />
    </>



  )
}
