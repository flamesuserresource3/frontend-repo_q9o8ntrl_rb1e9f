const countries = [
  {
    id: 'tanzania',
    name: 'Tanzania',
    accent: '#7BAFD4',
    caption: 'Dhow sails at dusk, whispers of Zanzibar and savannah skies.',
    image:
      'https://images.unsplash.com/photo-1523809328677-94d45e4b54a8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'china',
    name: 'China',
    accent: '#D8C9A5',
    caption: 'Ancient stones and neon breath — stillness between dynasties.',
    image:
      'https://images.unsplash.com/photo-1517999349371-c43520457b23?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'namibia',
    name: 'Namibia',
    accent: '#EFE9DD',
    caption: 'Sand oceans, cobalt nights, and dunes that hum at sunrise.',
    image:
      'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function CountrySections() {
  return (
    <div className="bg-[#F9F9F7]">
      {countries.map((c) => (
        <section key={c.id} id={c.id} className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-block rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: c.accent }}>
                  {c.name}
                </div>
                <h2 className="mt-4 font-serif text-4xl text-[#333333]">{c.caption}</h2>
                <p className="mt-4 text-[#333333]/80 leading-relaxed">
                  Selected stories, itineraries, and photographs from our time in {c.name}. Explore the gallery and read gentle notes from the road.
                </p>
                <div className="mt-6 flex gap-3">
                  <a href="#blog" className="px-4 py-2 rounded-md bg-[#333333] text-white shadow hover:shadow-md transition">Read Stories</a>
                  <a href="#contact" className="px-4 py-2 rounded-md bg-white text-[#333333] border border-black/10 shadow-sm hover:shadow transition">Get in touch</a>
                </div>
              </div>
              <div className="relative group">
                <img
                  src={c.image}
                  alt={`${c.name} landscape`}
                  className="w-full aspect-[4/3] object-cover rounded-xl shadow-md ring-1 ring-black/5 transition duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
