const timeline = [
  {
    name: 'Website Design',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: '',
    dateTime: '',
    href: "/solutions#web-design"
  },
  {
    name: 'Ad design and Content creation',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: '',
    dateTime: '',
    href: "/solutions#ad-design"
  },
  {
    name: '',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    href: "/solutions#content-creation"
  },
]

export function PrimaryFeatures() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl justify-center text-center grid">
          <p className="text-base font-semibold leading-7 text-indigo-600">Beyond a website</p>
          <h2 className="mt-2 mb-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">Solutions</h2>
          <p className="text-base font-light leading-7 text-gray-100">
            No matter what you do, WebSlush can help your business scale online. Whether you need something simple, or something highly customized, we have your back.
          </p>

        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.name} className="text-white cursor-pointer lg:py-16 ">

              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{item.name}</p>
              <p className="mt-1 text-base leading-7 text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
