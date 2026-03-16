"use client";

import React, { useState } from "react";

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
  Phone,
  Mail,
  ArrowRight,
  Calendar,
  Gift,
  XCircle,
  MapPin,
} from "lucide-react";

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

  const [selectedOption, setSelectedOption] = useState("open");
  const discountGroups = [
    { name: "Military Members", icon: Shield },
    { name: "Police", icon: Shield },
    { name: "EMS", icon: Shield },
    { name: "First Responders", icon: Shield },
    { name: "Snowbirds", icon: Users },
    { name: "College Students", icon: Users },
  ];

  const benefits = [
    {
      title: "Cost-Effectiveness",
      icon: DollarSign,
      description:
        "Shipping many autos in a single cargo is often less expensive than shipping each car separately. As the cost is split across many trucks, loading automobiles into a single carrier helps to lower total transportation costs.",
      color: "from-[#ff5722] to-[#ff6b3d]",
    },
    {
      title: "Time-saving",
      icon: Clock,
      description:
        "Compared to single shipments, multi-car shipping provides efficient handling and loading of automobiles into a carrier. The operation may be streamlined by simultaneously picking up and delivering all the cars rather than scheduling separate pickups and deliveries for each vehicle.",
      color: "from-[#003366] to-[#004080]",
    },
    {
      title: "Convenience",
      icon: Truck,
      description:
        "Multi car shipping is advantageous when moving or buying cars from another area. There is no need to schedule separate transportation services or drive each vehicle separately. The bother and logistical challenges may be reduced by fitting all the automobiles into one shipment.",
      color: "from-[#ff5722] to-[#ff6b3d]",
    },
    {
      title: "Safety and security",
      icon: Shield,
      description:
        "Rapid Auto Shipping prioritize the safety and security of vehicles while they are being transported. When multiple cars are shipped together, they are typically loaded onto enclosed carriers or secured using specialized equipment. This ensures that they are protected from road debris, adverse weather conditions, and any potential damage during transportation.",
      color: "from-[#003366] to-[#004080]",
    },
  ];

  const pricingData = [
    {
      distance: "100 - 499 Miles",
      time: "2 - 4 Days",
      openCost: "$580",
      enclosedCost: "$885",
    },
    {
      distance: "500 - 1499 Miles",
      time: "3 - 6 Days",
      openCost: "$989",
      enclosedCost: "$1380",
    },
    {
      distance: "1500 - 2499 Miles",
      time: "5 - 8 Days",
      openCost: "$1310",
      enclosedCost: "$1685",
    },
    {
      distance: "2500 Miles And Above",
      time: "7 - 9 Days",
      openCost: "$1570",
      enclosedCost: "$2205",
    },
  ];

  const prosConsData = [
    {
      pros: [
        { text: "Fast delivery", icon: Clock },
        { text: "More Affordable (Bulk Discounts)", icon: DollarSign },
        { text: "More Save and Secure", icon: Shield },
        { text: "Less Wear and Tear", icon: CheckCircle },
        { text: "Vehicle Arrived On Same time", icon: Clock },
        { text: "Insured", icon: Shield },
        { text: "Less Hassle And Trackable", icon: CheckCircle },
      ],
      cons: [
        { text: "Limited Customization", icon: XCircle },
        { text: "Weather Issues", icon: AlertTriangle },
        { text: "Difficult Rescheduling", icon: XCircle },
        { text: "Limited Carrier Options", icon: XCircle },
      ],
    },
  ];

  const faqData = [
    {
      icon: <Truck className="w-5 h-5" />,
      question: "Do you offer shipping for multiple cars at once?",
      answer:
        "Yes! We specialize in multi-car transport for individuals, dealers, auctions, fleet managers, and businesses—offering discounted rates and efficient service.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "How much does multi-car shipping cost?",
      answer:
        "Multi-car shipping is more cost-effective per vehicle. Pricing depends on the number of cars, type of transport (open/enclosed), distance, and pickup/drop-off locations. Contact us for a custom quote.",
    },
    {
      icon: <Car className="w-5 h-5" />,
      question: "Can I ship different types of vehicles together?",
      answer:
        "Absolutely. We can ship a mix of sedans, SUVs, trucks, or even motorcycles in the same shipment—just provide the details when booking.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is enclosed transport available for multiple vehicles?",
      answer:
        "Yes, we offer both open and enclosed transport for multi-car loads. Enclosed is ideal for high-value or classic cars needing extra protection.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Is multi-car transport available nationwide?",
      answer:
        "Yes, we provide door-to-door multi-car shipping services across all 50 states. We can also coordinate pickups from multiple locations if needed.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      question: "How do I schedule multi-car transport?",
      answer:
        "Just call us or request a quote online. Our logistics team will handle the entire process, including scheduling, paperwork, and carrier coordination.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Top Rated Multi Car Transport Services | Auto Shipping Services
        </title>
        <meta
          name="description"
          content="Rapid Auto Shipping provides Multi Car transport services at an affordable price with our expertise vehicles safely to their destination."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/multi-car-shipping"
        />
        <meta
          property="og:title"
          content="Top Rated Multi Car Transport Services | Auto Shipping Services"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping provides Multi Car transport services at an affordable price with our expertise vehicles safely to their destination."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/multi-car-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752572837/Multi_Car_shipping_2_eclenn.webp"
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
                      "https://rapidautoshipping.com/services/multi-car-shipping",
                    name: "multi-car-shipping",
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
              serviceType: "Top Rated Multi Car Transport Services",
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
                "Rapid Auto Shipping provides Multi Car transport services at an affordable price with our expertise vehicles safely to their destination.",
              url: "https://rapidautoshipping.com/services/multi-car-shipping",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752572837/Multi_Car_shipping_2_eclenn.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752572837/Multi_Car_shipping_2_eclenn.webp"
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
                    Multi Car <span className="text-[#ff5722]">Transport</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Shipping two or more automobiles is known as multi car
                    transport. When shipping multiple cars, relying on the
                    expertise of an experienced auto transport company such as
                    Rapid Auto Shipping is crucial. We specialize in arranging
                    the shipment of various vehicles and providing comprehensive
                    car transport services to ensure your cars' safe and timely
                    delivery.
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
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        Types of Vehicles for Multi Car Transport
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      {" "}
                      We offer a variety of vehicles for multi-car shipping.
                    </p>

                    <ul
                      style={{ listStyle: "square", paddingLeft: "20px" }}
                      className="text-lg text-gray-700 leading-relaxed text-justify"
                    >
                      <li>Muscle cars and sports cars</li>
                      <li>Luxury, high-value, and exotic vehicles</li>
                      <li>Vintage and classic automobiles</li>
                      <li>Vehicles for military personnel</li>
                      <li>Pickups, SUVs, and trucks</li>
                      <li>All-Terrain vehicles</li>
                      <li>Motorcycles, sports bikes, and Harley Davidson’s</li>
                      <li>High-performance cars and race cars</li>
                    </ul>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      transported in groups. Larger vehicles such as RVs, vans,
                      boats, and construction equipment can also be transported.
                      However, the availability of equipment and the size of the
                      auto transport company often play a significant role in
                      determining the outcome.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752572843/multi_Car_shipping_1_eoo4bo.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#004080] to-[#003366] text-white">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative max-w-7xl mx-auto px-6 pt-5">
                <div className="max-w-4xl">
                  <div className="inline-flex items-center space-x-2 bg-[#ff5722]/20 px-4 py-2 rounded-full mb-6">
                    <Star className="h-4 w-4 text-[#ff5722]" />
                    <span className="text-sm font-medium">
                      Trusted Auto Transport Leader
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-4xl font-bold mb-6 leading-tight">
                    Rapid Auto Shipping Offers a Wide Range of
                    <span className="text-[#ff5722]">
                      {" "}
                      Multi Car Transport Services
                    </span>{" "}
                    and Capabilities
                  </h2>
                  <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                    As a business, your top priorities are saving money and
                    time. Rapid Auto Shipping, an experienced shipping company,
                    can assist you in achieving both objectives. We ensure every
                    detail is handled and meets your expectations for shipping
                    multiple cars.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Link href="https://rapidautoshipping.com/calculator">
                      <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2">
                        <span>Get Free Quote</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-6">
                    How We Can Serve You
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Feel free to contact us for a complimentary quote or any
                    inquiries. Please inform us of how we can assist you in
                    initiating the process of shipping multiple cars. Here are a
                    few examples of how we can serve you!
                  </p>
                </div>
              </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Auto Dealerships */}
                  <div className="group">
                    <div className="bg-gradient-to-r from-[#ff5722] to-[#ff6b3d] p-8 rounded-t-2xl">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Car className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          Auto Dealerships
                        </h3>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-b-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Car dealerships and rental agencies transport many cars
                        yearly, primarily through multiple car transport. The
                        constant turnover in the auto sales industry
                        necessitates ongoing inventory replenishment. To achieve
                        this, dealers and rental companies often rely on
                        multiple vehicle transport, which helps them save money.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Rapid Auto Shipping is a reputable company specializing
                        in multiple car transport and ensuring all the necessary
                        details are handled.
                      </p>
                    </div>
                  </div>

                  {/* Corporate Fleets */}
                  <div className="group">
                    <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-8 rounded-t-2xl">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Users className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          Corporate Fleets
                        </h3>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-b-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                      <p className="text-gray-700 leading-relaxed">
                        Many companies own vehicle fleets or multiple cars that
                        must replace or relocate periodically. No matter how
                        many vehicles you have, you can trust Rapid Auto
                        Shipping for professional auto shipping services.
                      </p>
                    </div>
                  </div>

                  {/* Enclosed Car Shipping */}
                  <div className="group">
                    <div className="bg-gradient-to-r from-[#ff5722] to-[#ff6b3d] p-8 rounded-t-2xl">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Shield className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          Enclosed Car Shipping
                        </h3>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-b-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Auto transport companies offer enclosed car carriers
                        ideal for transporting expensive or rare vehicles. With
                        these carriers, vehicle owners can rest assured that
                        their valuable possessions will be protected from
                        adverse weather conditions, road debris, and dirt.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        One of the many advantages of choosing Rapid Auto
                        Shipping as your car shipping service is minimizing the
                        risk of damage to valuable cars during the shipping
                        process.
                      </p>
                    </div>
                  </div>

                  {/* Multiple Vehicle Transportation */}
                  <div className="group">
                    <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-8 rounded-t-2xl">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <CheckCircle className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          Multiple Vehicle Transportation Safely
                        </h3>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-b-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Rapid Auto Shipping alleviates the concerns associated
                        with the transportation process for your business. Our
                        professional auto transport company staff and
                        experienced truck drivers are dedicated to ensuring the
                        safety of multiple vehicles, whether they are being
                        transported in an enclosed or open carrier.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        We offer vehicle pickup services, where we carefully
                        place your vehicles onto the carrier, plan the most
                        efficient route, and ensure the safe arrival of your
                        cars. You don't have to worry about the details because
                        Rapid Auto Shipping will care for them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
                  Multi Car Transport Options:{" "}
                  <span className="text-[#ff5722]">Open and Enclosed</span>
                </h2>
              </div>

              {/* Pricing Table */}
              <div className="mb-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Mobile Scrollable Container */}
                  <div className="overflow-x-auto">
                    <div className="min-w-[640px]">
                      {" "}
                      {/* Minimum width to ensure proper layout */}
                      {/* Table Header */}
                      <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-6">
                        <div className="grid grid-cols-4 gap-4 text-white font-semibold">
                          <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                              <Car className="h-5 w-5" />
                              <span>Distance</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <Clock className="h-5 w-5" />
                              <span>Estimated Time</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <Truck className="h-5 w-5" />
                              <span>Open Multi Shipping Cost</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <Shield className="h-5 w-5" />
                              <span>Enclosed Multi Shipping Cost</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Table Body */}
                      <div className="divide-y divide-gray-200">
                        {pricingData.map((row, index) => (
                          <div
                            key={index}
                            className="p-6 hover:bg-gray-50 transition-colors"
                          >
                            <div className="grid grid-cols-4 gap-4 text-center md:text-left">
                              <div className="font-semibold text-[#003366] text-lg">
                                {row.distance}
                              </div>
                              <div className="text-gray-700 font-medium">
                                {row.time}
                              </div>
                              <div className="text-2xl font-bold text-[#ff5722]">
                                {row.openCost}
                              </div>
                              <div className="text-2xl font-bold text-[#003366]">
                                {row.enclosedCost}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transport Options Explanation */}
              <div className="mb-16">
                <div className="max-w-4xl mx-auto text-center mb-12">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    There are two main methods for multiple car transport: open
                    and enclosed. Whether you are shipping one car or six, there
                    are two main options for transporting the vehicle.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Enclosed Transport */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            Enclosed Transport
                          </h3>
                          <p className="text-blue-100">
                            Premium Protection Service
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        An enclosed carrier provides complete protection for the
                        car during transport, shielding it from adverse weather
                        conditions, potential road debris, and sun damage.
                        Enclosed carriers are more expensive than the other
                        option, as they are considered a premium service.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-[#003366]" />
                          <span className="font-semibold text-[#003366]">
                            Capacity:
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Usually can accommodate only 1-2 cars simultaneously
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Open Transport */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-r from-[#ff5722] to-[#ff6b3d] p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Truck className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            Open Transport
                          </h3>
                          <p className="text-orange-100">
                            Cost-Effective Solution
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The more specific and cost-effective option is to use an
                        open carrier. Open carriers are a more cost-effective
                        option for shipping vehicles because they can transport
                        more cars, typically ranging from 6 to 12.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-[#ff5722]" />
                          <span className="font-semibold text-[#ff5722]">
                            Capacity:
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Can transport 6 to 12 cars simultaneously
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-[#ff5722] p-3 rounded-xl">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#003366]">
                    What type of Verification Paperwork is Required for Shipping
                    Multiple Cars?
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-[#003366] mb-4">
                      Required Documentation
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To arrange multi-car transport, customers must upload a
                      copy of each vehicle's original bill of sale and their
                      relevant information, including the VINs. Please notify
                      the auto transport company that you intend to ship
                      multiple cars.
                    </p>
                  </div>

                  <div className="bg-[#ff5722]/5 border-l-4 border-[#ff5722] rounded-r-xl p-6">
                    <h3 className="text-xl font-semibold text-[#ff5722] mb-4">
                      Auction Transport
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      When using multiple car transport services at an auction,
                      it is essential to ensure that you receive the necessary
                      documentation, such as the bill of lading and title, from
                      the auction yard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6">
              {/* Main Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
                  How to Save Money When{" "}
                  <span className="text-[#ff5722]">
                    Shipping Multiple Cars?
                  </span>
                </h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Here are some tips on how to save money when shipping
                    multiple cars:
                  </p>
                  <div className="bg-gradient-to-r from-[#ff5722]/10 to-[#ff6b3d]/10 border-l-4 border-[#ff5722] rounded-r-xl p-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If you plan to ship multiple vehicles, you are already in
                      a favorable position. Shipping multiple cars can result in
                      cost savings on transportation expenses.
                    </p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    However, other methods are available to reduce shipping
                    expenses for multiple vehicles. There are a few additional
                    methods you can employ to reduce the costs.
                  </p>
                </div>
              </div>

              {/* Money Saving Tips */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Booking Section */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Calendar className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">
                          Booking
                        </h2>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        If you can book both ends of your shipment in advance,
                        it can be a great way to save money. The shipper will
                        appreciate having a longer lead time.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        It will also be more convenient because you won't have
                        to worry about starting from scratch if you're a
                        snowbird, for example, and need to ship back to the
                        exact location.
                      </p>
                    </div>
                  </div>

                  {/* Discounts Section */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-r from-[#ff5722] to-[#ff6b3d] p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Gift className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">
                          Discounts
                        </h2>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Auto transport companies provide various discounts, some
                        of which you may need to be made aware you are eligible
                        for. The most frequently offered discounts are typically
                        available to military members.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Rapid Auto Shipping also discounts various groups,
                        including Police, EMS, first responders, snowbirds, and
                        college students.
                      </p>

                      {/* Discount Groups Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {discountGroups.map((group, index) => {
                          const IconComponent = group.icon;
                          return (
                            <div
                              key={index}
                              className="bg-gray-50 rounded-lg p-3 flex items-center space-x-2"
                            >
                              <IconComponent className="h-4 w-4 text-[#ff5722]" />
                              <span className="text-sm font-medium text-gray-700">
                                {group.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#003366] mb-6">
                    Benefits of Using a{" "}
                    <span className="text-[#ff5722]">Multi Car Transport</span>
                  </h2>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      For people or organizations, using multi-vehicle
                      transport—also known as automobile shipping or auto
                      transport—can have various advantages. Several benefits
                      are as follows:
                    </p>
                  </div>
                </div>

                <div className="grid gap-8">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                      >
                        <div
                          className={`bg-gradient-to-r ${benefit.color} p-6`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="bg-white/20 p-3 rounded-xl">
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white">
                              {benefit.title}
                            </h3>
                          </div>
                        </div>
                        <div className="p-8">
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Multiple Car Transport and Related Information
                </h2>
                <div className="w-24 h-1 bg-orange-600 rounded-full"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The entire process involves various details and logistical
                  considerations. For example, you cannot park your car in one
                  place and leave immediately. Multi-car transport requires a
                  higher level of responsibility and care, especially when
                  compared to simple car shipments. Rapid Auto Shipping needs to
                  be aware of the following information:
                </p>
              </div>

              {/* Key Considerations */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* Distance */}
                <div className="bg-white border-l-4 border-blue-900 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Distance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    How far is the drop-off location for your multi-car
                    transport request? How many stops are made along the route?
                  </p>
                </div>

                {/* Routes */}
                <div className="bg-white border-l-4 border-orange-600 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">
                    Routes
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Is it possible to access a specific route without a permit?
                    Which path should I take? Which approach will enhance
                    effectiveness and minimize potential delays? What
                    alternative routes or options are available if the original
                    plan does not go as expected? Furthermore, the routes should
                    be capable of accommodating your large machinery.
                  </p>
                </div>

                {/* Restrictions */}
                <div className="bg-white border-l-4 border-blue-900 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Restrictions
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    It is essential to consider certain limitations when dealing
                    with a multi-shipping order, such as the dimensions and
                    weight of the items involved. It is necessary for Rapid Auto
                    Shipping to handle your load.
                  </p>
                </div>
              </div>

              {/* Pros and Cons Table */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Pros vs Cons of Multi Car Shipping
                </h2>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    {/* Pros */}
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8">
                      <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                        Pros Of Multi Car Shipping
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Fast delivery</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>More Affordable (Bulk Discounts)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>More Safe and Secure</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Less Wear and Tear</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Vehicle Arrived On Same time</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Insured</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Less Hassle And Trackable</span>
                        </li>
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-8">
                      <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                        Cons Of Multi Car Shipping
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Limited Customization</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Weather Issues</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Difficult Rescheduling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Limited Carrier Options</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Section */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8 mb-16">
                <h2 className="text-3xl font-bold mb-6">
                  Multi Car Transport is a Safe Method of Transportation
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Shipping multiple cars is a safe and secure process. When we
                  ship your car, there will be sufficient space between each
                  vehicle. If you need to shipping multiple cars from one
                  location to another, we can assist you in finding the most
                  efficient shipping method.
                </p>
                <p className="text-lg leading-relaxed">
                  We exclusively collaborate with highly dependable car
                  carriers, ensuring that your vehicles are handled by
                  experienced, well-trained drivers who exercise utmost caution
                  when transporting them between locations. Whether you are a
                  car dealer, a business, or an individual, you can access
                  top-notch auto transport services.
                </p>
              </div>

              {/* Discounts Section */}
              <div className="bg-white border-2 border-orange-600 rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-orange-600 mb-6">
                  Are there any Discounts Available for Shipping Multiple
                  Vehicles?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The discount amount will vary based on the number of vehicles
                  and other specific order details. To be eligible for a
                  multi-vehicle discount, all vehicles must be transported
                  together on the same truck from the exact origin to the same
                  destination.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Please get in touch with Rapid Auto Shipping, and we will
                  provide you with the precise discount amount you can receive
                  on shipping each vehicle individually, compared to the
                  standard price.
                </p>
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
                        Conclusion
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      At Rapid Auto Shipping, we strive to exceed your
                      expectations in the auto shipping industry. Our team of
                      experts will ensure that you are well-informed, prioritize
                      your safety, and accurately estimate when your vehicle(s)
                      will arrive. <br />
                      We are committed to delivering your car promptly,
                      regardless of inclement weather conditions such as rain or
                      cold temperatures. We frequently communicate with the
                      drivers of the multi-car transporters until they reach
                      their destinations.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Rapid Auto Shipping offers top-quality service for
                      shipping multiple cars at a reasonable price. We will
                      ensure that your vehicle receives the highest level of
                      care during auto-shipping. Contact us today to receive a
                      complimentary custom quote for multi-car transport.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        <img
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752572837/Multi_Car_shipping_2_eclenn.webp"
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
