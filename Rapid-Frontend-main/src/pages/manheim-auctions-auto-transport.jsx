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
      description:
        "Our extensive carrier network enables us to provide transportation from any auction site in the U.S. Rapid Auto Shipping boasts an expansive, licensed carrier network that spans all 50 states. Whether your vehicle is located at a central auction hub, such as Manheim Auction, or a smaller regional site, we can arrange pickup and delivery to virtually any ZIP code in the U.S. This coast-to-coast reach ensures that, no matter where your auction vehicle is located, Rapid Auto Shipping can deliver it to your doorstep efficiently.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Specialized Equipment",
      description:
        "Not all auction vehicles are in drivable condition. Rapid Auto Shipping is equipped with winch-enabled trucks and other specialized tools to load and transport non-operational or salvage vehicles safely. This is especially important for buyers of repossessed, flood-damaged, or repairable units that require extra care during loading and unloading.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Flexible Transport Options",
      description:
        "Customers can choose between: Open Carriers (Ideal for standard vehicles, offering a cost-effective solution), Enclosed Carriers (Perfect for luxury, exotic, or classic cars that need protection from weather and road debris). This flexibility enables buyers to select a transport method tailored to the vehicle's value, condition, and personal preferences.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Peace of Mind",
      description:
        "Rapid Auto Shipping stands out by offering: Full cargo insurance for every shipment, Damage-free delivery guarantees, Real-time GPS tracking so customers can monitor their vehicle's journey. Our commitment to transparency and safety means you're never left in the dark for your auction transport services, and your investment is protected every mile of the way.",
    },
  ];

  const transportTypes = [
    {
      title: "Open Carrier Transport",
      description:
        "This is the most common and budget-friendly method. Vehicles are loaded onto a multi-level, open-air trailer (like the ones you often see on highways). It is best suited for the transportation of Standard sedans, SUVs, and trucks. This is a very cost-effective means of transportation, with faster availability due to high demand.",
      note: "However, in this method, the vehicles are exposed to weather, dust, and road debris, which is not ideal for high-value or delicate vehicles.",
    },
    {
      title: "Enclosed Carrier Transport",
      description:
        "A premium option offering maximum protection for vehicles. Perfect for luxury, exotic, or classic cars that need protection from weather and road debris. In this method, vehicles are transported inside a fully enclosed trailer. It is ideal for classic cars, luxury vehicles, exotics, or collectors' items, as it provides enhanced security and privacy.",
      note: "However, this method is more expensive (typically 30–60% higher than open transport) and has limited availability due to limited usage, but the added security and peace of mind often outweigh the price for high-end buyers.",
    },
    {
      title: "Expedited Shipping",
      description:
        "Our expedited shipping services are a priority vehicle delivery service designed for buyers who need their auction-purchased vehicles delivered faster than standard timelines. This service is especially valuable for dealers with tight inventory turnover schedules, individuals with urgent transportation needs, or buyers facing auction site storage deadlines. In this method, your vehicle is assigned to the next available carrier, often bypassing standard wait times.",
      note: "In many cases, expedited shipping involves fewer stops or even a dedicated truck, ensuring your vehicle isn't delayed by other deliveries along the route. Because it requires special handling and faster coordination, expedited shipping typically comes at a premium, often 20–50% more than standard transport. However, the time savings and reduced risk of auction storage fees can make it worthwhile.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Win the Auction",
      description:
        "This marks the beginning of the auto auction transport. You participate in a live or online auction hosted by Manheim Auction, where a wide range of vehicles, dealer trade-ins, repossessions, lease returns, and more are up for bidding. Once you place the highest bid and complete the payment, the vehicle is officially yours.",
    },
    {
      number: "2",
      title: "Gather Essential Information",
      description:
        "After winning the auction bid at Manheim Auction, you'll need to collect key documents and identifiers: Lot Number (A unique code that identifies your vehicle within the auction yard), Buyer ID (Your registered identification number with the auction house), Release Form or Gate Pass (This document authorizes Rapid Auto Shipping, your auto auction transport services provider, to pick up the vehicle on your behalf). These details are crucial for both the auction house and the shipping company to verify ownership and coordinate logistics.",
    },
    {
      number: "3",
      title: "Book a Transport Service",
      description:
        "Next, you choose a vehicle shipping provider, such as Rapid Auto Shipping. You'll typically have two main options: Open Carrier (A cost-effective method where your vehicle is transported on an open trailer with other cars. Ideal for standard vehicles), Enclosed Carrier (Offers complete protection from weather and road debris. Best for luxury, exotic, or classic cars). You'll provide the transporter with the auction location, your delivery address, and the necessary documents.",
    },
    {
      number: "4",
      title: "Pickup & Delivery",
      description:
        "Rapid Auto Shipping will work directly with the auction site to schedule a pickup. Once they confirm the vehicle's readiness and access, we will load the car using appropriate equipment (especially if it's non-running). Secure it for transit and begin the journey to your specified destination. We offer real-time tracking, allowing you to monitor your vehicle's progress. Upon arrival, you or your representative will inspect the vehicle and sign off on the delivery.",
    },
  ];

  return (
    <>
      <Head>
        <title>Manheim Auctions Auto Transport | +1-833-233-4447</title>
        <meta
          name="description"
          content="Are you considering transporting your vehicle to or from Manheim auctions? Rapid Auto Shipping makes transporting vehicles easier."
        />
       
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/manheim-auctions-auto-transport"
        />
        <meta
          property="og:title"
          content="Manheim Auctions Auto Transport | +1-833-233-4447"
        />
        <meta
          property="og:description"
          content="Are you considering transporting your vehicle to or from Manheim auctions? Rapid Auto Shipping makes transporting vehicles easier."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/manheim-auctions-auto-transport"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754389690/ChatGPT_Image_Aug_5_2025_03_54_07_PM_yqwvyc.png"
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
                      "https://rapidautoshipping.com/manheim-auctions-auto-transport",
                    name: "manheim-auctions-auto-transport",
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
                    Manheim Auction{" "}
                    <span className="text-[#ff5722]">Car Transport</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Rapid Auto Shipping offers Manheim Auction auto shipping
                    services nationwide, facilitating the movement of vehicles
                    to and from its auction sites by providing logistics support
                    tailored to the auction process. These services are
                    essential for dealers, fleet managers, and individuals who
                    buy or sell vehicles through Manheim, as they require
                    reliable auto auction shipping services.
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
                        Your Trusted Partner For Manheim Auction Car Transport
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Manheim Auction is one of the largest and most influential
                      wholesale vehicle marketplaces in the world, specializing
                      in the buying and selling of used cars for auto auctions
                      in America. Founded in 1945 in Pennsylvania, it has grown
                      into a global powerhouse with over 100 physical and
                      digital auction sites across North America and operations
                      in 11 countries. Manheim is a subsidiary of Cox
                      Automotive, facilitating the sale of nearly 6 million
                      vehicles annually and generating tens of billions of
                      dollars in transactions. Manheim connects automotive
                      dealers, fleet managers, rental companies, and
                      manufacturers through a seamless auction experience, both
                      in-person and online. Whether you're a dealer looking to
                      replenish inventory or a seller aiming to offload fleet
                      vehicles, Manheim provides a trusted, tech-driven platform
                      to streamline the process.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      When it comes to buying vehicles through Manheim Auctions,
                      having a trusted partner for auto auction transport is
                      essential, and that’s where Rapid Auto Shipping steps in.
                      We serve as the crucial link between the auction lot and
                      your driveway, offering secure, reliable, and hassle-free
                      auction transport services for every vehicle you win. With
                      deep knowledge of Manheim’s processes, including gate pass
                      protocols, VIN tracking, and lot coordination, we ensure
                      your car is picked up promptly and delivered safely,
                      regardless of its destination within the U.S. Whether
                      you're a dealership moving multiple units or an individual
                      securing your dream car, we provide tailored services such
                      as open or enclosed carriers, expedited shipping, and
                      real-time tracking for car auction delivery. Rapid Auto
                      Shipping simplifies the complexity of post-auction
                      logistics, allowing you to focus on the next sale, trade,
                      or vehicle handover.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754389690/ChatGPT_Image_Aug_5_2025_03_54_07_PM_yqwvyc.png"
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
            <section
              className="relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #004080 100%)",
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center text-white">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    How Manheim Auction
                    <br />
                    <span style={{ color: "#ff5722" }}>
                      Car Transport Works
                    </span>
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                    Transporting a vehicle from Manheim Auto Auction is a simple
                    process when you have the right team on your side. At Rapid
                    Auto Shipping, we streamline the entire process from the
                    auction floor to the delivery location so that you can focus
                    on the next deal, not the logistics. Here's how it works.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">

                    <Link href="https://rapidautoshipping.com/manheim-auctions-auto-transport">
                    <button
                      className="px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      Get Quote for Manheim Auction Transport
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
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                      <div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold text-white flex-shrink-0 mx-auto sm:mx-0"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        {step.number}
                      </div>
                      <div className="min-w-0 text-center sm:text-left">
                        <h3
                          className="text-xl sm:text-2xl font-semibold mb-3"
                          style={{ color: "#003366" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 text-center">
                  <p
                    className="text-lg font-semibold max-w-4xl mx-auto"
                    style={{ color: "#003366" }}
                    
                  >
                    This process ensures a smooth transition from auction win to
                    driveway delivery, saving you time, effort, and the hassle
                    of arranging transport yourself. Want help comparing
                    transporters or building a checklist for your next auction
                    purchase? We've got you covered.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2
                    className="text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Why Use Rapid Auto Shipping For Manheim Auction Transport
                    Services?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
                    Rapid Auto Shipping is a reliable transportation company
                    that provides efficient and secure auction shipping services
                    for cars from Manheim Auction. Our primary goal is to ensure
                    the safe and timely delivery of your vehicles through auto
                    auction transport, with a focus on reliability and
                    dependability.
                  </p>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    We are also the top choice for Manheim Auction car transport
                    services for the following reasons:
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                        <div
                          className="flex-shrink-0 mx-auto sm:mx-0"
                          style={{ color: "#ff5722" }}
                        >
                          {feature.icon}
                        </div>
                        <div className="text-center sm:text-left">
                          <h3
                            className="text-2xl font-semibold mb-4"
                            style={{ color: "#003366" }}
                          >
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
              </div>
            </section>

            {/* Transport Types Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2
                    className="text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Types of Transport for Manheim Auction Transport
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    When it comes to transporting vehicles purchased from
                    Manheim Auction, selecting the correct type of transport is
                    crucial for ensuring safety, cost efficiency, and peace of
                    mind. Let's break down the main types of transport available
                    at Rapid Auto Shipping for your auto auction transport.
                  </p>
                </div>
                <div className="space-y-8">
                  {transportTypes.map((type, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-xl">
                      <h3
                        className="text-2xl font-semibold mb-4"
                        style={{ color: "#003366" }}
                      >
                        {type.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {type.description}
                      </p>
                      <div
                        className="bg-orange-50 p-4 rounded-lg border-l-4"
                        style={{ borderColor: "#ff5722" }}
                      >
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {type.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2
                    className="text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    What is the Shipping Cost for Manheim Auction Car Transport?
                  </h2>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The shipping cost for transporting a vehicle from Manheim
                    Auction can vary widely based on several key factors,
                    including distance, vehicle type, condition (operable or
                    inoperable), transport method (open or enclosed), and
                    urgency.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3
                        className="text-xl font-semibold mb-4"
                        style={{ color: "#003366" }}
                      >
                        Average Pricing Structure
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">
                            Short distances (under 500 miles):
                          </span>
                          <span
                            className="font-semibold"
                            style={{ color: "#ff5722" }}
                          >
                            $1.40 per mile
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">
                            Coast-to-coast shipments:
                          </span>
                          <span
                            className="font-semibold"
                            style={{ color: "#ff5722" }}
                          >
                            as low as $0.60 per mile
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3
                        className="text-xl font-semibold mb-4"
                        style={{ color: "#003366" }}
                      >
                        Example Costs
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">350-mile trip:</span>
                          <span
                            className="font-semibold"
                            style={{ color: "#ff5722" }}
                          >
                            around $490
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">
                            1,000-mile haul:
                          </span>
                          <span
                            className="font-semibold"
                            style={{ color: "#ff5722" }}
                          >
                            approximately $1,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3
                      className="text-xl font-semibold mb-4"
                      style={{ color: "#003366" }}
                    >
                      Additional Cost Factors
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-2">
                        <div className="mx-auto sm:mx-0">
                          <Shield
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            style={{ color: "#ff5722" }}
                          />
                        </div>
                        <span className="text-center sm:text-left">
                          Enclosed transport, often used for luxury or classic
                          cars, typically costs 30–60% more than open carriers.
                        </span>
                      </li>
                      <li className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-2">
                        <div className="mx-auto sm:mx-0">
                          <Wrench
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            style={{ color: "#ff5722" }}
                          />
                        </div>
                        <span className="text-center sm:text-left">
                          Inoperable vehicles may incur additional fees due to
                          the need for winch-equipped trucks or forklifts.
                        </span>
                      </li>
                      <li className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-2">
                        <div className="mx-auto sm:mx-0">
                          <Clock
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            style={{ color: "#ff5722" }}
                          />
                        </div>
                        <span className="text-center sm:text-left">
                          It's also important to factor in auction-specific
                          timing constraints, as delays can lead to storage
                          fees.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <p className="text-lg text-gray-700 mb-6">
                      To get the most accurate rate for your auto auction
                      transport, it's best to request a personalized quote based
                      on your vehicle's type and pickup/delivery locations from
                      Rapid Auto Shipping.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                        <button
                          className="px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Calculator className="w-5 h-5" />
                          <span>Get Personalized Quote</span>
                        </button>
                      </Link>
                      <Link href="tel:+18332334447">
                        <button
                          className="px-6 py-3 border-2 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
                          style={{ borderColor: "#003366", color: "#003366" }}
                        >
                          <Phone className="w-5 h-5" />
                          <span>Most Accurate Rate Available</span>
                        </button>
                      </Link>
                    </div>
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
                      In the fast-paced world of auto auctions in America,
                      Manheim Auction's car transport plays a vital role in
                      turning successful bids into seamless vehicle deliveries.
                      Whether you're a dealer managing high-volume transactions
                      or a first-time buyer scoring a great deal, choosing a
                      seasoned shipping partner like Rapid Auto Shipping ensures
                      your investment is protected every step of the way. With
                      nationwide coverage, flexible transport options, real-time
                      tracking, and specialized handling for even the most
                      delicate or inoperable vehicles, you can count on us for
                      auto auction transport services that blend speed, safety,
                      and simplicity. From gate pass to driveway, we take the
                      guesswork out of logistics, so all that’s left for you to
                      do is enjoy the ride.
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
