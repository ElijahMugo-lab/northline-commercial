import { Hexagon, Target, Triangle, Mountain, Shield, Zap } from 'lucide-react'
import Reveal from './Reveal'

const CLIENTS = [
  { icon: Hexagon, name: 'Kimathi Group' },
  { icon: Target, name: 'Meridian Telecom' },
  { icon: Triangle, name: 'Acacia Holdings' },
  { icon: Mountain, name: 'Rift Energy' },
  { icon: Shield, name: 'Sentinel Assurance' },
  { icon: Zap, name: 'Savannah Logistics' },
]

export default function TrustedBy() {
  return (
    <section aria-label="Client logos" className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-16">
        <Reveal>
          <p className="text-center text-sm text-gray-600">
            Trusted by occupiers and investors across East Africa
          </p>

          <ul className="group mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-14 opacity-60 grayscale transition-all duration-500 ease-brand hover:opacity-100 hover:grayscale-0">
            {CLIENTS.map(({ icon: Icon, name }) => (
              <li key={name}>
                <span className="group/logo flex items-center gap-2.5">
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-gray-900 transition-colors duration-300 group-hover/logo:text-gold-ink"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-gray-900">
                    {name}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
