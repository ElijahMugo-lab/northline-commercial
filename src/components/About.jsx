import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const STATS = [
  { value: '20+', label: 'Years in Nairobi' },
  { value: '150+', label: 'Mandates Completed' },
  { value: '5M+', label: 'Sq. Ft. Managed' },
]

export default function About() {
  return (
    <section id="about" className="bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              About Northline
            </h3>

            <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Nairobi commercial property, end to end
            </h2>

            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-gray-400">
              We opened on Ring Road Westlands in 2006 with a single leasing desk. Today we
              represent landlords and occupiers across the city, from headquarters floors in Upper
              Hill to warehousing on the Eastern Bypass. The work is unglamorous and specific:
              reading a lease properly, checking a service charge line by line, and telling a client
              when a building is wrong for them.
            </p>

            <dl className="mt-11 grid grid-cols-3 gap-4 border-t border-b border-white/10 py-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-3xl md:text-4xl font-bold tracking-tight text-gold">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-xs md:text-sm leading-snug text-gray-400">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-4 text-sm font-semibold text-dark transition-all duration-300 ease-brand hover:bg-gold-soft active:scale-[0.98]"
            >
              Get In Touch
              <ArrowRight
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
              />
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="group relative h-80 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Glass office towers rising above a commercial business district"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
