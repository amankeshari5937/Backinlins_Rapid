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
  CheckCircle,
  TrendingUp,
  Cog,
  ArrowRight,
  Maximize2,
  Navigation,
  Repeat,
  Phone,
  MapPin,
  Scale,
  Target,
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

  const trailerTypes = useMemo(
    () => [
      {
        title: "Fixed Neck Lowboy",
        icon: <Truck className="w-8 h-8" />,
        description:
          "The trailer is equipped with a fixed-neck lowboy. This feature provides a lightweight alternative. The fixed style makes it more difficult to load from the front of the trailer.",
        features: [
          "Lightweight design",
          "Fixed attachment",
          "Rear loading preferred",
        ],
      },
      {
        title: "Fixed Gooseneck Lowboy",
        icon: <Cog className="w-8 h-8" />,
        description:
          "Fixed gooseneck lowboys (FGLs) are equipped with drop decks, allowing easy loading from the back and the front. The gooseneck is adjustable, and once reattached, it securely holds the cargo in position on the trailer.",
        features: [
          "Drop deck design",
          "Front & rear loading",
          "Adjustable gooseneck",
        ],
      },
      {
        title: "Removable Gooseneck Lowboy (RGN)",
        icon: <Shield className="w-8 h-8" />,
        description:
          "Removable gooseneck lowboys (RGNs) are heavy-duty trailers ideal for hauling up to 150,000 pounds with up to 20 axles. Their detachable front allows cargo to be pulled, pushed, rolled, or driven onto the bed, and they can also be loaded from above if needed.",
        features: [
          "Up to 20 axles",
          "150,000 lbs capacity",
          "Multiple loading options",
          "Heavy-duty construction",
        ],
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      {
        title: "Heavy Equipment Transportation",
        icon: <Wrench className="w-8 h-8" />,
        description:
          "Lowboy trucks are designed to transport heavy and oversized equipment, including construction, industrial, agricultural, and large vehicles. The low deck height of these items makes it convenient to load and unload heavy objects.",
        features: [
          "Construction equipment",
          "Industrial machinery",
          "Agricultural vehicles",
          "Easy loading/unloading",
        ],
      },
      {
        title: "Versatility",
        icon: <Maximize2 className="w-8 h-8" />,
        description:
          "Lowboy trailers come in different configurations, such as fixed-neck, removable gooseneck (RGN), and extendable models. Their versatility allows them to accommodate equipment of various sizes and shapes. Lowboy trucks can transport items of different weights, heights, and lengths, making them highly versatile for various transportation requirements.",
        features: [
          "Fixed-neck models",
          "RGN configurations",
          "Extendable options",
          "Various sizes & shapes",
        ],
      },
      {
        title: "Height Clearance",
        icon: <Target className="w-8 h-8" />,
        description:
          "Lowboy trailers have a deck close to the ground, providing sufficient vertical space for transporting tall equipment. This feature is especially advantageous when transporting cranes, wind turbine components, and other oversized structures that exceed standard height limits.",
        features: [
          "Ground-level deck",
          "Tall equipment transport",
          "Crane transportation",
          "Wind turbine components",
        ],
      },
      {
        title: "Stability and Security",
        icon: <Shield className="w-8 h-8" />,
        description:
          "Lowboy trailers are renowned for their exceptional strength and high level of security during transportation. Compared to other trailers, they have a lower center of gravity, which enhances stability and minimizes swaying or tipping. In addition, lowboy trailers are equipped with multiple axles and specialized suspension systems to provide a smooth and secure move for the cargo.",
        features: [
          "Lower center of gravity",
          "Enhanced stability",
          "Multiple axles",
          "Specialized suspension",
        ],
      },
      {
        title: "Safety",
        icon: <Navigation className="w-8 h-8" />,
        description:
          "Lowboy trailers are designed to safely and efficiently load and unload heavy equipment. They are equipped with either ramps or hydraulic systems, which greatly assist this process. These features help to reduce the likelihood of accidents and injuries when loading and unloading.",
        features: [
          "Safe loading systems",
          "Ramp equipment",
          "Hydraulic systems",
          "Accident prevention",
        ],
      },
      {
        title: "Cost Efficiency",
        icon: <DollarSign className="w-8 h-8" />,
        description:
          "Lowboy trucking services offer a cost-effective solution for transporting heavy and oversized equipment compared to other methods. Lowboy trailers eliminate the need for expensive crane services or the disassembly of large equipment into smaller parts for transportation. They offer a direct and efficient solution, saving time and reducing overall costs.",
        features: [
          "Cost-effective solution",
          "No crane services needed",
          "No disassembly required",
          "Time & cost savings",
        ],
      },
    ],
    []
  );

  const costFactors = useMemo(
    () => [
      {
        title: "Distance",
        icon: <MapPin className="w-8 h-8" />,
        description:
          "The overall cost is influenced by the total mileage or distance from the pickup location to the delivery destination. Transportation costs tend to increase as the distance traveled increases.",
        keyPoints: [
          "Total mileage calculation",
          "Pickup to delivery route",
          "Distance-based pricing",
        ],
      },
      {
        title: "Load weight and dimensions",
        icon: <Scale className="w-8 h-8" />,
        description:
          "Lowboy trailers are designed to transport heavy and oversized loads. The load's weight and dimensions, including width, height, and length, are crucial factors affecting the cost. Additional permits, escorts, or specialized equipment may be necessary for overweight or oversized loads, increasing overall expenses.",
        keyPoints: [
          "Weight specifications",
          "Width, height, length",
          "Permit requirements",
          "Escort services",
        ],
      },
      {
        title: "Equipment required",
        icon: <Truck className="w-8 h-8" />,
        description:
          "The specific type of lowboy trailer required can influence the cost of transportation. Specific loads may necessitate specialized trailers or equipment, such as removable gooseneck (RGN) trailers or hydraulic detachable gooseneck (hydraulic RGN) trailers. The availability and complexity of the required equipment can influence the pricing.",
        keyPoints: [
          "Specialized trailers",
          "RGN equipment",
          "Hydraulic systems",
          "Equipment complexity",
        ],
      },
      {
        title: "Additional services",
        icon: <Plus className="w-8 h-8" />,
        description:
          "Depending on the specific requirements of the shipment, additional services such as loading, unloading, permits, escorts, or storage may be required. These services typically incur additional charges, increasing the total cost.",
        keyPoints: [
          "Loading/unloading",
          "Permit processing",
          "Escort services",
          "Storage options",
        ],
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <Truck className="w-5 h-5" />,
        question: "What is a Lowboy trucking service?",
        answer:
          "A Lowboy trucking service uses specialized trailers with a low deck height to haul oversized or heavy equipment that exceeds standard height restrictions, such as construction machinery, industrial equipment, and large vehicles.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Why choose Rapid Auto Shipping for Lowboy trucking?",
        answer:
          "We have extensive experience in heavy equipment logistics and a fleet of specialized Lowboy trailers. Our team handles everything from permits to route planning to ensure safe, legal, and efficient delivery.",
      },
      {
        icon: <Package className="w-5 h-5" />,
        question: "What types of loads can be hauled with a Lowboy trailer?",
        answer:
          "Lowboy trailers are ideal for transporting bulldozers, excavators, cranes, industrial tanks, forklifts, ISUZU NPR trucks, and more. If your load exceeds normal height or weight limits, Lowboy hauling is likely the best option.",
      },
      {
        icon: <MapPin className="w-5 h-5" />,
        question: "Do you offer nationwide Lowboy trucking services?",
        answer:
          "Yes, we provide Lowboy trucking solutions across all 50 states. Whether your load is going coast-to-coast or locally, we can accommodate it.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Is my cargo insured during Lowboy transport?",
        answer:
          "Absolutely. Every shipment includes full cargo insurance for peace of mind. We also perform detailed inspections before and after transport.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "How much does Lowboy trucking cost?",
        answer:
          "Pricing depends on the type of equipment, size, weight, distance, permits, and escort requirements. Contact us for a fast, custom quote with no hidden fees.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "Do I need special permits for oversized loads?",
        answer:
          "Yes, and we handle all of that for you. Our team secures the necessary permits, escorts, and follows DOT regulations to ensure compliance and safety.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "How long does it take to haul equipment on a Lowboy trailer?",
        answer:
          "Transit times vary based on distance, equipment size, and permitting. Short hauls can be completed in 1–3 days, while long-distance moves may take 5–7 days.",
      },
      {
        icon: <Repeat className="w-5 h-5" />,
        question: "Can I schedule recurring Lowboy shipments for my business?",
        answer:
          "Yes! We offer ongoing logistics partnerships for companies with frequent hauling needs. Ask us about our commercial discounts and dedicated support.",
      },
      {
        icon: <Phone className="w-5 h-5" />,
        question: "How do I book Lowboy trucking with Rapid Auto Shipping?",
        answer:
          "It's easy, just call us or request a quote online. One of our logistics experts will guide you through the process and get your equipment moving quickly and safely.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Lowboy Trucking Company | Lowboy Hauling Services</title>
        <meta
          name="description"
          content="Looking for the best lowboy trucking company? Rapid Auto Shipping specializes in heavy equipment transport services throughout the United States."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/lowboy-shipping"
        />
        <meta
          property="og:title"
          content="Lowboy Trucking Company | Lowboy Hauling Services"
        />
        <meta
          property="og:description"
          content="Looking for the best lowboy trucking company? Rapid Auto Shipping specializes in heavy equipment transport services throughout the United States."
        />
        <meta
          property="og:url"
          content=" https://rapidautoshipping.com/services/lowboy-shipping "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751275330/449455521_437395175927617_6502369148773054495_n_oyji3a.jpg"
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
                    name: "lowboy-shipping",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      " https://rapidautoshipping.com/services/lowboy-shipping ",
                    name: "lowboy-shipping",
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
              serviceType: "Lowboy Trucking Service",
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
                "Nationwide Lowboy trucking services for hauling oversized and heavy equipment, including bulldozers, cranes, and industrial machinery. Fully insured and permit-compliant transport handled by Rapid Auto Shipping.",
              url: "https://rapidautoshipping.com/services/lowboy-shipping",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is a Lowboy trucking service?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A Lowboy trucking service uses specialized trailers with a low deck height to haul oversized or heavy equipment that exceeds standard height restrictions, such as construction machinery, industrial equipment, and large vehicles.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why choose Rapid Auto Shipping for Lowboy trucking?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We have extensive experience in heavy equipment logistics and a fleet of specialized Lowboy trailers. Our team handles everything from permits to route planning to ensure safe, legal, and efficient delivery.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What types of loads can be hauled with a Lowboy trailer?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Lowboy trailers are ideal for transporting bulldozers, excavators, cranes, industrial tanks, forklifts, ISUZU NPR trucks, and more. If your load exceeds normal height or weight limits, Lowboy hauling is likely the best option.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you offer nationwide Lowboy trucking services?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we provide Lowboy trucking solutions across all 50 states. Whether your load is going coast-to-coast or locally, we can accommodate it.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is my cargo insured during Lowboy transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely. Every shipment includes full cargo insurance for peace of mind. We also perform detailed inspections before and after transport.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much does Lowboy trucking cost?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Pricing depends on the type of equipment, size, weight, distance, permits, and escort requirements. Contact us for a fast, custom quote with no hidden fees.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need special permits for oversized loads?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, and we handle all of that for you. Our team secures the necessary permits, escorts, and follows DOT regulations to ensure compliance and safety.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to haul equipment on a Lowboy trailer?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Transit times vary based on distance, equipment size, and permitting. Short hauls can be completed in 1–3 days, while long-distance moves may take 5–7 days.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I schedule recurring Lowboy shipments for my business?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! We offer ongoing logistics partnerships for companies with frequent hauling needs. Ask us about our commercial discounts and dedicated support.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I book Lowboy trucking with Rapid Auto Shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It's easy, just call us or request a quote online. One of our logistics experts will guide you through the process and get your equipment moving quickly and safely.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          {/* Hero Section - Mobile: solid bg, Desktop: image */}
          <section className="relative py-8 flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on Mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751275330/449455521_437395175927617_6502369148773054495_n_oyji3a.jpg"
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
                    Lowboy Trucking{" "}
                    <span className="text-[#ff5722]">Company</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Rapid Auto Shipping offers highly efficient lowboy trucking
                    with advanced hauling capacity. We provide reliable lowboy
                    transport services designed to safely and efficiently
                    transport your heavy equipment or any other cargo you may
                    have. Our team of experts is remarkable in their ability to
                    create and execute plans on your behalf. At Rapid Auto
                    Shipping, we take pride in offering top-notch lowboy
                    shipping services that are unmatched in the industry.
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
                        Why We Excel Among Other Heavy Equipment Transport and
                        Lowboy Trucking Companies
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Unlike other lowboy trucking companies prioritizing solely
                      monetary gain, our company strives to build customer
                      trust. Construction companies highly appreciate our
                      door-to-door heavy equipment transport service, especially
                      when they require the relocation of bulldozers, cranes,
                      and other construction vehicles.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Industrial companies contact us when they need
                      transportation services for forklifts and other heavy
                      machinery from one factory to another. In addition,
                      farmers rely on us to transport heavy equipment, including
                      tractors and other farm machinery, to their fields. Our
                      lowboy trucking company offers several benefits,
                      including:
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>➡️Door-to-Door Service:</b> We can deliver heavy
                      equipment to your business door or job site, regardless of
                      your needs. <br /> <br />
                      <b>➡️On-Time Delivery:</b> We will ensure that your
                      equipment is delivered punctually. <br /> <br />
                      <b>➡️Tracking Capabilities:</b> We will keep you informed
                      of the transportation process. Safe <br /> <br />
                      <b>➡️Transport:</b> Trained drivers who prioritize the
                      safety and well-being of every load they transport will
                      handle your heavy equipment.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751275553/Oversize-machinery-loaded-Heavy-haul-trucking-copy-e1712201968714_fvbnnq.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={600}
                        loading="lazy"
                        className="w-full h-[600px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16 animate-fade-in">
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transform transition-all duration-700 hover:scale-110 hover:rotate-12"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-900 bg-clip-text text-transparent">
                  Types of Lowboy Trailers
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Discover the various types of lowboy trailers available,
                  categorized by their gooseneck and trailer attachment methods
                  for optimal heavy-duty transportation.
                </p>
              </div>

              {/* Trailer Types Grid */}
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {trailerTypes.map((trailer, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animation: "slideUp 0.8s ease-out forwards",
                    }}
                  >
                    {/* Animated Background Gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, #ff5722, #003366)`,
                      }}
                    ></div>

                    {/* Content */}
                    <div className="relative p-8">
                      {/* Icon Header */}
                      <div className="flex flex-col md:flex-row md:items-center items-center mb-6">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center md:mr-4 mb-4 md:mb-0 transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <div className="text-white">{trailer.icon}</div>
                        </div>
                        <h3
                          className="text-2xl font-bold text-center md:text-left"
                          style={{ color: "#003366" }}
                        >
                          {trailer.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6 text-base text-center md:text-left">
                        {trailer.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3">
                        {trailer.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center justify-center md:justify-start text-sm font-medium transition-all duration-300 hover:translate-x-2"
                            style={{
                              animationDelay: `${
                                index * 200 + featureIndex * 100
                              }ms`,
                              animation: "fadeInLeft 0.6s ease-out forwards",
                            }}
                          >
                            <ArrowRight
                              className="w-4 h-4 mr-3 transition-colors duration-300"
                              style={{ color: "#ff5722" }}
                            />
                            <span style={{ color: "#003366" }}>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Effect Border */}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA Section */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="inline-flex items-center justify-center space-x-4 mb-4">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{
                      backgroundColor: "#003366",
                      animationDelay: "0.5s",
                    }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#ff5722", animationDelay: "1s" }}
                  ></div>
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#003366" }}
                >
                  Choose the Right Lowboy for Your Needs
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Each type of lowboy trailer offers unique advantages for
                  different hauling requirements. Consider your cargo
                  specifications and loading preferences when selecting the
                  optimal solution.
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16 animate-fade-in">
                <div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 transform transition-all duration-700 hover:scale-110 hover:rotate-12 shadow-lg"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  <DollarSign className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-900 bg-clip-text text-transparent">
                  What is the Cost of Lowboy Trucking?
                </h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    The cost of lowboy trucking can vary depending on various
                    factors. These factors include the distance that needs to be
                    traveled, the weight and dimensions of the load, fuel
                    prices, tolls, permits, and any additional services that may
                    be required.
                  </p>
                  <div className="flex items-center justify-center space-x-3 mt-6">
                    <TrendingUp
                      className="w-5 h-5"
                      style={{ color: "#ff5722" }}
                    />
                    <p
                      className="text-lg font-medium"
                      style={{ color: "#003366" }}
                    >
                      Prices can vary over time and may differ based on specific
                      circumstances.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cost Factors Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {costFactors.map((factor, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: "slideUp 0.8s ease-out forwards",
                    }}
                  >
                    {/* Animated Background */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, #ff5722, #003366)`,
                      }}
                    ></div>

                    {/* Decorative Top Border */}
                    <div
                      className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                      style={{ backgroundColor: "#ff5722" }}
                    ></div>

                    <div className="relative p-8">
                      {/* Icon and Title */}
                      <div className="flex flex-col md:flex-row md:items-start items-center mb-6">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center md:mr-5 mb-4 md:mb-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <div className="text-white">{factor.icon}</div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h3
                            className="text-2xl font-bold mb-2"
                            style={{ color: "#003366" }}
                          >
                            {factor.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6 text-base text-center md:text-left">
                        {factor.description}
                      </p>

                      {/* Key Points */}
                      <div className="space-y-3">
                        <div
                          className="text-sm font-semibold mb-3 text-center md:text-left"
                          style={{ color: "#003366" }}
                        >
                          Key Considerations:
                        </div>
                        {factor.keyPoints.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="flex items-center justify-center md:justify-start text-sm transition-all duration-300 hover:translate-x-2"
                            style={{
                              animationDelay: `${
                                index * 150 + pointIndex * 100
                              }ms`,
                              animation: "fadeInLeft 0.6s ease-out forwards",
                            }}
                          >
                            <div
                              className="w-2 h-2 rounded-full mr-3 transition-all duration-300 group-hover:scale-125"
                              style={{ backgroundColor: "#ff5722" }}
                            ></div>
                            <span className="text-gray-600 font-medium">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom accent line */}
                      <div
                        className="absolute bottom-0 left-8 right-8 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                        style={{ backgroundColor: "#003366", opacity: 0.3 }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost Variables Summary */}
              <div
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4"
                style={{ borderColor: "#ff5722" }}
              >
                <div className="text-center">
                  <div className="flex justify-center items-center space-x-4 mb-6">
                    <div className="flex space-x-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full animate-pulse"
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#ff5722" : "#003366",
                            animationDelay: `${i * 0.5}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Multiple Variables Impact Your Total Cost
                  </h3>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                    Understanding these key factors helps you better estimate
                    and plan for your lowboy trucking expenses. Each shipment is
                    unique, and professional consultation ensures accurate cost
                    assessment for your specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16 animate-fade-in">
                <div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 transform transition-all duration-700 hover:scale-110 hover:rotate-12 shadow-lg"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  <Truck className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-900 bg-clip-text text-transparent">
                  How to Transport a Lowboy Trailer to a New Destination?
                </h2>
              </div>

              {/* Transportation Process Section */}
              <div
                className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-l-4"
                style={{ borderColor: "#ff5722" }}
              >
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The most convenient method for transporting a lowboy trailer
                    is by utilizing a truck to tow it to its designated drop-off
                    location. We will arrange a tailor and driver to transport
                    the lowboy to your desired destination.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The cost of transporting a trailer load may be lower than an
                    average load. This is because loading and unloading the
                    trailer requires less effort. However, it's important to
                    note that the company still owns the driver and truck.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A lowboy is designed to transport large loads, so it is
                    built to be sturdy. Therefore, it is essential to remember
                    that it is unlikely to sustain damage during the journey.
                  </p>
                  <div
                    className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-6 border-l-4"
                    style={{ borderColor: "#003366" }}
                  >
                    <p
                      className="text-lg font-medium"
                      style={{ color: "#003366" }}
                    >
                      However, it is equally important to hire a reputable
                      company as it will guarantee that the lowboy reaches its
                      destination in optimal condition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits Section Header */}
              <div className="text-center mb-12">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#003366" }}
                >
                  Benefits of Lowboy Trucking Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Lowboy trucking services provide numerous advantages for
                  various industries and transportation requirements.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "slideUp 0.8s ease-out forwards",
                    }}
                  >
                    {/* Animated Background */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, #ff5722, #003366)`,
                      }}
                    ></div>

                    {/* Decorative Top Border */}
                    <div
                      className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                      style={{ backgroundColor: "#ff5722" }}
                    ></div>

                    <div className="relative p-8">
                      {/* Icon and Title */}
                      <div className="flex flex-col md:flex-row md:items-start items-center mb-6">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center md:mr-5 mb-4 md:mb-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <div className="text-white">{benefit.icon}</div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h3
                            className="text-2xl font-bold mb-2"
                            style={{ color: "#003366" }}
                          >
                            {benefit.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6 text-base text-center md:text-left">
                        {benefit.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <div
                          className="text-sm font-semibold mb-3 text-center md:text-left"
                          style={{ color: "#003366" }}
                        >
                          Key Features:
                        </div>
                        {benefit.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center justify-center md:justify-start text-sm transition-all duration-300 hover:translate-x-2"
                            style={{
                              animationDelay: `${
                                index * 100 + featureIndex * 80
                              }ms`,
                              animation: "fadeInLeft 0.6s ease-out forwards",
                            }}
                          >
                            <div
                              className="w-2 h-2 rounded-full mr-3 transition-all duration-300 group-hover:scale-125"
                              style={{ backgroundColor: "#ff5722" }}
                            ></div>
                            <span className="text-gray-600 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom accent line */}
                      <div
                        className="absolute bottom-0 left-8 right-8 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                        style={{ backgroundColor: "#003366", opacity: 0.3 }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="flex justify-center items-center space-x-4 mb-6">
                    <div className="flex space-x-2">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#ff5722" : "#003366",
                            animationDelay: `${i * 0.3}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Professional Lowboy Transportation Solutions
                  </h3>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                    From heavy equipment transport to cost-effective logistics,
                    lowboy trucking services deliver comprehensive solutions for
                    your specialized transportation needs with unmatched
                    reliability and safety.
                  </p>
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
                        Rapid Auto Shipping | Best Lowboy Trucking Service
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Rapid Auto Shipping strives to provide comprehensive
                      shipping solutions that handle every aspect of the process
                      for our customers. Our services offer round-the-clock
                      customer service, complimentary cancellations, and
                      convenient door-to-door shipping. Our team is always ready
                      to provide top-notch lowboy trailer shipping solutions.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      With our extensive industry experience, we have become the
                      leading experts in providing lowboy transport services. We
                      prioritize meticulous attention to every detail of your
                      farm equipment transport, guaranteeing the provision of
                      the safest shipping services available. Please get in
                      touch with our office for further information on how Rapid
                      Auto Shipping can utilize our fleet of lowboy trailers to
                      efficiently transport one or multiple tractors across the
                      country on your behalf.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Lowboy shipping is highly versatile because each option
                      offers different cargo options. Lowboy models offer a
                      variety of suspension options to choose from, providing
                      additional versatility. Today, you can easily transport
                      your large farm equipment using a lowboy trailer. Contact
                      our experts at +1 (833) 233-4447 to book your shipment.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        {/* Image with enhanced effects */}
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751277805/30-Ton-Lowboy-Trailer-Lowboy-Truck-Dimensions_qoge2c.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          width={800}
                          height={500}
                          loading="lazy"
                          className="w-full h-[500px] object-cover rounded-2xl shadow-2xl 
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