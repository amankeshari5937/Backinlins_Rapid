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
      title: "Nationwide Coverage",
      description: "No matter where you are in the U.S., we offer true nationwide auction auto transport. From Missouri to Miami or California to Connecticut, we connect auto auctions in America to your driveway with unmatched speed and efficiency. State-to-state auto auction transport has never been this simple."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Specialized Equipment", 
      description: "Need to move a salvage car, an inoperable vehicle, or even a non-running auction car? We've got the gear and experience to handle it all. Our network includes carriers equipped with winches, soft straps, and enclosed trailers perfect for classic car auction transport, motorcycle auction shipping, and more."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Flexible Transport Options",
      description: "We offer the right service for every situation: Open carrier auction transport (cost-effective and fast), Enclosed auto auction shipping (maximum protection for luxury, exotic, or collectible vehicles), Expedited auction car delivery (when time is tight and speed matters), Door-to-door auction transport (no terminals, no headaches). Whether you're shipping one vehicle or managing multiple lots, our team customizes your auto auction logistics around your timeline and budget."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Peace of Mind Features",
      description: "With Rapid Auto Shipping, you're not just getting a transporter; you're gaining a trusted partner. Every shipment includes: Full insurance coverage, Digital vehicle tracking, Detailed inspections at pickup and delivery, A strong damage-free delivery guarantee backed by thousands of successful hauls. You'll always know where your vehicle is and that it's in safe hands."
    }
  ];

  const transportTypes = [
    {
      title: "Open Carrier Transport",
      description: "This is the most common and budget-friendly solution for auction car shipping. Open carriers are reliable, efficient, and widely available, making them the go-to choice for most buyers and dealers looking for fast, no-frills transport.",
      bestFor: "Daily drivers, multi-vehicle dealer shipments, and short to mid-range hauls."
    },
    {
      title: "Enclosed Carrier Transport", 
      description: "Offering the highest level of protection, enclosed auto auction shipping keeps your vehicle shielded from weather, debris, and road hazards. It's ideal for high-value units that demand extra care during transport.",
      bestFor: "Classic cars, luxury, exotic vehicles, low-clearance sports cars, and cross-country moves."
    },
    {
      title: "Expedited Auto Shipping",
      description: "When time is tight, expedited auction car delivery puts your vehicle at the top of the priority list. This premium service reduces wait times for both pickup and drop-off, helping you meet auction deadlines or avoid storage fees.",
      bestFor: "Urgent deliveries, online auction wins with strict timeframes and dealership inventory replenishment."
    },
    {
      title: "Non-Running Vehicle Transport",
      description: "Need to move a vehicle that doesn't start or roll? No problem. Our non-running car auction transport service is equipped with winches and specialized gear to safely load and unload salvage, inoperable, or damaged auction cars, even without forklift access.",
      bestFor: "Flood-damaged cars, accident vehicles, inoperable or salvage auction purchases."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Win the Auction",
      description: "Once you've placed the winning bid online or in-lane, the clock starts ticking. Like most auctions, Missouri Auto Auction has a short window for vehicle removal. Failing to act fast could result in storage fees or forfeiting the sale.",
      proTip: "Pro tip: Pre-arrange your auto auction transport to save time and avoid the last-minute scramble."
    },
    {
      number: "2", 
      title: "Gather Essential Information",
      description: "Before scheduling auction car hauling, make sure you have: Your lot number and VIN, Gate pass or vehicle release form, Buyer ID or auction account number, Pickup address and hours of operation. This info is especially critical for inoperable vehicles, salvage cars, or non-running auction units, which require special handling."
    },
    {
      number: "3",
      title: "Book a Transport Service",
      description: "Now it's time to select a professional auction transport service. The right option depends on your vehicle type, location, and urgency: Open Carrier Auction Transport (best for standard cars, budget-friendly), Enclosed Auto Auction Shipping (protects high-end, classic, or exotic vehicles), Expedited Auction Car Delivery (fast delivery for time-sensitive purchases), Non-running Car Auction Transport (equipped for vehicles that can't start or roll). Whether you need state-to-state auto auction transport or door-to-door auction car delivery, make sure your provider is licensed, insured, and experienced."
    },
    {
      number: "4",
      title: "Pickup & Delivery",
      description: "Your transporter will coordinate directly with Missouri Auto Auction for vehicle release. Here's what to expect: Vehicle condition inspection and documentation at pickup, Real-time tracking updates during transit, Professional handling with secure loading/unloading, Final delivery inspection to confirm damage-free transport. With trusted auto auction logistics, your vehicle arrives safe, sound, and ready to drive or display."
    }
  ];

  const priceExamples = [
    { route: "Missouri Auto Auction to Dallas, TX", type: "Open carrier", price: "$625–$775" },
    { route: "Missouri to Los Angeles, CA", type: "Enclosed transport", price: "$1,500–$2,000" },
    { route: "Kansas City to Chicago", type: "Open carrier", price: "$525–$675" },
    { route: "Missouri to Miami, FL", type: "Expedited enclosed", price: "$1,700–$2,200" }
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
          Missouri Auto Auctions Car Transport | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Ship vehicles from Missouri Auto Auction with Rapid Auto Shipping. Affordable, nationwide auction transport with open, enclosed & expedited options.
"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/missouri-auto-auction-transportation"
        />
        <meta
          property="og:title"
          content="Missouri Auto Auctions Car Transport | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Ship vehicles from Missouri Auto Auction with Rapid Auto Shipping. Affordable, nationwide auction transport with open, enclosed & expedited options.
"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/missouri-auto-auction-transportation"
        />
    
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754296072/ChatGPT_Image_Aug_4_2025_01_57_14_PM_g15ajy.png"
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
                      "https://rapidautoshipping.com/missouri-auto-auction-transportation",
                    name: "missouri-auto-auction-transportation",
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
                    Missouri Auto Auction Car{" "}
                    <span className="text-[#ff5722]">Transport Services</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Just score a great deal at a car auction? Now comes the
                    tricky part: getting your new vehicle safely delivered.
                    Whether you're a dealer moving inventory, a collector
                    transporting a classic, or a first-time buyer navigating an
                    online auction, shipping shouldn’t be stressful. That’s
                    where professional auto auction transport comes in. With
                    services customized for speed, safety, and convenience,
                    companies like Rapid Auto Shipping make auction car shipping
                    easier than ever.
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
                        Your Trusted Partner for Missouri Auto Auctions Vehicle
                        Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Missouri Auto Auction is a go-to destination for dealers,
                      collectors, and wholesale buyers nationwide. Known for its
                      efficient digital and in-person bidding options, this
                      auction features everything from fleet vehicles and
                      salvage cars to exotic cars, classic vehicles, and
                      non-running units. As one of the most active auto auctions
                      in America, securing a winning bid is just the first step;
                      arranging auction car transport is the next critical move.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Many buyers face a common challenge after purchase: How do
                      I ship a car from Missouri Auto Auction? Most auctions,
                      including Missouri Auto Auction, require prompt vehicle
                      removal and offer no in-house transport. Whether you're
                      dealing with an inoperable vehicle, a salvage title car,
                      or a high-end classic, coordinating reliable auction
                      vehicle delivery is essential.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      This is where trusted auction transport services come in.
                      Choosing the right partner helps you avoid storage fees,
                      delays, and costly mistakes. Whether you need enclosed
                      auto auction shipping, open carrier auction transport, or
                      expedited auction car delivery, a dependable provider like
                      Rapid Auto Shipping ensures your vehicle is moved safely
                      and on time without putting a burden on your pocket.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754296072/ChatGPT_Image_Aug_4_2025_01_57_14_PM_g15ajy.png"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[700px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
              How Missouri Auto Auctions<br />
              <span style={{color: '#ff5722'}}>Car Transport Works</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Buying a vehicle from Missouri Auto Auction is only half the journey; the next step is getting it home quickly and safely. Whether you're a dealer stocking up or a buyer investing in your dream car, here's exactly how the auction car shipping process works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <Link href="https://rapidautoshipping.com/missouri-auto-auction-transportation">
              <button 
                className="px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                style={{backgroundColor: '#ff5722'}}
              >
                Get Quote for Missouri Auto Auction
              </button>
              </Link>
              <Link href="https://rapidautoshipping.com/calculator">
              <button 
                className="px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Online Car Shipping Cost Calculator
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
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
                    {step.description}
                  </p>
                  {step.proTip && (
                    <div className="bg-orange-50 p-3 rounded-lg border-l-4" style={{borderColor: '#ff5722'}}>
                      <p className="text-sm font-semibold" style={{color: '#ff5722'}}>
                        {step.proTip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold" style={{color: '#003366'}}>
              When you partner with a top-tier car auction transport company, the entire process from the auction floor to your front door is seamless, secure, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>
              Why Choose Rapid Auto Shipping for Missouri Auto Auctions Transport Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              When your vehicle purchase is on the line, you don't want to gamble with your transport. That's why smart buyers and dealers across the U.S. turn to Rapid Auto Shipping, a proven leader in auction car shipping from Missouri Auto Auction. We make the process seamless, reliable, and completely stress-free.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Here's what sets us apart from other car auction transport companies:
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
            <p className="text-lg font-semibold max-w-4xl mx-auto" style={{color: '#003366'}} >
              We don't just move vehicles; we move trust, speed, and peace of mind. Choose Rapid Auto Shipping for your next Missouri Auto Auction transport, and experience how easy auction car hauling should be.
            </p>
          </div>
        </div>
      </section>

      {/* Transport Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>
              Types of Transport for Missouri Auto Auctions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Not every vehicle you win at Missouri Auto Auction will need the same shipping approach. Whether you're moving a standard sedan or a rare collector's car, choosing the right auto auction transport service is critical for a smooth delivery. Here's a breakdown of the most common transport options tailored to your needs:
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {transportTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4" style={{color: '#003366'}}>
                  {type.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <div className="border-l-4 pl-6" style={{borderColor: '#ff5722'}}>
                  <p className="font-semibold mb-2" style={{color: '#ff5722'}}>Best for:</p>
                  <p className="text-gray-700">{type.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold" style={{color: '#003366'}}>
              Whether you need open carrier affordability, enclosed transport protection, or special handling for non-running vehicles, we provide the right option to fit your needs and budget. Every solution is designed to simplify your vehicle auction shipping process from Missouri Auto Auction to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>
              What is the Shipping Cost for Missouri Auto Auctions Car Transport?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              If you've just placed the winning bid at Missouri Auto Auction, your next question is probably: "What will it cost to ship my car?" While there's no one-size-fits-all answer, we make it easy to understand what goes into the price and how to get the best deal on auction car shipping.
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
              To give you a ballpark idea, here are some average rates for vehicle auction shipping:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
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
              Rates may vary based on seasonality, fuel prices, and trailer availability.
            </p>
          </div>

          {/* Why Get a Quote */}
          <div className="bg-blue-50 p-8 rounded-xl border-l-4" style={{borderColor: '#003366'}}>
            <h3 className="text-2xl font-semibold mb-4" style={{color: '#003366'}}>
              Why Get a Quote?
            </h3>
            <p className="text-gray-700 mb-6">
              Every auction shipment has a unique location, vehicle type, and delivery window, all of which impact cost. Use our online car shipping cost calculator tool or call us directly to get a quote for auction car shipping tailored to your exact situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://rapidautoshipping.com/calculator">
              <button 
                className="px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                style={{backgroundColor: '#ff5722'}}
              >
                <Calculator className="w-5 h-5" />
                <span>Online Car Shipping Cost Calculator Tool</span>
              </button>
              </Link>
              <Link href="tel:+18332334447">
              <button 
                className="px-6 py-3 border-2 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
                style={{borderColor: '#003366', color: '#003366'}}
              >
                <Phone className="w-5 h-5" />
                <span>Call for Auction Car Shipping Quote</span>
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
                      Whether you’ve just won your first car or you’re a
                      seasoned dealer with multiple purchases at Missouri Auto
                      Auction, getting your vehicle delivered safely, quickly,
                      and affordably is key. From open and enclosed transport to
                      inoperable vehicle shipping and expedited delivery,
                      there’s a transport option for every situation and budget.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Need help planning your shipment or looking for a custom
                      quote? Our team is ready to guide you through every step.
                      You can even request a free auction car transport
                      checklist to simplify the process.
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
