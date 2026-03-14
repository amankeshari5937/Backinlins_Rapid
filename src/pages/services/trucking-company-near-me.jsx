"use client";
import React, { useState, useEffect} from "react";
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
  Phone,
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
} from "lucide-react";
import { MapPin } from "lucide-react";

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

  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const truckingTypes = [
    {
      title: "Truckload Shipping",
      description:
        "Truckload freight is freight that can occupy a container. We are prepared to assist in getting this critical freight transported to locations across the country.",
    },
    {
      title: "Refrigerated Shipping",
      description:
        "The requirement to keep temperature-sensitive freight chilled while in transportation. It makes a difference, and our team works hard to maintain this sensitive equilibrium during shipping.",
    },
    {
      title: "Expedited Freight",
      description:
        "This type of freight must travel swiftly from pickup to delivery. There is no time to squander. Rapid Auto Shipping knows the importance of expedited freight delivery.",
    },
    {
      title: "Heavy Haul Trucking",
      description:
        "Large machines and equipment require additional room and attention during shipping. Heavy haul trucking near me manages oversized freight and can handle significant tasks.",
    },
    {
      title: "Hazmat Carriers",
      description:
        "Shipping dangerous goods necessitates meticulous planning. Count on expert hazmat transporters to simplify this complex process with our knowledge, experience, and excellent truck near me service.",
    },
    {
      title: "Hazmat",
      description:
        "When it comes to transporting hazardous goods, we know the laws of the road. So allow our hazmat carriers to manage your next cargo.",
    },
  ];

  const advantages = [
    {
      title: "DISTANCE TRAVEL",
      description:
        "Pick up in any of the cities listed below, then be transported to your destination. If your pickup spot falls within one of our service areas, we can also transport you to nearby cities, airports, and tourism destinations.",
    },
    {
      title: "PROFESSIONAL CHAUFFEUR",
      description:
        "Each of our chauffeurs has received the necessary training to deliver top-notch service. Our knowledgeable drivers and comfortable sedans provide a delightful experience for longer journeys.",
    },
    {
      title: "PRICES ARE FIXED",
      description:
        "We use a fixed-price approach for pre-arranged excursions. You will therefore be aware of the entire cost of your trip before completing your ticket. Consequently, the price of your journey stays the same even if you experience traffic or are otherwise delayed.",
    },
  ];

  const faqData = [
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Do you offer trucking services in my area?",
      answer:
        "Yes! Rapid Auto Shipping operates nationwide with a vast network of local and regional carriers. No matter where you are, we can arrange fast and reliable trucking services near you.",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      question: "What types of vehicles and equipment do you transport?",
      answer:
        "We transport cars, trucks, motorcycles, heavy equipment, food trucks, forklifts, and more. Whether you're moving one vehicle or managing a fleet, we've got the right solution.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      question: "How do I find the best trucking company near me?",
      answer:
        "Look for a company with experience, nationwide coverage, insurance, and great reviews like Rapid Auto Shipping. We combine local accessibility with national expertise.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "Do you provide door-to-door service?",
      answer:
        "Yes! We offer door-to-door transport for most services, meaning we'll pick up and deliver directly to your home, business, dealership, or auction site.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "How much does local or regional transport cost?",
      answer:
        "Pricing varies by distance, vehicle size, and route. Local hauls are typically more affordable. Get a fast, free quote online or by calling our support team.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      question: "How do I schedule a pickup near me?",
      answer:
        "Just fill out our online form or call us. Our team will match you with the nearest available carrier and coordinate a quick, hassle-free pickup.",
    },
  ];

  return (
    <>
      <Head>
        <title>Trucking company near me services | +1-833-233-4447</title>
        <meta
          name="description"
          content="While there is no magic formula for finding a trucking company near me, you can do some easy things to improve your odds of finding one that works for you."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/trucking-company-near-me"
        />
        <meta
          property="og:title"
          content="Trucking company near me services | +1-833-233-4447"
        />
        <meta
          property="og:description"
          content="While there is no magic formula for finding a trucking company near me, you can do some easy things to improve your odds of finding one that works for you."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/komatsu-equipment-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753096878/552137915_jxkrjb.webp"
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
                      "https://rapidautoshipping.com/services/trucking-company-near-me",
                    name: "trucking-company-near-me",
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
              serviceType: "Trucking company near me services",
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
                "While there is no magic formula for finding a trucking company near me, you can do some easy things to improve your odds of finding one that works for you.",

              url: "https://rapidautoshipping.com/services/trucking-company-near-me",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753096612/trucking_company_near_me_3_jwmpux.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753096612/trucking_company_near_me_3_jwmpux.webp"
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
                    Trucking Company{" "}
                    <span className="text-[#ff5722]">Near Me Services</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Numerous tools are available, both online and offline, to
                    assist you in locating local and national. While there is no
                    magic formula for finding a trucking company near me, you
                    can do some easy things to improve your odds of finding one
                    that works for you.
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
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        How Do I Pick a Reputable Trucking Company Near Me?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Finding the finest trucking company near me to work for is
                      one of the most crucial decisions you'll have to make in
                      your job and one of the most difficult. Here are some
                      things you should do when looking for the best trucking
                      company near me you can work for to help you curtail your
                      options and choose the best one for a promising driving
                      career
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753096759/trucking_company_near_me_2_ffmnki.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[300px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
                    Type Of Trucking Company Near Me
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Professional trucking services for all your transportation
                    needs, from expedited freight to luxury vehicles
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="https://rapidautoshipping.com/services/trucking-company-near-me">
                      <button className="secondary-bg text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                        Get Quote Now
                      </button>
                    </Link>
                    <Link href="tel:+1833233447">
                      <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                        Call (833) 233-4447
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Trucking Types Section */}
            <section id="services" className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {truckingTypes.map((type, index) => (
                    <div
                      key={index}
                      className={`fade-in ${
                        isVisible ? "active" : ""
                      } card-hover`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 secondary-bg h-full">
                        <h3 className="text-2xl font-bold primary-color mb-4">
                          {type.title}
                        </h3>
                        <p className="text-white leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Open Air and Enclosed Transport Section */}
            <section id="transport-types" className="py-16 gradient-bg">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Open Air */}
                  <div className={`fade-in ${isVisible ? "active" : ""}`}>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 h-full">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-white">
                          Open Air Trucking Company Near Me
                        </h3>
                      </div>
                      <p className="text-white/90 leading-relaxed mb-4">
                        Open truck delivery, also known as open carrier
                        shipment, is the most cost-effective choice. This is the
                        same method of transportation used by automobile
                        manufacturers to move new vehicles, so if you've ever
                        seen a trailer loaded with numerous vehicles on the
                        freeway, you've seen how open auto transports operate.
                      </p>
                      <p className="text-white/90 leading-relaxed">
                        The primary advantage of open car transit is its cheap
                        cost. Furthermore, because your vehicle will share a
                        spot with other vehicles, the carrier can charge you a
                        reduced rate, making long-distance auto transportation a
                        viable choice.
                      </p>
                    </div>
                  </div>

                  {/* Enclosed */}
                  <div
                    className={`fade-in ${isVisible ? "active" : ""}`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 h-full">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-white">
                          Enclosed Trucking Company Near Me
                        </h3>
                      </div>
                      <p className="text-white/90 leading-relaxed mb-4">
                        Enclosed car delivery means your automobile will be
                        transported in an enclosed trailer, protected from the
                        elements and road debris. Although you will still share
                        a space with other vehicles, a covered trailer usually
                        only holds seven.
                      </p>
                      <p className="text-white/90 leading-relaxed">
                        This option is considerably more expensive, potentially
                        adding $400 to your transportation costs, but it
                        provides a more significant piece of mind during car
                        shipping. Furthermore, exotic, expensive, uncommon
                        automobiles are more frequently carried in " enclosed
                        vehicles."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Door to Door and Terminal to Terminal */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Door to Door */}
                  <div className={`fade-in ${isVisible ? "active" : ""}`}>
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 secondary-bg">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold primary-color">
                          Door To Door Trucking Company Near Me
                        </h3>
                      </div>
                      <p className="text-white leading-relaxed mb-4">
                        There are numerous opportunities for expansion in the
                        massive shipping and logistics industry. However, if you
                        are about to explore your trucking company near me, you
                        must comprehend how it works and how it can improve your
                        supply chain and import/export operations.
                      </p>
                      <p className="text-white leading-relaxed">
                        A door to door shipping dispatch service is now one of
                        the essential parts of the logistics business, growing
                        in popularity worldwide. It provides your company with a
                        dependable, integrated transportation method that
                        eliminates all the trouble you must deal with when
                        moving your goods.
                      </p>
                    </div>
                  </div>

                  {/* Terminal to Terminal */}
                  <div
                    className={`fade-in ${isVisible ? "active" : ""}`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 secondary-bg">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold primary-color">
                          Terminal To Terminal Trucking Company Near Me
                        </h3>
                      </div>
                      <p className="text-white leading-relaxed mb-4">
                        First, you take your car to a designated drop-off
                        location, where it will stay until picked up by your
                        carrier. Then, when your vehicle is gathered, the
                        airline transports it to the final terminal spot, where
                        you will collect it. Sometimes, you may choose a hybrid
                        service where the vehicle is assembled at your entrance
                        and delivered to a target terminal.
                      </p>
                      <p className="text-white leading-relaxed mb-4">
                        Similarly, you may leave your vehicle at an airport for
                        pickup and organize for delivery to your door at your
                        destination to save time and ease.
                      </p>
                      <p className="text-white leading-relaxed mb-4">
                        The vehicle transportation trucking company near me has
                        evolved dramatically over the last few decades. As a
                        result, several modes of transportation, including
                        terminal to terminal, are also decreasing.
                      </p>
                      <p className="text-white leading-relaxed">
                        You may have heard this technique is a less expensive
                        vehicle transport method. Not so anymore, thanks to
                        increased storage center fees. Based on location,
                        terminal fees typically range from $15 to $35 per day,
                        with facilities close to large metropolitan regions
                        costing more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Transporting Services Section */}
            <section className="py-16 gradient-bg">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Transporting Trucking Company Near Me
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                      <p className="text-lg text-white/90 leading-relaxed mb-4">
                        Whether you've just purchased a new (or new to you)
                        truck, or you're relocating and need to send your truck
                        to your new home, Rapid Auto Shipping can help alleviate
                        tension and cast some light on the truck shipment
                        process.
                      </p>
                      <p className="text-lg text-white/90 leading-relaxed mb-4">
                        We'll assist you in obtaining shipping quotes from truck
                        companies near me and advise you on how to send a truck
                        along the road. If you require help, please call us, and
                        we will get you back on the road to your truck delivery.
                      </p>
                      <p className="text-lg text-white/90 leading-relaxed">
                        The Rapid Auto Shipping community is excellent for
                        locating the best vehicle carriers at the "best
                        transportation prices." First, create a shipment
                        description that includes your wants, the make and model
                        of the vehicle, and any unique requirements.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <p className="text-lg text-white/90 leading-relaxed">
                      Truck company near me will give you shipping quotes to
                      evaluate. In addition, you can personally speak with the
                      service providers and examine their trucking company near
                      me profiles to ensure you work with the best.
                    </p>
                  </div>
                </div>

                {/* Services Description */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-12">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Trucking Companies Near Me Services
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-4">
                    Our team takes the time to attend to and comprehend your
                    requirements. We pose questions to assist us in knowing and
                    understanding what is being shipped. Then, we use those
                    specifics to offer the best overall fit choices.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    This procedure necessitates paying attention to the details
                    and preparing to get it right every time. We're
                    transportation experts who can help you negotiate the
                    details of transporting your truck. As a result, you will
                    concur that Rapid Auto Shipping is the finest trucking
                    company near me, locally, regionally, or nationwide.
                  </p>
                </div>

                {/* Luxury Services */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    About The Trucking Company's Services Offered To Luxury
                    Vehicle Owners
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Rapid Auto Shipping is a "luxury car transporter" with over
                    two decades of expertise transporting to places across the
                    country and around the globe. We've transported everything
                    from a luxury car for an individual proprietor to complete
                    fleets of high-end vehicles for dealerships and trade
                    exhibits. In addition, we can send a premium vehicle or
                    truck with an expert touch if you need it delivered.
                  </p>
                </div>
              </div>
            </section>

            {/* Advantages Section */}
            <section id="advantages" className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold primary-color mb-6">
                    The Advantages Of Using Trucking Companies Near Me
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {advantages.map((advantage, index) => (
                    <div
                      key={index}
                      className={`fade-in ${
                        isVisible ? "active" : ""
                      } card-hover`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 secondary-bg h-full text-center">
                        <h3 className="text-2xl font-bold primary-color mb-4">
                          {advantage.title}
                        </h3>
                        <p className="text-white leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold primary-color mb-6">
                    How Much Does Trucking Service Cost - Trucking Companies
                    Near Me?
                  </h2>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-l-4 secondary-bg">
                  <p className="text-lg text-white leading-relaxed mb-6">
                    The truck's size, distance, timeframe, and delivery service
                    that best suits your needs determine the expense of shipping
                    a vehicle. On average, shipping your vehicle less than 100
                    miles costs $4.15 per mile, but transporting your truck less
                    than 1000 miles costs $1.40 per mile.
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    Check out our website for more information on how much your
                    truck shipping services may cost. In addition, you'll
                    understand how we operate by seeing hundreds of vehicle
                    dispatches finished through Rapid Auto Shipping.
                  </p>
                </div>
              </div>
            </section>

            {/* Quotes Section */}
            <section className="py-16 gradient-bg">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Transportation Trucking Company Near Me Services quotes
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <p className="text-lg text-white/90 leading-relaxed mb-4">
                      Your personal logistics agent will guide you through the
                      entire truck shipment process. We work with the most
                      seasoned drivers, locate the best shipping trailer, and
                      acquire all necessary papers and licenses. We also handle
                      pilot vehicles if your truck transit needs them. We
                      provide quality transportation services every step of the
                      way, whether you need to tow a heavy duty vehicle across
                      town or cross country.
                    </p>
                    <p className="text-lg text-white/90 leading-relaxed mb-4">
                      Rapid Auto Shipping tries to improve each truck transfer
                      experience. We value your company's truck transportation
                      expertise. Every mode of transportation is tailored to
                      your specific requirements. When you contact a Rapid Auto
                      Shipping logistics agent, we will address your needs and
                      concerns and provide quality transportation options.
                    </p>
                    <p className="text-lg text-white/90 leading-relaxed">
                      Calculating truck shipping costs is not easy. Several
                      factors will impact the cost of your auto transportation.
                      To receive an estimate cost, we recommend filling out the
                      quote form.
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
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        Plan A Pickup
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Check out our website for more information on how much
                      your truck shipping services may cost. In addition, you'll
                      understand how we operate by seeing hundreds of vehicle
                      dispatches finished through Rapid Auto Shipping.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        <img
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753096878/552137915_jxkrjb.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          className="w-full h-[300px] object-cover rounded-2xl shadow-2xl 
                 transition-all duration-700 ease-in-out
                 group-hover:scale-105 group-hover:shadow-3xl
                 group-hover:brightness-110 group-hover:contrast-105"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "/placeholder-transport.jpg";
                            e.target.alt = "Transport service placeholder";
                          }}
                        />
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
