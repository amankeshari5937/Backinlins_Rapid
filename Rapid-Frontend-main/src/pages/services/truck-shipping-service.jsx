"use client";
import React, { useState } from "react";
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
  Award,
  Eye,
  Search,
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
  Cog,
  ArrowRight,
  Maximize2,
  Navigation,
  Repeat,
  Phone,
} from "lucide-react";
import {
  MapPin,
  Calendar,
  Snowflake,
  Scale,
  Lightbulb,
  Target,
  BarChart3,
} from "lucide-react";
import { FaCar, FaShieldAlt, FaStar, FaHome } from "react-icons/fa";
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

  const primaryColor = "#ff5722";
  const secondaryColor = "#003366";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const customStyles = {
    primaryBg: { backgroundColor: "#003366" },
    accentBg: { backgroundColor: "#ff5722" },
    primaryText: { color: "#003366" },
    accentText: { color: "#ff5722" },
    primaryBorder: { borderColor: "#003366" },
    accentBorder: { borderColor: "#ff5722" },
  };

  const truckTypes = [
    {
      icon: "🚛",
      title: "Tanker Trucks",
      description:
        "Transport tank vehicles safely throughout the United States. We can send any tanker vehicle used to carry gasoline, fuel, oil, gases, and a variety of other bulk liquids. Our expert haulers have the skills and certifications required to satisfy the stringent DOT rules for secure truck shipping.",
    },
    {
      icon: "🚚",
      title: "Dually Trucks",
      description:
        "Transporting a dually truck differs from transporting an automobile. While many transportation firms fail to handle such big trucks, we thrive. Regularly, we work with a variety of dually vehicle types, including lifted and modified trucks. Our seasoned and expert drivers will manage your vehicle most effectively and safely possible.",
    },
    {
      icon: "🔧",
      title: "Utility Trucks",
      description:
        "Every day, customers rely on us to move their utility vehicles. We comprehend the importance of utility trucks in your companies. Our mission is to get your truck to its location as quickly and safely as feasible. We have the equipment and expertise to ship your truck across town or the nation.",
    },
    {
      icon: "🚜",
      title: "Semi Tractor Trucks",
      description:
        "We provide the most practical and stress-free method of transporting your semi-tractor to and from anywhere in the United States. We guarantee the secure and simple loading and unloading of any heavy duty vehicle, regardless of size, by using our step decks, RGNs, and other specialized trailer equipment.",
    },
  ];

  const preparationSteps = [
    "Wash your vehicle thoroughly.",
    "Keep track of any cracks, dents, scratches, or other superficial harm.",
    "Take photos of the vehicle from various perspectives, as well as close-ups of any damage.",
    "Date the photos as well as the written document.",
    "Check that the transporter, in addition to your documents, makes a formal notation.",
  ];

  const advantages = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "High Quality Services",
      description:
        "The foundation of our relationship with providers is dependability. The best DOT safety ratings, cargo insurance, vehicle liability, and sector licences are all upheld by our carriers.",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Speed And Reliability",
      description:
        "Based on our knowledge and carrier network, we optimize freight and shipment paths and pricing. To guarantee a smooth process, our qualified logisticians plan out the complete shipment.",
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Complete Logistics",
      description:
        "We handle permits, schedule pilot vehicles, coordinate with local officials and utilities, and ensure that seasoned carriers deliver your goods.",
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Emergency Transportation",
      description:
        "If a vehicle breaks down, we have numerous trucks on standby to guarantee your cargo gets on time. We can send equipment to finish the delivery with a single phone contact.",
    },
  ];

  const costFactors = [
    "Distance",
    "Specifications of the truck",
    "Permits costs",
    "Fuel costs",
    "Toll costs",
    "And more",
  ];

  const faqData = [
  {
    icon: <Truck className="w-5 h-5" />,
    question: "What types of trucks can you ship?",
    answer:
      "We transport all kinds of trucks—pickup trucks, box trucks, duallys, flatbeds, service trucks, commercial trucks, lifted trucks, and more. Whether it's standard or oversized, we've got the right equipment.",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "How much does truck shipping cost?",
    answer:
      "Truck shipping costs depend on the vehicle's size, weight, distance, condition, and whether you choose open or enclosed transport. Get a free, accurate quote by contacting us directly.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "Is truck shipping available nationwide?",
    answer:
      "Yes. We provide truck transport services across all 50 states with door-to-door and terminal-to-terminal options, including service to remote and commercial areas.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    question: "Do you ship non-running or oversized trucks?",
    answer:
      "Absolutely. We specialize in transporting non-running, lifted, or modified trucks using winches, flatbeds, or lowboy trailers, depending on the truck's specs.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Is my truck insured during transport?",
    answer:
      "Yes. Your truck is fully insured while in transit, and we provide a detailed inspection at both pickup and delivery to ensure peace of mind.",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    question: "How do I schedule truck shipping with Rapid Auto Shipping?",
    answer:
      "You can request a quote online or call us. Our transport specialists will walk you through the process, from booking and paperwork to pickup and delivery.",
  },
];
  return (
    <>
      <Head>
        <title>Best Truck Shipping Services | +1-833-233-4447</title>
        <meta
          name="description"
          content="Standard truck transports, industrial truck shipping, and heavy load truck transporting are our specialties."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/truck-shipping-service"
        />
        <meta
          property="og:title"
          content="Best Truck Shipping Services | +1-833-233-4447"
        />
        <meta
          property="og:description"
          content="Standard truck transports, industrial truck shipping, and heavy load truck transporting are our specialties."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/truck-shipping-service"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753347423/truck_shipping_service_2_l8bipd.webp"
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
                    name: "Services",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/truck-shipping-service",
                    name: "Best Truck Shipping Services | +1-833-233-4447",
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
              serviceType: "Best Truck Shipping Services | +1-833-233-4447",
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
                "Standard truck transports, industrial truck shipping, and heavy load truck transporting are our specialties.",
              url: "https://rapidautoshipping.com/services/truck-shipping-service",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753347413/truck_shipping_avgeua.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753347413/truck_shipping_avgeua.webp"
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
                    Best Truck{" "}
                    <span className="text-[#ff5722]">Shipping Services</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Rapid Auto Shipping is the nation's leading truck transport
                    company. Standard truck transports, industrial truck
                    shipping, and heavy load truck transporting are our
                    specialties. Our transport services for shipping trucks are
                    dependable, quick, and of high quality.
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
                        Types Of Truck Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      The height and weight of the load will determine the sort
                      of trailer used to move your heavy-duty truck. A basic
                      flatbed trailer will be used in most instances. A
                      drop-deck/step-deck trailer is a preferable option if the
                      vehicle is extremely tall. Because the trailer is so near
                      to the earth, a lowboy trailer has even more height
                      clearance.
                      <br /> <br />A portable gooseneck trailer, on the other
                      hand, can be used when a lift is required. This trailer
                      can be rapidly removed and lowered down to load and
                      discharge vehicles. We will decide on the best trailer for
                      shipping trucks.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Flatbed Trucks:</b> Flatbed vehicles transport goods on
                      a trailer that is levelled and open, with no sides or top,
                      thus the term flatbed. This design makes it simpler to
                      load and unload big loads that would otherwise be too
                      large for a normal 53-foot trailer. Straps, tarps, and
                      other fastening devices are used to keep truck shipping
                      fastened down on flatbeds.
                      <br /> <br />
                      Flatbed vehicles are commonly used as truck shipping for
                      building materials, big made components, and different
                      oversized loads. Any truck transporting that is wider than
                      8.5 feet is considered oversized cargo. This form of truck
                      freight necessitates the use of red banners and lights to
                      aid in the identification of oversized truck freight on
                      the road.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Step Deck Trucks:</b> Step deck trucks, like flatbed
                      trucks, have an exposed, level platform. The primary
                      distinction between truck shipping on a flatbed and step
                      deck truck is that the step deck truck has a lower
                      location that is positioned closer to the ground. This
                      allows taller truck shipping to rest lower, avoiding
                      possible dangers such as overpass clearances.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Gooseneck Trailer:</b> These industrial trailers are
                      frequently used to transport heavy cargo. They're
                      nicknamed "goosenecks" because they have a curved
                      expansion that looks like a goose's neck.
                      <br />
                      <br />
                      This extension is attached to the towing car immediately
                      above the back axle. This provides more control when
                      pulling.
                      <br />
                      <br />
                      They are frequently used to transport automobiles,
                      livestock, horses, and heavy tools such as building
                      machines. They're also common among "RVers" who use them
                      to transport fifth-wheel trailers.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753347423/truck_shipping_service_2_l8bipd.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative z-10 mt-20 hidden sm:block">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753347398/Truck_Shipping_Service_wpwtow.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-5 px-6 lg:px-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-50"></div>
              <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center bg-orange-100 rounded-full px-6 py-2 mb-8">
                  <Award
                    className="w-5 h-5 mr-2"
                    style={customStyles.accentText}
                  />
                  <span
                    className="text-sm font-semibold"
                    style={customStyles.accentText}
                  >
                    Industry Champion in Truck Transport
                  </span>
                </div>
                <h2
                  className="text-4xl font-bold mb-8 leading-tight"
                  style={customStyles.primaryText}
                >
                  Professional Truck <br />
                  <span style={customStyles.accentText}>Auto Transport</span>
                </h2>
                <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Rapid Auto Shipping, as a truck transports industry champion,
                  can meet all of your heavy duty truck transporting needs.
                  Whether you need shipping trucks across town or across the
                  country, our equipment configurations can securely and
                  effectively transport your pickup truck, dually truck, heavy
                  duty truck, utility truck, or any other commercial truck to
                  its location.
                </p>
              </div>
            </section>

            {/* Transport Methods Cards */}
            <section className="py-10 px-6 lg:px-12 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h3
                    className="text-4xl font-bold mb-6"
                    style={customStyles.primaryText}
                  >
                    Transport Methods Available
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Choose the shipping method that best fits your needs and
                    budget
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Door To Door Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div className="h-2" style={customStyles.accentBg}></div>
                    <div className="p-10">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                          <Truck
                            className="w-8 h-8"
                            style={customStyles.accentText}
                          />
                        </div>
                        <h4
                          className="text-2xl font-bold"
                          style={customStyles.primaryText}
                        >
                          Door To Door Truck Auto Transport
                        </h4>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        One of the handiest methods of transporting a car is
                        door to door auto transport. It is a car transfer choice
                        in which the auto transporter picks up your vehicle and
                        then delivers it to your house!
                      </p>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        If the door to door car shipping trucks cannot directly
                        enter due to its size, you and the driver will organize
                        for pickup and transfer at a nearby spot. In this
                        instance, all you have to do is enter a particular
                        location for your car or another form of vehicle to be
                        picked up and left off.
                      </p>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        The most common auto transport carriers in the business
                        are door to door, and door to door shipping is the most
                        "cost-effective" way of moving a vehicle today. We
                        provide door to door service to and from all states in
                        the continental United States.
                      </p>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p
                          className="text-sm font-semibold"
                          style={customStyles.accentText}
                        >
                          ✓ Most Popular Choice
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Terminal To Terminal Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div className="h-2" style={customStyles.primaryBg}></div>
                    <div className="p-10">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          <MapPin
                            className="w-8 h-8"
                            style={customStyles.primaryText}
                          />
                        </div>
                        <h4
                          className="text-2xl font-bold"
                          style={customStyles.primaryText}
                        >
                          Terminal To Terminal Truck Auto Transport
                        </h4>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Once upon a time, terminal to terminal auto transport
                        was the preferred way of transporting automobiles across
                        the nation. This was not unexpected; after all, the
                        vehicle shipping business as we know it only became
                        significant in the last 30-50 years.
                      </p>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        And, before the building of the interstate highway
                        system, the entire concept of shipping automobiles was,
                        at best, speculative.
                      </p>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        That gradually but steadily altered. Terminals, which
                        were once so prevalent and convenient, started to be
                        regarded as a bygone era. Why transport your car to
                        someone to drop it off and wait until the carrier can
                        come right to your door to collect it?
                      </p>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        It just made sense, and over the last thirty years or
                        so, "door to door transport services" have generally
                        eclipsed terminal shipping.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p
                          className="text-sm font-semibold"
                          style={customStyles.primaryText}
                        >
                          ✓ Traditional Method
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Truck Types */}
            <section id="services" className="py-20 px-6 lg:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h3
                    className="text-4xl font-bold mb-6"
                    style={customStyles.primaryText}
                  >
                    Truck Shipping Services
                  </h3>
                  <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                    Rapid Auto Shipping, as a truck transports industry
                    champion, can meet all of your heavy duty truck transporting
                    needs. Whether you need shipping trucks across town or
                    across the country, our equipment configurations can
                    securely and effectively transport your pickup truck, dually
                    truck, heavy duty truck, utility truck, or any other
                    commercial truck to its location.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {truckTypes.map((truck, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4"
                      style={{
                        borderLeftColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                      }}
                    >
                      <div className="flex items-start">
                        <div className="text-5xl mr-6 flex-shrink-0">
                          {truck.icon}
                        </div>
                        <div>
                          <h4
                            className="text-2xl font-bold mb-4"
                            style={customStyles.primaryText}
                          >
                            {truck.title}
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {truck.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Preparation Process */}
            <section
              id="preparation"
              className="py-20 px-6 lg:px-12 bg-gradient-to-r from-gray-50 to-blue-50"
            >
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h3
                    className="text-4xl font-bold mb-6"
                    style={customStyles.primaryText}
                  >
                    Get The Truck Ready For Shipping
                  </h3>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      Damage is one of the worst things that can happen to a
                      vehicle while it is being transported. In the United
                      States, 5% to 10% of vehicles are harmed during transport.
                      However, by correctly preparing your vehicle for
                      transport, you can reduce the chance of harm.
                    </p>
                    <p className="text-lg text-gray-600">
                      Examine for and record any previous harm. This can be
                      accomplished in a few simple steps:
                    </p>
                  </div>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="bg-white rounded-3xl shadow-2xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                      {preparationSteps.map((step, index) => (
                        <div key={index} className="text-center">
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg"
                            style={customStyles.accentBg}
                          >
                            {index + 1}
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Company Characteristics */}
            <section className="py-20 px-6 lg:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h3
                    className="text-4xl font-bold mb-8"
                    style={customStyles.primaryText}
                  >
                    Positive Characteristics Of A Reliable Truck Shipping
                    Company
                  </h3>
                  <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700">
                    <p className="leading-relaxed">
                      When transporting a truck, you must deal with experts.
                      Whether you need a pickup vehicle for your local business
                      or heavy duty corporate Truck Shipping, it must be done
                      correctly.
                    </p>
                    <p className="leading-relaxed">
                      We comprehend the significance of correctly shipping
                      trucks because they are frequently a part of your income.
                      Every stage will be guided by a transportation expert.
                    </p>
                    <p className="leading-relaxed">
                      We make certain that you comprehend how to prepare your
                      vehicle for transfer so that you are ready to go when the
                      driver comes. You want to be confident in the support you
                      receive when shipping a vehicle. We at Rapid Auto Shipping
                      are committed to offering excellent vehicle
                      transportation.
                    </p>
                  </div>
                </div>

                <h4
                  className="text-3xl font-bold text-center mb-16"
                  style={customStyles.primaryText}
                >
                  The Advantages Of Using Rapid Auto Shipping To Shipping Trucks
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {advantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-start">
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center mr-6 flex-shrink-0"
                          style={customStyles.accentBg}
                        >
                          <div className="text-white">{advantage.icon}</div>
                        </div>
                        <div>
                          <h5
                            className="text-2xl font-bold mb-4"
                            style={customStyles.primaryText}
                          >
                            {advantage.title}
                          </h5>
                          <p className="text-gray-700 leading-relaxed">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-6 lg:px-12 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h3
                    className="text-4xl font-bold mb-8"
                    style={customStyles.primaryText}
                  >
                    How Much Does It Cost Shipping Trucks?
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <div className="bg-white p-10 rounded-3xl shadow-xl">
                      <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                        The expense of truck shipping can vary between a few
                        hundred and a few thousand dollars. Depending on the
                        distance traveled it may be more
                      </p>
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Truck transporting prices are determined by a variety of
                        variables. This includes, but is not limit to, the
                        following:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {costFactors.map((factor, index) => (
                          <div
                            key={index}
                            className="flex items-center p-4 bg-gray-50 rounded-xl"
                          >
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 flex-shrink-0"
                              style={customStyles.accentBg}
                            >
                              {index + 1}
                            </div>
                            <span className="text-gray-700 font-medium">
                              {factor}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl h-full flex flex-col justify-between">
                      <div>
                        <h4
                          className="text-2xl font-bold mb-6"
                          style={customStyles.primaryText}
                        >
                          Get Your Custom Quote
                        </h4>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          A Rapid Auto Shipping logistics agent will collect the
                          information and locate the most affordable price to
                          shipping trucks.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          We provide all-inclusive business truck transportation
                          estimates with no hidden costs. Each estimate is
                          tailored to your specific heavy duty vehicle
                          transportation requirements.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                          Calculating truck shipping costs is not easy. Various
                          factors will influence the price of your vehicle's
                          transport. To receive an estimate cost, we recommend
                          filling out the quote form.
                        </p>
                      </div>
                      <Link href="https://rapidautoshipping.com/services/truck-shipping-service">
                        <button
                          className="w-full px-6 py-4 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                          style={customStyles.accentBg}
                        >
                          Get Free Quote
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
                    <p className="text-xl text-gray-700 mb-6">
                      Call immediately for a no-hassle freight shipping
                      estimate!
                    </p>
                    <Link href="tel:+18332334447">
                      <div
                        className="flex items-center justify-center text-3xl font-bold"
                        style={customStyles.primaryText}
                      >
                        <Phone className="w-8 h-8 mr-4" />
                        +1 (833) 233-4447
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* How To Choose Section */}
            <section className="py-20 px-6 lg:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h3
                    className="text-4xl font-bold mb-8"
                    style={customStyles.primaryText}
                  >
                    How To Choose A Truck Shipping Company?
                  </h3>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-12 rounded-3xl shadow-xl">
                    <p className="text-xl text-gray-700 leading-relaxed text-center">
                      Once you've finished your listing, truck transporters will
                      contact you with shipment quotes as they compete for your
                      business. You can speak with the transporters immediately
                      as their estimates arrive. Learn more about their truck
                      transportation expertise and the services they offer.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tracking Section */}
            <section id="tracking" className="py-20 px-6 lg:px-12 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h3
                    className="text-4xl font-bold mb-8"
                    style={customStyles.primaryText}
                  >
                    How Can I Track My Shipping Trucks?
                  </h3>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="bg-white p-12 rounded-3xl shadow-xl">
                    <div className="space-y-6 text-lg text-gray-700 mb-12">
                      <p className="leading-relaxed">
                        You only need to submit us a request for car position
                        tracking if you want to follow your vehicle's travels.
                        You'll need your name, tracking number, phone number,
                        email address, and/or postal code. Then we'll start
                        working
                      </p>
                      <p className="leading-relaxed">
                        Rapid Auto Shipping provides an online tracking system,
                        which can be entered into their web tracking software.
                        This will allow you to track your vehicle and ensure
                        that it is secure and on schedule
                      </p>
                      <p className="leading-relaxed">
                        This online monitoring system choice is becoming more
                        popular in recent years. Furthermore, you may easily
                        receive real-time details during the transport task that
                        you have paid for.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="py-20 px-6 lg:px-12"
              style={customStyles.primaryBg}
            >
              <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-4xl font-bold text-white mb-8">
                  Ready to Ship Your Truck?
                </h3>
                <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Get a no-hassle freight shipping estimate today. Our logistics
                  experts are standing by to help you with all your truck
                  transportation needs across the continental United States.
                </p>

                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                  <Link href="tel:+18332334447">
                    <div className="flex items-center text-white bg-blue-800 bg-opacity-30 px-8 py-4 rounded-2xl">
                      <Phone className="w-8 h-8 mr-4" />
                      <span className="text-3xl font-bold">
                        +1 (833) 233-4447
                      </span>
                    </div>
                  </Link>
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
                        How Can I Get Truck Shipping Quote?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Allow Rapid Auto Shipping to handle your heavy duty truck
                      shipping and hauling requirements. We offer high quality
                      truck transportation at the most competitive rates <br />{" "}
                      <br />
                      To obtain a shipping quote, please contact us toll-free at
                      +1 (833) 233-4447 or complete our online auto shipping
                      quote calculator form. We are excited to serve you!
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Decorative elements */}

                    {/* Main image container */}

                    {/* Image */}
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        {/* Image with enhanced effects */}
                        <img
                          src="https://dashboard.rapidautoshipping.com/assets/images/img_gallery/8131749.webp"
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
