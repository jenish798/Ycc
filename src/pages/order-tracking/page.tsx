
import { React, useState, useEffect, useCallback, useMemo } from 'react'

import { CheckCircle, Clock, Truck, ChefHat } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

export default function OrderTracking() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [trackingCode, setTrackingCode] = useState("")
  const [orderStatus, setOrderStatus] = useState<null | {
    status: string
    step: number
    details: {
      orderNumber: string
      customerName: string
      eventDate: string
      deliveryTime: string
      items: string[]
      currentStatus: string
      estimatedDelivery: string
    }
  }>(null)

  const handleTrack = () => {
    // In a real application, this would make an API call to fetch the order status
    // For demo purposes, we're simulating a successful tracking result
    if (trackingCode.trim() !== "") {
      setOrderStatus({
        status: "In Preparation",
        step: 2,
        details: {
          orderNumber: "ORD-" + Math.floor(10000 + Math.random() * 90000),
          customerName: "Demo Customer",
          eventDate: "May 20, 2025",
          deliveryTime: "10:00 AM - 12:00 PM",
          items: [
            "Traditional South Indian Thali (25 persons)",
            "Special Payasam (25 servings)",
            "Filter Coffee Kit (25 servings)",
          ],
          currentStatus: "Our chefs have started preparing your order",
          estimatedDelivery: "May 20, 2025, 10:00 AM",
        },
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute inset-0  z-10" />
        <div className="absolute inset-0 bg-kolam-pattern opacity-10 z-5"></div>
        <img
          src="/placeholder.svg?height=300&width=1200"
          alt="Track Your Order"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Track Your Order</h1>
          <p className="text-lg text-turmeric-50 max-w-2xl">
            Monitor the status of your pre-ordered South Indian cuisine in real-time
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-turmeric-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-purple-800 mb-6">Enter Your Tracking Code</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="tracking-code">Tracking Code</Label>
                    <div className="flex gap-4">
                      <Input
                        id="tracking-code"
                        placeholder="e.g., YCC-12345"
                        value={trackingCode}
                        onChange={(e) => setTrackingCode(e.target.value)}
                        className="border-turmeric-200"
                      />
                      <Button className="bg-turmeric-600 hover:bg-turmeric-700 text-white" onClick={handleTrack}>
                        Track
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-turmeric-700">
                    Your tracking code was sent to your email and phone number when you placed your pre-order
                  </p>
                </div>
              </CardContent>
            </Card>

            {orderStatus && (
              <div className="mt-8">
                <Card className="border-turmeric-200">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-purple-800">Order Status</h2>
                      <span className="px-4 py-1 bg-turmeric-100 text-turmeric-800 rounded-full text-sm font-medium">
                        {orderStatus.details.orderNumber}
                      </span>
                    </div>

                    {/* Progress Tracker */}
                    <div className="mb-8">
                      <div className="relative">
                        <div className="absolute top-5 left-0 w-full h-1 bg-gray-200"></div>
                        <div
                          className="absolute top-5 left-0 h-1 bg-turmeric-600"
                          style={{ width: `${(orderStatus.step / 5) * 100}%` }}
                        ></div>
                        <div className="relative flex justify-between">
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                                orderStatus.step >= 1 ? "bg-turmeric-600 text-white" : "bg-gray-200 text-gray-400"
                              }`}
                            >
                              <CheckCircle className="h-5 w-5" />
                            </div>
                            <span className="text-xs mt-2 text-center">Confirmed</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                                orderStatus.step >= 2 ? "bg-turmeric-600 text-white" : "bg-gray-200 text-gray-400"
                              }`}
                            >
                              <ChefHat className="h-5 w-5" />
                            </div>
                            <span className="text-xs mt-2 text-center">Preparing</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                                orderStatus.step >= 3 ? "bg-turmeric-600 text-white" : "bg-gray-200 text-gray-400"
                              }`}
                            >
                              <Clock className="h-5 w-5" />
                            </div>
                            <span className="text-xs mt-2 text-center">Ready</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                                orderStatus.step >= 4 ? "bg-turmeric-600 text-white" : "bg-gray-200 text-gray-400"
                              }`}
                            >
                              <Truck className="h-5 w-5" />
                            </div>
                            <span className="text-xs mt-2 text-center">On the way</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                                orderStatus.step >= 5 ? "bg-turmeric-600 text-white" : "bg-gray-200 text-gray-400"
                              }`}
                            >
                              <CheckCircle className="h-5 w-5" />
                            </div>
                            <span className="text-xs mt-2 text-center">Delivered</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-purple-800 mb-4">Order Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-turmeric-700">Customer:</span>
                            <span className="font-medium">{orderStatus.details.customerName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-turmeric-700">Event Date:</span>
                            <span className="font-medium">{orderStatus.details.eventDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-turmeric-700">Delivery Time:</span>
                            <span className="font-medium">{orderStatus.details.deliveryTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-turmeric-700">Current Status:</span>
                            <span className="font-medium text-turmeric-600">{orderStatus.status}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-turmeric-700">Estimated Delivery:</span>
                            <span className="font-medium">{orderStatus.details.estimatedDelivery}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-purple-800 mb-4">Order Items</h3>
                        <ul className="space-y-2">
                          {orderStatus.details.items.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-turmeric-600 mr-2">•</span>
                              <span className="text-turmeric-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                      <p className="text-purple-700">
                        <strong>Status Update:</strong> {orderStatus.details.currentStatus}
                      </p>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button variant="outline" className="border-turmeric-300 text-turmeric-700">
                        Contact Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How Tracking Works */}
      <section className="py-16 bg-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-kolam-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">How Order Tracking Works</h2>
            <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-turmeric-800">
              Stay informed about your pre-order status every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-turmeric-200 bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-purple-600"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Secure Tracking Code</h3>
                  <p className="text-turmeric-700">
                    Receive a unique tracking code via email and SMS when your pre-order is confirmed
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-turmeric-200 bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-purple-600"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Real-Time Updates</h3>
                  <p className="text-turmeric-700">
                    Track your order status in real-time from confirmation to delivery
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-turmeric-200 bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-purple-600"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Delivery Notifications</h3>
                  <p className="text-turmeric-700">
                    Receive automatic notifications when your order is out for delivery and when it arrives
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
