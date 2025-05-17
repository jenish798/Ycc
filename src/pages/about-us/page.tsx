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
            யாத்ரா’ஸ் குக்கிங் கேவ் பற்றி
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-amber-50 max-w-2xl"
          >
            அன்புடன் மற்றும் புதிதும் இயற்கையுமான பொருட்களுடன் தயாரிக்கப்படும் எங்கள் வீட்டு தமிழ் உணவுகளுக்குப் பின்னுள்ள ஆவலை கண்டறியுங்கள்.
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
                எங்கள் கதை
              </motion.h2>
              <div className="w-24 h-1 bg-amber-600 mb-6"></div>
              <div className="space-y-4 text-amber-800">
                <p>
                  யாத்ரா’ஸ் குக்கிங் கேவ் என்றதை காயத்ரி பிரியா என்ற ஆர்வமிக்க வீட்டு சமையல் கலைஞர் நிறுவினார். 2009ஆம் ஆண்டு, சென்னை நகரில் ஒரு சிறிய மெஸுடன் தனது சமையல் பயணத்தை துவங்கினார். வயது இருபத்து மூன்று என்ற இளம் வயதிலேயே, பாரம்பரிய ரெசிபிக்களையும் تازா சிராப்பு பொருட்களையும் பயன்படுத்தி, உண்மையான தமிழ் சுவையை தன் சமூகத்திற்கு கொண்டு வந்தார்.
                </p>
                <p>
                  குடும்ப பொறுப்புகள் காரணமாக ஏற்பட்ட இடைவேளைக்கு பிறகு, காயத்ரி தனது சமையல் ஆவலை 2021ஆம் ஆண்டு மீண்டும் உயிர்ப்பித்தார். சென்னை அண்ணாநகர் வெஸ்ட் பகுதியில் உள்ள தன் வீட்டிலிருந்தே சமைத்துத் தொடங்கினார். தன் வீட்டுத் தோட்டத்தில் வளர்க்கப்படும் இயற்கையான காய்கறிகளை பயன்படுத்தி, தட்டைப் பயறு பிரியாணி, ராகி களி, காரட் ஹல்வா போன்ற ஆரோக்கிய உணவுகளை தயார் செய்து, இன்ஸ்டாகிராம் மற்றும் தனியார் பிளாட்ஃபாரங்களை மூலமாக ஆர்டர்களை வழங்கி வருகிறார்.
                </p>
                <p>
                  இன்று, யாத்ரா’ஸ் குக்கிங் கேவ் தனது சேவையை விரிவுபடுத்தும் பணியில் உள்ளது. வீட்டுச் சமைப்பின் பாசத்தை அதிகமான வீடுகள், அலுவலகங்கள் மற்றும் நிகழ்வுகளுக்கு கொண்டு செல்லும் நோக்கத்துடன், ஒவ்வொரு لقுமிலும் ஆரோக்கியம், சுவை மற்றும் திருப்தியை உறுதி செய்யிறது.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={OurStory}
                alt="Gayathri Priya Durai Preparing Tamil Meals"
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
              எங்கள் மதிப்பீடுகள்
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              உண்மையான தமிழ் உணவுக்கான எங்கள் அன்பும், ஆரோக்கியமான வீட்டு சமைப்புக்கான நெறிப்பாட்டும் எங்களை வழிநடத்துகின்றன.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "புதிதும் இயற்கையுமானதும்",
                description:
                  "ஆரோக்கியமும் சுவையும் நிறைந்த உணவுகளுக்காக, எங்கள் வீட்டுத் தோட்டத்தில் இருந்து பெறப்படும் புதிதும் இயற்கையுமான பல்வேறு பொருட்களை நாம் பயன்படுத்துகிறோம்.",
                icon: Fresh_Organic,
              },
              {
                title: "பாரம்பரிய தமிழ் சமையல் ரெசிபிகள்",
                description:
                  "தட்டைப் பயறு பிரியாணி முதல் செம்பரிசி புட்டு வரை எங்களுடைய உணவுகள் தமிழ் சமையல் பாரம்பரியத்தை மதித்து பின்பற்றுகின்றன.",
                icon: Fresh_Organic,
              },
              {
                title: "வாடிக்கையாளர் திருப்தி",
                description:
                  "ஒவ்வொரு உணவுமானும் மகிழ்ச்சியும் வீட்டுப் பாசமும் உங்கள் میزையில் சேரட்டும் என்பதற்காக அன்புடன் தயார் செய்யப்படுகிறது.",
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
             எங்கள் குழு
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              யாத்ரா’ஸ் குக்கிங் கேவின் இதயம் மற்றும் ஆத்மா, ஒவ்வொரு உணவையும் ஆவலுடன் உருவாக்கும் குழுவே!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Gayathri Priya Durai",
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
              எங்கள் பயணம்
            </motion.h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-amber-800"
            >
              சென்னையில் ஒரு சிறிய மெஸிலிருந்து வளர்ந்து வரும் வீட்டு சமையலறையின்வரை, இது எங்கள் சுவையும் ஆசையும் நிறைந்த பயணக் கதை.
            </motion.p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                year: "2009",
                title: "தொடக்கம்",
                desc: "காயத்ரி பிரியா சென்னை பகுதியில் ஒரு சிறிய மெஸை துவங்கி, சமூகத்திற்கு உண்மையான தமிழ் உணவுகளை பரிமாறத் தொடங்கினார்.",
              },
              {
                year: "2013",
                title: "ஒரு இடைவேளை",
                desc: "குடும்ப பொறுப்புகளால் சிறிது இடைவேளை எடுத்தார், ஆனால் சமையல் பற்றிய ஆசை தொடர்ந்து வலிமையாகவே இருந்தது.",
              },
              {
                year: "2021",
                title: "மீண்டும் துவக்கம்",
                desc: "வீட்டிலிருந்து யாத்ரா’ஸ் குக்கிங் கேவ் மீண்டும் துவங்கி, இன்ஸ்டாகிராம் மற்றும் தனியார் பிளாட்ஃபாரங்களின் மூலம் ஆர்டர்களை ஏற்க ஆரம்பித்தார்.",
              },
              {
                year: "2023",
                title: "எங்கள் சேவையை விரிவுபடுத்துவது",
                desc: "அண்ணாநகர் வெஸ்ட் பகுதியில் டிபன் சேவைகள் மற்றும் உள்ளூர் நிகழ்வுகளுக்கான கேட்டரிங் சேவைகளை வழங்கத் தொடங்கினார்.",
              },
              {
                year: "2025",
                title: "கனவுகளை நனவாக்கும் பயணம்",
                desc: "அதிக வீடுகளுக்கு வீட்டு சமைப்பான தமிழ் உணவுகளை வழங்க, யாத்ரா’ஸ் குக்கிங் கேவ் செயலியை அறிமுகப்படுத்தினோம்.",
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