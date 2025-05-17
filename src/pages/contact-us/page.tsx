import type React from "react";
import { React, useState, useEffect, useCallback, useMemo } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import SectionTransition from "../../components/SectionTransition";
import FadeIn from "../../components/FadeIn";

import Category_4 from "../../assets/images/Category.png"; 

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    orderDate: "",
    guestCount: "",
    message: "",
    preferredContact: "email",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredContact: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // toast({
    //   title: "Form Submitted",
    //   description: "We'll get back to you shortly!",
    // })
    setFormData({
      name: "",
      email: "",
      phone: "",
      orderType: "",
      orderDate: "",
      guestCount: "",
      message: "",
      preferredContact: "email",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}

      <section className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute inset-0  z-10" />
      <div className="absolute inset-0 bg-kolam-pattern opacity-10 z-5"></div>
        <img
          src={Category_4} // Placeholder for file-ADEPvTDBEgwpWUCipzMVhQ
          alt="Contact Yatra's Cooking Cave"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          {/* <div className="absolute inset-0 z-20 flex items-center"> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-turmeric-50 max-w-2xl"
          >
            Reach out to Gayathri Priya for homemade Tamil tiffins or event
            catering
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <SectionTransition className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-tamil-kolam-pattern opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Phone className="h-6 w-6 text-turmeric-800" />,
                title: "Phone",
                details: ["+91 94440 12345"],
              },
              {
                icon: <Mail className="h-6 w-6 text-turmeric-800" />,
                title: "Email",
                details: ["yatrascookingcave@gmail.com"],
              },
              {
                icon: <MapPin className="h-6 w-6 text-turmeric-800" />,
                title: "Address",
                details: [
                  "No. 12, 2nd Street, Annanagar West",
                  "Chennai, Tamil Nadu - 600040",
                ],
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <Card className="border-turmeric-200">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-turmeric-100 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">
                      {item.title}
                    </h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-turmeric-700">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn direction="right">
              <h2 className="text-2xl font-bold text-purple-800 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-turmeric-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      className="border-turmeric-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="border-turmeric-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="orderType">Order Type</Label>
                    <Select
                      value={formData.orderType}
                      onValueChange={(value) =>
                        handleSelectChange("orderType", value)
                      }
                    >
                      <SelectTrigger className="border-turmeric-200">
                        <SelectValue placeholder="Select order type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tiffin">Daily Tiffin</SelectItem>
                        <SelectItem value="event">Event Catering</SelectItem>
                        <SelectItem value="custom">Custom Order</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="orderDate">Order Date</Label>
                    <Input
                      id="orderDate"
                      name="orderDate"
                      type="date"
                      value={formData.orderDate}
                      onChange={handleChange}
                      className="border-turmeric-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guestCount">Number of Guests/Boxes</Label>
                    <Select
                      value={formData.guestCount}
                      onValueChange={(value) =>
                        handleSelectChange("guestCount", value)
                      }
                    >
                      <SelectTrigger className="border-turmeric-200">
                        <SelectValue placeholder="Select count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5-10">5-10</SelectItem>
                        <SelectItem value="10-25">10-25</SelectItem>
                        <SelectItem value="25-50">25-50</SelectItem>
                        <SelectItem value="50+">50+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your tiffin or event needs (e.g., Thatta Payiru Biriyani, Ragi Kalli)"
                    className="min-h-[120px] border-turmeric-200"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup
                    value={formData.preferredContact}
                    onValueChange={handleRadioChange}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" />
                      <Label htmlFor="email-contact">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" />
                      <Label htmlFor="phone-contact">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="bg-turmeric-600 hover:bg-turmeric-700 text-white"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </FadeIn>

            {/* Map and Business Hours */}
            <FadeIn direction="left">
              <h2 className="text-2xl font-bold text-purple-800 mb-6">
                Find Us
              </h2>
              <div className="bg-turmeric-50 rounded-lg overflow-hidden h-[300px] relative mb-8">
                <img
                  src="/images/gayathri-kitchen.jpg" // Placeholder for file-TZTzGhA1BJNQqhjqL3AUzx
                  alt="Yatra's Cooking Cave Kitchen"
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-purple-800 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between">
                  <span className="text-turmeric-800">Monday - Saturday</span>
                  <span className="text-turmeric-800 font-medium">
                    8:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-turmeric-800">Sunday</span>
                  <span className="text-turmeric-800 font-medium">
                    10:00 AM - 2:00 PM
                  </span>
                </div>
              </div>

              <div className="bg-turmeric-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">
                  Book a Consultation
                </h3>
                <p className="text-turmeric-700 mb-4">
                  Discuss your tiffin or event catering needs directly with
                  Gayathri Priya.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="bg-turmeric-600 hover:bg-turmeric-700 text-white">
                    Schedule Now
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionTransition>
    </div>
  );
}
