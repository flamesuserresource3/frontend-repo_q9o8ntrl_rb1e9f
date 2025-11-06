import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] w-full bg-[#F9F9F7]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9F7] via-[#F9F9F7]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-end pb-16">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#333333]/70">Travel Stories & Photography</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-tight text-[#333333]">
            Calm horizons, quiet moments.
          </h1>
          <p className="mt-4 text-lg text-[#333333]/80">
            Journeys through Tanzania, China, and Namibia — told with images and gentle words.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#tanzania" className="px-5 py-2.5 rounded-md bg-[#7BAFD4] text-white shadow-sm hover:shadow transition">Tanzania</a>
            <a href="#china" className="px-5 py-2.5 rounded-md bg-[#D8C9A5] text-[#333333] shadow-sm hover:shadow transition">China</a>
            <a href="#namibia" className="px-5 py-2.5 rounded-md bg-[#EFE9DD] text-[#333333] shadow-sm hover:shadow transition">Namibia</a>
          </div>
        </div>
      </div>
    </section>
  )
}
