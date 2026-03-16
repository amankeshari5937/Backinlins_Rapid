"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

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
} from "lucide-react";
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

  const shippingSteps = useMemo(() => [
    {
      step: 1,
      title: "Request an Instant Shipping Quote",
      description:
        "Getting an transport quote is the first step to ship a tractor. Fill out the details in the auto shipping calculator, or get in touch with us by email or call (833) 233-4447. While requesting a quote, provide information about the tractor's shipping locations, the tractor's model & year, and the trailer's type (flatbed, RGN, step-deck or enclosed trailers), etc.",
      icon: <Calculator className="h-8 w-8" />,
    },
    {
      step: 2,
      title: "Booking and Preparing the Tractor",
      description:
        "Once you get the auto transportation quote, you need to schedule your shipments. For your convenience, we provide electronic contracts. An email with a link will be sent to you so you can conveniently schedule your service online. Before the pickup, you also need to prepare your tractor for the shipping. Secure loose parts and cover exhaust stacks, check fluid levels and document the tractor's condition before shipping.",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      step: 3,
      title: "Pickup",
      description:
        "Our skilled auto transport driver will pick up your tractor on the appointed day and within the scheduled time limit. Ensure clear access for pickup and delivery locations. Before tractor hauling, they will inspect it and record its condition.",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      step: 4,
      title: "Delivery",
      description:
        "The carrier will provide you with an estimated arrival time a few hours before delivery. If you are unable to do so, you can ask a reliable person to accept the car on your behalf. Once again, the tractor went through another inspection process for condition check and finalized the paperwork.",
      icon: <MapPin className="h-8 w-8" />,
    },
  ], []);

  const tractorServices = useMemo(() => [
    {
      title: "Utility Tractor Transport",
      description:
        "Utility tractors are vital in farming, landscaping, and light construction. Choosing the appropriate equipment when shipping a tractor is important. We provide:",
      icon: <Settings className="h-8 w-8" />,
      features: [
        "Step-deck trailers for medium tractors",
        "RGN trailers for heavy equipment",
        "Lowboy trailers for large tractors",
      ],
      conclusion:
        "We make tractor hauling safe and efficient with our specialized fleet and trained drivers, so your equipment arrives in perfect condition.",
    },
    {
      title: "Agricultural Tractor Shipping",
      description:
        "Agricultural activity depends on the timely delivery of tractors to maintain high productivity. Our tractor hauling services provide:",
      icon: <Leaf className="h-8 w-8" />,
      features: [
        "safe shipping from fields to rural or urban areas.",
        "Weather protection from external elements,",
        "Door to door delivery for complete convenience,",
      ],
      conclusion:
        "Rapid Auto Shipping provides trusted shipping for a tractor to your farm or agricultural field.",
    },
    {
      title: "Earth-Moving Tractor Transport",
      description:
        "Transporting heavy-duty earth-moving tractors demands special care. Our professional staff employs:",
      icon: <Mountain className="h-8 w-8" />,
      features: [
        "Flatbed trailers for regular-sized heavy equipment",
        "RGN (Removable Gooseneck) trailers for oversized equipment",
        "Heavy-haul permits to guarantee legal compliance",
      ],
      conclusion:
        "When transporting a tractor for construction or excavation, efficient logistics and equipment choice are crucial. We handle every aspect of the process for hassle-free tractor hauling.",
    },
    {
      title: "Lawn Tractor Moving",
      description:
        "Smaller lawn tractors need to be handled with care when being transported. Our tractor hauling services involve:",
      icon: <Scissors className="h-8 w-8" />,
      features: [
        "Proper safety chain and trailer hitching",
        "Strapping and secure loading to avoid shifting during transport",
        "Strap and lock inspection regularly along the journey",
      ],
      conclusion:
        "Regardless of commercial lawn tractor moving or personal landscaping gear, our team provides secure and timely delivery of tractors.",
    },
  ], []);

  const tractorTypes = useMemo(() => [
    {
      type: "Utility Tractors",
      description: "Versatile tractors for farming and general tasks",
      models: "John Deere 5E Series, Kubota M5, New Holland T5",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      type: "Agricultural Tractors",
      description: "Used for plowing, tilling, and harvesting",
      models: "Massey Ferguson 8700S, Case IH Magnum Series, Fendt 900 Vario",
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      type: "Earth-Moving Tractors",
      description: "Heavy-duty machinery for excavation and land clearing",
      models: "Caterpillar D6, John Deere 1050K, Komatsu D155",
      icon: <Mountain className="h-6 w-6" />,
    },
    {
      type: "Compact Tractors",
      description: "Small but powerful tractors for landscaping and farms",
      models: "Kubota BX Series, John Deere 1 Series, Mahindra eMax",
      icon: <Package className="h-6 w-6" />,
    },
    {
      type: "Industrial Tractors",
      description: "Designed for heavy lifting in warehouses and factories",
      models: "JCB Fastrac, Massey Ferguson 4700, John Deere 6R",
      icon: <Target className="h-6 w-6" />,
    },
    {
      type: "Lawn Tractors",
      description: "Small tractors for residential and commercial landscaping",
      models: "Husqvarna TS 354XD, Cub Cadet XT1, John Deere X300",
      icon: <Scissors className="h-6 w-6" />,
    },
    {
      type: "Track Tractors",
      description: "High-traction tractors for rugged terrains",
      models:
        "Challenger MT700 Series, John Deere 9RX, Case IH Steiger Quadtrac",
      icon: <Star className="h-6 w-6" />,
    },
    {
      type: "Construction Equipment",
      description: "Bulldozers, graders, and loaders for construction sites",
      models: "Caterpillar 140 GC, Volvo L60H, Komatsu WA270",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      type: "Harvesting Machines",
      description: "Combines, cotton pickers, and forage harvesters",
      models: "John Deere S780, Case IH Axial-Flow 250, Claas Lexion 8000",
      icon: <Award className="h-6 w-6" />,
    },
  ], []);

  const shippingCosts = useMemo(() => [
    {
      distance: "Short-Distance Transport (0-500 miles)",
      rate: "$2.50 - $3.50 per mile",
    },
    {
      distance: "Mid-Distance Transport (500-1,000 miles)",
      rate: "$1.75 - $2.50 per mile",
    },
    {
      distance: "Long-Distance Transport (over 1,000 miles)",
      rate: "$1.25 - $1.75 per mile",
    },
  ], []);

  const costFactors = useMemo(() => [
    {
      factor: "Distance",
      description:
        "Longer distances increase fuel consumption and labor costs.",
      impact: "Higher for long-distance shipments.",
    },
    {
      factor: "Tractor Size & Weight",
      description:
        "Larger and heavier tractors require specialized equipment and permits.",
      impact: "Higher for larger and heavier tractors.",
    },
    {
      factor: "Transport Method",
      description:
        "Open transport is cheaper, while enclosed transport is more secure but costs more.",
      impact: "Higher for enclosed transport.",
    },
    {
      factor: "Fuel Prices",
      description:
        "Fluctuations in fuel costs can affect overall transportation expenses.",
      impact: "Higher when fuel prices rise.",
    },
    {
      factor: "Permits & Regulations",
      description:
        "Some states require additional permits for oversized loads.",
      impact: "Higher if special permits are needed.",
    },
    {
      factor: "Traffic Conditions",
      description: "Congestion can increase transit time and fuel usage.",
      impact: "Higher in high-traffic areas.",
    },
    {
      factor: "Weather Conditions",
      description:
        "Severe weather can cause delays and require alternative routes.",
      impact: "Higher in cases of extreme weather.",
    },
    {
      factor: "Insurance Coverage",
      description:
        "Additional insurance for protection against damage or loss.",
      impact: "Higher for comprehensive coverage.",
    },
    {
      factor: "Urgency of Delivery",
      description: "Expedited shipping services come at a premium cost.",
      impact: "Higher for faster delivery.",
    },
  ], []);

  const benefits = useMemo(() => [
    {
      title: "Safety and Avoidance of Damages",
      description:
        "Professional tractor hauling companies employ advanced equipment such as RGN (Removable Gooseneck) and step-deck trailers to haul tractors of any size safely. This minimizes the possibility of damage caused by road obstacles, improper loading, or movement during transit.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Specialized Handling of Heavy Equipment",
      description:
        "Shipping a tractor involves experienced experts who know how to properly distribute weight, secure the tractor, and deal with transportation rules. Professional carriers know how to transport all sizes of lawn tractors and heavy earth-moving equipment.",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: "Adherence to Legal and Permit Requirements",
      description:
        "Shipping oversized or heavy tractors usually requires permits and following state laws. A good tractor shipping service takes care of all legality, ensuring easy delivery without surprise holdups or fines.",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "Cost-Effective and Time-Saving",
      description:
        "Operating a tractor for long distances adds wear and tear while burning fuel and time. Professional tractor transport saves you money in the long term by avoiding unnecessary maintenance expenses and saving valuable time for business or agricultural operations.",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      title: "Door to Door Convenience",
      description:
        "You don't have to think about logistics when you use professional tractor delivery services. The transportation company takes care of everything from pickup to ultimate delivery, and the process becomes hassle-free.",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "Peace of Mind Through Insurance Coverage",
      description:
        "Responsible shipping firms offer insurance coverage to guard your tractor en route. You get compensation in the unlikely situation of damage or accidents.",
      icon: <Shield className="h-8 w-8" />,
    },
  ], []);

  const faqData = useMemo(() => [
    {
      icon: <Clock className="w-5 h-5" />,
      question: "What is the estimated delivery time for tractor transport?",
      answer:
        "Delivery time varies based on distance. For local & short-distance it will take 1 to 3 days, for cross-country shipping 5 to 7 days, for urgent shipment use our expedited shipping service.",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      question: "Can you ship oversized tractors?",
      answer:
        "Yes! We specialize in heavy equipment and oversized tractor transport using step deck and RGN trailers, along with necessary permits for legal transport.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "How do I get a tractor shipping quote?",
      answer:
        "On our website, we have a quote form that you can fill out for a quote estimate. To compute your estimate, we need to know the origin and destination locations, the tractor's model and year, and the date your car will be available. Once all the details are filled out and submitted, you will get our instant quote, and our representative will contact you ASAP. Or call +1 (833) 233-4447 to speak with one of our transport specialists.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      question: "What payment methods do you accept?",
      answer:
        "For tractor shipments, Rapid Auto Shipping takes all major credit cards and any sort of certified payment. We take 10-15% of the amount on the day of the pickup, and the balance is due at delivery, which can be paid to the driver in the form of Cash, Zelle, Venmo, or Certified Check.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Can I track my shipment?",
      answer:
        "Yes! We offer a standard monitoring device to monitor your car in transit. You can monitor your shipment 24/7 using the online tracking function. To monitor your vehicle shipment, please provide us with your tracking information, name, email address, and/or phone number.",
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      question: "Can you transport a tractor that isn't operational?",
      answer:
        "Yes! We transport non-running tractors with a winch-equipped trailer. There is an upcharge for the additional gear and labor. When making reservations online or with our representative on our phone reservation lines, please mark your vehicle as a breakdown or not running.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "Are permits required for shipping oversized tractors?",
      answer:
        "Yes, oversized tractors may require special permits depending on state regulations. Rapid Auto Shipping handles all necessary permits and logistics for hassle-free transport.",
    },
    {
      icon: <Ruler className="w-5 h-5" />,
      question: "How do I know if my tractor qualifies as an oversized load?",
      answer:
        "A tractor is considered oversized if it exceeds 8.5 feet in width, 13.5 feet in height, 53 feet in length (including trailer).",
    },
  ], []);

  return (
    <>
      <Head>
        <title>Nationwide Tractor Transport Service | Tractor Hauling</title>
        <meta
          name="description"
          content="Tractors are a crucial part of agriculture all over the world. With this in mind, our tractor transport service provides the best at an affordable price."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/tractor-transport"
        />
        <meta
          property="og:title"
          content="Nationwide Tractor Transport Service | Tractor Hauling"
        />
        <meta
          property="og:description"
          content="Tractors are a crucial part of agriculture all over the world. With this in mind, our tractor transport service provides the best at an affordable price."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/tractor-transport"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752049345/Nationwide_Tractor_Transport_Service_mrrk6y.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Tractor Transport Service",
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
                "Expert tractor transport services by Rapid Auto Shipping. We specialize in shipping tractors and oversized farm equipment nationwide safely, legally, and on time.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the estimated delivery time for tractor transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Delivery time varies based on distance. For local & short-distance it will take 1 to 3 days, for cross-country shipping 5 to 7 days. For urgent shipment, use our expedited shipping service.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can you ship oversized tractors?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! We specialize in heavy equipment and oversized tractor transport using step deck and RGN trailers, along with necessary permits for legal transport.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I get a tractor shipping quote?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "On our website, fill out the quote form with the origin, destination, tractor's model and year, and available date. You'll receive an instant quote and our representative will contact you ASAP. Or call +1 (833) 233-4447.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What payment methods do you accept?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We accept all major credit cards and certified payments. We take 10-15% at pickup, and the balance is due at delivery, payable to the driver via Cash, Zelle, Venmo, or Certified Check.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I track my shipment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! We offer a standard monitoring device. You can track your shipment 24/7 using our online tracking feature by providing your tracking information.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can you transport a tractor that isn't operational?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! We transport non-running tractors with a winch-equipped trailer. There's an upcharge for the extra equipment and labor. Please mark your tractor as not running when booking.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are permits required for shipping oversized tractors?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, oversized tractors may require special permits depending on state regulations. Rapid Auto Shipping handles all permits and logistics.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I know if my tractor qualifies as an oversized load?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A tractor is considered oversized if it exceeds 8.5 feet in width, 13.5 feet in height, or 53 feet in length (including trailer).",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/services/tractor-transport",
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
                  name: "Services",
                  item: "https://rapidautoshipping.com/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "tractor-transport",
                  item: "https://rapidautoshipping.com/services/tractor-transport",
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
            {/* Background Image - Hidden on mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1752049345/Nationwide_Tractor_Transport_Service_mrrk6y.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ aspectRatio: "2/1" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#001933]/50 via-[#001933]/20 to-[#001933]/40"></div>
              <div className="absolute inset-0 bg-[#003366]/10"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

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

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-20 px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 max-w-3xl rounded-lg p-3 sm:p-4 md:bg-[#001933]/40">
                  {/* H1 - Black on mobile, White on desktop - Optimized for LCP */}
                  <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    Nationwide Tractor Transport{" "}
                    <span className="text-[#ff5722]">Service</span>
                  </h1>

                  {/* Paragraph - Hidden on mobile, visible on desktop */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Rapid Auto Shipping is an expert in tractor transport
                    service, and we offer trusted and effective shipping tractor
                    solutions for any tractor type, including agricultural
                    tractors and utility tractors as well as heavy-duty
                    industrial equipment. We cover every step of the shipping
                    process with our high level of expertise and commitment to
                    service, guaranteeing that your equipment is delivered
                    safely and promptly.
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
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Why Tractor Transport Service Matters | Rapid Auto
                        Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Tractors are farming equipment and are not vehicles that
                      can be driven long distances. Transporting a tractor over
                      long distances requires specialty equipment and expertise.
                      A good tractor transport service guarantees your heavy
                      machinery is transported safely, efficiently, and on
                      schedule without undue wear and tear. At Rapid Auto
                      Shipping, we offer flatbed trailers, heavy trucks, and
                      experienced drivers to transport tractors of every size.
                      Whether you are moving farm machinery, construction
                      equipment, or industrial tractors, our specialized
                      transport solutions ensure a smooth experience. With
                      proper logistics, safety precautions, and professional
                      handling, we ensure your tractor reaches its destination
                      in perfect condition.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_600,q_auto,f_auto/v1752049303/Nationwide_Tractor_Transport_Service_1_vj6efy.webp"
                        alt="Shipping Service - Professional Transport"
                        width={600}
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

          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Truck className="h-12 w-12 text-[#ff5722] mr-3" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    How to Ship a Tractor
                  </h2>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  A Step by Step Guide for Safe Transport
                </h2>
                <p className="text-lg max-w-3xl mx-auto">
                  Our tractor hauling process is easy and hassle-free. To book
                  your tractor transport service, follow simple steps:
                </p>
              </div>
            </header>

            {/* Step-by-Step Guide */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {shippingSteps.map((step, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-[#ff5722] rounded-full p-3 mr-4 text-white">
                          {step.icon}
                        </div>
                        <div className="bg-[#003366] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          <span className="text-white font-bold">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#003366]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Types of Tractor Hauling Services */}
            <section className="py-8 bg-[#003366] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Types of Tractor Hauling Services | Rapid Auto Shipping
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-lg max-w-4xl mx-auto">
                    Here at Rapid Auto Shipping, we offer expert tractor hauling
                    services that cater to farmers, construction firms, and
                    businesses looking for trusted tractor hauling solutions. If
                    you are shipping a tractor within the state or want to make
                    tractor delivery nationwide, our team of professionals
                    ensures that the transport process is smooth and safe. Here
                    are the types of tractor shipping services we provide:
                  </p>
                </div>
              </div>
            </section>

            {/* Service Types */}
            <section className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {tractorServices.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-[#ff5722] rounded-full p-3 mr-4 text-white">
                          {service.icon}
                        </div>
                        <div className="bg-[#003366] rounded-full w-8 h-8 flex items-center justify-center mr-3 text-white font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-bold text-[#003366]">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center mb-2"
                          >
                            <div className="bg-[#ff5722] rounded-full w-2 h-2 mr-3"></div>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        {service.conclusion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Truck className="h-12 w-12 text-[#ff5722] mr-3" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Types of Tractors and Equipment We Transport
                  </h2>
                </div>
                <p className="text-lg max-w-4xl mx-auto">
                  At Rapid Auto Shipping, we specialize in tractor transport and
                  tractor hauls for any type of agricultural, industrial, and
                  construction machinery. Whether you need to ship tractor coast
                  to coast or need tractor shipping for oversized machinery, we
                  transport it safely and reliably.
                </p>
              </div>
            </header>

            {/* Tractor Types Section */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Equipment Categories We Transport
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Below is a summary of the categories of tractors and
                    equipment that we transport along with some common models:
                  </p>
                </div>

                <div className="max-w-7xl mx-auto">
                  {/* Desktop Table */}
                  <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-[#003366] text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Type of Tractor/Equipment
                          </th>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Description
                          </th>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Popular Models
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {tractorTypes.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="bg-[#ff5722] rounded-full p-2 mr-3 text-white">
                                  {item.icon}
                                </div>
                                <span className="font-bold text-[#003366]">
                                  {item.type}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {item.description}
                            </td>
                            <td className="px-6 py-4 text-gray-600 text-sm">
                              {item.models}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden space-y-4">
                    {tractorTypes.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-[#ff5722]"
                      >
                        <div className="flex items-center mb-3">
                          <div className="bg-[#ff5722] rounded-full p-2 mr-3 text-white">
                            {item.icon}
                          </div>
                          <h3 className="font-bold text-[#003366] text-lg">
                            {item.type}
                          </h3>
                        </div>
                        <p className="text-gray-700 text-sm mb-3">
                          {item.description}
                        </p>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <h4 className="font-semibold text-[#003366] text-sm mb-1">
                            Popular Models:
                          </h4>
                          <p className="text-gray-600 text-sm">{item.models}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-8 max-w-4xl mx-auto">
                  <p className="text-gray-600 leading-relaxed">
                    Regardless of the weight or size of your tractor, we offer
                    professional tractor transport service to provide secure and
                    timely transportation. If you want a quote for specialized
                    tractor shipping, we are happy to assist you with how to
                    ship a tractor.
                  </p>
                </div>
              </div>
            </section>

            {/* Shipping Costs Section */}
            <section className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Tractor Shipping Costs: What to Expect
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-gray-600 max-w-4xl mx-auto">
                    At Rapid Auto Shipping, we offer transparent and competitive
                    tractor shipping and tractor hauling rates based on
                    transport type, equipment size, and distance. Here is a
                    general estimate of rates:
                  </p>
                </div>

                <div className="max-w-7xl mx-auto">
                  {/* Desktop Table */}
                  <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-[#ff5722] text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Distance
                          </th>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {shippingCosts.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-700 font-medium">
                              {item.distance}
                            </td>
                            <td className="px-6 py-4 text-[#ff5722] font-bold text-lg">
                              {item.rate}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden space-y-4">
                    {shippingCosts.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-[#ff5722]"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-[#003366] text-sm mb-1">
                              Distance
                            </h3>
                            <p className="text-gray-700 font-medium text-sm">
                              {item.distance}
                            </p>
                          </div>
                          <div className="text-right">
                            <h3 className="font-semibold text-[#003366] text-sm mb-1">
                              Rate
                            </h3>
                            <p className="text-[#ff5722] font-bold text-lg">
                              {item.rate}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Cost Factors Section */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Essential Factors to Consider for Tractor Shipping
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-gray-600 max-w-4xl mx-auto">
                    Various elements could influence the final cost, including
                    tractor size and weight, fuel charges, shipping preference,
                    and seasonal demand. Here is the list of costs affecting
                    factors, and how it impacts the shipping cost:
                  </p>
                </div>

                <div className="max-w-7xl mx-auto">
                  {/* Desktop Table */}
                  <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-[#003366] text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Factor
                          </th>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Description
                          </th>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Impact on Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {costFactors.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-[#003366] font-bold">
                              {item.factor}
                            </td>
                            <td className="px-6 py-4 text-gray-700 text-sm">
                              {item.description}
                            </td>
                            <td className="px-6 py-4 text-[#ff5722] font-medium text-sm">
                              {item.impact}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden space-y-4">
                    {costFactors.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-[#ff5722]"
                      >
                        <h3 className="font-bold text-[#003366] text-lg mb-2">
                          {item.factor}
                        </h3>
                        <p className="text-gray-700 text-sm mb-3">
                          {item.description}
                        </p>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <h4 className="font-semibold text-[#003366] text-sm mb-1">
                            Impact on Cost:
                          </h4>
                          <p className="text-[#ff5722] font-medium text-sm">
                            {item.impact}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Benefits of Professional Tractor Shipping
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-gray-600 max-w-4xl mx-auto">
                    Hiring a professional tractor shipping company guarantees a
                    hassle-free and smooth transport process. Here's why it is
                    the optimal option:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-[#ff5722] rounded-full p-3 mr-4 text-white">
                          {benefit.icon}
                        </div>
                        <div className="bg-[#003366] rounded-full w-8 h-8 flex items-center justify-center mr-3 text-white font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-bold text-[#003366]">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    By engaging a professional tractor shipping company, you can
                    concentrate on your business knowing your equipment has
                    arrived safely and on time.
                  </p>
                </div>
              </div>
            </section>

            {/* Company Section */}
            <section className="py-8 bg-[#003366] text-white mb-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Rapid Auto Shipping: Your Trusted Tractor Transport Service
                  Provider
                </h2>
                <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-6"></div>
                <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                  When shipping a tractor, selecting a professional and
                  experienced transportation company is paramount. At Rapid Auto
                  Shipping, we have expertise in shipping tractors of every
                  size, ranging from small utility tractors to heavy
                  agricultural and construction equipment. Our focus on safety,
                  efficiency, and customer satisfaction makes us a reputable
                  tractor hauling company nationwide.
                </p>
              </div>
            </section>
          </div>

          <StatsSection />

          <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Why Rapid Auto Shipping for Tractor Transport?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Heavy Equipment Shipping Expertise:</b> Our skilled
                      team, experienced in shipping tractors for more than a
                      decade, makes sure of damage-free and hassle-free tractor
                      delivery. We know the logistics and intricacies of
                      transporting massive, heavy equipment nationwide. <br />{" "}
                      <br />
                      <b>Fully Insured & FMCSA-Approved Carriers:</b> Your
                      tractor is a major investment, and we treat it as such. We
                      have agreements with fully covered and FMCSA-approved
                      carriers to ensure secure and legal conveyance.
                      <br /> <br />
                      <b>Transparent Pricing & No Hidden Fees:</b> We offer
                      honest, upfront pricing with no hidden fees. We have
                      competitive rates for local or long-distance shipping a
                      tractor to meet your needs. <br /> <br />
                      <b>Custom Shipping Solutions:</b> Each tractor and its
                      shipping needs are unique. Hence, we provide custom
                      transport solutions, such as open and enclosed trailers,
                      step deck and RGN trailers, and door to door delivery
                      services.
                      <br /> <br />
                      At Rapid Auto Shipping, we take the stress out of tractor
                      transport service with custom solutions, careful handling,
                      and trusted logistics. Don't know how to ship a tractor?
                      Get in touch with us now for a free quote and enjoy expert
                      tractor shipping solutions that are fit for you!
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1752049345/Nationwide_Tractor_Transport_Service_mrrk6y.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={700}
                        loading="lazy"
                        className="w-full h-[700px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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