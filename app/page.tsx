import Header from './components/Header'
import Hero from './components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <Header />
      <main className="relative">
        <Hero />
      </main>
    </div>
  )
}

