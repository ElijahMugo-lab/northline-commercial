import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import BrandMark from './BrandMark'
import { EASE } from '../lib/motion'

const LINKS = [
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <motion.nav
      initial={reduce ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="absolute top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="h-[72px] lg:h-20 flex items-center justify-between">
          <BrandMark />

          {/* Desktop links. Four items plus one CTA fit on a single line at lg. */}
          <div className="hidden lg:flex items-center gap-9">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-brand hover:bg-white hover:text-dark active:scale-[0.98]"
            >
              Get In Touch
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="lg:hidden rounded-lg p-2 text-white transition-colors duration-300 hover:text-gold"
          >
            {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown. Motivation: state transition feedback for the toggle. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-dark/95 backdrop-blur-md"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-2 py-3 text-base font-medium text-gray-200 transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-dark transition-colors duration-300 hover:bg-gray-200"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
