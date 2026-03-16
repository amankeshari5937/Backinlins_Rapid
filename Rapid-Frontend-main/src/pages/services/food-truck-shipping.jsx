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
  Calculator,
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
  MapPin,
  Search,
  Phone,
  ArrowRight,
  Scale,
  Calendar,
  Camera,
  ClipboardList,
  Sparkles,
  Zap,
  Settings,
  Target,
  Award,
  ChevronRight,
  Ship,
  Plane,
} from "lucide-react";

import Image from "next/image";

const Home = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const shippingMethods = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Flatbed Trucks",
      description:
        "Versatile and can accommodate various sizes of food trucks. The food truck is loaded onto a flatbed trailer, appropriately secured, and transported to the desired location.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enclosed Trailers",
      description:
        "These trailers protect from weather conditions and can be a suitable choice for longer distances, providing extra security for your food truck.",
    },
    {
      icon: <ChevronRight className="w-8 h-8" />,
      title: "Towing",
      description:
        "The food truck may sometimes be towed behind a specialized vehicle. This method is often used for smaller food trucks or when the owner prefers to have their vehicle transport the food truck.",
    },
  ];

  const overseasMethods = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Container Shipping",
      description:
        "Food trucks can be loaded into shipping containers for transportation by sea. The food truck is securely placed inside a container and loaded onto a cargo ship. Container shipping is suitable for long distances and international shipments.",
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Ro-Ro Shipping",
      description:
        "Roll-on/roll-off (Ro-Ro) shipping involves driving the food truck onto a specialized vessel at the departure port and off at the destination port. This method is commonly used for shipping vehicles and can be an option for food trucks.",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Air Freight",
      description:
        "If time is critical, food trucks can be shipped by air freight. This method is faster but generally more expensive compared to sea freight. Air freight is often chosen for urgent shipments or when transporting food trucks to remote locations.",
    },
  ];

  const foodTruckTypes = [
    "Taco Trucks",
    "Ice Cream Trucks",
    "Hot Dog Stands",
    "Concession Trailers",
    "Shaved Ice Trailers",
    "Mobile Kitchens",
    "Catering Truck",
    "Beverage Truck",
    "Waffle Truck",
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Licensed, Insured & Bonded",
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "Specialized Experienced Drivers",
    },
    { icon: <Truck className="w-6 h-6" />, text: "Variety of Trailer Options" },
    { icon: <Phone className="w-6 h-6" />, text: "24/7 Customer Support" },
  ];

  const faqData = [
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Do you ship food trucks nationwide?",
      answer:
        "Yes! We provide reliable, door-to-door food truck transport services across all 50 states—whether you're moving a new unit, relocating your business, or attending an event.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "How much does it cost to ship a food truck?",
      answer:
        "The cost depends on the truck's size, weight, distance, and whether it's operable. Larger or custom-built food trucks may require flatbed or lowboy trailers. Request a custom quote for accurate pricing.",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      question: "Can you transport oversized or custom food trucks?",
      answer:
        "Absolutely. We have experience hauling a variety of custom and oversized food trucks, including units with attached cooking equipment, awnings, or special dimensions.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is insurance included in food truck shipping?",
      answer:
        "Yes. Every food truck shipment is fully insured during transport. You'll receive inspection documentation at pickup and delivery for added peace of mind.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "Can you transport a non-running food truck?",
      answer:
        "Yes, we transport both operational and non-running food trucks. Let us know the condition at booking so we can arrange for winches or other necessary equipment.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      question:
        "How do I schedule food truck shipping with Rapid Auto Shipping?",
      answer:
        "Simply request a quote online or call us. Our expert team will guide you through the process, coordinate logistics, and arrange safe, on-time delivery.",
    },
  ];

  return (
    <>
      <Head>
        <title>Food truck transport service - Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Want to shift your food truck to a profitable place? Rapid Auto Shipping provides best service in food truck transport at a minimal cost across the USA."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/food-truck-shipping"
        />
        <meta
          property="og:title"
          content="Food truck transport service - Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Want to shift your food truck to a profitable place? Rapid Auto Shipping provides best service in food truck transport at a minimal cost across the USA."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/food-truck-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753085908/food_truck_shipping_lzksop.webp"
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
                      "https://rapidautoshipping.com/services/food-truck-shipping",
                    name: "food-truck-shipping",
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
              serviceType: "Food Truck Shipping",
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
                "Want to shift your food truck to a profitable place? Rapid Auto Shipping provides best service in food truck transport at a minimal cost across the USA.",
              url: "https://rapidautoshipping.com/services/food-truck-shipping",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753085908/food_truck_shipping_lzksop.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753085908/food_truck_shipping_lzksop.webp"
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
                    Food Truck {"  "}
                    <span className="text-[#ff5722]">Shipping</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Do you need a food truck transport service? After recently
                    purchasing a food truck, are you in the market for a
                    reliable food truck shipping service? Rapid auto shipping is
                    available to help you get started. We specialize in food
                    shipping services, and our skilled drivers have many years
                    of experience.
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
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        The Process of Shipping Food Trucks
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify ">
                      Shipping a food truck typically involves the following
                      steps. First, you will speak with a shipping specialist
                      who will gather all the relevant information about your
                      food truck or trailer.
                      <br /> <br />
                      Every mode of transportation is unique, and each
                      individual has specific circumstances and needs.
                    </p>

                    <ul
                      className="text-lg text-gray-700 leading-relaxed text-justify pl-5"
                      style={{ listStyle: "square" }}
                    >
                      <li>
                        {" "}
                        Determining the appropriate type of trailer for
                        transportation purposes. Three types of trailers can be
                        used: a Hotshot Trailer, a Step Deck Trailer with Ramps,
                        and in some cases, for larger vehicles, an RGN trailer.
                      </li>{" "}
                      <br />
                      <li>
                        Please determine the most convenient time and date for
                        the driver to pick up the vehicle.
                      </li>{" "}
                      <br />
                      <li>
                        Please exchange contact details with the driver to
                        establish a line of communication for coordinating the
                        pick-up.
                      </li>{" "}
                      <br />
                      <li>
                        he driver will inspect the vehicle's exterior, noting
                        any scratches or dents. They will then provide a copy of
                        the inspection report to the point of origin.
                      </li>{" "}
                      <br />
                      <li>
                        The driver will provide an estimated arrival time (ETA)
                        for the delivery and maintain communication throughout
                        the journey.
                      </li>{" "}
                      <br />
                      <li>
                        The driver will deliver the food truck and then perform
                        an inspection to ensure that it has arrived in the same
                        condition as when it was loaded.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753085909/food_truck_shipping_3_zwml2i.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[800px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="min-h-screen"
            style={{
              background: "linear-gradient(135deg, #003366 0%, #004080 100%)",
            }}
          >
            <style jsx>{`
              .primary-color {
                color: #003366;
              }
              .secondary-color {
                color: #ff5722;
              }
              .primary-bg {
                background-color: #003366;
              }
              .secondary-bg {
                background-color: #ff5722;
              }
              .gradient-bg {
                background: linear-gradient(135deg, #003366 0%, #004080 100%);
              }
              .card-hover:hover {
                transform: translateY(-8px);
              }
              .fade-in {
                opacity: 0;
                transform: translateY(30px);
              }
              .fade-in.active {
                opacity: 1;
                transform: translateY(0);
                transition: all 0.8s ease;
              }
              .pulse-animation {
                animation: pulse 2s infinite;
              }
              @keyframes pulse {
                0%,
                100% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.05);
                }
              }
              .slide-in {
                transform: translateX(-100%);
                transition: transform 0.5s ease;
              }
              .slide-in.active {
                transform: translateX(0);
              }
            `}</style>

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4">
              <div className="max-w-7xl mx-auto text-center">
                <div className={`fade-in ${isVisible ? "active" : ""}`}>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Types of Food Truck Shipping
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Regarding shipping food trucks, there are primarily two main
                    methods: ground transportation and overseas shipping.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="https://rapidautoshipping.com/services/food-truck-shipping">
                      <button className="secondary-bg text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                        Get Quote Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Ground Transportation Section */}
            <section id="services" className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold primary-color mb-6">
                    Ground Transportation
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    Ground transportation involves shipping the food truck
                    within the same country or continent using lorries or
                    trailers. This method is commonly used for domestic food
                    truck shipping.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {shippingMethods.map((method, index) => (
                    <div
                      key={index}
                      className={`fade-in ${
                        isVisible ? "active" : ""
                      } card-hover`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 secondary-bg h-full">
                        <div className="text-white mb-6">{method.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {method.title}
                        </h3>
                        <p className="text-white leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Overseas Shipping Section */}
            <section className="py-16 gradient-bg">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Overseas Shipping
                  </h2>
                  <p className="text-xl text-white/90 max-w-4xl mx-auto">
                    If you need international food shipping or across
                    continents, overseas shipping methods come into play.
                    Several options are available depending on the distance and
                    logistical requirements.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {overseasMethods.map((method, index) => (
                    <div
                      key={index}
                      className={`fade-in ${
                        isVisible ? "active" : ""
                      } card-hover`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 h-full">
                        <div className="text-orange-400 mb-6">
                          {method.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {method.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Food Truck Types Section */}
            <section id="trucks" className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold primary-color mb-6">
                    There Are Many Different Kinds of Food Trucks Available
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                    If you need to transport a beverage, snack, or any other
                    type of food truck in the USA, Rapid Auto Shipping is the
                    company you can rely on. Please feel free to reach out to us
                    if you need assistance with moving any of the following
                    types of food trucks:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {foodTruckTypes.map((truck, index) => (
                    <div
                      key={index}
                      className={`slide-in ${
                        isVisible ? "active" : ""
                      } bg-white rounded-xl shadow-lg p-6 border-l-4 secondary-bg hover:shadow-2xl transition-all duration-300`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 secondary-bg rounded-full"></div>
                        <span className="text-lg font-semibold primary-color">
                          {truck}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Consider relocating your food truck for several reasons,
                    such as changes in trends, seasons, and new opportunities.
                    Are you interested in locating your hot dog stand near the
                    national little league playoffs? It may be wedding season,
                    and your catering services are required in a different
                    state.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    As the snowy days approach, business for your beverage truck
                    is dwindling, prompting you to head south. No matter the
                    reason for your Snack truck relocation, we are here to
                    assist you.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Trust Us Section */}
            <section id="why-us" className="py-16 gradient-bg">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Why Should You Trust Rapid Auto Shipping to Ship Food
                    Trucks?
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                      <p className="text-lg text-white/90 leading-relaxed mb-6">
                        Ensuring the security of your food truck is of utmost
                        importance. Therefore, it is crucial to choose a
                        reliable food shipping companies that can guarantee the
                        safety of your vehicle throughout the entire delivery
                        process. At Rapid Auto Shipping, we prioritize the
                        safety of all the equipment we transport.
                      </p>
                      <p className="text-lg text-white/90 leading-relaxed mb-6">
                        We possess all the requirements, licenses, and permits
                        for transporting all types of loads. We are licensed,
                        insured, and bonded to ship heavy equipment across the
                        United States, Mexico, and Canada. Regardless of their
                        value, we ensure that all machines are insured to
                        guarantee their safety in an emergency.
                      </p>
                      <p className="text-lg text-white/90 leading-relaxed">
                        In addition, we provide that we obtain all the necessary
                        permits for transporting trucks across states and
                        counties. We also handle the required paperwork and
                        employ specialized drivers experienced in shipping
                        trucks.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`fade-in ${
                          isVisible ? "active" : ""
                        } bg-white rounded-xl p-6 shadow-lg flex items-center space-x-4 hover:shadow-2xl transition-all duration-300`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                      >
                        <div className="secondary-color">{feature.icon}</div>
                        <span className="text-lg font-semibold primary-color">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <p className="text-lg text-white/90 leading-relaxed">
                    We understand the importance of having suitable vehicles
                    that can safely accommodate and transport vehicles of all
                    sizes. That's why we offer a variety of trailers, such as
                    adjustable flatbeds, drop decks, removable goosenecks, and
                    step decks. These options ensure that your truck will find
                    the perfect match for shipping.
                  </p>
                </div>
              </div>
            </section>

            {/* Quality Service Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold primary-color mb-6">
                    We Provide Quality Service for Shipping Container Food
                    Trucks of All Sizes
                  </h2>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Rapid Auto Shipping is the official transportation company
                      for all your food truck needs regardless of your size,
                      shape, weight, distance, or cost. We provide
                      transportation services for various food trucks, including
                      those serving drinks, snacks, cuisine from mobile
                      kitchens, waffles, and catering.
                    </p>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      We offer transportation services for food trucks that are
                      dependable, reliable, and highly trustworthy, all at
                      competitive prices.
                    </p>
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
                        What is the Cost of Transporting a Food Truck to Another
                        State?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      The price for transporting a Food Truck is typically
                      determined by its dimensions, weight, and the distance it
                      needs to travel. This information is necessary to provide
                      an accurate cost estimate for shipping your food truck.
                      You may evaluate your prices against the national average
                      to estimate the cost of transporting a food truck to
                      another state.
                      <br /> <br />
                      Typically, food truck shipping costs approximately $4 per
                      mile for distances up to 100 miles. The price rate will
                      decrease to roughly $1.35 per mile when your travels cover
                      less than 1,000 miles.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753085912/food_truck_shipping_2_kocapp.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
