import { motion } from 'framer-motion'
import { Activity, Brain, Shield, Zap } from 'lucide-react'

const items = [
  {
    icon: Activity,
    title: 'Epigenetic drift',
    desc: 'Over time, chemical marks on DNA get scrambled, changing how genes are read without altering the sequence itself. This "software" error misconfigures cells.'
  },
  {
    icon: Shield,
    title: 'DNA damage & repair',
    desc: 'Our repair systems degrade, letting mutations and breaks accumulate. Most are fixable, but the maintenance crew slows down with age.'
  },
  {
    icon: Brain,
    title: 'Cellular identity loss',
    desc: 'Cells forget their roles as transcription programs drift. Restoring the right program can bring back youthful function in animal models.'
  },
  {
    icon: Zap,
    title: 'Mitochondrial dysfunction',
    desc: 'Energy factories falter, producing more oxidative stress. Tuning the system can restore performance.'
  },
]

function Science() {
  return (
    <section id="science" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_10%_0%,rgba(236,72,153,0.08),transparent),radial-gradient(60%_60%_at_100%_20%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            The science behind the bug
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-slate-700"
          >
            Aging looks less like wear-and-tear and more like corrupted configuration files. The body still has the hardware—what fails is the readout of instructions.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-pink-500 to-blue-500 p-2 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Science
