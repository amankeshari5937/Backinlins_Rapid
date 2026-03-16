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
      description: "Rapid Auto Shipping offers reliable nationwide auction auto transport, covering every state in the U.S. No matter where your AutoNation auto auction vehicle is located, whether it's across the state or across the country. We'll deliver it directly to your door. Our state-to-state auto auction transport is ideal for both private buyers and dealerships looking for efficient, coast-to-coast service."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Specialized Equipment", 
      description: "We're equipped to handle all types of vehicles, including those that can't be driven. From inoperable vehicle auction shipping and non-running car auction transport to salvage car auction hauling, our team uses specialized equipment like winches and liftgates to ensure safe loading and unloading. We also offer motorcycle auction transport, accommodating a variety of vehicle types with precision and care."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Flexible Transport Options",
      description: "No two vehicles or buyers are the same, which is why we offer flexible auction transport services to meet your exact needs. Choose open carrier auction transport for standard, everyday vehicles, or go with enclosed auto auction shipping for high-end, exotic, or classic models that require extra protection. Need your vehicle quickly? Our expedited auction car delivery service is designed to get your car to you faster, without compromising safety."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Peace of Mind Features",
      description: "We understand that shipping a car bought at an online auction can feel risky, but we're here to make it worry-free. Every shipment includes full insurance, a damage-free delivery guarantee, and access to real-time GPS tracking so you always know where your vehicle is. Our responsive customer support team is available to answer your questions, handle paperwork, and coordinate every step of the auction car shipping process."
    }
  ];

  const transportTypes = [
    {
      title: "Open Carrier Auction Transport",
      description: "This is the most common and affordable method for auction car shipping. With open carrier auction transport, your vehicle is shipped on a multi-car trailer, similar to what dealerships use for their fleets. It's ideal for everyday cars, trucks, and SUVs bought at AutoNation auto auctions, especially when you're looking for the best value on nationwide auction auto transport."
    },
    {
      title: "Enclosed Auto Auction Shipping", 
      description: "If you've purchased a high-end, exotic, or classic car from an auction, enclosed auto auction shipping offers the best protection. Your vehicle will be shielded from weather, road debris, and prying eyes inside a fully enclosed trailer. Though it costs more than open transport, it's the recommended option for luxury vehicles, rare collector cars, or anything requiring extra care."
    },
    {
      title: "Expedited Auction Car Delivery",
      description: "Need your auction vehicle fast? Our expedited auction car delivery service is perfect for urgent shipments. Whether you're preparing for a resale, event, or personal use, we'll prioritize your transport to shorten delivery windows, without compromising safety or service quality. Great for dealers or buyers on tight timelines."
    },
    {
      title: "Non-Running Vehicle Transport",
      description: "Many auction vehicles can't be driven off the lot, especially salvage cars or units purchased for repair. Our non-running car auction transport services are designed to handle this. We use winches and hydraulic lift systems to safely load and unload inoperable vehicles, ensuring a smooth and damage-free process from pickup to delivery."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Win the Auction",
      description: "Once you've successfully purchased a vehicle from an AutoNation auto auction, you're ready to begin the transport process. Whether it's a classic collector car, a daily driver, or a non-running auction vehicle, we can handle it."
    },
    {
      number: "2", 
      title: "Gather Essential Information",
      description: "Before we can schedule your shipment, make sure you have: Vehicle Identification Number (VIN), Auction lot number, Buyer ID, Gate pass or release form. This helps us coordinate directly with the auction house to release your vehicle quickly and efficiently."
    },
    {
      number: "3",
      title: "Book a Transport Service",
      description: "Choose the option that fits your needs: Open carrier auction transport (Affordable and ideal for most standard vehicles), Enclosed auto auction shipping (Best for high-value, exotic, or classic cars needing extra protection), Expedited auction car delivery (For time-sensitive shipments or urgent delivery needs). We'll confirm your pickup window and transport method to ensure smooth scheduling."
    },
    {
      number: "4",
      title: "Pickup & Delivery",
      description: "Our licensed carriers will: Arrive at the auction site for vehicle pickup, Complete an inspection report and load the vehicle with care, Provide real-time tracking and status updates throughout transit, Deliver your car directly to your door (or designated location) across state lines or locally. From state-to-state auto auction transport to dealer auto transport services, we cover all bases with insured, damage-free shipping."
    }
  ];

  const priceExamples = [
    { route: "Local transport", type: "(under 300 miles)", price: "$250–$500" },
    { route: "Regional transport", type: "(500–1000 miles)", price: "$600–$900" },
    { route: "Cross-country shipping", type: "(2000+ miles)", price: "$1000–$1500+" }
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
           AutoNation Auto Auction Car Transport | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Need to ship a car from AutoNation Auto Auction? Rapid Auto Shipping offers reliable, nationwide auction car transport. Get a free quote today!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/autonation-auction-car-transportation"
        />
        <meta
          property="og:title"
          content=" AutoNation Auto Auction Car Transport | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Need to ship a car from AutoNation Auto Auction? Rapid Auto Shipping offers reliable, nationwide auction car transport. Get a free quote today!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/autonation-auction-car-transportation"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754298988/ChatGPT_Image_Aug_4_2025_02_46_15_PM_p5z1lx.png"
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
                      "https://rapidautoshipping.com/autonation-auction-car-transportation",
                    name: "autonation-auction-car-transportation",
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
                    AutoNation Auto Auction Car {" "}
                    <span className="text-[#ff5722]">Transport Services</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                 Purchasing a vehicle at an AutoNation auto auction is just the beginning; getting it home safely and efficiently is the next big step. Whether you’ve bought a car online or in person, our auto auction transport solutions make the process seamless. At Rapid Auto Shipping, we specialize in auction car shipping across the country, offering reliable, affordable, and hassle-free auction transport services for every type of vehicle. 
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
                        Your Trusted Partner for AutoNation Auto Auctions Vehicle Shipping Service

                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    Buying a car from an AutoNation auto auction, whether in person or online, is an exciting win. But once you’ve sealed the deal, the next step is figuring out how to ship a car from an auction safely and quickly. That’s where Rapid Auto Shipping comes in.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Many buyers, especially dealers and out-of-state customers, face the same dilemma: the car is yours, but it’s sitting hundreds (or thousands) of miles away. Maybe it’s not road-ready, maybe it's a salvage car, or perhaps you're just not up for a long drive. No worries, our expert team provides seamless auto auction transport from any auction site directly to your home, dealership, or lot.

                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    At Rapid Auto Shipping, we specialize in auction car shipping and vehicle auction delivery from auto auctions in America. Whether you need door-to-door auction transport, nationwide auction auto transport, or even inoperable vehicle auction shipping, we make it easy, fast, and affordable. You pick the car, we’ll handle the rest.

                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                   With customized options like open carrier auction transport, enclosed auto auction shipping, or expedited auction car delivery, we ensure your transport solution matches your vehicle and your timeline.


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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754298988/ChatGPT_Image_Aug_4_2025_02_46_15_PM_p5z1lx.png"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[800px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
              How AutoNation Auto Auctions<br />
              <span style={{color: '#ff5722'}}>Car Transport Works</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              At Rapid Auto Shipping, we've streamlined the entire auto auction shipping process to make it fast, simple, and stress-free. Whether you're a private buyer or a dealership, here's precisely how our auction car transport services work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://rapidautoshipping.com/autonation-auction-car-transportation">
              <button 
                className="px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                style={{backgroundColor: '#ff5722'}}
              >
                Get Quote for AutoNation Auto Auction
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
              Why Choose Rapid Auto Shipping for AutoNation Auto Auctions Transport Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              When it comes to auto auction transport, having a dependable partner is crucial. At Rapid Auto Shipping, we specialize in hassle-free, secure, and affordable auction car shipping from AutoNation auto auctions across the U.S. Whether you're a dealer buying in bulk or a private buyer scoring a one-time deal, we make the auction vehicle delivery process smooth from start to finish.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              With our experience, national reach, and commitment to customer satisfaction, we're the go-to choice for buyers who want safe, fast, and fully-insured delivery options.
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
              When you're searching for reliable auction car transport services, trust Rapid Auto Shipping to handle it all from logistics to delivery with speed, care, and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Transport Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>
              Types of Transport for AutoNation Auto Auctions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Every auction vehicle has different shipping needs, and so do buyers. At Rapid Auto Shipping, we understand that auto auction transport isn't one-size-fits-all. That's why we offer a range of auction transport services tailored to your vehicle type, budget, and delivery timeline. Whether you've purchased a reliable sedan, a luxury classic, or a non-running auction car, we have the right solution to ensure safe, efficient, and cost-effective delivery straight from the AutoNation auto auction to your door.
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>
              What is the Shipping Cost for AutoNation Auto Auctions Car Transport?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              When it comes to auction car shipping, one of the first questions buyers ask is, "How much does it cost to ship a car from an auction?" The answer depends on several key factors. At Rapid Auto Shipping, we believe in transparency, and we're here to help you understand what goes into your quote.
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
              To give you a general idea, here are sample price estimates:
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
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                If you're shipping a high-end car using enclosed auto auction shipping, expect to add 30–50% to the cost. Likewise, non-running car auction transport may require winching, which adds to the final price.
              </p>
            </div>
          </div>

          {/* Why Get a Quote */}
          <div className="bg-blue-50 p-8 rounded-xl border-l-4" style={{borderColor: '#003366'}}>
            <h3 className="text-2xl font-semibold mb-4" style={{color: '#003366'}}>
              Why Get a Quote?
            </h3>
            <p className="text-gray-700 mb-6">
              Every auction shipment is unique. Getting a personalized quote ensures you get accurate pricing based on your exact needs. Whether you're shipping a car bought at an online auction or coordinating dealer auto transport services, we tailor your rate based on real-time market factors. Our team is here to help you find the best value with no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
              <button 
                className="px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                style={{backgroundColor: '#ff5722'}}
              >
                <Calculator className="w-5 h-5" />
                <span>Get Personalized Quote</span>
              </button>
              </Link>
              <Link href="tel:+18332334447">
              <button 
                className="px-6 py-3 border-2 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
                style={{borderColor: '#003366', color: '#003366'}}
              >
                <Phone className="w-5 h-5" />
                <span>No Hidden Fees Guarantee</span>
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
                     Whether you're a dealer or private buyer, Rapid Auto Shipping makes auto auction transport reliable and straightforward. From open and enclosed transport to inoperable vehicle auction shipping, we handle every detail nationwide. If you’ve purchased a vehicle through an online or in-person AutoNation auto auction, we’ll ensure fast, damage-free delivery to your door. Get a fast, no-obligation quote today and experience trusted auction car shipping backed by insurance, tracking, and expert support. We’re here to help every step of the way.

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
