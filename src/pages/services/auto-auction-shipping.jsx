"use client";
import React, { useState, useEffect } from "react";
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
  Target,
  Award,
  Search,
  Layers,
  Navigation,
  Info,
  AlertCircle,
  Route,
  ChevronDown,
  Globe,
  Filter,
  ExternalLink,

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


   const [isVisible, setIsVisible] = useState({});
  const [activeInfo, setActiveInfo] = useState(null);
  const [mobileView, setMobileView] = useState('cards');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const informationNeeded = [
    {
      title: "Lot Number",
      description: "A lot number is the number of the lot the vehicle is physically located in. Every auto auction will have a lot number, even if they don't call it a lot number. This information will be needed so the carrier can inform the auction house which vehicle it is they are there to load.",
      icon: Target,
      color: "from-[#003366] to-[#ff5722]"
    },
    {
      title: "Buyer Number",
      description: "A buyer number is a unique number assigned to a buyer of a vehicle at the auction. Each buyer number is different and is used to identify the buyer of a specific vehicle. This, combined with a lot number, is usually enough to satisfy an auction's requirements to release a vehicle to a carrier. This may also be called a customer number or something different.",
      icon: Users,
      color: "from-[#ff5722] to-[#003366]"
    },
    {
      title: "Release Form",
      description: "Most major auctions only need a lot number and a buyer number to release a vehicle. Some smaller auctions, however, may require an actual form to be presented in order to release a vehicle to a carrier. The auction house you buy your vehicle from will provide this to you if it is necessary.",
      icon: FileText,
      color: "from-[#003366] to-[#ff5722]"
    },
    {
      title: "Condition Certificate",
      description: "Non-Operational Affidavit for winch-load vehicles; MARAD Form for military-grade vehicles is required for compliance with certain regulations and safety standards.",
      icon: Award,
      color: "from-[#ff5722] to-[#003366]"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Request an instant quote online or by phone with auction and vehicle details.",
      icon: Search
    },
    {
      step: "2", 
      title: "Choose your shipping option (e.g., open vs enclosed, standard vs expedited).",
      icon: Layers
    },
    {
      step: "3",
      title: "Schedule pickup directly from the auction site or a nearby location.",
      icon: MapPin
    },
    {
      step: "4",
      title: "Track your vehicle's journey with real-time updates (if applicable, or mention driver communication).",
      icon: Navigation
    },
    {
      step: "5",
      title: "Receive your vehicle at your doorstep, inspected and damage-free.",
      icon: CheckCircle
    }
  ];

  const services = [
    {
      title: "RUNNING AND NON-RUNNING VEHICLES",
      description: "The cost of shipping a running vehicle is relatively cheaper than the cost of shipping a non-running vehicle. A Non-running vehicle requires specialized equipment during the shipping process that may incur an additional fee.",
      icon: Car,
      color: "from-[#003366] to-[#ff5722]"
    },
    {
      title: "VINTAGE AND LUXURY CAR TRANSPORT",
      description: "As the premier auto auction shipping company, we offer secure transport for vintage and luxury cars. Vintage and Luxury vehicle shipping require a lot of expertise. The enclosed transport option provides the highest protection for these cars. Climate-controlled containers are sometimes required to protect luxury and vintage cars that may have sensitive components.",
      icon: Shield,
      color: "from-[#ff5722] to-[#003366]"
    },
    {
      title: "BULK SHIPPING OPTIONS FOR DEALERSHIP AND MULTIPLE AUCTION PURCHASES",
      description: "Our cost-efficient shipping charges and multi-car carriers make it attractive for dealerships to auto auction and multiple auction purchases to save on shipping charges without compromising on shipment quality.",
      icon: Truck,
      color: "from-[#003366] to-[#ff5722]"
    }
  ];

  const auctionData = [
    {
      name: "Manheim Auctions",
      location: "Nationwide (78+ locations)",
      coverage: "All 50 states",
      features: ["Largest auto auction network in the U.S.", "Open and enclosed transport options", "Door-to-door service"],
      region: "nationwide",
      link: "https://rapidautoshipping.com/manheim-auctions-auto-transport"
    },
    {
      name: "ADESA Auctions", 
      location: "Multiple locations across North America",
      coverage: "Continental U.S. and Canada",
      features: ["Second largest auto auction company", "Vehicle tracking system", "Expedited shipping options"],
      region: "nationwide",
      link: "https://rapidautoshipping.com/adesa-auctions-auto-transport"
    },
    {
      name: "America's Auto Auction",
      location: "Multiple U.S. cities",
      coverage: "All 50 states", 
      features: ["Full-service dealer auctions", "Standard and expedited options", "Competitive pricing"],
      region: "nationwide",
      link: "https://rapidautoshipping.com/americas-car-auction-transport"
    },
    {
      name: "Bel Air Auto Auction",
      location: "Bel Air, Maryland",
      coverage: "East Coast focus, nationwide service",
      features: ["Regional specialty", "Dealer-only auction", "24/7 customer support"],
      region: "east",
      link: "https://rapidautoshipping.com/bel-air-auto-auction-transportation"
    },
    {
      name: "South Bay Auto Auction",
      location: "Gardena, California", 
      coverage: "West Coast focus, nationwide service",
      features: ["California specialist", "Open carrier and enclosed transport", "Specialized luxury vehicle handling"],
      region: "west",
      link: "https://rapidautoshipping.com/south-bay-auto-auction-transportation"
    },
    {
      name: "Akron Auto Auction",
      location: "Akron, Ohio",
      coverage: "Midwest focus, nationwide service",
      features: ["Independent dealer auction", "GPS tracking available", "Winter transport specialists"],
      region: "midwest",
      link: "https://rapidautoshipping.com/akron-auto-auction-transportation"
    },
    {
      name: "Carolina Auto Auctions",
      location: "Anderson, South Carolina",
      coverage: "Southeast focus, nationwide service", 
      features: ["Southeast regional specialist", "Flexible pickup scheduling", "Dealer consignment services"],
      region: "southeast",
      link: "https://rapidautoshipping.com/carolina-auto-auctions-transportation"
    },
    {
      name: "Missouri Auto Auction",
      location: "Columbia, Missouri",
      coverage: "Central U.S. focus, nationwide service",
      features: ["Central U.S. specialist", "Fleet vehicle experience", "Real-time shipment updates"],
      region: "central",
      link: "https://rapidautoshipping.com/missouri-auto-auction-transportation"
    },
    {
      name: "Texas Lone Star Auto Auction",
      location: "Carrollton, Texas",
      coverage: "Southwest focus, nationwide service",
      features: ["Texas and Southwest specialist", "Expedited delivery options", "Commercial fleet experience"],
      region: "southwest",
      link: "https://rapidautoshipping.com/texas-lone-star-auto-auction-transportation"
    },
    {
      name: "AutoNation Auction",
      location: "Multiple locations",
      coverage: "All 50 states",
      features: ["Dealer-only auctions", "Pre-owned vehicle specialists", "Comprehensive insurance coverage"],
      region: "nationwide",
      link: "https://rapidautoshipping.com/autonation-auction-car-transportation"
    }
  ];

  const filteredAuctions = auctionData.filter(auction => {
    const matchesSearch = auction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auction.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || auction.region === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'nationwide', label: 'Nationwide' },
    { value: 'east', label: 'East Coast' },
    { value: 'west', label: 'West Coast' },
    { value: 'midwest', label: 'Midwest' },
    { value: 'southeast', label: 'Southeast' },
    { value: 'central', label: 'Central' },
    { value: 'northeast', label: 'Northeast' },
    { value: 'southwest', label: 'Southwest' },
    { value: 'northwest', label: 'Northwest' }
  ];

 

