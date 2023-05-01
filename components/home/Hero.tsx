import Image from 'next/image'
import LandingImage from 'assets/landingimage.avif'
import Navbar from './navbar'

const Landing = () => {
  return (
    <div className=" bg-stone-900">
      <svg
        className="absolute inset-0 z-10 h-full w-full stroke-stone-100/20 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <Navbar />

      <div className="relative h-screen">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-20 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-stone-900 lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-stone-100 ring-1 ring-stone-50/10 hover:ring-stone-100/20">
                    Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                    <a
                      href="#"
                      className="whitespace-nowrap font-semibold text-red-600"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-stone-50 sm:text-6xl">
                  Data to enrich your online business
                </h1>
                <p className="mt-6 text-lg leading-8 text-stone-100">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-stone-50"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 bg-stone-900 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="z-40 aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={LandingImage}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
