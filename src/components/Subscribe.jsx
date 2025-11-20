import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

function Subscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', msg: 'Enter a valid email.' })
      return
    }
    setStatus({ type: 'loading', msg: 'Joining...' })
    setTimeout(() => {
      setStatus({ type: 'success', msg: 'You are on the list. Stay tuned!' })
      setEmail('')
    }, 800)
  }

  return (
    <section id="subscribe" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          Get the latest breakthroughs
        </motion.h2>
        <p className="mt-3 text-slate-700">A short monthly note with new studies, tools, and practical insights.</p>

        <form onSubmit={submit} className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 sm:flex-row">
          <div className="relative w-full">
            <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 placeholder-slate-400 shadow-sm outline-none ring-0 focus:border-slate-400"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-slate-800 sm:w-auto"
          >
            Join free
          </button>
        </form>

        {status && (
          <p
            className={`mt-3 text-sm ${
              status.type === 'success' ? 'text-emerald-600' : status.type === 'error' ? 'text-rose-600' : 'text-slate-600'
            }`}
          >
            {status.msg}
          </p>
        )}
      </div>
    </section>
  )
}

export default Subscribe
