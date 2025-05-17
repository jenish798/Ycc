import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import logo from "../assets/logo-1.png";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Pre-Order", path: "/pre-order" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-turmeric-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo} // Maps to logo.png or file-ADEPvTDBEgwpWUCipzMVhQ if confirmed as logo
              alt="Yatra's Cooking Cave Logo"
              className="h-14 w-35 shadow-sm"
            />
            
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`text-sm font-medium transition-colors hover:text-purple-800 relative ${
                isActive(route.path) ? "text-purple-800" : "text-turmeric-700"
              }`}
            >
              {route.name}
              {isActive(route.path) && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-turmeric-600"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/order-booking" className="flex items-center space-x-2">
              <Button className="bg-turmeric-600 hover:bg-turmeric-700 text-white">
                Pre-Order Now
              </Button>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6 text-purple-800" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white"
          >
            <nav className="flex flex-col gap-6 mt-10">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-purple-800 ${
                    isActive(route.path)
                      ? "text-purple-800"
                      : "text-turmeric-700"
                  }`}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {route.name}
                  </motion.div>
                </Link>
              ))}
              <Link to="/order-booking" className="flex items-center space-x-2">
                <Button className="bg-turmeric-600 hover:bg-turmeric-700 text-white mt-4">
                  Pre-Order Now
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
