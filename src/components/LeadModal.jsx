import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import { CallToAction } from './CallToAction'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { Container } from "@/components/container"
import Image from 'next/image'
import man from '@/images/man.png'
export function LeadModal() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 justify-center overflow-y-auto">
          <div className="flex min-h-full  justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <CheckBadgeIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Help us help you!
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className='flex'>
                          <div className='inline-flex'>
                            <p className="text-sm text-gray-500">
                              Get in touch with us for more flexible solutions, such as custom backend integrations and automations, user sign-in systems, video calls, etc. Our representative will call you back soon.
                            </p>
                          </div>
                          <div className='inline-flex'>
                            {/* <Image className="" src={man} alt="" /> */}
                          </div>
                        </div>
                        <form className='mt-12 justify'>
                          <div className="space-y-12">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                                <div className="sm:col-span-4">
                                  <label htmlFor="Your Name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Your Name
                                  </label>
                                  <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                      <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    About
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      id="about"
                                      name="about"
                                      rows={3}
                                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                      defaultValue={''}
                                    />
                                  </div>
                                  <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                </div>

                                <div className="col-span-full">
                                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Photo
                                  </label>
                                  <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <button
                                      type="button"
                                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                      Change
                                    </button>
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                  </label>
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                      <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
