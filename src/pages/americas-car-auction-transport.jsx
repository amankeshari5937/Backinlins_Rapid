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
  Trophy,
  Layers,
  Eye ,
  Zap,
  Quote ,

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
      icon: <Trophy className="w-8 h-8" />,
      title: "Win the Auction",
      description: "This marks the beginning of the auto auction transport. You participate in a live or online auction hosted by America's Auto Auction, where a wide range of vehicles, dealer trade-ins, repossessions, lease returns, and more are up for bidding. Once you place the highest bid and complete the payment, the vehicle is officially yours.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Gather Essential Information",
      description: "After winning the auction bid at America's Auto Auction, you'll need to collect key documents and identifiers: Lot Number: A unique code that identifies your vehicle within the auction yard. Buyer ID: Your registered identification number with the auction house. Release Form or Gate Pass: This document authorizes Rapid Auto Shipping, your auto auction transport services provider, to pick up the vehicle on your behalf. These details are crucial for both the auction house and the shipping company to verify ownership and coordinate logistics.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Book a Transport Service",
      description: "Next, you choose a vehicle shipping provider, such as Rapid Auto Shipping. You'll typically have two main options: Open Carrier: A cost-effective method where your vehicle is transported on an open trailer with other cars. Ideal for standard vehicles. Enclosed Carrier: Offers complete protection from weather and road debris. Best for luxury, exotic, or classic cars. You'll provide the transporter with the auction location, your delivery address, and the necessary documents.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Pickup & Delivery",
      description: "Rapid Auto Shipping will work directly with the auction site to schedule a pickup. Once they confirm the vehicle's readiness and access, we will load the vehicle using appropriate equipment (especially if it's non-running). Secure it for transit and begin the journey to your specified destination. We offer real-time tracking, allowing you to monitor your vehicle's progress. Upon arrival, you or your representative will inspect the vehicle and sign off on the delivery. This process ensures a smooth transition from auction win to driveway delivery, saving you time, effort, and the hassle of arranging transport yourself. Want help comparing transporters or building a checklist for your next auction purchase? We've got you covered.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Nationwide Coverage",
      description: "Our extensive carrier network enables us to provide transportation from any auction site in the U.S. Rapid Auto Shipping boasts an expansive, licensed carrier network that spans all 50 states. Whether your vehicle is located at a central auction hub like America's Auto Auction, or a smaller regional site, we can arrange pickup and delivery to virtually any ZIP code in the U.S. This coast-to-coast reach ensures that no matter where your auction vehicle is located, Rapid Auto Shipping can get it to your doorstep efficiently.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Specialized Equipment",
      description: "Not all auction vehicles are in drivable condition. Rapid Auto Shipping is equipped with winch-enabled trucks and other specialized tools to load and transport non-operational or salvage vehicles safely. This is especially important for buyers of repossessed, flood-damaged, or repairable units that require extra care during loading and unloading.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Flexible Transport Options",
      description: "Customers can choose between: Open Carriers: Ideal for standard vehicles, offering a cost-effective solution. Enclosed Carriers: Perfect for luxury, exotic, or classic cars that need protection from weather and road debris. This flexibility enables buyers to select a transport method tailored to the vehicle's value, condition, and personal preferences.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Peace of Mind",
      description: "Rapid Auto Shipping stands out by offering: Full cargo insurance for every shipment, Damage-free delivery guarantees, Real-time GPS tracking so customers can monitor their vehicle's journey. Our commitment to transparency and safety means you're never left in the dark for your auction transport services, and your investment is protected every mile of the way.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const transportTypes = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Open Carrier Transport",
      description: "This is the most common and budget-friendly method. Vehicles are loaded onto a multi-level, open-air trailer (like the ones you often see on highways). It is best suited for the transportation of Standard sedans, SUVs, and trucks. This is a very cost-effective means of transportation, with faster availability due to high demand. However, in this method, the vehicles are exposed to weather, dust, and road debris, which is not ideal for high-value or delicate vehicles.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Enclosed Carrier Transport",
      description: "A premium option offering maximum protection for vehicles. Perfect for luxury, exotic, or classic cars that need protection from weather and road debris. In this method, vehicles are transported inside a fully enclosed trailer. It is ideal for classic cars, luxury vehicles, exotics, or collectors' items, as it provides enhanced security and privacy. However, this method is more expensive (typically 30–60% higher than open transport) and has limited availability due to limited usage, but the added security and peace of mind often outweigh the price for high-end buyers.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Expedited Shipping",
      description: "Our expedited shipping services are a priority vehicle delivery service designed for buyers who need their auction-purchased vehicles delivered faster than standard timelines. This service is especially valuable for dealers with tight inventory turnover schedules, individuals with urgent transportation needs, or buyers facing auction site storage deadlines. In this method, your vehicle is assigned to the next available carrier, often bypassing standard wait times. In many cases, expedited shipping involves fewer stops or even a dedicated truck, ensuring your vehicle isn't delayed by other deliveries along the route. Because it requires special handling and faster coordination, expedited shipping typically comes at a premium, often 20–50% more than standard transport. However, the time savings and reduced risk of auction storage fees can make it worthwhile.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <>
      <Head>
        <title>America's Car Auction Transport | +1-833-233-4447</title>
        <meta
          name="description"
          content="A few shipping methods are available for the shipment of a car purchased from America's car auction. The two most commonly experienced options are open transport and enclosed transport."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/americas-car-auction-transport"
        />
       
        <meta
          property="og:title"
          content="America's Car Auction Transport | +1-833-233-4447"
        />
        <meta
          property="og:description"
          content="A few shipping methods are available for the shipment of a car purchased from America's car auction. The two most commonly experienced options are open transport and enclosed transport."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/americas-car-auction-transport"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1755340531/29dfc4cc-744e-4095-af84-5a2ac9882456_jx1fzs.png"
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
                      "https://rapidautoshipping.com/americas-car-auction-transport",
                    name: "americas-car-auction-transport",
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
                   America's Auto Auction{" "}
                    <span className="text-[#ff5722]"> Car Transport</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    America's Auto Auction Car Transport is our specialized service that helps buyers move vehicles purchased at America’s Auto Auction to their desired destination, whether it’s across the state or the country. If you're a dealer, collector, or individual buyer, our auction shipping services ensure your newly acquired vehicle from America's Auto Auction gets delivered to you safely and efficiently.
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
                      Your Trusted Partner For America's Auto Auction Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    America’s Auto Auction is one of the largest independent vehicle auction networks in the United States, offering both physical and digital platforms for buying and selling vehicles. With over 30 locations across 20+ states, it caters to dealers, fleet managers, financial institutions, and government agencies. The company hosts weekly live auctions and simulcast events, allowing participants to bid in-lane or online. Its inventory includes dealer trade-ins, lease returns, repossessed vehicles, salvage units, heavy-duty trucks, and specialty vehicles. Through “America’s Digital,” users can access thousands of frontline-ready vehicles 24/7. Their mobile auction units bring the bidding experience directly to dealerships. The company supports both buyers and sellers with real-time data, financing options, and marketing tools.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                     However, once the vehicle is purchased from America's Auto Auction, the buyer then faces the dilemma of transporting the vehicle to its final destination from the auction site. Auction buyers often require auction transport services because the vehicles being auctioned usually necessitate critical logistical support. After analyzing auto auction shipping services models, shipping methodologies, costing schemes, and vital documentation requirements, it becomes clear that auction buyers need auto auction transport services. Hence, Rapid Auto Shipping plays a crucial role in auto auctions in America, including America's Auto Auction for car auction delivery. 
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1755340531/29dfc4cc-744e-4095-af84-5a2ac9882456_jx1fzs.png"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[700px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 lg:py-24">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-blue-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Car className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              How America's Auto Auction Car Transport Works
            </h2>
            
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
              Moving your vehicle from America's Auto Auction is straightforward when you partner with an experienced and reliable auto shipping company, just like Rapid Auto Shipping. We streamlined our shipping process so that your vehicle reaches its destination without a hassle. Here's how it goes:
            </p>
          </div>
        </div>
      </div>

      {/* Process Steps Section */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Mobile Layout (sm and below) */}
                <div className="block lg:hidden">
                  <div className="p-8 text-center">
                    {/* Icon - Above content and centered on mobile */}
                    <div className="flex justify-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1`}>
                        {React.cloneElement(step.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout (lg and above) */}
                <div className="hidden lg:block">
                  <div className="p-12">
                    <div className="flex items-start space-x-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 flex-shrink-0`}>
                        {React.cloneElement(step.icon, { className: "w-10 h-10 text-white" })}
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-orange-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Why Use Rapid Auto Shipping For America's Auto Auction Transport Services?
            </h2>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
              Rapid Auto Shipping is a reliable transportation company that provides efficient and secure auction shipping services for cars from America's Auto Auction. Our primary goal is to ensure the safe and timely delivery of your vehicles through auto auction transport, with a focus on reliability and dependability. We are also the top choice for America's Auto Auction car transport services for the following reasons:
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {whyChooseUs.map((reason, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Mobile Layout */}
                <div className="block lg:hidden">
                  <div className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1`}>
                        {React.cloneElement(reason.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {reason.title}
                    </h3>
                    
                    <p className="text-blue-100 leading-relaxed text-lg">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className="p-12">
                    <div className="flex items-start space-x-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${reason.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 flex-shrink-0`}>
                        {React.cloneElement(reason.icon, { className: "w-10 h-10 text-white" })}
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-6">
                          {reason.title}
                        </h3>
                        
                        <p className="text-blue-100 leading-relaxed text-lg">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transport Types Section */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Layers className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Types of Transport for America's Car Auction Transport
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              When it comes to transporting vehicles purchased from America's Car Auction, selecting the correct type of transport is crucial for ensuring safety, cost efficiency, and peace of mind. Let's break down the main types of transport available at Rapid Auto Shipping for your auto auction transport.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {transportTypes.map((type, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Mobile Layout */}
                <div className="block lg:hidden">
                  <div className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${type.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1`}>
                        {React.cloneElement(type.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {type.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {type.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className="p-12">
                    <div className="flex items-start space-x-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${type.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 flex-shrink-0`}>
                        {React.cloneElement(type.icon, { className: "w-10 h-10 text-white" })}
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                          {type.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shipping Cost Section */}
      <div className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-orange-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              What is the Shipping Cost for America's Auto Auction Car Transport?
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12 hover:bg-white/15 transition-all duration-500">
              <p className="text-xl text-blue-100 leading-relaxed">
                The shipping cost for transporting a vehicle from America's Auto Auction can vary widely based on several key factors, including distance, vehicle type, condition (operable or inoperable), transport method (open or enclosed), and urgency. On average, prices range from $1.40 per mile for short distances (under 500 miles) to as low as $0.60 per mile for coast-to-coast shipments. For example, a 350-mile trip might cost around $490, while a 1,000-mile haul could be approximately $1,000. Enclosed transport, often used for luxury or classic cars, typically costs 30–60% more than open carriers. Inoperable vehicles may incur additional fees due to the need for winch-equipped trucks or forklifts. It's also important to factor in auction-specific timing constraints, as delays can lead to storage fees. To get the most accurate rate for your auto auction transport, it's best to request a personalized quote based on your vehicle's type and pickup/delivery locations from Rapid Auto Shipping.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Link href="https://rapidautoshipping.com/americas-car-auction-transport">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl">
              <DollarSign className="w-6 h-6" />
              <span>Get Your Personalized Quote Today</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            </Link>
          </div>
        </div>
      </div>
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
                     Navigating the post-purchase logistics of America’s Auto Auction doesn’t have to be a hassle. With Rapid Auto Shipping, you gain a trusted partner who understands the unique demands of transporting vehicles to and from auto auctions in America. From nationwide reach and specialized equipment to customizable carrier options and real-time tracking, our comprehensive services are designed to simplify the journey of your vehicle from the auction floor to your doorstep. Whether you're a seasoned dealer or a first-time buyer, our goal is to deliver not just your vehicle, but peace of mind with every mile.
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
