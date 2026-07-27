import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const POSTS = [
  {
    date: '14 July 2026',
    title: 'Why Westlands rents held firm through the 2025 supply wave',
    excerpt:
      'Six new towers completed inside eighteen months and headline rents barely moved. The reason sits in the fit-out contributions, not the rent card.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
    alt: 'Glass walled meeting rooms along an open office floor',
  },
  {
    date: '26 June 2026',
    title: 'The industrial belt shifting toward the Eastern Bypass',
    excerpt:
      'Warehousing demand has quietly moved away from Industrial Area. We map where the new occupiers are signing and what they pay per square foot.',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Long aisle between tall racking bays inside a distribution warehouse',
  },
  {
    date: '09 June 2026',
    title: 'Service charge audits: the line items landlords rarely justify',
    excerpt:
      'Generator fuel, borehole maintenance and security cover most disputes we handle. Here is how to challenge a reconciliation without souring the lease.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Printed statements and a calculator spread across a desk',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900">
            Insights from the Nairobi market
          </h2>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 ease-brand hover:border-gold-ink hover:text-gold-ink active:scale-[0.98]"
          >
            View All Insights
            <ArrowRight
              size={17}
              strokeWidth={2}
              className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
            />
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.15} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-lg">
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-grow flex-col border border-t-0 border-gray-100 bg-gray-50 p-6">
                  <p className="text-xs font-medium text-gray-600">{post.date}</p>

                  <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gold-ink">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>

                  <a
                    href="#contact"
                    className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-3 text-sm font-semibold text-gold-ink"
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
                    />
                    <span className="sr-only">: {post.title}</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
