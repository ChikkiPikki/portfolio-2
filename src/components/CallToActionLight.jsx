import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { changeFormDisplay, changeThanksAnimation } from "@/store/index";
import { Container } from './Container';
import { CircleLoader } from './CircleLoader';
import Link from "next/link"



export function CallToActionLight() {
  const state = useSelector((state) => state.form)
  console.log(state)
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    dispatch(changeFormDisplay(false))
    event.preventDefault()
    const reqBody = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      phone: event.target.phone.value,
      requirements: event.target.requirements.value,
      email: event.target.email.value
    }
    await axios.post("/api/admin/leads", reqBody, { headers: { "Content-Type": "application/json" } }).then((response) => { dispatch(changeThanksAnimation(true)); }).catch((error) => alert(error))
  }
  return (
    <div className="relative isolate bg-white" id="custom">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact for discounts!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Feel free to let us know if you need more customized solutions. We can match any existing quotes from our competitors as well! Just give us a call, and we will be happy to negotiate! <br /><br /> You can reach out to us directly here:
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+916353594722">
                    +91 63535 94722
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="sales@webslush.in">
                    sales@webslush.in
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {
          <>
            {
              state.formDisplay &&
              <form action="" method="POST" onSubmit={handleSubmit} id="cta-form" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input required

                          type="text"
                          name="firstName"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 bg-gray-100/50 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input required
                          type="text"
                          name="lastName"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 bg-gray-100/50 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input required
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 bg-gray-100/50 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                        Phone number
                      </label>
                      <div className="mt-2.5">
                        <input required
                          type="tel"
                          name="phone"
                          id="phone-number"
                          autoComplete="tel"
                          className="block w-full rounded-md border-0 bg-gray-100/50 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="requirements" className="block text-sm font-semibold leading-6 text-gray-900">
                        Requirements
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          placeholder='Let us know more about you and your ideas for a website.'
                          name="requirements"
                          id="requirements"
                          rows={5}
                          className="block w-full rounded-md border-0 bg-gray-100/50 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold hover:-translate-y-3 transition-all duration-300  text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            }

          </>

        }
        {state.thanksAnimation && <Container className="text-gray-900 px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"><p className="text-3xl font-bold">Thank you</p><p className="mt-6 text-lg leading-8 text-gray-800">
          Your request has been received. We will get in touch with you shortly.
        </p> </Container>}
        {!state.thanksAnimation && !state.formDisplay && <Container className="text-gray-900 px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg-py-48">
          <CircleLoader />
        </Container>

        }

      </div>
    </div>
  )
}
