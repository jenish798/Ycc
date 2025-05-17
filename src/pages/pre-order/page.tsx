import { React, useState, useEffect, useCallback, useMemo } from 'react'
import { Link } from "react-router-dom"
import { Calendar, Clock, MapPin, AlertCircle, Truck, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

import Category_3 from "../../assets/images/Category_3.png"; 

export default function PreOrder() {
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
          src={Category_3} // Placeholder for file-ADEPvTDBEgwpWUCipzMVhQ
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
            Pre-Order Your Tamil Meal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-turmeric-50 max-w-2xl"
          >
            Easily pre-order authentic Tamil cuisine, crafted with organic ingredients for your daily tiffins or special events.
          </motion.p>
        </div>
      </section>

      {/* Pre-Order Steps */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-tamil-kitchen-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-purple-800"
            >
              How Pre-Ordering Works
            </motion.h2>
            <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-turmeric-800"
            >
              Order fresh Tamil meals like Thatta Payiru Biriyani or Ragi Kalli with our simple pre-order process.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-turmeric-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">1. Select Date & Event</h3>
                    <p className="text-turmeric-700">
                      Choose your delivery date for tiffins or event catering. Book 3 days in advance for tiffins, 7 days for events.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-turmeric-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8 text-purple-600"
                      >
                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                        <path d="M7 2v20" />
                        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">2. Choose Your Menu</h3>
                    <p className="text-turmeric-700">
                      Select dishes like Channa Pullav or Suttu Kozhupu Varuval, or customize your menu for events.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-turmeric-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">3. Confirm & Pay</h3>
                    <p className="text-turmeric-700">
                      Review your order, confirm delivery details, and pay securely or choose cash on delivery.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-turmeric-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8 text-purple-600"
                      >
                        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                        <line x1="6" x2="18" y1="17" y2="17" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">4. Food Preparation</h3>
                    <p className="text-turmeric-700">
                      Gayathri Priya prepares your meal with organic ingredients from her kitchen garden on delivery day.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="border-turmeric-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Truck className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">5. Delivery</h3>
                    <p className="text-turmeric-700">
                      Your meal is delivered hot and fresh, 30–60 minutes before your event or tiffin time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Details */}
      <section className="py-16 bg-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-tamil-meal-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-purple-800"
            >
              Delivery Details
            </motion.h2>
            <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-turmeric-800"
            >
              All you need to know about our tiffin and event delivery process in Chennai.
            </motion.p>
          </div>

          <Tabs defaultValue="timeline" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="packaging">Packaging</TabsTrigger>
              <TabsTrigger value="coverage">Coverage Area</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
            </TabsList>
            <TabsContent value="timeline" className="bg-white p-6 rounded-lg border border-turmeric-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Delivery Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-turmeric-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-purple-700">Tiffin Delivery</p>
                    <p className="text-turmeric-700">Morning: 7–9 AM, Evening: 5–7 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-turmeric-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-purple-700">Event Catering (Morning, 12 PM)</p>
                    <p className="text-turmeric-700">Delivery between 6–8 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-turmeric-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-purple-700">Event Catering (Afternoon/Evening, 12 PM)</p>
                    <p className="text-turmeric-700">Delivery 30–60 minutes before event start</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-turmeric-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-purple-700">Custom Timing</p>
                    <p className="text-turmeric-700">Contact us for special delivery requests, subject to availability.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="packaging" className="bg-white p-6 rounded-lg border border-turmeric-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Food Packaging</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-purple-700 mb-2">Tiffin Boxes</h4>
                  <p className="text-turmeric-700 mb-4">
                    Stainless steel or eco-friendly containers for daily tiffins, ensuring hygiene and freshness.
                  </p>
                  <h4 className="font-medium text-purple-700 mb-2">Temperature Control</h4>
                  <p className="text-turmeric-700">
                    Insulated bags keep meals like Red Rice Puttu hot until delivery.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-purple-700 mb-2">Event Catering</h4>
                  <p className="text-turmeric-700 mb-4">
                    Banana leaf setups or biodegradable containers for authentic Tamil dining experiences.
                  </p>
                  <h4 className="font-medium text-purple-700 mb-2">Bulk Orders</h4>
                  <p className="text-turmeric-700">
                    Large eco-friendly trays for Thatta Payiru Biriyani and other dishes, easy to serve.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="coverage" className="bg-white p-6 rounded-lg border border-turmeric-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Delivery Coverage Area</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-turmeric-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-purple-700">Annanagar West & Nearby</p>
                    <p className="text-turmeric-700">Free delivery within 5 km of Annanagar West, Chennai.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-turmeric-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-purple-700">Greater Chennai</p>
                    <p className="text-turmeric-700">5–15 km radius with a small delivery fee.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-turmeric-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-purple-700">Outside Chennai</p>
                    <p className="text-turmeric-700">
                      Event catering available for nearby cities with advance notice and minimum order.
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-purple-700 font-medium">
                    Contact us to confirm delivery to your location in Chennai.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="policies" className="bg-white p-6 rounded-lg border border-turmeric-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Order Policies</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-purple-700 mb-2">Minimum Order Requirements</h4>
                  <ul className="list-disc pl-5 text-turmeric-700 space-y-1">
                    <li>Tiffin orders: Minimum 5 boxes</li>
                    <li>Event catering: Minimum 10 persons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-700 mb-2">Advance Booking Requirements</h4>
                  <ul className="list-disc pl-5 text-turmeric-700 space-y-1">
                    <li>Tiffin orders: 3 days in advance</li>
                    <li>Event catering: 7 days in advance</li>
                    <li>Last-minute orders subject to availability (extra charges may apply)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-700 mb-2">Modification & Cancellation</h4>
                  <ul className="list-disc pl-5 text-turmeric-700 space-y-1">
                    <li>Menu changes: Up to 2 days before delivery</li>
                    <li>Quantity increase: Up to 2 days before delivery</li>
                    <li>Quantity decrease: Up to 3 days before delivery (partial refund)</li>
                    <li>
                      Cancellation: Full refund if cancelled 5+ days before, 50% refund 2–5 days before, no refund within 2 days
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Order Tracking */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-purple-800 mb-6"
              >
                Track Your Order
              </motion.h2>
              <div className="w-24 h-1 bg-turmeric-500 mb-6"></div>
              <div className="space-y-4 text-turmeric-800">
                <p>
                  After confirming your pre-order, you’ll receive a tracking code to monitor your order’s progress in real-time.
                </p>
                <p>Track every step, from preparation to delivery:</p>
                <ul className="space-y-3 mt-4">
                  {[
                    "Order Confirmed",
                    "Preparation Started",
                    "Food Ready for Delivery",
                    "Out for Delivery",
                    "Delivered",
                  ].map((status, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-medium">{index + 1}</span>
                      </div>
                      <span className="text-turmeric-700">{status}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6"
                >
                  <Link to="/track-order">
                    <Button className="bg-turmeric-600 hover:bg-turmeric-700 text-white">
                      Enter Tracking Code
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
              <img
                src="/images/tamil-delivery-scene.jpg" // Placeholder for file-TZTzGhA1BJNQqhjqL3AUzx
                alt="Order Delivery"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-tamil-kolam-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-purple-800"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4 mb-6"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-turmeric-800"
            >
              Answers to common questions about pre-ordering Tamil meals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How far in advance should I pre-order?",
                a: "Tiffin orders need 3 days’ notice, event catering 7 days. Last-minute orders may incur extra charges.",
              },
              {
                q: "Can I customize my menu?",
                a: "Yes, choose dishes like Thatta Payiru Biriyani or create a custom menu. Contact us to finalize.",
              },
              {
                q: "What if I need to change the delivery time?",
                a: "Delivery time changes are possible up to 2 days before, subject to our schedule. Contact us early.",
              },
              {
                q: "Do you offer serving staff for events?",
                a: "Serving staff can be arranged for events at an additional cost. Specify when ordering.",
              },
              {
                q: "How are tiffin meals packaged?",
                a: "Tiffins are packed in hygienic stainless steel or eco-friendly containers to keep meals fresh.",
              },
              {
                q: "What if there’s an issue with my delivery?",
                a: "Contact us immediately. Our team will resolve any delivery issues promptly to ensure satisfaction.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-sm border border-turmeric-200"
              >
                <h3 className="text-lg font-semibold text-purple-800 mb-2">{faq.q}</h3>
                <p className="text-turmeric-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-turmeric-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tamil-meal-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            Pre-Order Your Homemade Tamil Meal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8 text-turmeric-100"
          >
            From daily tiffins to event feasts, enjoy Gayathri Priya’s authentic Tamil cuisine, delivered fresh.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/order">
                <Button size="lg" className="bg-white text-purple-800 hover:bg-turmeric-100">
                  Start Pre-Order
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact-us">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}