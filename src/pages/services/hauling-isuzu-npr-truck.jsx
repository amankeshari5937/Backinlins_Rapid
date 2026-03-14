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
  Star,
  Wrench,
  FileText,
  CheckCircle,
  MapPin,
  Phone,
  ArrowRight,
  Calendar,
  Camera,
  ClipboardList,
  Sparkles,
  Zap,
  Settings,
  Target,
  Award,
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

  const services = useMemo(
    () => [
      {
        icon: <Truck className="w-10 h-10" />,
        title: "Flatbed Transport",
        description:
          "Flatbed trailers are commonly used for shipping larger or heavier trucks. With flatbed transport, an ISUZU NPR flatbed will be loaded onto the trailer and secured. This option is suitable for oversized trucks or having your truck on an open trailer without being stacked with other vehicles.",
        features: [
          "Perfect for oversized trucks",
          "Open trailer transport",
          "Secure loading system",
          "Cost-effective solution",
        ],
        gradient: "from-blue-50 to-blue-100",
      },
      {
        icon: <Wrench className="w-10 h-10" />,
        title: "Tow-Away Service",
        description:
          "If your ISUZU NPR truck is not operational or cannot be driven, you may opt for a tow-away service. A specialized towing vehicle would transport your truck to the desired location. This service is typically used for non-running or damaged vehicles.",
        features: [
          "Non-operational vehicles",
          "Specialized towing equipment",
          "Safe for damaged trucks",
          "Professional handling",
        ],
        gradient: "from-orange-50 to-orange-100",
      },
      {
        icon: <MapPin className="w-10 h-10" />,
        title: "Door to Door Delivery",
        description:
          "Door to door delivery is the most convenient service, providing direct pickup and drop-off service at your doorsteps. In case our trailer can't reach your doorsteps, then your ISUZU NPR Truck will be delivered to a new location as close as possible to your doorsteps.",
        features: [
          "Maximum convenience",
          "Direct pickup & delivery",
          "Closest possible location",
          "Premium service option",
        ],
        gradient: "from-green-50 to-green-100",
      },
    ],
    []
  );

  const shippingSteps = useMemo(
    () => [
      {
        icon: <FileText className="w-7 h-7" />,
        title: "Obtain Your ISUZU NPR Truck Transportation Quote",
        description:
          "Fill out our online form or call our transportation specialist at (833) 233-4447 and provide the necessary information. Our transportation quote is free and fast.",
        step: "01",
      },
      {
        icon: <Calendar className="w-7 h-7" />,
        title: "Schedule the Shipment",
        description:
          "Once you get the shipping quote, you can book your shipment in advance. Please provide them with the necessary details, such as the truck's make and model, dimensions, weight, and any modifications that might affect the shipping process. Choose your ISUZU NPR dump truck's most convenient pick-up and delivery locations. Select the desired shipping method and services.",
        step: "02",
      },
      {
        icon: <Camera className="w-7 h-7" />,
        title: "Prepare the Vehicle",
        description:
          "Clean the truck thoroughly before shipping and remove any personal belongings or loose items. Document the condition of the vehicle with photographs or videos to provide evidence of any damage during transit.",
        step: "03",
      },
      {
        icon: <ClipboardList className="w-7 h-7" />,
        title: "Complete Required Documentation",
        description:
          "Fill out the necessary paperwork, including a Bill of Lading and any other forms required by the shipping company or state authorities. Ensure you have copies of all documents for your records.",
        step: "04",
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      {
        icon: <Settings className="w-10 h-10" />,
        title: "Versatility",
        description:
          "ISUZU NPR trucks are known for their versatility and can be used for various purposes. They are commonly used for delivery services, moving companies, construction landscaping, etc. Shipping the truck allows you to access its versatile capabilities wherever needed.",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        icon: <DollarSign className="w-10 h-10" />,
        title: "Cost Savings",
        description:
          "Depending on your location and the availability of ISUZU NPR trucks in your area, shipping the truck can be a cost-effective option. It eliminates the need to purchase a new truck locally, which could be more expensive or may not meet your specific requirements.",
        gradient: "from-green-500 to-green-600",
      },
      {
        icon: <Target className="w-10 h-10" />,
        title: "Specific Requirements",
        description:
          "If you have particular requirements for the truck, such as customized features or configurations, shipping an ISUZU NPR truck from a different location might be the best option. This way, you can ensure the truck meets your specifications without compromising essential features.",
        gradient: "from-purple-500 to-purple-600",
      },
      {
        icon: <Clock className="w-10 h-10" />,
        title: "Time Savings",
        description:
          "Shipping an ISUZU NPR truck helps save you time, especially if the truck is not readily available in your area. Instead of searching for a suitable truck locally, you can have it delivered to your desired location, allowing you to use it for your business or personal needs without delay.",
        gradient: "from-orange-500 to-orange-600",
      },
      {
        icon: <Award className="w-10 h-10" />,
        title: "Brand Reliability",
        description:
          "ISUZU NPR trucks are known for their durability, reliability, and performance. By shipping an ISUZU NPR truck, you can benefit from the brand's reputation and rely on its quality construction and components, ensuring you have a dependable vehicle for your transportation needs.",
        gradient: "from-red-500 to-red-600",
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <Truck className="w-5 h-5" />,
        question: "Do you specialize in hauling ISUZU NPR trucks?",
        answer:
          "Yes, Rapid Auto Shipping has extensive experience transporting ISUZU NPR trucks, whether it's a single unit or a fleet. We understand the specific requirements and dimensions of these medium-duty commercial vehicles.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "What's the cost to haul an ISUZU NPR truck?",
        answer:
          "Costs vary based on the truck's size, transport distance, and whether you're using open or enclosed transport. Contact us for a fast, no-obligation quote tailored to your needs.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "Are ISUZU NPR trucks shipped on flatbeds or trailers?",
        answer:
          "We typically use flatbed or lowboy trailers for ISUZU NPR hauling, depending on the truck's configuration and whether it's operational. Our team selects the safest and most efficient method.",
      },
      {
        icon: <MapPin className="w-5 h-5" />,
        question: "Is your ISUZU NPR transport service available nationwide?",
        answer:
          "Yes! We provide nationwide service across the U.S., including remote or industrial areas. Whether you're shipping to a business location or a dealership, we've got you covered.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Can you transport inoperable or damaged ISUZU NPR trucks?",
        answer:
          "Absolutely. We can safely haul non-running or damaged ISUZU NPR trucks using winches or specialized equipment. Just let us know the truck's condition during booking.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "How long does it take to haul an ISUZU NPR truck?",
        answer:
          "Transit time depends on distance and route. Local deliveries can take 1–2 days, while long-distance hauls typically range from 3–7 days. Expedited options are also available.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Is insurance included when hauling my ISUZU NPR truck?",
        answer:
          "Yes, full cargo insurance is included with every shipment. Your truck is protected from pickup to delivery. We'll also provide a detailed inspection report.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "What documents are required to haul an ISUZU NPR truck?",
        answer:
          "Typically, we need the title or proof of ownership, along with a signed Bill of Lading. Our team will guide you through the exact paperwork needed.",
      },
      {
        icon: <Users className="w-5 h-5" />,
        question: "Can I ship multiple ISUZU NPR trucks at once?",
        answer:
          "Yes, we offer fleet and multi-vehicle transport services. Whether you're a dealer, fleet manager, or business owner, we'll arrange a cost-effective and timely solution.",
      },
      {
        icon: <Phone className="w-5 h-5" />,
        question: "How do I get started with ISUZU NPR truck transport?",
        answer:
          "Getting started is easy. Request a quote online or call us directly. Our experienced shipping coordinators will handle everything from pickup to delivery.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Safe and Trusted service to haul your ISUZU NPR Truck.</title>
        <meta
          name="description"
          content="Rapid Auto Shipping is a reputable transportation company. We are experienced in transporting a wide range of automobiles, including ISUZU NPR trucks."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/hauling-isuzu-npr-truck"
        />
        <meta
          property="og:title"
          content="Safe and Trusted service to haul your ISUZU NPR Truck."
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping is a reputable transportation company. We are experienced in transporting a wide range of automobiles, including ISUZU NPR trucks."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/hauling-isuzu-npr-truck"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751107144/487e364d8ba363fa0c45d8da3c275150-2915365679823618805_jki2pk.jpg"
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
                    name: "hauling-isuzu-npr-truck",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/hauling-isuzu-npr-truck",
                    name: "hauling-isuzu-npr-truck",
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
              serviceType: "Isuzu NPR Truck Hauling Services",
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
                "Reliable and insured transportation for Isuzu NPR trucks across the U.S. Rapid Auto Shipping ensures safe hauling with door-to-door delivery and tracking support.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What Isuzu NPR models do you haul?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We haul all variations of Isuzu NPR trucks, including standard cab, crew cab, and NPR-HD models, whether new, used, or non-operational.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How are Isuzu NPR trucks loaded for transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We use winch-equipped trailers, ramps, and proper bracing to load and secure the Isuzu NPR truck safely for both short- and long-distance hauling.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to haul an Isuzu NPR truck?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Depending on the pickup and drop-off locations, hauling may take 5–12 business days. Expedited options are available for urgent delivery.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is insurance included during NPR truck hauling?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, full insurance coverage is included for every NPR truck shipment. You can request additional coverage for high-value units.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How can I request a quote for NPR truck hauling?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "To get a quote, fill out the form on our service page or call our team directly. Quotes are typically provided within a few hours.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/services/hauling-isuzu-npr-truck",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751105376/0019v2HR-e1548082126576-scaled_esriux.jpg"
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
                    Hauling ISUZU{"  "}
                    <span className="text-[#ff5722]">NPR Trucks</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    ISUZU NPR Trucks are widely used for shipping because they
                    accommodate oversized cargo. Their designs are specifically
                    tailored to meet the demands of contemporary driving and
                    transportation. Rapid Auto Shipping is the top company to
                    contact regarding hauling ISUZU trucks. We are a highly
                    professional transportation service company specializing in
                    transporting various vehicles and automobiles. We have
                    extensive experience hauling ISUZU NPR trucks, so it
                    presents no challenges.
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
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        Best Hauling ISUZU NPR Trucks Company
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Two crucial factors will ultimately influence your
                      decision when selecting a transport service company,
                      particularly for Hauling ISUZU NPR Trucks. Two main
                      factors to consider regarding shipping ISUZU NPR Trucks
                      are the trucks' quality and the shipping cost. When
                      selecting a company, your decision will be influenced by
                      two key factors: the quality of service and the price they
                      quote you.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      At Rapid Auto Shipping, we provide highly competitive
                      prices when quoting for transporting ISUZU NPR Trucks. We
                      acknowledge that our clients and customers have a solid
                      aversion to scams and the perception of being overcharged.
                      We are the most preferred choice for ISUZU NPR Trucks
                      shipping. We strive to provide top-notch transport
                      services and ensure that you continue to rely on us for
                      all your transportation needs. We offer top-notch services
                      for ISUZU NPR truck transportation.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751106201/IMG_1089-scaled_rddiwo.jpg"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={500}
                        loading="lazy"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #004080 100%)",
              }}
            >
              <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white opacity-5 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white opacity-5 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white opacity-5 animate-pulse delay-500"></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-white bg-opacity-20">
                      <Truck className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Type of Services for Shipping
                    <br />
                    <span style={{ color: "#ff5722" }} className="relative">
                      ISUZU NPR Trucks
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-current rounded-full opacity-60"></div>
                    </span>
                  </h2>
                  <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                    For shipping ISUZU NPR trucks, Rapid Auto Shipping, and the
                    various transportation services. The specific type of
                    service you would need depends on your requirements, budget,
                    and the options available in your area. Here are a few
                    common types of services for shipping trucks:
                  </p>
                </div>
              </div>
            </div>

            {/* Services Section - All in One Row */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-slate-100"
                    >
                      {/* Icon and Title */}
                      <div className="text-center mb-6">
                        <div className="flex justify-center mb-4">
                          <div
                            className="p-4 rounded-2xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {service.icon}
                          </div>
                        </div>
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: "#003366" }}
                        >
                          {service.title}
                        </h3>
                        <div
                          className="w-16 h-1 mx-auto"
                          style={{ backgroundColor: "#ff5722" }}
                        ></div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed mb-6 text-center">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle
                              className="w-5 h-5 flex-shrink-0"
                              style={{ color: "#ff5722" }}
                            />
                            <span className="text-slate-600 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Section */}

            {/* Main Content Section */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left Content */}

                  <div>
                    <div className="mb-8">
                      <h2 className=" text-4xl  md:text-4xl font-bold text-[#003366] leading-tight">
                        What is the Shipping Cost for an
                        <br />
                        <span style={{ color: "#ff5722" }} className="relative">
                          ISUZU NPR Truck?
                        </span>
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        The cost of shipping an ISUZU NPR truck depends on
                        various factors, such as the distance, shipping method,
                        destination, dimensions, weight, and any additional
                        services you may require (such as insurance or expedited
                        shipping). The best way to get the cost of sipping ISUZU
                        NPR Truck is to get our free quote tailored to your
                        specific needs.
                      </p>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-orange-100 rounded-3xl transform rotate-3 opacity-50"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751107144/487e364d8ba363fa0c45d8da3c275150-2915365679823618805_jki2pk.jpg"
                        alt="ISUZU NPR Truck Transportation Cost Calculator"
                        width={800}
                        height={384}
                        loading="lazy"
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="text-2xl font-bold text-white mb-2">
                          Transparent Pricing
                        </div>
                        <p className="text-slate-200">
                          Get accurate costs for your ISUZU NPR truck shipping
                        </p>
                      </div>
                    </div>

                    {/* Floating Cost Badge */}
                    <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                      <div className="text-center">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: "#ff5722" }}
                        >
                          Free
                        </div>
                        <div
                          className="text-sm font-semibold"
                          style={{ color: "#003366" }}
                        >
                          Quote
                        </div>
                      </div>
                    </div>

                    {/* Floating Features */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                      <div className="text-center">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: "#003366" }}
                        >
                          24/7
                        </div>
                        <div
                          className="text-sm font-semibold"
                          style={{ color: "#ff5722" }}
                        >
                          Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Shipping Timeline Component */}
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
              {/* Hero Section */}
              <div
                className="relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #003366 0%, #001122 50%, #003366 100%)",
                }}
              >
                {/* Animated Background Elements - Hidden on mobile for performance */}
                <div className="absolute inset-0 hidden sm:block">
                  <div
                    className="absolute top-5 left-5 sm:top-10 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 rounded-full opacity-10 animate-pulse"
                    style={{
                      background:
                        "radial-gradient(circle, #ff5722 0%, transparent 70%)",
                    }}
                  ></div>
                  <div
                    className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-36 h-36 sm:w-72 sm:h-72 rounded-full opacity-10 animate-pulse delay-1000"
                    style={{
                      background:
                        "radial-gradient(circle, #ff5722 0%, transparent 70%)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 rounded-full opacity-5 animate-pulse delay-500"
                    style={{
                      background:
                        "radial-gradient(circle, #ff5722 0%, transparent 70%)",
                    }}
                  ></div>
                </div>

                {/* Floating Icons - Reduced on mobile */}
                <div className="absolute top-4 right-4 sm:top-20 sm:right-20 animate-bounce delay-300">
                  <div
                    className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "#ff5722" }}
                  >
                    <Truck className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-16 left-4 sm:bottom-32 sm:left-16 animate-bounce delay-700">
                  <div
                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#ff5722" }}
                  >
                    <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
                  <div className="text-center">
                    {/* Main Icon */}
                    <div className="flex justify-center mb-6 sm:mb-8">
                      <div className="relative">
                        <div
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{ backgroundColor: "#ff5722", opacity: 0.2 }}
                        ></div>
                        <div
                          className="relative p-4 sm:p-8 rounded-full"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Clock className="w-12 h-12 sm:w-20 sm:h-20 text-white animate-pulse" />
                        </div>
                        <div
                          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center animate-bounce"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="relative mb-6 sm:mb-8">
                      <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight px-2">
                        How Long Does it Take to Ship an
                        <br />
                        <span className="relative inline-block">
                          <span style={{ color: "#ff5722" }}>
                            ISUZU NPR Truck?
                          </span>
                          <div
                            className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 h-1 sm:h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: "#ff5722", opacity: 0.6 }}
                          ></div>
                        </span>
                      </h2>
                    </div>

                    {/* Description */}
                    <div className="relative max-w-5xl mx-auto px-2">
                      <div
                        className="absolute inset-0 rounded-2xl sm:rounded-3xl blur-lg"
                        style={{ backgroundColor: "#ff5722", opacity: 0.1 }}
                      ></div>
                      <div
                        className="relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-white/20"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      >
                        <p className="text-sm sm:text-xl md:text-2xl text-white leading-relaxed">
                          The shipping time for an ISUZU NPR truck can vary
                          depending on several factors, including the origin and
                          destination locations, the shipping service, etc.
                          Generally, shipments can take 3 to 5 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Ship Section */}
              <div className="py-10 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Header */}
                  <div className="text-center mb-8 sm:mb-16">
                    <div className="relative inline-block mb-6 sm:mb-8">
                      <h3
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black leading-tight px-2"
                        style={{ color: "#003366" }}
                      >
                        How to Ship an ISUZU NPR Dump Truck?
                      </h3>
                      <div
                        className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-32 h-1 sm:h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: "#ff5722" }}
                      ></div>
                    </div>
                    <div className="relative max-w-4xl mx-auto px-2">
                      <div
                        className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-dashed"
                        style={{
                          borderColor: "#ff5722",
                          backgroundColor: "rgba(255, 87, 34, 0.05)",
                        }}
                      >
                        <p
                          className="text-sm sm:text-xl leading-relaxed"
                          style={{ color: "#003366" }}
                        >
                          Ship an ISUZU NPR dump truck within the USA. The
                          primary stages that will help you through the
                          procedure are as follows:
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div className="space-y-6 sm:space-y-12">
                    {shippingSteps.map((step, index) => (
                      <div key={index} className="relative">
                        {/* Connection Line - Hidden on mobile */}
                        {index < shippingSteps.length - 1 && (
                          <div
                            className="absolute left-8 sm:left-16 top-20 sm:top-32 w-0.5 sm:w-1 h-12 sm:h-24 z-0 hidden sm:block"
                            style={{
                              background:
                                "linear-gradient(to bottom, #ff5722, #003366)",
                            }}
                          ></div>
                        )}

                        <div
                          className={`flex items-start space-x-3 sm:space-x-8 ${
                            index % 2 === 1
                              ? "sm:flex-row-reverse sm:space-x-reverse"
                              : ""
                          }`}
                        >
                          {/* Step Circle */}
                          <div className="relative flex-shrink-0 z-10">
                            <div
                              className="absolute inset-0 rounded-full animate-pulse"
                              style={{
                                backgroundColor: "#ff5722",
                                opacity: 0.2,
                              }}
                            ></div>
                            <div
                              className="relative w-16 h-16 sm:w-32 sm:h-32 rounded-full flex items-center justify-center border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl"
                              style={{ backgroundColor: "#ff5722" }}
                            >
                              <div className="text-white text-center">
                                {step.icon}
                                <div className="text-xs sm:text-xs font-bold mt-0.5 sm:mt-1">
                                  STEP {step.step}
                                </div>
                              </div>
                            </div>
                            <div
                              className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-6 h-6 sm:w-12 sm:h-12 rounded-full flex items-center justify-center animate-bounce"
                              style={{ backgroundColor: "#003366" }}
                            >
                              <Star className="w-3 h-3 sm:w-6 sm:h-6 text-white" />
                            </div>
                          </div>

                          {/* Content Card */}
                          <div className="flex-1 min-w-0">
                            <div className="relative group">
                              <div
                                className="absolute inset-0 rounded-2xl sm:rounded-3xl blur-lg transition-all duration-500 group-hover:blur-xl"
                                style={{
                                  backgroundColor: "#ff5722",
                                  opacity: 0.1,
                                }}
                              ></div>
                              <div className="relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-slate-200 bg-white shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
                                <h4
                                  className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight"
                                  style={{ color: "#003366" }}
                                >
                                  {step.title}
                                </h4>
                                <div
                                  className="w-12 sm:w-20 h-0.5 sm:h-1 rounded-full mb-3 sm:mb-6"
                                  style={{ backgroundColor: "#ff5722" }}
                                ></div>
                                <p className="text-sm sm:text-lg text-slate-700 leading-relaxed">
                                  {step.description}
                                </p>

                                {index === 0 && (
                                  <div className="mt-4 sm:mt-6">
                                    <div
                                      className="p-3 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 hover:scale-105"
                                      style={{
                                        borderColor: "#ff5722",
                                        backgroundColor:
                                          "rgba(255, 87, 34, 0.05)",
                                      }}
                                    >
                                      <div className="flex items-center space-x-2 sm:space-x-4">
                                        <div
                                          className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center animate-pulse"
                                          style={{ backgroundColor: "#ff5722" }}
                                        >
                                          <Phone className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                                        </div>
                                        <Link
                                          href="tel:+18332334447"
                                          className="flex-1"
                                        >
                                          <div>
                                            <div
                                              className="text-sm sm:text-lg font-bold"
                                              style={{ color: "#003366" }}
                                            >
                                              Call Now for Free Quote
                                            </div>
                                            <div
                                              className="text-lg sm:text-3xl font-black"
                                              style={{ color: "#ff5722" }}
                                            >
                                              (833) 233-4447
                                            </div>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Component */}
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
              {/* Hero Section */}
              <div
                className="relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #003366 0%, #001a33 50%, #003366 100%)",
                }}
              >
                {/* Animated Background Elements - Simplified for mobile */}
                <div className="absolute inset-0 hidden sm:block">
                  <div
                    className="absolute top-8 left-8 sm:top-16 sm:left-16 w-40 h-40 sm:w-80 sm:h-80 rounded-full opacity-10 animate-pulse"
                    style={{
                      background:
                        "radial-gradient(circle, #ff5722 0%, transparent 70%)",
                    }}
                  ></div>
                  <div
                    className="absolute bottom-8 right-8 sm:bottom-16 sm:right-16 w-48 h-48 sm:w-96 sm:h-96 rounded-full opacity-10 animate-pulse delay-1000"
                    style={{
                      background:
                        "radial-gradient(circle, #ff5722 0%, transparent 70%)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/3 right-1/3 w-32 h-32 sm:w-64 sm:h-64 rounded-full opacity-5 animate-pulse delay-500"
                    style={{
                      background:
                        "radial-gradient(circle, #ff5722 0%, transparent 70%)",
                    }}
                  ></div>
                </div>

                {/* Floating Icons - Smaller on mobile */}
                <div className="absolute top-4 right-4 sm:top-20 sm:right-20 animate-bounce delay-300">
                  <div
                    className="w-12 h-12 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg sm:shadow-2xl"
                    style={{ backgroundColor: "#ff5722" }}
                  >
                    <Truck className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-16 left-4 sm:bottom-32 sm:left-20 animate-bounce delay-700">
                  <div
                    className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-xl"
                    style={{ backgroundColor: "#ff5722" }}
                  >
                    <Star className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-4 sm:left-16 animate-bounce delay-1000">
                  <div
                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg"
                    style={{ backgroundColor: "#ff5722" }}
                  >
                    <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
                  <div className="text-center">
                    {/* Main Icon */}
                    <div className="flex justify-center mb-6 sm:mb-8">
                      <div className="relative">
                        <div
                          className="absolute inset-0 rounded-2xl sm:rounded-3xl animate-ping"
                          style={{ backgroundColor: "#ff5722", opacity: 0.3 }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-2xl sm:rounded-3xl animate-pulse"
                          style={{ backgroundColor: "#ff5722", opacity: 0.1 }}
                        ></div>
                        <div
                          className="relative p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Truck className="w-16 h-16 sm:w-24 sm:h-24 text-white" />
                        </div>
                        <div
                          className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center animate-spin"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div
                          className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center animate-bounce"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="relative mb-6 sm:mb-8">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
                        What is the Benefit of Shipping an
                        <br />
                        <span className="relative inline-block">
                          <span style={{ color: "#ff5722" }}>
                            ISUZU Hauling Truck?
                          </span>
                          <div
                            className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 h-1 sm:h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: "#ff5722", opacity: 0.8 }}
                          ></div>
                        </span>
                      </h2>
                    </div>

                    {/* Description */}
                    <div className="relative max-w-2xl mx-auto px-2">
                      <div
                        className="absolute inset-0 rounded-2xl sm:rounded-3xl blur-lg"
                        style={{ backgroundColor: "#ff5722", opacity: 0.15 }}
                      ></div>
                      <div
                        className="relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-white/30"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      >
                        <p className="text-sm sm:text-xl md:text-2xl text-white leading-relaxed">
                          Shipping an ISUZU NPR truck can provide several
                          benefits:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="py-10 sm:py-20 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="space-y-8 sm:space-y-16">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="relative">
                        <div
                          className={`flex flex-col sm:flex-row items-center ${
                            index % 2 === 1 ? "sm:flex-row-reverse" : ""
                          } gap-6 sm:gap-16`}
                        >
                          {/* Icon Side */}
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <div
                                className="absolute inset-0 rounded-full blur-lg sm:blur-xl animate-pulse"
                                style={{
                                  backgroundColor: "#ff5722",
                                  opacity: 0.2,
                                }}
                              ></div>
                              <div
                                className="relative w-24 h-24 sm:w-40 sm:h-40 rounded-full flex items-center justify-center shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white"
                                style={{ backgroundColor: "#ff5722" }}
                              >
                                <div className="text-white">{benefit.icon}</div>
                              </div>
                              <div
                                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-16 sm:h-16 rounded-full flex items-center justify-center animate-bounce shadow-lg sm:shadow-xl"
                                style={{ backgroundColor: "#003366" }}
                              >
                                <Star className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
                              </div>
                            </div>
                          </div>

                          {/* Content Side */}
                          <div className="flex-1 w-full">
                            <div className="relative group">
                              <div
                                className="absolute inset-0 rounded-2xl sm:rounded-3xl blur-lg transition-all duration-500 group-hover:blur-xl"
                                style={{
                                  backgroundColor: "#ff5722",
                                  opacity: 0.1,
                                }}
                              ></div>
                              <div
                                className="relative p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-3 border-l-4 sm:border-l-8"
                                style={{ borderColor: "#ff5722" }}
                              >
                                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                  <div
                                    className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg text-white mx-auto sm:mx-0"
                                    style={{ backgroundColor: "#003366" }}
                                  >
                                    {benefit.icon}
                                  </div>
                                  <div className="flex-1 text-center sm:text-left">
                                    <h3
                                      className="text-xl sm:text-2xl lg:text-2xl font-black mb-3 sm:mb-6 leading-tight"
                                      style={{ color: "#003366" }}
                                    >
                                      {benefit.title}
                                    </h3>
                                    <div
                                      className="w-16 sm:w-24 h-1 sm:h-2 rounded-full mb-4 sm:mb-6 mx-auto sm:mx-0"
                                      style={{ backgroundColor: "#ff5722" }}
                                    ></div>
                                    <p className="text-sm sm:text-lg text-slate-700 leading-relaxed">
                                      {benefit.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Important Note Section */}
              <div
                className="py-8 sm:py-16"
                style={{ backgroundColor: "#003366" }}
              >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-10"
                      style={{
                        background:
                          "repeating-linear-gradient(45deg, #ff5722 0px, #ff5722 2px, transparent 2px, transparent 20px)",
                      }}
                    ></div>
                    <div
                      className="relative p-6 sm:p-10 rounded-2xl sm:rounded-3xl border-2 border-white/20"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    >
                      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <div
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 animate-pulse mx-auto sm:mx-0"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div className="text-center sm:text-left">
                          <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                            Important Considerations
                          </h4>
                          <p className="text-sm sm:text-lg text-slate-200 leading-relaxed">
                            It's essential to consider the cost and logistics
                            involved in shipping a truck, including
                            transportation fees, insurance, and any
                            import/export regulations that may apply.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           
           
           

              {/* CTA Section */}
              <div
                className="py-8 sm:py-10 relative overflow-hidden mb-10 sm:mb-20"
                style={{ backgroundColor: "#003366" }}
              >
                <div className="absolute inset-0 hidden sm:block">
                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-5"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, #ff5722 0%, transparent 50%), radial-gradient(circle at 70% 70%, #ff5722 0%, transparent 50%)",
                    }}
                  ></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black text-white mb-4 sm:mb-8 leading-tight px-2">
                    Experience All These Benefits Today!
                  </h2>
                  <div
                    className="w-20 sm:w-40 h-1 sm:h-2 mx-auto rounded-full mb-6 sm:mb-8 animate-pulse"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-sm sm:text-xl md:text-2xl text-slate-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
                    Ship your ISUZU NPR truck and unlock versatility, cost
                    savings, and reliability for your business needs.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center px-2">
                    <Link href="https://rapidautoshipping.com/calculator">
                      <button
                        className="group relative overflow-hidden w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 rounded-full text-white font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-xl sm:hover:shadow-2xl"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <div
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background:
                              "linear-gradient(45deg, #ff5722, #ff7722, #ff5722)",
                          }}
                        ></div>
                        <div className="relative flex items-center justify-center">
                          <Truck className="w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-3" />
                          Get Shipping Quote
                          <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </button>
                    </Link>
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