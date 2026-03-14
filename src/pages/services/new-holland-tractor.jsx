"use client";

import React, { useState, useMemo, useCallback } from "react";
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
  DollarSign,
  Shield,
  Clock,
  Users,
  Wrench,
  FileText,
  Package,
  Fuel,
  CheckCircle,
  Phone,
  Weight,
  Mail,
  MapPin,
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

  const shippingMethods = useMemo(
    () => [
      {
        name: "Roll-On/Roll-Off (RoRo) Shipping",
        description:
          "The tractor is driven onto a specialized trailer or platform, secured, and transported to its destination.",
      },
      {
        name: "Container Shipping",
        description:
          "The tractor is securely loaded into a shipping container for transportation.",
      },
    ],
    [],
  );

  const trailerTypes = useMemo(
    () => [
      {
        name: "Flatbed Trailer",
        description:
          "A flatbed trailer is an essential and commonly used option for transporting tractors and other equipment. It consists of a flat, open platform without sides or a roof, allowing easy loading and unloading of the tractor.",
      },
      {
        name: "Lowboy Trailer",
        description:
          "A lowboy trailer is a distinct type of flatbed trailer with a low deck height. It can transport taller and heavier equipment, such as larger New Holland tractors. It also offers increased stability and easy access to load and unload the tractor.",
      },
      {
        name: "Step-Deck Trailer",
        description:
          "Also known as a drop-deck trailer, this type of trailer has two different deck levels, one lower and one higher than the standard flatbed. It allows for transporting taller equipment while maintaining a lower overall trailer height.",
      },
      {
        name: "Enclosed Trailer",
        description:
          "Enclosed trailers provide protection from the outside elements during transportation. Their walls and roof make them suitable for shipping smaller New Holland tractors or transporting equipment in regions with adverse weather conditions.",
      },
      {
        name: "RGN (Removable Gooseneck) Trailer",
        description:
          "RGN trailers are designed as lowboy trailers with detachable front sections (gooseneck) to facilitate loading and unloading. They are used for hauling larger and heavier New Holland tractors that may require special permits for transportation due to their size and weight.",
      },
      {
        name: "Step Deck RGN Trailer",
        description:
          "This combines the features of a step deck and an RGN trailer. It allows for transporting tall and heavy equipment like larger New Holland tractors while providing the benefits of a lower deck height.",
      },
    ],
    [],
  );

  const costFactors = useMemo(
    () => [
      {
        factor: "Distance",
        description:
          "Longer distances increase fuel consumption and labor costs.",
        impact: "Higher for long-distance shipments.",
        icon: <MapPin className="w-5 h-5" />,
      },
      {
        factor: "Tractor Size & Weight",
        description:
          "Larger and heavier tractors require specialized equipment and permits.",
        impact: "Higher for larger and heavier tractors.",
        icon: <Weight className="w-5 h-5" />,
      },
      {
        factor: "Transport Method",
        description:
          "Open transport is cheaper, while enclosed transport is more secure but costs more.",
        impact: "Higher for enclosed transport.",
        icon: <Truck className="w-5 h-5" />,
      },
      {
        factor: "Fuel Prices",
        description:
          "Fluctuations in fuel costs can affect overall transportation expenses.",
        impact: "Higher when fuel prices rise.",
        icon: <Fuel className="w-5 h-5" />,
      },
      {
        factor: "Permits & Regulations",
        description:
          "Some states require additional permits for oversized loads.",
        impact: "Higher if special permits are needed.",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        factor: "Traffic Conditions",
        description: "Congestion can increase transit time and fuel usage.",
        impact: "Higher in high-traffic areas.",
        icon: <MapPin className="w-5 h-5" />,
      },
      {
        factor: "Weather Conditions",
        description:
          "Severe weather can cause delays and require alternative routes.",
        impact: "Higher in cases of extreme weather.",
        icon: <Package className="w-5 h-5" />,
      },
      {
        factor: "Insurance Coverage",
        description:
          "Additional insurance for protection against damage or loss.",
        impact: "Higher for comprehensive coverage.",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        factor: "Urgency of Delivery",
        description: "Expedited shipping services come at a premium cost.",
        impact: "Higher for faster delivery.",
        icon: <Clock className="w-5 h-5" />,
      },
    ],
    [],
  );

  const shippingReasons = useMemo(
    () => [
      {
        title: "Buying from a Dealer or an Auction:",
        description:
          "People often buy new and used tractors from shops or auctions that are hundreds of miles away. Professional transport makes sure that deliveries are made quickly and safely.",
        icon: <DollarSign className="w-6 h-6" />,
      },
      {
        title: "Farm Moving:",
        description:
          "Specialized tools are needed to move tractors and other farm equipment when moving operations to a new site.",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        title: "Selling or Renting Equipment:",
        description:
          "Businesses and farmers may need to ship machines to people in other states who want to buy them or rent them.",
        icon: <Users className="w-6 h-6" />,
      },
      {
        title: "Emergency Repairs:",
        description:
          "If a tractor needs major repairs, it might have to be sent to a specialized service center.",
        icon: <Wrench className="w-6 h-6" />,
      },
    ],
    [],
  );

  const professionalBenefits = useMemo(
    () => [
      {
        title: "Specialized Tools and Gear:",
        description:
          "Tractors are put on trailers like flatbeds, step decks, or RGNs (Removable Gooseneck Trailers) to keep them safe while they're being moved.",
        icon: <Truck className="w-6 h-6" />,
      },
      {
        title: "Compliance with Regulations:",
        description:
          "Transporting heavy equipment needs permits for things that are too big, and it has to follow DOT rules.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Insurance Coverage:",
        description:
          "We offer insurance to keep your things safe while they're being moved.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Handling Expertise:",
        description:
          "CDL-certified drivers with a lot of experience use the right methods for securing items to keep them safe and make sure the delivery goes smoothly.",
        icon: <Users className="w-6 h-6" />,
      },
    ],
    [],
  );

  const preparationSteps = useMemo(
    () => [
      {
        title: "Check the condition and write it down:",
        description: "Take pictures and write down any damage you see.",
        icon: <CheckCircle className="w-6 h-6" />,
      },
      {
        title: "Keep Loose Parts Safe:",
        description:
          "To keep things from moving during transport, remove or lock any attachments.",
        icon: <Package className="w-6 h-6" />,
      },
      {
        title: "If Needed, Drain any Extra Fluids:",
        description:
          "Some carriers may want fluids like oil and fuel to be partly drained.",
        icon: <Wrench className="w-6 h-6" />,
      },
      {
        title: "Give Correct Dimensions:",
        description:
          "Make sure the shipping company has the right tractor sizes to choose the right trailer.",
        icon: <MapPin className="w-6 h-6" />,
      },
    ],
    [],
  );

  const faqData = useMemo(
    () => [
      {
        icon: <MapPin className="w-5 h-5" />,
        question: "Do you ship New Holland tractors nationwide?",
        answer:
          "Yes! Rapid Auto Shipping offers New Holland tractor transport across all 50 U.S. states, including remote and rural areas. We provide door-to-door and terminal-to-terminal delivery options.",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        question: "What types of New Holland tractors do you transport?",
        answer:
          "We ship all New Holland models, compact tractors, utility tractors, T-series, Boomer series, Workmaster, PowerStar, and even specialized agriculture or construction units.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "How much does it cost to ship a New Holland tractor?",
        answer:
          "Shipping costs depend on the size and weight of the tractor, the distance, and the type of trailer required (flatbed or lowboy). Get in touch for a free, instant quote customized to your shipment.",
      },
      {
        icon: <Package className="w-5 h-5" />,
        question: "How are New Holland tractors loaded and transported?",
        answer:
          "Depending on the tractor's size and condition, we use ramps, winches, or cranes to load it onto a flatbed or lowboy trailer. Our experienced carriers ensure it's properly secured and DOT compliant.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Is my tractor insured during transport?",
        answer:
          "Yes. All New Holland tractor shipments include full cargo insurance, so your equipment is protected from pickup to delivery. You'll also receive a detailed condition report.",
      },
      {
        icon: <Wrench className="w-5 h-5" />,
        question: "Can you ship non-running or damaged New Holland tractors?",
        answer:
          "Absolutely. We have the tools and equipment to safely transport inoperable tractors. Just let us know the condition when requesting a quote so we can make proper arrangements.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "How long does it take to ship a New Holland tractor?",
        answer:
          "Transit time depends on distance. Local shipments may take 1–2 days, while cross-country deliveries usually take 5–7 days. We also offer expedited services.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "What documents are needed for tractor shipping?",
        answer:
          "Typically, we require proof of ownership or a bill of sale and a signed Bill of Lading at pickup. Our team will guide you through any required paperwork.",
      },
    ],
    [],
  );

  return (
    <>
      <Head>
        <title>New Holland Equipment Shipping across all states of USA</title>
        <meta
          name="description"
          content="Rapid Auto Shipping provides new holland shipping locally or all states of the America, with our experty and our super attractive price, call now!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/new-holland-tractor "
        />
        <meta
          property="og:title"
          content="New Holland Equipment Shipping across all states of USA"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping provides new holland shipping locally or all states of the America, with our experty and our super attractive price, call now!"
        />
        <meta
          property="og:url"
          content=" https://rapidautoshipping.com/services/new-holland-tractor  "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751974656/961203226_xdaieq.webp"
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
                    name: "new-holland-tractor",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/new-holland-tractor ",
                    name: "new-holland-tractor",
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
              serviceType: "New Holland Tractor Shipping Service",
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
                "Professional shipping services for New Holland tractors across the United States by Rapid Auto Shipping. Safe, insured, and specialized transport for all models including compact, utility, and heavy-duty tractors.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Do you ship New Holland tractors nationwide?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! Rapid Auto Shipping offers New Holland tractor transport across all 50 U.S. states, including remote and rural areas. We provide door-to-door and terminal-to-terminal delivery options.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What types of New Holland tractors do you transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We ship all New Holland models, compact tractors, utility tractors, T-series, Boomer series, Workmaster, PowerStar, and even specialized agriculture or construction units.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much does it cost to ship a New Holland tractor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Shipping costs depend on the size and weight of the tractor, the distance, and the type of trailer required (flatbed or lowboy). Get in touch for a free, instant quote customized to your shipment.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How are New Holland tractors loaded and transported?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Depending on the tractor's size and condition, we use ramps, winches, or cranes to load it onto a flatbed or lowboy trailer. Our experienced carriers ensure it's properly secured and DOT compliant.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is my tractor insured during transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. All New Holland tractor shipments include full cargo insurance, so your equipment is protected from pickup to delivery. You'll also receive a detailed condition report.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can you ship non-running or damaged New Holland tractors?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely. We have the tools and equipment to safely transport inoperable tractors. Just let us know the condition when requesting a quote so we can make proper arrangements.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to ship a New Holland tractor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Transit time depends on distance. Local shipments may take 1–2 days, while cross-country deliveries usually take 5–7 days. We also offer expedited services.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What documents are needed for tractor shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Typically, we require proof of ownership or a bill of sale and a signed Bill of Lading at pickup. Our team will guide you through any required paperwork.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/services/new-holland-tractor",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751974519/1491591222_u7g5td.webp"
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
                <rect width="100%" height="100%" fill="url(#glassPattern)" />
              </svg>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center  px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 md:bg-[#001933]/40 max-w-3xl rounded-lg p-3 sm:p-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    New Holland Tractor{" "}
                    <span className="text-[#ff5722]">Shipping Service</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    When transporting your New Holland tractor, you can trust
                    Rapid Auto Shipping to do the job reliably. Our area of
                    expertise lies in assisting companies and individual farmers
                    with the New Holland tractor shipping throughout the United
                    States. We provide a reliable door to door tractor shipping
                    service for your valuable agricultural machinery. Our aim is
                    to ensure your tractor's safe and timely delivery to its
                    destination.
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
                        What Factors Contribute to Customers Choosing Our New
                        Holland Tractor Shipping Service?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Customers choose Rapid Auto Shipping for New Holland
                      Tractor Shipping and other agricultural equipment for
                      several reasons.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Professional Drivers: </b>
                      All our drivers hold the necessary commercial driving
                      licenses to operate the vehicles utilized in tractor
                      transportation. They possess significant experience in
                      transporting oversized equipment and have the knowledge to
                      safely load and transport your New Holland tractor. <br />{" "}
                      <br />
                      <b>Personalized Service: </b>
                      We recognize that every job has its own distinct
                      characteristics, which is why we provide tailored tractor
                      shipping services. Our team of specialists is dedicated to
                      providing you with exceptional service. We will help you
                      identify the best shipping route, recommend suitable
                      hauling equipment for your tractor, and provide a door to
                      door service that is efficient, simple, and convenient.{" "}
                      <br /> <br />
                      <b>Top-notch Equipment: </b>
                      Your New Holland tractor is an invaluable piece of
                      equipment. Consequently, we utilize suitable equipment to
                      guarantee that the shipment is securely fastened
                      throughout transportation. Our step-deck and RGN trailers
                      offer generous space and ensure your tractor is secured
                      effectively. No matter the model of your New Holland
                      tractor, we possess the right equipment to manage it
                      effectively.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751974209/H386aa7238c4a40e3a91a77a2fc16a24bO_wer2rb.webp"
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

          <div className="max-w-7xl mx-auto p-4 space-y-8">
            {/* Shipping Methods Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#003366] text-white p-6">
                <h2 className="text-2xl font-bold">
                  What Shipping Methods Are Available for Shipping a Tractor? |
                  New Holland Shipper Near Me
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  There are generally two standard shipping methods for a
                  tractor:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {shippingMethods.map((method, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#ff5722] rounded-full p-2 text-white flex-shrink-0">
                          <Truck className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#003366] mb-2">
                            {method.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trailer Types Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#003366] text-white p-6">
                <h3 className="text-xl font-bold">
                  Types of trailers Shipping a New Holland tractor | New Holland
                  Tractor Shipping Company Near Me
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  A few trailers are commonly used to transport a New Holland
                  tractor. The specific trailer used depends on the size and
                  weight of the tractor, as well as the distance and terrain
                  involved in the transportation. Some common types of trailers
                  used for New Holland tractors shipping service include:
                </p>
                <div className="grid gap-6">
                  {trailerTypes.map((trailer, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-[#ff5722] pl-6 py-4"
                    >
                      <h4 className="font-semibold text-[#003366] mb-2">
                        {trailer.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {trailer.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cost Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#003366] text-white p-6">
                <h2 className="text-2xl font-bold">
                  What is the Average Cost of Shipping a New Holland Tractor?
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  The total cost of shipping a New Holland tractor depends on a
                  number of factors. Such as the size and weight of the tractor,
                  the distance being shipped, the method of transport chosen,
                  and any extra services like insurance and permits. Even though
                  prices can be different, knowing these things can help you get
                  a sense of how much it might cost.
                </p>

                <h3 className="text-xl font-semibold text-[#003366] mb-4">
                  What Factors Affect the Shipping Cost of New Holland Tractors?
                </h3>
                <p className="text-gray-600 mb-6">
                  Shipping costs for a New Holland tractor can vary
                  significantly depending on various factors, such as:
                </p>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          Factor
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          Impact on Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {costFactors.map((factor, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {factor.factor}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {factor.description}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#ff5722] font-medium">
                            {factor.impact}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-4">
                  {costFactors.map((factor, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#ff5722] rounded-full p-2 text-white flex-shrink-0">
                          {factor.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#003366] mb-2">
                            {factor.factor}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            {factor.description}
                          </p>
                          <p className="text-[#ff5722] font-medium text-sm">
                            {factor.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Delivery Time Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#003366] text-white p-6">
                <h3 className="text-xl font-bold">
                  How Long Does It Typically Take to Ship a New Holland Tractor?
                </h3>
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff5722] rounded-full p-3 text-white flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      The delivery time for a New Holland tractor is influenced
                      by various factors such as distance, road conditions,
                      weather, and the selected transport method. Typically,
                      local deliveries take between 1 to 3 days, whereas
                      cross-country shipments usually span 5 to 10 days. Faster
                      delivery is offered through expedited shipping options,
                      though it comes at an increased cost. Delays can arise
                      unexpectedly from heavy traffic or severe weather, but you
                      don't worry about it because we provide timely updates.
                      For a seamless experience, arranging shipping ahead of
                      time is best.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto p-4 space-y-8">
            {/* Shipping Reasons Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#003366] text-white p-6">
                <h2 className="text-2xl font-bold">
                  What are the Reasons for Shipping a New Holland Tractor?
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  It's often important to ship a New Holland tractor for a
                  number of reasons, such as:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {shippingReasons.map((reason, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#ff5722] rounded-full p-3 text-white flex-shrink-0">
                          {reason.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#003366] mb-2">
                            {reason.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Services Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#003366] text-white p-6">
                <h3 className="text-xl font-bold">
                  Why do You Need Professional Shipping Services?
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  There's more to moving a tractor than just driving it where it
                  needs to go. There are a few main perks to using a
                  professional shipping service:
                </p>
                <div className="grid gap-6">
                  {professionalBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-[#ff5722] pl-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#003366] rounded-full p-2 text-white flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#003366] mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Preparation Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#003366] text-white p-6">
                <h3 className="text-xl font-bold">
                  Getting Your Tractor Ready to Ship
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Before you ship, do these things to make sure the process goes
                  smoothly:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {preparationSteps.map((step, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#ff5722] rounded-full p-3 text-white flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#003366] mb-2">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="bg-[#003366] text-white p-6 rounded-lg mb-6">
                  <p className="leading-relaxed">
                    By ensuring your vehicle or equipment is prepared to
                    transport, you can be sure that your New Holland tractor
                    will reach its destination quickly and safely.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#003366] to-[#004080] rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Ship Your New Holland Tractor?
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Get professional, reliable, and secure tractor shipping
                  services today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <Link href="tel:+18332334447">
                    <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center space-x-2 shadow-lg">
                      <Phone className="w-5 h-5" />
                      <span>Call Now: +1 (833) 233-4447</span>
                    </button>
                  </Link>
                  <Link href="https://rapidautoshipping.com/calculator">
                    <button className="bg-white hover:bg-gray-100 text-[#003366] font-bold py-4 px-8 rounded-lg transition-colors flex items-center space-x-2 shadow-lg">
                      <Mail className="w-5 h-5" />
                      <span>Get Free Quote</span>
                    </button>
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <Shield className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Fully Insured</h3>
                    <p className="text-sm opacity-90">
                      Your tractor is protected throughout the journey
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Expert Handling</h3>
                    <p className="text-sm opacity-90">
                      CDL-certified drivers with specialized equipment
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <Truck className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Safe Transport</h3>
                    <p className="text-sm opacity-90">
                      Professional equipment and secure loading methods
                    </p>
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
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Rapid Auto Shipping: Your Trusted New Holland Tractor
                        Shipping Partner
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      At Rapid Auto Shipping, we recognize that transporting
                      your New Holland tractor is a substantial decision. That
                      is why we are committed to delivering a shipping
                      experience that is both secure and stress-free. We have
                      established a reputation for reliability and excellence in
                      the industry, thanks to our extensive experience in heavy
                      equipment transport and a long list of contented customers
                      throughout the United States.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Contact us today to receive a complimentary quote and
                      allow our team of professionals to manage your New Holland
                      Tractor Shipping with precision and care.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        {/* Image with enhanced effects */}
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751974656/961203226_xdaieq.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          width={800}
                          height={400}
                          loading="lazy"
                          className="w-full h-[400px] object-cover rounded-2xl shadow-2xl 
                 transition-all duration-700 ease-in-out
                 group-hover:scale-105 group-hover:shadow-3xl
                 group-hover:brightness-110 group-hover:contrast-105"
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
                        className="absolute bottom-4 left-4 bg-white/90 
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
                              ? {
                                  backgroundColor: "#fff3f0",
                                  color: "#ff5722",
                                }
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
