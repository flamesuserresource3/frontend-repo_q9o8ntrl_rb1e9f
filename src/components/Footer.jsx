export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="bg-[#F9F9F7] border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="font-serif text-2xl text-[#333333]">Sailing Stories</h4>
            <p className="mt-2 text-[#333333]/80">Gentle travel writing and photography from Tanzania, China, and Namibia.</p>
          </div>
          <div className="md:justify-self-end flex gap-4">
            <a className="px-4 py-2 rounded-md bg-[#7BAFD4] text-white shadow" href="#">Instagram</a>
            <a className="px-4 py-2 rounded-md bg-[#D8C9A5] text-[#333333] shadow" href="#">Newsletter</a>
            <a className="px-4 py-2 rounded-md bg-[#EFE9DD] text-[#333333] shadow" href="#">Email</a>
          </div>
        </div>
        <div className="mt-8 text-sm text-[#333333]/60">© {year} Sailing Stories. All rights reserved.</div>
      </div>
    </footer>
  )
}
