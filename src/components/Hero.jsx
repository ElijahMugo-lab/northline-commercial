import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { EASE } from '../lib/motion'

const HERO_VIDEO =
  'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/real_estate_bg_hero_1.mp4'
const HERO_POSTER =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'

export default function Hero() {
  const reduce = useReducedMotion()

  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  })

  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-dark">
      {/* Decorative background. Poster carries the LCP frame while the video loads. */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" />

      <div className="hero-copy relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-28 lg:pt-24 pb-24 lg:pb-48">
        <div className="max-w-2xl">
          <motion.p
            {...rise(0.1)}
            className="hero-eyebrow text-xs md:text-sm font-semibold uppercase tracking-[0.28em] text-white"
          >
            Premium spaces. Prime locations.
          </motion.p>

          <motion.h1
            {...rise(0.2)}
            className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1] text-white"
          >
            Spaces That
            <br />
            Inspire Success
          </motion.h1>

          <motion.p
            {...rise(0.3)}
            className="hero-lede mt-7 max-w-xl text-base md:text-lg leading-relaxed text-gray-300"
          >
            Grade A offices, retail and industrial space across Nairobi, leased and managed by
            people who know every corridor.
          </motion.p>

          <motion.div
            {...rise(0.4)}
            className="hero-actions mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
          >
            <a
              href="#properties"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-sm font-semibold text-dark transition-all duration-300 ease-brand hover:bg-gray-200 active:scale-[0.98]"
            >
              Explore Properties
              <ArrowRight
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg px-1 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-gold"
            >
              <PlayCircle
                size={26}
                strokeWidth={1.5}
                className="transition-transform duration-300 ease-brand group-hover:scale-110"
              />
              Watch Video
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