const faqData = [
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "Do you ship cars from auto auctions like Copart, Manheim, or IAAI?",
    answer:
      "Yes! We specialize in transporting vehicles from all major auto auctions across the U.S., including Copart, Manheim, IAAI, ADESA, and more. We understand each auction's pickup procedures and documentation requirements.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "How soon can you pick up a vehicle from an auction?",
    answer:
      "In most cases, we can arrange pickup within 1–3 business days after the auction is finalized and release paperwork is ready. Expedited pickup options are also available.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    question: "What documents are required for auction car shipping?",
    answer:
      "We usually need the lot number, buyer number, and release form from the auction. Our team will guide you through the entire paperwork process to ensure a smooth release and transport.",
  },
  {
    icon: <Truck className="w-5 h-5" />,
    question: "Can you ship inoperable or salvage auction vehicles?",
    answer:
      "Yes. We're equipped to transport non-running, damaged, or salvage-title vehicles from auctions. Let us know the condition when booking so we can dispatch the right carrier with winch or forklift capabilities.",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "How much does it cost to ship an auction vehicle?",
    answer:
      "Costs vary based on distance, vehicle size, condition, and location. Auction yards may charge storage fees, so we work fast to minimize delays. Contact us for a free, all-inclusive quote.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    question: "Do you offer nationwide and dealer auction transport services?",
    answer:
      "Yes. We offer door-to-door shipping across all 50 states for dealers, resellers, and private buyers. We also handle multi-unit loads and ongoing auction-to-dealer delivery contracts.",
  },
];

  return (
    <>
      <Head>
        <title>Best Auto Auction Shipping Service | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Rapid Auto Shipping handles all of your Auction Auto Shipping services. Contact us Now For Auto Auction transportation services and online auctions shipping."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/auto-auction-shipping"
        />
        <meta
          property="og:title"
          content="Best Auto Auction Shipping Service | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping handles all of your Auction Auto Shipping services. Contact us Now For Auto Auction transportation services and online auctions shipping."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/auto-auction-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753691409/auto-auction-shipping_2_ealxjz.webp"
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
                      "https://rapidautoshipping.com/services/auto-auction-shipping",
                    name: "auto-auction-shipping",
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
              serviceType: "Auto- Auction Shipping",
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
                "Rapid Auto Shipping can handle all of your Auction Auto Shipping services. Contact us Now For Auto Auction transportation service, online auction with shipping",

              url: "https://rapidautoshipping.com/services/auto-auction-shipping",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753691409/auto-auction-shipping_2_ealxjz.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753691409/auto-auction-shipping_2_ealxjz.webp"
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
                    Seamless Auto Auction{" "}
                    <span className="text-[#ff5722]">Shipping</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Auto auction shipping enables us to ship the vehicles
                    purchased at auto auctions. Once someone bids the highest
                    for a pre-owned or used car put up for sale at an auto
                    auction, auction car transport is required. Door-to-door
                    shipping companies deliver the auctioned vehicles to their
                    desired location. At RAPID AUTO SHIPPING, you get
                    hassle-free auto auction shipping services with nationwide
                    coverage, secure transport options, and instant quotes. Ship
                    your auction vehicle today!
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
                        Your Trusted Partner For Auto Auction Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Auto auctions are on the rise these days and there is a
                      huge surge in the number of automobiles bought online and
                      in-person. Auction houses, such as Copart, Manheim, IAAI,
                      ADESA, and AutoBid Master specialize in the auction of
                      used, salvage, and repairable vehicles for individuals as
                      well as for dealerships and businesses. Auto auction
                      lovers get a wide selection of vehicles at a competitive
                      price. An individual can find a specific type or it can be
                      a collector's delight and an opportunity for a dealer to
                      load up.
                      <br /> <br />
                      But, once the vehicle is purchased the buyer then faces
                      the dilemma of transporting the vehicle to its final
                      destination from the auction site. Auction buyers require
                      critical logistic support after analyzing auto auction
                      shipping services models, shipping methodologies, costing
                      schemes, and vital documentation requirements.
                      <br /> <br />
                      At RAPID AUTO SHIPPING, we understand that moving a
                      vehicle rapidly your way is the best way. We provide
                      reliable, efficient, customer-focused solutions and
                      complement your specific processes, following your hour of
                      operation, regulations, gate pass procedure, and vehicle
                      collection strategy. So trust us for secure transport and
                      reliable delivery.
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
                    <div className="relative z-10 mt-10 hidden md:block">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753691417/auto-auction-shipping_3_b7u7og.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[300px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Car className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">Auto Auction Specialists</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Auto Auction
              <span className="block bg-gradient-to-r from-[#ff5722] to-orange-300 bg-clip-text text-transparent mt-2">
                Shipping Services
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Rapid Auto Shipping Services for Major Auto Auctions with comprehensive coverage and professional handling from auction-to-doorstep delivery.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Information Required Section */}
      <div 
        id="information-needed"
        className={`py-16 sm:py-20 transition-all duration-1000 delay-200 `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#ff5722]/10 rounded-full px-6 py-3 mb-6">
              <Info className="w-6 h-6 text-[#ff5722]" />
              <span className="text-[#ff5722] font-semibold text-lg">Required Information</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What We'll Need From You When Shipping From An Auction
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every auction will have several pieces of information that you'll need to supply to your shipping company for smooth auction car transport. This information will come from the auction itself, usually in an email after you've won the auction. This information includes, but may not be limited to:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] mx-auto rounded-full mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {informationNeeded.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#ff5722] transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ff5722]/5 to-transparent rounded-bl-2xl rounded-tr-2xl"></div>
                </div>
              );
            })}
          </div>

          {/* Warning Message */}
          <div className="mt-12 bg-gradient-to-r from-[#ff5722]/10 to-[#003366]/10 rounded-2xl p-6 sm:p-8 border border-[#ff5722]/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-[#ff5722] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This information will need to be provided to us when you book your order. If we find a carrier for you and schedule your vehicle for pickup at an auction and they don't have the information they need to get the vehicle, the auction house simply will not release the vehicle to them.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This can result in delays, canceled dispatches, and even dry run fees imposed by the carrier for having to leave empty-handed. Be sure to get all relevant information over to us before we find a driver for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div 
        id="why-choose-us"
        className={`py-16 sm:py-20 bg-gradient-to-br from-[#003366]/5 to-[#ff5722]/5 transition-all duration-1000 delay-400`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#003366]/10 rounded-full px-6 py-3 mb-6">
              <Star className="w-6 h-6 text-[#003366]" />
              <span className="text-[#003366] font-semibold text-lg">Our Advantages</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Auto Auction Shipping Services?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#003366] to-[#ff5722] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Auto auction shipping requires a wide range of services from moving operational cars across states, to the international transport of luxury vehicles or non-operational vehicles. Our dedicated support team coordinates with auction houses such as Copart, Manheim, and IAAI. Professionally retrieving the vehicle from the auction lots by following specific release protocols.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our multi-modal auto auction transport system integrates road, rail, and ocean transport to achieve optimal delivery and makes it cost-efficient. Transparent pricing with no hidden fees or deposits required upfront and fast turnaround times to meet auction deadlines make us the best auction vehicle shipping handlers.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Each shipment is given condition-specific handling (e.g., specialized equipment is used for non-operational vehicles and climate-controlled containers for sensitive and luxury/classic vehicles) protecting both kinds of vehicles during shipment. Our auto auction shipping support team guides customers through the process, from quote to delivery.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div 
        id="how-it-works"
        className={`py-16 sm:py-20 transition-all duration-1000 delay-600`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#ff5722]/10 rounded-full px-6 py-3 mb-6">
              <Route className="w-6 h-6 text-[#ff5722]" />
              <span className="text-[#ff5722] font-semibold text-lg">Process Overview</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How Our Auto Auction Shipping Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center group">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-gradient-to-r from-[#003366] to-[#ff5722] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#ff5722]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-[#ff5722]" />
                    </div>
                    
                    {/* Step Title */}
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-[#ff5722] transition-colors duration-300">
                      <span className="font-bold">Step {step.step}:</span> {step.title}
                    </h3>
                  </div>
                  
                  {/* Connecting Arrow (hidden on mobile, visible on larger screens) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#003366] to-[#ff5722] rounded-full flex items-center justify-center">
                        <ChevronDown className="w-5 h-5 text-white transform rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tailored Solutions Section */}
      <div 
        id="tailored-solutions"
        className={`py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-[#003366]/5 transition-all duration-1000 delay-800 `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#003366]/10 rounded-full px-6 py-3 mb-6">
              <Layers className="w-6 h-6 text-[#003366]" />
              <span className="text-[#003366] font-semibold text-lg">Custom Solutions</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Tailored Solutions For Every Auction Vehicle
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              Auto auction shipping requires a lot of planning as numerous variables are involved. It is done on a case-to-case basis, depending on the size and type of vehicle. Some auction houses offer in-house auto auction transport services for vehicles won at their auction. However, these services come at a premium cost since they primarily focus on their core business and not on specializing in transportation.
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              A trusted carrier, RAPID AUTO SHIPPING, specializes in tailored solutions for every auction vehicle. The services that we offer are:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#003366] to-[#ff5722] mx-auto rounded-full mt-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#ff5722] transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#ff5722]/5 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-[#003366]/10 to-[#ff5722]/10 rounded-full blur-xl"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Auction Services Table Section */}
      <div 
        id="auction-table"
        className={`py-16 sm:py-20 transition-all duration-1000 delay-1000 `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#ff5722]/10 rounded-full px-6 py-3 mb-6">
              <Globe className="w-6 h-6 text-[#ff5722]" />
              <span className="text-[#ff5722] font-semibold text-lg">Major Auctions</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Auto Auction Transport Services
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Rapid Auto Shipping Services for Major Auto Auctions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] mx-auto rounded-full"></div>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search auctions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff5722] focus:border-transparent outline-none transition-all duration-300 w-full sm:w-64"
                />
              </div>
              
              <div className="relative">
                <Filter className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff5722] focus:border-transparent outline-none transition-all duration-300 appearance-none bg-white w-full sm:w-48"
                >
                  {regions.map((region) => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile View Toggle */}
            <div className="sm:hidden flex gap-2">
              <button
                onClick={() => setMobileView('cards')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  mobileView === 'cards' 
                    ? 'bg-[#ff5722] text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setMobileView('table')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  mobileView === 'table' 
                    ? 'bg-[#ff5722] text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Table
              </button>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#003366] to-[#ff5722] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Auction Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Location</th>
                    <th className="px-6 py-4 text-left font-semibold">Service Coverage</th>
                    <th className="px-6 py-4 text-left font-semibold">Features</th>
                    <th className="px-6 py-4 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAuctions.map((auction, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {auction.name}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {auction.location}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {auction.coverage}
                      </td>
                      <td className="px-6 py-4">
                        <ul className="space-y-1">
                          {auction.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#ff5722] flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Link href={auction.link}>
                        <button className="bg-gradient-to-r from-[#003366] to-[#ff5722] text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
                          Open
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tablet Table View */}
          <div className="hidden sm:block lg:hidden bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gradient-to-r from-[#003366] to-[#ff5722] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-sm">Auction Name</th>
                    <th className="px-4 py-3 text-left font-semibold text-sm">Location</th>
                    <th className="px-4 py-3 text-left font-semibold text-sm">Coverage</th>
                    <th className="px-4 py-3 text-left font-semibold text-sm">Features</th>
                    <th className="px-4 py-3 text-center font-semibold text-sm">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAuctions.map((auction, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300"
                    >
                      <td className="px-4 py-3 font-semibold text-gray-900 text-sm">
                        {auction.name}
                      </td>
                      <td className="px-4 py-3 text-gray-700 text-sm">
                        {auction.location}
                      </td>
                      <td className="px-4 py-3 text-gray-700 text-sm">
                        {auction.coverage}
                      </td>
                      <td className="px-4 py-3">
                        <div className="space-y-1">
                          {auction.features.slice(0, 2).map((feature, featureIndex) => (
                            <div key={featureIndex} className="text-xs text-gray-600 flex items-start gap-1">
                              <CheckCircle className="w-3 h-3 text-[#ff5722] flex-shrink-0 mt-0.5" />
                              {feature}
                            </div>
                          ))}
                          {auction.features.length > 2 && (
                            <div className="text-xs text-[#ff5722] font-medium">
                              +{auction.features.length - 2} more
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Link href={auction.link}>
                        <button className="bg-gradient-to-r from-[#003366] to-[#ff5722] text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                          Open
                        </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className={`sm:hidden ${mobileView === 'cards' ? 'block' : 'hidden'}`}>
            <div className="space-y-6">
              {filteredAuctions.map((auction, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 flex-1">
                      {auction.name}
                    </h3>
                    <Link href={auction.link}>
                    <button className="bg-gradient-to-r from-[#003366] to-[#ff5722] text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-1">
                      Open
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    </Link>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#ff5722] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{auction.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-[#003366] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{auction.coverage}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="space-y-1">
                      {auction.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-[#ff5722] flex-shrink-0 mt-0.5" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Table View */}
          <div className={`sm:hidden ${mobileView === 'table' ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gradient-to-r from-[#003366] to-[#ff5722] text-white">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-xs">Name</th>
                      <th className="px-3 py-2 text-left font-semibold text-xs">Location</th>
                      <th className="px-3 py-2 text-left font-semibold text-xs">Coverage</th>
                      <th className="px-3 py-2 text-center font-semibold text-xs">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAuctions.map((auction, index) => (
                      <tr 
                        key={index} 
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300"
                      >
                        <td className="px-3 py-2 font-semibold text-gray-900 text-xs">
                          {auction.name}
                        </td>
                        <td className="px-3 py-2 text-gray-700 text-xs">
                          {auction.location}
                        </td>
                        <td className="px-3 py-2 text-gray-700 text-xs">
                          {auction.coverage}
                        </td>
                        <td className="px-3 py-2 text-center">
                          <Link href={auction.link}>
                          <button className="bg-gradient-to-r from-[#003366] to-[#ff5722] text-white px-2 py-1 rounded text-xs font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Open
                          </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-6 text-center text-gray-600">
            Showing {filteredAuctions.length} of {auctionData.length} auction{filteredAuctions.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-[#003366] to-[#ff5722]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            GET STARTED TODAY
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We provide the best service for auto auction vehicles, a trusted carrier that is committed to you from auction-to-doorstep. Our services are the most cost-effective and quickest in the USA. When you choose us, you choose to have a stress-free service. Get a customized, free, and non-obligation quote. Our professional and dedicated team is easily available 24/7 to guide you.
          </p>
          <Link href="https://rapidautoshipping.com/services/auto-auction-shipping">
          <button className="bg-white text-[#003366] hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg text-lg">
            Get an Instant Quote Now
          </button>
          </Link>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-[#003366]/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Conclusion
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#003366] to-[#ff5722] mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In conclusion, auto auction shipping companies play a crucial role between auction buyers and auction auto sellers, enabling efficient vehicle acquisition, safe transport, and, reliable delivery. It also presents opportunities for cost savings and streamlined logistics, particularly for businesses and individuals seeking to acquire vehicles from auctions.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Auto auction shipping services facilitate access to vehicles from various auction locations, expanding the market for buyers and providing access to a wider variety of vehicles.
            </p>
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