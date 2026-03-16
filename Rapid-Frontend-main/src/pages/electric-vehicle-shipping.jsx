"use client";

import React, { useState,useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import { Calculator } from "lucide-react";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
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
  FileCheck,
  Heart,
  Globe,
  Award,
  Search,
  Cloud,
  Lock,
  Thermometer,
  Settings,
  Battery ,
  Zap ,
  Leaf ,
  Volume2 ,
  Mail ,
  Sparkles ,
  Play ,
  ChevronDown,
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


 const primaryColor = '#ff5722';
  const secondaryColor = '#003366';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
 const faqData = [
  {
    icon: <Truck className="w-5 h-5" />,
    question: "Does Rapid Auto Shipping have experience with electric vehicle transport?",
    answer:
      "Yes. With over a decade of experience in auto transport, our team has successfully shipped thousands of electric vehicles, including Tesla, Rivian, Lucid, Nissan Leaf, and Chevy Bolt. We understand the specific handling needs of EVs and follow manufacturer-recommended transport protocols.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    question: "How is EV shipping different from standard car transport?",
    answer:
      "Electric vehicles require special care due to their heavier battery systems and sensitive electrical components. Our carriers are trained to safely load, secure, and transport EVs using non-conductive straps, EV-compatible equipment, and safe battery handling practices.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Is enclosed transport recommended for electric vehicles?",
    answer:
      "For high-value or luxury EVs, yes. Enclosed trailers offer protection from weather, dust, and road debris. It's the preferred method for shipping premium electric models and vehicles purchased new from out-of-state dealerships or online platforms.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "Are there safety concerns when shipping EVs with lithium-ion batteries?",
    answer:
      "No, when handled by professionals like us. We follow U.S. Department of Transportation (DOT) guidelines and manufacturer recommendations. We suggest shipping EVs with a 20–30% battery charge and ensuring the vehicle is powered down before loading.",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    question: "Is insurance included when shipping an electric vehicle?",
    answer:
      "Absolutely. All EVs shipped through Rapid Auto Shipping are fully insured from pickup to delivery. Each shipment includes a detailed condition report, and our carriers are fully licensed, bonded, and compliant with DOT regulations.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    question: "How can I trust Rapid Auto Shipping with my EV transport?",
    answer:
      "We're a top-rated car shipping company with an A+ BBB rating, verified customer reviews, and a proven track record of reliable service. Our team is available 7 days a week to provide transparent quotes, expert advice, and real-time updates on your EV shipment.",
  },
];

  return (
    <>
      <Head>
        <title>
          Best Electric Vehicle Shipping Solutions | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="At Rapid Auto Shipping, we specialize in electric vehicle shipping. Our experienced team understands the unique requirements of EVs, ensuring safe and secure transport for your prized possession."
        />
       
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/electric-vehicle-shipping"
        />
        <meta
          property="og:title"
          content="Best Electric Vehicle Shipping Solutions | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="At Rapid Auto Shipping, we specialize in electric vehicle shipping. Our experienced team understands the unique requirements of EVs, ensuring safe and secure transport for your prized possession."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/electric-vehicle-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753709767/electric_car_shipping_2_a1nqhn.webp"
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
                    "@id":
                      " https://rapidautoshipping.com/electric-vehicle-shipping",
                    name: "electric-vehicle-shipping",
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
              serviceType: "electric-vehicle-shipping",
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
                "At Rapid Auto Shipping, we specialize in electric vehicle shipping. Our experienced team understands the unique requirements of EVs, ensuring safe and secure transport for your prized possession.",
              url: "https://rapidautoshipping.com/electric-vehicle-shipping",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753709767/electric_car_shipping_2_a1nqhn.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753709767/electric_car_shipping_2_a1nqhn.webp"
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
                    Electric Vehicle  <span className="text-[#ff5722]">Shipping</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Delivering an electric car in the United States can be a very complex and typical process but, Rapid auto Shipping makes it possible to easily ship your car from the US or to the U.S. Before we start moving cars, it is important for each and every person to know the value it will occur and cost. The electric vehicle shipping costs from or to the U.S. may be different in each case. As to ship an electric car from the U.S. usually costs approx $2300 to $5800.
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
                       What is Electric Vehicle Shipping?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                     Electric vehicle shipping refers to the process of shipping and transporting cars and vehicles from one location to another, usually by truck or trailers. This may include shipment of cars and vehicles between dealerships, shipping cars for personal use, or relocating cars for military personnel. The service can also include door-to-door delivery or terminal-to-terminal delivery.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    Electric vehicle shipping can transport cars and vehicles using various methods, including open-air and enclosed trailers and flatbed trucks.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    Open-air trailers are the most common affordable options for each and every customer, but they have low safety measures as the cars are transported in open containers or trailers. Enclosed trailers and flatbed trucks cost us more and are expensive as they take full safety measures as they ship our cars and vehicles in a closed trailer or truck.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753709747/electric_car_shipping_3_qoihsn.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


            <div className="min-h-screen bg-white overflow-hidden">
      {/* Ultra Modern Hero Section - Mobile Optimized */}
      <div 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4"
        style={{ 
          background: `linear-gradient(135deg, ${secondaryColor} 0%, #001122 50%, ${secondaryColor} 100%)` 
        }}
      >
        {/* Animated Background Elements - Smaller on Mobile */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-10 left-5 w-32 h-32 md:w-72 md:h-72 md:top-20 md:left-10 rounded-full opacity-10 animate-pulse"
            style={{ 
              background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          ></div>
          <div 
            className="absolute bottom-10 right-5 w-40 h-40 md:w-96 md:h-96 md:bottom-20 md:right-10 rounded-full opacity-10 animate-pulse"
            style={{ 
              background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
              transform: `translateY(${-scrollY * 0.2}px)`,
              animationDelay: '1s'
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 md:w-2 md:h-2 rounded-full opacity-30 animate-bounce ${i > 7 ? 'hidden md:block' : ''}`}
              style={{
                backgroundColor: primaryColor,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-8 px-3 py-2 md:px-6 md:py-3 bg-white/10 rounded-full backdrop-blur-lg border border-white/20">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5" style={{ color: primaryColor }} />
            <span className="text-xs md:text-sm font-medium">Industry Growing at Record Pace</span>
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" style={{ color: primaryColor }} />
          </div>
          
          <h2 className="text-5xl sm:text-5xl  font-black mb-6 md:mb-8 leading-tight px-2">
            Is The{' '}
            <span 
              className="relative inline-block"
              style={{ color: primaryColor }}
            >
              Electric Vehicle
              <div 
                className="absolute -inset-1 md:-inset-2 rounded-lg opacity-20 blur-sm md:blur-xl animate-pulse"
                style={{ backgroundColor: primaryColor }}
              ></div>
            </span>
            <br />
            Shipping Industry Growing?
          </h2>
          
          <div className="flex flex-col gap-4 md:gap-6 justify-center items-center mt-8 md:mt-12 px-4">
            <Link href="https://rapidautoshipping.com/electric-vehicle-shipping">
            <button 
              className="group w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold rounded-full text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2 md:gap-3 relative overflow-hidden"
              style={{ backgroundColor: primaryColor }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Play className="w-5 h-5 md:w-6 md:h-6" />
              Get Free Quote
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            </Link>

            <Link href="tel:+18332334447">
            <button 
              className="group w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-500 flex items-center justify-center gap-2 md:gap-3"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              Call Now
            </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white opacity-70" />
        </div>
      </div>

      {/* Industry Growth Section - Mobile Optimized */}
      <section className="relative py-16 md:py-32 px-4 bg-white overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-16 md:h-32 transform -skew-y-1 md:-skew-y-2 origin-top-left"
          style={{ backgroundColor: secondaryColor }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div 
                className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-12 h-12 md:w-24 md:h-24 rounded-full opacity-20"
                style={{ backgroundColor: primaryColor }}
              ></div>
              <h2 className="text-5xl md:text-5xl font-black mb-6 md:mb-8" style={{ color: secondaryColor }}>
                The Industry is{' '}
                <span 
                  className="relative"
                  style={{ color: primaryColor }}
                >
                  Booming
                  <div 
                    className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 opacity-30 -skew-x-12"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                </span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-700 relative pl-4 md:pl-6">
                  <div 
                    className="absolute left-0 top-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                  The electric vehicle shipping industry was indeed growing at a significant rate. There was a strong global push for electric vehicles (EVs) as countries and automakers aimed to reduce carbon emissions, combat climate change, and transition away from traditional internal combustion engine vehicles.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 relative pl-4 md:pl-6">
                  <div 
                    className="absolute left-0 top-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                  Since then, the growth of the electric car and electric vehicle shipping industry has likely continued, with numerous new EV models being introduced, increased investments in EV infrastructure, and expanding consumer interest. Governments worldwide have been implementing policies to encourage the adoption of electric vehicles, such as incentives and emissions regulations.
                </p>
              </div>
            </div>
            
            {/* Stats Cards with Mobile Layout */}
            <div className="grid grid-cols-2 gap-3 md:gap-6 order-1 lg:order-2">
              <div className="group p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div 
                  className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <TrendingUp className="w-5 h-5 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <div className="text-xl md:text-3xl font-black mb-1 md:mb-2" style={{ color: secondaryColor }}>250%</div>
                <div className="text-gray-600 text-sm md:text-base">Growth Rate</div>
              </div>
              <div className="group p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 mt-4 md:mt-8">
                <div 
                  className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Globe className="w-5 h-5 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <div className="text-xl md:text-3xl font-black mb-1 md:mb-2" style={{ color: secondaryColor }}>50+</div>
                <div className="text-gray-600 text-sm md:text-base">Countries</div>
              </div>
              <div className="group p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 -mt-2 md:-mt-8">
                <div 
                  className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Car className="w-5 h-5 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <div className="text-xl md:text-3xl font-black mb-1 md:mb-2" style={{ color: secondaryColor }}>2M+</div>
                <div className="text-gray-600 text-sm md:text-base">EVs Shipped</div>
              </div>
              <div className="group p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div 
                  className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Zap className="w-5 h-5 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <div className="text-xl md:text-3xl font-black mb-1 md:mb-2" style={{ color: secondaryColor }}>100K+</div>
                <div className="text-gray-600 text-sm md:text-base">Charging Stations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How EVs Are Different - Mobile Optimized */}
      <section 
        className="relative py-16 md:py-32 px-4 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${secondaryColor}05 0%, white 50%, ${primaryColor}05 100%)` 
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-2 md:px-4 md:py-2 bg-white rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" style={{ color: primaryColor }} />
              <span className="text-xs md:text-sm font-semibold" style={{ color: secondaryColor }}>Key Differences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8" style={{ color: secondaryColor }}>
              How Electric Vehicles Are{' '}
              <span 
                className="relative"
                style={{ color: primaryColor }}
              >
                Different
                <div 
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-6 opacity-20 rounded-full blur-sm"
                  style={{ backgroundColor: primaryColor }}
                ></div>
              </span>
              <br />from Regular Vehicles?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Electric vehicles (EVs) differ from regular vehicles, which are typically powered by internal combustion engines (ICE), in several ways:
            </p>
          </div>

          {/* Mobile-First Grid Layout */}
          <div className="grid grid-cols-1 md:columns-2 lg:columns-3 gap-6 md:gap-8">
            {/* Power Source */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                <div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Battery className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                  Power Source
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  EVs use electricity stored in batteries to power an electric motor, while regular vehicles rely on gasoline or diesel fuel to run an internal combustion engine.
                </p>
              </div>
            </div>

            {/* Emissions */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                <div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Leaf className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                  Emissions
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  EVs produce zero tailpipe emissions. Regular vehicles emit pollutants such as carbon dioxide (CO2), nitrogen oxides (NOx), and particulate matter, contributing to air pollution and climate change.
                </p>
              </div>
            </div>

            {/* Fuel Efficiency */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                <div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Zap className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                  Fuel Efficiency
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  EVs are generally more energy-efficient, as they convert a higher percentage of the electrical energy from the grid into vehicle movement. ICE vehicles lose a significant portion of their energy as waste heat.
                </p>
              </div>
            </div>

            {/* Maintenance */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                <div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Wrench className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                  Maintenance
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  EVs typically have fewer moving parts in their electric drivetrains, leading to lower maintenance costs. There are no oil changes, and brake wear is reduced due to regenerative braking.
                </p>
              </div>
            </div>

            {/* Silent Operation */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                <div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Volume2 className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                  Silent Operation
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  EVs are quieter than regular vehicles, which can reduce noise pollution in urban areas.
                </p>
              </div>
            </div>

            {/* Range */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                <div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <MapPin className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                  Range
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  EVs may have limitations on range compared to some gasoline vehicles. However, this is improving as battery technology evolves.
                </p>
              </div>
            </div>

            {/* Charging Infrastructure */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                <div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Zap className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                  Charging Infrastructure
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  EVs rely on a network of charging stations rather than traditional gas stations. While charging infrastructure is expanding, it may not be as widely available in some areas.
                </p>
              </div>
            </div>

            {/* Cost of Operation */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                <div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <DollarSign className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                  Cost of Operation
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  EVs are often cheaper to operate on a per-mile basis because electricity is generally cheaper than gasoline, and maintenance <strong>costs are lower</strong>.
                </p>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                <div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Globe className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                  Environmental Impact
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  EVs can be more environmentally friendly, depending on the source of electricity. If the electricity comes from renewable sources, the carbon footprint of EVs can be significantly lower.
                </p>
              </div>
            </div>

            {/* Government Incentives */}
            <div className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl break-inside-avoid transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative">
                <div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Award className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                  Government Incentives
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Many governments offer incentives, such as tax credits and rebates, to encourage the adoption of EVs, making them more <strong>affordable for consumers</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Ship Section - Mobile Timeline */}
      <section 
        className="py-16 md:py-32 px-4 relative overflow-hidden"
        style={{ backgroundColor: secondaryColor }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, ${primaryColor} 1px, transparent 1px), radial-gradient(circle at 75% 75%, ${primaryColor} 1px, transparent 1px)`,
              backgroundSize: '25px 25px'
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-white">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8">
              How to Ship an{' '}
              <span style={{ color: primaryColor }}>
                Electric Vehicle
              </span>
              <br />or Electric Car?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Electric vehicle shipping is similar to shipping a conventional vehicle in many ways, but there are some specific considerations due to the nature of electric cars, primarily related to their batteries. Here's a general overview of the process for shipping an electric car:
            </p>
          </div>

          {/* Mobile-First Timeline */}
          <div className="relative">
            {/* Mobile Timeline - Vertical Left Line */}
            <div 
              className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 md:w-1 h-full rounded-full"
              style={{ backgroundColor: primaryColor }}
            ></div>

            <div className="space-y-8 md:space-y-16">
              {/* Step 1 */}
              <div className="flex items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right w-full pl-16 md:pl-0">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Choose a Reputable Shipping Company
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Choose Rapid Auto Shipping Company because it has experience in handling electric vehicles, as they will be aware of the specific requirements and precautions.
                    </p>
                  </div>
                </div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  1
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12"></div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start md:items-center">
                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 w-full pl-16 md:pl-12">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Preparation
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Before shipping, make sure the electric vehicle or car is fully charged. This helps ensure the vehicle's battery is in a safe and stable condition for transport.
                    </p>
                  </div>
                </div>
              </div>

              {/* Continue pattern for all 12 steps... */}
              {/* Step 3 */}
              <div className="flex items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right w-full pl-16 md:pl-0">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Notify the Shipping Company
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Inform the shipping company that you are transporting an electric vehicle so they can make the necessary arrangements for handling the battery safely.
                    </p>
                  </div>
                </div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  3
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12"></div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start md:items-center">
                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  4
                </div>
                <div className="md:w-1/2 md:pl-12 w-full pl-16 md:pl-12">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Battery Concerns
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Electric vehicles or car batteries are heavy and contain sensitive components. The shipping company should be aware of the weight and safety precautions needed when handling these batteries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right w-full pl-16 md:pl-0">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Secure the Vehicle
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Make sure the car is securely fastened or placed in a transport container to prevent any damage during transit.
                    </p>
                  </div>
                </div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  5
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12"></div>
              </div>

              {/* Step 6 */}
              <div className="flex items-start md:items-center">
                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  6
                </div>
                <div className="md:w-1/2 md:pl-12 w-full pl-16 md:pl-12">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Documentation
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Complete all the necessary paperwork and documentation required for shipping a vehicle, including any specific information related to the electric car's battery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right w-full pl-16 md:pl-0">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Charging Cable
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      If applicable, pack the charging cable and any accessories securely with the vehicle.
                    </p>
                  </div>
                </div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  7
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12"></div>
              </div>

              {/* Step 8 */}
              <div className="flex items-start md:items-center">
                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  8
                </div>
                <div className="md:w-1/2 md:pl-12 w-full pl-16 md:pl-12">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Insurance
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Verify that the <strong>shipping company has insurance</strong> that covers potential damage during transport. Consider additional insurance if needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 9 */}
              <div className="flex items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right w-full pl-16 md:pl-0">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Delivery Address
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Provide clear instructions regarding the pickup and delivery locations and any special requirements for unloading the vehicle.
                    </p>
                  </div>
                </div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  9
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12"></div>
              </div>

              {/* Step 10 */}
              <div className="flex items-start md:items-center">
                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  10
                </div>
                <div className="md:w-1/2 md:pl-12 w-full pl-16 md:pl-12">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Monitoring and Communication
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Stay in contact with the shipping company during the transportation process to receive updates and ensure a smooth delivery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 11 */}
              <div className="flex items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right w-full pl-16 md:pl-0">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Receiving the Vehicle
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      When the electric car arrives, inspect it carefully for any damage that may have occurred during transport.
                    </p>
                  </div>
                </div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  11
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12"></div>
              </div>

              {/* Step 12 */}
              <div className="flex items-start md:items-center">
                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                <div 
                  className="absolute left-3 md:relative md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  12
                </div>
                <div className="md:w-1/2 md:pl-12 w-full pl-16 md:pl-12">
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: primaryColor }}>
                      Charging After Delivery
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      If the vehicle has been in transit for an extended period, you may need to charge it upon delivery to ensure it's ready for use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                It's essential to work with a reputable and experienced shipping company to ensure the safe and secure transport of your electric vehicle. They should be knowledgeable about handling electric cars and their batteries to prevent any potential issues during shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rapid Auto Shipping - Mobile Optimized */}
      <section className="py-16 md:py-32 px-4 bg-white relative overflow-hidden">
        {/* Decorative Elements - Smaller on Mobile */}
        <div 
          className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 rounded-full opacity-5 transform translate-x-24 md:translate-x-48 -translate-y-24 md:-translate-y-48"
          style={{ backgroundColor: primaryColor }}
        ></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="text-4xl md:text-8xl font-black mb-6 md:mb-8 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              🌟
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8" style={{ color: secondaryColor }}>
              Introducing{' '}
              <span 
                className="relative"
                style={{ color: primaryColor }}
              >
                Rapid Auto Shipping
                <div 
                  className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-8 opacity-20 rounded-full blur-sm md:blur-lg"
                  style={{ backgroundColor: primaryColor }}
                ></div>
              </span>
            </h2>
            <p className="text-lg md:text-2xl font-bold text-gray-600 mb-3 md:mb-4">
              Your Trusted Partner for Electric Vehicle Transportation!
            </p>
            <div className="text-2xl md:text-4xl font-black" style={{ color: primaryColor }}>
              Why Choose Rapid Auto Shipping for Your Electric Vehicle? 🌟
            </div>
          </div>

          {/* Features Grid - Mobile Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
            {/* All features with consistent mobile-friendly layout */}
            {[
              { icon: CheckCircle, title: "✅ Electric Vehicle Experts", desc: "At Rapid Auto Shipping, we specialize in electric vehicle shipping. Our experienced team understands the unique requirements of EVs, ensuring safe and secure transport for your prized possession." },
              { icon: Shield, title: "✅ Safety First", desc: "We prioritize safety throughout the entire shipping process. Our experts know how to handle EV batteries and drivetrains, ensuring your vehicle arrives in the same condition as when it left." },
              { icon: Shield, title: "✅ Comprehensive Insurance", desc: "Your electric vehicle deserves top-notch protection. We offer comprehensive insurance coverage to safeguard your investment during transit." },
              { icon: Star, title: "✅ Outstanding Reputation", desc: "We are proud of our impeccable track record. Read our glowing customer reviews and testimonials that attest to our reliability, professionalism, and care for your electric vehicle." },
              { icon: DollarSign, title: "✅ Competitive Pricing", desc: "Quality service doesn't have to break the bank. Rapid Auto Shipping provides competitive rates, ensuring that you get exceptional value for your money." },
              { icon: Truck, title: "✅ State-of-the-Art Equipment", desc: "Our specialized equipment is designed to load, secure, and transport electric vehicles safely. Whether it's a plug-in hybrid or a full electric car, we have the tools and knowledge to handle it with care." },
              { icon: Award, title: "✅ Legal Compliance", desc: "We're fully licensed, registered, and compliant with all regulations, giving you peace of mind knowing your electric vehicle is in capable hands." },
              { icon: Phone, title: "✅ Customer-Centric Service", desc: "Our commitment to outstanding customer service means you'll receive updates, clear communication, and support throughout the entire shipping journey." }
            ].map((feature, index) => (
              <div key={index} className={`group bg-gradient-to-br from-white to-gray-50 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 relative overflow-hidden ${index % 2 === 1 ? 'md:mt-8' : ''}`}>
                <div 
                  className="absolute top-0 right-0 w-16 h-16 md:w-32 md:h-32 rounded-full opacity-10 transform translate-x-8 md:translate-x-16 -translate-y-8 md:-translate-y-16"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div className="flex items-start gap-4 md:gap-6">
                  <div 
                    className="w-12 h-12 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <feature.icon className="w-6 h-6 md:w-10 md:h-10" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-4" style={{ color: secondaryColor }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section 
        className="py-16 md:py-32 px-4 text-white relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${secondaryColor} 0%, #001a33 50%, ${secondaryColor} 100%)` 
        }}
      >
        {/* Ultra Modern Background - Simplified for Mobile */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-5 md:opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, ${primaryColor}15 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${primaryColor}15 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <p className="text-lg md:text-2xl leading-relaxed mb-8 md:mb-12 font-light">
            When you choose Rapid Auto Shipping, you're choosing the best in the business. Trust us to transport your electric vehicle with the utmost care and professionalism.
          </p>
          
          <div 
            className="text-2xl md:text-4xl font-black mb-12 md:mb-16 leading-tight"
            style={{ color: primaryColor }}
          >
            Contact us today for a free quote and experience the peace of mind that comes with having your electric vehicle transported by the experts at Rapid Auto Shipping! Your EV deserves the best, and we deliver it with excellence. 🚗🔌⚡
          </div>
          
          

          {/* Premium Stats - Mobile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl md:text-5xl font-black mb-2 md:mb-3" style={{ color: primaryColor }}>10,000+</div>
              <div className="text-gray-300 text-base md:text-lg">EVs Shipped Safely</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl md:text-5xl font-black mb-2 md:mb-3" style={{ color: primaryColor }}>99.8%</div>
              <div className="text-gray-300 text-base md:text-lg">Customer Satisfaction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl md:text-5xl font-black mb-2 md:mb-3" style={{ color: primaryColor }}>24/7</div>
              <div className="text-gray-300 text-base md:text-lg">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>


          

         
          <div
            className=" bg-gradient-to-br from-gray-50 via-orange-50 to-blue-50 py-12 px-4"
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
