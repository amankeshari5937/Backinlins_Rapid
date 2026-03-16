"use client";

import React, { useState, useMemo, useCallback } from "react";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import StatsSection from "@/components/CommonComponents/StatsSection";
import Image from "next/image";
import {
  Truck,
  Calculator,
  Plus,
  Minus,
  Car,
  DollarSign,
  Star,
  FileText,
  CheckCircle,
  MapPin,
  Shield,
  Phone,
  Target,
  Settings,
  Ruler,
  Route,
  Users,
  Lightbulb,
  AlertTriangle,
  Lock,
  Headphones,
  Crown,
  Award,
  Clock,
  Search,
} from "lucide-react";
import Link from "next/link";

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

  const features = useMemo(
    () => [
      {
        icon: <CheckCircle className="w-6 h-6" />,
        title: "Right Handling & Equipment",
        description:
          "Forklifts are heavy and need the correct trailer and loading methods to avoid damage during transport. Our staff takes care of correct loading, securing, and unloading for a trouble-free experience.",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Regulatory Compliance",
        description:
          "Oversized and overweight equipment transport needs to be compliant with state and federal transportation legislation. We take care of all the logistics, permits, and route planning to ensure a smooth forklift shipping experience.",
      },
      {
        icon: <Truck className="w-6 h-6" />,
        title: "Safe & Secure Delivery",
        description:
          "Regardless of whether you require local or distant forklift transportation, our experienced drivers and dedicated carriers provide safe and timely delivery to your location.",
      },
      {
        icon: <DollarSign className="w-6 h-6" />,
        title: "Cost-Effective Solutions",
        description:
          "Having a professional forklift transport company handle the job can be cost-effective in contrast to renting out specialized trailers and organizing transport independently. We provide competitive rates designed to meet your individual requirements.",
      },
    ],
    []
  );

  const costFactors = useMemo(
    () => [
      {
        icon: <DollarSign className="w-6 h-6" />,
        title: "Forklift Size:",
        description:
          "There are several different sizes of forklifts. It will probably cost you more if you have a really large forklift, and vice versa.",
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "Distance:",
        description:
          "The longer the destination, the costlier it is to ship the forklift.",
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "Location & Routes:",
        description:
          "Shipping a forklift in rural or remote areas will likely cost more compared to metropolitan cities.",
      },
      {
        icon: <Truck className="w-6 h-6" />,
        title: "Transportation Method:",
        description:
          "Open trailers and enclosed trailers also cost differently. The open trailer method is cheaper, and the enclosed trailer method is costly due to extra protection and handling.",
      },
    ],
    []
  );

  const forkliftTypes = useMemo(
    () => [
      {
        icon: <Truck className="w-8 h-8" />,
        title: "Construction Forklift Transportation:",
        description:
          "Telehandler and rough-terrain forklifts are the two main forklifts used on construction sites. Large attachments are available on rough-terrain forklifts, whereas telehandlers have telescoping booms.",
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Warehouse Forklift Transportation:",
        description:
          "There are so many different kinds of warehouse forklifts, including low-lift, stacker, picker, reach-trucks, and side-loaders. Inquire with your transport representative about finding room for your single warehouse forklift as partial cargo.",
      },
      {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Electric Forklifts Transportation:",
        description:
          "Although 3-wheel electric forklifts and 4-wheel electric forklifts are similar in many ways, 3-wheel electric forklifts have several unique qualities that make them better suited for specific duties. For example, 3-wheel electric forklifts have a smaller turning radius than four-wheel electric forklifts, making them better suited for tighter locations.",
      },
    ],
    []
  );

  const trailerTypes = useMemo(
    () => [
      {
        icon: <Truck className="w-10 h-10" />,
        title: "RGN Trailers",
        description:
          "RGN trailers are only necessary for transporting the largest construction telehandlers. On a step deck, even your rough-terrain forklift should fit.",
      },
      {
        icon: <Shield className="w-10 h-10" />,
        title: "Step Trailer",
        description:
          "The standard trailer is used to transport forklifts during construction. On the upper deck, smaller warehouse forklifts can be carried partially.",
      },
      {
        icon: <CheckCircle className="w-10 h-10" />,
        title: "Flatbed Trailer",
        description:
          "Ideal for shipping the majority of warehouse forklifts. You need a dock to load and unload a forklift from a flatbed; we can't stress this enough.",
      },
    ],
    []
  );

  const tips = useMemo(
    () => [
      {
        icon: <Target className="w-6 h-6" />,
        title: "Place The Forklift in the center of The Trailer:",
        description:
          "Unless you have other tools to balance your load, your forklift should be positioned in the middle of the trailer.",
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: "Position the forks carefully on the trailer:",
        description:
          "For safety, the prongs should be pointed away from the driver. Lower the forks and slant them forward after loading.",
      },
    ],
    []
  );

  const importantConsiderations = useMemo(
    () => [
      {
        icon: <Ruler className="w-8 h-8" />,
        title: "Accurate Information for Efficient Transport",
        description:
          "Every forklift has different weights and dimensions. The correct weight, size, and handling technique are crucial for safe and effective shipment. We use this data to decide on the appropriate trailer and tools and modify shipping expenses.",
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Professional and Safe Handling",
        description:
          "Transfer of forklifts calls for both safety and expertise. PPE and training are given to our operators. We ship properly and safely according to OSHA standards.",
      },
      {
        icon: <Lock className="w-8 h-8" />,
        title: "Secure Loading and Placement",
        description:
          "Safe loading is critical in transportation. Our crew positioned the forklift on a flat trailer. Load binders, wheel chocks, and heavy-duty tie-downs lock forklift movement. We lock tailgates and compartments and brake to guarantee safety.",
      },
      {
        icon: <Route className="w-8 h-8" />,
        title: "Planning for Long-Distance Hauling",
        description:
          "Long-distance forklift movement calls for significant planning. Based on weight and bridge clearances, our specialists decide on the optimal paths. We make sure the support crew and towing vehicle can deliver on schedule and safely.",
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Trust our Experts",
        description:
          "Moving a forklift calls for safety, legal, and logistical concerns. We boast a qualified, safe, and effective team. We handle everything, so you can relax knowing your forklift is in capable hands. We offer dependable, customized forklift transportation.",
      },
    ],
    []
  );

  const featuress = useMemo(
    () => [
      {
        icon: <Users className="w-8 h-8" />,
        title: "Customer-focused services:",
        description:
          "The consumer, in our opinion, should always come first in decisions concerning how forklift transportation should be conducted.",
      },
      {
        icon: <DollarSign className="w-8 h-8" />,
        title: "Low shipping charges:",
        description:
          "We don't want to burden you, so we always consider the cost of shipping in your favor.",
      },
      {
        icon: <Headphones className="w-8 h-8" />,
        title: "Support is available 24/7:",
        description:
          "With our skilled personnel, we will make sure you receive the assistance you require whenever and wherever you are!",
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <Truck className="w-5 h-5" />,
        question:
          "What makes Rapid Auto Shipping the best forklift transportation company?",
        answer:
          "We specialize in forklift shipping with years of experience, reliable carriers, competitive pricing, and a commitment to on-time delivery and safe transport. Our team ensures each forklift is handled with expert care.",
      },
      {
        icon: <Calculator className="w-5 h-5" />,
        question: "What types of forklifts can you transport?",
        answer:
          "We transport all types of forklifts, including electric, diesel, propane, narrow-aisle, rough terrain, and more. Whether it's standard size or oversized, we've got the right equipment to handle it.",
      },
      {
        icon: <MapPin className="w-5 h-5" />,
        question: "Is your forklift transport service available nationwide?",
        answer:
          "Yes! We offer forklift transportation services across all 50 states, including remote and rural areas. Door-to-door and terminal-to-terminal options are available.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "How much does it cost to transport a forklift?",
        answer:
          "The cost depends on the forklift size, weight, transport distance, and shipping method (open vs. enclosed trailer). Contact us for a free, instant quote tailored to your shipment.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "How do I prepare my forklift for transport?",
        answer:
          "We recommend disconnecting the battery, securing loose parts, draining fuel (if required), and ensuring it's clean for inspection. Our team will provide a full checklist before pickup.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Is my forklift insured during transportation?",
        answer:
          "Absolutely. All forklift shipments are fully insured while in transit. You'll receive details about the insurance coverage before transport begins.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "How long does forklift transportation take?",
        answer:
          "Delivery times vary by distance. Local moves may take 1–2 days, while cross-country shipments can take 5–7 days. Expedited shipping options are also available.",
      },
      {
        icon: <Search className="w-5 h-5" />,
        question: "Do you provide tracking for forklift shipments?",
        answer:
          "Yes, we offer real-time tracking and regular updates throughout the transport process. You can also reach out to our support team anytime for status updates.",
      },
      {
        icon: <Users className="w-5 h-5" />,
        question: "Can you handle commercial or bulk forklift shipping?",
        answer:
          "Definitely. We offer tailored logistics solutions for businesses needing to ship multiple forklifts or heavy equipment. Ask us about our volume discounts.",
      },
      {
        icon: <Phone className="w-5 h-5" />,
        question: "How do I book forklift transport with Rapid Auto Shipping?",
        answer:
          "Booking is easy! Call us directly or fill out our online quote form. A shipping specialist will walk you through the process and schedule your transport.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>
          No.1 Forklift Transportation Company | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Perhaps you attempted to arrange for Forklift Transportation, Rapid Auto Shipping is best at the Forklift Transportation company. Call us now for a free quote!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/forklift-transportation-company"
        />
        <meta
          property="og:title"
          content="No.1 Forklift Transportation Company | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Perhaps you attempted to arrange for Forklift Transportation, Rapid Auto Shipping is best at the Forklift Transportation company. Call us now for a free quote!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/forklift-transportation-company"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751099178/1478132002_e9uc2n.webp"
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
                    name: "forklift-transportation-company",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/forklift-transportation-company",
                    name: "forklift-transportation-company",
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
              serviceType: "Forklift Transportation Services",
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
                "Nationwide forklift transportation services by Rapid Auto Shipping. Safe, insured, and on-time delivery for electric, diesel, and propane forklifts of all sizes.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What types of forklifts do you transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We transport all types of forklifts, including electric, diesel, propane, rough terrain, and warehouse forklifts across the United States.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do you secure forklifts during transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Forklifts are safely loaded and secured using heavy-duty tie-downs and wheel locks to prevent movement and damage during transit.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What's the typical delivery time for forklift transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Standard forklift shipments are delivered within 5–10 business days depending on the distance. Expedited delivery options are also available.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is insurance included in the transport service?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, all forklift shipments are fully insured with cargo coverage. You can also request additional coverage based on your needs.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How can I get a forklift shipping quote?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You can get a free quote by filling out the form on our website or by contacting us directly at +1-833-233-4447.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/services/forklift-transportation-company",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751096218/taylor-y20_zd2i0i.jpg"
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

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center z-10 px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 md:bg-[#001933]/40 max-w-3xl rounded-lg p-3 sm:p-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    Best Forklift{" "}
                    <span className="text-[#ff5722]">
                      Transportation Company
                    </span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Rapid Auto Shipping will ship your forklift anywhere in the
                    United States. Whether it's a huge construction forklift or
                    light warehouse forklift, we'd be happy to deliver them to
                    their new locations. With our more than 14 years of
                    experience in the industry, shipping a forklift is
                    exceptionally simple and convenient. Request a free shipping
                    quote for a forklift transport right now!
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto relative z-30">
                <TransportForm />
              </div>
            </div>
          </section>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 mt-10">
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #004080 100%)",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-white bg-opacity-20">
                      <Truck className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Professional Forklift
                    <br />
                    <span style={{ color: "#ff5722" }} className="relative">
                      Transportation
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-current rounded-full opacity-60"></div>
                    </span>
                  </h2>
                  <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                    Shipping a forklift is not as easy as shipping an ordinary
                    vehicle, it demands specialized equipment, experience, and
                    safety protocols to guarantee a smooth and damage-free
                    transfer. A Forklift transportation company offers efficient
                    and secure forklift shipping services to assist businesses
                    and individuals in shipping their machines hassle-free.
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white opacity-5 animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white opacity-5 animate-pulse delay-1000"></div>
            </div>

            {/* Why Choose Section */}
            <div className="py-10 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2
                    className="text-4xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Why Consider a Forklift Shipping Expert?
                  </h2>
                  <div
                    className="w-24 h-1 mx-auto"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* Mobile Layout: Icon on top, content below */}
                      <div className="flex flex-col items-center space-y-4 md:hidden">
                        <div
                          className="flex-shrink-0 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          {feature.icon}
                        </div>
                        <div className="text-center">
                          <h3
                            className="text-xl font-bold mb-3"
                            style={{ color: "#003366" }}
                          >
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Desktop Layout: Icon on left, content on right */}
                      <div className="hidden md:flex items-start space-x-4">
                        <div
                          className="flex-shrink-0 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3
                            className="text-xl font-bold mb-3"
                            style={{ color: "#003366" }}
                          >
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="py-10" style={{ backgroundColor: "#f8fafc" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Nationwide Coverage
                  </h2>
                  <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    From warehouses to construction yards, dealerships and
                    beyond, we offer reliable, safe, and inexpensive forklift
                    shipping services nationwide.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    "Warehouses",
                    "Construction Sites",
                    "Dealerships",
                    "Manufacturing",
                  ].map((area, index) => (
                    <div
                      key={index}
                      className="p-6 text-center rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div
                        className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#003366" }}
                      >
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className="font-semibold"
                        style={{ color: "#003366" }}
                      >
                        {area}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Cost Section */}
            <div className="py-10 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-6">
                    <div
                      className="p-4 rounded-full"
                      style={{ backgroundColor: "#003366" }}
                    >
                      <Calculator className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    The Cost of Forklift Transportation Service
                  </h2>
                  <div
                    className="w-24 h-1 mx-auto mb-8"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                    The price of shipping a forklift depends on a number of
                    factors. We'll take into account each of these things when
                    we give you a price quote. You will discover that our
                    pricing is incredibly competitive, and we will explain in
                    detail what and how you are being charged. For our
                    customers' convenience and peace of mind, we want everything
                    about forklift shipping to be transparent.
                  </p>
                </div>

                <div className="mb-12">
                  <p className="text-lg text-slate-600 mb-8 max-w-4xl mx-auto text-center">
                    Your forklift transport service cost will vary depending on
                    a number of variables, including:
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {costFactors.map((factor, index) => (
                      <div
                        key={index}
                        className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                      >
                        {/* Mobile Layout: Icon on top, content below */}
                        <div className="flex flex-col items-center space-y-4 md:hidden">
                          <div
                            className="flex-shrink-0 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {factor.icon}
                          </div>
                          <div className="text-center">
                            <h3
                              className="text-xl font-bold mb-3"
                              style={{ color: "#003366" }}
                            >
                              {factor.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                              {factor.description}
                            </p>
                          </div>
                        </div>

                        {/* Desktop Layout: Icon on left, content on right */}
                        <div className="hidden md:flex items-start space-x-4">
                          <div
                            className="flex-shrink-0 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {factor.icon}
                          </div>
                          <div className="flex-1">
                            <h3
                              className="text-xl font-bold mb-3"
                              style={{ color: "#003366" }}
                            >
                              {factor.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                              {factor.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Forklift Types Section */}
            <div className="py-5" style={{ backgroundColor: "#f8fafc" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Type of Forklift Transportation We Provide
                  </h3>
                  <div
                    className="w-20 h-1 mx-auto mb-8"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                    Short-distance material lifting and transportation are done
                    with forklifts. Forklifts come in two varieties:
                    construction and warehouse. While warehouse forklifts
                    operate in smaller settings, construction forklifts are
                    built to manage high loads on open work sites. Forklifts
                    used in warehouses can run on electricity, propane, natural
                    gas, or gasoline. Diesel is used in construction forklifts.
                    Basic forklift models include:
                  </p>
                </div>

                {/* Image Section */}
                <div className="mb-16">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751097795/492641553_ramjqo.webp"
                      alt="Professional Forklift Transportation Services"
                      width={800}
                      height={384}
                      loading="lazy"
                      className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h4 className="text-3xl font-bold text-white mb-3">
                        Why You Need a Professional Forklift Transportation
                        Company ?
                      </h4>
                      <p className="text-xl text-slate-200">
                        Safe, secure, and efficient forklift shipping nationwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  {forkliftTypes.map((type, index) => (
                    <div
                      key={index}
                      className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                    >
                      {/* Icon Above, Content Below Layout - Extra Centered */}
                      <div className="flex flex-col items-center justify-center text-center w-full">
                        <div className="mb-6 w-full flex flex-col items-center">
                          <div
                            className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            <span className="text-white flex items-center justify-center w-full h-full text-center text-2xl">
                              {type.icon}
                            </span>
                          </div>
                          <h4
                            className="text-xl font-bold mb-3 text-center w-full"
                            style={{ color: "#003366" }}
                          >
                            {type.title}
                          </h4>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-center w-full max-w-none">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="p-8 rounded-3xl"
                  style={{ backgroundColor: "#003366" }}
                >
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-slate-200 text-lg max-w-4xl mx-auto leading-relaxed">
                      A typical construction forklift is nearly twice as hefty
                      as an ordinary warehouse forklift, which weighs 10,000
                      pounds. Construction forklifts typically require their own
                      full-size trailer while being transported. Smaller
                      trailers can transport warehouse forklifts, especially
                      when traveling short distances.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trailer Types Section */}
            <div className="py-10 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Types of Trailers Suited for Forklift Transport
                  </h3>
                  <div
                    className="w-20 h-1 mx-auto mb-8"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                      Ground clearance is the primary distinction between the
                      two types of forklifts when it comes to shipment.
                      Construction forklifts can easily maneuver around
                      construction sites thanks to their high ground clearance.
                      Warehouse forklifts have a low ground clearance because
                      they operate on flat concrete floors.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      When pushing a machine up ramps for loading, clearance is
                      important. It can be challenging to transfer a warehouse
                      forklift onto a flatbed when the ramps are steep.
                      Forklifts are transported using trailers like these:
                    </p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                  {trailerTypes.map((trailer, index) => (
                    <div
                      key={index}
                      className="group p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
                    >
                      <div className="text-center mb-6">
                        <div
                          className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <div className="text-white text-center flex items-center justify-center w-full h-full">
                            {trailer.icon}
                          </div>
                        </div>
                        <h4
                          className="text-2xl font-bold mb-4"
                          style={{ color: "#003366" }}
                        >
                          {trailer.title}
                        </h4>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-center">
                        {trailer.description}
                      </p>
                    </div>
                  ))}
                </div>{" "}
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #004080 100%)",
              }}
            >
              <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white opacity-5 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-white opacity-5 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white opacity-5 animate-pulse delay-500"></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-white bg-opacity-20 animate-bounce">
                      <Lightbulb className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Expert Tips for Successful
                    <br />
                    <span style={{ color: "#ff5722" }} className="relative">
                      Forklift Shipping
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-current rounded-full opacity-60"></div>
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Main Tips Section */}
            <div className="py-10 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <AlertTriangle className="w-6 h-6 text-white" />
                        </div>
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#003366" }}
                        >
                          Attachment Considerations
                        </h3>
                      </div>
                      <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        If you're delivering your attachments together with your
                        forklift, don't forget to measure them. You must factor
                        in the size of construction-related forklift accessories
                        like buckets and grab bars because they are quite large.
                      </p>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        Drum handlers and man baskets are two examples of
                        warehouse forklift accessories that must also be weighed
                        and measured. Place your forklift onto a flatbed trailer
                        if you're utilizing a dock. The forklift boom would have
                        to be pointed backward.
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-orange-100 rounded-3xl transform rotate-3"></div>
                      <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                        <div className="text-center">
                          <div
                            className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: "#003366" }}
                          >
                            <Truck className="w-8 h-8 text-white" />
                          </div>
                          <h4
                            className="text-xl font-bold mb-3"
                            style={{ color: "#003366" }}
                          >
                            Height Limitation
                          </h4>
                          <p className="text-slate-600">
                            Five feet is the average height of a flatbed. That
                            offers you an additional eight feet, six inches
                            before you go above the height limits of the
                            majority of states. You must ship your forklift on a
                            hotshot trailer or step-deck trailer if it is taller
                            than eight and a half feet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <h3
                    className="text-3xl font-bold mb-8 text-center"
                    style={{ color: "#003366" }}
                  >
                    Other pointers for successfully transporting your forklift
                    comprise:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {tips.map((tip, index) => (
                      <div
                        key={index}
                        className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                      >
                        {/* Mobile Layout: Icon on top, content below */}
                        <div className="flex flex-col items-center space-y-4 md:hidden">
                          <div
                            className="flex-shrink-0 p-3 rounded-xl text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {tip.icon}
                          </div>
                          <div className="text-center">
                            <h4
                              className="text-xl font-bold mb-3"
                              style={{ color: "#003366" }}
                            >
                              {tip.title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                              {tip.description}
                            </p>
                          </div>
                        </div>

                        {/* Desktop Layout: Icon on left, content on right */}
                        <div className="hidden md:flex items-start space-x-4">
                          <div
                            className="flex-shrink-0 p-3 rounded-xl text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {tip.icon}
                          </div>
                          <div className="flex-1">
                            <h4
                              className="text-xl font-bold mb-3"
                              style={{ color: "#003366" }}
                            >
                              {tip.title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                              {tip.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Important Considerations Section */}
            <div className="py-5" style={{ backgroundColor: "#f8fafc" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h3
                    className="text-4xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Important Things to Keep in Mind When Moving a Forklift
                  </h3>
                  <div
                    className="w-24 h-1 mx-auto mb-8"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                    We recognize the importance of safe and effective planning
                    and execution of forklift movement. Hence our skilled team
                    for forklift towing and hauling provides reliable and secure
                    service. Although we give our all, but Forklift operation
                    requires your careful considerations:
                  </p>
                </div>

                <div className="space-y-8">
                  {importantConsiderations.map((consideration, index) => (
                    <div key={index} className="group relative">
                      <div
                        className={`p-8 rounded-3xl transition-all duration-700 hover:shadow-2xl ${
                          index % 2 === 0
                            ? "bg-white hover:-translate-x-4"
                            : "bg-white hover:translate-x-4"
                        }`}
                      >
                        {/* Mobile Layout: Icon on top, content below */}
                        <div className="flex flex-col items-center space-y-6 md:hidden">
                          <div className="flex-shrink-0">
                            <div
                              className="w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                              style={{ backgroundColor: "#ff5722" }}
                            >
                              <div className="text-white">
                                {consideration.icon}
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <h4
                              className="text-2xl font-bold mb-4"
                              style={{ color: "#003366" }}
                            >
                              {consideration.title}
                            </h4>
                            <p className="text-lg text-slate-600 leading-relaxed">
                              {consideration.description}
                            </p>
                          </div>
                        </div>

                        {/* Desktop Layout: Icon on left, content on right */}
                        <div className="hidden md:flex items-start space-x-8">
                          <div className="flex-shrink-0">
                            <div
                              className="w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                              style={{ backgroundColor: "#ff5722" }}
                            >
                              <div className="text-white">
                                {consideration.icon}
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4
                              className="text-2xl font-bold mb-4"
                              style={{ color: "#003366" }}
                            >
                              {consideration.title}
                            </h4>
                            <p className="text-lg text-slate-600 leading-relaxed">
                              {consideration.description}
                            </p>
                          </div>
                          <div className="hidden lg:block">
                            <div
                              className="w-1 h-16 rounded-full opacity-30"
                              style={{ backgroundColor: "#003366" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Success Guarantee Section */}
            <div className="py-10" style={{ backgroundColor: "#003366" }}>
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center animate-pulse"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: "#ff5722" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold text-white mb-6">
                    Your Success is Our Priority
                  </h2>
                  <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                    Follow these expert tips and trust our professional team for
                    safe, efficient, and reliable forklift transportation
                    services that exceed your expectations.
                  </p>

                  <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-white bg-opacity-20">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Safety First
                      </h3>
                      <p className="text-slate-300">OSHA compliant handling</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-white bg-opacity-20">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Expert Team
                      </h3>
                      <p className="text-slate-300">Trained professionals</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-white bg-opacity-20">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Guaranteed
                      </h3>
                      <p className="text-slate-300">Reliable service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 mt-20">
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #004080 100%)",
              }}
            >
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white opacity-5 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white opacity-5 animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-white opacity-5 animate-pulse delay-500"></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-white bg-opacity-20">
                      <Crown className="w-12 h-12 text-white animate-bounce" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Why We Are the Best
                    <br />
                    <span style={{ color: "#ff5722" }} className="relative">
                      Forklift Transportation Company?
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-current rounded-full opacity-60"></div>
                    </span>
                  </h2>
                  <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                    Why should I trust Rapid Auto Shipping for my forklift
                    transportation service needs? You may be asking yourself or
                    wondering. Here, we operate a little differently from
                    others. This is how:
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left Content */}
                  <div>
                    <div className="space-y-8">
                      {featuress.map((feature, index) => (
                        <div
                          key={index}
                          className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                        >
                          {/* Mobile Layout: Icon on top, content below */}
                          <div className="flex flex-col items-center space-y-6 md:hidden">
                            <div
                              className="flex-shrink-0 p-4 rounded-2xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                              style={{ backgroundColor: "#ff5722" }}
                            >
                              {feature.icon}
                            </div>
                            <div className="text-center">
                              <h3
                                className="text-2xl font-bold mb-4"
                                style={{ color: "#003366" }}
                              >
                                {feature.title}
                              </h3>
                              <p className="text-lg text-slate-600 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>

                          {/* Desktop Layout: Icon on left, content on right */}
                          <div className="hidden md:flex items-start space-x-6">
                            <div
                              className="flex-shrink-0 p-4 rounded-2xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                              style={{ backgroundColor: "#ff5722" }}
                            >
                              {feature.icon}
                            </div>
                            <div className="flex-1">
                              <h3
                                className="text-2xl font-bold mb-4"
                                style={{ color: "#003366" }}
                              >
                                {feature.title}
                              </h3>
                              <p className="text-lg text-slate-600 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Trust Badges */}
                    <div
                      className="mt-12 p-8 rounded-3xl"
                      style={{ backgroundColor: "#f8fafc" }}
                    >
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div
                            className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: "#003366" }}
                          >
                            <Star className="w-8 h-8 text-white" />
                          </div>
                          <h4
                            className="font-bold"
                            style={{ color: "#003366" }}
                          >
                            5-Star Service
                          </h4>
                        </div>
                        <div>
                          <div
                            className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            <Award className="w-8 h-8 text-white" />
                          </div>
                          <h4
                            className="font-bold"
                            style={{ color: "#003366" }}
                          >
                            Industry Leader
                          </h4>
                        </div>
                        <div>
                          <div
                            className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: "#003366" }}
                          >
                            <CheckCircle className="w-8 h-8 text-white" />
                          </div>
                          <h4
                            className="font-bold"
                            style={{ color: "#003366" }}
                          >
                            Guaranteed
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-orange-100 rounded-3xl transform rotate-3 opacity-50"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_600,q_auto,f_auto/v1751099178/1478132002_e9uc2n.webp"
                        alt="Professional Forklift Transportation Team - Rapid Auto Shipping"
                        width={600}
                        height={384}
                        loading="lazy"
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-2xl font-bold text-white mb-2">
                          Rapid Auto Shipping
                        </h4>
                        <p className="text-slate-200">
                          Your trusted forklift transportation partner
                        </p>
                      </div>
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                      <div className="text-center">
                        <div
                          className="text-3xl font-bold"
                          style={{ color: "#ff5722" }}
                        >
                          24/7
                        </div>
                        <div
                          className="text-sm font-semibold"
                          style={{ color: "#003366" }}
                        >
                          Support
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                      <div className="text-center">
                        <div
                          className="text-3xl font-bold"
                          style={{ color: "#003366" }}
                        >
                          100%
                        </div>
                        <div
                          className="text-sm font-semibold"
                          style={{ color: "#ff5722" }}
                        >
                          Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Free Estimate Section */}
            <div className="py-20" style={{ backgroundColor: "#f8fafc" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="p-12">
                      <div className="mb-8">
                        <div className="flex items-center mb-6">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <h3
                            className="text-3xl font-bold"
                            style={{ color: "#003366" }}
                          >
                            Request a Free Estimate for Shipping a forklift
                          </h3>
                        </div>
                        <div
                          className="w-20 h-1 mb-6"
                          style={{ backgroundColor: "#ff5722" }}
                        ></div>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                          If you're considering exporting a forklift, fill out
                          our free estimate request form. It will take less than
                          a minute, and you'll get an immediate free quote from
                          a reliable partner. We will assist you with your needs
                          and have experience shipping forklifts.
                        </p>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center">
                          <CheckCircle
                            className="w-6 h-6 mr-3"
                            style={{ color: "#ff5722" }}
                          />
                          <span className="text-slate-600">
                            Free instant quote in under 1 minute
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle
                            className="w-6 h-6 mr-3"
                            style={{ color: "#ff5722" }}
                          />
                          <span className="text-slate-600">
                            Experienced forklift shipping specialists
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle
                            className="w-6 h-6 mr-3"
                            style={{ color: "#ff5722" }}
                          />
                          <span className="text-slate-600">
                            Reliable partnership you can trust
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                          <button
                            style={{ backgroundColor: "#ff5722" }}
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-full hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                          >
                            <FileText className="w-5 h-5 mr-2" />
                            Get Free Quote
                          </button>
                        </Link>
                        <Link href="tel:+18332334447">
                          <button
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 rounded-full hover:shadow-lg transition-all duration-300"
                            style={{ borderColor: "#003366", color: "#003366" }}
                          >
                            <Phone className="w-5 h-5 mr-2" />
                            (833) 233-4447
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div
                      className="p-12 flex items-center justify-center relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, #003366 0%, #004080 100%)",
                      }}
                    >
                      <div className="absolute inset-0">
                        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-white opacity-10 animate-pulse"></div>
                        <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-white opacity-10 animate-pulse delay-1000"></div>
                      </div>

                      <div className="relative text-center text-white">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center bg-white bg-opacity-20">
                          <Phone className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4">
                          Ready to Get Started?
                        </h4>
                        <p className="text-slate-200 mb-6 leading-relaxed">
                          Contact our agents if you have any questions or
                          concerns. We're here to help with all your forklift
                          transportation needs.
                        </p>

                        <div className="flex items-center justify-center">
                          <Clock className="w-5 h-5 mr-2" />
                          <span className="text-slate-200">Available 24/7</span>
                        </div>
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