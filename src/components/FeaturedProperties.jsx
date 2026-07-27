import { ArrowRight, MapPin } from 'lucide-react'
import Reveal from './Reveal'

const PROPERTIES = [
  {
    name: 'Riverside Exchange',
    location: 'Riverside Drive, Westlands',
    spec: '184,000 SQ. FT. • OFFICE',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
    alt: 'Open plan office floor with desks along a full height window overlooking the city',
  },
  {
    name: 'Ragati Pavilion',
    location: 'Ragati Road, Upper Hill',
    spec: '96,500 SQ. FT. • MIXED USE',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    alt: 'Office corridor running past a fitted kitchenette and storage wall',
  },
  {
    name: 'Gateway Logistics Park',
    location: 'Mombasa Road, Embakasi',
    spec: '310,000 SQ. FT. • INDUSTRIAL',
    image:
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop',
    alt: 'Pallet racking stacked to the roof inside a high bay warehouse',
  },
]

export default function FeaturedProperties() {
  return (
    <section id="properties" className="bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Available Now
            </h3>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Featured properties
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-gray-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-brand hover:border-gold hover:text-gold active:scale-[0.98]"
          >
            Explore Properties
            <ArrowRight
              size={17}
              strokeWidth={2}
              className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
            />
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROPERTIES.map((property, i) => (
            <Reveal
              key={property.name}
              delay={i * 0.15}
              /* The centre card drops half a step so this row reads differently
                 from the flush three-up grid in the Insights section below. */
              className={i === 1 ? 'md:mt-12' : ''}
            >
              <article className="group h-full overflow-hidden rounded-lg">
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-transparent" />
                </div>

                <div className="bg-dark-raised p-6">
                  <h3 className="text-xl font-bold tracking-tight text-white">{property.name}</h3>

                  <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-400">
                    <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
                    {property.location}
                  </p>

                  <p className="mt-5 border-b border-dark-line pb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-300">
                    {property.spec}
                  </p>

                  <a
                    href="#contact"
                    className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold"
                  >
                    View Details
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
                    />
                    <span className="sr-only"> for {property.name}</span>
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
