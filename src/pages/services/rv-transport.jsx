"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  Shield,
  Clock,
  Users,
  Star,
  Wrench,
  FileText,
  Phone,
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
  Layers,
  Anchor,
  Award,

} from "lucide-react";
import { MapPin } from "lucide-react";

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

  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const trailerTypes = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Flatbed Trailer",
      description:
        "The use of a flatbed trailer is crucial and widely popular for RV transport. The platform is flat and open, lacking sides or a roof, which allows for plenty of space to load and secure the RV. Flatbed trailers are capable of accommodating RVs of different sizes and types.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Lowboy Trailer",
      description:
        "A lowboy trailer is a type of flatbed trailer that features a lower deck height. This feature makes it ideal for taller RVs, such as fifth-wheel trailers or large motorhomes, as it offers increased vertical clearance during transportation.",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enclosed Trailer",
      description:
        "Enclosed trailers are designed to be fully enclosed, providing optimal protection from the elements during transportation. Enclosed trailers are equipped with walls and a roof, making them an excellent choice for transporting smaller RVs like camper trailers and travel trailers. These trailers protect against various weather conditions, ensuring the safety of the vehicles being transported.",
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: "Fifth-Wheel Transporter",
      description:
        "A fifth wheel transporter is specifically designed to haul fifth-wheel trailers. The vehicle is equipped with a hitch that securely attaches to the kingpin of the fifth-wheel trailer, ensuring safe transportation.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Carrier Trailer",
      description:
        "Multi-carrier trailers are trailers designed specifically to transport multiple recreational vehicles (RVs) at the same time. The facility features multiple levels or decks, which enable the convenient transportation of multiple smaller RVs.",
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
    },
  ];

  const serviceFeatures = [
    {
      icon: <Award className="w-6 h-6" />,
      text: "Extensive experience delivering RVs across the country",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Damage-free delivery guarantee",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Reliable and timely transportation",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Comprehensive resources for all RV types",
    },
  ];

  const faqData = [
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "Do you offer RV transport across the U.S.?",
    answer:
      "Yes. Rapid Auto Shipping provides nationwide RV transport services to and from all 50 states, including remote and seasonal destinations. Whether you're relocating, buying, selling, or heading to a vacation spot, we've got you covered.",
  },
  {
    icon: <Truck className="w-5 h-5" />,
    question: "What types of RVs can you transport?",
    answer:
      "We handle all types of recreational vehicles, including: 1. Travel Trailers, 2. Fifth Wheels, 3. Class A, B, and C Motorhomes, 4. Toy Haulers, 5. Pop-Up Campers, 6. Park Models, and more.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Is my RV insured during transport?",
    answer:
      "Absolutely. Every RV shipment is fully insured throughout the entire transport process. We only work with licensed, bonded, and FMCSA-compliant carriers for maximum protection and peace of mind.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    question: "How do you transport larger or non-motorized RVs?",
    answer:
      "Larger RVs and towables (like fifth wheels or trailers) are typically hauled using specialized trucks and trailers. For motorized RVs, we offer drive-away services or flatbed/lowboy transport, depending on the RV's condition and distance.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "How long does RV transport usually take?",
    answer:
      "It depends on the pickup and delivery locations. Short-distance RV shipments can take 1–3 days, while long-distance or cross-country moves may take 5–10 days. You'll receive estimated delivery windows when you book.",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    question: "How can I get a quote for RV shipping?",
    answer:
      "Getting started is easy, just fill out our online quote form or give us a call. We'll provide a fast, accurate estimate with no hidden charges and walk you through the scheduling process.",
  },
];

  return (
    <>
      <Head>
        <title>
          Reliable RV Transport Services | Companies USA | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Looking for affordable RV Transport companies? Rapid Auto Shipping is top in USA to provide RV Transport services, click here for a quote, will contact you ASAP!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/rv-transport"
        />
        <meta
          property="og:title"
          content="Reliable RV Transport Services | Companies USA | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Looking for affordable RV Transport companies? Rapid Auto Shipping is top in USA to provide RV Transport services, click here for a quote, will contact you ASAP!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/rv-transport"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754653081/f60b25_6cb4d75aa23a4509affdfb96b9853c98_mv2_ss1awe.png"
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
                    name: "services",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/rv-transport",
                    name: "rv-transport",
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
              serviceType: "Rv Transport",
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
                "Looking for affordable RV Transport companies? Rapid Auto Shipping is top in USA to provide RV Transport services, click here for a quote, will contact you ASAP!",

              url: "https://rapidautoshipping.com/services/rv-transport",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754653144/2040600003_g06w2c.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754653144/2040600003_g06w2c.webp"
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
                    RV Transport{" "}
                    <span className="text-[#ff5722]">Services</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Rapid Auto Shipping provides a reasonable, reliable service
                    that works for you, so you never have to worry about
                    shipping your RV. Whether you are moving, buying, selling,
                    or needing to move an RV, RV shipping options are available.
                    Rapid Auto Shipping provides the best RV shipping service.
                    Contact us about the cost of shipping your RV.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto">
                <TransportForm />
              </div>
            </div>
          </section>

          <div className=" bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        How Do RV Transport Services Work?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      When hiring RV shipping services, there are typically a
                      set of steps that they follow:
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Request a Quote</b> <br />
                      The owner of the RV reaches out to the RV passing company
                      in order to inquire about the cost of their services. The
                      cost of operating an RV is influenced by various factors,
                      including the distance traveled, the dimensions and weight
                      of the RV, and any extra services that may be required.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Preparing the RV:</b> <br />
                      Prior to the relocation, it is imperative for the owner of
                      the recreational vehicle (RV) to make the necessary
                      preparations.
                      <br />
                      These preparations include ensuring that the vehicle is in
                      optimal working condition, securing any loose items within
                      the RV, and emptying all tanks, such as those containing
                      water and sewage.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Pick-up:</b> <br />
                      The RV shipping arrives at the designated location as
                      scheduled to pick up the owner's RV. Specialized
                      equipment, such as tow trucks, flatbed trailers, or fifth
                      wheel trailers, may be utilized to load and securely
                      transport the RV.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Transportation: </b> <br />
                      The RV shipping company is responsible for transporting
                      the RV to its designated destination. The company takes
                      measures to ensure the safety of the RV during transit and
                      works to minimize the risk of any potential damage.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Delivery:</b> <br />
                      After the RV has arrived at its destination, the RV mover
                      proceeds to unload the vehicle and then transfers it to
                      either the owner or a designated recipient.
                      <br />
                      It is advisable for the owner to thoroughly inspect the RV
                      for any potential damage that may have occurred during
                      transportation.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754653435/gya5zyr4o8todlkhztyv_aapsgl.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[300px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="relative group mt-10">
                    {/* Image */}
                    <div className="relative z-10">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754653308/i-dont-care-what-anyone-says-i-think-hauling-campers-is-a-v0-c05d9rlhmcf91_c9std6.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[300px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="relative group mt-10">
                    {/* Image */}
                    <div className="relative z-10">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754653352/66be5e3214d608245c379db8_f1dyqz.jpg"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[300px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
                      <Truck className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Types of Trailers for RV Transport
                  </h2>

                  <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
                    Trailers are commonly used for shipping purposes.
                    Recreational Vehicles (RVs) are typically designed and built
                    to accommodate their specific size and weight requirements.
                    Various types of trailers are commonly used for RV
                    transport.
                  </p>
                </div>
              </div>
            </div>

            {/* Trailer Types Section */}
            <div className="py-16 lg:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:gap-12">
                  {trailerTypes.map((trailer, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                    >
                      {/* Mobile Layout (sm and below) */}
                      <div className="block lg:hidden">
                        <div className="p-8 text-center">
                          {/* Icon - Above content and centered on mobile */}
                          <div className="flex justify-center mb-6">
                            <div
                              className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${trailer.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1`}
                            >
                              {React.cloneElement(trailer.icon, {
                                className: "w-8 h-8 text-white",
                              })}
                            </div>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            {trailer.title}
                          </h3>

                          <p className="text-gray-600 leading-relaxed text-lg">
                            {trailer.description}
                          </p>
                        </div>
                      </div>

                      {/* Desktop Layout (lg and above) */}
                      <div className="hidden lg:block">
                        <div
                          className={`flex items-center ${
                            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                          }`}
                        >
                          {/* Content Side */}
                          <div className="flex-1 p-12">
                            <div
                              className={`flex items-start space-x-6 ${
                                index % 2 === 0
                                  ? "flex-row"
                                  : "flex-row-reverse space-x-reverse"
                              }`}
                            >
                              <div
                                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${trailer.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 flex-shrink-0`}
                              >
                                {React.cloneElement(trailer.icon, {
                                  className: "w-10 h-10 text-white",
                                })}
                              </div>

                              <div
                                className={
                                  index % 2 === 0 ? "text-left" : "text-right"
                                }
                              >
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                  {trailer.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-lg">
                                  {trailer.description}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Visual Side */}
                          <div
                            className={`flex-1 h-80 ${trailer.bgColor} relative overflow-hidden`}
                          >
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${trailer.gradient} opacity-10`}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div
                                className={`w-32 h-32 bg-gradient-to-r ${trailer.gradient} rounded-full opacity-20 animate-pulse`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div
                        className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${trailer.gradient.replace(
                          "bg-gradient-to-r",
                          "border-gradient-to-r"
                        )} transition-all duration-300 opacity-0 group-hover:opacity-50`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-orange-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Services for RV Movers Near Me
                  </h2>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Main Description */}
                  <div className="space-y-8">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                      <p className="text-xl text-blue-100 leading-relaxed mb-6">
                        We possess the necessary expertise and experience to
                        provide you with reliable support for transporting your
                        RV. Rapid Auto Shipping specializes in RV transportation
                        services, ensuring damage-free delivery of your vehicle.
                      </p>

                      <p className="text-xl text-blue-100 leading-relaxed mb-6">
                        If you want to find "RV movers nearby" look no further.
                        At all times, we prioritize ensuring your protection and
                        security.
                      </p>

                      <p className="text-xl text-blue-100 leading-relaxed">
                        Rapid Auto Shipping is a transportation company with
                        extensive experience delivering RVs across the country
                        or within a specific state. With our extensive
                        experience and comprehensive resources, we are fully
                        capable of meeting all of your RV transportation
                        requirements.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Service Features */}
                  <div className="space-y-6">
                    {serviceFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="group flex items-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                      >
                        {/* Mobile: Icon above text and centered */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 w-full text-center sm:text-left">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 flex-shrink-0">
                            {React.cloneElement(feature.icon, {
                              className: "w-6 h-6 text-white",
                            })}
                          </div>

                          <p className="text-lg text-white font-medium group-hover:text-orange-300 transition-colors duration-300">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <StatsSection />

          <div className=" bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        Requesting Quotes for RV Shipping Service
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      To receive an immediate shipping quote for sending an RV
                      or any other vehicle, please fill out the vehicle
                      transport price form above or call (833) 233-4447.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      If you are searching for "rv movers near me," it is
                      advisable to obtain RV shipping quotes before making a
                      decision. We are proud to provide prompt and precise RV
                      shipping estimates for our RV shipping service, ensuring
                      customer satisfaction. We are here to assist you with
                      driving your vehicle wherever you need to go.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        <img
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754653926/199990472_nqdwdr.webp"
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
