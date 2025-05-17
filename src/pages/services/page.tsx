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
            யாத்ரா’ஸ் குக்கிங் கேவ் சேவைகள்
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-amber-50 max-w-2xl"
          >
            இயற்கை பொருட்களுடன் தயாரிக்கப்பட்ட உண்மையான தமிழ் வீட்டு உணவுகளை, உங்கள் தினசரி தேவைகள் அல்லது சிறப்பு நிகழ்வுகளுக்காக சுவையுடன் அனுபவிக்கவும்.
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
              எங்கள் சிறப்பு உணவுகள்
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              தினசரி டிபன்கள் முதல் நிகழ்வுகளுக்கான கேட்டரிங் வரை, தமிழ் வீட்டு சமைப்பின் பாசத்தை உங்கள் வீட்டிற்கு கொண்டு சேர்க்கிறோம்.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "தினசரி டிபன் சேவை",
                desc: "செம்பரிசி புட்டு, பழைய சோறு, மற்றும் கொண்டைக்கடலை புலாவ் போன்ற புதிதாக தயாரிக்கப்பட்ட தமிழ் டிபன்கள், உங்கள் வீடு அல்லது அலுவலகத்திற்கு நேரடியாக வழங்கப்படுகின்றன.",
                image: Daily_Tiffin_Service_1,
              },
              {
                title: "நிகழ்வுக்கான கேட்டரிங் சேவை",
                desc: "மணநிகழ்வுகள், பூஜைகள் மற்றும் கூடுகைகள் ஆகியவற்றிற்காக தட்டைப் பயறு பிரியாணி மற்றும் வாழை இலை பரிமாற்றத்துடன் உண்மையான தமிழ் உணவுகள் வழங்கப்படுகின்றன.",
                image: Daily_Tiffin_Service_2, // Placeholder for file-TZTzGhA1BJNQqhjqL3AUzx
              },
              {
                title: "சிறப்பு நான்வெஜ் உணவுகள்",
                desc: "காரமான சுட்டுக் கொழுப்பு வறுவல், சிக்கன் குழம்புடன் ராகி களி மற்றும் உங்கள் ஆசையைத் திருப்திப்படுத்தும் பிற நான்வெஜ் சுவைமிக்க உணவுகள்.",
                image: Daily_Tiffin_Service_3,
              },
              {
                title: "இனிப்புகள் மற்றும் தொடக்க உணவுகள்",
                desc: "வீட்டில் தயாரிக்கப்பட்ட காரட் ஹல்வா, குலாப் ஜாமூன் மற்றும் காரமான ஸ்டார்டர்கள், உங்கள் உணவோடு அல்லது நிகழ்வுகளோடு சிறப்பாக ஒட்டும் வகையில் வழங்கப்படுகின்றன.",
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
              எங்கள் உணவுத் தொகுப்புகள்
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              ஒவ்வொரு நிகழ்விற்கும் பொருத்தமான வகையில், இயற்கை பொருட்களுடன் சிறப்பாகத் தயாரிக்கப்பட்ட எங்கள் தமிழ் உணவுத் தொகுப்புகளை அறிந்துகொள்ளுங்கள்.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "சைவ டிபன் தொகுப்பு",
                items: [
                  "தட்டைப் பயறு பிரியாணி அல்லது கொண்டைக்கடலை புலாவ்",
                  "உருளைக்கிழங்கு வறுவல் அல்லது கத்திரிக்காய் வறுவல்",
                  "வெள்ளரிக்காய்/காரட் ரைதா",
                  "அப்பளம்",
                ],
                price: "₹230–₹250 per 500ml box (min 5 orders)",
                icon: Daily_Tiffin_Service_1,
              },
              {
                title: "நான்வெஜ் நிகழ்வு தொகுப்பு",
                items: [
                  "பழைய சோறு மற்றும் கருவாடு வறுவல்",
                  "சுட்டு கொழுப்பு வறுவல்",
                  "சிக்கன் குழம்பு அல்லது மீன் குழம்பு",
                  "வாழைப்பழம் (சிவப்பு / நெந்திரம்)",
                  "காரட் ஹல்வா",
                ],
                price: "₹260–₹300 per person",
                icon: Daily_Tiffin_Service_2,
              },
              {
                title: "பாரம்பரிய விருந்து",
                items: [
                  "தட்டைப் பயறு பிரியாணி",
                  "ராகி களி மற்றும் கீரை கடசல்",
                  "செம்பரிசி புட்டு மற்றும் கருப்புச்சீனி",
                  "சுட்டு கொழுப்பு வறுவல்",
                  "வெள்ளரிக்காய்/காரட் ரைதா",
                  "குலாப் ஜாமூன்",
                ],
                price: "₹350 per person",
                icon: Daily_Tiffin_Service_3,
              },
              {
                title: "பரம்பரியக் கருவிகள்",
                items: [
                  "கல் அரைக்கல் மற்றும் மண் பாத்திரங்களில் சமைத்தல்",
                  "இயற்கை மற்றும் ஆரோக்கிய உணவு சுவைகள்",
                  "பாரம்பரிய சமையல் முறைகளை காப்பது",
                  "சுத்தம் மற்றும் தரம் உறுதி",
                ],
                price: "₹260–₹300 per person",
                icon: Daily_Tiffin_Service_1,
              },
              {
                title: "ஆரோக்கியக் காய்கறிகள் மற்றும் பச்சைகள்",
                items: [
                  "இயற்கை தோட்டத்தில் இருந்து நேரடி பொருட்கள்",
                  "ரசாயனங்கள் இல்லாத புதிதான காய்கறிகள்",
                  "நாளாந்த உணவுக்கான மிகச் சிறந்த தேர்வு",
                  "உடல் ஆரோக்கியத்திற்கு ஆதரவு",
                ],
                price: "₹260–₹300 per person",
                icon: Daily_Tiffin_Service_2,
              },
              {
                title: "சிறப்பு விருந்தினர்கள்",
                items: [
                  "வீட்டு சமையலின் அற்புத சுவைகளை அனுபவிக்க",
                  "தனிப்பட்ட விருப்பங்களுக்கான மெனு தயார்",
                  "நிகழ்வுகளுக்கான சிறப்பு கேட்டரிங்",
                  "உன்னதமான சேவை மற்றும் தரம்",
                ],
                price: "₹260–₹300 per person",
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
                    இந்த தொகுப்பை முன்பதிவு செய்யவும்
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
              உங்களுக்கேற்ற தனிப்பட்ட தமிழ் மெனு வேண்டுமா? உங்கள் சுவைக்கு ஏற்ப நாங்கள் தயார் செய்து தருகிறோம்!
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
                 தனிப்பட்ட மெனுவுக்கான கோரிக்கை
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
              இது எப்படி செயல்படுகிறது
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              உங்கள் வீட்டு தமிழ் உணவுகளை ஆர்டர் செய்வது எளிதும் சீரியுமானும் ஆகும்.
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
            தமிழ் வீட்டு சமையலை உங்கள் மேசைக்கு கொண்டு வாருங்கள்
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8 text-amber-100"
          >
            தினசரி டிபன்களிலிருந்து பெரிய விருந்துகளுக்கு வரை, யாத்ரா’ஸ் குக்கிங் கேவ் தமிழ் நாட்டின் உண்மையான சுவையை வழங்குகிறது.
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
                  className="bg-white text-purple-800 hover:bg-turmeric-100"
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
