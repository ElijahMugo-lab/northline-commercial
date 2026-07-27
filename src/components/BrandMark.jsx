/**
 * Three gold bars of stepped height. Used in the navbar and the footer.
 * Bars grow on group hover, mirroring the "building up" idea in the wordmark.
 */
export default function BrandMark({ href = '#top', className = '' }) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-3 ${className}`}
      aria-label="Northline Commercial, back to top"
    >
      <span className="flex items-end gap-1" aria-hidden="true">
        <span className="w-1.5 h-6 bg-gold transition-all duration-300 ease-brand group-hover:h-8" />
        <span className="w-1.5 h-10 bg-gold transition-all duration-300 ease-brand group-hover:h-8" />
        <span className="w-1.5 h-8 bg-gold transition-all duration-300 ease-brand group-hover:h-10" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-white">NORTHLINE</span>
        <span className="text-[11px] font-semibold tracking-[0.3em] text-gray-400">
          COMMERCIAL
        </span>
      </span>
    </a>
  )
}
