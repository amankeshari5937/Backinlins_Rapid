"use client";

import React, { useState, useEffect } from "react";

import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import StatsSection from "@/components/CommonComponents/StatsSection";
import {
  Truck,
  Plus,
  Minus,
  Car,
  CreditCard,
  DollarSign,
  Star,
  Wrench,
  FileText,
  AlertTriangle,
  ArrowDown,
  RotateCcw,
  Maximize2,
  ArrowUpDown,
  Move,
  Grid3X3,
  Package,
  Fuel,
  Box,
  CheckCircle,
  TrendingUp,
  Cloud,
  Navigation,
  ArrowRight,
  GraduationCap,
  UserCheck,
  Eye,
  Globe,
  Ruler,
  Award,
  MapPin,
  Calendar,
  Check,
  Clock,
  Shield,
  Phone,
  Users,
  Settings,
  Leaf,
  Mountain,
  Scissors,
  Mail,
  Target,
  Weight,
  Route,
  Zap,
  Calculator,
  Ship,
  HelpCircle,
  MessageCircle,
  Building,
  Gavel,
} from "lucide-react";
import Image from "next/image";

const Hello = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [openItems, setOpenItems] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const trailerTypes = [
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "RGN (Removable Gooseneck) Trailers",
      description:
        "RGN trailers are ideal for non-operational Cascadias or those that can't be driven onto a standard deck. The detachable front allows the trailer to lower to the ground, creating a ramp for direct loading. This is particularly useful at auction lots, remote job sites, or locations without loading docks.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <ArrowDown className="w-8 h-8" />,
      title: "Double Drop & Multi-Axle Trailers",
      description:
        "When your Cascadia exceeds height or weight limitations, we can assign double drop or multi-axle trailers. These trailers are built to haul oversized loads, offering additional ground clearance and weight distribution for regulatory compliance.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Maximize2 className="w-8 h-8" />,
      title: "Extendable Flatbeds",
      description:
        "If your shipment includes long-frame Cascadia models or truck-trailer combinations, we may use extendable trailers to support the entire length of the load without overhang violations.",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const faqData = [
    {
      icon: <Truck className="w-5 h-5" />,
      question: "Do you transport Freightliner Cascadia trucks?",
      answer:
        "Yes! Rapid Auto Shipping specializes in shipping Freightliner Cascadia trucks nationwide. Whether it's a single unit or part of a fleet, we have the experience and equipment to move it safely and efficiently.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "Is the Freightliner Cascadia considered an oversized load?",
      answer:
        "Depending on the model and configuration (sleeper cab, extended chassis, etc.), the Cascadia often qualifies as an oversized vehicle, requiring special permits and a lowboy or step-deck trailer. We handle all compliance and route planning.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Can you ship both new and used Cascadia trucks?",
      answer:
        "Absolutely. We transport new, used, lease-returned, and even inoperable Freightliner Cascadia units. Just let us know the condition and pickup location when requesting a quote.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is my Freightliner insured during transport?",
      answer:
        "Yes. All shipments are fully insured while in transit. Our carriers are DOT-compliant, and we provide a detailed inspection report at pickup and delivery.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "How long does it take to ship a Freightliner Cascadia?",
      answer:
        "Transit time depends on the distance. Local hauls may take 1–3 days, while cross-country shipments typically range from 5–7 business days. Expedited service is available.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      question:
        "How do I schedule Freightliner Cascadia shipping with Rapid Auto Shipping?",
      answer:
        "Just fill out our online quote form or call us directly. Our team will guide you through the process, including scheduling, permits, and securing the proper trailer for safe transport.",
    },
  ];
  return (
    <>
      <Head>
        <title>Freightliner Cascadia Shipping Services | +1-833-233-4447</title>
        <meta
          name="description"
          content="Are you looking for a Freightliner Cascadia truck transportation service? Rapid Auto Shipping is a service that can help you meet your auto shipping needs."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/freightliner-cascadia"
        />
        <meta
          property="og:title"
          content="Freightliner Cascadia Shipping Services | +1-833-233-4447"
        />
        <meta
          property="og:description"
          content="Are you looking for a Freightliner Cascadia truck transportation service? Rapid Auto Shipping is a service that can help you meet your auto shipping needs."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/freightliner-cascadia"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754045169/ChatGPT_Image_Aug_1_2025_01_07_16_PM_ronffj.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Freightliner Cascadia",
              provider: {
                "@type": "Organization",
                name: "Rapid Auto Shipping",
                url: "https://rapidautoshipping.com",
                logo: "https://rapidautoshipping.com/path/to/logo.png",
                telephone: "+1-833-233-4447",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "817 Horsham Rd",
                  addressLocality: "Horsham",
                  addressRegion: "PA",
                  postalCode: "19044",
                  addressCountry: "US",
                },
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 39.8283,
                  longitude: -98.5795,
                },
                geoRadius: 3000,
              },
              description:
                "Are you looking for a Freightliner Cascadia truck transportation service? Rapid Auto Shipping is a service that can help you meet your auto shipping needs.",
              url: "https://rapidautoshipping.com/freightliner-cascadia",
            }),
          }}
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
                  name: "Home",
                  item: "https://rapidautoshipping.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Freightliner Cascadia",
                  item: "https://rapidautoshipping.com/freightliner-cascadia",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754045153/ChatGPT_Image_Aug_1_2025_12_32_58_PM_bci9dd.png"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754045153/ChatGPT_Image_Aug_1_2025_12_32_58_PM_bci9dd.png"
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
                    Freightliner Cascadia Shipping Services |{" "}
                    <span className="text-[rgb(255,87,34)]">
                      Rapid Auto Shipping
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Are you looking to ship a Freightliner Cascadia heavy-duty
                    truck across the state or nationwide? Rapid Auto Shipping
                    provides expert large truck and equipment transportation
                    services tailored to meet the demands of the commercial
                    trucking industry. Whether you're relocating, buying or
                    selling a Freightliner, or managing fleet logistics, our
                    team ensures safe, timely, and cost-effective shipping every
                    time.
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
                        What is a Freightliner Cascadia?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      The Freightliner Cascadia is a top-tier, Class 8
                      semi-truck manufactured for durability, comfort, and fuel
                      efficiency. It’s one of the most widely used trucks for
                      long-haul operations in North America, favored by
                      logistics companies, fleet operators, and independent
                      drivers. Depending on the configuration, the Cascadia can
                      be equipped with a day cab or a sleeper cab, and it comes
                      in different lengths and heights to suit various hauling
                      needs. These size differences directly affect how it must
                      be transported.
                    </p>{" "}
                    <br />
                    <b>For example:</b> <br />
                    <ul
                      className="text-lg text-gray-700 leading-relaxed text-justify ml-5"
                      style={{ listStyle: "square" }}
                    >
                      <li>
                        A day cab in Cascadia is more compact and lighter, often
                        easier to load and transport.
                      </li>

                      <li className="mt-5">
                        A sleeper cab Cascadia is more extended and taller,
                        requiring a specialized trailer to comply with height
                        and weight regulations on the road.
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Knowing about these differences is key to ensuring the
                      right equipment and method are used during shipping.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754045156/ChatGPT_Image_Aug_1_2025_12_10_55_PM_emvvzj.png"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[600px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
              className="py-8 px-6"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #004080 100%)",
              }}
            >
              <div className="max-w-7xl mx-auto text-center text-white">
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  Specialized Freightliner Transport Services
                </h2>
                <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
                  In addition to single-unit transport, Rapid Auto Shipping also
                  specializes in high-volume, commercial-grade services for
                  businesses, dealers, and buyers across the country. Whether
                  you're managing a fleet move, transferring dealership
                  inventory, or coordinating an auction pickup, we offer
                  tailored solutions that meet strict timelines and operational
                  demands.
                </p>
              </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 px-6 bg-gray-200">
              <div className="max-w-7xl mx-auto">
                {/* Changed from md:grid-cols-3 to md:grid-cols-2 for 2 cards per row */}
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: <Users className="w-12 h-12" />,
                      title: "Fleet Relocation Services",
                      description:
                        "We work with logistics managers, freight companies, and corporate fleets to handle the transport of multiple Freightliner trucks across short or long distances.",
                      features: [
                        "Fleet upgrades and replacement programs",
                        "Relocation of leased or owned vehicles",
                        "Terminal-to-terminal or door-to-door transport",
                      ],
                      para: "We coordinate the right carriers, ensure compliance with state regulations, and minimize downtime during transfers.",
                    },
                    {
                      icon: <Building className="w-12 h-12" />,
                      title: "Dealership Transfers",
                      description:
                        "Whether you're a Freightliner dealer moving trucks between locations or preparing new deliveries for customers, our dealership transport services ensure smooth and secure transfers.",
                      features: [
                        "Operable and non-operable units",
                        "Flexible scheduling options",
                        "Single-carrier solutions",
                        "Complete control and visibility",
                      ],
                      para: "",
                    },
                    {
                      icon: <Gavel className="w-12 h-12" />,
                      title: "Auction and Salvage Transport",
                      description:
                        "We regularly transport Freightliner trucks purchased from major auctions. These trucks may be damaged, incomplete, or non-drivable.",
                      features: [
                        "Ritchie Bros.",
                        "Copart",
                        "IAA",
                        "IronPlanet",
                        "Local salvage or surplus sales",
                      ],
                      para: "These trucks may be damaged, incomplete, or non-drivable, so we deploy RGN or winch-equipped trailers when needed. Our team handles all necessary paperwork, gate releases, and coordination with auction yards, saving you time and hassle.",
                    },
                    {
                      icon: <Gavel className="w-12 h-12" />,
                      title: "Custom Logistics, Nationwide",
                      description:
                        "No matter the condition or location of your Freightliner Trucks, Rapid Auto Shipping provides:",
                      features: [
                        "Nationwide coverage",
                        "Real-time tracking",
                        "Full licensing and insurance",
                        "Transparent communication throughout the process",
                      ],
                      para: "From a single truck to full fleet logistics, we deliver dependable service backed by industry expertise and equipment suited for the job.",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                        style={{
                          backgroundColor:
                            hoveredCard === index ? "#ff5722" : "#003366",
                          color: "white",
                        }}
                      >
                        {service.icon}
                      </div>
                      <h3
                        className="text-2xl font-bold mb-4"
                        style={{ color: "#003366" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle
                              className="w-5 h-5 flex-shrink-0"
                              style={{ color: "#ff5722" }}
                            />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-600 leading-relaxed">
                        {service.para}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Transport Methods */}
            <section className="py-20 px-6 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2
                    className="text-5xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    How We Ship Freightliner Cascadia Trucks: Transport Methods
                    & Trailer Types
                  </h2>
                  <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                    Shipping a Freightliner Cascadia, a full-size Class 8
                    commercial truck, requires specialized planning and
                    equipment. At Rapid Auto Shipping, we specialize in open
                    transport using professional-grade trailers designed for
                    heavy-duty hauling. Our approach ensures the safe,
                    compliant, and cost-effective delivery of your truck,
                    whether you're relocating a single unit or managing an
                    entire fleet.
                  </p>
                </div>

                <div
                  className="mb-16 p-8 rounded-2xl"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <h3
                    className="text-3xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Why Open Transport is Standard for Freightliner Cascadia
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Given the Freightliner Cascadia's size, weight, and height,
                    open-air transport is the most practical and widely used
                    shipping method. These trucks are designed to withstand
                    various road conditions, so exposure during transport is not
                    a concern.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4
                        className="text-xl font-bold mb-4"
                        style={{ color: "#ff5722" }}
                      >
                        Open transport provides:
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "A straightforward, efficient shipping process",
                          "Full compatibility with available heavy-haul trailers",
                          "Nationwide accessibility to suitable equipment",
                          "Lower cost compared to specialty hauling methods",
                        ].map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle
                              className="w-5 h-5 flex-shrink-0"
                              style={{ color: "#ff5722" }}
                            />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-gray-700">
                      <p className="text-lg leading-relaxed">
                        For commercial vehicles like the Cascadia, open
                        transport is the industry-standard solution, striking a
                        balance between safety, speed, and affordability.
                      </p>
                    </div>
                  </div>
                </div>

                <h3
                  className="text-4xl font-bold mb-12 text-center"
                  style={{ color: "#003366" }}
                >
                  Trailer Types We Use for Freightliner Cascadia
                </h3>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                  Selecting the correct trailer is critical when shipping a
                  large commercial truck. The trailer must not only support the
                  truck's weight but also comply with federal and state
                  regulations regarding height, length, and axle load.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      name: "Flatbed Trailer",
                      description:
                        "Flatbed trailers are one of the most commonly used hauling options. They provide a large, open platform for transporting trucks with standard height and weight.",
                      bestFor: [
                        "Day cab Cascadia models",
                        "Trucks that don't exceed typical height restrictions",
                        "Easy-to-access pickup and drop-off locations",
                      ],
                      note: "Flatbeds may not be suitable for taller sleeper cabs due to highway clearance limits.",
                    },
                    {
                      name: "Step-Deck (Drop-Deck) Trailer",
                      description:
                        "Step-deck trailers feature a lowered deck that allows for increased height clearance without violating DOT regulations. These trailers are handy for vehicles that exceed flatbed height limits but don't require oversized load classification.",
                      bestFor: [
                        "Sleeper cab Freightliner Cascadia",
                        "Trucks with added roof equipment or air deflectors",
                        "Hauls that require easy ramp loading",
                      ],
                      note: "Step-decks strike a balance between flexibility and clearance, making them a popular option for hauling larger trucks.",
                    },
                    {
                      name: "Lowboy Trailer",
                      description:
                        "Lowboy trailers sit incredibly close to the ground, making them ideal for transporting oversized trucks that exceed standard height limitations. They often require special permits, but they provide unmatched flexibility for challenging shipments.",
                      bestFor: [
                        "Oversized or customized Cascadia models",
                        "Loads that exceed legal height when on standard trailers",
                        "Routes that require height-sensitive navigation",
                      ],
                      note: "While lowboys involve more planning and permitting, they are often the only viable solution for complex or heavy loads.",
                    },
                  ].map((trailer, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 p-8 rounded-2xl shadow-lg border-l-4"
                      style={{ borderLeftColor: "#ff5722" }}
                    >
                      <h4
                        className="text-2xl font-bold mb-4"
                        style={{ color: "#003366" }}
                      >
                        {trailer.name}
                      </h4>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {trailer.description}
                      </p>
                      <div className="mb-6">
                        <h5
                          className="text-lg font-semibold mb-3"
                          style={{ color: "#ff5722" }}
                        >
                          Best for:
                        </h5>
                        <ul className="space-y-2">
                          {trailer.bestFor.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle
                                className="w-5 h-5 flex-shrink-0 mt-0.5"
                                style={{ color: "#ff5722" }}
                              />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: "#f0f8ff" }}
                      >
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#003366" }}
                        >
                          <strong>Note:</strong> {trailer.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
                  <div className="max-w-7xl mx-auto">
                    {/* Main Container */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 shadow-2xl">
                      {/* Animated Background Elements */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-blue-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                      </div>

                      <div className="relative z-10 p-8 lg:p-12">
                        {/* Header Section */}
                        <div className="text-center mb-16">
                         

                          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            Specialized Trailers for Oversized or Non-Standard
                            Shipments
                          </h2>

                          <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-blue-100 leading-relaxed font-light">
                              While flatbeds, step-decks, and lowboys cover most
                              Freightliner Cascadia transports, specific
                              shipments require more advanced trailer types.
                              These specialized trailers offer greater
                              flexibility for oversized, non-running, or
                              unusually equipped trucks.
                            </p>
                          </div>
                        </div>

                        {/* Trailer Types Grid */}
                        <div className="grid lg:grid-cols-3 gap-8">
                          {trailerTypes.map((trailer, index) => (
                            <div
                              key={index}
                              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                            >
                              {/* Card Background Gradient */}
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${trailer.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                              ></div>

                              {/* Icon */}

                              {/* Title */}
                              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                                {trailer.title}
                              </h3>

                              {/* Description */}
                              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                {trailer.description}
                              </p>

                              {/* Hover Border Effect */}
                              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-400/50 transition-all duration-300"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="py-10 px-6 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2
                    className="text-5xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    What Does It Cost to Ship a Freightliner Cascadia?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    The cost of shipping a Freightliner Cascadia can vary
                    significantly based on several key factors. While typical
                    rates fall between $3,000 and $7,500, your exact quote will
                    depend on details such as the vehicle's size, shipping
                    distance, transport requirements, and delivery conditions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div>
                    <h3
                      className="text-3xl font-bold mb-8"
                      style={{ color: "#003366" }}
                    >
                      Key Pricing Factors:
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Shipping Distance",
                          desc: "Longer hauls increase costs due to fuel, labor, and time.",
                        },
                        {
                          title: "Truck Size and Weight",
                          desc: "Larger or heavier trucks may require more specialized trailers.",
                        },
                        {
                          title: "Type of Transport",
                          desc: "Equipment needed, permits, and load preparation all influence pricing.",
                        },
                        {
                          title: "Route Conditions",
                          desc: "Restricted access, rural roads, or toll-heavy routes may add to the cost.",
                        },
                        {
                          title: "Operational Status",
                          desc: "Non-running units require special loading methods or trailers.",
                        },
                        {
                          title: "Time Sensitivity",
                          desc: "Expedited shipping services cost more due to limited carrier availability.",
                        },
                        {
                          title: "Seasonal Factors",
                          desc: "Winter weather or fuel price fluctuations can impact rates.",
                        },
                      ].map((factor, idx) => (
                        <div key={idx} className="flex items-start space-x-4">
                          <DollarSign
                            className="w-6 h-6 flex-shrink-0 mt-1"
                            style={{ color: "#ff5722" }}
                          />
                          <div>
                            <h4
                              className="font-bold text-lg"
                              style={{ color: "#003366" }}
                            >
                              {factor.title}:
                            </h4>
                            <p className="text-gray-700">{factor.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-3xl font-bold mb-8"
                      style={{ color: "#003366" }}
                    >
                      Example Estimates:
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          range: "Short-Distance (under 500 miles)",
                          price: "$1,500 – $2,500",
                        },
                        {
                          range: "Medium-Distance (500–1,500 miles)",
                          price: "$3,500 – $5,000",
                        },
                        {
                          range: "Long-Distance (1,500+ miles)",
                          price: "$4,500 – $6,000+",
                        },
                      ].map((estimate, idx) => (
                        <div
                          key={idx}
                          className="p-6 bg-white rounded-xl shadow-lg border-l-4"
                          style={{ borderLeftColor: "#ff5722" }}
                        >
                          <h4
                            className="font-bold text-xl mb-2"
                            style={{ color: "#003366" }}
                          >
                            {estimate.range}:
                          </h4>
                          <p
                            className="text-2xl font-bold"
                            style={{ color: "#ff5722" }}
                          >
                            {estimate.price}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div
                      className="mt-8 p-6 rounded-xl"
                      style={{ backgroundColor: "#003366" }}
                    >
                      <p className="text-white text-lg leading-relaxed">
                        To get a precise rate tailored to your truck and route,
                        contact Rapid Auto Shipping for a free, no-obligation
                        quote. Our team will analyze all necessary details and
                        provide a transparent, customized estimate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Considerations */}
            <section className="py-20 px-6 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2
                    className="text-5xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Key Considerations When Shipping a Freightliner Cascadia
                  </h2>
                  <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                    Transporting a Freightliner Cascadia isn't just about
                    loading it up on a trailer and hitting the road. As a Class
                    8 commercial vehicle, it requires careful planning,
                    regulatory compliance, and the right equipment to ensure
                    safe, legal, and efficient delivery. At Rapid Auto Shipping,
                    we take these factors into account from the moment you
                    request a quote.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: <Target className="w-8 h-8" />,
                      title: "Height, Weight, and Length Limitations",
                      content: `Freightliner Cascadia trucks, especially sleeper cab models, often approach or exceed legal road limits for height and weight. This requires precise measurement and equipment matching. Each state has specific maximum limits for:
                
                • Height (usually 13.5–14 feet)
                • Width (typically 8.5 feet)  
                • Gross weight (often 80,000 lbs without permits)
                
                Exceeding any of these thresholds means the truck qualifies as an oversized load, which requires additional steps and costs.`,
                    },
                    {
                      icon: <FileText className="w-8 h-8" />,
                      title: "Oversize Load Permits",
                      content: `If your Freightliner exceeds legal height, length, or weight limits, especially when placed on a trailer, it will need to be moved under an oversized load permit. These permits are issued on a state-by-state basis, and each state may have different rules for what qualifies.

                Rapid Auto Shipping handles all permitting on your behalf, but it's essential to know:
                
                • Permits take time to obtain (especially for cross-country routes)
                • Oversized loads often come with route restrictions
                • Some states prohibit oversized travel during night hours or weekends`,
                    },
                    {
                      icon: <MapPin className="w-8 h-8" />,
                      title: "Escort Vehicles and Route Planning",
                      content: `If your shipment exceeds specific dimensions (usually 12+ feet wide or very tall), escort vehicles or "pilot cars" may be legally required to accompany the load. These vehicles help ensure public safety and assist the driver in navigating turns, bridges, and narrow roads.

                Route planning also becomes more complex with oversized loads. We carefully map the route to:
                
                • Avoid low-clearance bridges
                • Steer clear of restricted roads and toll-heavy areas
                • Comply with each state's DOT requirements`,
                    },
                    {
                      icon: <Wrench className="w-8 h-8" />,
                      title: "Loading & Unloading Requirements",
                      content: `Large commercial trucks like the Cascadia can't always be loaded onto a trailer the same way a car can. Depending on the configuration (operable vs. non-operable), your shipment may require:

                • A loading dock, ramp, or winch
                • A removable gooseneck (RGN) trailer for drive-on loading
                • A forklift or crane in specific scenarios (especially for inoperable units)

                If your pickup or delivery location doesn't have the right equipment, we'll help coordinate alternatives or suggest nearby staging areas.`,
                    },
                    {
                      icon: <Shield className="w-8 h-8" />,
                      title: "Insurance & Compliance",
                      content: `Every shipment we handle includes basic carrier liability coverage, and additional insurance can be added for high-value or fleet trucks. We also ensure full compliance with:

                • DOT regulations
                • FMCSA operating authority
                • Load inspection and documentation procedures

                We keep you informed at every stage of the transport, including updates on permit approvals, route planning, and real-time tracking.`,
                    },
                    {
                      icon: <Clock className="w-8 h-8" />,
                      title:
                        "What It's Like to Transport a Truck Across the Country",
                      content: `Shipping a Freightliner Cascadia across state lines or cross-country is a serious logistics project. Unlike smaller vehicles, these trucks:

                • Require specialty carriers
                • Need multi-step coordination
                • Are subject to more regulations and transit restrictions

                Expect slightly longer lead times for planning and execution, especially for long-haul routes or non-standard trucks. That said, our experienced team makes the process straightforward, compliant, and worry-free by managing every detail for you.`,
                    },
                  ].map((consideration, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 p-8 rounded-2xl shadow-lg"
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <div className="text-white">{consideration.icon}</div>
                        </div>
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#003366" }}
                        >
                          {consideration.title}
                        </h3>
                      </div>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {consideration.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Freightliner Models */}
            <section
              className="py-20 px-6"
              style={{ backgroundColor: "#003366" }}
            >
              <div className="max-w-7xl mx-auto text-white">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-bold mb-6">
                    Various Types of Freightliner Trucks We Ship
                  </h2>
                  <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                    Freightliner produces a wide range of commercial trucks
                    built for different industries and applications, from
                    long-haul transportation to vocational and heavy-duty tasks.
                    At Rapid Auto Shipping, we provide professional transport
                    solutions for all types of Freightliner trucks, not just the
                    Cascadia line.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    "Freightliner Cascadia (113, 125, 126, Evolution, NG models)",
                    "Freightliner Columbia",
                    "Freightliner Century Class",
                    "Freightliner Coronado",
                    "Freightliner FLD Series",
                    "Freightliner M2 106 and M2 112",
                    "Freightliner 108SD and 114SD (Severe Duty)",
                    "Freightliner Business Class models",
                    "Custom or modified Freightliner trucks",
                    "Non-operational, salvaged, or auction-purchased units",
                  ].map((model, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-white bg-opacity-10"
                    >
                      <CheckCircle
                        className="w-6 h-6 flex-shrink-0"
                        style={{ color: "#ff5722" }}
                      />
                      <span className="text-lg">{model}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-xl opacity-90 leading-relaxed">
                    Each model varies in height, length, weight, and operational
                    condition, all of which influence the transport method,
                    required permits, and trailer type. Whether you're moving a
                    single truck or coordinating fleet relocation, we ensure
                    your Freightliner is handled with the correct equipment and
                    care.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-6 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2
                    className="text-5xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Why Choose Rapid Auto Shipping?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    At Rapid Auto Shipping, we go beyond basic truck transport;
                    we deliver a premium logistics experience tailored to the
                    unique demands of heavy-duty Freightliner shipping. Our
                    goodwill is built on reliability, transparency, and
                    unmatched industry knowledge.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Target className="w-10 h-10" />,
                      title: "Expert Logistics Planning",
                      description:
                        "We specialize in complex commercial truck transportation, managing every detail from permits to routing and equipment selection.",
                    },
                    {
                      icon: <Truck className="w-10 h-10" />,
                      title: "Access to Specialized Equipment",
                      description:
                        "Our network includes flatbed, step-deck, lowboy, and RGN trailers to match the specific needs of each Freightliner model.",
                    },
                    {
                      icon: <Shield className="w-10 h-10" />,
                      title: "Fully Insured & Bonded Carriers",
                      description:
                        "Every shipment is handled by licensed, bonded, and insured carriers for maximum peace of mind.",
                    },
                    {
                      icon: <MapPin className="w-10 h-10" />,
                      title: "Real-Time Shipment Tracking",
                      description:
                        "Stay informed with updates throughout the transport process, including GPS-based tracking and proactive communication.",
                    },
                    {
                      icon: <Users className="w-10 h-10" />,
                      title: "Dedicated Customer Support",
                      description:
                        "Our team is available from start to finish to guide you through booking, documentation, scheduling, and delivery coordination.",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="text-center p-8 rounded-2xl bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      <h3
                        className="text-2xl font-bold mb-4"
                        style={{ color: "#003366" }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}

                  
                </div>
               
              </div>

               <p className="text-gray-700 text-xl max-w-4xl leading-relaxed mx-auto text-justify mt-10">
                  We don’t just move vehicles, we manage relationships and
                  ensure your Freightliner truck gets where it needs to go
                  safely, efficiently, and affordably.
                </p>
            </section>
          </div>

          <StatsSection />

          <div
            className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-blue-50 py-12 px-4"
            style={{
              background:
                "linear-gradient(135deg, #f8fafc 0%, #fff7ed 50%, #f0f9ff 100%)",
            }}
          >
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #ff5722 0%, #003366 100%)",
                  }}
                >
                  <Car className="w-8 h-8 text-white" />
                </div>
                <div
                  className="text-4xl font-bold mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #003366 0%, #ff5722 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Frequently Asked Questions
                </div>
                <p
                  className="text-lg max-w-2xl mx-auto"
                  style={{ color: "#003366" }}
                >
                  Everything you need to know about our auto transport services
                </p>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqData.map((item, index) => {
                  const isOpen = openItems.has(index);

                  return (
                    <div
                      key={index}
                      className="group bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-inset"
                        style={{ focusRingColor: "#ff5722" }}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                              isOpen
                                ? "text-white shadow-lg"
                                : "bg-gray-100 group-hover:bg-gray-200"
                            }`}
                            style={
                              isOpen
                                ? {
                                    background:
                                      "linear-gradient(135deg, #ff5722 0%, #003366 100%)",
                                  }
                                : { color: "#003366" }
                            }
                          >
                            {item.icon}
                          </div>
                          <h3
                            className="text-lg font-semibold transition-colors duration-200"
                            style={{ color: isOpen ? "#ff5722" : "#003366" }}
                          >
                            {item.question}
                          </h3>
                        </div>

                        <div
                          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                            isOpen
                              ? "rotate-180"
                              : "bg-gray-100 group-hover:bg-gray-200"
                          }`}
                          style={
                            isOpen
                              ? { backgroundColor: "#fff3f0", color: "#ff5722" }
                              : { color: "#003366" }
                          }
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4 transition-transform duration-300" />
                          ) : (
                            <Plus className="w-4 h-4 transition-transform duration-300" />
                          )}
                        </div>
                      </button>

                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <div className="pl-14">
                            <div
                              className="h-px mb-4"
                              style={{
                                background:
                                  "linear-gradient(to right, #ff5722, transparent)",
                              }}
                            ></div>
                            <p
                              className="leading-relaxed"
                              style={{ color: "#003366" }}
                            >
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Hello;
