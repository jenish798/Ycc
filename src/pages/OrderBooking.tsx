import { React, useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

import SectionTransition from "../components/SectionTransition";
import FadeIn from "../components/FadeIn";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";

import Category_4 from "../assets/images/Category.png";

// Define meal types and time slots
const MEAL_TYPES = [
  {
    id: "breakfast",
    name: "Breakfast",
    timeSlots: ["7:00 AM - 8:00 AM", "8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM"],
  },
  {
    id: "lunch",
    name: "Lunch",
    timeSlots: ["12:00 PM - 1:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM"],
  },
  {
    id: "dinner",
    name: "Dinner",
    timeSlots: ["7:00 PM - 8:00 PM", "8:00 PM - 9:00 PM", "9:00 PM - 10:00 PM"],
  },
];

// Menu items for each meal type
const MENU_ITEMS = {
  breakfast: [
    {
      id: "idli",
      name: "Idli with Sambar & Chutney",
      price: 120,
      popular: true,
    },
    {
      id: "dosa",
      name: "Masala Dosa with Sambar & Chutney",
      price: 150,
      popular: false,
    },
    {
      id: "vada",
      name: "Vada with Sambar & Chutney",
      price: 100,
      popular: false,
    },
    {
      id: "pongal",
      name: "Pongal with Sambar & Chutney",
      price: 130,
      popular: true,
    },
    {
      id: "upma",
      name: "Upma with Coconut Chutney",
      price: 110,
      popular: false,
    },
  ],
  lunch: [
    {
      id: "meals",
      name: "South Indian Thali (Full Meals)",
      price: 250,
      popular: true,
    },
    { id: "biryani", name: "Vegetable Biryani", price: 200, popular: true },
    {
      id: "curdRice",
      name: "Curd Rice with Pickle",
      price: 120,
      popular: false,
    },
    {
      id: "lemonRice",
      name: "Lemon Rice with Papad",
      price: 130,
      popular: false,
    },
    {
      id: "sambarRice",
      name: "Sambar Rice with Papad",
      price: 140,
      popular: false,
    },
  ],
  dinner: [
    { id: "chapati", name: "Chapati with Kurma", price: 150, popular: false },
    { id: "parotta", name: "Parotta with Salna", price: 160, popular: true },
    {
      id: "idiyappam",
      name: "Idiyappam with Kurma",
      price: 140,
      popular: false,
    },
    { id: "appam", name: "Appam with Coconut Milk", price: 150, popular: true },
    {
      id: "dinnerThali",
      name: "Mini Dinner Thali",
      price: 200,
      popular: false,
    },
  ],
};

export default function OrderBooking() {
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState<"oneTime" | "subscription">(
    "oneTime"
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMealType, setSelectedMealType] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>(
    {}
  );
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [subscriptionDays, setSubscriptionDays] = useState<string[]>([]);
  const [subscriptionDuration, setSubscriptionDuration] = useState("1-week");
  const [paymentMethod, setPaymentMethod] = useState("online");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;
    Object.entries(selectedItems).forEach(([key, quantity]) => {
      const [mealType, itemId] = key.split("-");
      const menuType = MENU_ITEMS[mealType as keyof typeof MENU_ITEMS];
      const item = menuType.find((i) => i.id === itemId);
      if (item) {
        total += item.price * quantity;
      }
    });
    return total;
  };

  // Handle quantity change
  const handleQuantityChange = (
    mealType: string,
    itemId: string,
    quantity: number
  ) => {
    setSelectedItems((prev) => ({
      ...prev,
      [`${mealType}-${itemId}`]: quantity,
    }));
  };

  // Handle subscription day toggle
  const handleDayToggle = (day: string) => {
    setSubscriptionDays((prev) => {
      if (prev.includes(day)) {
        return prev.filter((d) => d !== day);
      } else {
        return [...prev, day];
      }
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create order object
    const order = {
      id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      type: orderType,
      date: selectedDate,
      mealTypes: selectedMealType,
      timeSlot: selectedTimeSlot,
      items: selectedItems,
      total: calculateTotal(),
      address: deliveryAddress,
      specialInstructions,
      status: "confirmed",
      paymentMethod,
      ...(orderType === "subscription" && {
        subscriptionDays,
        subscriptionDuration,
      }),
    };

    // In a real app, you would send this to your backend
    console.log("Order submitted:", order);

    // Store in localStorage for demo purposes
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Navigate to order confirmation
    navigate(`/order-confirmation/${order.id}`);
  };

  // Check if form is valid
  const isFormValid = () => {
    const hasItems = Object.values(selectedItems).some(
      (quantity) => quantity > 0
    );
    const hasAddress = deliveryAddress.trim() !== "";
    const hasDate = selectedDate !== "";
    const hasTimeSlot = selectedTimeSlot !== "";
    const hasMealType = selectedMealType.length > 0;

    if (orderType === "subscription") {
      return (
        hasItems && hasAddress && subscriptionDays.length > 0 && hasMealType
      );
    }

    return hasItems && hasAddress && hasDate && hasTimeSlot && hasMealType;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}

      <section className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-red-900/70 z-10" />
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
            Order Food
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-turmeric-50 max-w-2xl"
          >
            Order authentic South Indian cuisine for one-time delivery or daily
            subscription
          </motion.p>
        </div>
      </section>

      {/* Order Form */}
      <SectionTransition className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Order Type & Schedule */}
              <div className="lg:col-span-1">
                <FadeIn>
                  <Card className="border-turmeric-200 mb-6">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-purple-800 mb-4">
                        Order Type
                      </h2>
                      <RadioGroup
                        value={orderType}
                        onValueChange={(value) =>
                          setOrderType(value as "oneTime" | "subscription")
                        }
                        className="space-y-3"
                      >
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem
                            value="oneTime"
                            id="oneTime"
                            className="mt-1"
                          />
                          <div>
                            <Label
                              htmlFor="oneTime"
                              className="text-base font-medium"
                            >
                              One-Time Order
                            </Label>
                            <p className="text-sm text-turmeric-700">
                              Order for a specific date and time slot
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem
                            value="subscription"
                            id="subscription"
                            className="mt-1"
                          />
                          <div>
                            <Label
                              htmlFor="subscription"
                              className="text-base font-medium"
                            >
                              Subscription
                            </Label>
                            <p className="text-sm text-turmeric-700">
                              Regular delivery on selected days of the week
                            </p>
                          </div>
                        </div>
                      </RadioGroup>
                    </CardContent>
                  </Card>

                  {orderType === "oneTime" ? (
                    <Card className="border-turmeric-200 mb-6">
                      <CardContent className="p-6">
                        <h2 className="text-xl font-bold text-purple-800 mb-4">
                          Schedule
                        </h2>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="date">Select Date</Label>
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-turmeric-600" />
                              <Input
                                id="date"
                                type="date"
                                value={selectedDate}
                                onChange={(e) =>
                                  setSelectedDate(e.target.value)
                                }
                                min={new Date().toISOString().split("T")[0]}
                                className="border-turmeric-200"
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Meal Type</Label>
                            <div className="grid grid-cols-1 gap-2">
                              {MEAL_TYPES.map((meal) => (
                                <div
                                  key={meal.id}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={`meal-${meal.id}`}
                                    checked={selectedMealType.includes(meal.id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedMealType((prev) => [
                                          ...prev,
                                          meal.id,
                                        ]);
                                      } else {
                                        setSelectedMealType((prev) =>
                                          prev.filter((id) => id !== meal.id)
                                        );
                                      }
                                    }}
                                  />
                                  <Label
                                    htmlFor={`meal-${meal.id}`}
                                    className="text-sm"
                                  >
                                    {meal.name}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2" hidden>
                            <Label htmlFor="timeSlot">Time Slot</Label>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-turmeric-600" />
                              <Select
                                value={selectedTimeSlot}
                                onValueChange={setSelectedTimeSlot}
                              >
                                <SelectTrigger className="border-turmeric-200">
                                  <SelectValue placeholder="Select time slot" />
                                </SelectTrigger>
                                <SelectContent>
                                  {MEAL_TYPES.find((meal) =>
                                    selectedMealType.includes(meal.id)
                                  )?.timeSlots?.map((slot) => (
                                    <SelectItem key={slot} value={slot}>
                                      {slot}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="border-turmeric-200 mb-6">
                      <CardContent className="p-6">
                        <h2 className="text-xl font-bold text-purple-800 mb-4">
                          Subscription Details
                        </h2>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Select Days</Label>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday",
                              ].map((day) => (
                                <div
                                  key={day}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={day}
                                    checked={subscriptionDays.includes(day)}
                                    onCheckedChange={() => handleDayToggle(day)}
                                  />
                                  <Label htmlFor={day} className="text-sm">
                                    {day}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Meal Type</Label>
                            <div className="grid grid-cols-1 gap-2">
                              {MEAL_TYPES.map((meal) => (
                                <div
                                  key={meal.id}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={`meal-${meal.id}`}
                                    checked={selectedMealType.includes(meal.id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedMealType((prev) => [
                                          ...prev,
                                          meal.id,
                                        ]);
                                      } else {
                                        setSelectedMealType((prev) =>
                                          prev.filter((id) => id !== meal.id)
                                        );
                                      }
                                    }}
                                  />
                                  <Label
                                    htmlFor={`meal-${meal.id}`}
                                    className="text-sm"
                                  >
                                    {meal.name}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timeSlot">Time Slot</Label>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-turmeric-600" />
                              <Select
                                value={selectedTimeSlot}
                                onValueChange={setSelectedTimeSlot}
                              >
                                <SelectTrigger className="border-turmeric-200">
                                  <SelectValue placeholder="Select time slot" />
                                </SelectTrigger>
                                <SelectContent>
                                  {MEAL_TYPES.find((meal) =>
                                    selectedMealType.includes(meal.id)
                                  )?.timeSlots?.map((slot) => (
                                    <SelectItem key={slot} value={slot}>
                                      {slot}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="duration">
                              Subscription Duration
                            </Label>
                            <Select
                              value={subscriptionDuration}
                              onValueChange={setSubscriptionDuration}
                            >
                              <SelectTrigger className="border-turmeric-200">
                                <SelectValue placeholder="Select duration" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-week">1 Week</SelectItem>
                                <SelectItem value="2-weeks">2 Weeks</SelectItem>
                                <SelectItem value="1-month">1 Month</SelectItem>
                                <SelectItem value="3-months">
                                  3 Months
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <Card className="border-turmeric-200">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-purple-800 mb-4">
                        Delivery Details
                      </h2>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="address">Delivery Address</Label>
                          <Textarea
                            id="address"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            placeholder="Enter your full delivery address"
                            className="min-h-[100px] border-turmeric-200"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="instructions">
                            Special Instructions (Optional)
                          </Label>
                          <Textarea
                            id="instructions"
                            value={specialInstructions}
                            onChange={(e) =>
                              setSpecialInstructions(e.target.value)
                            }
                            placeholder="Any special instructions for delivery or food preparation"
                            className="min-h-[80px] border-turmeric-200"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              {/* Middle Column - Menu Selection */}
              <div className="lg:col-span-1">
                <FadeIn direction="up">
                  <Card className="border-turmeric-200">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-purple-800 mb-4">
                        Menu Selection
                      </h2>
                      {selectedMealType.length === 0 ? (
                        <div className="text-center py-8">
                          <p className="text-turmeric-700">
                            Please select at least one meal type
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {selectedMealType.map((mealType) => (
                            <div key={mealType} className="space-y-4">
                              <h3 className="font-medium text-purple-700 border-b border-turmeric-200 pb-2">
                                {mealType === "breakfast"
                                  ? "Breakfast Menu"
                                  : mealType === "lunch"
                                  ? "Lunch Menu"
                                  : "Dinner Menu"}
                              </h3>
                              {MENU_ITEMS[
                                mealType as keyof typeof MENU_ITEMS
                              ].map((item) => (
                                <div
                                  key={`${mealType}-${item.id}`}
                                  className="flex items-center justify-between p-3 border border-turmeric-100 rounded-md hover:bg-turmeric-50 transition-colors"
                                >
                                  <div className="flex-1">
                                    <div className="flex items-center">
                                      <h3 className="font-medium text-purple-800">
                                        {item.name}
                                      </h3>
                                      {item.popular && (
                                        <span className="ml-2 px-2 py-0.5 bg-turmeric-100 text-turmeric-800 text-xs rounded-full">
                                          Popular
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-turmeric-700">
                                      ₹{item.price}
                                    </p>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Button
                                      type="button"
                                      variant="outline"
                                      size="sm"
                                      className="h-8 w-8 p-0 border-turmeric-300"
                                      onClick={() =>
                                        handleQuantityChange(
                                          mealType,
                                          item.id,
                                          Math.max(
                                            0,
                                            (selectedItems[
                                              `${mealType}-${item.id}`
                                            ] || 0) - 1
                                          )
                                        )
                                      }
                                    >
                                      -
                                    </Button>
                                    <span className="w-8 text-center">
                                      {selectedItems[
                                        `${mealType}-${item.id}`
                                      ] || 0}
                                    </span>
                                    <Button
                                      type="button"
                                      variant="outline"
                                      size="sm"
                                      className="h-8 w-8 p-0 border-turmeric-300"
                                      onClick={() =>
                                        handleQuantityChange(
                                          mealType,
                                          item.id,
                                          (selectedItems[
                                            `${mealType}-${item.id}`
                                          ] || 0) + 1
                                        )
                                      }
                                    >
                                      +
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <FadeIn direction="left">
                  <Card className="border-turmeric-200 mb-6 sticky top-20">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-purple-800 mb-4">
                        Order Summary
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-purple-700 mb-2">
                            Selected Items
                          </h3>
                          {Object.entries(selectedItems).length > 0 ? (
                            <div className="space-y-4">
                              {selectedMealType.map((mealType) => {
                                const mealItems = Object.entries(selectedItems)
                                  .filter(
                                    ([key, quantity]) =>
                                      key.startsWith(`${mealType}-`) &&
                                      quantity > 0
                                  )
                                  .map(([key, quantity]) => {
                                    const itemId = key.split("-")[1];
                                    return {
                                      id: itemId,
                                      name:
                                        MENU_ITEMS[
                                          mealType as keyof typeof MENU_ITEMS
                                        ].find((item) => item.id === itemId)
                                          ?.name || "",
                                      price:
                                        MENU_ITEMS[
                                          mealType as keyof typeof MENU_ITEMS
                                        ].find((item) => item.id === itemId)
                                          ?.price || 0,
                                      quantity,
                                    };
                                  });

                                if (mealItems.length === 0) return null;

                                return (
                                  <div key={mealType} className="space-y-2">
                                    <h4 className="text-sm font-medium text-purple-700">
                                      {mealType === "breakfast"
                                        ? "Breakfast"
                                        : mealType === "lunch"
                                        ? "Lunch"
                                        : "Dinner"}
                                    </h4>
                                    {mealItems.map((item) => (
                                      <div
                                        key={`${mealType}-${item.id}`}
                                        className="flex justify-between"
                                      >
                                        <div className="flex items-center">
                                          <span className="text-turmeric-800">
                                            {item.name}
                                          </span>
                                          <span className="text-turmeric-600 ml-2">
                                            x{item.quantity}
                                          </span>
                                        </div>
                                        <span className="font-medium">
                                          ₹{item.price * item.quantity}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <p className="text-turmeric-600 italic">
                              No items selected
                            </p>
                          )}
                        </div>

                        <div className="border-t border-turmeric-200 pt-4">
                          <div className="flex justify-between font-medium">
                            <span>Subtotal</span>
                            <span>₹{calculateTotal()}</span>
                          </div>
                          <div className="flex justify-between text-sm text-turmeric-700 mt-1">
                            <span>Delivery Fee</span>
                            <span>₹40</span>
                          </div>
                          <div className="flex justify-between font-bold text-lg text-purple-800 mt-4">
                            <span>Total</span>
                            <span>₹{calculateTotal() + 40}</span>
                          </div>
                        </div>

                        <div className="border-t border-turmeric-200 pt-4">
                          <h3 className="font-medium text-purple-700 mb-2">
                            Payment Method
                          </h3>
                          <RadioGroup
                            value={paymentMethod}
                            onValueChange={setPaymentMethod}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="online" id="online" />
                              <Label htmlFor="online">Online Payment</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="cod" id="cod" />
                              <Label htmlFor="cod">Cash on Delivery</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {orderType === "subscription" && (
                          <div className="bg-purple-50 p-3 rounded-md">
                            <div className="flex items-start">
                              <AlertCircle className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                              <p className="text-sm text-purple-700">
                                Subscription orders will be delivered on your
                                selected days at the chosen time slot. Payment
                                will be collected weekly.
                              </p>
                            </div>
                          </div>
                        )}

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="w-full bg-turmeric-600 hover:bg-turmeric-700 text-white"
                            disabled={!isFormValid()}
                          >
                            {orderType === "oneTime"
                              ? "Place Order"
                              : "Start Subscription"}
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </form>
        </div>
      </SectionTransition>
    </div>
  );
}
