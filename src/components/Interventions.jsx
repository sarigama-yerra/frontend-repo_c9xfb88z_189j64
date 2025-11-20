import { motion } from 'framer-motion'
import { Pill, FlaskConical, Activity, Clock } from 'lucide-react'

const steps = [
  {
    icon: FlaskConical,
    title: 'Partial reprogramming',
    desc: 'Short pulses of Yamanaka factors can rewind epigenetic age in cells without erasing identity—promising, but early.'
  },
  {
    icon: Pill,
    title: 'Senolytics',
    desc: 'Clear out senescent cells that emit inflammatory signals and slow tissue repair.'
  },
  {
    icon: Activity,
    title: 'Metabolic tuning',
    desc: 'Approaches like fasting mimetics and exercise-mimetics aim to re-engage longevity pathways (AMPK, sirtuins).'
  },
  {
    icon: Clock,
    title: 'Damage repair',
    desc: 'Gene therapies and CRISPR-based tools target specific mutations and broken circuits.'
  },
]

function Interventions() {
  return (
    <section id="interventions" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_0%_100%,rgba(59,130,246,0.08),transparent),radial-gradient(60%_60%_at_100%_0%,rgba(236,72,153,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            How we can correct the code
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-slate-700"
          >
            From lab to clinic, interventions aim to restore youthful readouts. Explore the leading ideas shaping the future of healthspan.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 p-2 text-white">
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

export default Interventions
