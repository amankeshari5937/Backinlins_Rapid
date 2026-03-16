"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import {
  Truck,
  Plus,
  Minus,
  Car,
  DollarSign,
  Shield,
  Clock,
  FileText,
  CheckCircle,
  Globe,
  Award,
  Lock,
  Zap,
  Eye,
} from "lucide-react";
import { MapPin } from "lucide-react";
import Image from "next/image";

const Home = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = useCallback((index) => {
    setOpenItems((prev) => {
      const newOpenItems = new Set(prev);
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
      return newOpenItems;
    });
  }, []);

  const trustReasons = useMemo(
    () => [
      {
        title: "Expedited Fleet Deployment:",
        description:
          "Our advanced logistics system ensures quick vehicle transport, minimizing downtime and optimizing rental readiness.",
        icon: <Zap className="w-6 h-6" />,
      },
      {
        title: "Real-Time Tracking & Transparency:",
        description:
          "Get complete visibility of your fleet's activity with real-time tracking and regular status updates.",
        icon: <Eye className="w-6 h-6" />,
      },
      {
        title: "Cost-Effective, Transparent Pricing:",
        description:
          "Competitive rates with no surprises, allowing for cost savings and affordable auto transport.",
        icon: <DollarSign className="w-6 h-6" />,
      },
      {
        title: "Reliable Vehicle Transportation:",
        description:
          "Choose Open and enclosed transport depending on the type of vehicle, level of security needed, and affordability.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Nationwide Car Shipping:",
        description: "Our reliable transport services cover all 50 states.",
        icon: <Globe className="w-6 h-6" />,
      },
      {
        title: "Secure Car Shipping for Rental Businesses:",
        description:
          "Full insurance coverage shields your fleet against unexpected transit risks, providing maximum peace of mind.",
        icon: <Lock className="w-6 h-6" />,
      },
    ],
    [],
  );

  const processSteps = useMemo(
    () => [
      {
        number: "1",
        title: "Request a Custom Quote",
        description:
          "Complete your fleet management logistics online or by phone. Our professional staff examines major factors such as fleet volume, distance, transport priority, and type of service (open or enclosed shipping) to create a clear-cut, competitive bid with no up-charges.",
        icon: <FileText className="w-6 h-6" />,
      },
      {
        number: "2",
        title: "Arrange & Coordinate Fleet Pickup",
        description:
          "Once transport is arranged, our logistics experts coordinate the on-time collection of vehicles from your specified rental sites. We coordinate around your business schedule to cause minimal operational disruption, whether for a single branch relocation or a multi-location fleet relocation.",
        icon: <Truck className="w-6 h-6" />,
      },
      {
        number: "3",
        title: "Secure & Specialized Transport Handling",
        description:
          "Our experienced operators safely load vehicles onto open transport (standard rental fleets) or enclosed transport (luxury and high-value fleets). We exercise strict security measures, such as protective coverings, secure tie-downs, and tracking service, guaranteeing damage-free transit.",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        number: "4",
        title: "Guaranteed On-Time Fleet Delivery",
        description:
          "We emphasize timely and secure vehicle delivery for rental businesses to match rental needs and schedule requirements. We track the complete transportation process with real-time tracking and advance notification. Upon delivery, we do a final inspection of the vehicle to verify its condition and fleet readiness.",
        icon: <CheckCircle className="w-6 h-6" />,
      },
    ],
    [],
  );

  const transportServices = useMemo(
    () => [
      {
        title: "Open Transport",
        description:
          "A very cost-effective and scalable method of relocating standard rental cars. This method provides low-cost rental car fleet transport without compromising efficiency and safety and is thus the best for bulk transportation.",
        features: [
          "Cost-effective",
          "Scalable method",
          "Bulk transportation",
          "Efficiency & safety",
        ],
      },
      {
        title: "Enclosed Transport",
        description:
          "Enclosed transport is best for rental cars that are expensive, rare, or luxurious. It protects the cars from weather, road debris, and other damage, making sure they arrive safely and in perfect condition.",
        features: [
          "Premium protection",
          "Weather resistant",
          "Luxury vehicles",
          "Perfect condition",
        ],
      },
      {
        title: "Door to Door Auto Shipping",
        description:
          "A superior, hassle-free service, with direct pick-up and delivery at your rental agency or specified terminals. Door to door auto shipping reduces the risk of handling and optimizes fleet utilization and operating efficiency.",
        features: [
          "Direct pickup",
          "Hassle-free service",
          "Reduced handling",
          "Fleet optimization",
        ],
      },
      {
        title: "Terminal to Terminal Shipping",
        description:
          "An affordable option for rental companies that want to drop off and pick up cars at central points. This is a good option for companies that want flexibility without high costs.",
        features: [
          "Affordable option",
          "Central points",
          "High flexibility",
          "Cost control",
        ],
      },
      {
        title: "Expedited Delivery",
        description:
          "As our name implies, our expertise is in fast car shipping for rental companies with expedited delivery service. It provides faster pickup and delivery schedules, allowing rental companies to accommodate high seasonal demand, emergency replacements, or unforeseen vehicle shortages.",
        features: [
          "Fast shipping",
          "Quick schedules",
          "Emergency service",
          "Seasonal demand",
        ],
      },
      {
        title: "Non-Running Car Transport",
        description:
          "We specialize in the transportation of inoperable rental cars resulting from mechanical breakdown, accident damage, or other problems. With the use of specialized equipment like lift gates and winches, we load, transport, and deliver non-running cars safely and securely, enabling rental companies to maintain fleet efficiency and vehicle recovery programs.",
        features: [
          "Inoperable vehicles",
          "Specialized equipment",
          "Safe transport",
          "Recovery programs",
        ],
      },
    ],
    [],
  );

  const faqData = useMemo(
    () => [
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "How quickly can you transport my rental vehicles?",
        answer:
          "Standard shipments typically take 3-5 business days, depending on distance and route complexity. Expedited transport is available for urgent fleet movements.",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        question: "What types of vehicles can you ship?",
        answer:
          "We handle sedans, compact cars, SUVs, pickup trucks, electric vehicles, luxury models, and specialty fleet vehicles, using both open and enclosed transport methods.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "Do you offer tracking for my fleet?",
        answer:
          "Yes! We offer a standard monitoring device to monitor your car in transit. You can monitor your shipment 24/7 using the online real-time tracking function. To monitor your vehicle shipment, please provide us with your tracking information, name, email address, and/or phone number.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "How much does rental car transport cost?",
        answer:
          "Pricing depends on multiple factors, including fleet size, route complexity, transport type, urgency, and vehicle specifications. Contact us for a detailed quote.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "Can I schedule recurring or bulk transport services?",
        answer:
          "Absolutely! We provide customized fleet transport solutions for rental companies needing regular or high-volume vehicle relocation. Ensure seamless fleet distribution and optimized operational efficiency with nationwide car shipping solutions from Rapid Auto Shipping—your trusted partner in rental car fleet logistics!",
      },
    ],
    [],
  );

  return (
    <>
      <Head>
        <title>Rental Car Auto Transport Services | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Streamline your rental car fleet with Rapid Auto Shipping's reliable, affordable rental car auto transport services. Fast delivery, real-time tracking, and nationwide coverage."
        />
        <meta charSet="UTF-8" />
       
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/rental-car-auto-transport-service"
        />
        <meta
          property="og:title"
          content="Rental Car Auto Transport Services | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Streamline your rental car fleet with Rapid Auto Shipping's reliable, affordable rental car auto transport services. Fast delivery, real-time tracking, and nationwide coverage.!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/rental-car-auto-transport-service"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751537623/Car_Shipping_1_pr961m.webp"
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
                      "https://rapidautoshipping.com/rental-car-auto-transport-service",
                    name: "rental-car-auto-transport-service",
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
              serviceType: "Rental Car Auto Transport Service",
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
                "Nationwide rental car transport service for fleet owners, rental agencies, and corporate logistics. We provide fast, safe, and insured vehicle relocation using enclosed or open carriers.",
              url: "https://rapidautoshipping.com/rental-car-auto-transport-service",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How quickly can you transport my rental vehicles?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Standard shipments typically take 3–5 business days, depending on distance and route complexity. Expedited transport is available for urgent fleet movements.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What types of vehicles can you ship?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We handle sedans, compact cars, SUVs, pickup trucks, electric vehicles, luxury models, and specialty fleet vehicles, using both open and enclosed transport methods.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you offer tracking for my fleet?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! We offer a standard monitoring device to monitor your car in transit. You can monitor your shipment 24/7 using the online real-time tracking function. To monitor your vehicle shipment, please provide us with your tracking information, name, email address, and/or phone number.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much does rental car transport cost?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Pricing depends on multiple factors, including fleet size, route complexity, transport type, urgency, and vehicle specifications. Contact us for a detailed quote.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I schedule recurring or bulk transport services?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely! We provide customized fleet transport solutions for rental companies needing regular or high-volume vehicle relocation. Ensure seamless fleet distribution and optimized operational efficiency with nationwide car shipping solutions from Rapid Auto Shipping—your trusted partner in rental car fleet logistics!",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          {/* Hero Section - Mobile: solid bg, Desktop: image */}
          <section className="relative py-8  flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on Mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751537623/Car_Shipping_1_pr961m.webp"
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

            {/* SVG Pattern - Hidden on Mobile */}
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
                <rect width="100%" height="100%" fill="url(#glassPattern)" />
              </svg>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center  px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 md:bg-[#001933]/40 max-w-3xl rounded-lg p-3 sm:p-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    Rental Car Auto{" "}
                    <span className="text-[#ff5722]">Transport Services</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    At Rapid Auto Shipping, we are dedicated to Rental Car Auto
                    Transport Services, providing hassle-free fleet relocation
                    for rental car companies across the country. From economy
                    cars to high-end SUVs, we transport vehicles safely and
                    efficiently, reducing downtime and increasing availability.
                    With regular tracking updates, secure shipment, and flexible
                    shipping arrangements, we enable rental firms to have a
                    dependable and accessible fleet.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-md mx-auto relative z-30">
                <TransportForm />
              </div>
            </div>
          </section>

          <div className=" bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        What is Rental Car Auto Transport Services ?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Auto transport for rental car companies facilitates rental
                      fleets to transport vehicles from one point to another
                      securely and efficiently. Rental Car Auto Transport
                      Services offers reliable vehicle transportation for
                      relocating a rental car fleet to accommodate demands or
                      shifting between branches. Businesses can have open and
                      enclosed transport, track shipments in real-time, and
                      avail door to door auto shipping for ease of use.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      With affordable auto transport and nationwide car
                      shipping, car rental companies can have their fleets ready
                      to be rented with less downtime.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751543032/rental_car_shipping_1_ovepeg.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={400}
                        loading="lazy"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-white py-16 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              {/* Floating Background Elements */}
              <div className="fixed inset-0 pointer-events-none">
                <div
                  className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-5 animate-float"
                  style={{ backgroundColor: "#ff5722", animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute bottom-20 right-20 w-48 h-48 rounded-full opacity-5 animate-float"
                  style={{ backgroundColor: "#003366", animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full opacity-5 animate-float"
                  style={{ backgroundColor: "#ff5722", animationDelay: "4s" }}
                ></div>
              </div>

              {/* Header Section */}
              <div className="relative text-center mb-20">
                <div
                  className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 shadow-2xl animate-pulse-glow"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  <Award className="w-16 h-16 text-white animate-spin-slow" />
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight animate-slide-up">
                  <span style={{ color: "#003366" }}>Why Partner with </span>
                  <span style={{ color: "#ff5722" }}>Rapid Auto Shipping?</span>
                </h2>

                <div
                  className="max-w-5xl mx-auto bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-3xl p-10 border-2 shadow-xl animate-fade-in-up"
                  style={{ borderColor: "#ff5722", animationDelay: "0.5s" }}
                >
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    Operations management of a rental car fleet involves
                    strategic logistics, cost management, and operational
                    efficiency. At Rapid Auto Shipping, we offer tailored auto
                    transport for rental car companies, ensuring efficient fleet
                    redistribution, transit schedule optimization, and downtime
                    reduction. Whether you need large-scale fleet relocation,
                    seasonal repositioning, inter-branch relocation, or
                    expedited vehicle replacements, our rental car fleet
                    transport service provides a secure, efficient, and
                    cost-efficient solution.
                  </p>
                </div>
              </div>

              {/* Trust Reasons Section */}
              <div className="mb-20">
                <div className="text-center mb-16">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6 animate-slide-in-left"
                    style={{ color: "#003366" }}
                  >
                    Why Top Rental Car Companies{" "}
                    <span style={{ color: "#ff5722" }}>Trust Us</span>
                  </h2>
                  <div
                    className="w-32 h-2 mx-auto rounded-full animate-expand"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                  {trustReasons.map((reason, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 p-8 border-2 animate-fade-in-scale"
                      style={{
                        borderColor: index % 2 === 0 ? "#ff5722" : "#003366",
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start items-center md:space-x-6 space-y-6 md:space-y-0">
                        <div
                          className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-bounce-in"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                            animationDelay: `${index * 0.1}s`,
                          }}
                        >
                          <div className="text-white">{reason.icon}</div>
                          <div
                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-ping"
                            style={{
                              backgroundColor:
                                index % 2 === 0 ? "#003366" : "#ff5722",
                              opacity: 0.6,
                            }}
                          ></div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <h3
                            className="text-xl font-bold mb-4 animate-slide-in-right"
                            style={{
                              color: "#003366",
                              animationDelay: `${index * 0.1 + 0.3}s`,
                            }}
                          >
                            {reason.title}
                          </h3>
                          <p
                            className="text-gray-700 leading-relaxed animate-fade-in"
                            style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                          >
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-12 bg-gradient-to-r from-blue-50 via-orange-50 to-blue-50 rounded-3xl p-8 border-2 shadow-lg animate-slide-up"
                  style={{ borderColor: "#003366", animationDelay: "1.5s" }}
                >
                  <p
                    className="text-lg text-center font-medium"
                    style={{ color: "#003366" }}
                  >
                    By establishing alliances with us, car rental companies will
                    ensure fleet mobility and business sustainability through
                    Reliable vehicle transportation specifically tailored to
                    their needs.
                  </p>
                </div>
              </div>

              {/* Process Section */}
              <div className="mb-16">
                <div className="text-center mb-16">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6 animate-slide-in-right"
                    style={{ color: "#003366" }}
                  >
                    Our Streamlined Process for{" "}
                    <span style={{ color: "#ff5722" }}>
                      Rental Car Auto Transport Services
                    </span>
                  </h2>
                  <div
                    className="w-32 h-2 mx-auto rounded-full animate-expand"
                    style={{
                      backgroundColor: "#ff5722",
                      animationDelay: "0.5s",
                    }}
                  ></div>
                  <p
                    className="text-lg text-gray-700 max-w-4xl mx-auto mt-6 animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                  >
                    Here, we simplify the rental car fleet transport process,
                    providing hassle-free logistics and reducing downtime. Our
                    sequential process ensures secure, efficient, and timely
                    relocation of vehicles.
                  </p>
                </div>

                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex flex-col lg:flex-row items-center gap-8 animate-slide-in-scale ${
                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      {/* Content Card */}
                      <div
                        className="flex-1 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 border-2"
                        style={{
                          borderColor: index % 2 === 0 ? "#ff5722" : "#003366",
                        }}
                      >
                        <div className="flex flex-col md:flex-row md:items-start items-center md:space-x-6 space-y-6 md:space-y-0">
                          <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                            style={{
                              backgroundColor:
                                index % 2 === 0 ? "#ff5722" : "#003366",
                            }}
                          >
                            <div className="text-white">{step.icon}</div>
                          </div>

                          <div className="flex-1 text-center md:text-left">
                            <h3
                              className="text-2xl font-bold mb-4"
                              style={{ color: "#003366" }}
                            >
                              {step.number}: {step.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Number Circle */}
                      <div className="flex-shrink-0">
                        <div
                          className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl animate-pulse-scale"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                            animationDelay: `${index * 0.2 + 0.5}s`,
                          }}
                        >
                          {step.number}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div
                className="relative bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-3xl p-12 shadow-2xl border-2 text-center animate-fade-in-up"
                style={{ borderColor: "#ff5722", animationDelay: "2s" }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-5 rounded-3xl"
                  style={{
                    background: "linear-gradient(45deg, #ff5722, #003366)",
                  }}
                ></div>

                <div className="relative z-10">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Maximize Your Fleet Management Logistics
                  </h2>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                    Rental car companies can enjoy a trouble-free transport
                    experience, unparalleled efficiency, and cross-country
                    service with us at their side. Call us today to maximize
                    your Fleet management logistics with safe and dependable
                    rental car auto transport services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute top-1/4 -left-20 w-40 h-40 rounded-full opacity-10 animate-spin-very-slow"
                  style={{ backgroundColor: "#ff5722" }}
                ></div>
                <div
                  className="absolute bottom-1/4 -right-20 w-32 h-32 rounded-full opacity-10 animate-spin-very-slow"
                  style={{
                    backgroundColor: "#003366",
                    animationDirection: "reverse",
                  }}
                ></div>
              </div>

              {/* Header Section */}
              <div className="relative text-center mb-20">
                <div className="flex justify-center mb-8">
                  <div className="relative"></div>
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight animate-fade-in-down">
                  <span style={{ color: "#ff5722" }}>
                    Tailored Auto Transport Services
                  </span>
                  <span style={{ color: "#003366" }}> for Rental Fleets</span>
                </h2>

                <div
                  className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-gray-200 animate-slide-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    Our tailored auto transport for rental car companies is
                    catered to your specific requirements. Relocating regular,
                    luxury, or non-operational cars is ensured through our
                    services in a safe, efficient, and economical manner.
                  </p>
                </div>
              </div>

              {/* Services Section */}
              <div className="mb-20">
                <div className="grid gap-8">
                  {transportServices.map((service, index) => (
                    <div
                      key={index}
                      className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden animate-slide-in-stagger ${
                        index % 2 === 0 ? "" : "md:ml-12"
                      }`}
                      style={{
                        animationDelay: `${index * 0.15}s`,
                        border: `2px solid ${
                          index % 2 === 0 ? "#ff5722" : "#003366"
                        }`,
                      }}
                    >
                      {/* Gradient Overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${
                            index % 2 === 0 ? "#ff5722" : "#003366"
                          }, transparent)`,
                        }}
                      ></div>

                      {/* Top Accent Line */}
                      <div
                        className="h-2 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#ff5722" : "#003366",
                        }}
                      ></div>

                      <div className="relative p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-8">
                          {/* Colored Box Section */}
                          <div className="flex-shrink-0">
                            <div className="relative">
                              {/* Floating Dots */}

                              <div
                                className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full animate-ping"
                                style={{
                                  backgroundColor:
                                    index % 2 === 0 ? "#003366" : "#ff5722",
                                  opacity: 0.5,
                                  animationDelay: "0.5s",
                                }}
                              ></div>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="flex-1 text-center lg:text-left">
                            <h3
                              className="text-2xl md:text-3xl font-bold mb-4 animate-slide-in-right"
                              style={{
                                color: "#003366",
                                animationDelay: `${index * 0.1 + 0.2}s`,
                              }}
                            >
                              {service.title}
                            </h3>

                            <p
                              className="text-gray-700 leading-relaxed mb-6 text-base animate-fade-in"
                              style={{
                                animationDelay: `${index * 0.1 + 0.4}s`,
                              }}
                            >
                              {service.description}
                            </p>

                            {/* Features Tags */}
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                              {service.features.map((feature, featureIndex) => (
                                <span
                                  key={featureIndex}
                                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 animate-bounce-in"
                                  style={{
                                    backgroundColor:
                                      index % 2 === 0 ? "#ff5722" : "#003366",
                                    animationDelay: `${
                                      index * 0.1 + featureIndex * 0.1 + 0.6
                                    }s`,
                                  }}
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Glow Effect */}
                      <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${
                            index % 2 === 0 ? "#ff5722" : "#003366"
                          }, transparent)`,
                        }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Bottom Message */}
                <div
                  className="mt-16 text-center bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl p-10 shadow-xl border-2 animate-slide-up"
                  style={{ borderColor: "#ff5722", animationDelay: "1.5s" }}
                >
                  <p
                    className="text-lg font-medium leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    With our tailored rental car auto transport services, your
                    rental car fleet transport is processed with accuracy,
                    reliability, and safety. Reach out to us today for a custom
                    transport solution to suit your operational requirements!
                  </p>
                </div>
              </div>

              {/* Comprehensive Services Section */}
              <div className="relative">
                <div
                  className="bg-gradient-to-r from-white via-blue-50 to-white rounded-3xl p-12 shadow-2xl border-2 animate-fade-in-up"
                  style={{ borderColor: "#003366", animationDelay: "2s" }}
                >
                  <div className="text-center">
                    <h2
                      className="text-3xl md:text-4xl font-bold mb-8 animate-slide-in-left"
                      style={{ color: "#003366", animationDelay: "2.2s" }}
                    >
                      Comprehensive Car Shipping for{" "}
                      <span style={{ color: "#ff5722" }}>
                        Rental Businesses of All Sizes
                      </span>
                    </h2>

                    <div className="max-w-5xl mx-auto">
                      <p
                        className="text-lg text-gray-700 leading-relaxed animate-fade-in"
                        style={{ animationDelay: "2.4s" }}
                      >
                        We offer tailored fleet mobility solutions for regional,
                        national, and corporate rental businesses to provide
                        hassle-free vehicle logistics at any level. Whether
                        you're a single-agency rental company or a national
                        rental chain, our professional fleet management
                        logistics optimize operations with secure, efficient,
                        and cost-effective transportation services. With
                        real-time tracking, reliable vehicle transportation
                        flexibility, and countrywide coverage, we provide your
                        rental car fleet transport requirements with precision
                        and reliability. Reducing downtime and maximizing fleet
                        availability to your customers.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
                      <Link href="https://rapidautoshipping.com/calculator">
                        <button
                          className="px-10 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl animate-bounce-in"
                          style={{
                            backgroundColor: "#ff5722",
                            animationDelay: "2.6s",
                          }}
                        >
                          Get Custom Solution
                        </button>
                      </Link>
                      <Link href="tel:+18332334447">
                        <button
                          className="px-10 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl animate-bounce-in"
                          style={{
                            backgroundColor: "#ff5722",
                            animationDelay: "2.6s",
                          }}
                        >
                          Contact Fleet Experts
                        </button>
                      </Link>
                    </div>
                  </div>
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
                        Enhance Your Rental Fleet Logistics Today
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Join forces with Rapid Auto Shipping for flawless auto
                      transport for rental car companies. Our reliable rental
                      car auto transport services are engineered to optimize
                      fleet management, save you money, and avoid unnecessary
                      downtime. With car shipping across the country, real-time
                      tracking, and flexible transportation, we guarantee your
                      rental car fleet shipping requirements are fulfilled with
                      precision and efficiency. Call{" "}
                      <Link href="tel:+18332334447">(833) 233-4447 </Link> or
                      email info@rapidautoshipping.com today for a personalized
                      transport quote and elevate your fleet management
                      logistics to the next level!
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751540818/rental_car_shipping_2_fwnong.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          width={800}
                          height={300}
                          loading="lazy"
                          className="w-full h-[300px] object-cover rounded-2xl shadow-2xl 
                 transition-all duration-700 ease-in-out
                    group-hover:scale-105 group-hover:shadow-3xl
                 group-hover:brightness-110 group-hover:contrast-105"
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
                        className="absolute bottom-4 left-4 bg-white/90 
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
            className=" bg-gradient-to-br from-gray-50 via-orange-50 to-blue-50 py-12 px-4"
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
                      className="group bg-white/70 border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
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
