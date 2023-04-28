import { CheckIcon } from '@heroicons/react/20/solid'
import { Faqs } from './Faqs'
import Link from "next/link"
import { CallToActionLight } from './CallToActionLight'
const tiers = [
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '/pricing/growth',
    priceMain: '₹11,000',
    priceMonthly: '₹1,500/mo',
    description: "Perfect plan to get started in the digital world.",
    features: ['1 new ad design per month', '1 site revision per month', 'Analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Extensive',
    id: 'tier-extensive',
    href: '/pricing/extensive',
    priceMain: "₹28,000",
    priceMonthly: '₹4,000/mo',
    description: 'The next step in content creation and outreach.',
    features: [
      '2 new ad designs per month (rollover)',
      '2 new articles per month',
      '1 site revision per month',
      'Advanced analytics',
      'Dedicated support representative',
      'Advertising automations',
      'Custom integrations',
    ],
    featured: true,
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Pricing() {
  return (
    <>
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">

        </div>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Explore extremely competitive industry rates.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          All of our plans include a website, <br /> which is yours to keep.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                tier.featured
                  ? ''
                  : tierIdx === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                  'text-base font-semibold leading-7'
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-gray-900',
                    'text-5xl font-bold tracking-tight'
                  )}
                >
                  {tier.priceMain}
                </span>
                <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}> + {tier.priceMonthly}</span>
              </p>
              <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base leading-7')}>
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                  'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                )}
              >
                Explore this plan
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </>

  )
}
