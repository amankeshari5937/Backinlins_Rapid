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
  ChevronDown,
  Network,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hello = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [activeSection, setActiveSection] = useState("enclosed-open");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const haulingSolutions = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Trailer Shipping",
      description:
        "A trailer is a vehicle without its engine, designed to be towed by another vehicle. Different types of trailers include Standard Flatbed Trailers, Removable Gooseneck Trailers (RGNs), Lowboy Trailers (for better height clearance), Step Deck Trailers, Hot Shot Trailers (for those urgent hauls), and more. Trailer shipping generally refers to the transport of goods using a trailer, which is an unpowered vehicle towed by a truck or tractor, and can be either a through-trailer (where the cargo stays on the same trailer throughout the journey) or a transloaded trailer (where the cargo is transferred to a different trailer at the border). At Rapid Auto Shipping, we specialize in hauling all types of trailers (flatbed, RGN, drop deck, and utility trailers). Our nationwide coverage for trailer shipping is licensed, bonded, and insured, ensuring safe and reliable trailer transport. We provide trailer towing services for any inoperable or damaged trailers, which involves utilizing another trailer to transport yours. Additionally, we offer power-only transport to pull your trailers with a semi-truck or hotshot truck. We make sure your trailer is picked up and delivered on time. A dedicated logistics agent will find the best shipping solutions to transport your trailer. It's essential to partner with a trailer shipping company that has the experience and reputation to transport your equipment safely.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Power-Only Trucking",
      description:
        'The term "power-only trucking," also known as drop-and-hook shipping, emphasizes that the carrier provides only the "power" (the tractor and driver) and not the trailer itself. Sometimes, shippers who own or lease their trailers but lack the resources for a trucking fleet or drivers often use power-only trucking. That is where we step in. You can get one of our trained drivers to assist you. They are available all week, and there is never a wrong time to contact us for the power-only trailer delivery services. Additionally, they are insured and licensed to transport cargo. When dealing with us, expect no complications with the law. Our nationwide coverage ensures that you get hassle-free and safe delivery of your goods at all locations around the country.',
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "Oversize Loads",
      description:
        'An oversized load is any shipment that exceeds standard legal size and weight limits. When a vehicle or cargo exceeds standard legal size or weight limits, typically exceeding 8.5 feet in width, 13.5 feet in height, or 80,000 pounds in weight, it usually requires a permit. It may necessitate escort vehicles ( if the width exceeds 12 feet). Oversize loads include Oversize Construction Equipment, Oversize Industrial Materials, Oversize Agricultural Machinery, Oversize Mining Equipment, Oversize Heavy Machinery, and More. Oversize hauling is required for these vehicles. We have expertise in large or heavy trailers/equipment, and "We handle permits and routing for oversized loads," and follow all state regulations in case of heavy equipment transport for safe delivery.',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Experienced drivers with decades of hauling expertise.",
      description:
        "There are multiple types of trailer transport options for shipping heavy equipment and trailers but we are experienced haulers with decades of hauling expertise. Our drivers are capable of hauling any type of trailer and heavy equipment as they are experienced and well-trained for these types of hauling services.",
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Competitive pricing with no hidden fees.",
      description:
        "Our costs are very competitive and transparent. We provide affordable rates and don't charge any upfront costs. You'll receive a transparent, no-obligation quote with no hidden fees. Ready to ship? We'll get started immediately to get your oversized load on the road.",
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: "24/7 customer support for your peace of mind.",
      description:
        "At RAPID AUTO SHIPPING, trailer transport service isn't a 9 - 5 job. Neither is our customer support. Your dedicated logistics agent is available 24/7 to answer any questions or concerns you may have. Transport with us, because we're always here when you need us. By choosing RAPID AUTO SHIPPING, you bypass the usual challenges associated with shipping large items and go directly to enjoying the benefits: cost-effective, secure, and smooth delivery services, giving you peace of mind.",
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "Nationwide network for fast, reliable service.",
      description:
        "Rapid Auto Shipping is a top-rated trailer shipping company with expertise in secure, safe, hassle-free, and reliable trailer transport across the United States. We have a nationwide network of trailer carriers who follow all regulations for trailer shipping, including obtaining the proper permits for transport.",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Fleet Quality and Maintenance:",
      description:
        "The condition of the hauling fleet is a direct indicator of the service quality you can expect. A well-maintained fleet reduces the risk of delays due to breakdowns and ensures the safe transport of your goods. Rapid Auto Shipping maintains a state-of-the-art fleet, regularly serviced and upgraded, to ensure efficiency and safety in every haul.",
    },
  ];

