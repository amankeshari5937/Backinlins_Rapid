"use client";

import React, { useState, useMemo, useCallback } from "react";
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
  DollarSign,
  Shield,
  Clock,
  Users,
  Star,
  Wrench,
  FileText,
  CheckCircle,
  Phone,
  Award,
  Search,
  Cloud,
  Lock,
  Thermometer,
  Settings,
} from "lucide-react";
import { MapPin, Globe } from "lucide-react";
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

  const features = useMemo(
    () => [
      {
        title: "Enclosed Auto Transport for Maximum Protection:",
        description:
          "Our hard-sided, fully enclosed trailers protect vehicles from severe weather, road debris, and theft.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "White Glove Handling & Specialized Equipment:",
        description:
          "Each vehicle is restrained with soft-tie systems, foam padding, hydraulic lift gates, and air-ride suspension, eliminating any transit-related damage.",
        icon: <Star className="w-6 h-6" />,
      },
      {
        title: "Real-Time GPS Monitoring & Ongoing Tracking:",
        description:
          "Clients have access to real-time tracking, which gives them peace of mind and total visibility during high-end vehicle shipping.",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        title: "Comprehensive Insurance Coverage:",
        description:
          "All shipments are supported by up to $1 million cargo insurance, with added coverage possible by request.",
        icon: <DollarSign className="w-6 h-6" />,
      },
      {
        title: "Nationwide Transport Solutions:",
        description:
          "Our extensive network of logistics allows effortless shipping across the United States.",
        icon: <Globe className="w-6 h-6" />,
      },
      {
        title: "Expedited & Door-to-Door Luxury Car Transport:",
        description:
          "Time-critical shipments are given top priority, with fully tailored pickup and delivery schedules to suit the client's requirements.",
        icon: <Clock className="w-6 h-6" />,
      },
      {
        title: "Specialized Knowledge of Classic & Contemporary Cars:",
        description:
          "Whether you require classic car transport for an antique collector's car or safe car shipping for a hypercar, our professional services guarantee the most efficient, secure car transport service.",
        icon: <Wrench className="w-6 h-6" />,
      },
    ],
    []
  );

  const processSteps = useMemo(
    () => [
      {
        number: "1",
        title: "Comprehensive Pre-Transport Inspection",
        description:
          "Prior to being loaded, a detailed multi-point examination records the condition of the car to ensure complete transparency and accountability during transit.",
        icon: <Search className="w-6 h-6" />,
      },
      {
        number: "2",
        title: "Precision Loading & Secure Immobilization",
        description:
          "Through the use of hydraulic lift gates, even exotic vehicles with low clearance are loaded safely. Soft straps, air-ride suspension, and cradling customized to the vehicle inhibit movement and ensure the vehicle's structural integrity.",
        icon: <Truck className="w-6 h-6" />,
      },
      {
        number: "3",
        title: "Continuous Monitoring & Optimized Transport",
        description:
          "GPS-tracked car shipping provides real-time updates, while AI route optimization reduces transit risks and ensures timely delivery.",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        number: "4",
        title: "Final Inspection & Client Notification",
        description:
          "When they arrive, a complete post-transport check confirms the vehicle shows up in showroom form. A detailed transport log and final inspection report are provided to customers for extra confidence.",
        icon: <CheckCircle className="w-6 h-6" />,
      },
    ],
    []
  );

  const enclosedAdvantages = useMemo(
    () => [
      {
        title: "Superior Weather & Debris Protection:",
        description:
          "Enclosed trailers guard against rain, snow, dust, and road debris, bringing the vehicle in perfect condition.",
        icon: <Cloud className="w-6 h-6" />,
      },
      {
        title: "Advanced Security Features:",
        description:
          "Hard-sided, sealed containers offer added protection from theft and unwanted entry.",
        icon: <Lock className="w-6 h-6" />,
      },
      {
        title: "Climate-Controlled Stability:",
        description:
          "The best choice for classic car transport and luxury vehicle shipping, enclosed carriers keep things stable at a temperature that prevents damage to fragile finishes and sensitive components.",
        icon: <Thermometer className="w-6 h-6" />,
      },
      {
        title: "Minimized Handling for Extra Security:",
        description:
          "Cars stay in a secure place during transit, significantly lessening the risk of damage caused by handling.",
        icon: <Users className="w-6 h-6" />,
      },
      {
        title: "Custom Transport Options:",
        description:
          "Opt for single-car enclosed transport for luxurious or rare vehicles or multi-car enclosed trailers for dealer and auction shipping.",
        icon: <Settings className="w-6 h-6" />,
      },
    ],
    []
  );

  const safetyFeatures = useMemo(
    () => [
      {
        title: "$1M+ Cargo Insurance Coverage:",
        description:
          "Every shipment comes with comprehensive insurance, ensuring complete protection from pickup to delivery.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "FMCSA Licensed & Bonded:",
        description:
          "We are a fully licensed and insured carrier, adhering to all federal transportation regulations to guarantee a legal and safe shipping experience.",
        icon: <FileText className="w-6 h-6" />,
      },
      {
        title: "Advanced Security Technology:",
        description:
          "Our enclosed auto transport features hydraulic lift gates, air-ride suspension, soft straps, and anti-theft technology to ensure optimal security.",
        icon: <Lock className="w-6 h-6" />,
      },
      {
        title: "Expertly Trained Personnel:",
        description:
          "Our team is highly skilled in exotic car shipping, luxury car transport, and white-glove car shipping, offering unparalleled expertise in the movement of high-value vehicles.",
        icon: <Award className="w-6 h-6" />,
      },
    ],
    []
  );

  const pricingFactors = useMemo(
    () => [
      {
        title: "Distance & Route Complexity:",
        description:
          "The farther and more remote the destination, the more resources are needed for transportation, which impacts overall pricing.",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        title: "Vehicle Specifications:",
        description:
          "Low-clearance exotics, oversized luxury vehicles, and classic cars sometimes need to have custom handling and specialized gear, which affects prices.",
        icon: <Car className="w-6 h-6" />,
      },
      {
        title: "Expedited Shipping Options:",
        description:
          "Need your car shipped sooner? Expedited shipping services are ready for emergency, time-critical shipments.",
        icon: <Clock className="w-6 h-6" />,
      },
      {
        title: "Specialized Handling Needs:",
        description:
          "Certain luxury cars, rare collectibles, and hypercars need extra security, temperature-controlled shipping, or white-glove car shipping, which can affect prices.",
        icon: <Star className="w-6 h-6" />,
      },
    ],
    []
  );

  const deliveryData = useMemo(
    () => [
      {
        origin: "East Hampton, NY",
        destination: "Philadelphia, PA",
        vehicle: "1970 Porsche 911",
        price: "$490",
        duration: "1 Day",
      },
      {
        origin: "Miami, FL",
        destination: "Nashville, TN",
        vehicle: "1964 Ford Mustang",
        price: "$880",
        duration: "3 Days",
      },
      {
        origin: "Durango, CO",
        destination: "Atlanta, GA",
        vehicle: "2020 Lamborghini Urus",
        price: "$1,760",
        duration: "3 Days",
      },
      {
        origin: "Las Vegas, NV",
        destination: "San Diego, CA",
        vehicle: "1962 Cadillac DeVille Convertible",
        price: "$650",
        duration: "1 Day",
      },
      {
        origin: "Hamilton, OH",
        destination: "Dallas, TX",
        vehicle: "1937 Chevrolet Coupe",
        price: "$1,160",
        duration: "2 Days",
      },
      {
        origin: "North Bend, OR",
        destination: "Detroit, MI",
        vehicle: "1956 Austin Healey BN2 100",
        price: "$2,760",
        duration: "5 Days",
      },
      {
        origin: "Seattle, WA",
        destination: "Boston, MA",
        vehicle: "2019 Aston Martin Vantage V8",
        price: "$2,350",
        duration: "6 Days",
      },
      {
        origin: "Long Beach, CA",
        destination: "Green Bay, WI",
        vehicle: "1952 Jaguar XK10",
        price: "$1,510",
        duration: "4 Days",
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "Do you transport classic and collector cars?",
        answer:
          "Absolutely! Classic, vintage, and collector vehicles require extra care, and enclosed transport is the best way to ensure they arrive in pristine condition without exposure to the elements or road hazards.",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        question: "How do I prepare my exotic car for transport?",
        answer:
          "Ensure the car's interior and exterior are clean so the driver can easily see if there is prior damage. If you are not carrying anything else, remove all your personal belongings. Inform the driver of any problems with your vehicle. Ensure that the car has a quarter tank of gas at pickup.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "How do I get a quote for exotic car shipping?",
        answer:
          "On our website, we have a quote form that clients can fill out for a quote estimate. To make it easy, fill in all the details. Once all the details are filled out and submitted, you will get our instant quote, and our representative will contact you ASAP. Or call +1 (833) 233-4447 to speak with one of our car transport pricing specialists. To compute your estimate, we need to know the origin and destination locations, the type of vehicle you wish to ship, and the date your car will be available.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Can I ship multiple exotic cars at once?",
        answer:
          "Yes, multi-car transport is available for collectors, dealerships, and luxury car events. Enclosed multi-car trailers can transport 2-7 vehicles safely, offering a cost-effective solution while maintaining high security and protection standards.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "What happens if my exotic car gets damaged during transport?",
        answer:
          "While rare, any damage sustained during transport is covered under the carrier's insurance. Upon delivery, inspect the vehicle thoroughly and document any discrepancies. If necessary, file a claim immediately with supporting photos and the pre-transport inspection report.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "Can I schedule last-minute or expedited exotic car transport?",
        answer:
          "Yes, expedited shipping is available for urgent transport needs. While it may cost more, we prioritize fast pickup and direct-route transport to ensure your vehicle arrives as quickly as possible.",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        question: "Do you transport non-running exotic cars?",
        answer:
          "Yes, non-operational exotic cars can be shipped using specialized equipment such as winches and custom skids. However, additional fees may apply due to the extra labor required for loading and unloading.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Is enclosed transport the only option for exotic cars?",
        answer:
          "While open transport is available, enclosed transport is strongly recommended for exotic cars to protect against weather, road debris, and potential damage. Enclosed carriers provide a climate-controlled, secure environment for high-value vehicles.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>
          Exotic Car Transport Services | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Trust Rapid Auto Shipping for secure exotic car transport. Enclosed trailers, expert drivers, and nationwide luxury car shipping. Get a free quote today."
        />
        
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href=" https://rapidautoshipping.com/exotic-car-transport"
        />
        <meta
          property="og:title"
          content="Exotic Car Transport Services | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Trust Rapid Auto Shipping for secure exotic car transport. Enclosed trailers, expert drivers, and nationwide luxury car shipping. Get a free quote today."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/exotic-car-transport"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751524952/Exotic_ea3npf.webp"
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
                      " https://rapidautoshipping.com/exotic-car-transport ",
                    name: "exotic-car-transport",
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
              serviceType: "Exotic Car Transport Service",
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
                "Premium exotic car transport service for luxury, sports, vintage, and collector vehicles. We offer enclosed and open carrier options, insurance coverage, and white-glove handling across the USA.",
              url: "https://rapidautoshipping.com/exotic-car-transport",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Do you transport classic and collector cars?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely! Classic, vintage, and collector vehicles require extra care, and enclosed transport is the best way to ensure they arrive in pristine condition without exposure to the elements or road hazards.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I prepare my exotic car for transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ensure the car's interior and exterior are clean so the driver can easily see if there is prior damage. Remove personal belongings and inform the driver of any issues with the vehicle. Keep at least a quarter tank of fuel.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I get a quote for exotic car shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Fill out the quote form on our website with accurate details. You'll receive an instant estimate, and our representative will follow up. You can also call +1 (833) 233-4447 to get a custom quote.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I ship multiple exotic cars at once?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we offer multi-car enclosed transport for collectors, dealerships, and events. These trailers can carry 2-7 exotic vehicles with full security and protection.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What happens if my exotic car gets damaged during transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Though rare, any damage is covered under the carrier's insurance. Always inspect your vehicle at delivery, take photos, and file a claim immediately if necessary.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I schedule last-minute or expedited exotic car transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, expedited transport is available for urgent deliveries. This service ensures faster pickup and quicker transit with priority routing.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you transport non-running exotic cars?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we can transport non-operational exotic vehicles using winches and special loading equipment. Additional fees may apply for this service.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is enclosed transport the only option for exotic cars?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Open transport is available, but enclosed transport is highly recommended for exotic cars. It provides maximum protection from weather, road debris, and prying eyes.",
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
          <section className="relative py-8  flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on Mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751524952/Exotic_ea3npf.webp"
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
                    Exotic Car <span className="text-[#ff5722]">Transport</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Exotic car transport refers to the specialized service of
                    safely and securely moving high-end, rare, or luxury
                    vehicles from one location to another. Exotic auto Shipping
                    is tailored to collectors, dealerships, and enthusiasts who
                    require meticulous care when transporting their prized
                    automobiles. It ensures vehicles arrive at their destination
                    in pristine condition.
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
                        What You Need to Know About Exotic Car Transport?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Exotic auto transport is a prestigious shipping service
                      for exotic sports cars, luxury vehicles, rare automobiles,
                      and classic cars. This form of vehicle transport provides
                      maximum security, precise handling, and specialized gear
                      to safely move high-value automobiles from one location to
                      another.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      The exotic car transport service employs enclosed auto
                      transport carriers to protect vehicles against road
                      hazards, weather, and possible damage. Low-clearance
                      vehicles are routinely shipped using hydraulic lift gate
                      transport for safe loading and unloading, with soft straps
                      and air-ride suspension to minimize unnecessary movement.
                      GPS-tracked car shipping provides real-time updates along
                      the way.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Whether shipping a Ferrari, Lamborghini, Porsche, or other
                      high-performance vehicle, safe car shipping guarantees the
                      vehicle's arrival in showroom condition. Enclosed shipping
                      of exotic vehicles is the first choice for safeguarding
                      these assets, providing peace of mind and exceptional
                      handling along the way.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751525415/Exotic_Car_Shipping_1_s46anv.webp"
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

          <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-xl"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  <Award className="w-12 h-12 text-white" />
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight">
                  <span style={{ color: "#003366" }}>The Pinnacle of </span>
                  <span style={{ color: "#ff5722" }}>Exotic Car Transport</span>
                  <span style={{ color: "#003366" }}>
                    {" "}
                    with Rapid Auto Shipping
                  </span>
                </h2>

                <div
                  className="max-w-5xl mx-auto bg-gray-50 rounded-2xl p-8 border-2 shadow-lg"
                  style={{ borderColor: "#ff5722" }}
                >
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    For more than a decade, we have been the Best exotic car
                    transport company for high-end car shipping in the United
                    States. Our team specializes in shipping high-performance
                    sports cars, vintage classics, and one-of-a-kind luxury
                    cars, including Ferrari, Lamborghini, Bugatti, McLaren, and
                    Rolls-Royce, ensuring they are delivered in immaculate,
                    showroom condition every time. Our cutting-edge
                    transportation solutions and expertly trained personnel
                    ensure maximum security, accuracy, and reliability along the
                    way.
                  </p>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Why Choose Us?
                  </h2>
                  <div
                    className="w-24 h-1 mx-auto rounded-full"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-l-4"
                      style={{
                        borderLeftColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                      }}
                    >
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div
                          className="w-16 h-16 rounded-xl shadow-md flex items-center justify-center"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        >
                          <div className="text-white">{feature.icon}</div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl font-bold mb-4 text-center"
                        style={{ color: "#003366" }}
                      >
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-center">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Message Section */}
              <div
                className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-3xl p-10 shadow-xl border-2 text-center"
                style={{ borderColor: "#003366" }}
              >
                <div className="mb-8">
                  <div className="flex justify-center space-x-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{
                          backgroundColor: i % 2 === 0 ? "#ff5722" : "#003366",
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />
                    ))}
                  </div>

                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Redefining Exotic Car Shipping
                  </h2>

                  <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                    We redefine exotic car shipping through an unwavering
                    dedication to security, precision, and excellence because
                    your investment is worth nothing less.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="https://rapidautoshipping.com/calculator">
                      <button
                        className="px-10 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        Get Premium Quote
                      </button>
                    </Link>
                    <Link href="tel:8332334447">
                      <button
                        className="px-10 py-4 rounded-2xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-900 hover:text-white"
                        style={{ borderColor: "#003366", color: "#003366" }}
                      >
                        Contact Specialists
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-xl"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  <Shield className="w-12 h-12 text-white" />
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight">
                  <span style={{ color: "#003366" }}>
                    The Exotic Car Transport Process:{" "}
                  </span>
                  <span style={{ color: "#ff5722" }}>
                    A Practical Approach to Vehicle Safety
                  </span>
                </h2>

                <div
                  className="max-w-5xl mx-auto bg-gray-50 rounded-2xl p-8 border-2 shadow-lg"
                  style={{ borderColor: "#ff5722" }}
                >
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    Our exotic car hauling process is structured to prevent risk
                    and provide high-value vehicle security at each step. With
                    cutting-edge technology and expert handling practices, we
                    promise an unblemished, safe, and timely shipping
                    experience.
                  </p>
                </div>
              </div>

              {/* Process Steps */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-l-4"
                      style={{
                        borderLeftColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                      }}
                    >
                      <div className="flex justify-center mb-6">
                        <div
                          className="w-16 h-16 rounded-xl shadow-md flex items-center justify-center"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        >
                          <div className="text-white">{step.icon}</div>
                        </div>
                      </div>

                      <h3
                        className="text-xl font-bold mb-4 text-center"
                        style={{ color: "#003366" }}
                      >
                        {step.number}. {step.title}
                      </h3>

                      <p className="text-gray-700 leading-relaxed text-center">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enclosed Transport Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2
                    className="text-4xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Enclosed Transport:{" "}
                    <span style={{ color: "#ff5722" }}>
                      The Definitive Choice
                    </span>{" "}
                    for Exotic Car Shipping Near Me
                  </h2>
                  <div
                    className="w-24 h-1 mx-auto rounded-full mb-6"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    For high-end vehicle shipping, enclosed shipping is the best
                    choice for safeguarding luxury, vintage, and
                    high-performance cars. In contrast to open transport,
                    enclosed auto shipping provides maximum protection, keeping
                    vehicles safe from nature's elements, road debris, and
                    theft.
                  </p>
                </div>

                <div className="mb-12">
                  <h3
                    className="text-2xl font-bold mb-8 text-center"
                    style={{ color: "#003366" }}
                  >
                    Major Advantages of Enclosed Transport:-
                  </h3>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {enclosedAdvantages.map((advantage, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-l-4"
                        style={{
                          borderLeftColor:
                            index % 2 === 0 ? "#ff5722" : "#003366",
                        }}
                      >
                        <div className="flex justify-center mb-6">
                          <div
                            className="w-16 h-16 rounded-xl shadow-md flex items-center justify-center"
                            style={{
                              backgroundColor:
                                index % 2 === 0 ? "#ff5722" : "#003366",
                            }}
                          >
                            <div className="text-white">{advantage.icon}</div>
                          </div>
                        </div>

                        <h4
                          className="text-xl font-bold mb-4 text-center"
                          style={{ color: "#003366" }}
                        >
                          {advantage.title}
                        </h4>

                        <p className="text-gray-700 leading-relaxed text-center">
                          {advantage.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-gray-50 rounded-2xl p-8 border-2 shadow-lg text-center"
                    style={{ borderColor: "#003366" }}
                  >
                    <p
                      className="text-lg font-medium"
                      style={{ color: "#003366" }}
                    >
                      When shipping high-end cars, enclosed shipping provides
                      uncompromising security, so it's the method of choice for
                      Ferrari transport, Lamborghini shipping, and Porsche car
                      transport.
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk Mitigation Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Risk Mitigation & Insurance for{" "}
                    <span style={{ color: "#ff5722" }}>
                      High-Value Vehicles
                    </span>
                  </h2>
                  <div
                    className="w-24 h-1 mx-auto rounded-full mb-6"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
                    At Rapid Auto Shipping luxury car shipping, we prioritize
                    the safety and security of your classic, luxury, and exotic
                    vehicles through advanced protection measures,
                    state-of-the-art transport technology, and comprehensive
                    insurance coverage. When shipping a Ferrari, Lamborghini,
                    Porsche, or a coveted collector's edition, our rigorous
                    safety protocols ensure that your vehicle arrives in
                    pristine condition.
                  </p>
                </div>

                <div className="mb-12">
                  <h3
                    className="text-2xl font-bold mb-8 text-center"
                    style={{ color: "#003366" }}
                  >
                    Key Safety & Insurance Features:
                  </h3>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {safetyFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-l-4"
                        style={{
                          borderLeftColor:
                            index % 2 === 0 ? "#ff5722" : "#003366",
                        }}
                      >
                        <div className="flex justify-center mb-6">
                          <div
                            className="w-16 h-16 rounded-xl shadow-md flex items-center justify-center"
                            style={{
                              backgroundColor:
                                index % 2 === 0 ? "#ff5722" : "#003366",
                            }}
                          >
                            <div className="text-white">{feature.icon}</div>
                          </div>
                        </div>

                        <h4
                          className="text-xl font-bold mb-4 text-center"
                          style={{ color: "#003366" }}
                        >
                          {feature.title}
                        </h4>

                        <p className="text-gray-700 leading-relaxed text-center">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-50 rounded-2xl p-8 border-2 shadow-lg text-center"
                style={{ borderColor: "#003366" }}
              >
                <p className="text-lg font-medium" style={{ color: "#003366" }}>
                  With our expert hand, you can trust that your exotic car
                  transport needs are managed with accuracy, dependability, and
                  steadfast safety.
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-2xl"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  <Calculator className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight">
                  <span style={{ color: "#ff5722" }}>Pricing Structure</span>
                  <span style={{ color: "#003366" }}>
                    {" "}
                    for Exotic Car Shipping
                  </span>
                </h2>

                <div className="max-w-5xl mx-auto">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Exotic car hauling costs are determined by a number of
                    important factors, providing a customized pricing model that
                    accounts for the individual needs of every vehicle and
                    shipment. When shipping a vintage car, exotic sports car, or
                    luxury vehicle shipping, the cost is determined by the
                    following:
                  </p>
                </div>
              </div>

              {/* Key Factors Section */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Key Factors Affecting the Cost of{" "}
                    <span style={{ color: "#ff5722" }}>
                      Exotic Car Transport
                    </span>
                  </h2>
                  <div
                    className="w-32 h-1 mx-auto rounded-full"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {pricingFactors.map((factor, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 border"
                      style={{
                        borderColor: index % 2 === 0 ? "#ff5722" : "#003366",
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start items-center md:space-x-6 space-y-6 md:space-y-0">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        >
                          <div className="text-white">{factor.icon}</div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <h3
                            className="text-xl font-bold mb-3"
                            style={{ color: "#003366" }}
                          >
                            {factor.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {factor.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Section */}
              <div className="mb-20">
                <div
                  className="bg-white rounded-3xl p-10 shadow-2xl border-2"
                  style={{ borderColor: "#ff5722" }}
                >
                  <div className="text-center">
                    <h2
                      className="text-3xl font-bold mb-6"
                      style={{ color: "#003366" }}
                    >
                      Get a Personalized Quote Today
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                      For a fair, competitive price based on your individual
                      shipping requirements, fill out our quote form to get an
                      instant, personalized quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="tel:+18332334447">
                        <button
                          className="inline-flex items-center px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call (833) 233-4447
                        </button>
                      </Link>
                      <Link href="https://rapidautoshipping.com/calculator">
                        <button
                          className="inline-flex items-center px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          Get Instant Quote
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Deliveries Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Recent High-Value Vehicle Deliveries by{" "}
                    <span style={{ color: "#ff5722" }}>Our Expert Team</span>
                  </h2>
                  <div
                    className="w-32 h-1 mx-auto rounded-full"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                {/* Desktop Table */}
                <div className="hidden lg:block bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead style={{ backgroundColor: "#003366" }}>
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                            Origin
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                            Destination
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                            Vehicle
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {deliveryData.map((delivery, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors duration-200"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {delivery.origin}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              {delivery.destination}
                            </td>
                            <td
                              className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                              style={{ color: "#ff5722" }}
                            >
                              {delivery.vehicle}
                            </td>
                            <td
                              className="px-6 py-4 whitespace-nowrap text-sm font-bold"
                              style={{ color: "#003366" }}
                            >
                              {delivery.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              {delivery.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mobile Cards */}
                <div className="lg:hidden space-y-4">
                  {deliveryData.map((delivery, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-6 border-l-4"
                      style={{
                        borderLeftColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                      }}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                              Route
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              {delivery.origin} → {delivery.destination}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                              Duration
                            </div>
                            <div className="text-sm font-medium text-gray-700">
                              {delivery.duration}
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                            Vehicle
                          </div>
                          <div
                            className="text-lg font-bold"
                            style={{ color: "#ff5722" }}
                          >
                            {delivery.vehicle}
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                            Price
                          </div>
                          <div
                            className="text-xl font-bold"
                            style={{ color: "#003366" }}
                          >
                            {delivery.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note Section */}
              <div
                className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 border-2"
                style={{ borderColor: "#ff5722" }}
              >
                <div className="text-center">
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Note:
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Prices are based on recent shipping and current market
                    scenarios. For a customized and accurate auto transportation
                    quote, please call our toll-free number:{" "}
                    <Link href="tel:+18332334447">
                      <span className="font-bold" style={{ color: "#ff5722" }}>
                        +1 (833) 233-4447
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Secure Your Exotic Car Transport with Rapid Auto
                        Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Your cherished vehicle deserves the highest standard of
                      care and safeguarding. When it comes to shipping a
                      hypercar, a limited-production classic, or a
                      limited-edition luxury vehicle, Rapid Auto Shipping exotic
                      car transport ensures a seamless, premium transport
                      experience characterized by precision, reliability, and
                      exceptional protection. Trust the experts in exotic car
                      transport; contact us today at (833) 233-4447.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image with enhanced effects */}
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751529107/Exotic_Car_Shipping_2_s007py.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          width={800}
                          height={300}
                          loading="lazy"
                          className="w-full h-[300px] object-cover rounded-2xl shadow-2xl 
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