

import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SliderImage {
  src: string
  alt: string
  title: string
  description: string
}

interface ImageSliderProps {
  images: SliderImage[]
  autoPlayInterval?: number
}

export default function ImageSlider({ images, autoPlayInterval = 5000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [images.length, autoPlayInterval])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  }

  const textVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 100, damping: 10 },
        opacity: { duration: 0.5 },
      },
    },
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Image with overlay */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0  z-10" />
            <div className="absolute inset-0 bg-kolam-pattern opacity-10 z-5"></div>
            <img
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              className="object-cover w-full h-full"
            />

            {/* Text content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl space-y-6">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="inline-block px-4 py-1.5 bg-turmeric-100 text-turmeric-800 rounded-full text-sm font-medium"
                  >
                    Yatra's Cooking Cave
                  </motion.div>

                  <motion.h1
  initial="hidden"
  animate="visible"
  variants={textVariants}
  transition={{ delay: 0.1 }}
  className="text-4xl md:text-6xl font-bold text-white font-medium rounded-md px-6 py-3 relative overflow-hidden"
>
  <span className="absolute inset-0 bg-turmeric-600 opacity-50 rounded-md -z-10"></span>
  <span className="relative z-10 text-4xl text-white">
    {images[currentIndex].title}
  </span>
</motion.h1>

                  <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-turmeric-50"
                  >
                    {images[currentIndex].description}
                  </motion.p>

                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link to="/order-booking" className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-turmeric-600 hover:bg-turmeric-700 text-white font-medium rounded-md"
                    >
                      Pre-Order Now
                    </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border border-turmeric-200 text-turmeric-100 hover:bg-turmeric-900/20 font-medium rounded-md flex items-center"
                    >
                      Explore Menu <ChevronRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
