import { useState } from 'react'
import { Menu, X, Dna, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'The Science', href: '#science' },
    { label: 'Interventions', href: '#interventions' },
    { label: 'Myths', href: '#myths' },
    { label: 'Subscribe', href: '#subscribe' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="group inline-flex items-center gap-3">
              <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-blue-500 text-white shadow-lg">
                <Dna className="h-5 w-5" />
                <Sparkles className="absolute -right-1 -top-1 h-3 w-3 opacity-90" />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight text-white">Helix Reset</p>
                <p className="text-xs text-white/60">Rethinking aging</p>
              </div>
            </a>

            <nav className="hidden gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 p-2 text-white md:hidden"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="space-y-2 border-t border-white/10 px-4 py-3 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
