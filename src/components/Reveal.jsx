import { motion, useReducedMotion } from 'framer-motion'
import { EASE, VIEWPORT } from '../lib/motion'

/**
 * Scroll-reveal wrapper.
 * Motivation: sections enter in reading order so the eye lands on the headline
 * before the supporting grid. Collapses to a static render under
 * prefers-reduced-motion.
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  y = 30,
  duration = 0.6,
  className = '',
  children,
  ...rest
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
