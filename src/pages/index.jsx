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
import { BlogSection } from "@/components/BlogSection"

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
        {/* Blog */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Browse through our previous work, expertise, and advice.
              </p>
            </div>
            <div className="bg-white py-10 sm:py-28">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-3">
                <BlogSection entries={3} />
              </div>
            </div>
          </div>
        </div>

        {/* <Faqs /> */}
      </main>
      <Footer />

    </>
  )
}
