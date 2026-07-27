import { Building2, Gem, User, TrendingUp } from 'lucide-react'
import Reveal from './Reveal'

const FEATURES = [
  {
    icon: Building2,
    title: 'Grade A Portfolio',
    body: 'Certified buildings with backup power, fibre and secure parking as standard.',
  },
  {
    icon: Gem,
    title: 'Prime Addresses',
    body: 'Westlands, Upper Hill, Gigiri, Karen and the Mombasa Road logistics corridor.',
  },
  {
    icon: User,
    title: 'One Named Advisor',
    body: 'A single point of contact from first viewing through to handover and renewal.',
  },
  {
    icon: TrendingUp,
    title: 'Yield Discipline',
    body: 'Rent reviews, service charge audits and exit planning built into every mandate.',
  },
]

// Hairlines are declared per cell so the 1 / 2 / 4 column collapse never leaves
// an orphan rule at the end of a row.
function cellRules(i, count) {
  return [
    'border-white/10',
    i < count - 1 ? 'border-b' : '',
    i < 2 ? 'sm:border-b' : 'sm:border-b-0',
    i % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0',
    'lg:border-b-0',
    i < count - 1 ? 'lg:border-r' : 'lg:border-r-0',
  ]
    .filter(Boolean)
    .join(' ')
}

export default function FeatureStrip() {
  return (
    <section
      aria-label="Why occupiers choose Northline"
      className="relative z-20 bg-dark pb-16 md:pb-24 lg:-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Reveal className="overflow-hidden rounded-lg border-t border-white/20 bg-white/5 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className={`group p-8 lg:p-9 ${cellRules(i, FEATURES.length)}`}>
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  className="text-gold transition-transform duration-300 ease-brand group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-base font-bold tracking-tight text-white">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-400">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
