// Shared motion constants so every section animates on the same curve.
export const EASE = [0.16, 1, 0.3, 1]

export const VIEWPORT = { once: true, margin: '-50px' }

export const fadeUp = (delay = 0, y = 30) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.6, delay, ease: EASE },
})
