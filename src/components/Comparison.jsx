import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import screenshot from "../images/screenshots/payroll.png"
import Link from 'next/link'
import { Button } from './Button'

const features = [
  {
    name: 'Faster load times.',
    description: 'A faster website improves user experience and retention. Built with modern tech stacks, our websites tend to be optimized at any scale.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SEO friendly content.',
    description: 'Rise in search result rankings. SEO friendly content on the website leads to instant indexing.',
    icon: LockClosedIcon,
  },
  // {
  //   name: 'Customize.',
  //   description: 'Depending on your use case, we can arrange for custom graphic design arrangements.',
  //   icon: ArrowPathIcon,
  // },
  // {
  //   name: '99.999% uptime.',
  //   description: 'All of our websites are hosted on multiple servers. This reduces the chances of downtimes.',
  //   icon: FingerPrintIcon,
  // },
  // {
  //   name: 'API Integrations.',
  //   description: '',
  //   icon: Cog6ToothIcon,
  // },
  {
    name: 'Automation',
    description: 'Whether it\'s automated emails or messages, we have you covered for all your automation requirements for you, as well as your customers.',
    icon: ServerIcon,
  },

]

export function Comparison() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Why Choose Us?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Capabilities.</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At WebSlush, we strive to deliver the best return on investment that you make using our services. Here&apos;s a comparison about how we differ objectively from a mainstream competitor:
            <br /><Link className='flex justify-center' href="/comparisons">(Verify <ArrowTopRightOnSquareIcon className="left-1 top-1 h-5 w-5 flex-inline" />)</Link>
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-lg">
          <Image
            src={screenshot}
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />

          <div className="relative" aria-hidden="true">

            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
          </div>

        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className='flex justify-end  font-semibold px-9 pt-5 mt-7 mr-4'>
        <Link href="/solutions">
          <Button className='bg-slate-300 text-black duration-300'>
            Learn more
          </Button>
        </Link>
      </div>
    </div>
  )
}
