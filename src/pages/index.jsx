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
import { ChatwootWidget } from '@/components/ChatwootWidget'
import { Fragment } from 'react'
import { Comparison } from '@/components/Comparison'
import { Blog } from "@/components/Blog"

import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from '@/components/Button'


export default function Home() {
  const { data, status } = useSession();

  return (
    <>
      <Head>
        <title>WebSlush - Welcome!</title>
        <meta
          name="description"
          content="End to end web development services with maximum automation"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Fragment>
          <ChatwootWidget />
        </Fragment>
        <Comparison />
        <Testimonials />
        <Pricing />
        <CallToAction />
        <Blog />

        {/* <Faqs /> */}
      </main>
      <Footer />

    </>
  )
}
