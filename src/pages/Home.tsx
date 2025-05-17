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
      title: "கொங்குநாட்டு வெள்ளை பிரியாணி",
      description:
        "எங்கள் தனிச்சிறப்பான வெள்ளை பிரியாணியுடன் கொங்கு நாட்டின் அரிய பாரம்பரிய சுவையை அனுபவிக்கவும் — மென்மையான மசாலா, நறுந்தூள் இறைச்சி, மறக்க முடியாத சுவை!",
    },
    {
      src: slider_2,
      alt: "Banana Leaf Feast",
      title: "பாரம்பரிய வாழைஇலை உணவு",
      description:
        "தட்டைப் பயறு பிரியாணி, ராகி களி மற்றும் பலவகை உணவுகளை வாழை இலை மீது பரிமாறி, ஒரு பரம்பரிய தமிழ் உணவு அனுபவத்தை ரசிக்கவும்.",
    },
    // {
    //   src: slider_3,
    //   alt: "Tamil Sweets and Snacks",
    //   title: "Kongunattu White Biriyani",
    //   description:
    //     "Taste the royal heritage of Kongu Nadu with our signature White Biryani — subtle spices, tender meat, and unforgettable flavor!",
    // },
    {
      src: slider_4,
      alt: "Tamil Tiffin Service",
      title: "ஒவ்வொரு நிகழ்விற்கும் சிறந்த டிபன்",
      description:
        "பழையசூறு, செம்பரிசி புட்டு அல்லது கொண்டைக்கடலை புலாவுடன் எங்கள் சுகாதாரமான டிபன் பாக்ஸுகளை அலுவலகம் அல்லது வீட்டு கூடுகைகளுக்காக முன்பதிவு செய்யுங்கள்.",
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
               யாத்ராவின் தனிச்சிறப்பான உணவுகள்
              </h2>
              <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
              <p className="mt-4 text-turmeric-800 max-w-2xl mx-auto">
               உணர்வுபூர்வமான பிரியாணி முதல் ஊட்டச்சத்து மிகுந்த புட்டு வரை, தமிழ் வீட்டு சமையலின் ஆன்மாவை உங்கள் டேபிளில் கொண்டு வருகின்றோம்.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "கொங்குநாட்டு அரிசி பருப்பு சாதம்",
                image: Category_1,
                desc: "கொங்கு பகுதியின் எளிமையான ஆனால் உணர்வுப்பூர்வமான உணவு — அரிசி பருப்பு சாதம் அரிசி, பருப்பு மற்றும் மசாலாவை சேர்த்து சுவையான ஊட்டச்சத்து நிறைந்த உணவாக மாறுகிறது. எளிமையாகவும், உள்ளம் கொள்ளத்தக்கவையாகவும், ஒவ்வொரு முனைவிலும் பாரம்பரிய சுவையை கொண்டுள்ளது.",
                icon: <Utensils className="h-5 w-5 text-turmeric-600" />,
                popular: true,
              },
              {
                title: "கொங்குநாட்டு வெள்ளை பிரியாணி",
                image: Category_2,
                desc: "எங்கள் தனிச்சிறப்பான வெள்ளை பிரியாணியுடன் கொங்கு நாட்டின் அரசக்குடி பாரம்பரிய சுவையை அனுபவிக்கவும் — மென்மையான மசாலா, நன்கு வெந்த இறைச்சி, என்றும் நினைவில் நிலைக்கும் சுவை!",
                icon: <Gift className="h-5 w-5 text-turmeric-600" />,
              },
              {
                title: "சிவப்பு அரிசி புட்டு",
                image: Category_3,
                desc: "சிவப்பு அரிசி புட்டு என்பது செம்பரிசியால் தயாரிக்கப்படும் ஆரோக்கியமான மற்றும் இயற்கை நிறைந்த உணவு. மெதுவாக இடுப்பட்டி வேகவைத்து தயாரிக்கப்படும் இந்த டிஷ், பாரம்பரியத்தில் வேரூன்றிய, சுவையில் நிறைந்த தென்னிந்திய காலை உணவாகும்.",
                icon: <Calendar className="h-5 w-5 text-turmeric-600" />,
              },
              {
                title: "கொங்குநாட்டு சுண்டல் சோறு",
                image: Category_4,
                desc: "கொங்குநாட்டு சுண்டல் சோறு என்பது புரதம் நிறைந்த அருமையான சாதம். சுவையான பற்பல பருப்புகள் மற்றும் நாட்டுச்சுவை மசாலாவுடன் தயாரிக்கப்படுகிறது. இது கொங்கு நாட்டின் பாரம்பரியமான, ஆரோக்கியம் மிக்க மற்றும் திருப்தி தரும் உணவுப் பொருளாகும்.",
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
                      {/* <Button
                        variant="link"
                        className="mt-4 p-0 text-purple-600 hover:text-purple-800"
                      >
                        Learn more <ChevronRight className="h-4 w-4 ml-1" />
                      </Button> */}
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
              <h2 className="text-3xl font-bold text-purple-800">எங்கள் கதை</h2>
              <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
              <p className="mt-4 text-turmeric-800 max-w-2xl mx-auto">
               ஆசையும் சுவையும் நிறைந்த ஒரு பயணம், வீட்டு சமைப்பான தமிழ் உணவுகளை உங்கள் வீட்டுக்கு கொண்டு சேர்க்கும் முயற்சி.
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
                காயத்ரி பிரியா அவர்கள் நிறுவிய யாத்ரா’ஸ் குக்கிங் கேவ், 2009ஆம் ஆண்டு ஒரு சிறிய மெஸாக துவங்கி, உண்மையான தமிழ் உணவுகளை அன்போடு பரிமாறியது. சில வருட இடைவெளிக்குப் பிறகு, 2021ல் காயத்ரி அவர்கள் தன் ஆசையை மீண்டும் உயிர்ப்பித்தார், சென்னை அண்ணாநகர் வெஸ்ட் பகுதியில் உள்ள தன் வீட்டிலிருந்து சமைத்துத் தொடங்கினார்.

எங்களின் வீட்டுத் தோட்டத்தில் பயிரிடப்படும் ஆரோக்கியமான இயற்கை பொருட்களைக் கொண்டு, தட்டைப் பயறு பிரியாணி, ராகி களி, காரட் ஹல்வா போன்ற ஊட்டச்சத்து மிகுந்த உணவுகளை சமைக்கிறோம்.

எங்கள் நோக்கம் — ஒவ்வொரு வீட்டிலும் உண்டிய பாசமான வீட்டு சமைப்பை கொண்டு சென்று, ஆரோக்கியம், சுவை மற்றும் திருப்தியை வழங்குவதே.
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
                ஆர்டர் செய்வது எப்படி?
              </h2>
              <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
              <p className="mt-4 text-turmeric-800 max-w-2xl mx-auto">
                யாத்ராவின் வீட்டு சமைப்பான தமிழ் உணவுகளை உங்கள் வீட்டில் ருசிக்க சில எளிய படிகள்!
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
              வீட்டு சமைப்பின் அன்பை சுவையுங்கள்
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-turmeric-100">
              யாத்ரா’ஸ் குக்கிங் கேவிலிருந்து உங்கள் விருப்பமான தமிழ் உணவுகளை இன்று ஆர்டர் செய்து, ஆரோக்கியமான வீட்டு சமைப்பை அனுபவியுங்கள்!
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
