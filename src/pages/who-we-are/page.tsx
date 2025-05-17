import { React, useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from "framer-motion"

import Category_4 from "../../assets/images/Category.png";

export default function WhoWeAre() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute inset-0  z-10" />
      <div className="absolute inset-0 bg-kolam-pattern opacity-10 z-5"></div>
        <img
          src={Category_4} // Placeholder for file-ADEPvTDBEgwpWUCipzMVhQ
          alt="Yatra's Cooking Cave"
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-amber-50 max-w-2xl"
          >
            Discover the heart behind Yatra’s Cooking Cave, crafting authentic Tamil meals with love and tradition.
          </motion.p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-amber-900 mb-6"
              >
                Our Mission
              </motion.h2>
              <div className="w-24 h-1 bg-amber-600 mb-6"></div>
              <div className="space-y-4 text-amber-800">
                <p>
                  At Yatra’s Cooking Cave, our mission is to bring the warmth of Tamil home cooking to your table, using
                  organic ingredients and traditional recipes.
                </p>
                <p>
                  Founded by Gayathri Priya, we aim to preserve the rich flavors of Tamil Nadu, from Thatta Payiru Biriyani
                  to Ragi Kalli, while promoting healthy, homemade meals.
                </p>
                <p>
                  We strive to create joyful dining experiences for daily tiffins and special events, delivering authenticity
                  and care in every bite.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
              <img
                src="/images/gayathri-kitchen.jpg"
                alt="Gayathri Priya's Kitchen"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-amber-900"
            >
              Meet Gayathri Priya
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              The passionate home chef behind Yatra’s Cooking Cave
            </motion.p>
          </div>

          <div className="grid grid-cols-1 max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-amber-200"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/gayathri-priya.jpg" // Placeholder for file-TZTzGhA1BJNQqhjqL3AUzx
                    alt="Gayathri Priya"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900">Gayathri Priya</h3>
                  <p className="text-amber-600 mb-2">Founder & Home Chef</p>
                  <p className="text-amber-700">
                    Since 2009, Gayathri Priya has been sharing her love for Tamil cuisine, starting with a small mess in
                    Chennai. Now operating from her Annanagar West home, she crafts dishes like Channa Pullav and Suttu
                    Kozhupu Varuval using organic ingredients from her kitchen garden.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Kitchen */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-amber-900"
            >
              Our Kitchen
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              A cozy home kitchen in Annanagar West, where tradition meets taste
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src="/images/kitchen-clay-pots.jpg"
                  alt="Tamil Clay Pots"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src="/images/kitchen-spices.jpg"
                  alt="Fresh Spices"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src="/images/kitchen-vegetables.jpg"
                  alt="Organic Vegetables"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src="/images/kitchen-cooking.jpg"
                  alt="Cooking in Progress"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-4 text-amber-800">
              <p>
                Our small home kitchen in Annanagar West is the heart of Yatra’s Cooking Cave, where Gayathri Priya crafts
                every dish with care.
              </p>
              <p>
                Using traditional Tamil cookware like clay pots and stone grinders, we preserve the authentic flavors of
                dishes like Red Rice Puttu and Palaya Sooru.
              </p>
              <p>
                Ingredients are sourced from our own kitchen garden and trusted local suppliers, ensuring organic, fresh
                produce for healthy meals.
              </p>
              <p>
                Every dish, from Carrot Halwa to Suttu Kozhupu Varuval, is prepared with love, maintaining hygiene and
                quality in our cozy setup.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Organic Ingredients</h4>
                  <p className="text-sm">Fresh produce from our kitchen garden</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Hygiene First</h4>
                  <p className="text-sm">Strict cleanliness in our home kitchen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-900/10 relative">
        <div className="absolute inset-0 bg-tamil-kolam-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-amber-900"
            >
              What Our Customers Say
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              Hear from those who’ve enjoyed Yatra’s homemade Tamil meals
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Gayathri’s Thatta Payiru Biriyani was a hit at our family gathering. The banana leaf setup made it feel like home!",
                name: "Vijay & Lakshmi",
                event: "Family Gathering",
              },
              {
                quote:
                  "The tiffin service is perfect for our office lunches. Channa Pullav and Carrot Halwa are always a treat!",
                name: "Priya Suresh",
                event: "Office Tiffin",
              },
              {
                quote:
                  "For our housewarming, Yatra’s Ragi Kalli and Suttu Kozhupu Varuval brought back childhood memories. Truly authentic!",
                name: "Karthik Rajan",
                event: "Housewarming",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-sm border border-amber-200"
              >
                <div className="mb-4">
                  <svg className="h-8 w-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-amber-800 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-amber-900">{testimonial.name}</p>
                  <p className="text-sm text-amber-700">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}