const faqData = [
  {
    icon: <Truck className="w-5 h-5" />,
    question: "What types of trailers can you transport?",
    answer:
      "The Trailer types that we can transport are Beam trailers, Flatbed trailers, Outrigger trailers, Belly Dump trailers, Hotshot trailers, RGN trailers, Concession trailers, Landoll trailers, Constega trailers, Live bottom trailers, Step deck trailers, Drop deck trailers, Open deck trailers, and tandem axle trailers, among others.",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "How much does trailer transport cost?",
    answer:
      "The transport cost of a trailer can vary from $ 1,000 to $ 2,000 or more, depending on factors such as distance, trailer type, and whether you choose open or enclosed transport.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    question: "Do you offer power-only trucking?",
    answer:
      "Yes, we do offer power-only trucking at RAPID AUTO SHIPPING, where we provide the semi-tractor and driver (the \"power unit\") to haul a shipper's trailer.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Can you handle oversized or heavy loads?",
    answer:
      "Yes, we do handle oversized loads and heavy loads. Oversized loads can be anything from shipping containers to industrial machinery. If it doesn't fit the standard dimensions of transport, it's considered oversized. Oversized load transport solutions require a skilled and knowledgeable team.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "How long does shipping take?",
    answer:
      "The shipping time for trailers may take 1-2 weeks, depending on the distance, size of the load, pickup and delivery points, and various other factors.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "What if my freight is too big for a standard trailer?",
    answer:
      "If the freight is too tall or too wide, a flatbed trailer might be an option.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    question: "Can I leave items inside the trailer?",
    answer:
      "Yes, but ensure everything is secured to prevent shifting during transport.",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    question: "Are your drivers properly licensed and insured?",
    answer:
      "Reputable companies will have licensed and insured drivers.",
  },
];
  return (
    <>
      <Head>
        <title>Trailer Transport Service | Nationwide Hauling</title>
        <meta
          name="description"
          content="Low-priced trailer transport services in all 50 states. Skillful transporting for flatbeds, RGNs, and other types. Obtain your Free quote now!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/trailer-transport-service"
        />
        <meta
          property="og:title"
          content="Trailer Transport Service | Nationwide Hauling"
        />
        <meta
          property="og:description"
          content="Low-priced trailer transport services in all 50 states. Skillful transporting for flatbeds, RGNs, and other types. Obtain your Free quote now!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/trailer-transport-service"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753167339/trailer_transport_service_4_gd7v03.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Trailer Transport Service | Nationwide Hauling",
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
                "Low-priced trailer transport services in all 50 states. Skillful transporting for flatbeds, RGNs, and other types. Obtain your Free quote now!",
              url: "https://rapidautoshipping.com/trailer-transport-service",
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
                  name: "Trailer Transport Service | Nationwide Hauling",
                  item: "https://rapidautoshipping.com/trailer-transport-service",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753167333/trailer_transport_service_3_aglq8z.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753167333/trailer_transport_service_3_aglq8z.webp"
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
                    Reliable Trailer Transport Services{" "}
                    <span className="text-[rgb(255,87,34)]">Nationwide</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    A trailer is an unpowered vehicle towed by a powered
                    vehicle, such as a car or a truck. Trailers are typically
                    used to transport large or heavy cargo. It can be a full
                    trailer (the entire weight of the trailer is supported by
                    its wheels), semi-trailer (a portion of the trailer weight
                    is supported by its wheels and remaining by the towing
                    vehicle), and, travel trailer (a vehicle that is attached to
                    an automobile and used as a mobile home or place of
                    business). A trailer transport service refers to the
                    transportation of trailers from one place to another.
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
                        Introduction
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      In the dynamic landscape of vehicle transportation,
                      trailer transport services require a significant place, as
                      they necessitate immense expertise in their management and
                      transportation. Not all shipping companies have the means
                      to transport travel trailers, boats, and other large items
                      across long distances. Bulky trailers and campers require
                      heavy-duty vehicles for their transportation. At RAPID
                      AUTO SHIPPING, we have the resources and the skills
                      required for trailer transport service. So, need a trailer
                      moved? Look no further than RAPID AUTO SHIPPING, which
                      offers expert trailer transport services across the U.S.,
                      including key benefits like affordable rates, experienced
                      drivers, and safe delivery to all 50 states.We offer the
                      best solutions for transporting a trailer across the
                      country or for those who need power-only options to move
                      it across town. Our drivers operate large trucks to
                      accommodate the largest RVs, boats, and other vehicles you
                      need to be towed. Our range of trucks supports a variety
                      of towable vehicles, including boats, recreational travel
                      trailers, horse and cattle trailers, portable machinery,
                      and more.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753167339/trailer_transport_service_4_gd7v03.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
                    Our Trailer Hauling Solutions
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Professional trailer hauling services with nationwide
                    coverage, experienced drivers, and competitive pricing
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="https://rapidautoshipping.com/trailer-transport-service">
                    <button className="sprimary-bg border-2 border-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
                      Get Quote Now
                    </button>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </section>

            {/* Hauling Solutions Section */}
            <section id="solutions" className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="space-y-12">
                  {haulingSolutions.map((solution, index) => (
                    <div
                      key={index}
                      className={`fade-in ${
                        isVisible ? "active" : ""
                      } card-hover`}
                      style={{ transitionDelay: `${index * 300}ms` }}
                    >
                      <div
                        className={`bg-white rounded-2xl shadow-2xl p-8 ${
                          index % 2 === 0
                            ? "border-l-4 primary-bg"
                            : "border-l-4 primary-bg"
                        }`}
                      >
                        {/* Mobile: Icon centered and above content */}
                        <div className="flex flex-col md:flex-row md:items-start md:space-x-6 space-y-4 md:space-y-0">
                          <div className="flex justify-center md:justify-start flex-shrink-0">
                            <div
                              className={
                                index % 2 === 0
                                  ? "secondary-color"
                                  : "secondary-color"
                              }
                            >
                              {solution.icon}
                            </div>
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold secondary-color mb-4">
                              {solution.title}
                            </h3>
                            <p className="text-white leading-relaxed text-lg">
                              {solution.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="why-choose-us" className="py-16 gradient-bg">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Why Choose Us
                  </h2>
                  <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                    Selecting the right trailer hauling services provider in the
                    USA is a decision that should be made with careful
                    consideration of factors such as nationwide coverage,
                    experienced drivers, competitive pricing, customer service
                    and support, fleet quality and maintenance, among others. We
                    here at Rapid Auto Shipping stand out as a provider that not
                    only meets but exceeds these criteria, ensuring that your
                    hauling needs are met with professionalism and excellence.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {whyChooseUs.map((feature, index) => (
                    <div
                      key={index}
                      className={`fade-in ${
                        isVisible ? "active" : ""
                      } card-hover`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`${
                          index % 2 === 0 ? "bg-white/10" : "bg-blue-900/20"
                        } backdrop-blur-md rounded-2xl p-8 ${
                          index % 2 === 0
                            ? "border border-orange-300/30"
                            : "border border-blue-300/30"
                        } h-full`}
                      >
                        {/* Mobile: Icon centered and above content */}
                        <div className="flex flex-col md:flex-row md:items-start md:space-x-6 space-y-4 md:space-y-0">
                          <div className="flex justify-center md:justify-start flex-shrink-0">
                            <div
                              className={
                                index % 2 === 0
                                  ? "text-orange-400"
                                  : "text-blue-300"
                              }
                            >
                              {feature.icon}
                            </div>
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                              {feature.title}
                            </h3>
                            <p className="text-white/90 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
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
