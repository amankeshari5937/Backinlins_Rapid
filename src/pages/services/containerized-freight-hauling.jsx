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
  Container,
  Sparkles,
  Play,
  ArrowRight,
  ChevronDown,
  Zap,
  Settings,
  Leaf,
  ArrowRightLeft,
  Lock,
  Mail,
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

  const primaryColor = "#ff5722";
  const secondaryColor = "#003366";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const faqData = [
  {
    icon: <Truck className="w-5 h-5" />,
    question: "What is containerized freight hauling?",
    answer:
      "Containerized freight hauling involves transporting goods that are packed inside standardized shipping containers (typically 20 ft or 40 ft). These containers can hold anything from commercial cargo to vehicles and machinery, making them ideal for domestic and intermodal shipping.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    question: "What types of containers can Rapid Auto Shipping handle?",
    answer:
      "We handle all standard container sizes, including 20-foot, 40-foot, high-cube, and refrigerated (reefer) units. Whether you're shipping commercial goods, retail freight, or equipment, we have the flatbed, chassis, or lowboy trailers to move it safely.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "Is your container hauling service available nationwide?",
    answer:
      "Yes. We offer full-service container transport across all 50 U.S. states, with access to major ports, railyards, and distribution centers. Our experience with time-sensitive freight ensures on-time pickups and deliveries.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    question: "What industries do you serve for container freight?",
    answer:
      "We serve manufacturers, wholesalers, import/export companies, construction firms, retailers, and logistics providers. Our team understands the unique logistics, compliance, and scheduling demands of each sector.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Are permits and documentation handled by your team?",
    answer:
      "Absolutely. For oversized or overweight containers, we manage all required state permits and route planning. We also assist with container release paperwork, port coordination, and customs-related steps when needed.",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    question: "Why trust Rapid Auto Shipping for container transport?",
    answer:
      "With over a decade of experience, FMCSA-licensed drivers, full insurance coverage, and a nationwide carrier network, we are trusted by Fortune 500 companies and small businesses alike. We prioritize freight security, schedule accuracy, and communication every step of the way.",
  },
];
  return (
    <>
      <Head>
        <title>Containerized Freight Transportation – Best Services</title>
        <meta
          name="description"
          content="Rapid Auto Shipping provides container freight transportation services our carriers and containers are exceptionally durable and dependable."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/containerized-freight-hauling"
        />
        <meta
          property="og:title"
          content="Containerized Freight Transportation – Best Services"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping provides container freight transportation services our carriers and containers are exceptionally durable and dependable."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/containerized-freight-hauling"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://dashboard.rapidautoshipping.com/assets/images/img_gallery/1831031685.webp"
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
                      "https://rapidautoshipping.com/services/containerized-freight-hauling",
                    name: "containerized-freight-hauling",
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
              serviceType: "containerized-freight-hauling",
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
                "Rapid Auto Shipping provides container freight transportation services our carriers and containers are exceptionally durable and dependable.",

              url: "https://rapidautoshipping.com/services/containerized-freight-hauling",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753172223/international_car_shipping_3_wcgh5x.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753172223/international_car_shipping_3_wcgh5x.webp"
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
                    Containerized Freight{" "}
                    <span className="text-[#ff5722]">Hauling</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Rapid Auto Shipping's Containerized Freight Hauling
                    Department assists individuals and companies in transporting
                    single or multiple vehicles using containerized freight
                    hauling services. We employ professional drivers who are
                    fully insured, bonded, and licensed, and they specialize in
                    containerized freight hauling.
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
                        Containerized Freight Hauling Service
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Most auto transport companies have a policy prohibiting
                      personal items in vehicles not enclosed in containers.
                      This is mainly due to concerns about theft and the need
                      for drivers to have a clean and safe driving environment
                      when transporting vehicles from one location to another.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      We are committed to meeting your containerized freight
                      hauling needs at Rapid Auto Shipping. In addition to our
                      team of exceptional professional drivers, we have compiled
                      a list of containerized freight hauling companies that can
                      assist you in situations where we cannot provide our
                      services.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      We are proud to be recognized as a top Shipping Container
                      Transport Service Company. Our commitment to excellence
                      ensures that we provide you with a secure and efficient
                      delivery service.
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
                        src="https://dashboard.rapidautoshipping.com/assets/images/img_gallery/521688242.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-white overflow-hidden">
            {/* Ultra Modern Hero Section */}
            <div
              className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4"
              style={{
                background: `linear-gradient(135deg, ${secondaryColor} 0%, #001122 50%, ${secondaryColor} 100%)`,
              }}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0">
                <div
                  className="absolute top-10 left-5 w-32 h-32 md:w-72 md:h-72 md:top-20 md:left-10 rounded-full opacity-10 animate-pulse"
                  style={{
                    background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
                    transform: `translateY(${scrollY * 0.3}px)`,
                  }}
                ></div>
                <div
                  className="absolute bottom-10 right-5 w-40 h-40 md:w-96 md:h-96 md:bottom-20 md:right-10 rounded-full opacity-10 animate-pulse"
                  style={{
                    background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
                    transform: `translateY(${-scrollY * 0.2}px)`,
                    animationDelay: "1s",
                  }}
                ></div>
                <div
                  className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 rounded-full opacity-5 animate-spin"
                  style={{
                    background: `conic-gradient(from 0deg, ${primaryColor}, transparent, ${primaryColor})`,
                    transform: `translate(-50%, -50%) translateY(${
                      scrollY * 0.1
                    }px)`,
                    animationDuration: "20s",
                  }}
                ></div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 md:w-2 md:h-2 rounded-full opacity-30 animate-bounce ${
                      i > 7 ? "hidden md:block" : ""
                    }`}
                    style={{
                      backgroundColor: primaryColor,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${3 + Math.random() * 4}s`,
                    }}
                  ></div>
                ))}
              </div>

              <div className="relative z-10 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-8 px-3 py-2 md:px-6 md:py-3 bg-white/10 rounded-full backdrop-blur-lg border border-white/20">
                  <Container
                    className="w-4 h-4 md:w-5 md:h-5"
                    style={{ color: primaryColor }}
                  />
                  <span className="text-xs md:text-sm font-medium">
                    Global Freight Solutions
                  </span>
                  <Sparkles
                    className="w-3 h-3 md:w-4 md:h-4"
                    style={{ color: primaryColor }}
                  />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 leading-tight px-2">
                  What are the{" "}
                  <span
                    className="relative inline-block"
                    style={{ color: primaryColor }}
                  >
                    Benefits
                    <div
                      className="absolute -inset-1 md:-inset-2 rounded-lg opacity-20 blur-sm md:blur-xl animate-pulse"
                      style={{ backgroundColor: primaryColor }}
                    ></div>
                    
                  </span>
                  <br />
                  of Containerized Freight Hauling?
                </h2>

                <div className="flex flex-col gap-4 md:gap-6 justify-center items-center mt-8 md:mt-12 px-4">
                  <Link href="">
                    <button
                      className="group w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold rounded-full text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2 md:gap-3 relative overflow-hidden"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <Play className="w-5 h-5 md:w-6 md:h-6" />
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </Link>
                  <Link href="tel:+18332334447">
                    <button className="group w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-500 flex items-center justify-center gap-2 md:gap-3">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                      Call Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white opacity-70" />
              </div>
            </div>

            {/* Introduction Section */}
            <section className="relative  px-4 bg-white overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-16 md:h-32 transform -skew-y-1 md:-skew-y-2 origin-top-left"
                style={{ backgroundColor: secondaryColor }}
              ></div>

              <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16"></div>
              </div>
            </section>

            {/* Benefits Section */}
            <section
              className="relative  px-4 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${secondaryColor}05 0%, white 50%, ${primaryColor}05 100%)`,
              }}
            >
              <div className="max-w-7xl mx-auto mt-10">
                <div className="text-center mb-12 md:mb-20">
                  <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-2 md:px-4 md:py-2 bg-white rounded-full shadow-lg">
                    <Sparkles
                      className="w-4 h-4 md:w-5 md:h-5"
                      style={{ color: primaryColor }}
                    />
                    <span
                      className="text-xs md:text-sm font-semibold"
                      style={{ color: secondaryColor }}
                    >
                      Key Benefits
                    </span>
                  </div>
                  <h2
                    className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8"
                    style={{ color: secondaryColor }}
                  >
                    Seven Major{" "}
                    <span className="relative" style={{ color: primaryColor }}>
                      Advantages
                      <div
                        className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-6 opacity-20 rounded-full blur-sm"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                    </span>
                  </h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {/* Efficiency */}
                  <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500 lg:col-span-2">
                    <div className="relative">
                      <div
                        className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Zap
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-black mb-3 md:mb-4"
                        style={{ color: secondaryColor }}
                      >
                        Efficiency
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                        Containerized improves the efficiency of freight
                        hauling. Standardized containers are designed to fit
                        various modes of transportation, such as ships,{" "}
                        <strong>trucks</strong>, and trains.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        This allows for seamless intermodal transit, reducing
                        the need for cargo handling and minimizing delays.
                        Containers can be easily transferred between different
                        modes of transport without unpacking and repacking the
                        goods, resulting in faster transit times.
                      </p>
                    </div>
                  </div>

                  {/* Security */}
                  <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
                    <div className="relative">
                      <div
                        className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Shield
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-black mb-3 md:mb-4"
                        style={{ color: secondaryColor }}
                      >
                        Security
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                        Containers provide enhanced security for freight. They
                        are typically made of durable materials such as steel
                        and are sealed to protect the contents from theft,
                        damage, and adverse weather conditions.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        Containers can also be equipped with tracking systems,
                        enabling real-time monitoring of cargo location and
                        ensuring greater security throughout the transportation
                        process.
                      </p>
                    </div>
                  </div>

                  {/* Versatility */}
                  <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
                    <div className="relative">
                      <div
                        className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Settings
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-black mb-3 md:mb-4"
                        style={{ color: secondaryColor }}
                      >
                        Versatility
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        Containerized freight hauling offers versatility in
                        terms of cargo types. Containers come in various sizes
                        and styles, allowing for transporting a wide range of
                        goods, including dry goods, perishables, hazardous
                        materials, and oversized items. This flexibility makes
                        transporting different types of cargo easier using
                        standardized logistics processes.
                      </p>
                    </div>
                  </div>

                  {/* Simplified Handling */}
                  <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
                    <div className="relative">
                      <div
                        className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Package
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-black mb-3 md:mb-4"
                        style={{ color: secondaryColor }}
                      >
                        Simplified Handling
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                        Containers streamline the handling and logistics of
                        freight. Loading and unloading containers can be done
                        using specialized equipment such as cranes, forklifts,
                        and container-handling vehicles.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        This standardized handling process reduces manual labor,
                        minimizes the risk of damage to goods, and streamlines
                        operations at ports, warehouses, and distribution
                        centers.
                      </p>
                    </div>
                  </div>

                  {/* Cost Savings */}
                  <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
                    <div className="relative">
                      <div
                        className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <DollarSign
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-black mb-3 md:mb-4"
                        style={{ color: secondaryColor }}
                      >
                        Cost Savings
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                        Containerization can lead to cost savings in several
                        ways. By optimizing cargo space and reducing the need
                        for individual packaging, containers allow for efficient
                        transportation capacity utilization.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        This helps to lower shipping costs per unit of goods
                        transported. Additionally, containerized freight can
                        benefit from economies of scale, as large quantities of
                        goods can be transported in a single shipment, reducing
                        per-unit transportation costs.
                      </p>
                    </div>
                  </div>

                  {/* Environmental Impact */}
                  <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
                    <div className="relative">
                      <div
                        className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Leaf
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-black mb-3 md:mb-4"
                        style={{ color: secondaryColor }}
                      >
                        Environmental Impact
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                        Containerized freight hauling can have positive
                        environmental implications. Reducing the need for
                        multiple handling and transporting goods minimizes
                        carbon emissions and energy consumption associated with
                        transportation.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        Additionally, containers can be stacked and transported
                        more efficiently, optimizing the use of transportation
                        infrastructure and reducing congestion on roads and
                        ports.
                      </p>
                    </div>
                  </div>

                  {/* Intermodal Integration */}
                  <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500 lg:col-span-2">
                    <div className="relative">
                      <div
                        className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <ArrowRightLeft
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-black mb-3 md:mb-4"
                        style={{ color: secondaryColor }}
                      >
                        Intermodal Integration
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                        Containers facilitate seamless intermodal integration.
                        Goods can be transported by ships, then transferred to
                        trucks or trains, allowing for door-to-door delivery.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        This multimodal connectivity improves supply chain
                        efficiency and enables companies to reach markets that
                        are not directly accessible by a single mode of
                        transport.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-12 md:mt-16 text-center">
                  <div className="bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200 max-w-5xl mx-auto">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Overall, containerized freight hauling offers advantages
                      in efficiency, security, versatility, simplified handling,
                      cost savings, environmental impact, and intermodal
                      integration. These benefits have made containerization
                      widely adopted in modern logistics and global trade.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Section */}
            <section
              className="py-16 md:py-32 px-4 relative overflow-hidden"
              style={{ backgroundColor: secondaryColor }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, ${primaryColor} 1px, transparent 1px), radial-gradient(circle at 75% 75%, ${primaryColor} 1px, transparent 1px)`,
                    backgroundSize: "25px 25px",
                  }}
                ></div>
              </div>

              <div className="relative max-w-7xl mx-auto text-white">
                <div className="text-center mb-12 md:mb-20">
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8">
                    Why Should You Use{" "}
                    <span style={{ color: primaryColor }}>Containerized</span>
                    <br />
                    Freight Hauling?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    There are numerous reasons to choose containerized freight
                    hauling. For instance:
                  </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                  {/* Highly Convenient */}
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <div className="flex items-start gap-4 md:gap-6">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${primaryColor}20` }}
                      >
                        <CheckCircle
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
                          style={{ color: primaryColor }}
                        >
                          It is highly convenient
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          It enables the simultaneous transportation of multiple
                          vehicles. Minimizing the risk of damaging cars can be
                          achieved by moving them together. Our carriers and
                          containers are highly durable and dependable,
                          particularly for containerized freight hauling.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Very Safe */}
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <div className="flex items-start gap-4 md:gap-6">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${primaryColor}20` }}
                      >
                        <Lock
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
                          style={{ color: primaryColor }}
                        >
                          The process is also very safe
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          Containerized freight hauling is associated with the
                          lowest risk of theft or robbery. Rapid Auto Shipping
                          ensures that your vehicle is kept exceptionally safe
                          and secure. Regarding containerized freight hauling,
                          we will never compromise on safety.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Less Manual Effort */}
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <div className="flex items-start gap-4 md:gap-6">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${primaryColor}20` }}
                      >
                        <Users
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
                          style={{ color: primaryColor }}
                        >
                          Containerized freight hauling also requires less
                          manual effort
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          Compared to other forms of vehicle transportation, it
                          is a more straightforward process. Vehicles are loaded
                          onto the container and then transported to their
                          destination location. It is as simple as that!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cost-Effective */}
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <div className="flex items-start gap-4 md:gap-6">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${primaryColor}20` }}
                      >
                        <DollarSign
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
                          style={{ color: primaryColor }}
                        >
                          The process is highly cost-effective
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                          Rapid Auto Shipping understands and recognizes that
                          containerized freight hauling is a service often
                          chosen by customers with a tight budget.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          We aim to ensure that the entire process is
                          cost-effective for you and are committed to assisting
                          you in saving money. You can trust Rapid Auto Shipping
                          to provide you with the best prices for containerized
                          freight hauling.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Section */}
            <section className="py-16 md:py-32 px-4 bg-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div
                className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 rounded-full opacity-5 transform translate-x-24 md:translate-x-48 -translate-y-24 md:-translate-y-48"
                style={{ backgroundColor: primaryColor }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 rounded-full opacity-5 transform -translate-x-16 md:-translate-x-32 translate-y-16 md:translate-y-32"
                style={{ backgroundColor: secondaryColor }}
              ></div>

              <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-20">
                  <h2
                    className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8"
                    style={{ color: secondaryColor }}
                  >
                    Containerized Freight Auto Transport
                    <br />
                    <span style={{ color: primaryColor }}>vs.</span>
                    <br />
                    Roll-On/Roll-Off Shipping
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                  {/* Roll-On/Roll-Off Description */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${secondaryColor}15` }}
                      >
                        <Truck
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: secondaryColor }}
                        />
                      </div>
                      <h3
                        className="text-2xl md:text-3xl font-black"
                        style={{ color: secondaryColor }}
                      >
                        Roll-On/Roll-Off Shipping
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                      Roll-on/roll-off shipping is transporting vehicles by
                      loading them onto open car transporters or other oversized
                      trailers and then moving them to a port. After being
                      transported on an open car transport or trailer, the car
                      is driven into a container ship's lower section.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      The most cost-effective way to transport your vehicle over
                      water using a container ship is through roll-on/roll-off
                      shipping. However, placing your car in a container will
                      significantly enhance its safety.
                    </p>
                  </div>

                  {/* Containerized Advantage */}
                  <div
                    className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border-2"
                    style={{ borderColor: primaryColor }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Container
                          className="w-6 h-6 md:w-8 md:h-8"
                          style={{ color: primaryColor }}
                        />
                      </div>
                      <h3
                        className="text-2xl md:text-3xl font-black"
                        style={{ color: primaryColor }}
                      >
                        Containerized Advantage
                      </h3>
                    </div>
                    <div className="bg-white/50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield
                          className="w-6 h-6"
                          style={{ color: primaryColor }}
                        />
                        <h4
                          className="text-lg md:text-xl font-bold"
                          style={{ color: secondaryColor }}
                        >
                          Enhanced Safety
                        </h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        While roll-on/roll-off may be more cost-effective,
                        containerized shipping provides significantly better
                        protection for your vehicle during transport.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA Section */}
            <section
              className="py-16 md:py-32 px-4 text-white relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${secondaryColor} 0%, #001a33 50%, ${secondaryColor} 100%)`,
              }}
            >
              {/* Ultra Modern Background */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 opacity-5 md:opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, ${primaryColor}15 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${primaryColor}15 0%, transparent 50%)`,
                  }}
                ></div>
              </div>

              <div className="relative max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 md:mb-12">
                  Ready for{" "}
                  <span style={{ color: primaryColor }}>Containerized</span>
                  <br />
                  Freight Hauling?
                </h2>

                <p className="text-lg md:text-2xl leading-relaxed mb-8 md:mb-12 font-light max-w-4xl mx-auto">
                  Experience the benefits of secure, efficient, and
                  cost-effective containerized freight hauling with Rapid Auto
                  Shipping.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                  <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div
                      className="text-3xl md:text-5xl font-black mb-2 md:mb-3"
                      style={{ color: primaryColor }}
                    >
                      50,000+
                    </div>
                    <div className="text-gray-300 text-base md:text-lg">
                      Containers Shipped
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div
                      className="text-3xl md:text-5xl font-black mb-2 md:mb-3"
                      style={{ color: primaryColor }}
                    >
                      99.9%
                    </div>
                    <div className="text-gray-300 text-base md:text-lg">
                      Safe Delivery Rate
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div
                      className="text-3xl md:text-5xl font-black mb-2 md:mb-3"
                      style={{ color: primaryColor }}
                    >
                      24/7
                    </div>
                    <div className="text-gray-300 text-base md:text-lg">
                      Expert Support
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <StatsSection />

          <div className=" bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Containerized Freight Hauling Service
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Most auto transport companies have a policy prohibiting
                      personal items in vehicles not enclosed in containers.
                      This is mainly due to concerns about theft and the need
                      for drivers to have a clean and safe driving environment
                      when transporting vehicles from one location to another.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Containerized cargo transfer is considered one of the most
                      efficient car transportation methods. Rapid Auto Shipping
                      is the company you should choose to move your vehicles.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      We offer top-notch Containerized Freight hauling services
                      throughout the United States. Rapid Auto Shipping is
                      renowned for its selective approach to transportation
                      services, as we strive to provide the highest quality
                      delivery.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753957782/containerized-freight-hauling_hypxdc.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
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
