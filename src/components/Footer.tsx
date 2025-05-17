import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import logo from "../assets/logo-1.png";
import footerBg from "../assets/images/footer-bg.png";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription submitted");
    // toast({
    //   title: "Subscribed!",
    //   description: "Thank you for joining our newsletter.",
    // })
  };

  return (
    <footer
      className="text-turmeric-100 relative overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 to-turmeric-700/80  z-10" />
      <motion.div
        className="container mx-auto px-4 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center space-x-2">
                
              <h3 className="text-xl font-bold text-turmeric-600">
                Yatra's <span className="text-turmeric-800">Cooking Cave</span>
              </h3>
            </div>
            <p className="text-turmeric-800">
              காயத்ரி பிரியா வழங்கும் வீட்டு தமிழ் சமையல், அண்ணாநகர் வெஸ்ட், சென்னை மூலம் இயற்கை பொருட்களுடன் உண்மையான டிபன் மற்றும் சிறு நிகழ்வு கேட்டரிங் சேவைகள்.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com/yatrascookingcave"
                className="hover:text-turmeric-800"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="https://instagram.com/yatrascookingcave"
                className="hover:text-turmeric-800"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="https://twitter.com/yatrascookingcave"
                className="hover:text-turmeric-800"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-turmeric-800">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Services", path: "/services" },
                { name: "Who We Are", path: "/who-we-are" },
                { name: "Contact Us", path: "/contact-us" },
                { name: "PreOrder", path: "/pre-order" },
              ].map((link) => (
                <li key={link.path}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      to={link.path}
                      className="text-sm text-turmeric-600 hover:text-turmeric-800 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-turmeric-800">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-turmeric-800">
                  No. 12, 2nd Street, Annanagar West, Chennai, Tamil Nadu -
                  600040
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-turmeric-800">+91 75501 77722 <br />+91 97106 09299</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-turmeric-800">yatrascookingcave@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-turmeric-800">
              Subscribe for updates on new dishes, offers, and events.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col space-y-2"
            >
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-turmeric-800 border-turmeric-800 text-white placeholder:text-turmeric-300"
                required
              />
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button className="bg-turmeric-600 hover:bg-turmeric-500 text-turmeric-800 w-full">
                  Subscribe
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-turmeric-800 mt-12 pt-6 text-center text-turmeric-800"
          variants={itemVariants}
        >
          <p>
            © {new Date().getFullYear()} Yatra's Cooking Cave. All rights
            reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
