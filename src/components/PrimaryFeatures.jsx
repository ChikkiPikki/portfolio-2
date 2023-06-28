import Link from "next/link"
import website_design from "@/images/graphics/website_design.svg"
import ad from "@/images/graphics/ad.svg"

import Image from "next/image"
const timeline = [
  {
    name: 'Website Design',
    description:
      `
        From static websites, to highly performant all-purpose platforms, we can cover all your web dev needs.
      `,
    href: "/solutions#web-design",
    image: website_design
  },
  {
    name: 'Ad campaigns',
    description:
      'Highly cusomizable ad campaigns integrated tightly with your website. Includes admin controls and lead generation.',
    href: "/solutions#ad-design",
    image: ad
  },
  {
    name: 'Content creation',
    description:
      'Hire us to write content for you on platforms such as Quora and LinkedIn.',
    href: "/solutions#content-creation",
    image: website_design

  },
]

export function PrimaryFeatures() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-5">
        <div className="mx-auto max-w-2xl justify-center text-center grid">
          <p className="text-base font-semibold leading-7 text-indigo-600">Beyond a website</p>
          <h2 className="mt-2 mb-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">Solutions</h2>
          <p className="text-base font-light leading-7 max-w-xl text-gray-100">
            No matter what you do, WebSlush can help your business scale online. Whether you need something simple, or something highly customized, we have your back.
          </p>
        </div>
        <hr className="mt-24 max-w-sm mx-auto" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.name} className="text-white cursor-pointer lg:py-16 ">
              <div className="grid grid-rows-6 max-w-md mx-auto gap-2">
                <Image src={item.image} height={1000} width={1000} alt={item.name} className="w-64 row-span-3 py-2 mx-auto h-64" />
                <p className="row-span-1 mt-6 text-xl font-semibold leading-8 text-white">{item.name}</p>
                <p className="row-span-1 mt-1 text-base leading-7 text-white">{item.description}</p>
                <div className="row-span-1">
                  <Link
                    type="button"
                    href={item.href}
                    className="rounded-full duration-300 bg-none border border-zinc-100 px-6 py-1.5 text-sm font-light text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-32 mt-2.5"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
