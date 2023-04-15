import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { LeadModal } from "@/components/LeadModal"
import ChatwootWidget from '@/components/ChatwootWidget'
import { Fragment } from 'react'
import { Comparison } from '@/components/Comparison'
export default function Home() {
  return (
    <>
      <Head>
        <title>WebSlush - Welcome!</title>
        <meta
          name="description"
          content="End to end web development services with maximum automation"
        />
      </Head>
      <LeadModal />
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        {/* <Testimonials /> */}
        <Fragment>
          <ChatwootWidget />
        </Fragment>
        <Comparison />
        <Pricing />
        <CallToAction />

        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
