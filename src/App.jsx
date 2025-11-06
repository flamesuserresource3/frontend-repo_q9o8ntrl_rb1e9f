import Header from './components/Header'
import Hero from './components/Hero'
import CountrySections from './components/CountrySections'
import BlogGrid from './components/BlogGrid'
import AboutFamily from './components/AboutFamily'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#333333]">
      <Header />
      <main>
        <Hero />
        <CountrySections />
        <BlogGrid />
        <AboutFamily />
      </main>
      <Footer />
    </div>
  )
}

export default App
