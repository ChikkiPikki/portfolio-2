import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from "next/image"
import Link from "next/link"
import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'
import { useRef } from 'react'
const engagement = [
  { name: 'About', href: '/about', icon: InformationCircleIcon },
  { name: 'Portfolio', href: '/#portfolio', icon: UsersIcon },
  { name: 'Terms & Conditions', href: '/terms-conditions', icon: NewspaperIcon },
  { name: 'Privacy Policy', href: '/privacy-policy', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Content writing', href: '/solutions/content-writing', icon: UserGroupIcon },
  { name: 'Website Design', href: '/solutions/web-design', icon: GlobeAltIcon },
  { name: 'Payment integration', href: '/solutions#payment-integration', icon: GlobeAltIcon },
  { name: 'Search Engine Optimization', href: '/solutions/seo', icon: GlobeAltIcon },
  { name: 'Blog', href: '/blog', icon: BookOpenIcon },
  { name: 'Book a call', href: '/contact', icon: VideoCameraIcon },
]
const recentPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    description:
      'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    category: { title: 'Sales', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
  },
]


export function Flyout() {
  const click = new MouseEvent("click", { view: window, bubbles: false, cancelable: true })
  const triggerRef = useRef()
  const timeOutRef = useRef()
  const handleMouseEnter = (isOpen) => {
    !isOpen && triggerRef.current?.click()
  }
  const handleMouseLeave = (isOpen) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click()
    }, 100)
  }
  return (
    <Popover className="relative z-20 overflow-visible">
      {({ open }) => (
        <div onMouseEnter={() => handleMouseEnter(open)} onMouseLeave={() => handleMouseLeave(open)}>
          <div className='flex' >
            <div className="bg-none">
              <div className="">
                <Popover.Button ref={triggerRef} className="inline-flex items-center gap-x-1 text-sm  leading-6 text-gray-900">
                  More
                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="fixed inset-x-0 bg-blue-50 top-22 -z-10 rounded-4xl  pt-16 shadow-lg ring-1 ring-gray-900/5">
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10  lg:grid-cols-2 lg:px-8">
                <div className="grid  grid-cols-2 gap-x-6 sm:gap-x-8">
                  <div>
                    <h3 className="text-sm font-medium leading-6 text-gray-500">Corporate</h3>
                    <div className="mt-6 flow-root">
                      <div className="-my-2">
                        {engagement.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                          >
                            <item.icon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium leading-6 text-gray-500">Resources</h3>
                    <div className="mt-6 flow-root">
                      <div className="-my-2">
                        {resources.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                          >
                            <item.icon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:grid grid-cols-1 gap-10 hidden lg:grid-cols-2 ">
                  <h3 className="sr-only">Recent posts</h3>
                  {recentPosts.map((post) => (
                    <article
                      key={post.id}
                      className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                    >
                      <div className="relative flex-none">
                        <Image
                          height="1000"
                          width="1000"
                          className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                          src={post.imageUrl}
                          alt=""
                        />
                        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div>
                        <div className="flex items-center gap-x-4">
                          <time dateTime={post.datetime} className="text-sm leading-6 text-gray-600">
                            {post.date}
                          </time>
                          <Link
                            href={post.category.href}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                          >
                            {post.category.title}
                          </Link>
                        </div>
                        <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                          <Link href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </Link>
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-gray-600">{post.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}

    </Popover>
  )
}