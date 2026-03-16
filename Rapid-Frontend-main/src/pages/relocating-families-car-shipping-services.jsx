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
  MessageCircle,
  Home,
  Building2,
  CloudSnow,
} from "lucide-react";
import Image from "next/image";

const Hello = () => {
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

  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});

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

  const services = [
    {
      title: "Open-Air Transport",
      description:
        "Open-air car transport is the most common and cost-effective method. Vehicles are loaded onto an open trailer and transported to their destination. It's suitable for most types of vehicles and is often chosen for short to medium-distance moves.",
      icon: Car,
      color: "from-[#003366] to-[#ff5722]",
    },
    {
      title: "Enclosed Transport",
      description:
        "Enclosed car transport provides extra protection by placing vehicles in enclosed trailers. This is ideal for classic cars, luxury vehicles, or any situation where added security and protection from the elements are required.",
      icon: Shield,
      color: "from-[#ff5722] to-[#003366]",
    },
    {
      title: "Door-to-Door Transport",
      description:
        "This service offers convenience by picking up the vehicle from its current location and delivering it directly to the specified destination, whether it's a home, business, or dealership.",
      icon: Home,
      color: "from-[#003366] to-[#ff5722]",
    },
    {
      title: "Terminal-to-Terminal Transport",
      description:
        "Terminal to terminal services involve dropping off and picking up the vehicle at designated terminals or depots. While it may be less convenient, it can be more cost-effective.",
      icon: MapPin,
      color: "from-[#ff5722] to-[#003366]",
    },
    {
      title: "Expedited Transport",
      description:
        "For those in a hurry, expedited car relocation services prioritize faster delivery. However, this service usually comes at a higher cost.",
      icon: Zap,
      color: "from-[#003366] to-[#ff5722]",
    },
    {
      title: "International Car Shipping",
      description:
        "When relocating vehicles across international borders, specialized international car shipping services are necessary to handle customs and shipping logistics.",
      icon: Globe,
      color: "from-[#ff5722] to-[#003366]",
    },
    {
      title: "Dealer Car Transport",
      description:
        "This service is tailored to car dealerships and resellers, offering bulk transport for multiple vehicles. It's designed to support inventory management and dealership operations.",
      icon: Building2,
      color: "from-[#003366] to-[#ff5722]",
    },
  ];

  const costFactors = [
    {
      title: "Distance",
      description:
        "The most significant factor is the distance between the pickup and delivery locations.",
      icon: MapPin,
    },
    {
      title: "Vehicle Size and Type",
      description:
        "The size, weight, and type of the vehicle being transported can impact the cost.",
      icon: Car,
    },
    {
      title: "Transport Method",
      description:
        "There are two main transport methods: open transport and enclosed transport. Enclosed transport, which offers more protection, is usually more expensive than open transport.",
      icon: Truck,
    },
    {
      title: "Vehicle Condition",
      description:
        "Non-running or inoperable vehicles may require special equipment or handling, which can increase the cost.",
      icon: AlertTriangle,
    },
    {
      title: "Season and Demand",
      description:
        "Shipping costs can fluctuate depending on the time of year and current demand.",
      icon: Calendar,
    },
    {
      title: "Pickup and Delivery Locations",
      description:
        "The specific locations within the cities or regions can affect the cost. Remote or less accessible areas may result in higher prices.",
      icon: Home,
    },
    {
      title: "Transport Schedule",
      description:
        "If you need expedited shipping or have specific timing requirements, it may come at an additional cost.",
      icon: Zap,
    },
    {
      title: "Fuel Prices",
      description:
        "Fluctuations in fuel prices can impact shipping costs as fuel is a significant expense for carriers.",
      icon: Fuel,
    },
    {
      title: "Additional Services",
      description:
        "If you require additional services like door to door delivery, insurance coverage, or guaranteed delivery dates, these can add to the overall cost.",
      icon: Star,
    },
    {
      title: "Insurance Coverage",
      description:
        "The level of insurance coverage you choose for your vehicle during transport can affect the cost.",
      icon: Shield,
    },
    {
      title: "Carrier Reputation",
      description:
        "The reputation and experience of the auto transport company can also influence pricing.",
      icon: Award,
    },
    {
      title: "Seasonal Weather Conditions",
      description:
        "Extreme weather conditions or seasonal challenges, such as snowstorms or hurricanes, can impact transport routes and schedules, potentially affecting costs.",
      icon: CloudSnow,
    },
  ];

  const personalItemsPoints = [
    "Check with the car shipping company you plan to use and inquire about their policies regarding personal belongings.",
    "If they allow personal items, confirm any weight limits and insurance coverage details.",
    "Pack personal items securely to minimize the risk of damage or shifting during transit.",
    "Remove any items that are prohibited, hazardous, or illegal to transport.",
    "Keep in mind that it's generally advisable to transport valuable or irreplaceable personal items separately rather than relying on the vehicle during car shipping.",
  ];

  const faqData = [
    {
      icon: <MapPin className="w-5 h-5" />,
      question:
        "Do you offer car shipping services for families relocating across the country?",
      answer:
        "Yes! We specialize in helping families ship their vehicles during a move—whether you're relocating for work, military, school, or lifestyle changes. We offer flexible pickup and delivery options to fit your moving schedule.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question:
        "How far in advance should we book car shipping for a family relocation?",
      answer:
        "We recommend booking 1–2 weeks in advance for the best rates and carrier availability. However, we also offer expedited shipping if you're on a tight timeline.",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      question: "Can we ship more than one car for our family?",
      answer:
        "Absolutely. We can transport multiple vehicles at once—perfect for families with two or more cars. Multi-car shipping often comes with discounted rates.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Will our cars be safe during transport?",
      answer:
        "Yes. All vehicles are fully insured while in transit. We also provide detailed inspection reports before pickup and at delivery, and use trusted, experienced carriers.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "Do you provide door-to-door car shipping for moving families?",
      answer:
        "Yes. We offer door-to-door service to residential areas whenever safely accessible. This means more convenience for your family during an already busy move.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      question: "How do we schedule car shipping with Rapid Auto Shipping?",
      answer:
        "It's easy! Just fill out our online quote form or call us. Our relocation specialists will help you choose the best options, arrange scheduling, and keep you updated throughout the process.",
    },
  ];
  return (
    <>
      <Head>
        <title>
          Relocating Families Car Shipping Services | +1-833-233-4447
        </title>
        <meta
          name="description"
          content="Yes, you can ship personal items in your car while using a car shipping service for relocating families, but it depends on the specific policies of the car shipping company."
        />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/relocating-families-car-shipping-services"
        />
        <meta
          property="og:title"
          content="Relocating Families Car Shipping Services | +1-833-233-4447"
        />
        <meta
          property="og:description"
          content="Yes, you can ship personal items in your car while using a car shipping service for relocating families, but it depends on the specific policies of the car shipping company."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/relocating-families-car-shipping-services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753688000/relocating-families-car-shipping-services_nnl1kp.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Relocating Families Car Shipping Services  ",
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
                "Yes, you can ship personal items in your car while using a car shipping service for relocating families, but it depends on the specific policies of the car shipping company.",
              url: "https://rapidautoshipping.com/relocating-families-car-shipping-services",
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
                  name: "Relocating Families Car Shipping Services",
                  item: "https://rapidautoshipping.com/relocating-families-car-shipping-services",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753688000/relocating-families-car-shipping-services_nnl1kp.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753688000/relocating-families-car-shipping-services_nnl1kp.webp"
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
                    Relocating Families{" "}
                    <span className="text-[rgb(255,87,34)]">
                      Car Shipping Services
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    When it comes to relocating families, car shipping services
                    play a crucial role in simplifying the moving process and
                    also it makes it easier for families to just move or
                    relocate with their family and leave all the tensions of
                    moving cars on Rapid auto shipping. These services are
                    designed to transport your vehicle safely and efficiently,
                    saving you the time and effort of driving it long distances.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto">
                <TransportForm />
              </div>
            </div>
          </section>

          <div className=" bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Can a Family Ship their Furniture With Their Cars too?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Yes, it's possible for a family to transport their
                      furniture and other belongings in their cars when
                      relocating. This is especially common for local or
                      short-distance moves.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Here's how it can be done: <br /> <br />
                      <b>Pack Efficiently-</b> Make sure to pack your furniture
                      and belongings securely to prevent damage during
                      transport. Use moving blankets, bubble wrap, and other
                      protective materials as needed. <br /> <br />
                      <b>tilize Available Space-</b> Maximize the space in your
                      cars by strategically loading items. Place smaller and
                      more fragile items inside the car's cabin, while larger
                      items like furniture can go in the trunk or securely tied
                      to the roof rack, if applicable. <br /> <br />
                      <b>Prioritize Safety-</b> Ensure that the load is properly
                      secured to prevent shifting during transit. Use straps or
                      ropes to secure items in place and follow all safety
                      guidelines for transporting cargo. <br /> <br />
                      <b>Check Vehicle Capacity-</b> Be mindful of your car's
                      weight capacity and towing capacity if using a trailer.
                      Overloading your vehicle can be dangerous and cause
                      damage. <br /> <br />
                      Keep in mind that while transporting furniture in your own
                      vehicles can save money, it may not be practical for all
                      situations, especially for long-distance moves or when you
                      have a significant amount of furniture. In such cases,
                      hiring professional movers or renting a dedicated moving
                      truck may be a more efficient and convenient choice.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753687996/relocating-families-car-shipping-services_3_hlec37.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative z-10 mt-10 hidden md:block">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753687995/relocating-families-car-shipping-services_2_ce8ll3.webp"
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
              className={`relative overflow-hidden bg-gradient-to-r from-[#003366] via-[#003366] to-[#ff5722] transition-all duration-1000 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative px-4 py-16 sm:py-24 lg:py-32">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                    <Car className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">
                      Professional Car Relocation
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Car Relocation Services
                    <span className="block bg-gradient-to-r from-[#ff5722] to-orange-300 bg-clip-text text-transparent">
                      Complete Guide
                    </span>
                  </h2>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Discover various car relocation services designed to
                    transport vehicles safely and efficiently for individuals,
                    families, businesses, and car dealerships.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </div>

            {/* Services Section */}
            <div
              id="services"
              className={`py-16 sm:py-20 transition-all duration-1000 delay-200 ${
                isVisible.services
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Various Types of Car Relocating Services
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Various car relocation services are available to cater to
                    different needs and circumstances when it comes to moving
                    vehicles. These services are designed to transport vehicles
                    safely and efficiently.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={index}
                        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                      >
                        <div
                          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                        ></div>

                        <div className="p-6 sm:p-8">
                          <div
                            className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#ff5722] transition-colors">
                            {service.title}
                          </h3>

                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/5 to-[#ff5722]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Cost Factors Section */}
            <div
              id="cost-factors"
              className={`py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-[#003366]/5 transition-all duration-1000 delay-400 ${
                isVisible["cost-factors"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#ff5722]/10 rounded-full px-4 py-2 mb-6">
                    <DollarSign className="w-5 h-5 text-[#ff5722]" />
                    <span className="text-[#ff5722] font-medium">
                      Pricing Information
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    What Factors Affect the Cost of Shipping a Car?
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    The cost to ship a car can vary widely based on several
                    factors. Here are some of the key factors that influence the
                    cost of auto transport:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {costFactors.map((factor, index) => {
                    const IconComponent = factor.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#ff5722]/30 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#003366] to-[#ff5722] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#ff5722] transition-colors">
                              {factor.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {factor.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Personal Items Section */}
            <div
              id="personal-items"
              className={`py-16 sm:py-20 transition-all duration-1000 delay-600 ${
                isVisible["personal-items"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#003366]/10 rounded-full px-4 py-2 mb-6">
                    <Package className="w-5 h-5 text-[#003366]" />
                    <span className="text-[#003366] font-medium">
                      Personal Items Policy
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Whether I Can Ship My Personal Items In My Car or Not?
                  </h2>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#003366] to-[#ff5722] p-6 sm:p-8">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          Yes, You Can!
                        </h3>
                        <p className="text-white/90">
                          You can ship personal items in your car while using a
                          car shipping service for relocating families, but it
                          depends on the specific policies of the car shipping
                          company you choose so just choose Rapid Auto shipping.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="space-y-8">
                      {/* Important Points */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                          <AlertTriangle className="w-6 h-6 text-[#ff5722]" />
                          Important Points to Consider
                        </h4>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-6">
                            <div className="bg-[#003366]/10 rounded-lg p-6 border-l-4 border-[#003366]">
                              <h5 className="font-semibold text-gray-900 mb-2">
                                Company Policies
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Car shipping companies typically have policies
                                regarding the transportation of personal items
                                inside vehicles. Some companies may allow a
                                small amount of personal belongings to be stored
                                in the vehicle, while others may prohibit it
                                entirely.
                              </p>
                            </div>

                            <div className="bg-[#ff5722]/10 rounded-lg p-6 border-l-4 border-[#ff5722]">
                              <h5 className="font-semibold text-gray-900 mb-2">
                                Weight Limits
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Even if a company allows personal items, there
                                are often weight limits for the items that can
                                be stored inside the vehicle. Exceeding these
                                limits may result in additional fees or
                                violations of the company's policies.
                              </p>
                            </div>

                            <div className="bg-[#003366]/10 rounded-lg p-6 border-l-4 border-[#003366]">
                              <h5 className="font-semibold text-gray-900 mb-2">
                                Insurance Coverage
                              </h5>
                              <p className="text-gray-700 text-sm">
                                It's essential to check if the car shipping
                                company's insurance covers the personal items
                                stored inside the vehicle during transportation.
                                In many cases, personal items may not be
                                covered, so you may need separate insurance for
                                them.
                              </p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div className="bg-[#ff5722]/10 rounded-lg p-6 border-l-4 border-[#ff5722]">
                              <h5 className="font-semibold text-gray-900 mb-2">
                                Liability
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Car shipping companies typically disclaim
                                liability for personal items stored in the
                                vehicle. This means that if your personal
                                belongings are damaged or stolen during
                                transport, the car shipping company may not be
                                responsible for replacing or reimbursing you for
                                those items.
                              </p>
                            </div>

                            <div className="bg-[#003366]/10 rounded-lg p-6 border-l-4 border-[#003366]">
                              <h5 className="font-semibold text-gray-900 mb-2">
                                Security and Safety
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Car shipping companies prioritize the safety and
                                security of the vehicles they transport. Storing
                                personal items inside the vehicle could
                                potentially lead to damage if they shift during
                                transport or if there are extreme temperature
                                fluctuations.
                              </p>
                            </div>

                            <div className="bg-[#ff5722]/10 rounded-lg p-6 border-l-4 border-[#ff5722]">
                              <h5 className="font-semibold text-gray-900 mb-2">
                                Compliance with Regulations
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Make sure you comply with any regulations and
                                restrictions related to the transportation of
                                personal items within the vehicle. Some states
                                and countries may have specific rules in this
                                regard.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#ff5722]/10 rounded-lg p-6 border-l-4 border-[#ff5722]">
                        <h5 className="font-semibold text-gray-900 mb-2">
                          Limited Space
                        </h5>
                        <p className="text-gray-700">
                          Keep in mind that the primary purpose of car transport
                          is to move vehicles safely. While some companies may
                          allow a small amount of personal items, there's
                          limited space available within the vehicle.
                        </p>
                      </div>

                      {/* Action Items */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                          <CheckCircle className="w-6 h-6 text-[#003366]" />
                          To Determine Whether You Can Ship Personal Items in
                          Your Car, It's Crucial to:
                        </h4>

                        <div className="space-y-4">
                          {personalItemsPoints.map((point, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <div className="flex-shrink-0 w-6 h-6 bg-[#003366] rounded-full flex items-center justify-center mt-0.5">
                                <span className="text-white text-sm font-bold">
                                  {index + 1}
                                </span>
                              </div>
                              <p className="text-gray-700 leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#003366] to-[#ff5722] rounded-xl p-6 text-white">
                        <p className="text-lg leading-relaxed">
                          <strong>
                            Always communicate openly with the car shipping
                            company and adhere to their guidelines to ensure a
                            smooth and hassle-free relocation experience.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
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

export default Hello;
