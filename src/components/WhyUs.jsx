import { ChartBarIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Button } from './Button'

export function WhyUs() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Why Choose us?</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better experience...</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Most business sites are made using a one-size-fits-all approach, leading to slower sites and poor SEO. <br /> <br /> At WebSlush, we design extremely customized and optimized websites based on your requirements, leading to better SEO and user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                All of our websites are professionally designed and hosted on global servers, leading to superb performance. Hence, our websites tend to be much more faster and responsive than their WordPress alternatives.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ChartBarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Transparent Analytics</strong> Check our portal at any time to see how your ads and your website are performing.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> All of our sites will be equipped with an SSL certificate. Rest assured, your sites will look confident to your viewers.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Speed.</strong> We use cutting-edge web-frameworks and optimizations to ensure very low page-load speeds, even for sites filled with images and videos.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Emerging as a business that uses revolutionary technologies, we are willing to go above and beyond to gain your trust. Our products and services are 100% fool-proof, and are offered at very competitive pricing.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Custom requirements? No problem.</h2>
              <p className="mt-6">
                Since WebSlush doesn't rely on any thid party content management systems, we are free to create extremely customized sites for you, at very little overhead. Just get in touch with sales, and we'll see what we can do for you. <br />
                <div className='justify-around flex mt-5'>
                  <Button className="mt-2"><Link href="/contact">Contact Sales</Link></Button>
                  <Button className="mt-2"><Link href="https://wa.me/916353594722">WhatsApp</Link></Button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
