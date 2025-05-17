

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function SectionTransition({ children, className, delay = 0 }: SectionTransitionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
