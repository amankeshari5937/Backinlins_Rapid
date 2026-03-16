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
  Key,
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

  const keyConsiderations = [
    {
      title: "Choosing The Right Auto Transport Company",
      description:
        "Shipping companies that specialize in non-running vehicle transport are ideal for handling such delicate shipments. Inquire about their methods of loading and unloading, such as winches, forklifts, or specialized ramps. Obtain a detailed quote outlining all costs, including potential fees for non-running vehicles. The company should provide adequate liability insurance.",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "Vehicle Preparation",
      description:
        "Ensure to empty all personal items from the car, as these are not allowed to be transported with the vehicle. The vehicle should be free from any fluid leaks that could cause problems during transportation. Items, such as racks, antennas, spoilers, or any other external attachments or accessories, should be removed to prevent damage during transit.",
      icon: <Wrench className="h-8 w-8" />,
    },
    {
      title: "Transport Options",
      description:
        "Both open and enclosed transportation can handle a non-running vehicle, but enclosed transport offers better protection for valuable or sensitive vehicles. A flatbed truck can be considered for vehicles that have non-functional wheels or have low clearance to facilitate loading and unloading.",
      icon: <Settings className="h-8 w-8" />,
    },
    {
      title: "Cost Factors",
      description:
        "The cost of shipping depends directly on the distance to be covered. The summer and winter seasons increase the cost as the services are more in demand than in other seasons. The need for specialized equipment and handling of inoperable vehicles can lead to higher costs.",
      icon: <DollarSign className="h-8 w-8" />,
    },
  ];

  const differenceFactors = [
    {
      title: "Carrier type",
      description:
        "Sometimes, an enclosed carrier is necessary for inoperable transport, but standard shipping can be carried out on an open transport method.",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "Cost",
      description:
        "Inoperable shipping involves the use of specialized equipment and labor trained specifically for it, but standard shipping may not require such equipment or labor, which reduces the cost of standard shipping.",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      title: "Specialized companies",
      description:
        "Some companies specialize in inoperable transport services, whereas standard transport companies are not specialized in carrying out such shipping.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Insurance and Bonding",
      description:
        "It's crucial to choose a transport company with bonding, appropriate Insurance, and Department of Transportation registration to ensure secure and skilled handling in case of inoperable shipping.",
      icon: <Shield className="h-8 w-8" />,
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  const safetyTips = [
    {
      title: "Assessing The Vehicle's Condition",
      description:
        "The condition of the vehicle must be assessed from both inside and outside. Find out whether the vehicle rolls, steers, or brakes. Any loose parts should be secured inside the vehicle, as these may detach during delivery. Any leaks of fuel or oil should be addressed before transportation begins.",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "Preparing The Pickup Location",
      description:
        "The pickup site should have the necessary tools to load the vehicle. Loading assistance, like forklifts, winches, and flatbeds, will be needed if the vehicle is inoperable.",
      icon: <MapPin className="h-8 w-8" />,
    },
    {
      title: "Preparing The Delivery Location",
      description:
        "Unloading preparations should be as good as the loading. The delivery point should have sufficient space and appropriate instruments for unloading. An alternate delivery plan should be kept ready if a delivery option fails.",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: "Selecting A Reliable Transport Carrier",
      description:
        "An experienced auto transport carrier should be selected for salvaged vehicle shipping. They should excel in handling inoperable vehicle transport. Detailed information about the vehicle's condition should be provided to the carrier to ensure they bring the right instruments.",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "Safety And Documents Verification",
      description:
        "All required documents, including the proof of ownership and salvage title, should be kept in order before vehicle transportation. Double-check for any remaining loose parts and fluid leaks. Take photos of the vehicle to document its condition before transporting it.",
      icon: <FileText className="h-8 w-8" />,
    },
  ];

  const serviceSelection = [
    {
      title: "Experience",
      description:
        "Look for companies that specialize in transporting non-operational vehicles and ask about their equipment and procedures for loading and unloading.",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: "Insurance",
      description:
        "Verify that the carrier has adequate liability insurance and consider supplemental insurance, especially for valuable vehicles.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Cost Transparency",
      description:
        "Obtain a detailed quote that clearly outlines all costs, including potential fees for non-operational vehicles, and discuss these costs upfront.",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      title: "Loading and Unloading",
      description:
        "Discuss how the car will be loaded and unloaded, as this might involve using winches or forklifts.",
      icon: <Settings className="h-8 w-8" />,
    },
    {
      title: "Open vs. Enclosed Carriers",
      description:
        "Consider the type of carrier, with open carriers being more common and affordable, while enclosed carriers offer superior protection.",
      icon: <Package className="h-8 w-8" />,
    },
    {
      title: "Shipping Methods",
      description:
        "Explore options like container shipping for added security or roll-on/roll-off (RORO) transport for wheeled cargo.",
      icon: <Truck className="h-8 w-8" />,
    },
  ];

  const vehiclePreparation = [
    {
      title: "Maintenance Check",
      description:
        "Your vehicle must be fully operational and able to roll, brake, and steer under its own power. However, it may not be relevant in the case of an inoperable vehicle.",
      icon: <Wrench className="h-8 w-8" />,
    },
    {
      title: "Exterior Parts",
      description:
        "Retract or remove your antenna and place it in your truck, remove your bike rack, and any loose parts.",
      icon: <Settings className="h-8 w-8" />,
    },
    {
      title: "Wash Your Car",
      description:
        "Just a quick bath, no detailing needed! It's easier for you and the trucker to inspect your car for any scratches, dents, etc. You'll sign the Bill of Lading (BOL) with this inspection at pickup and delivery.",
      icon: <Car className="h-8 w-8" />,
    },
    {
      title: "Personal Items",
      description:
        "You're allowed one piece of luggage (suitcase, box, duffel bag) up to 100 pounds in the trunk or storage area (below window level) during transport.",
      icon: <Package className="h-8 w-8" />,
    },
    {
      title: "Have Keys Ready",
      description:
        "The truck driver will need keys to drive your vehicle on and off the truck.",
      icon: <Key className="h-8 w-8" />,
    },
    {
      title: "Remove Valuables",
      description:
        "To ensure your valuable items stay safe, remove vehicle add-ons such as custom stereos, GPS systems, etc.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Gas Tank",
      description:
        "Make sure your gas tank is about ¼ full. A full tank adds weight to your vehicle and the car carrier. We prefer that electric vehicles have a fully charged battery and charging cables, but these are not applicable in case of an inoperable vehicle.",
      icon: <Fuel className="h-8 w-8" />,
    },
    {
      title: "Parking Passes/Toll Tags",
      description:
        "Remove them to avoid fees as your car passes through tolls.",
      icon: <CreditCard className="h-8 w-8" />,
    },
  ];

  const faqData = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      question: "Do you transport non-running vehicles?",
      answer:
        "Yes, Rapid Auto Shipping specializes in transporting non-running and inoperable vehicles using professional carriers equipped with winches, lift gates, or forklifts.",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      question: "How is a non-running vehicle loaded onto the trailer?",
      answer:
        "Depending on the condition, we use winches, flatbeds, or specialized equipment to safely load your non-operational vehicle without causing damage.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "Is shipping a non-running vehicle more expensive?",
      answer:
        "Yes, slightly. The cost is higher due to additional labor and equipment required. Request a free quote for accurate pricing based on your vehicle's condition and distance.",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      question: "Can you ship vehicles that don't roll, brake, or steer?",
      answer:
        "Absolutely. We can transport vehicles in any condition, even those that don't roll, brake, or steer. Just provide accurate details when booking.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is insurance included during transport?",
      answer:
        "Yes. Your non-running vehicle is fully insured during transit, and you'll receive inspection documentation before and after the shipment.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      question: "How do I schedule non-running vehicle transport?",
      answer:
        "Simply fill out our online quote form or call us directly. We'll provide a custom quote and arrange everything from pickup to delivery.",
    },
  ];
  return (
    <>
      <Head>
        <title>Non-Running Vehicle Transport | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Ship your non-running or inoperable vehicle safely with Rapid Auto Shipping. Expert handling, secure equipment, and nationwide auto transport service."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/non-running-vehicle-transport"
        />
        <meta
          property="og:title"
          content="Non-Running Vehicle Transport | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Ship your non-running or inoperable vehicle safely with Rapid Auto Shipping. Expert handling, secure equipment, and nationwide auto transport service."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/non-running-vehicle-transport"
        />
        <meta property="og:type" content="website" />
     
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752148618/1803430559_xv4ynq.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Non-Running Vehicle Transport Service",
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
                "Rapid Auto Shipping offers reliable transport services for non-running or inoperable vehicles across the US. We use specialized equipment like winch-equipped trailers to safely load and deliver your car, with full insurance and expert handling.",
              url: "https://rapidautoshipping.com/non-running-vehicle-transport",
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
                  name: "non-running-vehicle-transport",
                  item: "https://rapidautoshipping.com/non-running-vehicle-transport",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752148618/1803430559_xv4ynq.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752148618/1803430559_xv4ynq.webp"
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
                    Non-Running Vehicle Transport:{" "}
                    <span className="text-[rgb(255,87,34)]">
                      Shipping Inoperable & Damaged Cars Safely
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Non-running vehicle transport refers to the shipping of
                    vehicles that do not function, operate, are disabled, or are
                    damaged. Shipping a non-running car or vehicle requires
                    special equipment and training to be moved on and off the
                    carrier. You may have won a non-running dream car at an
                    online auto auction, or you may have a disabled car that
                    needs to be sent to a collision center. Inoperable vehicle
                    transport is the answer to this. It is usually carried out
                    by open transport; however, enclosed transport is preferred
                    in some cases. At Rapid Auto Shipping, we provide expert
                    transport services for non-running, damaged, and inoperable
                    vehicles. Explore options for damaged vehicle transport and
                    salvage car shipping today!
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
                        Guide to Non-Running Vehicle Transport and Inoperable
                        Car Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Non-running vehicle transport requires moving a vehicle
                      that cannot move under its own power, needing specialized
                      equipment and methods like winching, forklifts, or ramps
                      under the operation of skilled and trained personnel for
                      loading and unloading. Vehicles may become inoperable due
                      to various reasons such as engine issues, broken steering,
                      or missing parts.
                      <br />
                      <br />
                      When someone purchases a classic car that needs
                      restoration or a salvaged car is required to be relocated
                      from their current location to a place where they can be
                      either stored, auctioned, repaired, or dismantled for
                      parts, or a moving broken-down vehicle requiring to sent
                      to repairs center Inoperable vehicles, which includes cars
                      that cannot roll such as heavily damaged vehicles or
                      vehicles that are used for parts, low clearance vehicles,
                      rare classic vehicles, and more.
                      <br />
                      <br /> Even if the vehicle you want to transport does not
                      have wheels, all that it needs is reputable and
                      experienced transport shipping handlers, since moving this
                      type of vehicle needs a lot of care and expertise.
                      Experienced and professional shipping companies can handle
                      this transportation with their trained and professional
                      personnel.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752148832/inoperable_1_o1owjz.jpg"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[600px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white pt-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="text-center mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-3xl md:text-4xl font-bold text-[#ff5722]">
                          Non-Running Vehicle Transport
                        </span>{" "}
                        <br /> Understanding Non-Running Vehicle Transport
                      </h2>
                      <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Understanding Non-Running Vehicle Transport */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                  <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-lg">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      A non-running car refers to a vehicle that is unable to
                      start or operate its engine, typically due to mechanical
                      issues or a lack of necessary parts. This means that it
                      cannot be driven because of a broken engine, transmission
                      problem, or issues with vital components. A non-running
                      car can have a dead battery, faulty wiring, a
                      malfunctioning ignition system, or problems developed
                      during a restoration project. Such vehicles require
                      special equipment and training to be moved on to and off
                      the carrier with the help of winches, forklifts, flatbeds,
                      and specialized ramps.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      The challenges presented in this field may vary in nature.
                      They may be like properly securing loose parts, addressing
                      potential fluid leaks, ensuring the vehicle is stabilized
                      during transport, and complying with specific
                      documentation requirements. To ensure the safe and
                      reliable shipping of a non-running car or vehicle, it is
                      important to find a qualified auto transporter.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Most auto transporters hauling salvage vehicles have the
                      necessary equipment and knowledge to handle them properly.
                      By entrusting your non-running vehicle transport to
                      professionals, you can have peace of mind knowing it will
                      be treated with care throughout the transportation
                      process.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Considerations */}
            <section className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">
                    Key Considerations for Shipping a Non-Running Car
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-6"></div>
                  <p className="text-gray-600 max-w-4xl mx-auto text-lg">
                    Shipping a non-running car requires careful planning,
                    including choosing a reputable company with experience in
                    handling such vehicles, ensuring adequate insurance, and
                    understanding potential costs and specialized equipment
                    needed for loading and unloading.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {keyConsiderations.map((consideration, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                        <div className="text-center mb-6">
                          <div className="bg-[#ff5722] rounded-full p-4 w-20 h-20 mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white">
                            {consideration.icon}
                          </div>
                          <h3 className="text-xl font-bold text-[#003366] group-hover:text-[#ff5722] transition-colors duration-300">
                            {consideration.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-center">
                          {consideration.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Inoperable Vehicle Transport */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">
                    Inoperable Vehicle Transport: What You Need to Know
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-6"></div>
                </div>

                <div className="max-w-6xl mx-auto space-y-8">
                  <div className="bg-[#003366] rounded-xl p-6 md:p-8 text-white">
                    <p className="text-lg leading-relaxed mb-6">
                      An inoperable vehicle is a vehicle that is unable to
                      function as intended. These vehicles are typically
                      rendered inoperable due to various factors, including
                      mechanical issues, missing essential components, extensive
                      damage, age-related deterioration, or legal compliance
                      concerns, making them unsuitable for safe and effective
                      use on public roads. These vehicles require substantial
                      repairs, restoration, or legal adjustments to regain their
                      operational status and roadworthiness.
                    </p>
                    <p className="text-lg leading-relaxed">
                      An inoperable vehicle can be a Project car purchased for
                      customization or restoration, a Junk car vehicle at the
                      end of its life and can't be used, or a salvaged vehicle
                      that has met with an accident and needs repair, resale, or
                      dismantling. It can be a Classic car that is
                      non-operational due to age or mechanical issues, or a
                      collector's car that is transported for display,
                      maintenance, or restoration. They may be impounded cars
                      going to impound lots or auction sites, or Off-road
                      vehicles like ATVs and dirt bikes that have become
                      inoperational and need repair or resale.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      An IN-OP vehicle needs special procedures and expert
                      handling due to its inoperable state. It may have missing
                      keys, flat tires, inoperable brakes, faulty wiring, a
                      malfunctioning ignition system, and many more such issues.
                      Due to this, inoperable vehicle transport companies use
                      specialized equipment like winches, forklifts, and
                      specialized ramps for loading and unloading the vehicle.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      This prevents the car from further damage and any losses
                      that may arise due to faulty handling. However, the use of
                      specialized equipment and procedures may result in higher
                      transportation costs compared to the standard shipping
                      costs, but this becomes necessary considering the nature
                      of the shipment.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Sometimes, the vehicle may have some delicate or sensitive
                      parts that need protection from harsh weather and dust. In
                      this scenario, enclosed transportation is preferred, which
                      can again be costlier than open or standard shipping.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How Inoperable Vehicle Transport Differs */}
            <section className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">
                    How Inoperable Vehicle Transport Differs from Standard
                    Shipping
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-6"></div>
                  <p className="text-gray-600 max-w-5xl mx-auto text-lg">
                    Inoperable vehicle transport differs from Standard transport
                    because it involves vehicles that cannot be driven onto a
                    carrier, requiring specialized methods like winching or
                    forklifts for loading and unloading purposes, whereas
                    standard transport involves vehicles that can be driven onto
                    a carrier. However, several other factors differ in the
                    inoperable vehicle transport from standard transport. They
                    may be.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {differenceFactors.map((factor, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                        <div className="text-center mb-6">
                          <div className="bg-[#ff5722] rounded-full p-4 w-20 h-20 mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white">
                            {factor.icon}
                          </div>
                          <h3 className="text-xl font-bold text-[#003366] group-hover:text-[#ff5722] transition-colors duration-300">
                            {factor.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-center">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Damaged Vehicle Transport */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">
                    Damaged Vehicle Transport: Handling Salvage Cars
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-6"></div>
                </div>

                <div className="max-w-6xl mx-auto space-y-8">
                  <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Salvage cars are vehicles that have been declared a total
                      loss by the insurance company as it has become unfit to
                      drive due to accidents, natural disasters, or other
                      incidents. Vehicles that have been damaged to the extent
                      that the cost of repairs exceeds their original value are
                      salvaged or totaled vehicles. These vehicles are sold and
                      purchased for various purposes and are transported from
                      their current location to a place where they can be either
                      stored, auctioned, repaired, or dismantled for parts.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      An expert in salvage vehicles uses it for the restoration
                      of other vehicles, or he can use the parts of another
                      vehicle to turn it into a very useful remodeled vehicle.
                      Depending on the extent of the damage, handling and
                      loading of salvage cars may require special expertise and
                      equipment to prevent further damage and safely move them
                      from one location to another.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Shipping companies have trained and qualified staff to
                      handle such vehicle transport. Salvage car transporters
                      use special equipment and training to move the vehicle
                      onto and off the carrier with the help of winches,
                      forklifts, flatbeds, and specialized ramps. The challenges
                      presented in this field may vary in nature. They may be
                      like properly securing loose parts, addressing potential
                      fluid leaks, ensuring the vehicle is stabilized during
                      transport, and complying with specific documentation
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="min-h-screen bg-gray-50">
            {/* Header with Hero Image */}

            {/* Tips for Safe Damaged Vehicle Transport */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                    Tips for Safe Damaged Vehicle Transport
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {safetyTips.map((tip, index) => (
                    <div
                      key={index}
                      className="group"
                      onMouseEnter={() => setHoveredCard(`safety-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-500 ${
                          hoveredCard === `safety-${index}`
                            ? "shadow-2xl scale-105 border-[#ff5722]/30"
                            : "hover:shadow-xl"
                        }`}
                      >
                        <div className="text-center mb-6">
                          <div
                            className={`bg-gradient-to-br from-[#ff5722] to-[#ff6b47] rounded-2xl p-4 w-20 h-20 mx-auto mb-4 shadow-lg flex items-center justify-center text-white transition-transform duration-300 ${
                              hoveredCard === `safety-${index}`
                                ? "scale-110 rotate-6"
                                : ""
                            }`}
                          >
                            {tip.icon}
                          </div>
                          <h3
                            className={`text-xl font-bold transition-colors duration-300 ${
                              hoveredCard === `safety-${index}`
                                ? "text-[#ff5722]"
                                : "text-[#003366]"
                            }`}
                          >
                            {tip.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-center">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Choosing the Right Service */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                    Choosing the Right Service for Shipping a Non-Running Car
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    When choosing a service to ship a non-running car,
                    prioritize companies experienced in handling such vehicles,
                    ensure adequate insurance coverage, and get a detailed quote
                    outlining all costs upfront. Here's a more detailed
                    breakdown:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {serviceSelection.map((service, index) => (
                    <div
                      key={index}
                      className="group"
                      onMouseEnter={() => setHoveredCard(`service-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-500 ${
                          hoveredCard === `service-${index}`
                            ? "shadow-2xl scale-105 border-[#ff5722]/30"
                            : "hover:shadow-xl"
                        }`}
                      >
                        <div className="text-center mb-6">
                          <div
                            className={`bg-gradient-to-br from-[#003366] to-[#004080] rounded-2xl p-4 w-20 h-20 mx-auto mb-4 shadow-lg flex items-center justify-center text-white transition-transform duration-300 ${
                              hoveredCard === `service-${index}`
                                ? "scale-110 rotate-6"
                                : ""
                            }`}
                          >
                            {service.icon}
                          </div>
                          <h3
                            className={`text-xl font-bold transition-colors duration-300 ${
                              hoveredCard === `service-${index}`
                                ? "text-[#ff5722]"
                                : "text-[#003366]"
                            }`}
                          >
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-center">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Cost Factors */}
            <section className="py-16 bg-[#003366] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Cost Factors in Inoperable Vehicle Transport
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto mb-6"></div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                  <p className="text-lg leading-relaxed mb-8">
                    The cost of shipping an inoperable vehicle is influenced by
                    various factors. Distance of transport directly influences
                    the cost of transportation; the longer the distance, the
                    higher the cost. The cost of a vehicle increases during the
                    peak summer and winter seasons, whereas it decreases during
                    other seasons. Vehicle year, make, and model also
                    significantly vary the cost of transportation; smaller cars
                    cost less for transportation than the larger and heavier
                    ones. Inoperable vehicle costs may be higher depending on
                    their mobility, as these require the use of specialized
                    equipment and labor. Transport method (open or enclosed)
                    Open car transport for inoperable vehicles will cost
                    significantly less than an enclosed transport option. Any
                    additional services required (e.g., guaranteed pickup) may
                    result in a higher cost of transporting such vehicles.
                  </p>
                </div>
              </div>
            </section>

            {/* Step-by-Step Process */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                    Step-by-Step Process for Inoperable Vehicle Transport
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto"></div>
                </div>

                <div className="space-y-12">
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
                    <div className="flex items-center mb-8">
                      <div className="bg-[#ff5722] rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                        <span className="text-white font-bold text-2xl">1</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#003366]">
                        Get a quote by providing vehicle details
                      </h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Start by obtaining a quote from Rapid Auto Shipping for
                      your salvage car shipment. Provide accurate vehicle
                      details, including the make, model, year, and specific
                      information about the car's salvage condition. Be sure to
                      note if the vehicle is inoperable, as this will be a
                      significant factor when it comes to pricing and finding
                      the best transporter to meet your needs. Keep in mind that
                      if the vehicle does not roll, brake, or steer, you will
                      need to contact us for a custom quote at 833-233-4447.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      If the vehicle is coming from a salvage auction, the
                      carrier will have to work with the location to arrange
                      pickup from their facility. In these cases, please make
                      sure to provide your shipper with all the vehicle
                      information, including the VIN, buyer number, low number,
                      and stock number.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl">
                    <div className="flex items-center mb-8">
                      <div className="bg-[#003366] rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                        <span className="text-white font-bold text-2xl">2</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#003366]">
                        Pickup, transport, and delivery
                      </h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Once a carrier has been assigned to your shipment, and on
                      your arranged pickup date, your vehicle will be picked up
                      at an agreed-upon location where it will be securely
                      loaded onto a trailer or flatbed. From there, it will
                      depart for your specific destination. Upon delivery, the
                      vehicle will be unloaded for a final inspection.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vehicle Preparation */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                    Preparing Your Vehicle for Shipping
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {vehiclePreparation.map((prep, index) => (
                    <div
                      key={index}
                      className="group"
                      onMouseEnter={() => setHoveredCard(`prep-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full transition-all duration-500 ${
                          hoveredCard === `prep-${index}`
                            ? "shadow-2xl scale-105 border-[#ff5722]/30"
                            : "hover:shadow-xl"
                        }`}
                      >
                        <div className="text-center mb-4">
                          <div
                            className={`bg-gradient-to-br from-[#ff5722] to-[#ff6b47] rounded-xl p-3 w-16 h-16 mx-auto mb-3 shadow-lg flex items-center justify-center text-white transition-transform duration-300 ${
                              hoveredCard === `prep-${index}`
                                ? "scale-110 rotate-6"
                                : ""
                            }`}
                          >
                            {prep.icon}
                          </div>
                          <h3
                            className={`text-lg font-bold transition-colors duration-300 ${
                              hoveredCard === `prep-${index}`
                                ? "text-[#ff5722]"
                                : "text-[#003366]"
                            }`}
                          >
                            {prep.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-center text-sm">
                          {prep.description}
                        </p>
                      </div>
                    </div>
                  ))}
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
                        Conclusion
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Shipping a non-running car or inoperable vehicle is
                      possible, but typically more expensive and complex than
                      transporting a running vehicle. This is due to the fact
                      that inoperable vehicle transport is the job of an
                      experienced damaged vehicle transport company that employs
                      very skilled, organized, and experienced personnel and
                      involves the use of special equipment and techniques.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752150615/1863373323_ewqdaj.webp"
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
