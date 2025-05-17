import { React, useState, useEffect, useCallback, useMemo } from 'react'
import {
  ChevronRight,
  Calendar,
  Users,
  Gift,
  Utensils,
  Truck,
  CheckCircle,
  ChefHat,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ImageSlider from "../components/ImageSlider";
import SectionTransition from "../components/SectionTransition";
import FadeIn from "../components/FadeIn";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import Category_1 from "../assets/images/Category_1.png"; 
import Category_2 from "../assets/images/Category_2.png"; 
import Category_3 from "../assets/images/Category_3.png"; 
import Category_4 from "../assets/images/Category.png"; 

import OurStory from "../assets/images/OurStory.png"; 

import slider_1 from "../assets/images/slider-1.png"; 
import slider_2 from "../assets/images/slider-2.png"; 
import slider_3 from "../assets/images/slider-4.png";
import slider_4 from "../assets/images/slider-4.png"; 
import slider_5 from "../assets/images/slider-5.png"; 

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderImages = [
    {
      src: slider_1,
      alt: "Yatra's Homemade Tamil Meal",
      title: "Kongunattu White Biriyani",
      description:
        "Taste the royal heritage of Kongu Nadu with our signature White Biryani — subtle spices, tender meat, and unforgettable flavor!",
    },
    {
      src: slider_2,
      alt: "Banana Leaf Feast",
      title: "Traditional Banana Leaf Meals",
      description:
        "Enjoy Thatta Payiru Biriyani, Ragi Kalli, and more, served on banana leaves for an authentic Tamil dining experience.",
    },
    {
      src: slider_3,
      alt: "Tamil Sweets and Snacks",
      title: "Kongunattu White Biriyani",
      description:
        "Taste the royal heritage of Kongu Nadu with our signature White Biryani — subtle spices, tender meat, and unforgettable flavor!",
    },
    {
      src: slider_4,
      alt: "Tamil Tiffin Service",
      title: "Tiffin for Every Occasion",
      description:
        "Pre-order our hygienic tiffin boxes with Palaya Sooru, Red Rice Puttu, or Channa Pullav for office or home gatherings.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ImageSlider images={sliderImages} />

      {/* Specialized Categories */}
       <SectionTransition className="py-16 bg-gradient-to-b from-white to-turmeric-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-kolam-pattern opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl font-bold text-purple-800">
                Yatra’s Signature Offerings
              </h2>
              <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
              <p className="mt-4 text-turmeric-800 max-w-2xl mx-auto">
                From hearty biriyanis to wholesome puttu, we bring the soul of
                Tamil home cooking to your table.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Kongunattu Arise paruppu Satham",
                image: Category_1,
                desc: "A humble yet hearty dish from the Kongu region — Arisi Paruppu Sadham blends rice, dal, and spices into pure comfort, Simple, soulful, and packed with traditional flavor in every bite.",
                icon: <Utensils className="h-5 w-5 text-turmeric-600" />,
                popular: true,
              },
              {
                title: "Kongunattu White Biriyani",
                image: Category_2,
                desc: "Taste the royal heritage of Kongu Nadu with our signature White Biryani — subtle spices, tender meat, and unforgettable flavor!",
                icon: <Gift className="h-5 w-5 text-turmeric-600" />,
              },
              {
                title: "Sevappu Arise Puttu",
                image: Category_3,
                desc: "Sevappu Arisi Puttu is a wholesome and earthy delight made from red rice, gently steamed to perfection A healthy South Indian breakfast rooted in tradition and rich in taste.",
                icon: <Calendar className="h-5 w-5 text-turmeric-600" />,
              },
              {
                title: "Kongunattu Sundal Sooru",
                image: Category_4,
                desc: "Kongunattu Sundal Sooru is a protein-rich rice dish made with flavorful legumes and rustic spices A traditional Kongu Nadu favorite that’s both nourishing and deeply satisfying.",
                icon: <Users className="h-5 w-5 text-turmeric-600" />,
              },
            ].map((service, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <Card className="border-turmeric-200 bg-white overflow-hidden relative h-full">
                  {service.popular && (
                    <div className="absolute top-0 right-0 w-16 h-16">
                      <div className="absolute transform rotate-45 bg-turmeric-600 text-white text-xs font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="h-48 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {service.icon}
                      <h3 className="font-semibold text-lg text-purple-800">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-turmeric-700">{service.desc}</p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Button
                        variant="link"
                        className="mt-4 p-0 text-purple-600 hover:text-purple-800"
                      >
                        Learn more <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <FadeIn direction="up" delay={0.4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/menu">
                  <Button className="bg-turmeric-600 hover:bg-purple-700 text-white">
                    Explore Full Menu <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </SectionTransition>

      {/* About Yatra’s Cooking Cave */}
      <SectionTransition className="py-16 bg-white relative" delay={0.2}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-temple-arch opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl font-bold text-purple-800">Our Story</h2>
              <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
              <p className="mt-4 text-turmeric-800 max-w-2xl mx-auto">
                A journey of passion and flavor, bringing homemade Tamil cuisine
                to your home.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <img
                src={OurStory}
                alt="Gayathri Priya in Kitchen"
                className="w-full h-64 object-cover rounded-lg"
              />
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-turmeric-800">
                Founded by Gayathri Priya, Yatra’s Cooking Cave began as a small
                mess in 2009, serving authentic Tamil dishes with love. After a
                brief hiatus, Gayathri revived her passion in 2021, cooking from
                her home in Annanagar West, Chennai. Using fresh, organic
                ingredients—many from our own kitchen garden—we craft wholesome
                meals like Thatta Payiru Biriyani, Ragi Kalli, and Carrot Halwa.
                Our mission is to bring the warmth of homemade food to every
                table, ensuring health, taste, and satisfaction.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about">
                  <Button className="mt-4 bg-turmeric-600 hover:bg-purple-700 text-white">
                    Learn More About Us{" "}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </SectionTransition>

      {/* Pre-Order Process */}
      <SectionTransition className="py-16 bg-white relative" delay={0.2}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-temple-arch opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl font-bold text-purple-800">
                How to Order
              </h2>
              <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
              <p className="mt-4 text-turmeric-800 max-w-2xl mx-auto">
                Simple steps to enjoy Yatra’s homemade Tamil meals at your
                doorstep!
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                title: "Choose Your Meal",
                desc: "Select from our menu of veg, non-veg, or sweet dishes.",
                icon: <Utensils className="h-6 w-6 text-white" />,
              },
              {
                title: "Pick Date & Event",
                desc: "Specify your event or delivery date for tiffin or catering.",
                icon: <Calendar className="h-6 w-6 text-white" />,
              },
              {
                title: "Confirm Order",
                desc: "Review and pay securely online or via cash on delivery.",
                icon: <CheckCircle className="h-6 w-6 text-white" />,
              },
              {
                title: "Fresh Preparation",
                desc: "Our team prepares your meal with organic ingredients.",
                icon: <ChefHat className="h-6 w-6 text-white" />,
              },
              {
                title: "Timely Delivery",
                desc: "Get hot, fresh food delivered to your home or venue.",
                icon: <Truck className="h-6 w-6 text-white" />,
              },
            ].map((step, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-turmeric-600 text-white flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-turmeric-700">{step.desc}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-turmeric-300 -z-10 transform -translate-x-1/2">
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-turmeric-600"></div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* CTA */}
      <SectionTransition
        className="py-16 bg-gradient-to-r from-turmeric-700 to-purple-800 text-white relative overflow-hidden"
        delay={0.5}
      >
        <div className="absolute inset-0 bg-kolam-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">
              Taste the Love of Home Cooking
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-turmeric-100">
              Order your favorite Tamil dishes from Yatra’s Cooking Cave and
              enjoy wholesome, homemade meals today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/order-booking">
                  <Button
                    size="lg"
                    className="bg-white text-purple-800 hover:bg-turmeric-100"
                  >
                    Order Now
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact-us">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-purple-800 hover:bg-turmeric-100"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </SectionTransition>
    </div>
  );
}
