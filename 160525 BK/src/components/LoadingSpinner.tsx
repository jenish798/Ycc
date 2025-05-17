

import { motion } from "framer-motion"

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-[60vh]">
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-turmeric-300 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 border-t-4 border-purple-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 bg-turmeric-500 rounded-full"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </div>
      <motion.p
        className="ml-4 text-lg font-medium text-purple-800"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        Loading...
      </motion.p>
    </div>
  )
}
