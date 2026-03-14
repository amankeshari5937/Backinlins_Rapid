"use client";

import React, { useState, useMemo, useCallback } from "react";

import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import { Calculator, Headphones } from "lucide-react";
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

  const toggleItem = useCallback((index) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
      return newOpenItems;
    });
  }, []);

  const trailerTypes = useMemo(() => [
    {
      title: "Flatbed Trailer",
      description:
        "The most basic and versatile type for shipping heavy equipment like Komatsu machinery. They have an open platform without sides or a roof, making loading and unloading large and bulky equipment easier.",
      icon: <Grid3X3 className="w-8 h-8" />,
    },
    {
      title: "Lowboy Trailer (Lowbed Trailer)",
      description:
        "Lowboy trailers carry heavy loads. A lower deck height than standard trailers allows taller equipment to be transported without height restrictions. This makes them ideal for transporting Komatsu bulldozers and excavators.",
      icon: <ArrowDown className="w-8 h-8" />,
    },
    {
      title: "Step Deck Trailer (Drop Deck Trailer)",
      description:
        "Step deck trailers have a lower front deck and a higher rear deck. This design lets you carry taller gear at a lower height. Step deck trailers like motor graders transport taller Komatsu equipment.",
      icon: <ArrowUpDown className="w-8 h-8" />,
    },
    {
      title: "RGN Trailer (Removable Gooseneck Trailer)",
      description:
        "RGN lowboy trailers have detachable gooseneck front sections. This makes loading and unloading Komatsu bulldozers and wheel loaders easier. RGN trailers help transport high-ground-clearance equipment.",
      icon: <Move className="w-8 h-8" />,
    },
    {
      title: "Extendable Trailer",
      description:
        "An extendable trailer can be adjusted in length, making it suitable for transporting various sizes of Komatsu equipment. These trailers can be extended to accommodate longer machinery and retracted when carrying smaller equipment.",
      icon: <Move className="w-8 h-8" />,
    },
    {
      title: "Multi-Axle Trailer",
      description:
        "Multi-axle trailers are designed to distribute the weight of heavy equipment more evenly, reducing the strain on any single axle. They commonly transport cumbersome Komatsu equipment, such as mining trucks and large excavators.",
      icon: <Truck className="w-8 h-8" />,
    },
  ], []);

  const pricingData = useMemo(() => [
    {
      distance: "0 - 500 miles",
      forklift: "$800 - $1,500",
      excavator: "$1,200 - $2,500",
      bulldozer: "$1,500 - $3,000",
      dumpTruck: "$2,000 - $3,500",
      wheelLoader: "$1,800 - $3,200",
    },
    {
      distance: "500 - 1,000 miles",
      forklift: "$1,200 - $2,000",
      excavator: "$2,000 - $3,800",
      bulldozer: "$2,500 - $4,500",
      dumpTruck: "$3,500 - $5,500",
      wheelLoader: "$3,000 - $4,800",
    },
    {
      distance: "1,000 - 1,500 miles",
      forklift: "$1,800 - $2,800",
      excavator: "$2,800 - $5,000",
      bulldozer: "$3,500 - $6,000",
      dumpTruck: "$5,000 - $7,500",
      wheelLoader: "$4,500 - $6,500",
    },
    {
      distance: "1,500 - 2,000 miles",
      forklift: "$2,500 - $3,500",
      excavator: "$3,500 - $6,200",
      bulldozer: "$4,500 - $7,500",
      dumpTruck: "$6,500 - $9,000",
      wheelLoader: "$5,500 - $7,800",
    },
    {
      distance: "2,000+ miles",
      forklift: "$3,200 - $4,500",
      excavator: "$4,500 - $7,800",
      bulldozer: "$6,000 - $9,500",
      dumpTruck: "$8,000 - $12,000",
      wheelLoader: "$7,000 - $10,000",
    },
  ], []);

  const factors = useMemo(() => [
    {
      title: "Distance",
      description:
        "The farther the equipment needs to be transported, the higher the shipping cost will likely be.",
    },
    {
      title: "Weight and Size",
      description:
        "Larger and heavier Komatsu equipment will generally incur higher shipping costs due to the need for specialized transportation and handling.",
    },
    {
      title: "Freight Class",
      description:
        "Komatsu equipment will likely fall into a specific freight class based on size, weight, and dimensions, which can influence shipping rates.",
    },
    {
      title: "Shipping Route",
      description:
        "The specific route can affect the cost, especially if it involves complex or remote areas requiring additional logistics or permits.",
    },
    {
      title: "Shipping Services",
      description:
        "Additional services such as insurance, tracking, and expedited shipping will add to the overall cost.",
    },
    {
      title: "Fuel Prices",
      description:
        "Fluctuations in fuel prices can influence shipping rates, especially for long-distance transportation.",
    },
    {
      title: "Seasonality",
      description:
        "Shipping costs may vary based on the time of year, as demand for transportation services can impact pricing.",
    },
    {
      title: "Packaging and Crating",
      description:
        "Properly packaging and crating the equipment to ensure safe transport may add to the overall cost.",
    },
  ], []);

  const securityFeatures = useMemo(() => [
    {
      title: "Comprehensive Insurance Coverage",
      description:
        "At Rapid Auto Shipping, we cover all of your equipment with full protection in case something goes wrong during transit.",
    },
    {
      title: "Professional Handling & Secure Transport",
      description:
        "Our skilled workers carefully load, lock, and move your equipment following the safest methods in the business.",
    },
    {
      title: "Transparent Documentation & Support",
      description:
        "Before sending, we provide all the paperwork that is needed to make sure we're following the rules. You can keep an eye on your package at all times and feel safe about it.",
    },
  ], []);

  const faqData = useMemo(() => [
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "How much does it cost to ship Komatsu equipment?",
      answer:
        "Shipping costs can vary depending on factors such as the size and weight of the equipment, the shipping distance, the mode of transportation (container shipping, roll-on/roll-off, etc.), and any additional services required (e.g., insurance, customs handling). It's best to request quotes from several shipping companies to compare costs.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "How should I prepare the Komatsu equipment for shipping?",
      answer:
        "Yes, many countries have import regulations and taxes on heavy equipment. Some equipment may be subject to specific certifications or inspections to meet local standards. It's crucial to research and comply with the import requirements of the destination country.",
    },
    {
      icon: <Calculator className="w-5 h-5" />,
      question: "Should I get multiple quotes from shipping companies?",
      answer:
        "It's totally up to you! Rapid auto shipping provides a free, detailed quote without any hidden charges. Our bus shipping rates are the most reasonable. Feel free to fill out our online form or contact our representative for a custom quote.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question:
        "Do I need special permits or documentation for shipping Komatsu equipment?",
      answer:
        "Depending on the destination and specific equipment, you may require permits, licenses, or documentation to comply with customs and import regulations. It's essential to research the requirements of both the exporting and importing countries and work with a reputable shipping agent to ensure compliance.",
    },
  ], []);

  return (
    <>
      <Head>
        <title>Komatsu equipment shipping sevices - Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Rapid Auto Shipping can help you transport Komatsu equipment for any reason you need it. When it comes to all modes of transportation, we are experts."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href=" https://rapidautoshipping.com/services/komatsu-equipment-shipping"
        />
        <meta
          property="og:title"
          content="Komatsu equipment shipping sevices - Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping can help you transport Komatsu equipment for any reason you need it. When it comes to all modes of transportation, we are experts."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/komatsu-equipment-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1750948402/7f00d5d8568d5cf62391b742032882ca_cxuaoi.jpg"
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
                    "@id": "https://rapidautoshipping.com/services",
                    name: "komatsu-equipment-shipping",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/komatsu-equipment-shipping",
                    name: "komatsu-equipment-shipping",
                  },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Komatsu Equipment Shipping",
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
                "Specialized transport services for Komatsu heavy equipment across the United States. Safe, insured, and efficient shipping by Rapid Auto Shipping.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What types of Komatsu equipment do you ship?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We ship all types of Komatsu equipment—from bulldozers and excavators to wheel loaders and motor graders.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do you prepare Komatsu equipment for shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Our team performs safety checks, secures moving parts, and uses heavy-duty straps and cradles to ensure your Komatsu machinery is protected during transit.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What are your transit times?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Transit times vary by location and equipment size. Most shipments are completed within 7–14 business days. Expedited services are available.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you provide insurance for Komatsu equipment shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, every shipment includes comprehensive cargo insurance. Additional coverage can be arranged upon request.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I get a quote?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You can request a quote through our website or call us directly. We typically provide estimates within 24 hours.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/services/komatsu-equipment-shipping",
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          {/* Hero Section - Mobile: solid bg, no image; Desktop: with image */}
          <section className="relative py-8  flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on mobile, visible on desktop */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1750948402/7f00d5d8568d5cf62391b742032882ca_cxuaoi.jpg"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#001933]/50 via-[#001933]/20 to-[#001933]/40"></div>
              <div className="absolute inset-0 bg-[#003366]/10"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Pattern Overlay - Hidden on mobile */}
            <div className="absolute inset-0 opacity-20 hidden md:block">
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
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#glassPattern)"
                />
              </svg>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-20 px-4 sm:px-6 lg:px-8">
              <div className="space-y-6">
                <div className="space-y-4 max-w-3xl rounded-lg p-3 sm:p-4 md:bg-[#001933]/40">
                  {/* H1 - Black on mobile, White on desktop */}
                  <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    Komatsu Equipment{" "}
                    <span className="text-[#ff5722]">Shipping Service</span>
                  </h1>

                  {/* Paragraph - Hidden on mobile, visible on desktop only */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Rapid Auto Shipping is the optimal choice for Komatsu
                    equipment shipping. By choosing reliable services, you can
                    be confident that your Komatsu equipment will be delivered
                    safely and efficiently. With professionals handling your
                    cargo, there is minimal risk of damage. Additionally, our
                    insurance coverage gives you peace of mind shipping your
                    Komatsu equipment.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto relative z-30">
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
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        Why Choose Us for Komatsu Equipment Shipping?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Komatsu Equipment shipping needs special skills, the right
                      tools, and careful handling. We have the skills and tools
                      to move your Komatsu equipment across the United States
                      quickly and safely.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      The specialized trucks in our fleet are made to carry the
                      huge weight and size of Komatsu equipment safely and
                      without any problems. We will ship all heavy equipment
                      like a Komatsu dump truck, an excavator, or any other
                      heavy equipment you need.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      You won't have to worry about logistics, equipment, or
                      finding the right transport vehicle because our
                      professional team will take care of everything. We'll make
                      the whole process easy for you. You can count on us to
                      deliver your Komatsu equipment safely, on time, and in
                      great shape.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_600,q_auto,f_auto/v1750947732/1007834470_cases8.webp"
                        alt="Shipping Service - Professional Transport"
                        width={600}
                        height={500}
                        loading="lazy"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header Section */}
            <div
              className="relative overflow-hidden"
              style={{ backgroundColor: "#003366" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="relative max-w-7xl mx-auto px-6 py-20">
                <div className="text-center">
                  <div className="flex justify-center items-center mb-6">
                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                      <Truck className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Best Komatsu Equipment
                    <span className="block" style={{ color: "#ff5722" }}>
                      Shipping Service
                    </span>
                  </h2>
                  <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                    When shipping Komatsu equipment, the type of trailer used
                    will depend on the size and weight of the equipment, as well
                    as the specific transportation requirements. Here are some
                    common types of trailers used for shipping Komatsu
                    equipment:
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
              {/* Introduction */}

              {/* Trailer Types Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {trailerTypes.map((trailer, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300"
                  >
                    <div className="p-8">
                      <div className="flex items-start gap-6">
                        <div
                          className="flex-shrink-0 p-4 rounded-xl transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: "#ff5722", color: "white" }}
                        >
                          {trailer.icon}
                        </div>
                        <div className="flex-1">
                          <h3
                            className="text-xl font-bold mb-4 group-hover:text-opacity-90 transition-colors"
                            style={{ color: "#003366" }}
                          >
                            {trailer.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {trailer.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-slate-300 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{ backgroundColor: "#003366" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="relative max-w-7xl mx-auto px-6 py-20">
                <div className="text-center">
                  <div className="flex justify-center items-center mb-6">
                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                      <MapPin className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Nationwide Komatsu Equipment Shipping
                  </h2>
                  <h2
                    className="text-2xl md:text-3xl font-semibold mb-6"
                    style={{ color: "#ff5722" }}
                  >
                    Komatsu Forklift Shipper Near Me
                  </h2>
                  <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                    Picking the right shipping company is important to make sure
                    your gear gets where it needs to go quickly and safely.
                    Rapid Auto Shipping delivers Komatsu equipment to almost
                    anywhere in the United States, unlike many other shipping
                    companies that only work in certain areas.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#003366" }}
                    >
                      Flexible & Reliable Nationwide Transport
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We can quickly transport your Komatsu equipment no matter
                    where you need it shipped, thanks to our large road network
                    and logistics knowledge. We'll take care of the rest; just
                    ask for a free price.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#003366" }}
                    >
                      Simplified Shipping Process
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We handle the whole shipping process for you, so you don't
                    have to waste time looking for a shipping company that will
                    come to you. From planning to delivery, our team makes sure
                    everything goes smoothly.
                  </p>
                </div>
              </div>

              {/* Cost Section */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                    style={{ backgroundColor: "#ff5722", color: "white" }}
                  >
                    <DollarSign className="w-5 h-5" />
                    <span className="font-semibold">Transparent Pricing</span>
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Cost to Ship Komatsu Equipment
                  </h2>
                  <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                    Are you looking for a cheap way to move your Komatsu
                    forklift or other heavy equipment? A lot of companies charge
                    big fees up front, but at Rapid Auto Shipping, we try to
                    keep our prices low without lowering the quality of our
                    service.
                  </p>
                </div>

                {/* Pricing Table */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead style={{ backgroundColor: "#003366" }}>
                        <tr>
                          <th className="px-6 py-4 text-left text-white font-semibold">
                            Distance (Miles)
                          </th>
                          <th className="px-6 py-4 text-left text-white font-semibold">
                            Komatsu Forklift
                          </th>
                          <th className="px-6 py-4 text-left text-white font-semibold">
                            Komatsu Excavator
                          </th>
                          <th className="px-6 py-4 text-left text-white font-semibold">
                            Komatsu Bulldozer
                          </th>
                          <th className="px-6 py-4 text-left text-white font-semibold">
                            Komatsu Dump Truck
                          </th>
                          <th className="px-6 py-4 text-left text-white font-semibold">
                            Komatsu Wheel Loader
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {pricingData.map((row, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-slate-50" : "bg-white"
                            }
                          >
                            <td
                              className="px-6 py-4 font-semibold"
                              style={{ color: "#ff5722" }}
                            >
                              {row.distance}
                            </td>
                            <td className="px-6 py-4 text-slate-700">
                              {row.forklift}
                            </td>
                            <td className="px-6 py-4 text-slate-700">
                              {row.excavator}
                            </td>
                            <td className="px-6 py-4 text-slate-700">
                              {row.bulldozer}
                            </td>
                            <td className="px-6 py-4 text-slate-700">
                              {row.dumpTruck}
                            </td>
                            <td className="px-6 py-4 text-slate-700">
                              {row.wheelLoader}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-slate-600 mb-6">
                    Request a complimentary quote today to ensure the most
                    precise pricing. Do not hesitate to contact us or visit our
                    website to obtain a personalized shipping estimate for your
                    Komatsu equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-gray-50  px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h1
                  className="text-4xl font-bold mb-4"
                  style={{ color: "#003366" }}
                >
                  Komatsu Equipment Shipping Guide
                </h1>
                <div
                  className="w-24 h-1 mx-auto"
                  style={{ backgroundColor: "#ff5722" }}
                ></div>
              </div>

              {/* Factors Section */}
              <div className="mb-16">
                <h2
                  className="text-3xl font-bold mb-8 text-center"
                  style={{ color: "#003366" }}
                >
                  Factors Affecting Komatsu Equipment Shipping Costs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {factors.map((factor, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-300"
                      style={{ borderLeftColor: "#ff5722" }}
                    >
                      <h3
                        className="text-xl font-semibold mb-3"
                        style={{ color: "#003366" }}
                      >
                        {factor.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Time Section */}
              <div className="mb-16">
                <div
                  className="bg-white rounded-lg shadow-md p-8 border-t-4"
                  style={{ borderTopColor: "#ff5722" }}
                >
                  <h2
                    className="text-3xl font-bold mb-6 text-center"
                    style={{ color: "#003366" }}
                  >
                    How Long Does It Take to Ship Komatsu Equipment?
                  </h2>
                  <div className="text-center">
                    <div
                      className="inline-block rounded-full px-8 py-4 mb-4"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <span className="text-white text-2xl font-bold">
                        3-5 Days
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                      Shipping time is mostly calculated based on the total
                      distance of the shipment. However, there are also various
                      factors that need to be considered when shipping Komatsu
                      equipment. The average shipping time is 3 to 5 days, but
                      the fact is that it can be shorter and longer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="mb-8">
                <h2
                  className="text-3xl font-bold mb-8 text-center"
                  style={{ color: "#003366" }}
                >
                  Ensuring Complete Security for Your Shipment
                </h2>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <p className="text-gray-700 text-lg text-center mb-8 leading-relaxed">
                    It's normal to worry about the safety of your Komatsu
                    equipment when you can't see it. Because heavy machinery is
                    very valuable and complicated, making sure it is transported
                    safely is our top concern.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {securityFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="text-center p-6 rounded-lg border-2 hover:shadow-lg transition-all duration-300"
                        style={{ borderColor: "#ff5722" }}
                      >
                        <div
                          className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <span className="text-white text-2xl font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <h3
                          className="text-xl font-semibold mb-3"
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
              </div>
            </div>
          </div>

          <StatsSection />

          <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        Rapid Auto Shipping: The Best Komatsu Equipment Shipping
                        Company
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      When it comes to moving big equipment like bulldozers,
                      excavators, Komatsu forklifts, and more, Rapid Auto
                      Shipping is the name you can trust. Our transportation
                      services are safe, dependable, and affordable, and we'll
                      make sure your equipment gets where it needs to go on time
                      and in perfect shape. Our skilled staff, specialized
                      carriers, and dedication to customer satisfaction make the
                      whole process easy and smooth.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Get a free, no-obligation price today and have your
                      Komatsu equipment shipped across the country at a low cost
                      and in safety. Call us right now to talk to one of our
                      shipping experts and feel confident about scheduling your
                      move!
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_600,q_auto,f_auto/v1750948402/7f00d5d8568d5cf62391b742032882ca_cxuaoi.jpg"
                          alt="Shipping Service - Professional Transport Solutions"
                          width={600}
                          height={400}
                          loading="lazy"
                          className="w-full h-[400px] object-cover rounded-2xl shadow-2xl 
                 transition-all duration-700 ease-in-out
                 group-hover:scale-105 group-hover:shadow-3xl
                 group-hover:brightness-110 group-hover:contrast-105"
                        />

                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        />

                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl -z-10" />

                        <div
                          className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full 
                    animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

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

export default Home;