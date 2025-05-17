
import { ChevronRight, Calendar, Users, Gift, Utensils } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0  z-10" />
        <div className="absolute inset-0 bg-kolam-pattern opacity-10 z-5"></div>
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Traditional South Indian Feast"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block px-4 py-1.5 bg-turmeric-100 text-turmeric-800 rounded-full text-sm font-medium">
              Traditional South Indian Catering
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Authentic South Indian Cuisine for Your Special Occasions
            </h1>
            <p className="text-lg text-turmeric-50">
              Experience the rich flavors and traditions of South India with Yatra Cooking Cave's premium catering
              services for weddings, festivals, and special functions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-turmeric-600 hover:bg-turmeric-700 text-white">
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-turmeric-200 text-turmeric-100 hover:bg-turmeric-900/20"
              >
                Explore Menu <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Categories */}
      <section className="py-16 bg-gradient-to-b from-white to-turmeric-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-kolam-pattern opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">Our Specialized Services</h2>
            <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
            <p className="mt-4 text-turmeric-800 max-w-2xl mx-auto">
              We offer a range of specialized catering services tailored to your traditional South Indian celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="border-turmeric-200 bg-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute transform rotate-45 bg-turmeric-600 text-white text-xs font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                  Popular
                </div>
              </div>
              <div className="h-48 relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Wedding Feast Packages"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-turmeric-600" />
                  <h3 className="font-semibold text-lg text-purple-800">Wedding Feast Packages</h3>
                </div>
                <p className="text-turmeric-700">
                  Comprehensive wedding feast packages with traditional banana leaf setup and authentic dishes for all
                  ceremonies.
                </p>
                <Button variant="link" className="mt-4 p-0 text-purple-600 hover:text-purple-800">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-turmeric-200 bg-white overflow-hidden">
              <div className="h-48 relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Festival Special Menus"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-turmeric-600" />
                  <h3 className="font-semibold text-lg text-purple-800">Festival Special Menus</h3>
                </div>
                <p className="text-turmeric-700">
                  Celebrate Pongal, Diwali, Onam and other festivals with our specially curated traditional menus.
                </p>
                <Button variant="link" className="mt-4 p-0 text-purple-600 hover:text-purple-800">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-turmeric-200 bg-white overflow-hidden">
              <div className="h-48 relative">
                <img src="/placeholder.svg?height=200&width=400" alt="Puja Items" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="h-5 w-5 text-turmeric-600" />
                  <h3 className="font-semibold text-lg text-purple-800">Puja Items & Prasadam</h3>
                </div>
                <p className="text-turmeric-700">
                  Complete puja items and prasadam prepared with traditional methods for religious ceremonies and
                  functions.
                </p>
                <Button variant="link" className="mt-4 p-0 text-purple-600 hover:text-purple-800">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-turmeric-200 bg-white overflow-hidden">
              <div className="h-48 relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Catering Services"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="h-5 w-5 text-turmeric-600" />
                  <h3 className="font-semibold text-lg text-purple-800">Catering Services</h3>
                </div>
                <p className="text-turmeric-700">
                  Professional catering services for corporate events, family gatherings, and special occasions with
                  authentic flavors.
                </p>
                <Button variant="link" className="mt-4 p-0 text-purple-600 hover:text-purple-800">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-turmeric-600 hover:bg-purple-700 text-white">
              View All Services <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-temple-arch opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">Our Signature Dishes</h2>
            <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
            <p className="mt-4 text-turmeric-800 max-w-2xl mx-auto">
              Explore our most popular authentic South Indian dishes prepared with traditional recipes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Traditional Biryani", desc: "Aromatic rice dish with authentic spices" },
              { name: "Chettinad Cuisine", desc: "Spicy and aromatic specialties from Chettinad" },
              { name: "Kerala Sadhya", desc: "Traditional feast served on banana leaves" },
              { name: "Mysore Pak", desc: "Classic South Indian sweet delicacy" },
            ].map((dish, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-80"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg">{dish.name}</h3>
                  <p className="text-turmeric-100 text-sm">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Context Section */}
      <section className="py-16 bg-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-kolam-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">Traditional Celebrations</h2>
            <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
            <p className="mt-4 text-turmeric-800 max-w-2xl mx-auto">
              Pre-order authentic South Indian cuisine for your traditional celebrations and special occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-turmeric-200 bg-white">
              <CardContent className="p-6">
                <div className="h-40 relative mb-4 overflow-hidden rounded-md">
                  <img
                    src="/placeholder.svg?height=160&width=300"
                    alt="Pre-ordering for Traditional Events"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Pre-ordering for Traditional Events</h3>
                <p className="text-turmeric-700 mb-4">
                  Plan ahead for your traditional ceremonies with our convenient pre-ordering system. Secure your
                  preferred menu and date well in advance.
                </p>
                <Button className="w-full bg-turmeric-600 hover:bg-turmeric-700 text-white">Pre-order Now</Button>
              </CardContent>
            </Card>

            <Card className="border-turmeric-200 bg-white">
              <CardContent className="p-6">
                <div className="h-40 relative mb-4 overflow-hidden rounded-md">
                  <img
                    src="/placeholder.svg?height=160&width=300"
                    alt="Special Occasion Packages"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Special Occasion Packages</h3>
                <p className="text-turmeric-700 mb-4">
                  Comprehensive packages for birthdays, anniversaries, house warmings, and other special milestones with
                  traditional South Indian flavors.
                </p>
                <Button className="w-full bg-turmeric-600 hover:bg-turmeric-700 text-white">View Packages</Button>
              </CardContent>
            </Card>

            <Card className="border-turmeric-200 bg-white">
              <CardContent className="p-6">
                <div className="h-40 relative mb-4 overflow-hidden rounded-md">
                  <img
                    src="/placeholder.svg?height=160&width=300"
                    alt="Customizable Feast Options"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Customizable Feast Options</h3>
                <p className="text-turmeric-700 mb-4">
                  Create your own menu with our customizable feast options. Mix and match dishes to create the perfect
                  menu for your event.
                </p>
                <Button className="w-full bg-turmeric-600 hover:bg-turmeric-700 text-white">Customize Menu</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pre-Food Order Process */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-temple-arch opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">Our Pre-Food Order Process</h2>
            <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
            <p className="mt-4 text-turmeric-800 max-w-2xl mx-auto">
              Simple steps to pre-order authentic South Indian cuisine for your special occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Select Your Event",
                desc: "Choose your event type and date from our calendar",
                icon: "Calendar",
              },
              {
                step: "2",
                title: "Customize Menu",
                desc: "Select dishes or choose from our curated packages",
                icon: "Utensils",
              },
              {
                step: "3",
                title: "Confirm Order",
                desc: "Review your selections and make payment",
                icon: "CheckCircle",
              },
              {
                step: "4",
                title: "Preparation",
                desc: "Our chefs prepare your order with fresh ingredients",
                icon: "ChefHat",
              },
              {
                step: "5",
                title: "Delivery",
                desc: "Timely delivery to your venue on the event day",
                icon: "Truck",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                {/* Process step */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-turmeric-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">{step.title}</h3>
                  <p className="text-turmeric-700">{step.desc}</p>
                </div>

                {/* Connector line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-turmeric-300 -z-10 transform -translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-turmeric-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-16 bg-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-kolam-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-6">Delivery Information</h2>
              <div className="w-24 h-1 bg-turmeric-500 mb-6"></div>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-turmeric-200">
                  <h3 className="font-semibold text-purple-700 mb-2">Delivery Timeline</h3>
                  <p className="text-turmeric-800">
                    We deliver your pre-ordered food 1-2 hours before your event starts to ensure freshness. For morning
                    events, delivery is made early morning.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-turmeric-200">
                  <h3 className="font-semibold text-purple-700 mb-2">Packaging</h3>
                  <p className="text-turmeric-800">
                    All food is delivered in eco-friendly, temperature-controlled containers that maintain freshness and
                    traditional flavors.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-turmeric-200">
                  <h3 className="font-semibold text-purple-700 mb-2">Minimum Order</h3>
                  <p className="text-turmeric-800">
                    Minimum order quantity is 10 persons for regular orders and 25 persons for wedding feast packages.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-turmeric-200">
                  <h3 className="font-semibold text-purple-700 mb-2">Advanced Booking</h3>
                  <p className="text-turmeric-800">
                    We recommend booking at least 7 days in advance for regular orders and 30 days for wedding feasts.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Food Delivery Process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Track Your Order</h3>
                  <p className="mb-4">Get real-time updates on your order preparation and delivery status</p>
                  <Button className="bg-turmeric-600 hover:bg-turmeric-700 text-white">Track Order</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-turmeric-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Raman",
                role: "Wedding Client",
                quote:
                  "The food was exceptional and our guests couldn't stop praising the authentic flavors. Truly made our wedding special!",
              },
              {
                name: "Karthik Suresh",
                role: "Birthday Celebration",
                quote:
                  "Amazing service and delicious food. The traditional banana leaf setup was a hit at my father's 60th birthday celebration.",
              },
              {
                name: "Lakshmi Venkat",
                role: "House Warming",
                quote:
                  "Perfect catering for our house warming ceremony. The traditional dishes were prepared with authentic taste and love.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-turmeric-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="h-6 w-6 text-turmeric-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-turmeric-800 flex-grow mb-4">{testimonial.quote}</p>
                    <div className="mt-auto">
                      <p className="font-semibold text-purple-800">{testimonial.name}</p>
                      <p className="text-sm text-turmeric-700">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-turmeric-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-kolam-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Pre-Order for Your Special Occasion?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-turmeric-100">
            Pre-order authentic South Indian cuisine now and have it delivered fresh to your venue on your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-800 hover:bg-turmeric-100">
              Pre-Order Now
            </Button>
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
