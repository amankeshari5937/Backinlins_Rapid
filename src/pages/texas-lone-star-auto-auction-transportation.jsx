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

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Nationwide Auction Auto Transport",
      description: "Whether your auction vehicle needs to go across Texas or cross-country, we provide true nationwide auction auto transport. Our wide-reaching carrier network allows us to move vehicles from the auction floor to any state, coast-to-coast, with ease."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Specialized Equipment", 
      description: "Many auction vehicles aren't road-ready, and that's not a problem for us. We're equipped to handle inoperable vehicle auction shipping and salvage car auction hauling using carriers with winches, ramps, and other specialty tools. This ensures safe loading and transport, even when the vehicle can't drive itself."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Flexible Transport Options",
      description: "Every auction vehicle is different. That's why we offer tailored solutions like open carrier transport for budget-conscious buyers, enclosed auto auction shipping for rare or luxury vehicles, and expedited auction car delivery when time is short. You choose what fits best, we handle the rest."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Peace of Mind Features",
      description: "Shipping a newly purchased vehicle can feel risky, but it doesn't have to. Every transport with Rapid includes real-time tracking, full insurance, a pre- and post-delivery inspection process, and a damage-free delivery guarantee. You get transparency, communication, and confidence at every step."
    }
  ];

  const transportTypes = [
    {
      title: "Open Carrier Transport",
      description: "This is the most common and cost-effective option for auction car shipping. Open carriers can move up to 10 vehicles at once, which helps lower the price and speed up scheduling. It's a smart choice for standard vehicles and for buyers looking to minimize transport costs without sacrificing reliability."
    },
    {
      title: "Enclosed Carrier Transport", 
      description: "If you're buying a classic, exotic, or high-value car at auction, enclosed auto auction shipping offers maximum protection. The vehicle travels in a fully enclosed trailer, shielded from road debris, weather, and exposure. Many collectors and dealers transporting showroom-ready inventory prefer this method."
    },
    {
      title: "Expedited Auto Shipping",
      description: "Some auction sites have tight pickup windows, or maybe you're on a short timeline to get the vehicle listed or resold. That's where our expedited auction car delivery comes in. We prioritize your transport for quicker pickup and delivery, often within 24 to 48 hours of vehicle release."
    },
    {
      title: "Non-Running Vehicle Transport",
      description: "Texas Lone Star Auto Auction often includes salvage cars, inoperable units, or non-running vehicles. These can't drive onto a trailer and require specialized carriers with winches or liftgates. We handle these shipments every day, ensuring even the most challenging moves are handled safely and efficiently."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Win the Auction",
      description: "Once your bid is successful, whether online or at the auction site, you'll receive a bill of sale, buyer ID, and possibly a gate pass. These documents are key to unlocking the next step: arranging auction car shipping."
    },
    {
      number: "2", 
      title: "Gather Essential Information",
      description: "We'll need a few key pieces of information to begin: Vehicle description (make, model, VIN), Lot number or stock ID, Your buyer ID or release confirmation, Auction location and hours. This info lets us handle auto auction logistics directly with the auction yard, including access to the lot, verifying the vehicle's release status, and prepping our transport team for pickup."
    },
    {
      number: "3",
      title: "Book a Transport Service",
      description: "Not all vehicles or buyers have the same needs. We offer multiple auction transport services so you can choose what works best for your budget, timeline, and vehicle type: Open carrier auction transport (most popular and cost-effective), Enclosed auto auction shipping (for luxury, exotic, or classic vehicles), Expedited auction car delivery (for tight deadlines or last-minute removals), Non-running or salvage car transport (using winch-equipped carriers or flatbeds). Not sure which option is right? We'll guide you based on the vehicle's condition, value, and destination."
    },
    {
      number: "4",
      title: "Pickup & Delivery",
      description: "Once booked, we'll: Coordinate directly with Texas Lone Star Auto Auction, Schedule pickup within the auction's designated removal window, Inspect and load your vehicle (including photos if requested), Provide live status updates during transit. Whether you're using state-to-state auto auction transport or a local move, your vehicle will arrive on time and damage-free. We make auction car shipping easy from start to finish."
    }
  ];

  const priceExamples = [
    { route: "Texas to Florida", type: "(Sedan, Open Carrier)", price: "$700–$850" },
    { route: "Texas to California", type: "(SUV, Enclosed)", price: "$1,300–$1,600" },
    { route: "Local Texas transport", type: "(Operable Vehicle)", price: "$350–$500" }
  ];

  const costFactors = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Distance",
      description: "Longer hauls (e.g., coast-to-coast) cost more than local or regional moves."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Vehicle Type & Size", 
      description: "Larger or heavier vehicles require more space and fuel."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Carrier Type",
      description: "Enclosed auto auction shipping typically costs 30–50% more than open transport."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Vehicle Condition",
      description: "Inoperable or salvaged cars need specialized loading equipment."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Delivery Urgency",
      description: "Expedited auction car delivery comes at a premium."
    }
  ];


  return (
    <>
      <Head>
        <title>
          Texas Lone Star Auto Auction Car Transport | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Need to ship a car from Texas Lone Star Auto Auction? Rapid Auto Shipping offers reliable, nationwide auction car transport. Get a free quote today!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/texas-lone-star-auto-auction-transportation"
        />
        <meta
          property="og:title"
          content="Texas Lone Star Auto Auction Car Transport | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Need to ship a car from Texas Lone Star Auto Auction? Rapid Auto Shipping offers reliable, nationwide auction car transport. Get a free quote today!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/texas-lone-star-auto-auction-transportation"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754297224/ChatGPT_Image_Aug_4_2025_02_16_51_PM_emm1om.png"
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
                      "https://rapidautoshipping.com/texas-lone-star-auto-auction-transportation",
                    name: "texas-lone-star-auto-auction-transportation",
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
                    Texas Lone Star Auto Auction Car{" "}
                    <span className="text-[#ff5722]">Transport Services</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    If you’ve ever spent a day at the Texas Lone Star Auto
                    Auction, you know the pace is fast, the inventory is
                    wide-ranging, and great deals don’t last long. Whether you
                    walked the lot in person or placed your bid online, landing
                    the winning vehicle is only part of the story. What comes
                    next, getting that car or truck where it needs to go, is
                    where many buyers pause. That’s where Rapid Auto Shipping
                    steps in. We work with buyers at Texas Lone Star every day,
                    offering reliable auction car shipping designed specifically
                    for the unique timing and logistics of this auction.
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
                        Your Trusted Partner for Texas Lone Star Auto Auctions
                        Vehicle Shipping Service
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      The Texas Lone Star Auto Auction has become a key hub for
                      dealers, buyers, and collectors across the country.
                      Whether you’re attending in person or bidding through
                      their digital platform, the auction offers everything from
                      late-model sedans and heavy-duty trucks to inoperable
                      vehicles, motorcycles, and even classic and exotic cars.
                      It’s a fast-paced environment where every sale opens up
                      new opportunities and a need for quick, dependable
                      transport.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      That’s where the real challenge begins. After the auction
                      gavel drops, buyers are often left asking: How do I ship
                      this car from the auction lot to my state? Whether it’s a
                      one-time purchase or part of your dealership’s weekly
                      inventory, arranging auction vehicle delivery can be
                      time-sensitive and confusing, especially if you're
                      unfamiliar with auto auction logistics, paperwork, or
                      deadlines.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      At Rapid Auto Shipping, we specialize in auction car
                      shipping and auto auction shipping from Texas Lone Star,
                      to any destination nationwide. With deep experience in
                      dealer auto transport services, state-to-state auction car
                      transport, and both open carrier and enclosed shipping,
                      we’re built for buyers who need vehicles moved quickly,
                      safely, and without surprises.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754297224/ChatGPT_Image_Aug_4_2025_02_16_51_PM_emm1om.png"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[750px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="min-h-screen bg-white">
    

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #003366 0%, #004080 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              How Texas Lone Star Auto Auctions<br />
              <span style={{color: '#ff5722'}}>Car Transport Works</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Getting your vehicle from the Texas Lone Star Auto Auction to its final destination doesn't need to be complicated. At Rapid Auto Shipping, we've simplified the auto auction transport process to make it smooth, secure, and stress-free. Whether you're moving a single car or managing multiple units, here's how our auction car shipping service works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://rapidautoshipping.com/texas-lone-star-auto-auction-transportation">
              <button 
                className="px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                style={{backgroundColor: '#ff5722'}}
              >
                Get Quote for Texas Lone Star Auto Auction
              </button>
              </Link>
              

            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex space-x-4">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold text-white flex-shrink-0"
                  style={{backgroundColor: '#ff5722'}}
                >
                  {step.number}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{color: '#003366'}}>
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>
              Why Choose Rapid Auto Shipping for Texas Lone Star Auto Auctions Transport Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              Not all vehicle shippers are built for the pace and demands of auto auction transport. When you're working with strict deadlines, non-negotiable release windows, and a wide range of vehicle types, you need more than just a carrier; you need a transport partner who gets it. That's where Rapid Auto Shipping comes in.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              We specialize in auction transport services and understand the logistics that come with buying from high-volume auctions like Texas Lone Star. From pickup coordination to delivery, we handle it all with care, precision, and speed.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0" style={{color: '#ff5722'}}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4" style={{color: '#003366'}}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold max-w-4xl mx-auto" style={{color: '#003366'}}>
              When it comes to auto auction shipping, experience matters. We've worked with thousands of buyers, dealers, and car auction transport companies, and we know how to make the process seamless so you can focus on the next deal, not the delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Transport Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>
              Types of Transport for Texas Lone Star Auto Auctions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Every vehicle bought at auction has its own story and its own shipping needs. Whether you're buying a daily driver, a weekend classic, or a salvage title fixer-upper, choosing the right transport method is key. At Rapid Auto Shipping, we offer several auction transport services designed to match your vehicle type, value, and delivery timeline.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {transportTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4" style={{color: '#003366'}}>
                  {type.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold" style={{color: '#003366'}}>
              No matter what kind of vehicle you're buying, we'll help you choose the best shipping option for your needs. Rapid Auto Shipping offers the flexibility and expertise to match every transport type with every kind of buyer, from first-timers to seasoned auction pros.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>
              What is the Shipping Cost for Texas Lone Star Auto Auctions Car Transport?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              If you're asking, "How much does it cost to ship a car from an auction?", you're not alone. It's one of the most common questions we get, and the honest answer is: it depends. At Rapid Auto Shipping, we believe in full transparency. While prices vary depending on several factors, we're here to make sense of it all and help you find the best value for your transport.
            </p>
          </div>
          
          {/* Factors Affecting Cost */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-center" style={{color: '#003366'}}>
              Factors Affecting Cost
            </h3>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Several factors determine the final price of your auction vehicle delivery, including:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costFactors.map((factor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0" style={{color: '#ff5722'}}>
                      {factor.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{color: '#003366'}}>
                        {factor.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example Price Ranges */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <h3 className="text-3xl font-semibold mb-6 text-center" style={{color: '#003366'}}>
              Example Price Ranges
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Here's a general idea of what auction car shipping might cost:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {priceExamples.map((example, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2" style={{color: '#003366'}}>
                    {example.route}
                  </h4>
                  <p className="text-gray-600 mb-3">{example.type}</p>
                  <p className="text-2xl font-bold" style={{color: '#ff5722'}}>
                    {example.price}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-gray-600 italic">
              These are estimates based on current market trends. Your actual rate will depend on availability, mileage, and carrier demand at the time of booking.
            </p>
          </div>

          {/* Why Get a Quote */}
          <div className="bg-blue-50 p-8 rounded-xl border-l-4" style={{borderColor: '#003366'}}>
            <h3 className="text-2xl font-semibold mb-4" style={{color: '#003366'}}>
              Why Get a Quote?
            </h3>
            <p className="text-gray-700 mb-4">
              Every move is unique, and so is every price. Getting a quote allows us to give you the most accurate, personalized rate based on your vehicle and timing. Plus, we'll walk you through options so you can choose what works best.
            </p>
            <p className="text-gray-700 mb-6">
              At Rapid Auto Shipping, quotes are quick, transparent, and free of charge. You'll know exactly what to expect before your vehicle ever leaves the auction lot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://rapidautoshipping.com/calculator">
              <button 
                className="px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                style={{backgroundColor: '#ff5722'}}
              >
                <Calculator className="w-5 h-5" />
                <span>Get Quick & Transparent Quote</span>
              </button>
              </Link>
              <Link href="tel:+1833233444">
              <button 
                className="px-6 py-3 border-2 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
                style={{borderColor: '#003366', color: '#003366'}}
              >
                <Phone className="w-5 h-5" />
                <span>Free of Charge Consultation</span>
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
                      Buying at auction is exciting, but getting that vehicle
                      home shouldn’t be stressful. Whether you’re a seasoned
                      dealer or a first-time buyer, Rapid Auto Shipping makes
                      auction car transport smooth, affordable, and fully
                      reliable.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      If you’re ready to move forward, we’re here to help. Get a
                      quote for auction car shipping today and let our
                      experienced team walk you through every step. Have
                      questions? Need help with documents or timing? Our support
                      team is just a call or click away.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Ask about our free auction transport checklist to make
                      sure you’re fully prepared, because when it comes to auto
                      auction shipping, being ready makes all the difference.
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
                          className="w-full h-[400px] object-cover rounded-2xl shadow-2xl 
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
