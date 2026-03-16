"use client";

import React, { useState } from "react";
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

  const primaryColor = "#ff5722";
  const secondaryColor = "#003366";

  const faqData = [
    {
      icon: <Truck className="w-5 h-5" />,
      question: "How does your car shipping service work?",
      answer:
        "It's simple! You request a quote, schedule your shipment, and we pick up and deliver your vehicle safely using a certified carrier. We offer both open and enclosed transport options.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "How much does it cost to ship a car?",
      answer:
        "Prices vary based on distance, vehicle size, transport type (open or enclosed), and location. Get a free quote online or call us for a custom rate with no hidden fees.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Do you offer door-to-door car transport?",
      answer:
        "Yes, we offer door-to-door service whenever accessible. Our carrier will pick up and deliver your car as close to your specified locations as legally and safely possible.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is my vehicle insured during transport?",
      answer:
        "Absolutely. All vehicles shipped with Rapid Auto Shipping are fully insured during transit. A condition report is completed at pickup and delivery.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "Can you ship non-running or damaged cars?",
      answer:
        "Yes, we specialize in both running and non-running vehicle transport. Just let us know the vehicle's condition so we can provide the right equipment.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "How long does car shipping take?",
      answer:
        "Transit time depends on distance—local shipments may take 1–3 days, while cross-country moves can take 5–7 days. Expedited options are available if needed.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Top car transporter services provider - Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Are you shifting and looking to ship your car with safety? We are expert in car service transport at an affordable price in all states of the USA."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/car-shipping-services"
        />
        <meta
          property="og:title"
          content="Top car transporter services provider - Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Are you shifting and looking to ship your car with safety? We are expert in car service transport at an affordable price in all states of the USA."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/car-shipping-services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753253466/Car_Shipping_Services_3_horih5.webp"
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
                    name: "Services",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/car-shipping-services",
                    name: "Top car transporter services provider - Rapid Auto Shipping",
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
              serviceType:
                "Top car transporter services provider - Rapid Auto Shipping",
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
                "Are you shifting and looking to ship your car with safety? We are expert in car service transport at an affordable price in all states of the USA.",
              url: "https://rapidautoshipping.com/services/car-shipping-services",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753253466/Car_Shipping_Services_3_horih5.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753253466/Car_Shipping_Services_3_horih5.webp"
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
                    Car Shipping{" "}
                    <span className="text-[#ff5722]">Services</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Rapid Auto Shipping is a top national vehicle transporter.
                    We have ten years of experience, have moved over 50,000
                    cars, and have traveled millions of miles across the US.
                    Thus, our top-notch car delivery services are well-known
                    throughout. We carry bikes, boats, ATVs, RVs, and large
                    equipment. Our first-class shipping services offer fast
                    door-to-door service for your vehicle's transit.
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
                        How Does Vehicle Shipping Operate?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      This essential guide will explain in 3 easy steps.
                      <br />
                      <br />
                      Whereas some businesses might be hesitant to respond, we
                      are eager to address all of your inquiries, such as "How
                      does auto transport work?" You want the most significant
                      auto transport you can get at a great price, whether
                      you're heading on your next big trip or buying (or
                      selling) a car online, and Rapid Auto Transport, which has
                      a 5-star rating, delivers.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Get Quotation:</b> By completing the car shipping
                      quotes from above or giving us a call, you can get a quick
                      estimate for the cost of transporting a car or any other
                      type of vehicle.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Give an order:</b> If you are satisfied with our car
                      shipping estimate, you can finish your order online or by
                      calling and speaking with one of our car shipping
                      specialists.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Plan the pickup:</b> We'll reserve a spot for your car
                      on one of our car transporters. We call or email you with
                      the name, phone number, and the automobile shipment
                      driver's pickup and delivery dates.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Move the car:</b> Our car delivery services will
                      transport your automobile. In order to guarantee
                      availability, the vehicle transport truck's driver will
                      phone to set up a time 4 to 24 hours before the collection
                      and delivery day.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747832976/What-Is-Enclosed-Car-Transport_dkzdaz.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[800px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{ backgroundColor: secondaryColor }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Our Car Shipping Services
                  </h2>
                  <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
                    The most popular and cost-effective method of moving cars
                    involves an open-air trailer that can hold up to ten
                    vehicles at once. An auto shipping company that takes pride
                    in offering its clients a wide range of services is Rapid
                    Auto Shipping.
                  </p>
                </div>
              </div>
            </div>

            {/* Open-air car transport Section */}
            <div className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2
                      className="text-4xl font-bold mb-6"
                      style={{ color: secondaryColor }}
                    >
                      Open-air car transport
                    </h2>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Open auto shipping is The most popular and cheapest way
                        to transport cars. Your machine will be exposed to the
                        elements the entire journey because these carriers lack
                        a cover and sidewall. Don't let the prospect of having
                        your four-wheeler exposed to rain, sun, snow, or dust
                        dissuade you, though.
                      </p>
                      <p>
                        Car shipping companies that provide excellent cargo care
                        is Rapid Auto Shipping. Our skilled and knowledgeable
                        drivers will ensure the delivery gets to its destination
                        safely and on schedule.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor,
                        }}
                      >
                        <Truck className="w-8 h-8" />
                      </div>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: secondaryColor }}
                    >
                      Most Popular Choice
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <CheckCircle
                          className="w-5 h-5 mr-3"
                          style={{ color: primaryColor }}
                        />
                        Cheapest way to transport cars
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle
                          className="w-5 h-5 mr-3"
                          style={{ color: primaryColor }}
                        />
                        Skilled and knowledgeable drivers
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle
                          className="w-5 h-5 mr-3"
                          style={{ color: primaryColor }}
                        />
                        Safe and on schedule delivery
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Enclosed car transport Section */}
            <div className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor,
                        }}
                      >
                        <Shield className="w-8 h-8" />
                      </div>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: secondaryColor }}
                    >
                      Premium Protection
                    </h3>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        The majority of open trailers have a ten-car capacity.
                      </p>
                      <p>
                        In contrast, enclosed auto shipment trucks frequently
                        move just one tier of two to six autos at a time.
                      </p>
                      <p>
                        Open trailers can transport ten cars on two racks
                        stacked on one another.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2
                      className="text-4xl font-bold mb-6"
                      style={{ color: secondaryColor }}
                    >
                      Enclosed car transport
                    </h2>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                      <p>
                        One of the options for moving cars across the nation is
                        enclosed auto transport. Vehicles are transferred
                        securely and safely by enclosed auto movers using a
                        covered transport trailer.
                      </p>
                      <p>
                        In contrast, open auto transport involves loading cars
                        onto a trailer that is "open" to the elements. Vehicles
                        are not exposed to the elements when hauled in enclosed
                        trailers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Door to Door car transport Section */}
            <div className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2
                    className="text-4xl font-bold mb-6"
                    style={{ color: secondaryColor }}
                  >
                    Door to Door car transport
                  </h2>
                </div>
                <div className="max-w-7xl mx-auto">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                      <p>
                        One of the most practical vehicle transport methods is
                        door to door auto transport. When you choose this
                        option, the auto shipper will pick up your car and
                        deliver it to your door.
                      </p>
                      <p>
                        If the size of the door-to-door car shipping truck
                        prevents it from fitting, you and the driver will plan a
                        nearby spot for collection and delivery. In this
                        instance, all you need to do is choose a precise address
                        for the pickup and delivery of your automobile or
                        another type of vehicle.
                      </p>
                      <p>
                        The market's most well-known car shipping services
                        specialize in door-to-door shipment, which is now the
                        most economical way to move a car. In the contiguous
                        United States, we provide door-to-door car shipping
                        services to and from all states.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How Does It Begin Section */}
            <div className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                  className="text-4xl font-bold text-center mb-12"
                  style={{ color: secondaryColor }}
                >
                  How Does It Begin?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold"
                        style={{ backgroundColor: primaryColor }}
                      >
                        1
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      you'll hear from the auto transport carrier who was
                      dispatched to your vehicle before pickup. They'll
                      coordinate with you to come to your door (or as close as
                      possible).
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold"
                        style={{ backgroundColor: primaryColor }}
                      >
                        2
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Inspect it thoroughly Before the car hauling services
                      loads the car. During this critical car shipment step,
                      your transport truck driver will mark existing damage on a
                      form or app. Before loading the vehicle into the shipping
                      trailer, take pictures of all four sides, the top, the
                      interior, and the odometer.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold"
                        style={{ backgroundColor: primaryColor }}
                      >
                        3
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Your car is now loaded and traveling to its destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens in the Intervals Section */}
            <div className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                  className="text-4xl font-bold text-center mb-12"
                  style={{ color: secondaryColor }}
                >
                  What Happens in the Intervals?
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <div className="flex items-start">
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1"
                        style={{ backgroundColor: primaryColor }}
                      >
                        1
                      </div>
                      <p>
                        Auto transporters travel 400–500 kilometers daily and
                        pick up and deliver autos on time. They never appear.
                        Furthermore, auto shipment carriers won't contact you to
                        set an appointment until they've loaded or unloaded the
                        planned vehicle.
                      </p>
                    </div>
                    <p className="ml-12 text-gray-700 leading-relaxed">
                      Couriers pick up and deliver cars by arrangement, so
                      you'll know when and where they'll come hours in advance.
                      You'll have the carrier's driver, dispatcher, and phone
                      numbers throughout this.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens During Delivery Section */}
            <div className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                  className="text-4xl font-bold text-center mb-12"
                  style={{ color: secondaryColor }}
                >
                  What Happens During Delivery?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold"
                        style={{ backgroundColor: primaryColor }}
                      >
                        1
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      When they narrow the delivery window, most automobile
                      transport services will phone a day ahead to arrange a
                      time and location as close to your house as possible.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold"
                        style={{ backgroundColor: primaryColor }}
                      >
                        2
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Do the delivery inspection after unloading the car. Again,
                      take pictures of all four sides and the top, check the
                      interior for damage, and ensure the odometer hasn't
                      changed much. Note BOL damage. The car transportation
                      carrier's insurance won't cover the damages if not.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Factors that Affect the Car Shipping Cost Section */}
            <div className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2
                    className="text-4xl font-bold mb-6"
                    style={{ color: secondaryColor }}
                  >
                    Factors that Affect the Car Shipping Cost
                  </h2>
                  <p className="text-xl text-gray-600 max-w-xl mx-auto">
                    The cost is a constant consideration while deciding on the
                    best shipping method. However, the cost of our car shipping
                    services is not set in stone; instead, an estimate is made
                    for each unique circumstance, considering various events.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor,
                        }}
                      >
                        <Car className="w-8 h-8" />
                      </div>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: secondaryColor }}
                    >
                      Size and Weight
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      There is a limit to the number of automobiles that
                      carriers can transport, but there is also a limit to the
                      load. The cost of shipping will increase with the weight
                      of the package.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor,
                        }}
                      >
                        <Calendar className="w-8 h-8" />
                      </div>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: secondaryColor }}
                    >
                      Seasonal differences
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Since demand for this kind of service peaks in the summer,
                      costs are often higher from Memorial Day through Labor
                      Day.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor,
                        }}
                      >
                        <MapPin className="w-8 h-8" />
                      </div>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: secondaryColor }}
                    >
                      Distance
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Labor, tolls, and fuel costs also impact the ultimate
                      estimate. The price will increase directly to how far your
                      machine must go.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor,
                        }}
                      >
                        <Shield className="w-8 h-8" />
                      </div>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: secondaryColor }}
                    >
                      The brand and type
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Costlier automobiles are those that require more
                      protection.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor,
                        }}
                      >
                        <Truck className="w-8 h-8" />
                      </div>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: secondaryColor }}
                    >
                      The distance
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The length of the machine, in addition to the manufacturer
                      and model, might impact the cost. Car hauling companies
                      can ship many more people with smaller cars because the
                      van has more space.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How Can I Tell When My Car Is Ready Section */}
            <div className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2
                    className="text-4xl font-bold mb-6"
                    style={{ color: secondaryColor }}
                  >
                    How Can I Tell When My Car Is Ready?
                  </h2>
                  <p className="text-xl text-gray-600">
                    We advise that you adequately prepare the machine for the
                    move before our drivers arrive to pick up your vehicle.
                    Before you send the car off, you must complete the
                    following:
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="space-y-8">
                    <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                      <div className="flex justify-center mb-4 md:mb-0 md:mr-6">
                        <div
                          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: `${primaryColor}15`,
                            color: primaryColor,
                          }}
                        >
                          <Car className="w-8 h-8" />
                        </div>
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold mb-3"
                          style={{ color: secondaryColor }}
                        >
                          Clean it
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          You can look for any existing damage while doing this.
                          This is crucial, particularly if you're employing an
                          uncovered shipper truck.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                      <div className="flex justify-center mb-4 md:mb-0 md:mr-6">
                        <div
                          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: `${primaryColor}15`,
                            color: primaryColor,
                          }}
                        >
                          <AlertTriangle className="w-8 h-8" />
                        </div>
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold mb-3"
                          style={{ color: secondaryColor }}
                        >
                          Turn off all alarm systems
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Disable all the alarms in a vehicle.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                      <div className="flex justify-center mb-4 md:mb-0 md:mr-6">
                        <div
                          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: `${primaryColor}15`,
                            color: primaryColor,
                          }}
                        >
                          <CheckCircle className="w-8 h-8" />
                        </div>
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold mb-3"
                          style={{ color: secondaryColor }}
                        >
                          Pristine inside
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Your machine might be moved around a bit, so cleaning
                          will save stuff from being thrown around.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                      <div className="flex justify-center mb-4 md:mb-0 md:mr-6">
                        <div
                          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: `${primaryColor}15`,
                            color: primaryColor,
                          }}
                        >
                          <Clock className="w-8 h-8" />
                        </div>
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold mb-3"
                          style={{ color: secondaryColor }}
                        >
                          Check for pressure and leaks
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          The danger of tire damage may be increased if your
                          tires are not adequately filled.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-20" style={{ backgroundColor: secondaryColor }}>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Ship Your Vehicle with Rapid Auto Shipping?
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  Experience our professional car shipping services with skilled
                  and knowledgeable drivers ensuring safe delivery on schedule.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="https://rapidautoshipping.com/services/car-shipping-services">
                    <button
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
                      style={{ backgroundColor: primaryColor, color: "white" }}
                    >
                      <DollarSign className="mr-2 w-5 h-5" />
                      Get Free Quote
                    </button>
                  </Link>
                  <Link href="tel:+18332334447">
                    <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
                      <Phone className="mr-2 w-5 h-5" />
                      Contact Us Today
                    </button>
                  </Link>
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
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Why You Should Use the Car Delivery Services from Rapid
                        Auto Shipping ?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Personalized strategy:</b> Throughout the whole process
                      of moving your car or truck, Rapid Auto Shipping works
                      with you. When you hire us as your automobile transporter,
                      you can experience a simple and painless shipping process
                      without worrying about anything. <br /> <br />
                      <b>Dedicated consultants:</b> Our knowledgeable
                      consultants for auto shipping companies strive fervently
                      to ensure you're working with the top provider of vehicle
                      transportation services. They will continuously keep an
                      eye on your package. <br /> <br />
                      <b>Free of charge upfront</b> You read that right—there is
                      no fee up in advance! The top vehicle shipping businesses
                      only charge you when the carrier has been sent to pick up
                      your order for automobile transport services. So, you may
                      make a reservation with your auto transport business right
                      away and put off worrying about the cost until later{" "}
                      <br /> <br />
                      <b>Insurance protection:</b> Companies that transport cars
                      include insurance in their shipping estimates. Before
                      being accepted into our carrier network, the auto haulers
                      we have chosen must satisfy specific insurance
                      requirements. <br /> <br />
                      <b>Additional hours:</b> We are more than just a vehicle
                      transport business. We put in long hours and are available
                      every day of the year. We are always available to answer
                      any questions about car shipping, including why you should
                      choose us over the competition.
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
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747998146/How_Door-to-Door_Auto_Transport_Works_vecign.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          className="w-full h-[800px] object-cover rounded-2xl shadow-2xl 
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
