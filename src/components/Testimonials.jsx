import Image from "next/image"

export function Testimonials() {
  return (
    <>

      <section className="bg-white py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="justify-center grid mb-6">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 text-center">Testimonials</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              What our clients say...
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              {/* <Image className="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" height="1000" width="1000" alt="" /> */}
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-900">
                  <p>
                    “With the help of Facebook advertising with WebSlush, I have been able to start my yoga classes online. In just a few days, I found 10 new students from all over Gujarat.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  {/* <Image
                    height="1000"
                    width="1000"
                    className="h-14 w-14 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  /> */}
                  <div className="text-base">
                    <div className="font-semibold text-gray-900">Rachana S.</div>
                    <div className="mt-1 text-gray-500">Founder, <em>The Morning Rise Yoga Classes</em></div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex relative flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              {/* <Image className="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" height="1000" width="1000" alt="" /> */}
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-900">
                  <p>
                    “I had a portfolio site built with WebSlush, and I must say, they have exceeded my design expectations. The site works great on mobile, and serves as a great addition to my LinkedIn profile.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  {/* <Image
                    height="1000"
                    width="1000"
                    className="h-14 w-14 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""

                  /> */}
                  <div className="text-base">
                    <div className="font-semibold text-gray-900">Rikesh Shah</div>
                    <div className="mt-1 text-gray-500">Sales Branch Manager, <em>Kores India Ltd.</em></div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <hr className="border-4 border-black-500/50 w-[50%] rounded-full" />

      </div>

    </>

  )
}
