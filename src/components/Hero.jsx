import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:pt-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Aging is not destiny — it's a fixable bug in our code
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-slate-700"
          >
            Emerging research suggests many hallmarks of aging stem from repairable errors in gene expression and cellular maintenance. Learn how modern interventions aim to restore youthful function.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#science" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
              Explore the science
            </a>
            <a href="#subscribe" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-slate-900/10 bg-white px-6 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50">
              Get updates
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

export default Hero
