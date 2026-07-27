import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CallToAction() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-dark">
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <Reveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Ready to find your next space?
            </h2>
            <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-gray-300">
              Tell us the headcount, the budget and the move-in date. We will come back with a
              shortlist inside five working days.
            </p>
          </div>

          <a
            href="mailto:hello@northlinecommercial.co.ke"
            className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-dark transition-all duration-300 ease-brand hover:bg-gold-soft active:scale-[0.98] md:self-auto"
          >
            Get In Touch
            <ArrowRight
              size={18}
              strokeWidth={2}
              className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
