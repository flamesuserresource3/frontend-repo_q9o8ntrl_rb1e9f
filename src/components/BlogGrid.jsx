const posts = [
  {
    id: 1,
    country: 'Tanzania',
    title: 'Stone Town Blue Hour',
    excerpt:
      'Narrow alleys gather the last light while cardamom and clove drift from doorways.',
    image:
      'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    country: 'China',
    title: 'Quiet Courtyard in Pingyao',
    excerpt:
      'Old brick and paper lanterns, a warm tea cooling while the street murmurs.',
    image:
      'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    country: 'Namibia',
    title: 'Sossusvlei Dawn Lines',
    excerpt:
      'Dune edges glow like embers; oryx trace patient paths across the pans.',
    image:
      'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 4,
    country: 'Tanzania',
    title: 'Serengeti Stillness',
    excerpt:
      'Grasslands hold their breath; a lone acacia balances the sun.',
    image:
      'https://images.unsplash.com/photo-1543248939-ff40856ca4c5?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function BlogGrid() {
  return (
    <section id="blog" className="bg-[#F9F9F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <h3 className="font-serif text-3xl text-[#333333]">Field Notes</h3>
          <a href="#contact" className="text-sm text-[#333333]/70 hover:text-[#333333]">Subscribe</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.id} className="group bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
              <div className="relative overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-56 object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-[#EFE9DD] text-[#333333] shadow">{p.country}</span>
              </div>
              <div className="p-5">
                <h4 className="font-serif text-xl text-[#333333]">{p.title}</h4>
                <p className="mt-2 text-[#333333]/80 leading-relaxed">{p.excerpt}</p>
                <button className="mt-4 text-[#7BAFD4] hover:underline">Read story</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
