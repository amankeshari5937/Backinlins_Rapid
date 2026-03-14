"use client";

import React, { useState, useEffect } from "react";
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
  Cloud,
  Navigation,
  ArrowRight,
  GraduationCap,
  UserCheck,
  Eye,
  Globe,
  Ruler,
  Award,
  MapPin,
  Calendar,
  Check,
  Clock,
  Shield,
  Phone,
  Users,
  Settings,
  Leaf,
  Mountain,
  Scissors,
  Mail,
  Target,
  Weight,
  Route,
  Zap,
  Calculator,
  Ship,
  HelpCircle,
  MessageCircle,
  Anchor,
  Sun,
  CheckCircle2,
  FileCheck,
  MapPinned,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

const Hello = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});

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
      icon: <Anchor className="w-5 h-5" />,
      question: "What types of boats do you ship?",
      answer:
        "Depending on size and transport requirements, we ship a wide range of boats, including sailboats, motorboats, yachts, jet skis, personal watercraft, and commercial vessels.",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      question: "What shipping methods do you use for boats?",
      answer:
        "We offer several methods, including roll-on/roll-off (RoRo), flat-rack container shipping, standard container shipping (for smaller boats), cradle and trailer transport for overland hauling.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "How is my boat secured during transport?",
      answer:
        "Boats are carefully secured using professional-grade cradles, straps, shrink wrap (if requested), and protective materials to prevent movement and damage during shipping.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "Is insurance included in the shipping cost?",
      answer:
        "Basic insurance is included with all shipments. You can also purchase additional marine insurance for extra coverage, depending on your boat's value and preferences.",
    },
    {
      icon: <Package className="w-5 h-5" />,
      question: "Are there restrictions on what can be shipped with the boat?",
      answer:
        "We recommend removing all personal belongings and valuables. Most items left onboard are not covered by insurance.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Can I track my boat while it's in transit?",
      answer:
        "Yes. We provide shipment tracking and regular updates throughout the shipping process, including estimated time of arrival.",
    },
  ];
  return (
    <>
      <Head>
        <title>Trustworthy International Boat Shipping Services with RAS</title>
        <meta
          name="description"
          content="Rapid Auto Shipping is The Best International Boat Shipping Company. We Serve in many countries including Europe, Africa, Asia, Middle East, and more."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/boat-shipping"
        />
        <meta
          property="og:title"
          content="Trustworthy International Boat Shipping Services with RAS"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping is The Best International Boat Shipping Company. We Serve in many countries including Europe, Africa, Asia, Middle East, and more."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/boat-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752579661/Yatch_Shipping_1_gluymp.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType:
                "Trustworthy International Boat Shipping Services with RAS",
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
                "Rapid Auto Shipping is The Best International Boat Shipping Company. We Serve in many countries including Europe, Africa, Asia, Middle East, and more.",
              url: "https://rapidautoshipping.com/services/boat-shipping",
            }),
          }}
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
                  name: "Home",
                  item: "https://rapidautoshipping.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "services",
                  item: "https://rapidautoshipping.com/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "boat-shipping",
                  item: "https://rapidautoshipping.com/services/boat-shipping",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752579661/Yatch_Shipping_1_gluymp.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752579661/Yatch_Shipping_1_gluymp.webp"
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
                    Boat <span className="text-[rgb(255,87,34)]">Shipping</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    When shipping your boat, we understand that your top
                    priorities are safety and affordability. You can find
                    exactly that with Rapid Auto Shipping! We are here to assist
                    you in determining the best way to transport your boat,
                    connect you with trustworthy transporters at competitive
                    rates, and provide valuable advice on preparing your boat
                    for transportation. If you encounter rough waters, we guide
                    you and help you navigate your boat shipping back on course.
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
                        How to Prepare a Boat for Shipment?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Here are the steps to properly prepare a boat for
                      shipping: To ensure successful boat transport, you can
                      take a few steps to prepare your boat for shipping. It is
                      essential to secure any loose items and take precautions
                      to prevent damage during travel. It is necessary to take
                      photos before dismantling any parts of your boat. These
                      photos will serve as a helpful reference when you need to
                      reassemble the boat after transportation. Please ensure
                      that you remove all personal items from your boat. Please
                      clean the exterior of your boat and inspect it for any
                      damages. It is also recommended that you have it checked
                      by a licensed marine surveyor.
                    </p>
                    <ul
                      className="text-lg text-gray-700 leading-relaxed text-justify"
                      style={{ paddingLeft: "20px", listStyle: "square" }}
                    >
                      <li>
                        Choose a loading area with a clearance of 14 feet.
                      </li>
                      <li>
                        Ensure all loose gear is correctly secured above and
                        below the deck.
                      </li>
                      <li>
                        Ensure that all hatches are closed, secured, and
                        properly sealed.
                      </li>
                      <li>
                        Secure the cabin windows by latching and taping them
                        from the outside.
                      </li>
                      <li>Drain the fuel and water tanks.</li>
                      <li>Drain plugs should be taken out of the hull.</li>
                      <li>
                        Disconnect the batteries and securely position the
                        cables away from them.
                      </li>
                      <li>
                        Ensure that your boat is within the legal loaded height
                        by measuring it.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752579688/Yatch_Shipping_2_rfrevl.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[600px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto p-6 bg-white">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Anchor className="h-8 w-8 text-[#003366]" />
                <h2 className="text-3xl font-bold text-[#003366]">
                  Boat Shipping Guide
                </h2>
              </div>
              <p className="text-gray-600">
                Complete guide to safe and reliable boat transportation
              </p>
            </div>

            {/* How to Choose a Boat Trailer Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#003366] mb-6 border-b-2 border-[#ff5722] pb-2">
                How to Choose a Boat Trailer?
              </h2>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To ensure that your boat is transported as you prefer, you
                  must converse with your service provider regarding the
                  available options for boat transport trailers. By
                  communicating your specific requirements and preferences, you
                  can provide them with the necessary information to facilitate
                  the transportation process effectively. You can transport your
                  boat on its trailer, but most companies can provide one.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Your Trailer */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#003366] mb-4 flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    Your Trailer
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Suppose you choose to use your trailer or cradle. In that
                    case, you will be held fully responsible for any damage or
                    accidents that may arise due to the unsuitability of your
                    trailer for transportation. It is important to thoroughly
                    inspect your trailer, paying close attention to the securing
                    devices, lights, and tires.
                  </p>
                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> It is recommended to transport
                      wooden boats in their custom cradle. These cradles are
                      specifically designed to distribute the weight of the boat
                      evenly.
                    </p>
                  </div>
                </div>

                {/* The Carrier's Trailer */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#003366] mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    The Carrier's Trailer
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    It is crucial to clarify any particular requirements they
                    may have for you to follow before utilizing one of the
                    transporter's boat trailers. Please ensure that you provide
                    your transporter with accurate dimensions of your boat.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The transporter will also provide you with information on
                    the process of loading and unloading your boat. It is
                    essential to conduct thorough research and educate yourself
                    about the various options available for boat trailers.
                  </p>
                </div>
              </div>
            </section>

            {/* Domestic Boat Shipping Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#003366] mb-6 border-b-2 border-[#ff5722] pb-2">
                How to Ship a Boat Domestically
              </h2>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Domestic boat shipping refers to the transportation of a boat
                  within the borders of a single nation. When it comes to rides
                  within the United States, it can vary from city to city or
                  state to state. In addition, inland transportation is the most
                  common method when transporting a boat within the country.
                  Various domestic boat shipping options are available,
                  depending on the state from which your shipment originates.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Key Factors to Consider:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded">
                    <p className="text-white">
                      • Please specify the type of carrier required for pickup
                      and delivery.
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <p className="text-white">• The most efficient route</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <p className="text-white">
                      • Permits and insurance are required, and the specific
                      requirements vary depending on the state.
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <p className="text-white">
                      • The equipment required for pickup and delivery
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded md:col-span-2">
                    <p className="text-white">
                      • Weather conditions during transportation
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Rapid Auto Shipping Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#003366] mb-6 border-b-2 border-[#ff5722] pb-2">
                How to Transport a Boat Using Rapid Auto Shipping
              </h2>

              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Rapid Auto Shipping offers professional boat transportation
                  services. We understand that your boat is a valuable piece of
                  heavy equipment and you are concerned about its safe
                  transportation. At Rapid Auto Shipping, we take care of all
                  aspects of boat transport.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <MapPin className="h-8 w-8 text-[#ff5722] mx-auto mb-2" />
                    <h3 className="font-semibold text-[#003366] mb-2">
                      Expert Logistics
                    </h3>
                    <p className="text-sm text-gray-600">
                      Skilled logistics team collects all necessary information
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Truck className="h-8 w-8 text-[#ff5722] mx-auto mb-2" />
                    <h3 className="font-semibold text-[#003366] mb-2">
                      Qualified Drivers
                    </h3>
                    <p className="text-sm text-gray-600">
                      Experienced truck drivers with boat shipping expertise
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Shield className="h-8 w-8 text-[#ff5722] mx-auto mb-2" />
                    <h3 className="font-semibold text-[#003366] mb-2">
                      Full Service
                    </h3>
                    <p className="text-sm text-gray-600">
                      From initial call to final delivery
                    </p>
                  </div>
                </div>

                <div className="bg-[#003366] text-white p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">
                    Get Your Free Shipping Estimate!
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span className="text-2xl font-bold">
                      +1 (833) 233-4447
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Boat Shipping Cost Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#003366] mb-6 border-b-2 border-[#ff5722] pb-2">
                What is the Boat Shipping Cost?
              </h2>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Boat shipping costs are determined by distance and specific
                  needs to ensure your boat is safely ashore. The average cost
                  for long-distance transportation typically ranges from $600 to
                  $1,000, while for short-distance transit, it typically ranges
                  between $150 and $350.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-green-800">
                      Short Distance
                    </h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-2">
                    $150 - $350
                  </p>
                  <p className="text-sm text-green-700">
                    Typical cost for short-distance boat transport
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-blue-800">
                      Long Distance
                    </h3>
                  </div>
                  <p className="text-3xl font-bold text-blue-600 mb-2">
                    $600 - $1,000
                  </p>
                  <p className="text-sm text-blue-700">
                    Typical cost for long-distance boat transport
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  To get a more detailed understanding of the transportation
                  expenses for your boat, please refer to Rapid Auto Shipping's
                  boat shipping cost index. On the Rapid Auto Shipping
                  marketplace, you can conveniently access and review completed
                  shipments like yours. This will also provide you with a clear
                  understanding of our work process.
                </p>
              </div>
            </section>
          </div>

          <div className="max-w-7xl mx-auto p-6 bg-white">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">
                Boat Shipping: Cost Factors & Company Qualifications
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Understanding what influences shipping costs and how to choose a
                qualified boat shipping company
              </p>
            </div>

            {/* Cost Factors Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-[#003366] to-[#004080] text-white p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-2 flex items-center">
                  <DollarSign className="h-6 w-6 mr-2" />
                  Several Factors Can Influence the Cost of Shipping a Boat
                </h2>
                <p className="text-blue-100">
                  Key elements that determine your boat shipping quote
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Size Factor */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#ff5722] p-3 rounded-full">
                      <Ruler className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#003366] ml-3">
                      Size
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The boat shipping cost considers beam size, length, and
                    weight. In addition to distance, the size of the boat has
                    the most significant impact on the shipping cost.
                  </p>
                  <div className="mt-4 bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800">
                      <strong>Key Measurements:</strong> Beam size, length, and
                      weight are all crucial factors
                    </p>
                  </div>
                </div>

                {/* Distance Factor */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#ff5722] p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#003366] ml-3">
                      Distance
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The cost of shipping a boat depends on two factors: the
                    distance traveled and the type of transportation used, which
                    can be classified as overland, on the keel, or water-borne
                    transport.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Overland
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      On the Keel
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      Water-borne
                    </span>
                  </div>
                </div>

                {/* Destination Factor */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#ff5722] p-3 rounded-full">
                      <Navigation className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#003366] ml-3">
                      Destination
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Destination and distance are not synonymous. Boat shippers
                    determine the boat shipping quote by considering the
                    specific port destination. Some ports may impose additional
                    charges.
                  </p>
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> If the port is not in high demand,
                      the shipper may need to increase costs.
                    </p>
                  </div>
                </div>

                {/* Season Factor */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#ff5722] p-3 rounded-full">
                      <Sun className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#003366] ml-3">
                      Season
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    During the prime boating season in summer, it is common for
                    prices to increase. It is important to remember that the
                    seasons at the embarkation and destination ports may not
                    align, which can significantly impact shipping times.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Example:
                    </h4>
                    <p className="text-sm text-blue-700">
                      In Long Beach, California, the month of June is known for
                      its mild climate. Interestingly, this time of year also
                      aligns with the typhoon season in the waters of Southeast
                      Asia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Protection Section */}
              <div className="mt-8 bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-[#ff5722]">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-[#ff5722] mr-2" />
                  <h3 className="text-xl font-semibold text-[#003366]">
                    Protection for Boat Transportation
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before you hand over your boat, you must review the insurance
                  coverage of the transporter you have chosen. We also recommend
                  obtaining your coverage to provide added protection for your
                  boat.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Learn More:</strong> To learn more about how
                    shipping protection works and how it can protect you, please
                    visit the Rapid Auto Shipping Protection page.
                  </p>
                </div>
              </div>
            </section>

            {/* Company Qualifications Section */}
            <section className="mb-10">
              <div className="bg-gradient-to-r from-[#003366] to-[#004080] text-white p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-2 flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-2" />
                  What Qualifies a Company for Boat Shipping?
                </h2>
                <p className="text-blue-100">
                  Essential requirements for choosing a reliable boat shipping
                  company
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* DOT and FMCA Authorizations */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-500 p-3 rounded-full">
                      <FileCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#003366] ml-3">
                      DOT and FMCA Authorizations
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    It is important to note that not all companies offering boat
                    shipping services may possess the necessary authorization
                    and licensing.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-green-800 mb-2">
                      <strong>Required Authorizations:</strong>
                    </p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Federal Department of Transportation</li>
                      <li>• Federal Motor Carrier Authority</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800">
                      <strong>Verification:</strong> You can access the Federal
                      SAFER (Safety and Fitness Electronics Records) system to
                      verify authorizations.
                    </p>
                  </div>
                </div>

                {/* Insurance */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#003366] ml-3">
                      Insurance
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Accidents or minor damage may occur when transporting your
                    valuable vessel over water or land. The boat shipping
                    company should have sufficient insurance coverage, which can
                    be confirmed through the SAFER system.
                  </p>
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Before shipping, reviewing
                      your insurance riders with your insurance agent is
                      essential to ensure that your craft is adequately covered.
                    </p>
                  </div>
                </div>

                {/* Payment Terms */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500 p-3 rounded-full">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#003366] ml-3">
                      Payment Terms
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If the boat shipping company requires full payment upfront,
                    consider alternative options. The standard industry practice
                    is for the customer to pay 50% upon receiving the boat from
                    the shipper and the remaining 50% upon the customer's
                    receipt.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">
                          50%
                        </p>
                        <p className="text-sm text-purple-700">Upon Pickup</p>
                      </div>
                      <div className="text-purple-400">+</div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">
                          50%
                        </p>
                        <p className="text-sm text-purple-700">Upon Delivery</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tracking */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#ff5722] p-3 rounded-full">
                      <MapPinned className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#003366] ml-3">
                      Tracking
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Boat shipping companies increasingly allow consumers to
                    follow their boats' movement in real-time. While GPS
                    tracking may be less necessary for short hauls, it is highly
                    recommended for boat transports that extend over several
                    days or weeks.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-800">
                        Real-time GPS Tracking
                      </p>
                      <p className="text-xs text-green-600">
                        Recommended for long-distance transports
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Warning Section */}
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-red-800">
                  Important Reminder
                </h3>
              </div>
              <p className="text-red-700">
                Always verify a company's credentials, insurance coverage, and
                payment terms before entrusting them with your valuable boat.
                Take time to research and compare multiple qualified boat
                shipping companies.
              </p>
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
                        Why Might You Need Boat Shipping?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Relocation: </b>
                      One of the most significant reasons for shipping a boat is
                      when you are moving homes and need to relocate. House
                      movers are responsible for packing and shipping the
                      contents of your home. Boat shippers provide the same
                      services for your boat. <br /> <br />
                      <b>Time: </b>
                      Boat shipping is often the best option due to time
                      constraints. Crossing the Atlantic can take up to a month,
                      not to mention the additional time required for
                      preparation. Boat shipping allows you to fly to your
                      destination and deliver your boat later. <br />
                      <br />
                      <b>Purchase: </b>
                      If you have bought a boat from a location outside your
                      local area, the most effective and sometimes the only
                      option to transport your boat back home is to hire a
                      shipper. <br />
                      <br />
                      <b>Repairs: </b>
                      Repairs become more complex as the size of the boat
                      increases. If your boat's repair and maintenance services
                      are unavailable in your area, shipping may be your best
                      option. <br />
                      <br />
                      <b>Safety: </b>
                      It would not be advisable to attempt crossing the Pacific
                      Ocean in winter with a 20-foot day sailer. You may need
                      more time to prepare for the ocean, even if your boat is.
                      Successfully navigating challenging crossings necessitates
                      having the appropriate equipment and expertise. Shipping
                      by boat allows for the avoidance of these obstacles.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752579674/Yatch_Shipping_3_uvrdpl.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[600px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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

export default Hello;
