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
            நாங்கள் யார்
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-amber-50 max-w-2xl"
          >
            அன்பும் பாரம்பரியமும் கொண்ட உண்மையான தமிழ் உணவுகளை உருவாக்கும் யாத்ரா’ஸ் குக்கிங் கேவின் இதயத்தை கண்டறியுங்கள்.
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
                எங்கள் நோக்கம்
              </motion.h2>
              <div className="w-24 h-1 bg-amber-600 mb-6"></div>
              <div className="space-y-4 text-amber-800">
                <p>
                 யாத்ரா’ஸ் குக்கிங் கேவ்-இல், இயற்கை பொருட்கள் மற்றும் பாரம்பரிய சமையல் முறைகளைப் பயன்படுத்தி, தமிழ் வீட்டு சமையலின் பாசத்தை உங்கள் மேசைக்கு கொண்டு செல்லுவதே எங்கள் பணி ஆகும்.
                </p>
                <p>
                  காயத்ரி பிரியா துரை நிறுவிய யாத்ரா’ஸ் குக்கிங் கேவ், தட்டைப் பயறு பிரியாணி முதல் ராகி களி வரை தமிழ் நாட்டின் செழிப்பான சுவைகளை பாதுகாப்பதுடன், ஆரோக்கியமான வீட்டு உணவுகளையும் மேம்படுத்துவதே எமது நோக்கமாகும்.
                </p>
                <p>
                  தினசரி டிபன்களுக்கும் சிறப்பு நிகழ்வுகளுக்கும் மகிழ்ச்சிகரமான உணவு அனுபவத்தை உருவாக்க, ஒவ்வொரு உணவிலும் உண்மையையும் அக்கறையையும் வழங்க நாங்கள் முயற்சிக்கிறோம்.
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
              காயத்ரி பிரியா துரை சந்திக்கவும்
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              யாத்ரா’ஸ் குக்கிங் கேவின் பின்னணி ஆர்வமிக்க வீட்டு சமையல்காரி
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
                  <h3 className="text-xl font-semibold text-amber-900">காயத்ரி பிரியா துரை</h3>
                  <p className="text-amber-600 mb-2">நிறுவனர் மற்றும் வீட்டு சமையல்காரர்</p>
                  <p className="text-amber-700">
                    2009 முதல் காயத்ரி பிரியா தமிழ் சமையலுக்கான தனது அன்பை சென்னை பகுதியில் ஒரு சிறிய மெஸுடன் துவங்கி பகிர்ந்து வருகின்றார். இப்போது அண்ணாநகர் வெஸ்ட் உள்ள தன் வீட்டிலிருந்து இயற்கை பொருட்களான வீட்டுத் தோட்டத்தில் இருந்து பெறப்பட்ட பொருட்களை பயன்படுத்தி கொண்டைக்கடலை புலாவும் சுட்டு கொழுப்பு வறுவலும் போன்ற உணவுகளை சமைக்கிறார்.
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
              எங்கள் சமையலறை
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              அண்ணாநகர் வெஸ்டில் அமைந்த அமைதியான வீட்டு சமையலறை, பாரம்பரியமும் சுவையும் சேரும் இடம்
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
                அண்ணாநகர் வெஸ்டில் உள்ள எங்கள் சிறிய வீட்டு சமையலறை, யாத்ரா’ஸ் குக்கிங் கேவின் இதயம் ஆகும், அங்கே காயத்ரி பிரியா ஒவ்வொரு உணவையும் அக்கறையுடன் தயார் செய்கிறார்.
              </p>
              <p>
                மண் பாத்திரங்கள், கல் அரைக்கல்கள் போன்ற பாரம்பரிய தமிழ் சமையல் சாதனங்களைப் பயன்படுத்தி, செம்பரிசி புட்டு மற்றும் பழையசூறு போன்ற உணவுகளின் உண்மையான சுவையை நாங்கள் பாதுகாக்கின்றோம்.
              </p>
              <p>
                ஆரோக்கியமான உணவுகளுக்காக, இயற்கை மற்றும் تازா பொருட்களை உறுதிப்படுத்தி, எங்கள் வீட்டுத் தோட்டத்திலும் நம்பகமான உள்ளூர் சப்ளையர்களிடமிருந்தும் பொருட்கள் பெறப்படுகின்றன.
              </p>
              <p>
                காரட் ஹல்வாவிலிருந்து சுட்டு கொழுப்பு வறுவலுக்கு வரை ஒவ்வொரு உணவும் அன்புடன், சுகாதாரமும் தரமும் காக்கப்பட்ட நமது அமைதியான சூழலில் தயாரிக்கப்படுகிறது.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">இயற்கை பொருட்கள்</h4>
                  <p className="text-sm">எங்கள் வீட்டுத் தோட்டத்தில் இருந்து تازா பொருட்கள்</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">சுகாதாரமே முதன்மை</h4>
                  <p className="text-sm">எங்கள் வீட்டு சமையலறையில் முழுமையான சுத்தம்</p>
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
              எங்கள் வாடிக்கையாளர்கள் கூறுவது
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              யாத்ரா’ஸ் வீட்டு தமிழ் உணவுகளை ரசித்தவர்கள் கூறும் கருத்துகள்
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "காயத்ரி அவர்களின் தட்டைப் பயறு பிரியாணி எங்கள் குடும்பக் கூடுகையில் பெரும் வரவேற்பை பெற்றது. வாழை இலை பரிமாற்றம் வீட்டுப்போல் உணர்ச்சியை கொடுத்தது!",
                name: "விஜய் & லட்சுமி",
                event: "குடும்பக் கூடுதல்",
              },
              {
                quote:
                  "எங்கள் அலுவலக மதிய உணவுகளுக்கு இந்த டிபன் சேவை சரியான தேர்வாகும். கொண்டைக்கடலை புலாவும் காரட் ஹல்வாவும் எப்போதும் இனிய பரிமாணமாக இருக்கும்!",
                name: "பிரியா சுரேஷ்",
                event: "அலுவலக டிபன்",
              },
              {
                quote:
                  "எங்கள் வீட்டு விழாவிற்கு, யாத்ராவின் ராகி களி மற்றும் சுட்டு கொழுப்பு வறுவல் சிறுவயது நினைவுகளை மீண்டும் உயிர்ப்பித்தன. உண்மையான தமிழ் சுவை!",
                name: "கார்த்திக் ராஜன்",
                event: "வீட்டுவிழா",
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