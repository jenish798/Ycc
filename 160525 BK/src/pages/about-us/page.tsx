import { React, useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from "framer-motion"

import OurStory from "../../assets/images/OurStory.png"; 
import Fresh_Organic from "../../assets/images/Fresh_Organic.png"; 

export default function AboutUs() {
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
          src={OurStory} // Placeholder for file-ADEPvTDBEgwpWUCipzMVhQ
          alt="Yatra's Tamil Homemade Meal"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Yatra's Cooking Cave
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-amber-50 max-w-2xl"
          >
            Discover the passion behind our homemade Tamil meals, crafted with love and fresh, organic ingredients.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-amber-900 mb-6"
              >
                Our Story
              </motion.h2>
              <div className="w-24 h-1 bg-amber-600 mb-6"></div>
              <div className="space-y-4 text-amber-800">
                <p>
                  Yatra's Cooking Cave was founded by Gayathri Priya, a passionate home chef who began her culinary
                  journey in 2009 with a small mess in Chennai. At just 23, she brought authentic Tamil flavors to her
                  community, using traditional recipes and fresh ingredients.
                </p>
                <p>
                  After a hiatus due to family commitments, Gayathri revived her passion in 2021, cooking from her home in
                  Annanagar West. Using organic vegetables from her own kitchen garden, she crafts wholesome dishes like
                  Thatta Payiru Biriyani, Ragi Kalli, and Carrot Halwa, serving orders through Instagram and private
                  platforms.
                </p>
                <p>
                  Today, Yatra’s Cooking Cave is on a mission to expand, bringing the warmth of homemade Tamil meals to
                  more homes, offices, and events, ensuring health, taste, and satisfaction in every bite.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={OurStory}
                alt="Gayathri Priya Preparing Tamil Meals"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-amber-900"
            >
              Our Values
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              Guided by our love for authentic Tamil cuisine and commitment to healthy, homemade food.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fresh & Organic",
                description:
                  "We use fresh, organic ingredients, many from our own kitchen garden, for healthy and flavorful meals.",
                icon: Fresh_Organic,
              },
              {
                title: "Authentic Tamil Recipes",
                description:
                  "Our dishes, from Thatta Payiru Biriyani to Red Rice Puttu, honor Tamil culinary traditions.",
                icon: Fresh_Organic,
              },
              {
                title: "Customer Satisfaction",
                description:
                  "Every meal is crafted with care to bring joy and the warmth of home to your table.",
                icon: Fresh_Organic,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-8 rounded-lg shadow-sm border border-amber-200 flex flex-col items-center"
              >
                <img
                  src={value.icon}
                  alt={`${value.title} Icon`}
                  className="w-16 h-16 mb-4 object-cover rounded-full"
                />
                <h3 className="text-xl font-semibold text-amber-900 mb-4 text-center">{value.title}</h3>
                <p className="text-amber-700 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-amber-900"
            >
              Our Team
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              The heart and soul behind Yatra’s Cooking Cave, crafting every dish with passion.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Gayathri Priya",
                role: "Founder & Head Chef",
                image: "/images/gayathri-priya.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-amber-900">{member.name}</h3>
                <p className="text-amber-700">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-amber-900/10 relative">
        <div className="absolute inset-0 bg-tamil-kitchen-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-amber-900"
            >
              Our Journey
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              From a small mess in Chennai to a growing home kitchen, our story of passion and flavor.
            </motion.p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                year: "2009",
                title: "The Beginning",
                desc: "Gayathri Priya started a small mess in Chennai, serving authentic Tamil meals to the community.",
              },
              {
                year: "2013",
                title: "A Pause",
                desc: "Took a break due to family commitments, but the passion for cooking remained strong.",
              },
              {
                year: "2021",
                title: "Revival",
                desc: "Restarted Yatra’s Cooking Cave from home, taking orders via Instagram and private platforms.",
              },
              {
                year: "2023",
                title: "Expanding Reach",
                desc: "Began serving tiffin services and catering for local events in Annanagar West.",
              },
              {
                year: "2025",
                title: "Growing the Dream",
                desc: "Launched the Yatra’s Cooking Cave app to bring homemade Tamil meals to more homes.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-amber-800 text-white text-center py-2 px-4 rounded-md">{milestone.year}</div>
                </div>
                <div className="flex-grow bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">{milestone.title}</h3>
                  <p className="text-amber-700">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}