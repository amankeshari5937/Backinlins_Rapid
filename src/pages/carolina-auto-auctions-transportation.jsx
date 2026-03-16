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
        "We provide nationwide auction auto transport, serving both major auto auctions in America and smaller regional auction houses. Whether you're moving a vehicle within the Carolinas or across state lines, we've got it covered.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Specialized Equipment",
      description:
        "From non-running car auction transport to salvage car auction hauling, we use winch-equipped carriers and loading tools designed for inoperable vehicles. We ensure every car is handled with care, no matter its condition.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Flexible Transport Options",
      description:
        "We offer transport solutions for all types of buyers and vehicles: Open carrier transport for cost-effective shipping, Enclosed auto auction shipping for classic or exotic cars, Expedited services for time-sensitive deliveries, Motorcycle auction transport with specialized equipment",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Peace of Mind Features",
      description:
        "Fully insured and bonded carriers, Real-time tracking and updates, Thorough pre- and post-delivery inspections, Damage-free delivery guarantee, 24/7 customer support for any questions or changes",
    },
  ];

  const transportTypes = [
    {
      title: "Open Carrier Transport",
      description:
        "This is the most common and affordable option for auction car shipping. Ideal for standard vehicles, open carrier transport is reliable and widely available for fast pickups.",
      bestFor:
        "Daily drivers, dealer shipments, and short-to-mid distance moves.",
    },
    {
      title: "Enclosed Carrier Transport",
      description:
        "If you've purchased a classic car, an exotic car, or a high-value vehicle, enclosed auto auction shipping provides added protection from weather and road debris.",
      bestFor: "Luxury, collector, or specialty vehicles.",
    },
    {
      title: "Expedited Auto Shipping",
      description:
        "Need your vehicle delivered ASAP? Our expedited auction car delivery service prioritizes your shipment for the fastest turnaround.",
      bestFor:
        "Time-sensitive purchases, quick resale inventory, or urgent personal use.",
    },
    {
      title: "Non-Running Vehicle Transport",
      description:
        "Purchased a salvage car, inoperable vehicle, or non-running auction vehicle? No problem. Our carriers are equipped to safely load and transport vehicles that can't move under their own power.",
      bestFor:
        "Damaged, salvaged, or incomplete vehicles often found in auctions.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Win the Auction",
      description:
        "Once you've placed the winning bid at a Carolina auto auction, celebrate your win, but don't wait too long. Most auctions require prompt vehicle removal, sometimes within 24-48 hours.",
    },
    {
      number: "2",
      title: "Gather Essential Information",
      description:
        "To begin the auction vehicle delivery process, make sure you have the necessary paperwork, including: Lot number, Buyer ID, Gate pass or release form. This info ensures a smooth pickup and prevents delays.",
    },
    {
      number: "3",
      title: "Book a Transport Service",
      description:
        "Get a quote for auction car shipping by contacting Rapid Auto Shipping. Choose from: Open carrier auction transport (the most affordable and widely used), Enclosed auto auction shipping (best for classic, luxury, or exotic cars), Expedited auction car delivery (perfect for time-sensitive moves). Our specialists help you pick the best option based on vehicle type, distance, and urgency.",
    },
    {
      number: "4",
      title: "Pickup & Delivery",
      description:
        "Once booked, we handle the rest: Coordinate directly with the auction site, Dispatch a carrier with the right equipment (especially for inoperable vehicle auction shipping), Perform pre-load inspections, Provide real-time tracking, Deliver your vehicle safely to your door or designated location. Whether it's state to state auto auction transport or just across the Carolinas, we keep it efficient, transparent, and secure.",
    },
  ];

  const priceExamples = [
    {
      route: "Charlotte, NC to Atlanta, GA",
      type: "(Open Carrier)",
      price: "$350–$500",
    },
    {
      route: "Raleigh, NC to Chicago, IL",
      type: "(Enclosed Carrier)",
      price: "$900–$1,200",
    },
    {
      route: "South Carolina to Texas",
      type: "(Non-running Vehicle)",
      price: "$750–$1,000",
    },
  ];

  const costFactors = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Distance",
      description:
        "Longer hauls (e.g., coast-to-coast) cost more than local or regional moves.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Vehicle Type & Size",
      description: "Larger or heavier vehicles require more space and fuel.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Carrier Type",
      description:
        "Enclosed auto auction shipping typically costs 30–50% more than open transport.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Vehicle Condition",
      description:
        "Inoperable or salvaged cars need specialized loading equipment.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Delivery Urgency",
      description: "Expedited auction car delivery comes at a premium.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Carolina Auto Auctions Car Transport | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Rapid Auto Shipping is the reliable transportation company you can trust for smooth car shipping services from Carolina Auto Auctions"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/carolina-auto-auctions-transportation"
        />
        <meta
          property="og:title"
          content="Carolina Auto Auctions Car Transport Services"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping is the reliable transportation company you can trust for smooth car shipping services from Carolina Auto Auctions"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/carolina-auto-auctions-transportation"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754293452/ChatGPT_Image_Aug_4_2025_01_13_29_PM_kbuva1.png"
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
                      "https://rapidautoshipping.com/carolina-auto-auctions-transportation",
                    name: "carolina-auto-auctions-transportation",
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
                    Carolina Auto Auctions Car{" "}
                    <span className="text-[#ff5722]">Transport Services</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Carolina auto auctions can be a thrilling place to purchase
                    a vehicle, offering access to a wide range of cars, from
                    budget-friendly options to rare and high-end luxury
                    vehicles. Whether you have won the bet in an online auto
                    auction or in-person auction, you will need to move your car
                    from the auction to your garage. That’s where we come in.
                    Rapid Auto Shipping is one of the top auto auction transport
                    companies, delivering your vehicle securely, promptly, and
                    within your budget.
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
                        Your Trusted Partner for Carolina Auto Auctions Vehicle
                        Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Carolina auto auctions are part of a growing network of
                      vehicle marketplaces, offering everything from public
                      auctions to exclusive dealer events. With both online
                      platforms and in-person locations across the Carolinas and
                      the U.S., these auctions cater to all types of buyers,
                      from individual enthusiasts to large dealerships. You can
                      find classic cars, salvage vehicles, motorcycles, and even
                      exotic cars going under the hammer daily.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      But winning the auction is just the beginning. Once the
                      gavel falls, you’re responsible for getting your vehicle
                      off the lot quickly and compliantly. That’s where most
                      buyers hit a roadblock. Navigating auto auction logistics,
                      coordinating gate passes, and arranging transport,
                      especially across states, can feel overwhelming.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      At Rapid Auto Shipping, we step in to simplify the entire
                      auction car hauling process. We specialize in nationwide
                      auction auto transport and serve all major auto auctions
                      in America. Whether you bought a running vehicle, a
                      salvage car, or a non-running auction car, our team
                      handles every step from pickup to door-to-door auction
                      transport professionally and affordably.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1754293452/ChatGPT_Image_Aug_4_2025_01_13_29_PM_kbuva1.png"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[750px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
                    How Carolina Auto Auctions
                    <br />
                    <span style={{ color: "#ff5722" }}>
                      Car Transport Works
                    </span>
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                    Shipping a car from an auction might sound complex, but with
                    Rapid Auto Shipping, it's a straightforward, hassle-free
                    process. Whether you've purchased from a physical location
                    or participated in an online bidding platform, here's how
                    our auction transport services work from start to finish.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="https://rapidautoshipping.com/carolina-auto-auctions-transportation">
                      <button
                        className="px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        Get Quote for Auction Car Shipping
                      </button>
                    </Link>
                    <Link href="https://rapidautoshipping.com/calculator">
                      <button className="px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200">
                        Online Car Shipping Cost Calculator
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
                    <div key={index} className="flex space-x-4">
                      <div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        {step.number}
                      </div>
                      <div className="min-w-0">
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
                    Why Choose Rapid Auto Shipping for Carolina Auto Auctions
                    Transport Services
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    Choosing the right partner for auction car hauling is
                    critical to ensuring your vehicle arrives safely, on time,
                    and within budget. Here's why customers across the U.S.
                    trust Rapid Auto Shipping for their auto auction shipping
                    needs:
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="flex-shrink-0"
                          style={{ color: "#ff5722" }}
                        >
                          {feature.icon}
                        </div>
                        <div>
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
                <div className="mt-12 text-center">
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    Whether you're a dealer in need of dealer auto transport
                    services or an individual wondering how to ship a car from
                    an auction, our team delivers speed, security, and support
                    every step of the way.
                  </p>
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
                    Types of Transport for Carolina Auto Auctions
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    Not all vehicles or buyers have the same needs. That's why
                    we offer multiple auction transport services tailored to fit
                    your car, budget, and timeline. Here's a breakdown of the
                    most common options for car auction transport companies and
                    how to choose the right one.
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  {transportTypes.map((type, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-xl">
                      <h3
                        className="text-2xl font-semibold mb-4"
                        style={{ color: "#003366" }}
                      >
                        {type.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {type.description}
                      </p>
                      <div
                        className="border-l-4 pl-6"
                        style={{ borderColor: "#ff5722" }}
                      >
                        <p
                          className="font-semibold mb-2"
                          style={{ color: "#ff5722" }}
                        >
                          Best for:
                        </p>
                        <p className="text-gray-700">{type.bestFor}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 text-center">
                  <p
                    className="text-lg font-semibold"
                    style={{ color: "#003366" }}
                  >
                    Whether you're shipping across the state or across the
                    country, we'll match you with the best option for your needs
                    and budget.
                  </p>
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
                    What is the Shipping Cost for Carolina Auto Auctions Car
                    Transport?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    Understanding the cost to ship a car from an auction is a
                    key part of planning your purchase. At Rapid Auto Shipping,
                    we believe in transparency and flexibility when it comes to
                    pricing for auto auction transport services.
                  </p>
                </div>

                {/* Factors Affecting Cost */}
                <div className="mb-16">
                  <h3
                    className="text-3xl font-semibold mb-8 text-center"
                    style={{ color: "#003366" }}
                  >
                    Factors Affecting Cost
                  </h3>
                  <p className="text-lg text-gray-700 mb-8 text-center">
                    Several factors determine the final price of your auction
                    vehicle delivery, including:
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {costFactors.map((factor, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow"
                      >
                        <div className="flex items-start space-x-3">
                          <div
                            className="flex-shrink-0"
                            style={{ color: "#ff5722" }}
                          >
                            {factor.icon}
                          </div>
                          <div>
                            <h4
                              className="font-semibold mb-2"
                              style={{ color: "#003366" }}
                            >
                              {factor.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {factor.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example Price Ranges */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
                  <h3
                    className="text-3xl font-semibold mb-8 text-center"
                    style={{ color: "#003366" }}
                  >
                    Example Price Ranges
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {priceExamples.map((example, index) => (
                      <div
                        key={index}
                        className="text-center p-6 bg-gray-50 rounded-lg"
                      >
                        <h4
                          className="font-semibold mb-2"
                          style={{ color: "#003366" }}
                        >
                          {example.route}
                        </h4>
                        <p className="text-gray-600 mb-3">{example.type}</p>
                        <p
                          className="text-3xl font-bold"
                          style={{ color: "#ff5722" }}
                        >
                          {example.price}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-center mt-8 text-gray-600 italic">
                    These are ballpark estimates. The best way to know your
                    actual cost? Get a quick, no-obligation quote.
                  </p>
                </div>

                {/* Why Get a Quote */}
                <div
                  className="bg-blue-50 p-8 rounded-xl border-l-4"
                  style={{ borderColor: "#003366" }}
                >
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Why Get a Quote?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Every auction shipment has a unique location, vehicle type,
                    and delivery window, all of which impact cost. Use our
                    online car shipping cost calculator tool or call us directly
                    to get a quote for auction car shipping tailored to your
                    exact situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="https://rapidautoshipping.com/calculator">
                      <button
                        className="px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <Calculator className="w-5 h-5" />
                        <span>Online Cost Calculator</span>
                      </button>
                    </Link>
                    <Link href="tel:+18332334447">
                      <button
                        className="px-6 py-3 border-2 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
                        style={{ borderColor: "#003366", color: "#003366" }}
                      >
                        <Phone className="w-5 h-5" />
                        <span>Call for Direct Quote</span>
                      </button>
                    </Link>
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
                      Whether you're a dealer moving multiple units or a private
                      buyer figuring out how to ship a car from an auction,
                      Rapid Auto Shipping is here to help. Our team makes
                      auction car transport simple, secure, and stress-free.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Need help getting started?</b> Request our free auction
                      transport checklist.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Have questions?</b> Our support team is ready 24/7.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Ready to roll?</b> Get a quote for auction car shipping today,
                      and let us handle the rest.
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
