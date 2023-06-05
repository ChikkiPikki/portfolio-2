import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { CallToAction } from './CallToAction'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { Container } from "@/components/container"
import Image from 'next/image'
import man from '@/images/man.png'
import Link from "next/link"

import { useSelector, useDispatch } from 'react-redux'
import { changeModalSeen } from "@/store"
export function LeadModal() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true)
  const [timePassed, setTimePassed] = useState(false)
  const modalSeen = useSelector((state) => { return state.form.modalSeen })
  const thanksAnimation = useSelector((state) => { return state.form.thanksAnimation })
  const cancelButtonRef = useRef(null)
  const handleClose = () => {
    dispatch(changeModalSeen(true))
  }

  setTimeout(() => {
    setTimePassed(true)
  }, 20000);


  return (<>
    {<Transition.Root show={!thanksAnimation && !modalSeen && timePassed} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
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
              <Dialog.Panel className="relative transform min-w-[60%] overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                <CallToAction />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>

      </Dialog>
    </Transition.Root>

    }
  </>

  )
}
