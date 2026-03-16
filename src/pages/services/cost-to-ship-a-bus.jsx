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

  const factors = useMemo(() => [
    {
      factor: "Distance",
      reason:
        "The distance the bus needs to be shipped will significantly impact the cost. The costs of shipping a bus tend to increase as distance increases.",
    },
    {
      factor: "Size and Weight",
      reason:
        "The size and weight of the bus will also affect the cost. Larger and heavier buses will require specialized equipment and may incur higher fees.",
    },
    {
      factor: "Specialized Equipment",
      reason:
        "Bus transport often requires specialized equipment, such as flatbed trailers, low loaders, or shipping containers. The need for these specialized tools can increase the shipping cost.",
    },
    {
      factor: "Fuel Costs and Market Rates",
      reason: "Changes in fuel and market rates can raise shipping costs.",
    },
    {
      factor: "Additional Services",
      reason:
        "Additional services, such as door-to-door delivery, insurance coverage, or expedited shipping, can increase the overall cost. It is essential to consider these services based on your specific requirements.",
    },
  ], []);

  const costTips = useMemo(() => [
    {
      number: "1",
      title: "Choose the Open Transport Method",
      description:
        "The open transport method is a more affordable option than others. If the bus doesn't require protection from weather conditions, you can save considerably by choosing open transport.",
      icon: Truck,
      highlight: "Most Affordable",
    },
    {
      number: "2",
      title: "Be Flexible with Pickup and Delivery Locations",
      description:
        "If you can be flexible with your bus pickup and delivery locations, choose terminal-to-terminal shipping instead of door-to-door. This will require you to drop off and pick up the bus at the nearest terminal.",
      icon: MapPin,
      highlight: "Terminal Service",
    },
    {
      number: "3",
      title: "Early Booking",
      description:
        "Booking in advance gives us enough time to provide you with the most suitable shipping options at a reasonable price. Last-minute booking often comes with higher prices, so consider booking a few weeks early.",
      icon: Calendar,
      highlight: "Plan Ahead",
    },
    {
      number: "4",
      title: "Off-season Shipping",
      description:
        "Take advantage of off-peak season discounts. During the off-season, shipping rates are typically lower due to reduced demand, allowing you to save significantly on transportation costs.",
      icon: Snowflake,
      highlight: "Seasonal Savings",
    },
    {
      number: "5",
      title: "Optimize Weight",
      description:
        "Large size and heavier weight significantly impact the cost of bus shipping service. Remove unnecessary items to reduce some weight from the bus before shipping.",
      icon: Scale,
      highlight: "Weight Reduction",
    },
  ], []);

  const benefitss = useMemo(() => [
    {
      icon: <DollarSign className="text-white" />,
      title: "Cost-Effective",
      description:
        "Bus hauling services are often more cost-effective than other transportation options. Instead of purchasing and maintaining a fleet of buses, companies can hire bus shipping services as needed. This eliminates the need for long-term investments and reduces operational costs.",
    },
    {
      icon: <Shield className="text-white" />,
      title: "Flexibility",
      description:
        "Bus hauling services provide scheduling and route planning flexibility. Whether it's a one-time event, a regular transportation service, or a specialized route, bus hauling services can accommodate various needs. They can be tailored to suit specific requirements, ensuring efficient transportation solutions.",
    },
    {
      icon: <Clock className="text-white" />,
      title: "Convenience",
      description:
        "By outsourcing bus hauling, individuals and businesses can focus on their core activities without worrying about transportation logistics. The service provider takes care of the maintenance, repairs, insurance, and other administrative tasks, saving time and effort.",
    },
    {
      icon: <Users className="text-white" />,
      title: "Expertise and Experience",
      description:
        "We have extensive experience handling your transportation needs. We employ skilled drivers who are trained in safety protocols and have in-depth knowledge of driving large vehicles. Our expertise ensures reliable and professional transportation services.",
    },
    {
      icon: <Truck className="text-white" />,
      title: "Safety and Reliability",
      description:
        "Bus hauling services prioritize safety, adhering to strict regulations and standards. They maintain their vehicles in optimal condition, regularly inspecting and servicing them. Additionally, professional drivers are trained to prioritize passenger safety, ensuring a secure and reliable transportation experience.",
    },
    {
      icon: <Star className="text-white" />,
      title: "Environmental Sustainability",
      description:
        "Utilizing bus services can contribute to ecological sustainability. Consolidating transportation needs into a single vehicle reduces the number of individual cars on the road, resulting in lower carbon emissions and reduced traffic congestion.",
    },
   
  ], []);

  const faqData = useMemo(() => [
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "Are there any additional fees besides the shipping cost?",
      answer:
        "Yes, there may be extra costs. These can include the cost of insurance, permits, tolls, and any changes or preparations to be made to the bus before it can be shipped.",
    },
    {
      icon: <Calculator className="w-5 h-5" />,
      question: "Should I get multiple quotes from shipping companies?",
      answer:
        "It's totally up to you! Rapid auto shipping provides a free, detailed quote without any hidden charges. Our bus shipping rates are the most reasonable. Feel free to fill out our online form or contact our representative for a custom quote.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "Are there any legal requirements for shipping a bus?",
      answer:
        "Yes, there are laws about moving a bus, like making sure you have the right licenses and don't exceed the size and weight limits. Our representative will provide you with all the information and legal requirements needed to ship your bus.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Can I track the progress of my bus shipment?",
      answer:
        "Track your bus shipment with Rapid Auto Shipping. The driver will provide you with a tracking number or reference code. Our online tracking system or customer assistance can tell you where and how your bus is.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "How long till my bus picks up?",
      answer:
        "Your bus should be picked up within 12–72 hours following ordering. Please inform us of any urgent needs. We'll gladly help!",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      question: "How long will it be until my bus arrives?",
      answer:
        "The Department of Transportation regulates overland shipping. The average day for a commercial driver is 500 miles. Open container shipping will take about 7–10 days to move something across the country.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      question: "How does payment operate?",
      answer:
        "When you book Rapid Auto Shipping, you must pay a deposit that will be taken out when the Network Carrier picks up the car. If there is a balance when the item is delivered, it should be paid in full with a cashier's check, a certified check, or cash. Before the car is delivered, you can set up other ways to pay.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Have you gotten insurance?",
      answer:
        "Rapid Auto Shipping has a license and is backed by a bond. Also, every carrier and transport worker who helps you ship your car has a liability and cargo insurance policy to protect it while in transit.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      question: "What happens if my bus gets damaged?",
      answer:
        "We take every measure to protect your bus during shipment, but damage can occur, especially if the bus is incorrectly prepped. Despite mechanical issues, Rapid Auto Shipping and its carriers provide thorough guidelines to reduce these dangers. Every carrier is licensed and insured in case of vehicle damage.",
    },
  ], []);

  const features = useMemo(() => [
    {
      title: "Specialized Expertise",
      description:
        "Highly-trained specialists in minibus shipping and professionals in oversized bus transport",
      icon: "🚌",
    },
    {
      title: "Comprehensive Service",
      description:
        "From large double-decker tourist buses to new minibuses across the country",
      icon: "🎯",
    },
    {
      title: "Complete Logistics",
      description:
        "Proper trailer assignment, efficient route planning, paperwork completion, and cross-border coordination",
      icon: "📋",
    },
    {
      title: "Professional Care",
      description:
        "Dedicated crew handling your equipment with best care through any terrain or access restrictions",
      icon: "🛡️",
    },
  ], []);

  const benefits = useMemo(() => [
    "Save on mileage",
    "Reduce wear and tear",
    "Expert handling",
    "Nationwide coverage",
    "Cross-border service",
    "24/7 support",
  ], []);

  const busTypes = useMemo(() => [
    { name: "Highway Bus Transport", category: "Long Distance" },
    { name: "Electric Bus Transport", category: "Eco-Friendly" },
    { name: "Double Decker Bus Transport", category: "Tourism" },
    { name: "Articulated Bus Transport", category: "High Capacity" },
    { name: "Passenger Bus Transport", category: "Public Transit" },
    { name: "Minibus Transport", category: "Small Group" },
    { name: "Charter Bus Transport", category: "Private Hire" },
    { name: "Shuttle Bus Transport", category: "Airport/Hotel" },
    { name: "Prison Bus Transport", category: "Security" },
    { name: "School Bus Transport", category: "Education" },
    { name: "Party Bus Transport", category: "Entertainment" },
    { name: "Trolley Illustration Transport", category: "Vintage" },
    { name: "Coach Bus Transport", category: "Luxury Travel" },
    { name: "Church Bus Transport", category: "Religious" },
    { name: "RV Bus Transport", category: "Recreational" },
    { name: "Limo Bus Transport", category: "VIP" },
    { name: "Motor Coach Bus Transport", category: "Long Distance" },
    { name: "Transit Bus Transport", category: "City Transit" },
  ], []);

  const categories = useMemo(() => [...new Set(busTypes.map((bus) => bus.category))], [busTypes]);

  return (
    <>
      <Head>
        <title>Bus Shipping | Bus Transport Company </title>
        <meta
          name="description"
          content="Shipping a bus in the USA with Rapid Auto Shipping. Best bus hauling service for all sizes. Call us (833) 233-4447"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href=" https://rapidautoshipping.com/services/cost-to-ship-a-bus "
        />
        <meta
          property="og:title"
          content="Bus Shipping | Bus Transport Company"
        />
        <meta
          property="og:description"
          content="Shipping a bus in the USA with Rapid Auto Shipping. Best bus hauling service for all sizes. Call us (833) 233-4447"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/car-shipping-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747984450/Car-Shipping-Calculator_xhq3te.webp"
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
                    name: "Our Nationwide Auto Transport Services",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/car-shipping-calculator",
                    name: "Car Shipping Calculator",
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
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Cost to Ship a Bus",
              description:
                "Learn how much it costs to ship a bus in the USA with Rapid Auto Shipping. We offer affordable, insured, and professional bus transportation services across the country.",
              url: "https://rapidautoshipping.com/services/cost-to-ship-a-bus",
              provider: {
                "@type": "Organization",
                name: "Rapid Auto Shipping",
                url: "https://rapidautoshipping.com/",
                logo: "https://rapidautoshipping.com/path/to/logo.jpg",
                telephone: "+1 (833) 233-4447",
                email: "info@rapidautoshipping.com",
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceType: "Bus Shipping Service",
              offers: {
                "@type": "Offer",
                url: "https://rapidautoshipping.com/services/cost-to-ship-a-bus",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "1500",
                  priceCurrency: "USD",
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Are there any additional fees besides the shipping cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, there may be extra costs. These can include the cost of insurance, permits, tolls, and any changes or preparations to be made to the bus before it can be shipped.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Should I get multiple quotes from shipping companies?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It's totally up to you! Rapid Auto Shipping provides a free, detailed quote without any hidden charges. Our bus shipping rates are the most reasonable. Feel free to fill out our online form or contact our representative for a custom quote.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there any legal requirements for shipping a bus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, there are laws about moving a bus, like making sure you have the right licenses and don't exceed the size and weight limits. Our representative will provide you with all the information and legal requirements needed to ship your bus.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I track the progress of my bus shipment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Track your bus shipment with Rapid Auto Shipping. The driver will provide you with a tracking number or reference code. Our online tracking system or customer assistance can tell you where and how your bus is.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long till my bus picks up?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your bus should be picked up within 12–72 hours following ordering. Please inform us of any urgent needs. We'll gladly help!",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long will it be until my bus arrives?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Department of Transportation regulates overland shipping. The average day for a commercial driver is 500 miles. Open container shipping will take about 7–10 days to move something across the country.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does payment operate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "When you book Rapid Auto Shipping, you must pay a deposit that will be taken out when the Network Carrier picks up the car. If there is a balance when the item is delivered, it should be paid in full with a cashier's check, a certified check, or cash. Before the car is delivered, you can set up other ways to pay.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Have you gotten insurance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Rapid Auto Shipping has a license and is backed by a bond. Also, every carrier and transport worker who helps you ship your car has a liability and cargo insurance policy to protect it while in transit.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What happens if my bus gets damaged?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We take every measure to protect your bus during shipment, but damage can occur, especially if the bus is incorrectly prepped. Despite mechanical issues, Rapid Auto Shipping and its carriers provide thorough guidelines to reduce these dangers. Every carrier is licensed and insured in case of vehicle damage.",
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
          {/* Hero Section - Mobile: solid bg, no image; Desktop: with image */}
          <section className="relative py-8  flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on mobile, visible on desktop */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1750840759/148_ssew5s.png"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#001933]/30 via-[#001933]/20 to-[#001933]/40"></div>
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
                <div className="space-y-4 max-w-3xl rounded-lg p-3 sm:p-4 md:bg-[#001933]/20">
                  {/* H1 - Black on mobile, White on desktop */}
                  <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    Bus Shipping <span className="text-[#ff5722]">Cost</span>
                  </h1>

                  {/* Paragraph - Hidden on mobile, visible on desktop only */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    If you need assistance shipping a bus, you've found the
                    right resource. Rapid Auto Shipping is a top-rated brand for
                    transporting buses, offering exceptional services in the
                    USA. We possess the necessary expertise in bus shipping, as
                    we are experienced in the technical procedures and tools
                    required. The cost to ship a bus may vary based on the
                    transportation distance, the size of the bus, and the chosen
                    mode of transportation.
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
                      <h1 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        What Is Bus Shipping?
                      </h1>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Bus shipping is basically a service that helps
                      individuals, businesses, or anyone who wants to transport
                      their bus from one location to another. Shipping a bus is
                      more cost-effective than driving it from one place to
                      another. This is particularly true when transporting a bus
                      across state lines. Some vehicles need to be operational
                      and transported at great distances for upkeep, repairs,
                      and other services.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Shipping a bus is a responsible task, and Rapid Auto
                      Shipping professionals have the expertise to do it
                      efficiently. Mostly specialized flatbed or lowboy carriers
                      are the go-to choices for these behemoths of the road.
                      Here's a breakdown of costs with this top-tier auto
                      shipping company: For a journey of 500 miles, you're
                      likely looking forward to a figure of around $2,000. Move
                      up to 1,000 miles, and the price takes a hike to
                      approximately $3,500. Stretch the distance to 1,500 miles,
                      and Rapid Auto Shipping typically quotes somewhere from
                      $4200 to $5,000 to shipping a bus. Now, for those
                      ambitious trips going beyond 1,500 miles, the starting
                      rate varies around $5,500 but can vary based on the
                      routes. With Rapid Auto Shipping at the service, you can
                      rest easy knowing you're getting value and expertise every
                      mile of the way.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_600,q_auto,f_auto/v1750841923/149_wmywus.png"
                        alt="Bus Shipping Service - Professional Transport"
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

          <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-4xl font-bold text-[#003366] mb-6">
                  Factors Determining The Cost Of Shipping A Bus?
                </h2>
                <div className="w-24 h-1 bg-[#ff5722] mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  The cost to ship a bus can vary depending on several factors,
                  including the distance, size of the bus, mode of
                  transportation, and additional services required. Shipping a
                  bus requires specialized handling and transportation methods,
                  which can influence the overall cost. Here are some key
                  considerations when determining the cost of bus shipping:
                </p>
              </div>

              {/* Modern Table Card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Table Header */}
                <div className="bg-gradient-to-r from-[#003366] to-[#003366]/90 px-8 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="md:col-span-2">
                      <h4 className="text-xl font-bold text-white">Factors</h4>
                    </div>
                    <div className="md:col-span-3">
                      <h4 className="text-xl font-bold text-white">Reason</h4>
                    </div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-100">
                  {factors.map((item, index) => (
                    <div
                      key={index}
                      className="px-8 py-6 hover:bg-gradient-to-r hover:from-[#ff5722]/5 hover:to-transparent transition-all duration-300 group"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                        {/* Factor Column */}
                        <div className="md:col-span-2">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#ff5722] to-[#ff5722]/80 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                              {index + 1}
                            </div>
                            <div>
                              <h5 className="text-lg font-bold text-[#003366] group-hover:text-[#ff5722] transition-colors duration-300">
                                {item.factor}
                              </h5>
                            </div>
                          </div>
                        </div>

                        {/* Reason Column */}
                        <div className="md:col-span-3">
                          <p className="text-gray-700 leading-relaxed text-base">
                            {item.reason}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-6 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#ff5722] rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600 font-medium">
                        Professional Assessment Available
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#003366] rounded-full"></div>
                        <span>Transparent Pricing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                        <span>No Hidden Fees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#ff5722]">
                  <h4 className="text-xl font-bold text-[#003366] mb-3">
                    Cost Optimization Tips
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Plan ahead and compare quotes from multiple carriers to find
                    the best rates. Flexible scheduling can also help reduce
                    costs.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#003366]">
                  <h4 className="text-xl font-bold text-[#ff5722] mb-3">
                    Expert Consultation
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our specialists can help you understand which factors most
                    impact your specific shipping needs and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <div className="inline-block mb-6">
                  <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight mb-4">
                    Why Rapid Auto Shipping Is The Best Bus Transportation
                    Company In The United States?
                  </h2>
                  <div className="w-32 h-1 bg-[#ff5722] mx-auto rounded-full"></div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ff5722] to-[#ff5722]/80 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            R
                          </span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-[#003366] mb-4">
                            About Rapid Auto Shipping
                          </h2>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            Rapid Auto Shipping is a vehicle shipping company
                            that is dedicated to assisting you with shipping
                            buses. We aim to help you save on mileage and reduce
                            the wear and tear of long-haul bus travel.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#003366] to-[#003366]/90 rounded-3xl p-8 text-white shadow-xl">
                    <h3 className="text-2xl font-bold mb-6">
                      Our Comprehensive Services
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-6">
                      Our logistics team is ready to transport your bus, whether
                      it's a large double-decker tourist bus or a new minibus
                      that needs to be shipped across the country.
                    </p>
                    <p className="text-white/90 leading-relaxed">
                      We have a team of highly-trained specialists in minibus
                      shipping and professionals in oversized bus transport.
                      With their expertise, we are ready to assist in safely bus
                      shipping to its next destination.
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-[#ff5722]">
                    <h3 className="text-2xl font-bold text-[#003366] mb-6">
                      Professional Logistics Team
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our logistics team is reliable and prepared to handle
                      tasks such as assigning the proper trailer, planning the
                      most efficient route, completing all required paperwork,
                      and coordinating cross-border bus haulage.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our professional crew members are dedicated to handling
                      your equipment with the best care and attention it
                      deserves, whether you have to go through congested city
                      streets or move a bus to regions with restricted access.
                    </p>
                  </div>
                </div>

                {/* Right Content */}
                <div className="space-y-8">
                  {/* Features Grid */}
                  <div className="grid gap-6">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                      >
                        <div className="flex items-start space-x-4">
                          <div>
                            <h4 className="text-xl font-bold text-[#003366] mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Benefits Section */}
                  <div className="bg-gradient-to-br from-[#ff5722]/5 to-[#ff5722]/10 rounded-3xl p-8 border border-[#ff5722]/20">
                    <h3 className="text-2xl font-bold text-[#003366] mb-6">
                      Why Choose Us?
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                          <span className="text-gray-700 font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Section */}

              {/* Stats Section */}
            </div>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header Section */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-4xl font-bold text-[#003366] mb-6">
                  Types Of Buses Transport By Us
                </h2>
                <div className="w-32 h-1 bg-[#ff5722] mx-auto mb-8 rounded-full"></div>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Buses are available in various shapes and sizes. We have the
                    expertise and capability to assist you with shipping any bus
                    you need. Whether you need to ship a school bus or a
                    passenger bus, we are here to help you.
                  </p>
                </div>
              </div>

              {/* Main Table */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Table Header */}
                <div className="bg-gradient-to-r from-[#003366] to-[#003366]/90 px-8 py-6">
                  <div className="grid  gap-8">
                    <div className="text-center">
                      <span className="text-xl font-bold text-white">
                        Bus Types
                      </span>
                    </div>
                  </div>
                </div>

                {/* Table Body - 2 Column Layout */}
                <div className="divide-y divide-gray-100">
                  {Array.from(
                    { length: Math.ceil(busTypes.length / 2) },
                    (_, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="px-8 py-5 hover:bg-gradient-to-r hover:from-[#ff5722]/3 hover:to-transparent transition-all duration-300 group">
                        <div className="grid grid-cols-2 gap-8">
                          {/* Left Column */}
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#ff5722] to-[#ff5722]/80 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                              {rowIndex * 2 + 1}
                            </div>
                            <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#ff5722] transition-colors duration-300">
                              {busTypes[rowIndex * 2]?.name}
                            </h3>
                          </div>

                          {/* Right Column */}
                          <div className="flex items-center space-x-4">
                            {busTypes[rowIndex * 2 + 1] && (
                              <>
                                <div className="w-8 h-8 bg-gradient-to-br from-[#ff5722] to-[#ff5722]/80 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                                  {rowIndex * 2 + 2}
                                </div>
                                <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#ff5722] transition-colors duration-300">
                                  {busTypes[rowIndex * 2 + 1]?.name}
                                </h3>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Table Footer */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-6 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#ff5722] rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600 font-medium">
                        All bus types available for transport
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                        <span>Expert Handling</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#003366] rounded-full"></div>
                        <span>Safe Transport</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header Section */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
                  Benefits of Bus Hauling Services ?
                </h1>
                <div className="w-32 h-1 bg-[#ff5722] mx-auto mb-8 rounded-full"></div>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-gray-700 leading-relaxed">
                   Bus hauling services offer several benefits to individuals and businesses. Here are some key advantages:
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefitss.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 group hover:-translate-y-2"
                  >
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-[#003366] to-[#003366]/90 px-8 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#ff5722] to-[#ff5722]/80 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                          {benefit.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#ff5722]/90 transition-colors duration-300">
                          {benefit.title}
                        </h4>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8">
                      <p className="text-gray-700 leading-relaxed text-base group-hover:text-gray-800 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Card Footer Accent */}
                    <div className="h-1 bg-gradient-to-r from-[#ff5722] to-[#ff5722]/60 group-hover:from-[#003366] group-hover:to-[#003366]/60 transition-all duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA Section */}
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header Section */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
                  How To Reduce The Cost Of Shipping A Bus?
                </h1>
                <div className="w-32 h-1 bg-[#ff5722] mx-auto mb-8 rounded-full"></div>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Shipping a bus sometimes turns out to be quite an
                    investment. The main reason for the higher price is its
                    large size and weight, but there are some tricks that help
                    you cut down the cost while still getting a reliable
                    service.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Here are some possible ways to cut down on shipping costs:
                  </p>
                </div>
              </div>

              {/* Cost Reduction Tips */}
              <div className="space-y-8">
                {costTips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 group hover:-translate-y-1"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Left Side - Number and Icon */}
                      <div className="lg:w-1/4 bg-gradient-to-br from-[#003366] to-[#003366]/90 p-8 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#ff5722] to-[#ff5722]/80 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {tip.number}
                        </div>
                        <div className="text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                          <tip.icon size={32} />
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ff5722]/20 text-white border border-[#ff5722]/30">
                          {tip.highlight}
                        </span>
                      </div>

                      {/* Right Side - Content */}
                      <div className="lg:w-3/4 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#ff5722] transition-colors duration-300">
                          {tip.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                          {tip.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-[#ff5722] via-[#ff5722]/60 to-transparent group-hover:from-[#003366] group-hover:via-[#003366]/60 transition-all duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Bottom Summary Card */}
              <div className="mt-16 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-[#003366] to-[#003366]/90 px-8 py-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-[#ff5722] rounded-full animate-pulse"></div>
                      <h3 className="text-2xl font-bold text-white">
                        Smart Shipping Saves Money
                      </h3>
                      <div className="w-3 h-3 bg-[#ff5722] rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-white/90 text-lg mb-6">
                      Combine these strategies to maximize your savings on bus
                      shipping costs
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="text-white mb-2 flex justify-center">
                          <Lightbulb size={32} />
                        </div>
                        <div className="text-white font-semibold">
                          Plan Early
                        </div>
                        <div className="text-white/80 text-sm">
                          Book weeks in advance
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="text-white mb-2 flex justify-center">
                          <Target size={32} />
                        </div>
                        <div className="text-white font-semibold">
                          Be Flexible
                        </div>
                        <div className="text-white/80 text-sm">
                          Choose terminal service
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="text-white mb-2 flex justify-center">
                          <BarChart3 size={32} />
                        </div>
                        <div className="text-white font-semibold">
                          Optimize Load
                        </div>
                        <div className="text-white/80 text-sm">
                          Reduce unnecessary weight
                        </div>
                      </div>
                    </div>
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
                        Bus Transport Company: Safety And Reliability
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Ensuring the safety of our clients and customers when
                      entrusting their buses to Rapid Auto Shipping is of utmost
                      importance to us. We want to ensure you have peace of
                      mind, knowing that a highly reliable and trustworthy
                      company handles your bus transportation.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      You can trust that you will feel safe when embarking on
                      this journey with Rapid Auto Shipping. We have developed a
                      strong confidence in our bus hauling services due to our
                      extensive years of experience. Rapid Auto Shipping boasts
                      a team of highly skilled experts who have been carefully
                      selected for their exceptional abilities in their
                      respective roles. We possess the requisite knowledge to
                      ensure a smooth and error-free Bus Transporting process
                      from start to finish. At Rapid Auto Shipping, we are
                      committed to providing exceptional bus-hauling services.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_600,q_auto,f_auto/v1750852363/1125090843_coaakd.webp"
                          alt="Bus Shipping Service - Professional Transport Solutions"
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