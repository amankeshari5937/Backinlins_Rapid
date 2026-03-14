"use client";

import React, { useState, useMemo, useCallback } from "react";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import { Calculator } from "lucide-react";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import StatsSection from "@/components/CommonComponents/StatsSection";
import {
  Truck,
  Plus,
  Minus,
  Car,
  DollarSign,
  Shield,
  Clock,
  Users,
  FileText,
  Package,
  Building,
  Star,
  Award,
  ArrowDown,
  Calendar,
  MapPin,
  TrendingUp,
  Globe,
  Zap,
  Settings,
  Phone,
} from "lucide-react";
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

  const services = useMemo(
    () => [
      {
        title: "New Inventory Transport:",
        description:
          "Smotherly ship cars from manufacturers or auctions to your dealership.",
        icon: <Package className="w-6 h-6" />,
      },
      {
        title: "Car Shipping for Dealers:",
        description: "Ship cars efficiently between dealership locations.",
        icon: <Building className="w-6 h-6" />,
      },
      {
        title: "Customer Vehicle Delivery:",
        description:
          "Discover how dealerships ship cars to customers through our direct to door services.",
        icon: <Users className="w-6 h-6" />,
      },
      {
        title: "Car Transport Jobs for Dealerships:",
        description:
          "We provide professional car transport driver for dealerships to deliver cars safely and on time.",
        icon: <Truck className="w-6 h-6" />,
      },
      {
        title: "Reliable Car Shipping:",
        description:
          "Reduce mileage buildup and safeguard vehicle value with expert transport services.",
        icon: <Shield className="w-6 h-6" />,
      },
    ],
    []
  );

  const openTransportFeatures = useMemo(
    () => [
      "Suitable for normal cars such as Toyota, Honda, Nissan, Ford, and Chevrolet.",
      "Most suitable for large quantities, enabling dealerships to carry multiple cars at reduced costs.",
      "Least expensive and most common method for auto transport in dealerships",
    ],
    []
  );

  const enclosedTransportFeatures = useMemo(
    () => [
      "Suitable for luxury, exotic, vintage, and high-value cars (Ferrari, Jaguar, Land Rover, Tesla, etc.).",
      "Maximum protection against weather, road debris, and potential damage.",
      "Higher insurance coverage, providing peace of mind to dealerships shipping valuable inventory.",
    ],
    []
  );

  const coordinationPoints = useMemo(
    () => [
      "Arrange a pickup date that is convenient for both the dealership and the transport carrier.",
      "Have all necessary documents in order, such as vehicle titles, inspection reports, and shipping contracts.",
      "Identify if the vehicle is to be picked up from an auto auction house, manufacturer, or a different dealership.",
      "Confirm the transport firm's insurance and FMCSA status to ensure a safe delivery.",
    ],
    []
  );

  const deliveryPoints = useMemo(
    () => [
      "Standard delivery timing varies but generally takes 2-5 days, depending on the distance.",
      "Urgent dealership requirements can be accommodated with expedited shipping, pickup within 24-48 hours.",
      "Coordinate with the transport provider to facilitate safe and efficient delivery at the dealership or customer site.",
    ],
    []
  );

  const benefits = useMemo(
    () => [
      {
        benefit: "Saves Time & Enhances Efficiency",
        description:
          "Fast and reliable transporting cars for dealerships to restock inventory, fulfill customer orders, and manage dealer to dealer transfers seamlessly.",
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        benefit: "Secure & Insured Delivery",
        description:
          "Vehicles are fully insured from pick-up to delivery, ensuring safe and damage-free car dealership vehicle transport.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        benefit: "Competitive & Transparent Pricing",
        description:
          "We offer cost-effective auto transport with upfront pricing. Get an instant quote online or consult our car transport advisors.",
        icon: <DollarSign className="w-6 h-6" />,
      },
      {
        benefit: "Hassle-Free, Nationwide Shipping",
        description:
          "Simplified auto auction transport and dealer shipping across the country with a seamless process.",
        icon: <Globe className="w-6 h-6" />,
      },
      {
        benefit: "Flexible Pick-Up & Delivery",
        description:
          "Choose door to door or terminal to terminal delivery for added convenience with our car transport for dealerships.",
        icon: <MapPin className="w-6 h-6" />,
      },
    ],
    []
  );

  const costFactors = useMemo(
    () => [
      {
        factor: "Distance",
        impact:
          "Longer distances lower the cost per mile but increase the total cost.",
        icon: <MapPin className="w-5 h-5" />,
      },
      {
        factor: "Vehicle Type",
        impact:
          "Larger, heavier vehicles cost more to transport than standard cars.",
        icon: <Truck className="w-5 h-5" />,
      },
      {
        factor: "Transport Method",
        impact:
          "Open transport is more affordable, while enclosed shipping provides extra protection at a higher price.",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        factor: "Urgency",
        impact: "Expedited shipping incurs additional fees for faster delivery.",
        icon: <Zap className="w-5 h-5" />,
      },
    ],
    []
  );

  const whyChoosePoints = useMemo(
    () => [
      {
        title: "Quick & Smooth Auto Transport:",
        description:
          "We assist dealerships in transporting inventory efficiently, ensuring business continuity.",
        icon: <Zap className="w-6 h-6" />,
      },
      {
        title: "Flexible Shipping Options:",
        description:
          "Select open or enclosed transportation, door-to-door, or terminal delivery.",
        icon: <Settings className="w-6 h-6" />,
      },
      {
        title: "Cost-Effective Solutions:",
        description:
          "Benefit from competitive prices with bulk shipping discounts.",
        icon: <DollarSign className="w-6 h-6" />,
      },
      {
        title: "Safe & Insured Deliveries:",
        description: "All cars are completely insured from pick-up to delivery.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Nationwide Coverage:",
        description:
          "No matter if you require dealer-to-dealer car transport, auto auction transport, or direct-to-customer delivery, we have you covered.",
        icon: <Globe className="w-6 h-6" />,
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <DollarSign className="w-5 h-5" />,
        question:
          "Does the car transport service provided by dealers operate nationwide?",
        answer:
          "Our dealer car transport service is available throughout the country. We can arrange for auto transport between dealers or from a dealer to a customer's doorstep. Please provide our shipping advisors with all the necessary details, and we will arrange for pick-up and delivery as soon as possible while ensuring safety and compliance with the law.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question:
          "Which auto transport services are preferred by car dealerships?",
        answer:
          "Reliability and value for money are crucial factors to consider when transporting cars, whether for customers or another dealer. Open car transport is a preferred method for transporting cars for dealerships. At times, a particular service is needed, and in such instances, car dealerships in Simpsonville, SC, and nationwide opt for covered car transportation. We provide door-to-door shipping services to all of our customers. Dealerships offer express delivery and guaranteed pick-up options for customers who need their cars delivered quickly due to time constraints.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "Do you specialize in high-end vehicles?",
        answer:
          "Rapid Auto Shipping is capable of securely transporting luxury vehicles. We ensure the safe transportation of your car by using enclosed trucks that provide a secure environment. We frequently ship exotic vehicles. Rapid Auto Shipping is a comprehensive coast-to-coast auto transport company specializing in shipping cars nationwide. We offer vehicle transport services that are licensed, bonded, and insured. Rapid Auto Shipping is capable of providing transportation services for non-running vehicles, as well as salvage car transport services. Additionally, they have a proven track record of successfully transporting various other types of cars, which can significantly assist dealerships.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "What is the expected delivery date of my vehicle?",
        answer:
          "The typical time to ship a car is 3 to 5 business days. However, car shipping depends on factors like transport truck bandwidth, traffic, weather, and other factors that will influence your specific timings.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question:
          "Why are automobile shipping services necessary for dealerships?",
        answer:
          "Car dealerships rely on car transport services to restock their inventory, acquire new vehicle models, or transfer vehicles to various locations.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "Is automobile transport only accessible for new cars?",
        answer:
          "Not quite. Car transport services are suitable for transporting both new and used vehicles. Car, trucks, and SUVs comprise a modest percentage of our transport. We also move vans, motorcycles, limousines, yachts, RVs, and other vehicles. We transport all sorts of vehicles, such as heavy machinery, military vehicles, and even boats.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question:
          "Do Rapid Auto Shipping provide dealerships with door to door delivery?",
        answer:
          "Yes, Rapid Auto Shipping offers convenient door to door delivery services. These services involve picking up vehicles from their point of origin and direct delivery to the designated dealership.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question:
          "For critical deliveries, may dealerships ask for expedited shipping?",
        answer:
          "Yes, Rapid Auto Shipping provides expedited shipping services specifically designed to meet the urgent requirements of dealerships. However, it is essential to note that opting for this service may result in an extra charge.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Transporting Cars for Dealerships | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Rapid Auto Shipping specializes in transporting cars for dealerships across the country, providing a seamless, cost-effective, tailored auto transport service."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/transporting-cars-for-dealerships"
        />
        <meta
          property="og:title"
          content="Transporting Cars for Dealerships | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping specializes in transporting cars for dealerships across the country, providing a seamless, cost-effective, tailored auto transport service."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/transporting-cars-for-dealerships"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751629728/Can_I_Ship_a_Car_1_ruhqjk.webp"
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
                    name: "transporting-cars-for-dealerships",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/transporting-cars-for-dealerships",
                    name: "transporting-cars-for-dealerships",
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
              serviceType: "Transporting Cars for Dealerships",
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
                "Nationwide car transport services for dealerships, offering secure open and enclosed shipping, door-to-door delivery, and expedited options by Rapid Auto Shipping.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Does the car transport service provided by dealers operate nationwide?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Our dealer car transport service is available throughout the country. We can arrange for auto transport between dealers or from a dealer to a customer's doorstep. Please provide our shipping advisors with all the necessary details, and we will arrange for pick-up and delivery as soon as possible while ensuring safety and compliance with the law.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which auto transport services are preferred by car dealerships?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Reliability and value for money are crucial factors to consider when transporting cars, whether for customers or another dealer. Open car transport is a preferred method for transporting cars for dealerships. At times, a particular service is needed, and in such instances, car dealerships opt for covered car transportation. We provide door-to-door shipping services to all of our customers, along with express delivery and guaranteed pick-up options.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you specialize in high-end vehicles?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Rapid Auto Shipping is capable of securely transporting luxury vehicles. We use enclosed trucks that provide a secure environment and frequently ship exotic vehicles. We also transport non-running vehicles, salvage cars, and have a proven track record with various other vehicle types to assist dealerships.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the expected delivery date of my vehicle?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The typical time to ship a car is 3 to 5 business days. However, shipping depends on factors like transport truck bandwidth, traffic, weather, and other variables that will influence your specific timings.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why are automobile shipping services necessary for dealerships?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Car dealerships rely on car transport services to restock their inventory, acquire new vehicle models, or transfer vehicles to various locations.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is automobile transport only accessible for new cars?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Not quite. Car transport services are suitable for transporting both new and used vehicles. We also move vans, motorcycles, limousines, yachts, RVs, heavy machinery, military vehicles, and even boats.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do Rapid Auto Shipping provide dealerships with door to door delivery?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Rapid Auto Shipping offers convenient door to door delivery services, picking up vehicles from their point of origin and delivering them directly to the designated dealership.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "For critical deliveries, may dealerships ask for expedited shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Rapid Auto Shipping provides expedited shipping services specifically designed to meet urgent requirements of dealerships. However, opting for this service may result in an extra charge.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/services/transporting-cars-for-dealerships",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1750861441/98_wcqqkn.png"
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
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#glassPattern)"
                />
              </svg>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center  px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 md:bg-[#001933]/40 max-w-3xl rounded-lg p-3 sm:p-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    Transporting Cars for{" "}
                    <span className="text-[#ff5722]">Dealerships</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    At Rapid Auto Shipping, we specialize in transporting cars
                    for dealerships, providing a seamless and cost-effective
                    auto transport service tailored to the needs of dealerships
                    nationwide. Our professional auto transport for car
                    dealerships ensures safe and reliable car shipping using
                    FMCSA approved auto transport carriers. Whether you need
                    dealer to dealer car shipping, auto auction transport, or
                    transportation for car dealerships, we offer flexible,
                    affordable solutions.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto relative z-30">
                <TransportForm />
              </div>
            </div>
          </section>

          <div className="min-h-screen bg-white py-16 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              {/* Floating Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-5 animate-float"
                  style={{ backgroundColor: "#ff5722" }}
                ></div>
                <div
                  className="absolute bottom-40 right-20 w-24 h-24 rounded-full opacity-5 animate-float-delayed"
                  style={{ backgroundColor: "#003366" }}
                ></div>
                <div
                  className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full opacity-5 animate-float-slow"
                  style={{ backgroundColor: "#ff5722" }}
                ></div>
              </div>

              {/* Header Section */}
              <div className="text-center mb-20 relative">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-2xl animate-pulse-glow"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  <Building className="w-8 h-8 text-white animate-bounce-gentle" />
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight animate-slide-in-up">
                  <span style={{ color: "#003366" }}>
                    Understanding Transporting Cars for Dealerships:{" "}
                  </span>
                  <span style={{ color: "#ff5722" }}>
                    Why Dealerships Need Auto Transport Services?
                  </span>
                </h2>

                <div
                  className="max-w-5xl mx-auto bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-3xl p-10 shadow-xl border-2 animate-fade-in-up"
                  style={{ borderColor: "#ff5722", animationDelay: "0.5s" }}
                >
                  <p
                    className="text-lg leading-relaxed mb-6"
                    style={{ color: "#003366" }}
                  >
                    Auto transport services are crucial for car dealerships to
                    provide affordable, reliable, and efficient transportation
                    of vehicles. Whether{" "}
                    <strong>transporting cars for dealerships</strong>,
                    delivering customer orders, dealing with dealer to dealer
                    car shipping, or auto auction transport, the best auto
                    transport company streamlines logistics while minimizing
                    costs and risks.
                  </p>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    At Rapid Auto Shipping, we focus on dealership car shipping
                    and provide customized auto transport solutions to suit
                    dealerships across the country. Our services are as follows:
                  </p>
                </div>
              </div>

              {/* Image and Services Section */}
              <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">
                {/* Left Side - Services */}
                <div className="flex-1 lg:order-1">
                  <div className="space-y-8">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 border-l-4 animate-slide-in-left"
                        style={{
                          borderLeftColor:
                            index % 2 === 0 ? "#ff5722" : "#003366",
                          animationDelay: `${index * 0.2}s`,
                        }}
                      >
                        {/* Service Content */}
                        <div className="flex flex-col md:flex-row md:items-start items-center gap-6">
                          {/* Icon */}
                          <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                            style={{
                              backgroundColor:
                                index % 2 === 0 ? "#ff5722" : "#003366",
                            }}
                          >
                            <div className="text-white">{service.icon}</div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 text-center md:text-left">
                            <h3
                              className="text-xl font-bold mb-3"
                              style={{ color: "#003366" }}
                            >
                              {service.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div
                          className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                          style={{
                            background: `linear-gradient(135deg, ${
                              index % 2 === 0 ? "#ff5722" : "#003366"
                            }, transparent)`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 lg:order-2">
                  <div className="sticky top-20">
                    <div
                      className="relative rounded-3xl overflow-hidden shadow-2xl animate-slide-in-right mt-40"
                      style={{ animationDelay: "0.8s" }}
                    >
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751629728/Can_I_Ship_a_Car_1_ruhqjk.webp"
                          alt="Dealership Auto Transport"
                          width={800}
                          height={800}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Decorative Elements */}
                      <div
                        className="absolute -top-4 -left-4 w-8 h-8 rounded-full animate-ping"
                        style={{ backgroundColor: "#ff5722", opacity: 0.3 }}
                      ></div>
                      <div
                        className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full animate-ping"
                        style={{
                          backgroundColor: "#003366",
                          opacity: 0.4,
                          animationDelay: "1s",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Summary Section */}
              <div
                className="bg-gradient-to-r from-blue-50 via-white to-orange-50 rounded-3xl p-12 shadow-xl border-2 text-center animate-fade-in-up"
                style={{ borderColor: "#003366", animationDelay: "1.5s" }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="flex space-x-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{
                          backgroundColor: i % 2 === 0 ? "#ff5722" : "#003366",
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: "#003366" }}
                >
                  <span style={{ color: "#ff5722" }}>
                    Best Auto Transport Company
                  </span>{" "}
                  for Dealerships
                </h2>

                <p
                  className="text-lg leading-relaxed max-w-4xl mx-auto mb-8"
                  style={{ color: "#003366" }}
                >
                  One of the best auto transport companies for dealerships, we
                  ensure safe, timely delivery of your cars in their original
                  condition. Whether you need a car transporter for dealerships
                  Savannah or across the country, we offer top-notch
                  transportation for car dealerships using open and enclosed car
                  transport.
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 py-20 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-20">
                <div className="relative inline-block mb-8">
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow"
                    style={{
                      background: "linear-gradient(135deg, #ff5722, #ff7043)",
                    }}
                  >
                    <Truck className="w-14 h-14 text-white" />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center animate-bounce"
                    style={{ backgroundColor: "#003366" }}
                  >
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight">
                  <span style={{ color: "#003366" }}>
                    How Dealerships Ship Cars to Customers:{" "}
                  </span>
                  <span style={{ color: "#ff5722" }}>A Step-by-Step Guide</span>
                </h2>

                <div
                  className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl border-l-4"
                  style={{ borderColor: "#ff5722" }}
                >
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    To arrange the shipment of your new car directly from the
                    dealership, here is the information you need to know:
                  </p>
                </div>
              </div>

              {/* Step 1 Section */}
              <div className="mb-20">
                <div className="flex items-center justify-center mb-12">
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-xl"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      1
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <ArrowDown
                        className="w-6 h-6 animate-bounce"
                        style={{ color: "#ff5722" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Step 1: Pick Your Desired{" "}
                    <span style={{ color: "#ff5722" }}>Shipping Option</span>
                  </h2>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    Selecting the proper auto transport method is essential for
                    cost savings and safe transportation of the vehicles.
                    Dealerships generally opt for either open transport or
                    enclosed transport based on the kind of vehicles being
                    transported.
                  </p>
                </div>

                {/* Transport Options */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Open Transport */}
                  <div
                    className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2"
                    style={{ borderColor: "#ff5722" }}
                  >
                    <div
                      className="h-3"
                      style={{ backgroundColor: "#ff5722" }}
                    ></div>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Truck className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3
                            className="text-2xl font-bold"
                            style={{ color: "#003366" }}
                          >
                            Open Transport
                          </h3>
                          <p
                            className="text-lg font-semibold"
                            style={{ color: "#ff5722" }}
                          >
                            Most Cost-Effective Solution
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {openTransportFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div
                              className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                              style={{ backgroundColor: "#ff5722" }}
                            ></div>
                            <p className="text-gray-700 leading-relaxed">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enclosed Transport */}
                  <div
                    className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2"
                    style={{ borderColor: "#003366" }}
                  >
                    <div
                      className="h-3"
                      style={{ backgroundColor: "#003366" }}
                    ></div>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3
                            className="text-2xl font-bold"
                            style={{ color: "#003366" }}
                          >
                            Enclosed Transport
                          </h3>
                          <p
                            className="text-lg font-semibold"
                            style={{ color: "#ff5722" }}
                          >
                            Ideal for High-End & Specialty Cars
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {enclosedTransportFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div
                              className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                              style={{ backgroundColor: "#003366" }}
                            ></div>
                            <p className="text-gray-700 leading-relaxed">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 Section */}
              <div className="mb-20">
                <div className="flex items-center justify-center mb-12">
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-xl"
                      style={{ backgroundColor: "#003366" }}
                    >
                      2
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <ArrowDown
                        className="w-6 h-6 animate-bounce"
                        style={{ color: "#003366" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Step 2: Coordinate with the{" "}
                    <span style={{ color: "#ff5722" }}>
                      Dealership and Transport Company
                    </span>
                  </h2>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    To facilitate seamless dealer to dealer car shipping,
                    coordination between the dealership and the transport
                    company must be efficient.
                  </p>
                </div>

                <div
                  className="bg-white rounded-3xl shadow-xl p-10 border-l-4"
                  style={{ borderColor: "#003366" }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {coordinationPoints.map((point, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        >
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed">
                            {point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3 Section */}
              <div className="mb-16">
                <div className="flex items-center justify-center mb-12">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-xl"
                    style={{ backgroundColor: "#ff5722" }}
                  >
                    3
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Step 3: Coordinate the{" "}
                    <span style={{ color: "#ff5722" }}>
                      Drop-Off Date & Delivery
                    </span>
                  </h2>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    Delivery time is reliant on distance, mode of
                    transportation, and urgency. Careful planning ensures
                    vehicles are on time and in pristine shape.
                  </p>
                </div>

                <div
                  className="bg-white rounded-3xl shadow-xl p-10 border-r-4"
                  style={{ borderColor: "#ff5722" }}
                >
                  <div className="space-y-8">
                    {deliveryPoints.map((point, index) => (
                      <div key={index} className="flex items-start space-x-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        >
                          {index === 0 && (
                            <Clock className="w-7 h-7 text-white" />
                          )}
                          {index === 1 && (
                            <Calendar className="w-7 h-7 text-white" />
                          )}
                          {index === 2 && (
                            <MapPin className="w-7 h-7 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-gradient-to-br from-slate-50 to-white py-8 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-20">
                <div
                  className="inline-flex items-center justify-center w-28 h-28 rounded-full mb-8 shadow-2xl animate-pulse"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  <Award className="w-14 h-14 text-white" />
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight">
                  <span style={{ color: "#ff5722" }}>
                    Benefits of Professional Car Shipping
                  </span>
                  <span style={{ color: "#003366" }}> for Dealerships</span>
                </h2>

                <div
                  className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl border-l-4"
                  style={{ borderColor: "#ff5722" }}
                >
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    Effective auto transport for car dealerships is critical to
                    supporting inventory flow, filling orders from customers,
                    and providing smooth dealer-to-dealer transfers. Here's why
                    we are the best option for dealership car shipping:
                  </p>
                </div>
              </div>

              {/* Benefits Table Section */}
              <div className="mb-20">
                {/* Desktop Table */}
                <div
                  className="hidden lg:block bg-white rounded-3xl shadow-2xl overflow-hidden border-2"
                  style={{ borderColor: "#ff5722" }}
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr style={{ backgroundColor: "#003366" }}>
                          <th className="px-8 py-6 text-left text-lg font-bold text-white uppercase tracking-wider">
                            Benefit
                          </th>
                          <th className="px-8 py-6 text-left text-lg font-bold text-white uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {benefits.map((benefit, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors duration-200"
                          >
                            <td className="px-8 py-6">
                              <div className="flex items-center space-x-4">
                                <div
                                  className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
                                  style={{
                                    backgroundColor:
                                      index % 2 === 0 ? "#ff5722" : "#003366",
                                  }}
                                >
                                  <div className="text-white">
                                    {benefit.icon}
                                  </div>
                                </div>
                                <span
                                  className="text-lg font-semibold"
                                  style={{ color: "#003366" }}
                                >
                                  {benefit.benefit}
                                </span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <p className="text-gray-700 leading-relaxed">
                                {benefit.description}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mobile Cards */}
                <div className="lg:hidden space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-6 border-l-4"
                      style={{
                        borderLeftColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                      }}
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        >
                          <div className="text-white">{benefit.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                            Benefit
                          </div>
                          <h3
                            className="text-lg font-bold"
                            style={{ color: "#003366" }}
                          >
                            {benefit.benefit}
                          </h3>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
                          Description
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Message */}
              <div
                className="mb-20 bg-gradient-to-r from-blue-50 via-white to-orange-50 rounded-2xl p-8 shadow-lg border-2"
                style={{ borderColor: "#003366" }}
              >
                <p
                  className="text-lg text-center font-medium leading-relaxed"
                  style={{ color: "#003366" }}
                >
                  Trust Rapid Auto Shipping, one of the best auto transport
                  companies for dealerships, for safe, affordable, and quick
                  auto transport solutions.
                </p>
              </div>

              {/* Cost Section */}
              <div className="mb-16">
                <div className="text-center mb-16">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Cost-Effective Auto Transport:{" "}
                    <span style={{ color: "#ff5722" }}>
                      How Much Does Dealership Car Shipping Cost?
                    </span>
                  </h2>
                  <div
                    className="w-32 h-2 mx-auto rounded-full mb-6"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    The cost of dealership car shipping varies based on several
                    key factors:
                  </p>
                </div>

                {/* Cost Factors Desktop Table */}
                <div
                  className="hidden lg:block bg-white rounded-3xl shadow-2xl overflow-hidden border-2 mb-12"
                  style={{ borderColor: "#003366" }}
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr style={{ backgroundColor: "#ff5722" }}>
                          <th className="px-8 py-6 text-left text-lg font-bold text-white uppercase tracking-wider">
                            Factor
                          </th>
                          <th className="px-8 py-6 text-left text-lg font-bold text-white uppercase tracking-wider">
                            Impact on Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {costFactors.map((factor, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors duration-200"
                          >
                            <td className="px-8 py-6">
                              <div className="flex items-center space-x-4">
                                <div
                                  className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
                                  style={{
                                    backgroundColor:
                                      index % 2 === 0 ? "#ff5722" : "#003366",
                                  }}
                                >
                                  <div className="text-white">
                                    {factor.icon}
                                  </div>
                                </div>
                                <span
                                  className="text-lg font-semibold"
                                  style={{ color: "#003366" }}
                                >
                                  {factor.factor}
                                </span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <p className="text-gray-700 leading-relaxed">
                                {factor.impact}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cost Factors Mobile Cards */}
                <div className="lg:hidden space-y-6 mb-12">
                  {costFactors.map((factor, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-6 border-r-4"
                      style={{
                        borderRightColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                      }}
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        >
                          <div className="text-white">{factor.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                            Factor
                          </div>
                          <h3
                            className="text-lg font-bold"
                            style={{ color: "#003366" }}
                          >
                            {factor.factor}
                          </h3>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
                          Impact on Cost
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {factor.impact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pro Tip */}
                <div
                  className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 mb-12"
                  style={{ borderColor: "#ff5722" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "#003366" }}
                      >
                        Pro Tip:
                      </h3>
                      <p
                        className="text-lg leading-relaxed"
                        style={{ color: "#003366" }}
                      >
                        Need to ship multiple vehicles? Bulk dealer shipping
                        qualifies for special discounts, reducing overall
                        transport costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-20">
                <div
                  className="inline-flex items-center justify-center w-32 h-32 rounded-2xl mb-8 shadow-2xl animate-pulse"
                  style={{
                    background: "linear-gradient(135deg, #ff5722, #ff7043)",
                  }}
                >
                  <Award className="w-16 h-16 text-white" />
                </div>

                <h1 className="text-4xl md:text-4xl font-bold mb-8 leading-tight">
                  <span style={{ color: "#ff5722" }}>Rapid Auto Shipping:</span>
                  <span style={{ color: "#003366" }}>
                    {" "}
                    Your Trusted Partner for Transporting Cars for Dealerships
                  </span>
                </h1>

                <div
                  className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-xl border-2"
                  style={{ borderColor: "#ff5722" }}
                >
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    Rapid Auto Shipping offers the best auto transport for
                    dealership vehicles at affordable rates. Whether you need
                    transport for car dealerships, dealer to dealer car
                    shipping, or transporting cars for dealership jobs, we have
                    the solution for you.
                  </p>
                </div>
              </div>

              {/* Main Content with Image */}
              <div className="mb-20">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                  {/* Left Side - Content */}
                  <div className="flex-1 lg:order-1">
                    <div className="mb-12">
                      <h2
                        className="text-3xl md:text-4xl font-bold mb-8"
                        style={{ color: "#003366" }}
                      >
                        Why Choose Us for{" "}
                        <span style={{ color: "#ff5722" }}>
                          Auto Transport for Car Dealerships?
                        </span>
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {whyChoosePoints.map((point, index) => (
                        <div
                          key={index}
                          className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border-l-4"
                          style={{
                            borderLeftColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        >
                          <div className="flex flex-col md:flex-row md:items-start items-center gap-6">
                            {/* Icon */}
                            <div
                              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                              style={{
                                backgroundColor:
                                  index % 2 === 0 ? "#ff5722" : "#003366",
                              }}
                            >
                              <div className="text-white">{point.icon}</div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                              <h3
                                className="text-xl font-bold mb-3"
                                style={{ color: "#003366" }}
                              >
                                {point.title}
                              </h3>
                              <p className="text-gray-700 leading-relaxed">
                                {point.description}
                              </p>
                            </div>
                          </div>

                          {/* Hover Effect */}
                          <div
                            className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                            style={{
                              background: `linear-gradient(135deg, ${
                                index % 2 === 0 ? "#ff5722" : "#003366"
                              }, transparent)`,
                            }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex-1 lg:order-2">
                    <div className="sticky top-20">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl mt-60">
                        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <Image
                            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751629041/Can_I_Ship_a_Car_oojpp3.webp"
                            alt="Trusted Dealership Partnership"
                            width={800}
                            height={800}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Image Overlay Effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

                        {/* Floating Badges */}
                        <div className="absolute top-6 right-6 bg-white/90 rounded-full px-4 py-2 shadow-lg animate-float">
                          <div className="flex items-center space-x-2">
                            <Star
                              className="w-4 h-4"
                              style={{ color: "#ff5722" }}
                            />
                            <span
                              className="font-semibold text-sm"
                              style={{ color: "#003366" }}
                            >
                              Trusted Partner
                            </span>
                          </div>
                        </div>

                        <div className="absolute bottom-6 left-6 bg-white/90 rounded-full px-4 py-2 shadow-lg animate-float-delayed">
                          <div className="flex items-center space-x-2">
                            <Award
                              className="w-4 h-4"
                              style={{ color: "#003366" }}
                            />
                            <span
                              className="font-semibold text-sm"
                              style={{ color: "#ff5722" }}
                            >
                              Best Service
                            </span>
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div
                          className="absolute -top-4 -left-4 w-8 h-8 rounded-full animate-ping"
                          style={{ backgroundColor: "#ff5722", opacity: 0.3 }}
                        ></div>
                        <div
                          className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full animate-ping"
                          style={{
                            backgroundColor: "#003366",
                            opacity: 0.4,
                            animationDelay: "1s",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div
                className="bg-white rounded-3xl shadow-2xl border-2 overflow-hidden"
                style={{ borderColor: "#ff5722" }}
              >
                {/* Top Accent Bar */}
                <div
                  className="h-2"
                  style={{
                    background: "linear-gradient(90deg, #ff5722, #003366)",
                  }}
                ></div>

                <div className="p-12 text-center">
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex space-x-3">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full animate-pulse"
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#ff5722" : "#003366",
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Get a Free,{" "}
                    <span style={{ color: "#ff5722" }}>
                      Cost-Effective Auto Transport Quote
                    </span>{" "}
                    Today!
                  </h2>

                  <div className="max-w-4xl mx-auto mb-10">
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: "#ff5722" }}
                    >
                      Let's Get Your Vehicles Rolling!
                    </h3>
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: "#003366" }}
                    >
                      Obtain a free, no-obligation quote in seconds with our
                      instant pricing service, or call our shipping
                      professionals at{" "}
                      <span className="font-bold" style={{ color: "#ff5722" }}>
                        +1 (833) 233-4447
                      </span>{" "}
                      for a customized transport plan specifically designed for
                      your dealership requirements. Call us today!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button
                      className="group relative px-10 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl overflow-hidden"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <span className="relative z-10 flex items-center">
                        <Calculator className="w-5 h-5 mr-2" />
                        Get Instant Quote
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>

                    <button
                      className="group px-10 py-4 rounded-2xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-900 hover:text-white"
                      style={{ borderColor: "#003366", color: "#003366" }}
                    >
                      <span className="flex items-center">
                        <Phone className="w-5 h-5 mr-2" />
                        Call (833) 233-4447
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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