import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Science from './components/Science'
import Interventions from './components/Interventions'
import Myths from './components/Myths'
import Subscribe from './components/Subscribe'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Science />
      <Interventions />
      <Myths />
      <Subscribe />

      <footer className="border-t border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-sm text-slate-500">Educational content only. Not medical advice.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
