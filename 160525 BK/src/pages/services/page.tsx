import { React, useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

import Category_2 from "../../assets/images/Category_2.png";

import Daily_Tiffin_Service_1 from "../../assets/images/Daily_Tiffin_Service_1.png";
import Daily_Tiffin_Service_2 from "../../assets/images/Daily_Tiffin_Service_2.png";
import Daily_Tiffin_Service_3 from "../../assets/images/Daily_Tiffin_Service_3.png";
import Daily_Tiffin_Service_4 from "../../assets/images/Daily_Tiffin_Service_4.png";

export default function Services() {
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
          src={Category_2} // Placeholder for file-ADEPvTDBEgwpWUCipzMVhQ
          alt="Yatra's Tamil Homemade Meal"
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
            Yatra’s Cooking Cave Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-amber-50 max-w-2xl"
          >
            Enjoy authentic Tamil homemade meals, crafted with organic
            ingredients and delivered for your daily needs or special events.
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-amber-900"
            >
              Our Offerings
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              From daily tiffins to event catering, we bring the warmth of Tamil
              home cooking to you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Daily Tiffin Service",
                desc: "Freshly prepared Tamil tiffins like Red Rice Puttu, Palaya Sooru, and Channa Pullav, delivered to your home or office.",
                image: Daily_Tiffin_Service_1,
              },
              {
                title: "Event Catering",
                desc: "Authentic Tamil meals for weddings, pujas, and gatherings, featuring Thatta Payiru Biriyani and banana leaf setups.",
                image: Daily_Tiffin_Service_2, // Placeholder for file-TZTzGhA1BJNQqhjqL3AUzx
              },
              {
                title: "Non-Veg Specials",
                desc: "Spicy Suttu Kozhupu Varuval, Ragi Kalli with Chicken Kulambu, and other non-veg delights for your cravings.",
                image: Daily_Tiffin_Service_3,
              },
              {
                title: "Sweets & Starters",
                desc: "Homemade Carrot Halwa, Gulab Jamun, and spicy starters to complement your meals or events.",
                image: Daily_Tiffin_Service_4,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="overflow-hidden border-amber-200">
                  <div className="h-64 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-amber-700 mb-4">{service.desc}</p>
                    <Button
                      variant="outline"
                      className="text-amber-800 border-amber-300 hover:bg-amber-50"
                    >
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Options */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-amber-900"
            >
              Our Menu Packages
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              Explore our curated Tamil meal packages, crafted with organic
              ingredients for every occasion.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Veg Tiffin Combo",
                items: [
                  "Thatta Payiru Biriyani or Channa Pullav",
                  "Potato Fry or Brinjal Fry",
                  "Cucumber/Carrot Raitha",
                  "Pappad",
                ],
                price: "₹230–₹250 per 500ml box (min 5 orders)",
                icon: Daily_Tiffin_Service_1,
              },
              {
                title: "Non-Veg Event Package",
                items: [
                  "Palaya Sooru with Dry Fish Fry",
                  "Suttu Kozhupu Varuval",
                  "Chicken Kulambu or Meen Kulambu",
                  "Banana (Red/Nenthiram)",
                  "Carrot Halwa",
                ],
                price: "₹260–₹300 per person",
                icon: Daily_Tiffin_Service_2,
              },
              {
                title: "Traditional Feast",
                items: [
                  "Thatta Payiru Biriyani",
                  "Ragi Kalli with Keerai Kadasal",
                  "Red Rice Puttu with Brown Sugar",
                  "Suttu Kozhupu Varuval",
                  "Cucumber/Carrot Raitha",
                  "Gulab Jamun",
                ],
                price: "₹350 per person",
                icon: Daily_Tiffin_Service_3,
              },
            ].map((menu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-8 rounded-lg shadow-sm border border-amber-200 flex flex-col items-center"
              >
                <img
                  src={menu.icon}
                  alt={`${menu.title} Icon`}
                  className="w-16 h-16 mb-4 object-cover rounded-full"
                />
                <h3 className="text-xl font-semibold text-amber-900 mb-4 text-center">
                  {menu.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {menu.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span className="text-amber-700">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* <p className="font-medium text-amber-900">{menu.price}</p> */}
                <Link
                  to="/order-booking"
                  className="flex items-center space-x-2"
                >
                  <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white">
                    Book This Package
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-amber-800 mb-4"
            >
              Need a custom Tamil menu? We’ll craft it to your taste!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact-us">
                <Button
                  variant="outline"
                  className="text-amber-800 border-amber-300 hover:bg-amber-50"
                >
                  Request Custom Menu
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-tamil-kitchen-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-amber-900"
            >
              How It Works
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              Ordering your homemade Tamil meals is simple and seamless.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Place Your Order",
                desc: "Select your tiffin or event package via our app or contact us.",
              },
              {
                step: "2",
                title: "Customize Menu",
                desc: "Choose dishes like Thatta Payiru Biriyani or create a custom menu.",
              },
              {
                step: "3",
                title: "Confirm & Pay",
                desc: "Finalize your order with secure payment or cash on delivery.",
              },
              {
                step: "4",
                title: "Fresh Delivery",
                desc: "We prepare and deliver your meal hot and fresh to your doorstep.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-amber-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-amber-700">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-red-800 text-white relative">
        <div className="absolute inset-0 bg-tamil-meal-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            Bring Tamil Home Cooking to Your Table
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8 text-amber-100"
          >
            From daily tiffins to grand feasts, Yatra’s Cooking Cave delivers
            the authentic taste of Tamil Nadu.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/order-booking">
                <Button
                  size="lg"
                  className="bg-white text-amber-900 hover:bg-amber-100"
                >
                  Order Now
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
