import { Link, MessageCircle, Mail } from 'lucide-react'
import BrandMark from './BrandMark'

const COLUMNS = [
  {
    heading: 'Properties',
    links: [
      { label: 'Office space', href: '#properties' },
      { label: 'Retail units', href: '#properties' },
      { label: 'Industrial & logistics', href: '#properties' },
      { label: 'Land & development', href: '#properties' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Leasing & tenant rep', href: '#services' },
      { label: 'Valuation & advisory', href: '#services' },
      { label: 'Asset & facilities', href: '#services' },
      { label: 'Project management', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '#about' },
      { label: 'Insights', href: '#insights' },
      { label: 'Careers', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

const SOCIALS = [
  { icon: Link, label: 'Northline Commercial on LinkedIn', href: '#contact' },
  { icon: MessageCircle, label: 'Message us on WhatsApp', href: '#contact' },
  { icon: Mail, label: 'Email hello@northlinecommercial.co.ke', href: 'mailto:hello@northlinecommercial.co.ke' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <BrandMark />

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
              Commercial property leasing, valuation and management across Nairobi since 2006.
              Riverside Drive, Westlands. +254 20 271 4408.
            </p>

            <ul className="mt-8 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 ease-brand hover:border-gold hover:text-gold"
                  >
                    <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {column.heading}
              </h2>
              <ul className="mt-4 flex flex-col">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex min-h-11 items-center text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-gray-400">
            © 2026 Northline Commercial Ltd. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center text-sm text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center text-sm text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
