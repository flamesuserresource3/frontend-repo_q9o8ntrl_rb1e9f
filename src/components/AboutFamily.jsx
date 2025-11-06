export default function AboutFamily() {
  const people = [
    {
      name: 'Christian',
      role: 'Writer & Photographer',
      bio: 'Finds quiet frames in busy places and words that move like tides.',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Eveline',
      role: 'Editor & Navigator',
      bio: 'Maps the days, keeps the pace gentle, and the details luminous.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Dominique',
      role: 'Explorer',
      bio: 'Chases shorebirds and collects the bright, small wonders.',
      image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Karl',
      role: 'Tinkerer',
      bio: 'Keeps the gear humming and the laughter close.',
      image: 'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <section id="about" className="bg-[#F9F9F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 max-w-2xl">
          <h3 className="font-serif text-3xl text-[#333333]">About Us</h3>
          <p className="mt-3 text-[#333333]/80 leading-relaxed">
            We travel slowly, listen closely, and share stories that feel like low tide — calm, reflective, and true.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {people.map((p) => (
            <div key={p.name} className="bg-white rounded-xl shadow-sm ring-1 ring-black/5 overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full aspect-square object-cover" loading="lazy" />
              <div className="p-5">
                <h4 className="font-serif text-xl text-[#333333]">{p.name}</h4>
                <p className="text-sm text-[#333333]/70">{p.role}</p>
                <p className="mt-3 text-[#333333]/80 leading-relaxed">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
