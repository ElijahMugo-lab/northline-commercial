import { Key, FileSignature, Briefcase, HardHat, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const SERVICES = [
  {
    icon: Key,
    title: 'Leasing & Tenant Rep',
    body: 'We shortlist, negotiate heads of terms and hold the line on rent-free periods and fit-out contributions.',
  },
  {
    icon: FileSignature,
    title: 'Valuation & Advisory',
    body: 'Bank-grade valuations for lending, financial reporting, stamp duty and pre-acquisition due diligence.',
  },
  {
    icon: Briefcase,
    title: 'Asset & Facilities',
    body: 'Rent collection, service charge budgeting, planned maintenance and tenant liaison under one roof.',
  },
  {
    icon: HardHat,
    title: 'Project Management',
    body: 'Fit-outs and refurbishments run to programme, with cost reporting the finance team can actually read.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <Reveal className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900">
            What we do for landlords and occupiers
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600">
            Four disciplines, one team. Most clients start with one and end up using all of them.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <article className="group h-full rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 ease-brand hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-gray-900/5">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-wash">
                  <Icon size={26} strokeWidth={1.5} className="text-gold-ink" aria-hidden="true" />
                </span>

                <h3 className="mt-6 text-lg font-bold tracking-tight text-gray-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{body}</p>

                <a
                  href="#contact"
                  className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-ink"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
                  />
                  <span className="sr-only"> about {title}</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
