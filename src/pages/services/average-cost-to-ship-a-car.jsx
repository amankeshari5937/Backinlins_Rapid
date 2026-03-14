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
} from "lucide-react";
import { MapPin } from "lucide-react";

import Image from "next/image";

const Home = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const primaryColor = '#ff5722';
  const secondaryColor = '#003366';

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };



 

  

 const faqData = [
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "What is the average cost to ship a car?",
    answer:
      "The average cost to ship a car in the United States typically ranges from $600 to $1,200, depending on the distance. For cross-country transport, the average cost is usually around $1,000 to $1,500.",
  },
  {
    icon: <Truck className="w-5 h-5" />,
    question: "Is it more affordable to ship a car than drive it?",
    answer:
      "In many cases, yes. Shipping saves time, avoids fuel and hotel costs, and prevents wear and tear on your vehicle. It's a convenient and cost-effective option for long-distance moves or relocations.",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    question: "How can I get an exact quote for shipping my car?",
    answer:
      "Simply use our free quote form or call us directly. Our team will provide a fast, accurate, and no-obligation estimate with no hidden fees.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    question: "Are there any hidden fees in your pricing?",
    answer:
      "No. At Rapid Auto Shipping, our pricing is 100% transparent. The quote you receive includes everything: pickup, delivery, insurance, and carrier fees.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Does the cost include insurance coverage?",
    answer:
      "Yes. Every vehicle shipped through Rapid Auto Shipping is fully insured during transport, with documentation provided before and after delivery.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    question: "Why choose Rapid Auto Shipping for car transport?",
    answer:
      "We're a top-rated auto transport company with over a decade of experience, licensed and insured carriers, 24/7 customer support, and thousands of satisfied customers nationwide.",
  },
];

  return (
    <>
      <Head>
        <title>Average Cost to Ship a Car | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Wondering how much it costs to ship a car? Rapid Auto Shipping reviewed 700+ quotes to break down average car shipping costs."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/average-cost-to-ship-a-car"
        />
        <meta
          property="og:title"
          content="Average Cost to Ship a Car | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Wondering how much it costs to ship a car? Rapid Auto Shipping reviewed 700+ quotes to break down average car shipping costs."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/average-cost-to-ship-a-car"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753959760/average-cost-to-ship-a-car_3_wfvtvs.webp"
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
                      "https://rapidautoshipping.com/services/average-cost-to-ship-a-car",
                    name: "average-cost-to-ship-a-car",
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
              serviceType: "average-cost-to-ship-a-car",
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
                "Wondering how much it costs to ship a car? Rapid Auto Shipping reviewed 700+ quotes to break down average car shipping costs.",

              url: "https://rapidautoshipping.com/services/trucking-company-near-me",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753959772/average-cost-to-ship-a-car_2_yqpxo0.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753959772/average-cost-to-ship-a-car_2_yqpxo0.webp"
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
                    The Average Cost to{" "}
                    <span className="text-[#ff5722]">Ship a Car</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    The reasonable cost of shipping a car is $1,108. Just to
                    determine the company's average cost to ship a car, rapid
                    auto shipping closely examined 700 car shipping estimates.
                    Using an open carrier to send your vehicle a few 100 miles
                    can cost about $500, or using an enclosed auto transport
                    career will cost you about $1500.
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
                        The Average Cost to Ship a Car Per Mile
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Between California and Georgia, there are more than 2,000
                      miles and more than 3,000 miles between northern
                      California and Maine.
                      <br /> <br />
                      Costs are generally determined by the mileage. Rapid Auto
                      Shipping estimates that you will have to pay:
                    </p>

                    <ul className="text-lg text-gray-700 leading-relaxed text-justify ml-4" style={{listStyle:"square"}}>
                      <li >
                        Distance under 500 miles will cost about $1.96 per mile.
                      </li>
                      <li className="pt-5">
                        For distances between 500 and 1,500 miles, the price is
                        93 cents per mile.
                      </li>
                      <li className="pt-5">
                        For more than 1500 miles, 58 cents per mile will be
                        charged.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Image */}
                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753959760/average-cost-to-ship-a-car_3_wfvtvs.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          


           <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl  font-bold mb-6">
            How to Ship a Car Cheaply Across the Country?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Even though there are some little things that you can do about the high cost of country shipping, there are many ways to cut auto transportation costs. Here, we mentioned some additional ways to reduce auto shipping costs in comparison to quotes from various companies.
          </p>
        </div>
      </div>

      {/* Cost-Saving Tips Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Use Cash Instead of Credit Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-600 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 text-white p-3 rounded-full mr-4">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">Use cash instead of a credit card:</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Paying with a credit card is way more convenient and trustworthy, but some other car shipping companies provide discounts to cash payment options in your overall cost of the shipment. When you are obtaining quotes from different companies, you should compare the prices for cash and credit side by side.
              </p>
            </div>

            {/* Terminal to Terminal Shipping */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-600 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 text-white p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">Terminal to terminal shipping:</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Well, all companies provide terminal to terminal car delivery service, but it is always more cost-effective to drive your car out of a shipping company terminal. You can avail of this service if you reside in a rural area.
              </p>
            </div>

            {/* Advance Reservations */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-600 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 text-white p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">Advance reservations:</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Advance reservation of car shipments can reduce your car shipping cost; you can save more if you ship your vehicle in late autumn or early spring. By scheduling your shipment two weeks before the date of shipping, you can avoid expedited shipping's extra charges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Shipping Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
            Types of shipping for average cost to ship a car
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
            Here at Rapid Auto Shipping, our expert will assist you in determining the best selection for your car mode of transportation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Open Air Transport */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-blue-900">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900 text-white p-4 rounded-full mr-6">
                  <Truck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">Open air transport:</h3>
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded">Most Popular</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Open air transport is very common among shippers all over the US States. Shipping a car in an open carrier is more affordable and convenient in comparison to an enclosed carrier. Open air transport carriers have an average capacity of 8-10 vehicles at once.
              </p>
            </div>

            {/* Enclosed Auto Transport */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-blue-900">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900 text-white p-4 rounded-full mr-6">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">Enclosed auto transport:</h3>
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded">Premium Service</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                The price of enclosed auto transport is 40% higher than open auto transport. This method is best for luxury vehicles, customized vehicles, or transporting a motorsport vehicle. The main objective of enclosed auto transport is to protect the vehicle from climatic problems and road debris.
              </p>
            </div>

            {/* Expedited Auto Transport */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-blue-900">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900 text-white p-4 rounded-full mr-6">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">Expedited auto transport:</h3>
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded">Rush Service</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Urgent shipping of your vehicles will definitely cost more than usual. Auto shipping companies have to adjust their schedule or make sudden changes in their plans, for which they demand more money. The driver has to drive day and night with minimal breaks.
              </p>
            </div>

            {/* Door to Door Auto Transport Service */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-blue-900">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900 text-white p-4 rounded-full mr-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">Door to door auto transport service:</h3>
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded">Convenient</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                When you opt for a door to door auto transport service, your vehicle will be picked up and dropped off at your home or any close location to your home. Many cities have restricted large vehicles from entering residential areas. If the driver faces difficulty in accessing your home due to narrow streets, speed bumps, right curves, etc., they will ask you to meet them at a nearby area that is spacious, for example, a grocery store.
              </p>
            </div>

            {/* Terminal to Terminal Auto Shipping Service */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-blue-900">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900 text-white p-4 rounded-full mr-6">
                  <Truck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">Terminal to terminal auto shipping service:</h3>
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded">Economical</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Terminal to terminal auto shipping is less common than door to door auto shipping, but it still remains an essential aspect of the industry today.
              </p>
            </div>

            {/* Heavy Equipment Transportation */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-blue-900">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900 text-white p-4 rounded-full mr-6">
                  <Wrench className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">Heavy equipment transportation:</h3>
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded">Specialized</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Special considerations are required for large vehicles like cumbersome, heavy machinery, and commercial or industrial vehicles with special equipment. Because stacking them on the back of a car or lifting them into small enclosed carriers is impossible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages of Rapid Auto Shipping */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Advantages of using Rapid Auto Shipping
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-3 h-3 bg-orange-600 rounded-full mt-2 mr-4"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We are in the top-notch companies who offer various auto transport services. For example, every driver of Rapid Auto Shipping has a clean driving record, and it is in good standing with the Department of Transportation (DOT) and the Federal Motor Carrier Safety Administration (FMCSA), which results in a damage rate among the lowest in the transportation sector.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-3 h-3 bg-orange-600 rounded-full mt-2 mr-4"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We will collect a deposit once your car is in the delivery transport. And the rest of the amount will be paid after the delivery.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-3 h-3 bg-orange-600 rounded-full mt-2 mr-4"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We offer various payment methods to many Fortune 500 companies, including ACH, WIRE, NET -30, and NET -60. Nad others.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-3 h-3 bg-orange-600 rounded-full mt-2 mr-4"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We understand the needs of our customers, such as those related to height, weight, clearance, and operability. Our professionals listen to the customer very carefully.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-3 h-3 bg-orange-600 rounded-full mt-2 mr-4"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We have a stellar reputation for offering the most affordable and professional shipping services. Just have a look at our five-star rating reviews.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cost by Distance & Tracking */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Average Cost by Distance */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 border-t-4 border-orange-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">The average cost to ship a car by distance</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Please note that long-route delivery will charge more for fuel and more. The cost of shipping the same vehicle but to different locations will show you how distance affects the price of transportation.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Use our instant quote calculator to determine your average cost to ship a car.
              </p>
            </div>

            {/* Live Tracking Facility */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 border-t-4 border-orange-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Gives a live tracking facility</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Rapid Auto Shipping gives you the facility of tracking your vehicle via phone or e-mail as well. We are always ready to answer any inquiries you have.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ship Your Vehicle?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get quotes from multiple companies and choose the best option for your needs and budget
          </p>
          <Link href="https://rapidautoshipping.com/services/average-cost-to-ship-a-car">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Get Free Quote Today
          </button>
          </Link>
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
