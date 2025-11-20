import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

const myths = [
  {
    q: '“Aging is purely wear and tear.”',
    a: 'Wear accumulates, but much of aging tracks with changes in gene expression and cell state—patterns that can be measured and, in some cases, reversed in animal studies.'
  },
  {
    q: '“Nothing has been shown to work.”',
    a: 'Lifestyle changes already extend healthspan. Early trials explore senolytics and epigenetic reprogramming. Caution is key, but progress is real.'
  },
  {
    q: '“It’s all about living forever.”',
    a: 'The goal is healthier years—more vitality, less disease. Longevity research targets quality, not just quantity.'
  },
]

function Myths() {
  const [open, setOpen] = useState(null)

  return (
    <section id="myths" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Common misconceptions
          </motion.h2>
          <p className="mt-3 text-slate-700">Short, clear answers grounded in current research.</p>
        </div>

        <div className="space-y-3">
          {myths.map((m, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <button
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white"><HelpCircle className="h-4 w-4" /></span>
                  <span className="text-slate-900 font-medium">{m.q}</span>
                </div>
                <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-5 text-slate-700"
                  >
                    {m.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Myths
