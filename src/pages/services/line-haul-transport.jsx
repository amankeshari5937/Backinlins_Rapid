"use client";

import React, { useState, useEffect } from "react";

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
  Train,
  Plane,
  Ship,
  Award,
  PhoneCall,
  Route,
  Settings,
  Zap,
  Gauge,
  Target,
  Activity,
  Navigation,
  BarChart3,
  Eye,
  Search,
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
  Phone,
  Mail,
  ArrowRight,
  Calendar,
  Gift,
  XCircle,
  MapPin,
} from "lucide-react";

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

  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const transportModes = [
    {
      name: "Truck",
      icon: Truck,
      description: "Road transport for flexible delivery",
      color: "from-[#003366] to-[#ff5722]",
    },
    {
      name: "Rail",
      icon: Train,
      description: "Efficient long-distance freight transport",
      color: "from-[#ff5722] to-[#003366]",
    },
    {
      name: "Airplane",
      icon: Plane,
      description: "Fast air cargo for time-sensitive shipments",
      color: "from-[#003366] to-[#ff5722]",
    },
    {
      name: "Ship",
      icon: Ship,
      description: "Ocean transport for large volumes",
      color: "from-[#ff5722] to-[#003366]",
    },
  ];

  const efficiencyTips = [
    {
      title: "Maintain meticulous records",
      description:
        "Keep accurate records of each delivery, including the weight, delivery time, driver assigned, location, and customer. To better understand your company's shipping capacities, keep line haul tracking of the power of each depot, sorting facility, and vehicle in your fleet.",
      icon: FileText,
      color: "from-[#003366] to-[#ff5722]",
    },
    {
      title: "Reward drivers with a competitive pay and benefits package",
      description:
        "Rewarding drivers with a competitive compensation and benefits package will enhance their productivity and business loyalty and encourage qualified individuals to join your team. To show drivers you care about them, offer incentives for outstanding performance and extra effort.",
      icon: Award,
      color: "from-[#ff5722] to-[#003366]",
    },
    {
      title: "Keep customers up to date",
      description:
        "Customers should be informed about delivery times, delays, and other pertinent information regarding their freight. This aids in developing your relationship with your consumers and provides a more effective supply chain through communication.",
      icon: PhoneCall,
      color: "from-[#003366] to-[#ff5722]",
    },
    {
      title: "Determine the best routes",
      description:
        "Identifying the best delivery routes by land, air, or sea ensures that freight is delivered on time while optimizing the journey to reduce transportation costs and save money for the organization and the consumer.",
      icon: Route,
      color: "from-[#ff5722] to-[#003366]",
    },
    {
      title: "Use the appropriate software",
      description:
        "You can use digital tracking software to keep track of crucial metrics for each delivery and improve the efficiency of your freight transportation company. There are hundreds of digital tools for freight companies available on the internet.",
      icon: Settings,
      color: "from-[#003366] to-[#ff5722]",
    },
  ];

  const benefits = [
    {
      title: "Lower linehaul transportation costs",
      description:
        "Line haul transportation consists of a team of drivers responsible for traveling shorter distances between various locations. There will be no charges for hotel accommodations or any expenses incurred for overnight stays. Transporters are no longer obligated to wait until they have a total cargo or to depart when only partially loaded. Line haul carrier can optimize their operations and effectively lower costs by consolidating and reconsolidating products. These cost savings are then transferred to you, the customer.",
      icon: DollarSign,
      color: "text-[#ff5722]",
      bg: "bg-[#ff5722]/10",
    },
    {
      title: "Higher output of delivery",
      description:
        "Efficiency is significantly increased by implementing data line haul tracking, analytics, and continuous optimization. Rapid auto shipping lines provide a significant advantage to freight carriers by enabling the transportation of large quantities of goods within the same distance as haul carriers. This saves valuable time and costs for shippers.",
      icon: TrendingUp,
      color: "text-[#003366]",
      bg: "bg-[#003366]/10",
    },
    {
      title: "Faster delivery",
      description:
        "Thanks to constant data monitoring and real-time analysis, line haul carriers can recognize and fix problems as they arise. Line haul drivers are often updated with suggestions for other routes to save time, whether a particular road is experiencing difficulty or a specific port is very congested. Packages are less likely to get blocked, and in many cases, they arrive quicker than conventional long-distance delivery.",
      icon: Zap,
      color: "text-[#ff5722]",
      bg: "bg-[#ff5722]/10",
    },
    {
      title: "Increased delivery efficiency",
      description:
        "Customer service plays a vital role in the efforts of companies to cultivate brand loyalty, as modern customers hold exceptionally high expectations. The user desires the ability to track their delivery and receive it promptly. One effective strategy for retaining customers is establishing a partnership with a line haul carrier. This collaboration can offer customers an open and transparent delivery experience, crucial for building trust and loyalty.",
      icon: Gauge,
      color: "text-[#003366]",
      bg: "bg-[#003366]/10",
    },
    {
      title: "Improved customer relationships",
      description:
        "Line haul transportation offers a faster, more cost-effective, and highly efficient method for moving freight. Improved customer and freight carrier relationships can lead to a more effective supply chain. Freight carriers have the advantage of being better equipped to ensure the quality of every freight delivery, allowing them to charge lower prices per delivery. Customers greatly appreciate the affordable prices and prompt delivery of the essential commodities and raw materials necessary for their day-to-day operations.",
      icon: Users,
      color: "text-[#ff5722]",
      bg: "bg-[#ff5722]/10",
    },
  ];

  const faqData = [
    {
      icon: <Truck className="w-5 h-5" />,
      question: "What is line haul transportation?",
      answer:
        "Line haul transportation refers to the movement of freight, vehicles, or goods between two major hubs, terminals, or cities, typically over long distances. It's ideal for bulk shipments, fleet moves, and scheduled routes.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "What types of cargo can you move via line haul service?",
      answer:
        "We handle everything from cars, trucks, motorcycles, and heavy equipment to palletized freight and bulk commercial loads. Whether it's a single unit or a large fleet, we've got you covered.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Do you provide line haul services nationwide?",
      answer:
        "Yes. Rapid Auto Shipping offers coast-to-coast line haul transportation across all 50 states with dependable scheduling and route optimization.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "How does line haul differ from local or last-mile delivery?",
      answer:
        "Line haul covers the long-distance portion of transport between cities or distribution centers, while local or last-mile delivery handles the final leg to the destination. We can coordinate both if needed.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is tracking and insurance included in line haul shipments?",
      answer:
        "Yes. All line haul shipments are fully insured, and we provide real-time tracking and updates. Our logistics team monitors each shipment for performance and delivery accuracy.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      question: "How do I schedule or set up recurring line haul transport?",
      answer:
        "Just contact us with your route and volume needs. We offer recurring service contracts, one-time hauls, and flexible scheduling to match your supply chain or fleet demands.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Top Rated Linehaul Transportation Services | Linehaul Trucking
        </title>
        <meta
          name="description"
          content="If you tell Rapid Auto Shipping ahead of time, maybe we will be able to offer you a good discount on your Line Haul Transport request with our best service."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/line-haul-transport"
        />
        <meta
          property="og:title"
          content="Top Rated Linehaul Transportation Services | Linehaul Trucking"
        />
        <meta
          property="og:description"
          content="If you tell Rapid Auto Shipping ahead of time, maybe we will be able to offer you a good discount on your Line Haul Transport request with our best service."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/line-haul-transport"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753707131/line_haul_transportation_3_ygxy5d.webp"
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
                      "https://rapidautoshipping.com/services/line-haul-transport",
                    name: "line-haul-transport",
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
              serviceType: "Line Haul Transportation",
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
                "If you tell Rapid Auto Shipping ahead of time, maybe we will be able to offer you a good discount on your Line Haul Transport request with our best service.",
              url: "https://rapidautoshipping.com/services/line-haul-transport",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753707131/line_haul_transportation_3_ygxy5d.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753707131/line_haul_transportation_3_ygxy5d.webp"
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
                    Line Haul{" "}
                    <span className="text-[#ff5722]">Transportation</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Line haul transportation is the process of transporting
                    goods, Rapid Auto Shipping as freight from one place to
                    another using various modes of transport such as trucks,
                    trains, airplanes, or ships. The size, weight, and volume of
                    loads can vary, and the logistics for freight transportation
                    depend on these factors and the destination. For example, it
                    costs more to transport a 10,000kg item internationally than
                    to transport a smaller item within Australia.
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
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        What Is a Linehaul?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Line haul transportation is transporting goods or
                      shipments over long distances. It involves a company's
                      trucks, vans, or other vehicles traveling from one point
                      to another along a predetermined route.
                      <br /> <br />
                      Line haul transport can include interstate and intrastate
                      travel, with shipments ranging from small packages to
                      oversized loads.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      It usually involves multiple stops at depots or warehouses
                      where products are loaded onto different trailers and
                      unloaded at their destination. Linehaul transport aims to
                      efficiently move large amounts of cargo in bulk over a
                      long distance while minimizing costs associated with fuel
                      consumption and personnel needed for the trip.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753707171/line_haul_transportation_enphch.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div
              id="hero"
              className={`relative bg-gradient-to-r from-[#003366] via-[#003366] to-[#ff5722] transition-all duration-1000 `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              <div className="relative px-4 py-16 sm:py-20 lg:py-24">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                      <Truck className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold">
                        Freight Transportation
                      </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                      Line Haul
                      <span className="block bg-gradient-to-r from-[#ff5722] to-orange-300 bg-clip-text text-transparent mt-2">
                        Transportation
                      </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto lg:mx-0 leading-relaxed mb-8">
                      Comprehensive guide to line haul transportation - moving
                      commodities and freight between locations via truck, rail,
                      airplane, or ship with optimal efficiency and
                      cost-effectiveness.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Link href="https://rapidautoshipping.com/services/line-haul-transport">
                        <button className="border-2 border-white text-white hover:bg-white hover:text-[#003366] px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation Mode Icons */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex gap-8">
                {transportModes.map((mode, index) => {
                  const IconComponent = mode.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center group"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${mode.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-white/80 text-sm mt-2 font-medium">
                        {mode.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </div>

            {/* What is Line Haul Transportation Section */}
            <div
              id="definition"
              className={`py-16 sm:py-20 transition-all duration-1000 delay-200 `}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#ff5722]/10 rounded-full px-6 py-3 mb-6">
                    <Package className="w-6 h-6 text-[#ff5722]" />
                    <span className="text-[#ff5722] font-semibold text-lg">
                      Definition
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                    What is Line Haul Transportation?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Line haul transportation commodities and objects, or
                        freight, between two sites via truck, rail, airplane, or
                        ship is called transportation.
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Because load varies in size, weight, and volume, the
                        logistics for transporting freight may also vary. For
                        example, if you wanted to convey a 10,000kg object
                        across the ocean to the United States, the logistics
                        would be more expensive and time-consuming than sending
                        a smaller piece domestically.
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        Line haul transport and line haul logistics assist
                        companies in determining the logistics for transporting
                        items between specific locations within a set timeframe.
                        Wyoming, Tennessee, and Rhode Island are the best
                        Stateline haul trucking drivers.
                      </p>
                    </div>
                  </div>

                  {/* Visual Elements */}
                  <div className="grid grid-cols-2 gap-6">
                    {transportModes.map((mode, index) => {
                      const IconComponent = mode.icon;
                      return (
                        <div
                          key={index}
                          className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center"
                        >
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${mode.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ff5722] transition-colors duration-300">
                            {mode.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {mode.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Significance Section */}
            <div
              id="significance"
              className={`py-16 sm:py-20 bg-gradient-to-br from-[#003366]/5 to-[#ff5722]/5 transition-all duration-1000 delay-400 `}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#003366]/10 rounded-full px-6 py-3 mb-6">
                    <Star className="w-6 h-6 text-[#003366]" />
                    <span className="text-[#003366] font-semibold text-lg">
                      Importance
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                    What is the Significance of Line Haul Transportation to
                    Shippers?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#003366] to-[#ff5722] mx-auto rounded-full"></div>
                </div>

                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100">
                  <div className="space-y-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Line haul transportation is the term Rapid Auto Shipping
                      that uses line haul transportation to describe the process
                      of moving goods or materials over long distances, usually
                      extending from one side of a country to the opposite side.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Line haul is a term used to refer to the distance
                      separating two important cities or centers. In the
                      trucking industry, line haul refers to where a truck
                      driver travels with goods before returning empty.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Line haul transportation is an essential component of the
                      supply chain due to its ability to transport large
                      quantities of goods or materials efficiently. This method
                      is precious when other transportation options would be too
                      costly or present logistical difficulties.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Line haul transportation can be carried out efficiently
                      using a variety of vehicles, including trucks, trains, and
                      ships. Line haul transport offers several advantages,
                      including its efficiency and ability to transport large
                      quantities of goods or materials rapidly and effectively.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Line Hall provides the flexibility to meet the specific
                      needs of transportation companies and individuals, making
                      it a highly suitable choice for many enterprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Efficiency Tips Section */}
            <div
              id="efficiency-tips"
              className={`py-16 sm:py-20 transition-all duration-1000 delay-600 `}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#ff5722]/10 rounded-full px-6 py-3 mb-6">
                    <Target className="w-6 h-6 text-[#ff5722]" />
                    <span className="text-[#ff5722] font-semibold text-lg">
                      Optimization
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                    Tips on How to Make Line Haul Transportation More Efficient
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    If you're a freight carrier, optimizing line haul
                    transportation for your company could be the key to saving
                    money, improving client relationships, and lowering overhead
                    costs. Here are some pointers on how to make line haul
                    transportation more efficient:
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] mx-auto rounded-full mt-8"></div>
                </div>

                <div className="space-y-8">
                  {efficiencyTips.map((tip, index) => {
                    const IconComponent = tip.icon;
                    const isEven = index % 2 === 0;

                    return (
                      <div
                        key={index}
                        className={`flex flex-col ${
                          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                        } items-center gap-8 lg:gap-12`}
                      >
                        {/* Content */}
                        <div className="flex-1 max-w-2xl">
                          <div
                            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                              isEven ? "lg:mr-8" : "lg:ml-8"
                            }`}
                          >
                            <div className="flex items-start gap-4 mb-6">
                              <div
                                className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${tip.color} rounded-2xl flex items-center justify-center shadow-lg`}
                              >
                                <IconComponent className="w-8 h-8 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                  {tip.title}
                                </h3>
                                <div className="w-12 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] rounded-full"></div>
                              </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-lg">
                              {tip.description}
                            </p>
                          </div>
                        </div>

                        {/* Visual Element */}
                        <div className="flex-shrink-0">
                          <div
                            className={`w-32 h-32 bg-gradient-to-r ${tip.color} rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 opacity-20 hover:opacity-40`}
                          >
                            <IconComponent className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div
              id="benefits"
              className={`py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-[#003366]/5 transition-all duration-1000 delay-800 `}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#003366]/10 rounded-full px-6 py-3 mb-6">
                    <CheckCircle className="w-6 h-6 text-[#003366]" />
                    <span className="text-[#003366] font-semibold text-lg">
                      Advantages
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                    Benefits of Line Haul Transportation for Shippers
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#003366] to-[#ff5722] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                      >
                        {/* Icon */}
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 ${benefit.bg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent
                            className={`w-8 h-8 ${benefit.color}`}
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#ff5722] transition-colors duration-300">
                          {benefit.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed">
                          {benefit.description}
                        </p>

                        {/* Decorative Element */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ff5722]/5 to-transparent rounded-bl-2xl rounded-tr-2xl"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Line Haul Tracking Section */}
            <div
              id="tracking"
              className={`py-16 sm:py-20 transition-all duration-1000 delay-1000 `}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#ff5722]/10 rounded-full px-6 py-3 mb-6">
                    <Activity className="w-6 h-6 text-[#ff5722]" />
                    <span className="text-[#ff5722] font-semibold text-lg">
                      Real-Time Visibility
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                    What Use Does Line Haul Tracking Serve?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100">
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Line haul tracking provides real-time visibility into
                        operations, empowering enterprises, carriers, and 3PLs,
                        along with other relevant stakeholders. Users can gain
                        valuable insights regarding SLA compliance, carrier
                        performance, delivery outcomes, and other essential
                        factors by utilizing this tool.
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        Additionally, it aids in enhancing the customer
                        experience by providing an accurate estimated time of
                        arrival (ETAs), thereby significantly increasing the
                        likelihood of successful first-attempt deliveries.
                      </p>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        In addition, it aids in promoting transparency in the
                        delivery process. Companies around the world are
                        utilizing intelligent delivery management tools to
                        enhance the efficiency of their line haul operations.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-[#003366] to-[#ff5722] rounded-2xl p-6 text-white text-center">
                      <Navigation className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-lg font-bold mb-2">
                        Real-time Tracking
                      </h3>
                      <p className="text-sm opacity-90">
                        Monitor shipments in real-time
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-[#ff5722] to-[#003366] rounded-2xl p-6 text-white text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-lg font-bold mb-2">Analytics</h3>
                      <p className="text-sm opacity-90">
                        Performance insights and metrics
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-[#003366] to-[#ff5722] rounded-2xl p-6 text-white text-center">
                      <Eye className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-lg font-bold mb-2">Transparency</h3>
                      <p className="text-sm opacity-90">
                        Clear delivery process visibility
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-[#ff5722] to-[#003366] rounded-2xl p-6 text-white text-center">
                      <Clock className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-lg font-bold mb-2">ETA Accuracy</h3>
                      <p className="text-sm opacity-90">
                        Precise delivery time estimates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Section */}
            <div
              id="implementation"
              className={`py-16 sm:py-20 bg-gradient-to-br from-[#003366]/5 to-[#ff5722]/5 transition-all duration-1000 delay-1200 `}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#003366]/10 rounded-full px-6 py-3 mb-6">
                    <Settings className="w-6 h-6 text-[#003366]" />
                    <span className="text-[#003366] font-semibold text-lg">
                      Getting Started
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                    Implementation of Line Haul Transportation
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#003366] to-[#ff5722] mx-auto rounded-full"></div>
                </div>

                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100">
                  <div className="space-y-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Implementing line haul transportation in your organization
                      can significantly reduce the time, effort, and cost of
                      shipping goods over long distances.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Line haul transportation involves collecting products from
                      a specific location and transporting them to another
                      destination without making intermediate stops.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      To optimize your linehaul delivery procedure, it is
                      essential to research carriers known for their reliability
                      and high-quality services while offering reasonable
                      prices.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      When selecting a carrier, it is necessary to clearly
                      understand their specific transit times for various
                      routes, the types of items they can transport, and the
                      payment methods they accept.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carrier Tracking Section */}
            <div
              id="carrier-tracking"
              className={`py-16 sm:py-20 transition-all duration-1000 delay-1400 `}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#ff5722]/10 rounded-full px-6 py-3 mb-6">
                    <Search className="w-6 h-6 text-[#ff5722]" />
                    <span className="text-[#ff5722] font-semibold text-lg">
                      Carrier Analytics
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                    What is the Significance of Line Haul Carrier Tracing?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] mx-auto rounded-full"></div>
                </div>

                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100">
                  <div className="space-y-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Carriers often track the logistics of each delivery using
                      digital software to create reliable analytics of the line
                      haul operation. Carriers guarantee that they are
                      satisfying client requests and complying with government
                      standards.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Line haul carrier tracking also enables carriers to assess
                      their hauling procedures to improve efficiency and
                      optimize their operations.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      For example, a carrier might compare the journey periods
                      of a shipment ship sailing around the coast with a truck
                      driving along the coastal highway to see the most
                      cost-effective option for the next delivery.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      These insights help carriers save money, deliver vital
                      information to customers, and verify their compliance with
                      government agencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 sm:py-20 bg-gradient-to-r from-[#003366] to-[#ff5722]">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Optimize Your Line Haul Operations?
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Discover how our line haul transportation solutions can reduce
                  costs, improve efficiency, and enhance customer satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="https://rapidautoshipping.com/services/line-haul-transport">
                    <button className="bg-white text-[#003366] hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Get Quote Now
                    </button>
                  </Link>
                  <Link href="tel:+18332334447">
                    <button className="border-2 border-white text-white hover:bg-white hover:text-[#003366] px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
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
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        Line Haul Tracking Transportation
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Yes, we offer real-time updates and round-the-clock access
                      to internet monitoring services. You will be provided with
                      a distinctive booking number when you arrange your
                      shipping. This number will allow you to conveniently
                      monitor the status and progress of your vehicle through an
                      online tracking system.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Quotes :</b> There are several methods available for
                      calculating a car transport quote. You can get the cost of
                      car transportation by visiting the transportation
                      company's website or by contacting us directly via phone
                      at +1 (833) 233-4447. Please inform them if you require an
                      expedited pick-up for your vehicle..
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        <img
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753707132/line_haul_transportation_2_o6fxui.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          className="w-full h-[400px] object-cover rounded-2xl shadow-2xl 
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
