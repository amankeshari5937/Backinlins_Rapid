"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import { Calculator } from "lucide-react";
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
  Star,
  FileText,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Phone,
  FileCheck,
  Heart,
  MapPin,
  Calendar,
  ArrowDown,
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

  const processSteps = useMemo(
    () => [
      {
        step: "01",
        title: "Request Quote",
        icon: <Calculator className="w-6 h-6" />,
        description:
          "For accurate costs relating to the type of ambulance being transported, you can use online quote forms for vehicles and medical equipment or contact an experienced shipping expert at 833-233-4447.",
        highlight: "Get instant pricing",
      },
      {
        step: "02",
        title: "Schedule Your Shipment",
        icon: <Calendar className="w-6 h-6" />,
        description:
          "You can call and speak to one of our knowledgeable Transport Specialists or book online using the link you will receive in your email. We will explain the procedure and answer your questions.",
        highlight: "Expert guidance",
      },
      {
        step: "03",
        title: "Pickup & Tracking",
        icon: <MapPin className="w-6 h-6" />,
        description:
          "Once a driver has been assigned to the transport, we will inform you of their identity and when they will collect the vehicle. Along the way, we will provide you with sporadic updates, and you can get in touch with us at any moment.",
        highlight: "Real-time updates",
      },
      {
        step: "04",
        title: "Delivery & Payment",
        icon: <CheckCircle className="w-6 h-6" />,
        description:
          "When your ambulance is delivered, you and the driver will inspect it. At that time, you will pay the driver the remaining amount of the transport. Then, to make sure everything went as planned, we will contact you.",
        highlight: "Safe delivery",
      },
    ],
    []
  );

  const costFactors = useMemo(
    () => [
      {
        title: "Distance and Location",
        icon: <MapPin className="w-6 h-6" />,
        description:
          "The price is mostly a function of how far apart the pickup and drop-off locations are. Longer distances tend to make the price more expensive. There may also be extra charges for remote or out-of-the-way locations.",
        keyPoints: [
          "Distance-based pricing",
          "Remote location surcharges",
          "Geographic considerations",
        ],
        bgGradient: "from-orange-50 to-orange-100",
      },
      {
        title: "Type and Size of the Ambulance",
        icon: <Truck className="w-6 h-6" />,
        description:
          "Various kinds of ambulances have differing sizes and weights, which have an effect on emergency vehicle transportation costs. Heavier ambulances need specialized equipment and infrastructure, which factors into the total price.",
        keyPoints: [
          "Vehicle weight factors",
          "Specialized equipment needs",
          "Size-dependent pricing",
        ],
        bgGradient: "from-blue-50 to-blue-100",
      },
      {
        title: "Transport Mode",
        icon: <Shield className="w-6 h-6" />,
        description:
          "An open or enclosed transport option influences the cost. Enclosed transport gives additional protection but is costlier. We have flexible options to accommodate your budget and requirements.",
        keyPoints: [
          "Open transport option",
          "Enclosed protection",
          "Flexible solutions",
        ],
        bgGradient: "from-orange-50 to-orange-100",
      },
      {
        title: "Time Limit and Urgency",
        icon: <Clock className="w-6 h-6" />,
        description:
          "In case you need urgent delivery in the event of an emergency, the price might be higher. We provide priority nationwide ambulance transport in case of urgent needs for timely and safe delivery.",
        keyPoints: [
          "Emergency delivery",
          "Priority transport",
          "Expedited service",
        ],
        bgGradient: "from-blue-50 to-blue-100",
      },
      {
        title: "Insurance and Licensing",
        icon: <FileCheck className="w-6 h-6" />,
        description:
          "All our services are insured and licensed, providing customers with peace of mind while transporting their vehicles. Although this costs more, it ensures maximum protection and adherence to legal requirements.",
        keyPoints: [
          "Full insurance coverage",
          "Licensed operations",
          "Legal compliance",
        ],
        bgGradient: "from-orange-50 to-orange-100",
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      {
        title: "Efficient Services and Reliability",
        icon: <Shield className="w-6 h-6" />,
        description:
          "Our transport drivers are professionally trained and skilled at their work. These drivers also have many years of knowledge and experience in vehicle transport. Expert and Reliable transport services provide the security you want and expect when transporting an ambulance.",
        gradient: "from-orange-400 to-red-500",
      },
      {
        title: "Cost-Effective and Reasonable Rates",
        icon: <DollarSign className="w-6 h-6" />,
        description:
          "When moving ambulances long distances, you must consider gasoline, snacks, hotel stays, rest stops, vehicle breakdowns, and extended insurance. Ambulance shipping service will save you from these expenses and benefit you in the long run.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        title: "Protects Your Ambulance Value",
        icon: <Heart className="w-6 h-6" />,
        description:
          "Traveling for long hours and long distances can cause unnecessary wear and tear on an ambulance before it ever reaches its destination. The more wear and tear there is, the more maintenance will be needed on the ambulance.",
        gradient: "from-orange-400 to-red-500",
      },
      {
        title: "Less Time Worrying and Planning",
        icon: <Clock className="w-6 h-6" />,
        description:
          "Anytime you have to take a trip, much planning is involved. Think about your last family vacation. There may be lists and a lot of preparation required for the trip. Even with all the preparation, you may have forgotten something or weren't as prepared as you thought.",
        gradient: "from-blue-400 to-blue-600",
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "How much does ambulance shipping cost?",
        answer:
          "The cost to ship an ambulance depends on several factors, including the size and weight of the vehicle, the distance of transport, the type of carrier (open vs. enclosed), and current fuel rates. On average, rates can range from $1.50 to $4.00 per mile. For an exact quote, contact us with your ambulance's details and pickup/drop-off locations.",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        question: "Can you transport non-operational ambulances?",
        answer:
          "Yes, we specialize in transporting both operational and non-operational ambulances. If your ambulance cannot start, roll, or brake, we arrange for a carrier equipped with a winch or other necessary tools to safely load and unload it.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "How long does delivery take?",
        answer:
          "The typical time to ship an ambulance is 3 to 5 business days. However, ambulance shipping depends on factors like transport truck bandwidth, traffic, weather, and other factors that will influence your specific timings.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Is the ambulance insured during transport?",
        answer:
          "Absolutely. Every ambulance we transport is fully insured during the entire shipping process. We provide a copy of the insurance policy upon request for your peace of mind.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "What information do I need to book ambulance transport?",
        answer:
          "In order to place an ambulance shipping order, you will need to provide your contact information, addresses for pickup and delivery, and vehicle details such as year, make, model, and condition. Also, mention whether it is running or inoperable, transport preferences in the form of open or enclosed shipping, and desired dates.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Ambulance Shipping | Rapid Auto Transport</title>
        <meta
          name="description"
          content="The usage of an ambulance is not only for emergency purposes. In emergency and non-emergency situations, various ambulances are available for ambulance shipping."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/ambulance-shipping"
        />
        <meta
          property="og:title"
          content="Ambulance Shipping | Rapid Auto Transport"
        />
        <meta
          property="og:description"
          content="The usage of an ambulance is not only for emergency purposes. In emergency and non-emergency situations, various ambulances are available for ambulance shipping."
        />
        <meta
          property="og:url"
          content=" https://rapidautoshipping.com/services/ambulance-shipping "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751282695/28714b1db600868f6501e96ea8dd66df_yk1lck.jpg"
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
                    name: "ambulance-shipping",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      " https://rapidautoshipping.com/services/ambulance-shipping ",
                    name: "ambulance-shipping",
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
              serviceType: "Ambulance Shipping Service",
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
                "Specialized ambulance shipping services across the United States. We transport emergency medical vehicles safely and securely using enclosed and open carriers with full insurance and expert handling.",
              url: "https://rapidautoshipping.com/services/ambulance-shipping",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is ambulance shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ambulance shipping is the professional transport of emergency medical vehicles—new, used, or decommissioned—from one location to another, using specialized carriers.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why choose Rapid Auto Shipping for ambulance transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We provide fully insured, door-to-door ambulance transport using experienced drivers and equipment suited for medical vehicles. We handle all logistics and ensure safe delivery.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you transport ambulances nationwide?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Rapid Auto Shipping provides ambulance transport services across all 50 U.S. states with flexible scheduling and real-time tracking.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What types of ambulances do you ship?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We ship all types of ambulances including Type I, Type II, Type III, and medium-duty rescue units—whether new, used, or fleet vehicles.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is my ambulance insured during transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, your ambulance is fully insured while in transit. We conduct inspections before pickup and upon delivery for maximum protection.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much does ambulance shipping cost?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The cost depends on distance, vehicle type, transport method (open/enclosed), and any special requirements. Contact us for a free custom quote.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I track my ambulance shipment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely. We offer GPS tracking and dedicated support to keep you updated throughout the shipping process.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you handle fleet ambulance shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. We support hospitals, municipalities, and private companies with large-scale and recurring fleet transport services.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I schedule ambulance transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Simply call us or fill out our online quote form. Our team will arrange the logistics and guide you through the process from start to finish.",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751282695/28714b1db600868f6501e96ea8dd66df_yk1lck.jpg"
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
                    Nationwide Ambulance Shipping Services:{" "}
                    <span className="text-[#ff5722]">
                      Safe, Reliable, and Affordable
                    </span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Rapid Auto Shipping is known for its expertise in providing
                    ambulance shipping services that address the distinct needs
                    of medical facilities, private owners, and organizations.
                    Thanks to our team's professionalism and cutting-edge
                    equipment, your ambulance will be transported safely and in
                    a timely manner.
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
                        Why Choose Rapid Auto Shipping for the Ambulance
                        Shipping Services?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      An ambulance is larger than all other vehicles and
                      considered a heavyweight. As ambulances are emergency
                      vehicles needed in hospitals and clinics, emergency
                      vehicle transport has to be accomplished hastily and with
                      ease. We provide the necessary care and promptness in
                      nationwide ambulance transport with safe and affordable
                      ambulance shipping options.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      We provide national coverage at your residence so you can
                      concentrate on your work while we take care of the
                      logistics. Our professional drivers are specifically
                      trained in towing emergency vehicles for safe and secure
                      transportation. With full insurance and valid licenses, we
                      give total peace of mind during the shipping process.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      At Rapid Auto Shipping, we believe in transparency,
                      providing competitive rates with no additional fees.
                      Whether you are shipping one ambulance or a whole fleet,
                      you can rely on us to get there fast, safely, and
                      efficiently. Call us today for a free quote for reliable
                      ambulance shipping services and enjoy stress-free
                      transportation.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751282360/5232345179_bfe0c8948d_b_xzfqdy.jpg"
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

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 shadow-xl transform transition-all duration-700 hover:scale-110"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-900 bg-clip-text text-transparent">
                  How Do Our Ambulance Shipping Services Work?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We simplify the wheel ambulance shipping process for you:
                </p>
              </div>

              {/* Process Timeline */}
              <div className="relative">
                {/* Desktop Timeline Line */}
                <div
                  className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 transform -translate-y-1/2"
                  style={{ backgroundColor: "#ff5722", opacity: 0.3 }}
                ></div>

                {/* Mobile Timeline Line */}
                <div
                  className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
                  style={{ backgroundColor: "#ff5722", opacity: 0.3 }}
                ></div>

                {/* Process Steps */}
                <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
                  {processSteps.map((process, index) => (
                    <div
                      key={index}
                      className="relative group"
                      style={{
                        animationDelay: `${index * 200}ms`,
                        animation: "fadeInUp 0.8s ease-out forwards",
                      }}
                    >
                      {/* Arrow for desktop */}
                      <div className="relative z-10 mb-8">
                        {index < processSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                          </div>
                        )}
                      </div>

                      {/* Content Card */}
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6">
                        {/* Icon and Title */}
                        <div className="flex flex-col md:flex-row md:items-center items-center mb-4">
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center md:mr-4 mb-3 md:mb-0 transition-all duration-300 group-hover:scale-110"
                            style={{ backgroundColor: "#003366" }}
                          >
                            <div className="text-white">{process.icon}</div>
                          </div>
                          <div className="text-center md:text-left">
                            <h3
                              className="text-xl font-bold mb-1"
                              style={{ color: "#003366" }}
                            >
                              {process.title}
                            </h3>
                            <span
                              className="text-sm font-medium px-3 py-1 rounded-full text-white"
                              style={{ backgroundColor: "#ff5722" }}
                            >
                              {process.highlight}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed text-sm text-center md:text-left">
                          {process.description}
                        </p>

                        {/* Hover Effect Border */}
                        <div
                          className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                          style={{ backgroundColor: "#ff5722" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#ff5722" : "#003366",
                            animationDelay: `${i * 0.2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: "#003366" }}
                  >
                    Ready to Ship Your Ambulance?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our streamlined process ensures your ambulance transport is
                    handled with care and professionalism from start to finish.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                      <button
                        className="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        Get Quote Now
                      </button>
                    </Link>
                    <Link href="tel:+18332334447">
                      <button
                        className="px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105"
                        style={{ color: "#003366", borderColor: "#003366" }}
                      >
                        Call 833-233-4447
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-white py-8 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Hero Section with Floating Elements */}
              <div className="relative text-center mb-20">
                {/* Floating Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <div
                    className="absolute bottom-10 right-20 w-24 h-24 rounded-full opacity-10 animate-pulse"
                    style={{ backgroundColor: "#003366", animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-40 right-10 w-16 h-16 rounded-full opacity-10 animate-pulse"
                    style={{ backgroundColor: "#ff5722", animationDelay: "2s" }}
                  ></div>
                </div>

                <div className="relative z-10">
                  {/* Main Icon */}
                  <div className="inline-block mb-8">
                    <div className="relative">
                      <div
                        className="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-700 hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, #ff5722, #ff7043)`,
                        }}
                      >
                        <DollarSign className="w-14 h-14 text-white" />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#003366" }}
                      >
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <h2
                    className="text-4xl md:text-4xl font-bold mb-8"
                    style={{ color: "#003366" }}
                  >
                    Cost of Nationwide
                    <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                      Ambulance Transport
                    </span>
                  </h2>

                  {/* Intro Card */}
                  <div
                    className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 border-2 shadow-2xl"
                    style={{ borderColor: "#ff5722" }}
                  >
                    <p
                      className="text-lg leading-relaxed mb-6"
                      style={{ color: "#003366" }}
                    >
                      The price of ambulance transportation is determined by a
                      number of factors. We aim to offer affordable ambulance
                      shipping without compromising on safety and reliability
                      standards. Our ambulance shipping services are tailored to
                      meet your requirements for efficient and economical
                      solutions.
                    </p>
                    <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                      <div
                        className="inline-flex items-center space-x-3 px-6 py-3 rounded-full"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <TrendingUp className="w-5 h-5 text-white" />
                        <span className="text-white font-semibold">
                          Get our free, no-obligation quote and get the most
                          competitive pricing.
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Scroll Indicator */}
                  <div className="mt-12">
                    <ArrowDown
                      className="w-6 h-6 mx-auto animate-bounce"
                      style={{ color: "#ff5722" }}
                    />
                  </div>
                </div>
              </div>

              {/* Factors Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2
                    className="text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Factors Influencing the
                    <span style={{ color: "#ff5722" }}> Price</span>
                  </h2>
                  <div
                    className="w-24 h-1 mx-auto rounded-full"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                {/* Simple Layout - Two Boxes Per Row */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {costFactors.map((factor, index) => (
                    <div
                      key={index}
                      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-l-4 ${
                        index === costFactors.length - 1 ? "lg:col-span-2" : ""
                      }`}
                      style={{
                        borderLeftColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                        animationDelay: `${index * 200}ms`,
                        animation: "slideUp 0.8s ease-out forwards",
                      }}
                    >
                      {/* Animated Background */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, #ff5722, #003366)`,
                        }}
                      ></div>

                      <div className="relative p-8">
                        {/* Centered Icon at Top */}
                        <div className="flex justify-center mb-6">
                          <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                            style={{
                              backgroundColor:
                                index % 2 === 0 ? "#ff5722" : "#003366",
                            }}
                          >
                            <div className="text-white">{factor.icon}</div>
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                          className="text-2xl font-bold mb-6 text-center"
                          style={{ color: "#003366" }}
                        >
                          {factor.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6 text-center">
                          {factor.description}
                        </p>

                        {/* Key Points */}
                        <div className="space-y-3">
                          <div
                            className="text-sm font-semibold mb-3 text-center"
                            style={{ color: "#003366" }}
                          >
                            Key Considerations:
                          </div>
                          <div className="flex flex-wrap gap-3 justify-center">
                            {factor.keyPoints.map((point, pointIndex) => (
                              <span
                                key={pointIndex}
                                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                                style={{
                                  backgroundColor:
                                    index % 2 === 0 ? "#ff5722" : "#003366",
                                  animationDelay: `${
                                    index * 200 + pointIndex * 100
                                  }ms`,
                                  animation:
                                    "fadeInLeft 0.6s ease-out forwards",
                                }}
                              >
                                {point}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom accent line */}
                        <div
                          className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section with Clean Effect */}
              <div
                className="bg-gray-50 rounded-3xl p-10 border-2 shadow-2xl text-center"
                style={{ borderColor: "#003366" }}
              >
                <div className="mb-8">
                  <div className="flex justify-center space-x-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: i % 2 === 0 ? "#ff5722" : "#003366",
                          animation: `pulse 2s infinite ${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Competitive & Transparent Pricing
                  </h3>
                  <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                    At Rapid Auto Shipping, we ensure that we provide
                    competitive and transparent pricing without any extra fees.
                    Get in touch with us today to get a custom quote on
                    ambulance shipping services and have us assist you in
                    securing the best deal for ambulance shipping.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                    <button
                      className="group px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl relative overflow-hidden"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <span className="relative z-10">Get Free Quote</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </Link>
                  <Link href="tel:+18332334447">
                    <button
                      className="group px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                      style={{ borderColor: "#003366", color: "#003366" }}
                    >
                      Contact Us Today
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center mb-8">
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl transform transition-all duration-700 hover:scale-110 hover:rotate-6"
                      style={{
                        background: `linear-gradient(135deg, #ff5722, #ff7043)`,
                      }}
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <div
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#003366" }}
                    >
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-6">
                  <span style={{ color: "#003366" }}>
                    What are the Benefits of{" "}
                  </span>
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Ambulance Shipping?
                  </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  There are many benefits to using a shipping service that you
                  can't generally offer yourself. It gives options for a
                  shipping service that may be able to help with your ambulance
                  relocation needs.
                </p>
              </div>

              {/* Benefits Grid with Hexagon Layout */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animationDelay: `${index * 300}ms`,
                      animation: "slideInScale 0.8s ease-out forwards",
                    }}
                  >
                    {/* Main Card */}
                    <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border-2 border-gray-100">
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <div
                          className={`w-full h-full rounded-full bg-gradient-to-br ${benefit.gradient}`}
                        ></div>
                      </div>

                      {/* Centered Icon at Top */}
                      <div className="relative z-10 mb-6 flex justify-center">
                        <div
                          className="w-16 h-16 rounded-2xl text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${
                              index % 2 === 0
                                ? "#ff5722, #ff7043"
                                : "#003366, #1565c0"
                            })`,
                          }}
                        >
                          {benefit.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3
                          className="text-2xl font-bold mb-4 text-center"
                          style={{ color: "#003366" }}
                        >
                          {benefit.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-center">
                          {benefit.description}
                        </p>
                      </div>

                      {/* Hover Effect Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                      ></div>

                      {/* Bottom Accent */}
                      <div
                        className="absolute bottom-0 left-0 w-full h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"
                        style={{
                          background: `linear-gradient(90deg, ${
                            index % 2 === 0
                              ? "#ff5722, #ff7043"
                              : "#003366, #1565c0"
                          })`,
                        }}
                      ></div>
                    </div>

                    {/* Decorative Elements */}
                    <div
                      className="absolute -top-2 -left-2 w-6 h-6 rounded-full opacity-20 group-hover:animate-ping"
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                      }}
                    ></div>
                    <div
                      className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full opacity-30 group-hover:animate-ping"
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                        animationDelay: "0.2s",
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div
                className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-10 animate-float"
                style={{ backgroundColor: "#ff5722" }}
              ></div>
              <div
                className="absolute bottom-20 right-20 w-16 h-16 rounded-full opacity-10 animate-float"
                style={{ backgroundColor: "#003366", animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          <StatsSection />

          <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Best Ambulance Shipping Service
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Rapid Auto Shipping values ambulances' lifesaving work.
                      Our ambulance shipping service is safe, reliable, and
                      efficient. Our trained drivers and extensive insurance
                      ensure that your emergency vehicle transportation needs
                      are met professionally and meticulously from coast to
                      coast.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Our goal is to offer affordable ambulance shipping without
                      compromising quality or safety. Our professional staff
                      provides efficient service whether you need to transport
                      one ambulance or several. Trust Rapid Auto Shipping for
                      nationwide ambulance shipping. Call us today for a free
                      quote and hassle-free shipping from a reliable team.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        {/* Image with enhanced effects */}
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751282541/673e549dd30ea.image_j6v8uu.jpg"
                          alt="Shipping Service - Professional Transport Solutions"
                          width={800}
                          height={400}
                          loading="lazy"
                          className="w-full h-[400px] object-cover rounded-2xl shadow-2xl 
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