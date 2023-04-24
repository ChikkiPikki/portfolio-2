import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallToActionLight } from "@/components/CallToActionLight";
import { Container } from "@/components/Container";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <>
      <Header />
      <Container>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="text-base font-semibold leading-7 text-indigo-600">Get in touch</p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact us</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Call us any time, or fill in the form below and our representative will call you soon.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="rounded-xl mb-10">
        <CallToActionLight />
      </Container>
      <Footer />
    </>
  )

}