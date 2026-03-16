"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
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
  Star,
  Wrench,
  CheckCircle,
  Eye,
  Ruler,
  Award,
  MapPin,
  Calendar,
  Clock,
  Shield,
  Phone,
  Users,
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

  const faqData = useMemo(
    () => [
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "How much does fifth-wheel transportation cost?",
        answer:
          "On average, shipping under 100 miles will cost about $3.32 per mile, while those under 1,000 miles will cost about $1.05 per mile. Although the fifth-wheel transportation cost depends on various factors, so it's best to get our free tailored quote.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "How long does delivery take?",
        answer:
          "The usual timeframe for shipping a fifth-wheel RV is 3 to 5 business days. However, depending on route weather conditions and other factors, it can be delayed.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Do you offer insurance coverage?",
        answer:
          "Yes, all vehicles are covered by Damage-Free Carrier Insurance while in transit. We also require our carriers to provide supplemental insurance, which means you'll have added protection in the unlikely event of damage or an accident.",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        question: "Can you transport oversized fifth wheels?",
        answer:
          "As per regulation, our trailer transport services cater to all dimensions, including oversize load transportation. Using specialist tools and professional skills, we are able to handle large and overweight loads, guaranteeing safe and compliant transportation.",
      },
    ],
    [],
  );

  return (
    <>
      <Head>
        <title>Fifth Wheel Transport Services | Safe Towing & Low Rates</title>
        <meta
          name="description"
          content="Rapid Auto Shipping provides specialized fifth wheel transport nationwide. We manage your insured, door-to-door move with professional trucks and total care."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/fifth-wheel-transport"
        />
        <meta
          property="og:title"
          content="Fifth Wheel Transport Services | Safe Towing & Low Rates"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping provides specialized fifth wheel transport nationwide. We manage your insured, door-to-door move with professional trucks and total care."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/fifth-wheel-transport"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1751026689/fifith_wheel_aipdpt.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Fifth Wheel RV Transport",
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
                sameAs: [
                  "https://www.facebook.com/rapidautoshipping",
                  "https://x.com/rapidautoshipping",
                  "https://www.instagram.com/rapidautoshipping",
                  "https://www.youtube.com/rapidautoshipping",
                  "https://www.pinterest.com/rapidautoshipping",
                ],
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
                "Rapid Auto Shipping offers hassle-free, safe fifth wheel RV transport nationwide, including oversize load handling, expedited delivery, door-to-door pickup/drop-off, real-time GPS tracking, and full insurance.",
              url: "https://rapidautoshipping.com/services/fifth-wheel-transport",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is a Fifth Wheel RV and can you ship it?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A Fifth Wheel RV is a large trailer that connects to a truck bed via a special hitch. Yes, we specialize in shipping fifth wheels across the country.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you offer door-to-door transport for Fifth Wheel RVs?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we provide convenient door-to-door fifth wheel RV transport for most locations, subject to accessibility and local restrictions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is insurance included in Fifth Wheel RV shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely. All shipments include full insurance coverage to protect your fifth wheel throughout the journey.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to ship a Fifth Wheel RV?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Shipping times vary by distance and location, but typically range between 5 to 14 business days. Expedited options are available.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I request a quote for Fifth Wheel transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You can fill out our online quote form or call us directly to receive a detailed estimate within 24 hours.",
                    },
                  },
                ],
              },
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
                  name: "Fifth Wheel Transport",
                  item: "https://rapidautoshipping.com/services/fifth-wheel-transport",
                },
              ],
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          {/* Hero Section - Optimized for Mobile and Page Speed */}
          <section className="relative py-8 flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on Mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751026689/fifith_wheel_aipdpt.webp"
                alt="Professional Auto Transport Service"
                fill
                quality={75}
                priority={true}
                className="object-cover"
                sizes="100vw"
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

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 max-w-3xl rounded-lg p-3 sm:p-4 md:bg-[#001933]/40">
                  {/* H1 - Black on mobile, White on desktop - Optimized for LCP */}
                  <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    Fifth Wheel Transportation{" "}
                    <span className="text-[#ff5722]">Service</span>
                  </h1>

                  {/* Paragraph - Hidden on mobile, visible on desktop */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Rapid Auto Shipping is the leading RV transportation company
                    engaged in fifth wheel Auto Shipping. Our fifth wheel
                    transportation service offers a hassle-free and safe
                    relocation of your RV, utilizing advanced technology
                    equipment and skilled drivers. As per regulation, our
                    trailer transport services cater to all dimensions,
                    including oversized load transportation. Use our fifth wheel
                    movers service for safe, hassle-free delivery.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto relative z-20">
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
                        Expert Fifth Wheel Transportation Service
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      We provide fifth wheel transportation services for
                      businesses and individuals across the country. With
                      extensive experience, we ship fifth wheels of any size
                      securely and efficiently. Customer satisfaction is our top
                      priority, with solutions customized to your requirements.
                      Our skilled drivers and equipment ensure timely, safe
                      delivery for city or interstate shipping of your RV. As an
                      established name in the industry, we provide safety,
                      compliance, and open communication.
                    </p>
                    <p className="text-xl text-black leading-relaxed text-justify font-bold">
                      The most frequent types of fifth wheels we transport :
                    </p>

                    <ul className="text-lg text-gray-700 leading-relaxed text-justify">
                      <li>Fixed fifth wheel</li>
                      <li>Sliding fifth wheel</li>
                      <li>Forest River Cedar Creek 345IK</li>
                      <li>Heartland Bighorn Traveler 32 GK</li>
                      <li>Keystone Sprinter</li>
                      <li>Vanleigh Vilano 370GB</li>
                      <li>Grand Design Solitude 310GK R</li>
                    </ul>

                    <p className="text-xl text-black leading-relaxed text-left font-bold mb-10">
                      Select Rapid Auto Shipping for secure shipping of fifth
                      wheels and experience the convenience of professional
                      service.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751026953/493669543_ghwm5l.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={600}
                        className="w-full h-[600px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen" style={{ backgroundColor: "#f8fafc" }}>
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{ backgroundColor: "#003366" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-90"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div
                      className="p-4 rounded-full"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Truck className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Fifth Wheel RV Transport
                  </h2>
                  <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                    Professional, reliable, and secure transportation for your
                    fifth wheel RV
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Why Choose Rapid Auto Shipping for Fifth Wheel RV Transport
                  </h3>
                  <div
                    className="w-24 h-1 mx-auto"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 mb-12">
                  <p>
                    We ensure that fifth wheel RV transportation is simple and
                    hassle-free. Our team of skilled and experienced drivers
                    ensures safe and secure travel from start to finish. Your RV
                    is valued, and we offer extensive insurance coverage to
                    ensure your peace of mind.
                  </p>
                  <p>
                    Our philosophy is open pricing without hidden costs. Free
                    quotes plus our competitive rates guarantee the best value.
                    For your convenience, we offer door-to-door delivery. We
                    pick up your RV from your chosen site and bring it to your
                    destination. Your RV always arrives on time because of our
                    dedication to dependable and prompt service.
                  </p>
                  <p>
                    Our great testimonials mirror our commitment to client
                    happiness. Choose us for professionalism, dependability, and
                    first-rate service. Contact us right now for a free price
                    and hassle-free fifth wheel RV transportation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{ color: "#003366" }}
                    >
                      Insurance Coverage
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Extensive coverage for peace of mind
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{ color: "#003366" }}
                    >
                      Transparent Pricing
                    </h4>
                    <p className="text-gray-600 text-sm">
                      No hidden costs, competitive rates
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{ color: "#003366" }}
                    >
                      Door-to-Door
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Convenient pickup and delivery
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{ color: "#003366" }}
                    >
                      On-Time Delivery
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Dependable and prompt service
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="py-20" style={{ backgroundColor: "#f1f5f9" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Our Fifth Wheel Transportation Services
                  </h3>
                  <div
                    className="w-24 h-1 mx-auto"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                    We offer a variety of fifth-wheel transportation options to
                    satisfy your particular needs. Whether you are relocating
                    for personal reasons or need business travel solutions, we
                    got you covered.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start mb-6">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4
                          className="text-xl font-semibold mb-3"
                          style={{ color: "#003366" }}
                        >
                          Residential and Commercial Fifth Wheel Transport
                        </h4>
                        <p className="text-gray-600">
                          Our areas of expertise are residential and business
                          fifth wheel transportation, guaranteeing quick and
                          safe delivery to your chosen site. From pick-up to
                          drop-off, our staff manages every aspect to provide
                          you peace of mind throughout the procedure.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start mb-6">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4
                          className="text-xl font-semibold mb-3"
                          style={{ color: "#003366" }}
                        >
                          Long-Distance and Cross-Country Hauling
                        </h4>
                        <p className="text-gray-600">
                          We provide long-distance and cross-country haulage for
                          people traveling across states or perhaps coast to
                          coast. Our dependable services make it simple to move
                          your fifth wheel RV any distance around the US.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start mb-6">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <Truck className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4
                          className="text-xl font-semibold mb-3"
                          style={{ color: "#003366" }}
                        >
                          Oversize Load Transportation
                        </h4>
                        <p className="text-gray-600">
                          Using specialist tools and professional skills, we are
                          also able to handle large and overweight loads,
                          guaranteeing safe and compliant transportation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start mb-6">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4
                          className="text-xl font-semibold mb-3"
                          style={{ color: "#003366" }}
                        >
                          Expedited Delivery Options
                        </h4>
                        <p className="text-gray-600">
                          If you're pressed for time, our expedited shipping
                          choices offer speedier delivery without sacrificing
                          dependability or safety. Our first concern is your
                          demands, so we guarantee flawless and stress-free
                          transportation every time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    How Our Fifth Wheel Transport Process Works
                  </h3>
                  <div
                    className="w-24 h-1 mx-auto"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-lg text-gray-600 mt-6">
                    We simplify the RV shipping process for you:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="relative mb-8">
                      <div
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: "#003366" }}
                      >
                        <Calculator className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h4
                      className="text-xl font-semibold mb-4"
                      style={{ color: "#003366" }}
                    >
                      Request Quote
                    </h4>
                    <p className="text-gray-600">
                      Use our shipping cost calculator to get a fast online auto
                      transport quotation, or ask for a custom auto transport
                      quote for unusual vehicles like boats, RVs, and heavy
                      machinery.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative mb-8">
                      <div
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: "#003366" }}
                      >
                        <Phone className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h4
                      className="text-xl font-semibold mb-4"
                      style={{ color: "#003366" }}
                    >
                      Schedule Your Shipment
                    </h4>
                    <p className="text-gray-600">
                      You can call and speak to one of our knowledgeable
                      sransport specialists or book online using the link you
                      will receive in your email. They will explain the
                      procedure and answer your questions.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative mb-8">
                      <div
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: "#003366" }}
                      >
                        <Eye className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h4
                      className="text-xl font-semibold mb-4"
                      style={{ color: "#003366" }}
                    >
                      Pickup & Tracking
                    </h4>
                    <p className="text-gray-600">
                      Once a driver has been assigned to the transport, we will
                      inform you of their identity and when they will collect
                      the vehicle. Along the way, we will provide you with
                      sporadic updates, and you can get in touch with us at any
                      moment.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="relative mb-8">
                      <div
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: "#003366" }}
                      >
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h4
                      className="text-xl font-semibold mb-4"
                      style={{ color: "#003366" }}
                    >
                      Delivery & Payment
                    </h4>
                    <p className="text-gray-600">
                      When your RV is delivered, you and the driver will inspect
                      it. At that time, you will pay the driver the remaining
                      amount for the transport. Then, to make sure everything
                      went as planned, we will contact you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="min-h-screen mt-20"
            style={{ backgroundColor: "#f8fafc" }}
          >
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{ backgroundColor: "#003366" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-90"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div
                      className="p-4 rounded-full"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <DollarSign className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Understanding the Cost of Fifth Wheel Auto Shipping
                  </h2>
                  <div
                    className="w-32 h-1 mx-auto"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Cost Overview Section */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Given the wide range of variables that might affect the
                    cost, it can be challenging to provide an exact estimate for
                    the fifth wheel movers service. On average, shipping under
                    100 miles will cost about{" "}
                    <span className="font-bold" style={{ color: "#ff5722" }}>
                      $3.32 per mile
                    </span>
                    , while those under 1,000 miles will cost about{" "}
                    <span className="font-bold" style={{ color: "#ff5722" }}>
                      $1.05 per mile
                    </span>
                    .
                  </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <span className="text-white font-bold text-lg">
                        &lt;100
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "#003366" }}
                    >
                      Under 100 Miles
                    </h3>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: "#ff5722" }}
                    >
                      $3.32
                    </p>
                    <p className="text-gray-600">per mile</p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <span className="text-white font-bold text-lg">
                        &lt;1K
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "#003366" }}
                    >
                      Under 1,000 Miles
                    </h3>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: "#ff5722" }}
                    >
                      $1.05
                    </p>
                    <p className="text-gray-600">per mile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Factors Section */}
            <div className="py-20" style={{ backgroundColor: "#f1f5f9" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Factors Affecting the Cost of RV Auto Shipping
                  </h3>
                  <div
                    className="w-24 h-1 mx-auto"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
                      <div className="flex items-center mb-4 md:mb-0 md:mr-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <Ruler className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <h4
                          className="text-xl font-semibold mb-3"
                          style={{ color: "#003366" }}
                        >
                          RV Dimensions:
                        </h4>
                        <p className="text-gray-600">
                          The size of your RV trailer will greatly impact the
                          cost because it will influence the types of
                          transportation you can consider. A larger RV might not
                          be towed at all or require a special flatbed or towing
                          tools.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
                      <div className="flex items-center mb-4 md:mb-0 md:mr-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <h4
                          className="text-xl font-semibold mb-3"
                          style={{ color: "#003366" }}
                        >
                          Distance:
                        </h4>
                        <p className="text-gray-600">
                          The shipping cost of an RV mainly depends on the cost
                          associated with commuting the total distance between
                          shipping locations. The more distance that needs to be
                          covered, the higher the final price will be.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
                      <div className="flex items-center mb-4 md:mb-0 md:mr-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <Truck className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <h4
                          className="text-xl font-semibold mb-3"
                          style={{ color: "#003366" }}
                        >
                          Type of RV Transport Service:
                        </h4>
                        <p className="text-gray-600">
                          The cost of fifth wheel hauling services can vary
                          depending on the delivery location and shipping
                          timeline. Door-to-door shipping is the most convenient
                          service, but expedited delivery will also cost more.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
                      <div className="flex items-center mb-4 md:mb-0 md:mr-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <Calendar className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <h4
                          className="text-xl font-semibold mb-3"
                          style={{ color: "#003366" }}
                        >
                          The Season:
                        </h4>
                        <p className="text-gray-600">
                          Unfortunately, seasonality might have an impact on how
                          much your 5th wheel moving services will cost. Ice,
                          wind, and snow can close down or make some routes
                          unsafe, necessitating the use of a long detour and
                          increasing the cost of your quote.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips and Considerations Section */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Tips to Save Money and Important Considerations for RV Auto
                    Transport in the US
                  </h3>
                  <div
                    className="w-24 h-1 mx-auto"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-lg text-gray-600 mt-6 max-w-4xl mx-auto">
                    Although RV shipping might be a large outlay, proper
                    planning, and wise decisions will help you to save money and
                    guarantee seamless travel. Here are a few insightful ideas
                    and important features to recall:
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Tips to Save Money */}
                  <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8">
                    <div className="text-center mb-8">
                      <div
                        className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <DollarSign className="h-8 w-8 text-white" />
                      </div>
                      <h4
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: "#003366" }}
                      >
                        Tips to Save Money on RV Auto Transport
                      </h4>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div>
                          <h5
                            className="font-semibold mb-2"
                            style={{ color: "#003366" }}
                          >
                            Book in Advance:
                          </h5>
                          <p className="text-gray-600">
                            Making good prior plans for your RV shipment will
                            help you guarantee better pricing and more flexible
                            scheduling possibilities.The restricted availability
                            of last-minute bookings can make them more costly.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div>
                          <h5
                            className="font-semibold mb-2"
                            style={{ color: "#003366" }}
                          >
                            Be Flexible with Pickup and Delivery Dates:
                          </h5>
                          <p className="text-gray-600">
                            Discount prices could help you if you could be
                            adaptable with your dates. For off-peak hours, an RV
                            transport company sometimes has reduced rates.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div>
                          <h5
                            className="font-semibold mb-2"
                            style={{ color: "#003366" }}
                          >
                            Remove Personal Items and Accessories:
                          </h5>
                          <p className="text-gray-600">
                            Eliminating personal items and removable attachments
                            from your RV will help to reduce its weight, thus
                            saving shipping costs. It also lessens the
                            possibility of damage or theft on the route.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Points to Remember */}
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
                    <div className="text-center mb-8">
                      <div
                        className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h4
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: "#003366" }}
                      >
                        Points to Remember When Shipping Your RV in the US
                      </h4>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div>
                          <h5
                            className="font-semibold mb-2"
                            style={{ color: "#003366" }}
                          >
                            Documentation:
                          </h5>
                          <p className="text-gray-600">
                            If you're selling your RV, you might need to provide
                            some documentation. The shipment cannot proceed
                            without them, so we advise getting them in order as
                            soon as possible.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div>
                          <h5
                            className="font-semibold mb-2"
                            style={{ color: "#003366" }}
                          >
                            Cleaning up:
                          </h5>
                          <p className="text-gray-600">
                            A wonderful approach to assess your RV's condition
                            and make note of any issues before delivery, such as
                            pre-existing damage, is to clean it before the
                            trailer transport services pick it up. Additionally,
                            check the fluid levels in your RV and secure any
                            loose electrical components, windows, and locks.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div>
                          <h5
                            className="font-semibold mb-2"
                            style={{ color: "#003366" }}
                          >
                            Operating Condition:
                          </h5>
                          <p className="text-gray-600">
                            Before it is picked up, you should inspect your RV
                            trailer briefly to ensure everything is functioning
                            correctly.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div>
                          <h5
                            className="font-semibold mb-2"
                            style={{ color: "#003366" }}
                          >
                            Photography as Proof:
                          </h5>
                          <p className="text-gray-600">
                            It is strongly advised to capture everything with
                            images. Time-stamped images are concrete proof of a
                            vehicle's state before pick-up and will be highly
                            helpful in any disputes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-16 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg p-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Following these guidelines and being aware of these things
                      will help you to save money and guarantee safe, quick RV
                      motor transportation throughout the United States.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen" style={{ backgroundColor: "#f8fafc" }}>
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{ backgroundColor: "#003366" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-90"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div
                      className="p-4 rounded-full"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Star className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Advantages of our fifth wheel Auto Transportation
                  </h2>
                  <div
                    className="w-32 h-1 mx-auto"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Introduction Section */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Selecting our fifth wheel movers service guarantees a
                    flawless and hassle-free experience and many benefits. Some
                    important advantages are:
                  </p>
                </div>
              </div>
            </div>

            {/* Advantages Section */}
            <div className="py-20" style={{ backgroundColor: "#f1f5f9" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-16">
                  {/* Preventing Vehicle Wear and Tension */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <div className="flex items-center mb-6 md:mb-0 md:mr-8">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Wrench className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <h3
                          className="text-2xl md:text-3xl font-bold mb-4"
                          style={{ color: "#003366" }}
                        >
                          Preventing Vehicle Wear and Tension
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Pulling a fifth wheel can seriously strain your car,
                          causing early wear and expensive repairs. We employ
                          our skilled fifth wheel transportation experts to
                          protect your vehicle from unnecessary mileage and
                          mechanical strain. This increases the lifetime of your
                          vehicle and maintains its market value.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Saving Time and Minimizing Stress */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <div className="flex items-center mb-6 md:mb-0 md:mr-8">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Clock className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <h3
                          className="text-2xl md:text-3xl font-bold mb-4"
                          style={{ color: "#003366" }}
                        >
                          Saving Time and Minimizing Stress
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Moving a fifth wheel calls for thorough preparation,
                          extensive travel time, and respect for safety rules.
                          Our fifth wheel hauling services will help you avoid
                          these complications. From pick-up to delivery, we
                          manage all logistics, therefore providing you peace of
                          mind and the opportunity to concentrate on more
                          pressing issues.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ensuring Safety and Compliance */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <div className="flex items-center mb-6 md:mb-0 md:mr-8">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Shield className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <h3
                          className="text-2xl md:text-3xl font-bold mb-4"
                          style={{ color: "#003366" }}
                        >
                          Ensuring Safety and Compliance with Regulations
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Fifth wheel travel calls for legal limitations and
                          strict safety standards. Our knowledgeable drivers
                          guarantee safe and legal transportation since they are
                          totally trained in following all state and federal
                          rules. We also offer comprehensive insurance,
                          protecting your investment throughout the journey.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Access to Expertise and Specialized Equipment */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <div className="flex items-center mb-6 md:mb-0 md:mr-8">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Award className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <h3
                          className="text-2xl md:text-3xl font-bold mb-4"
                          style={{ color: "#003366" }}
                        >
                          Access to Expertise and Specialized Equipment
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Moving a fifth wheel requires both experienced
                          handling and special tools. Our staff guarantees safe
                          and quick transportation using professional towing
                          systems, especially for fifth wheels. Years of
                          expertise and industry understanding enable us to
                          ensure excellent service and dependable delivery every
                          time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Summary Section */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  <div className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-50 to-white">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Wrench className="h-8 w-8 text-white" />
                    </div>
                    <h4
                      className="text-lg font-semibold mb-2"
                      style={{ color: "#003366" }}
                    >
                      Vehicle Protection
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Prevent wear and maintain value
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-50 to-white">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h4
                      className="text-lg font-semibold mb-2"
                      style={{ color: "#003366" }}
                    >
                      Time Saving
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Focus on more pressing issues
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-50 to-white">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h4
                      className="text-lg font-semibold mb-2"
                      style={{ color: "#003366" }}
                    >
                      Safety & Compliance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Legal and insured transport
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-50 to-white">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h4
                      className="text-lg font-semibold mb-2"
                      style={{ color: "#003366" }}
                    >
                      Professional Expertise
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Specialized equipment & experience
                    </p>
                  </div>
                </div>

                <div className="text-center max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg p-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Selecting our fifth wheel auto transportation service will
                      help you avoid stress and move quickly, benefiting from
                      convenience, safety, and knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-20" style={{ backgroundColor: "#003366" }}>
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Experience These Advantages Today
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Choose our professional fifth wheel transportation service for
                  a flawless and hassle-free experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                    <button
                      className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#ff5722", color: "white" }}
                    >
                      <Star className="h-5 w-5" />
                      Get Started Now
                    </button>
                  </Link>
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
