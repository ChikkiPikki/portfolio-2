import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogSection } from "@/components/BlogSection";
import { CallToActionLight } from "@/components/CallToActionLight";
export default function Blog() {
  return <>
    <Header />
    <div className="bg-white pt-24 pb-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-indigo-600">Beyond a website</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Blog</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to our web design blog, where we humbly share our previous projects and the
            lessons we&apos;ve learned along the way. <br /> Explore our collection of case studies and
            gain insights from our experiences.
          </p>
        </div>
      </div>
    </div>
    <hr className="border-4 w-64 mx-auto rounded-full" />
    <div className="bg-white py-10 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <BlogSection entries={10} />
      </div>
    </div>
    <hr className="border-4 w-64 mx-auto rounded-full" />
    <CallToActionLight />
    <Footer />
  </>
}