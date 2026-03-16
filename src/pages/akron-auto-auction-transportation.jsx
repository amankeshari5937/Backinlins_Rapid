"use client";

import React, { useState } from "react";

import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import { Calculator } from "lucide-react";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import {
  Truck,
  Plus,
  Minus,
  Car,
  CreditCard,
  DollarSign,
  Shield,
  Clock,
  Users,
  Star,
  Wrench,
  FileText,
  AlertTriangle,
  ArrowDown,
  ArrowUpDown,
  Move,
  Grid3X3,
  Package,
  Fuel,
  Box,
  CheckCircle,
  TrendingUp,
  Cog,
  ArrowRight,
  Maximize2,
  Navigation,
  Repeat,
  Phone,
  Mail,
  FileCheck,
  Heart,
  Globe,
  Award,
  Search,
  Cloud,
  Lock,
  Thermometer,
  Settings,
} from "lucide-react";
import {
  MapPin,
  Calendar,
  Snowflake,
  Scale,
  Lightbulb,
  Target,
  BarChart3,
} from "lucide-react";
import { FaCar, FaShieldAlt, FaStar, FaHome } from "react-icons/fa";
import Image from "next/image";

const Home = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

const processSteps = [
    {
      number: "1",
      title: "Win the Auction",
      description: "Once you've successfully bid on a vehicle at Akron Auto Auction, you'll receive purchase documentation and confirmation from the auction house. Whether you purchased in person or online, this marks the beginning of the transportation process."
    },
    {
      number: "2", 
      title: "Gather Essential Information",
      description: "To schedule auction car shipping, we'll need a few key details:",
      details: [
        "Vehicle Identification Number (VIN)",
        "Auction lot number", 
        "Buyer ID",
        "Gate pass or release form"
      ],
      note: "This helps us coordinate directly with the auction house to release your vehicle quickly and efficiently."
    },
    {
      number: "3",
      title: "Book a Transport Service", 
      description: "Choose the best option for your needs:",
      options: [
        "Open Carrier Auction Transport: Most cost-effective, ideal for standard vehicles",
        "Enclosed Auto Auction Shipping: Extra protection for classic, exotic, or luxury cars", 
        "Expedited Auction Car Delivery: Priority scheduling for time-critical situations",
        "Non-Running Vehicle Transport: Specialized equipment for inoperable or salvage vehicles"
      ],
      note: "We'll match you with a reliable carrier from our national network and provide a shipping quote right away."
    },
    {
      number: "4",
      title: "Pickup & Delivery",
      description: "",
      details: [
        "We coordinate directly with Akron Auto Auction for timely vehicle pickup",
        "You receive tracking updates and status reports along the way", 
        "Upon delivery, the driver performs a full inspection to confirm the condition",
        "You (or your designated contact) sign off on the delivery once the car arrives safely"
      ],
      note: "Whether it's state-to-state auto auction transport or a short-distance haul, we make sure the experience is fast, secure, and hassle-free."
    }
  ];

  const whyChooseFeatures = [
    {
      icon: MapPin,
      title: "Nationwide Auction Auto Transport", 
      description: "Whether your vehicle needs to travel across Ohio or across the country, we've got you covered. Our nationwide auction auto transport network includes thousands of vetted, insured carriers ready to pick up from Akron Auto Auction and deliver anywhere in the U.S."
    },
    {
      icon: Wrench,
      title: "Specialized Equipment",
      description: "We handle more than just standard vehicles. Our carriers are equipped for:",
      list: [
        "Inoperable vehicle auction shipping",
        "Salvage car auction hauling", 
        "Motorcycle auction transport",
        "Classic and exotic car shipping"
      ],
      note: "From flatbeds to winch-equipped carriers, we have the right tools for the job."
    },
    {
      icon: Truck,
      title: "Flexible Transport Options",
      description: "To cater to every unique requirement of the vehicle owner, we offer:",
      list: [
        "Open and enclosed carrier options",
        "Door-to-door auction transport",
        "Expedited services for time-sensitive deliveries", 
        "Custom scheduling to meet your deadlines"
      ],
      note: "Whether you're moving one vehicle or an entire dealer lot, we scale to fit your needs."
    },
    {
      icon: Shield,
      title: "Peace of Mind Features",
      description: "Your vehicle's safety is our top priority. Every shipment includes:",
      list: [
        "Full insurance coverage",
        "Pre- and post-shipment vehicle inspections",
        "Real-time tracking",
        "A damage-free delivery guarantee"
      ],
      note: "When you choose Rapid Auto Shipping for auto auction transport, you're choosing dependability, transparency, and industry-leading service every step of the way."
    }
  ];

  const transportTypes = [
    {
      title: "Open Carrier Auction Transport",
      description: "This is the most common and budget-friendly option. Your vehicle is loaded onto an open trailer with other cars, just like dealership shipments.",
      idealFor: "Standard cars, trucks, and SUVs",
      bestFor: "Buyers seeking affordable and reliable auction car hauling services", 
      note: "Vehicles are exposed to weather during transit"
    },
    {
      title: "Enclosed Auto Auction Shipping",
      description: "Want maximum protection? Enclosed shipping keeps your vehicle safe from the elements and road debris during transport.",
      idealFor: "Classic car auction transport, exotic, or luxury vehicles",
      bestFor: "High-value purchases or pristine-condition models",
      note: "Typically costs 30–50% more than open transport"
    },
    {
      title: "Expedited Auction Car Delivery", 
      description: "Need your car fast? Our expedited service prioritizes your shipment for faster pickup and quicker delivery timelines.",
      idealFor: "Time-sensitive deliveries",
      bestFor: "Dealers replenishing inventory quickly or buyers on a tight schedule"
    },
    {
      title: "Non-Running Vehicle Transport",
      description: "Not all auction cars are road-ready. We handle salvage, inoperable, and non-running car auction transport using specialized carriers with winches, liftgates, and other tools.",
      idealFor: "Copart, IAA, and salvage auction purchases", 
      bestFor: "Vehicles that require loading without being started or moved under their own power"
    }
  ];

  const costFactors = [
    {
      factor: "Distance",
      description: "Longer hauls (e.g., coast-to-coast) cost more than local or regional moves"
    },
    {
      factor: "Vehicle Type & Size", 
      description: "Larger or heavier vehicles require more space and fuel"
    },
    {
      factor: "Carrier Type",
      description: "Enclosed auto auction shipping typically costs 30–50% more than open transport"
    },
    {
      factor: "Vehicle Condition",
      description: "Inoperable or salvaged cars need specialized loading equipment" 
    },
    {
      factor: "Delivery Urgency",
      description: "Expedited auction car delivery comes at a premium"
    }
  ];

  const priceRanges = [
    { destination: "Chicago (345 miles)", price: "$400–$600" },
    { destination: "Dallas (1,200 miles)", price: "$850–$1,200" },
    { destination: "Miami (1,200 miles)", price: "$900–$1,300" },
    { destination: "Los Angeles (2,300 miles)", price: "$1,300–$1,800" }
  ];

  const quoteReasons = [
    "You're only paying for what you need",
    "Accurate pricing based on your vehicle and destination", 
    "No surprises, just reliable, transparent pricing"
  ];

  

  return (
    <>
      <Head>
        <title>
          Akron Auto Auction Car Transport | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Need to ship a car from Akron Auto Auction? Rapid Auto Shipping offers reliable, nationwide auction car transport. Get a free quote today!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/akron-auto-auction-transportation"
        />
        <meta
          property="og:title"
          content="Akron Auto Auction Car Transport | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Need to ship a car from Akron Auto Auction? Rapid Auto Shipping offers reliable, nationwide auction car transport. Get a free quote today!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/akron-auto-auction-transportation"
        />
        <meta property="og:type" content="website" />
        
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754129602/ChatGPT_Image_Aug_2_2025_03_42_21_PM_hgxsv2.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@id": "https://www.rapidautoshipping.com",
                    name: "Home",
                  },
                },

                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/akron-auto-auction-transportation",
                    name: "akron-auto-auction-transportation",
                  },
                },
              ],
            }),
          }}
        />

        
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          <section className="relative py-8 min-h-screen flex items-center w-full">
            <div className="absolute inset-0">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754128897/auto_auction_5_guqmsi.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754128897/auto_auction_5_guqmsi.webp"
                className="w-full h-full object-cover"
                onError={() => console.error("Image failed to load")}
                sizes="(max-width: 600px) 600px, 800px"
                style={{ aspectRatio: "2/1" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#001933]/50 via-[#001933]/20 to-[#001933]/40 "></div>
              <div className="absolute inset-0 bg-[#003366]/10 backdrop-blur-[3px]"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="absolute inset-0 opacity-20">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <pattern
                    id="glassPattern"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="1"
                      fill="white"
                      fillOpacity="0.3"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="0.5"
                      fill="#003366"
                      fillOpacity="0.2"
                    />
                  </pattern>
                  <filter
                    id="glassBlur"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="0.5" />
                  </filter>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#glassPattern)"
                  filter="url(#glassBlur)"
                />
              </svg>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center z-10 px-4 sm:px-6 lg:px-8">
              <div className={`space-y-6 sm:space-y-8 `}>
                <div className="space-y-4 sm:space-y-6  backdrop-blur-lg bg-[#001933]/40 max-w-3xl drop-shadow-xl rounded-lg p-3 sm:p-4 ">
                  <h1
                    className="text-5xl sm:text-6xl lg:text-5xl drop-shadow-2xl font-bold text-center sm:text-left text-white"
                    style={{ fontSize: "50px" }}
                  >
                  Akron Auto Auction Car  <span className="text-[#ff5722]">Transport Services</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                   As trade taxes increase, the price of a new automobile rises, and the second-hand vehicle market experiences increased demand. When it comes to purchasing a new vehicle, an auto auction plays a significant role, and Akron Auto Auction in Ohio is a well-known name. Winning the bet on a vehicle you like is just one part; getting your new ride home unharmed is also a big concern. That's where Rapid Auto Shipping comes in, with over 14 years of experience and a price that won't break your bank.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-md mx-auto">
                <TransportForm />
              </div>
            </div>
          </section>

          <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Your Trusted Partner for Akron Auto Auctions Vehicle Shipping Service
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                     Akron Auto Auction is one of the region’s most respected auto auction houses, serving both dealers and individual buyers with a wide selection of vehicles each week. With a mix of digital and in-person bidding platforms, Akron Auto Auction offers a wide range of vehicles, including late-model cars, salvage units, classics, motorcycles, and even inoperable vehicles, all in one centralized location.

                     <br /> <br />

Whether you're a licensed dealer sourcing inventory or a retail buyer scoring a great deal, one key question always comes up after the sale: “How do I get my auction car delivered?”





                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                     That’s where Rapid Auto Shipping steps in. We specialize in auto auction transport from Akron Auto Auction to any destination nationwide. Our team coordinates directly with the auction facility to ensure a smooth and timely pickup. Whether you're looking for door-to-door auction transport, open or enclosed carriers, or need to move a non-running vehicle, we have the logistics and equipment to get it done right.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                     From dealer auto transport services to state-to-state auction car hauling, we provide tailored solutions backed by professional support, fast scheduling, and peace of mind tracking. When it comes to Akron Auto Auction vehicle shipping, we’re the transport partner you can trust.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754129602/ChatGPT_Image_Aug_2_2025_03_42_21_PM_hgxsv2.png"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[700px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#003366' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#ff5722' }}>
                <Car className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Akron Auto Auctions
              <span className="block" style={{ color: '#ff5722' }}>Car Transport</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transporting a vehicle from Akron Auto Auction is a simple process when you have the right team on your side. At Rapid Auto Shipping, we streamline the entire process from the auction floor to the delivery location so that you can focus on the next deal, not the logistics.
            </p>
         
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#003366' }}>
              How Akron Auto Auctions Car Transport Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how it works:
            </p>
          </div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white" style={{ backgroundColor: '#ff5722' }}>
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#003366' }}>
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    )}
                    {step.details && (
                      <ul className="space-y-2 mb-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff5722' }}></div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.options && (
                      <ul className="space-y-3 mb-4">
                        {step.options.map((option, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#ff5722' }} />
                            <span className="text-gray-700">{option}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.note && (
                      <p className="text-gray-600 italic">
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#003366' }}>
              Why Choose Rapid Auto Shipping for Akron Auto Auctions Transport Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              When it comes to getting vehicles safely and efficiently from Akron Auto Auction to their final destination, not all car auction transport companies are created equal. Rapid Auto Shipping stands out with a proven track record, industry expertise, and customer-first service explicitly designed for auction logistics.
            </p>
          </div>

          <div className="space-y-12">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff5722' }}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#003366' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.list && (
                      <ul className="space-y-2 mb-4">
                        {feature.list.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff5722' }}></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {feature.note && (
                      <p className="text-gray-600 italic">
                        {feature.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#003366' }}>
              Types of Transport for Akron Auto Auctions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Every vehicle purchased from Akron Auto Auction has its own unique transport needs. Whether you're shipping a standard sedan or a rare collector car, Rapid Auto Shipping offers flexible transportation options tailored to your specific needs. Here's a breakdown of our most popular auction transport services:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {transportTypes.map((type, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#003366' }}>
                  {type.title}
                </h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {type.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2" style={{ color: '#ff5722' }}>Ideal for:</span>
                    <span className="text-gray-700">{type.idealFor}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2" style={{ color: '#ff5722' }}>Best for:</span>
                    <span className="text-gray-700">{type.bestFor}</span>
                  </div>
                  {type.note && (
                    <div className="flex items-start">
                      <span className="font-semibold mr-2" style={{ color: '#ff5722' }}>Note:</span>
                      <span className="text-gray-700">{type.note}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
            <p className="text-lg text-gray-700">
              Whether you're shipping a motorcycle, muscle car, or a whole dealer lot, we'll recommend the best method based on the vehicle, budget, and delivery timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#003366' }}>
              What is the Shipping Cost for Akron Auto Auctions Car Transport?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              One of the most frequently asked questions we receive is: "How much does it cost to ship a car from an auction?" The truth is, transport costs from Akron Auto Auction vary depending on several factors. Here's what goes into your final quote:
            </p>
          </div>

          {/* Factors Affecting Cost */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#003366' }}>
              Factors Affecting Cost
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Several factors determine the final price of your auction vehicle delivery, including:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {costFactors.map((factor, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg border border-gray-200">
                  <DollarSign className="h-6 w-6 mr-3 mt-1 flex-shrink-0" style={{ color: '#ff5722' }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#003366' }}>{factor.factor}:</h4>
                    <p className="text-gray-700">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example Price Ranges */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#003366' }}>
              Example Price Ranges
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              These are general estimates for auction car shipping from Akron, OH:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {priceRanges.map((route, index) => (
                <div key={index} className="flex justify-between items-center p-4 rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700">Akron to {route.destination}</span>
                  <span className="font-bold text-xl" style={{ color: '#ff5722' }}>{route.price}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 italic">
              Note: Prices may vary based on seasonal demand, fuel costs, and vehicle specifics.
            </p>
          </div>

          {/* Why Get a Quote */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#003366' }}>
              Why Get a Quote?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Every shipment is unique. That's why we encourage you to get a quote for auction car shipping before making a decision. A custom quote ensures:
            </p>
            <ul className="space-y-3 mb-8">
              {quoteReasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#ff5722' }} />
                  <span className="text-gray-700 text-lg">{reason}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mb-6">
              At Rapid Auto Shipping, we provide free, fast quotes with no obligation. Whether it's a local delivery or state-to-state auto auction transport, we'll help you find the most cost-effective solution.
            </p>
            <div className="text-center">
                <Link href="https://rapidautoshipping.com/akron-auto-auction-transportation">
              <button className="px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#ff5722' }}>
                Get Free Quote Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>

          <div className=" bg-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Conclusion
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Whether you're a dealer sourcing inventory or a retail buyer scoring a deal at Akron Auto Auction, getting your vehicle home safely is just as important as winning the bid. With Rapid Auto Shipping, you receive reliable, affordable, and professional auction vehicle delivery tailored to your specific timeline and transportation needs.


                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Need help getting started? Contact our team today or request a free quote online. We also offer a downloadable transport checklist to keep everything organized from pickup to drop-off.



                    </p>
                  </div>
                </div>

                {/* Right Image */}
                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Decorative elements */}

                    {/* Main image container */}

                    {/* Image */}
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        {/* Image with enhanced effects */}
                        <img
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754128903/auto_auction_3_lxukk8.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          className="w-full h-[300px] object-cover rounded-2xl shadow-2xl 
                 transition-all duration-700 ease-in-out
                 group-hover:scale-105 group-hover:shadow-3xl
                 group-hover:brightness-110 group-hover:contrast-105"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "/placeholder-transport.jpg";
                            e.target.alt = "Transport service placeholder";
                          }}
                        />

                        {/* Overlay gradient for better text readability */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        />

                        {/* Optional: Loading skeleton */}
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl -z-10" />

                        {/* Optional: Decorative corner accent */}
                        <div
                          className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full 
                    animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

                      {/* Optional: Image caption/badge */}
                      <div
                        className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm 
                  px-3 py-1 rounded-lg text-sm font-medium text-gray-800
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                  transform translate-y-2 group-hover:translate-y-0"
                      >
                        Professional Transport
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
