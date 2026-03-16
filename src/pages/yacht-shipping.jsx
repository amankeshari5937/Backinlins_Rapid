"use client";

import React, { useState, useMemo, useCallback } from "react";
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
  Star,
  Package,
  CheckCircle,
  MapPin,
  Shield,
  Phone,
  Calculator,
  HelpCircle,
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

  const whyChooseUs = useMemo(
    () => [
      {
        title: "Nationwide yacht shipping",
        description:
          "We provide reliable and stress-free yacht shipping services to all 50 states, including Alaska and Hawaii.",
        icon: <MapPin className="h-8 w-8" />,
      },
      {
        title: "Comprehensive insurance coverage",
        description:
          "Our comprehensive insurance coverage provides adequate protection during yacht transportation.",
        icon: <Shield className="h-8 w-8" />,
      },
      {
        title: "Competitive prices",
        description:
          "With Rapid Auto Shipping, you can expect the most competitive prices for your yacht transport solutions. Just need to request a quote with our online calculator, and we will get back to you with a customized offer.",
        icon: <DollarSign className="h-8 w-8" />,
      },
      {
        title: "24/7 Customer Support",
        description:
          "With our customer support team available 24/7 to provide guidance and advice, you can rest assured that your shipment goes as smoothly as possible.",
        icon: <Phone className="h-8 w-8" />,
      },
    ],
    [],
  );

  const shippingProcess = useMemo(
    () => [
      {
        step: 1,
        title:
          "Quote Request - Submit your yacht details for a personalized quote",
        description:
          "The process of shipping a yacht begins once we receive an inquiry at Rapid Auto Shipping. This can be done through our website- rapidautoshipping.com, email - info@rapidautoshipping.com, or phone call at (833) 433- 4447. Our sales team will reach out to you and will request that you provide detailed information about your yacht and transport requirements, including:",
        icon: <Calculator className="h-8 w-8" />,
        requirements: [
          "Yacht specifications: Size, weight, and type.",
          "Transport route: Starting and ending locations, including any special requirements.",
          "Preferred transport method",
          "Timing and scheduling: Desired timeframe for the transport.",
        ],
        conclusion:
          "The team reviews the details, and you get a customised quote, outlining the costs and terms of the yacht shipping.",
      },
      {
        step: 2,
        title: "Planning - We design a custom transport plan for your vessel",
        description:
          "After you receive the quote and place the shipping order, we lay out a custom transport plan for your shipping as per your requirements and shipping needs. We decide on the best transport method, which can be land or water transport, or a combination of land and water both to ensure the vessel's safe arrival. This plan will often include pre-transport preparation like securing loose items, draining tanks, and potentially removing or securing detachable parts. Customs clearance is obtained, as yachts cannot be loaded or discharged without it, after you have submitted documents like the yacht's certificate of registry, passport, and commercial invoice.",
        icon: <CheckCircle className="h-8 w-8" />,
      },
      {
        step: 3,
        title:
          "Loading - Secure and Specialized loading by our experienced team",
        description:
          "When the planning and the preparation of the yacht is over, we proceed with the loading. Our sales team will inform you in advance about the loading date or the date chosen by you in case of guaranteed pickup. In case of land transport, the yacht is loaded using specialized cranes, lifts, and trailers. For water transport, it is loaded and secured using specialized equipment or cranes. Our professional packers ensure the yacht is properly protected during transit. The yacht transport journey begins, and you can monitor the progress through our online process.",
        icon: <Package className="h-8 w-8" />,
      },
      {
        step: 4,
        title:
          "Delivery - Safe, Secure, and On-time arrival at your chosen destination",
        description:
          "The time to safely receive your yacht at your designated delivery spot is the last step in our yacht shipping process. Our sales team will inform you about your delivery well in advance, so that you can be present to take the delivery. A thorough inspection is carried out at the delivery site to ensure the yacht is in good condition upon arrival. It will then be handed over to the owner with the delivery report.",
        icon: <Star className="h-8 w-8" />,
      },
    ],
    [],
  );

  const faqData = useMemo(
    () => [
      {
        icon: <HelpCircle className="w-5 h-5" />,
        question: "What does yacht stand for?",
        answer:
          "A yacht is a craft used for pleasure and sport. The name comes from the Dutch word jaght, which translates as 'hunter', a fast, light sailing vessel used in the past by the nation's navy to chase pirates and other ne'er-do-wells.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question:
          "Are the people handling my yacht during transport trustworthy?",
        answer:
          "Most reputable transport companies conduct background checks on their staff to ensure they are reliable when handling your valuable property, like yachts.",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        question: "What are my options for transporting a yacht?",
        answer:
          "You can have your yacht shipped using water transport or trailer it on a tractor-trailer if it's the right size.",
      },
    ],
    [],
  );

  return (
    <>
      <Head>
        <title>Yacht Shipping Services by Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Need reliable yacht shipping? Rapid Auto Shipping offers nationwide transport for yachts of all sizes. Get a free quote today!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/yacht-shipping"
        />
        <meta
          property="og:title"
          content="Yacht Shipping Services by Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Need reliable yacht shipping? Rapid Auto Shipping offers nationwide transport for yachts of all sizes. Get a free quote today!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/yacht-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1752140374/Yatch_Shipping_3_tsppbx.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Yacht Shipping Service",
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
                "Specialized yacht shipping services across the US by Rapid Auto Shipping. We handle oversized boat transport, cradle setups, permits, and insurance to ensure your yacht arrives safely.",
              url: "https://rapidautoshipping.com/yacht-shipping",
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
                  name: "yacht-shipping",
                  item: "https://rapidautoshipping.com/yacht-shipping",
                },
              ],
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          {/* Hero Section - Mobile: solid bg, Desktop: image */}
          <section className="relative py-8 flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on Mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1752140207/image_cwb3l4.jpg"
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
                <rect width="100%" height="100%" fill="url(#glassPattern)" />
              </svg>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center  px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 md:bg-[#001933]/40 max-w-3xl rounded-lg p-3 sm:p-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    Yacht Shipping Services by{" "}
                    <span className="text-[rgb(255,87,34)]">
                      Rapid Auto Shipping
                    </span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Rapid Auto Shipping is a premier auto shipping provider that
                    offers specialized yacht shipping services. Transportation
                    of a yacht is a specialty move that requires extensive
                    experience, exceptional teamwork, and specialized equipment.
                    The shipping process also requires careful planning and
                    execution. We take care of all aspects of the shipping
                    process, including vessel inspections, necessary permits,
                    loading, securing, and documentation, to make it an
                    affordable yacht transport. At Rapid Auto Shipping, our
                    yacht transport services team works as a cohesive unit to
                    provide you with smooth and seamless yacht transport
                    services.
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
                        Reliable and Affordable Nationwide Yacht Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Rapid Auto Shipping yacht services stand out in the search
                      for reliable yacht shipping nationwide. As a top-rated
                      vehicle shipping company, we provide safe and reliable
                      yacht shipping services across all 50 states, including
                      Alaska and Hawaii. From luxury yacht transport to
                      commercial or private yachts and from motor yachts,
                      sailing yachts to catamarans, we can deliver all types of
                      yachts to bustling cities as well as to the remotest
                      places across the country.
                      <br />
                      Our commitment to providing quality yacht shipping at an
                      affordable cost is sure to deliver a most satisfactory
                      experience from start to finish. Our team of certified,
                      insured, and professional carriers, throughout the nation,
                      gives you seamless and hassle-free yacht shipping services
                      to destinations across the USA.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1752140374/Yatch_Shipping_3_tsppbx.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={400}
                        loading="lazy"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-br from-[#003366] via-[#004080] to-[#003366] text-white py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                      Why Choose Rapid Auto Shipping for Yacht Transport?
                    </h2>
                  </div>
                  <div className="max-w-6xl mx-auto">
                    <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-100">
                      If you also have a question, " How to ship a yacht?" then
                      we suggest you choose us for the answer and get the best
                      yacht shipping experience.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-200">
                      Manufacturers, owners, and racers choose Rapid Auto
                      Shipping for yacht transport services as we provide safe
                      and streamlined delivery of yachts to all parts of the
                      country. Our skilled loadmasters ensure your vessel is
                      secure every step of the way. All our carriers are skilled
                      and professionally certified, with long experience in
                      yacht transportation. We use specialized equipment and
                      techniques to protect your vessel throughout the entire
                      journey. Rapid Auto Shipping offers custom solutions and
                      tailored shipping options for yachts of all sizes, from
                      sailboats to megayachts.Here are some more reasons:
                    </p>
                  </div>
                </div>
              </div>
            </header>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="group">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#ff5722]/20 h-full text-center">
                        <div className="bg-gradient-to-br from-[#ff5722] to-[#ff6b47] rounded-xl p-4 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                          {reason.icon}
                          <div className="text-white"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#ff5722] transition-colors duration-300">
                          {reason.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Process Section Header */}
            <section className="py-16 bg-gradient-to-r from-[#003366] to-[#004080] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Yacht Shipping Process at Rapid Auto Shipping
                </h2>
                <div className="w-32 h-1 bg-[#ff5722] mx-auto mb-8"></div>
                <p className="text-xl leading-relaxed max-w-5xl mx-auto">
                  Yacht shipping, or yacht transport services, involves
                  professionally moving a yacht from one location to another,
                  often across long distances. For this, it has to go through
                  several steps in the yacht shipping process that begin with
                  requesting a quote. The next step is planning and loading the
                  yacht, and finally, the process ends with the delivery. All of
                  this is discussed in detail below:
                </p>
              </div>
            </section>

            {/* Shipping Process Steps */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                  {shippingProcess.map((step, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-gray-100">
                        <div className="p-10">
                          <div className="text-center mb-8">
                            <div className="bg-gradient-to-br from-[#ff5722] to-[#ff6b47] rounded-2xl p-6 w-24 h-24 mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                              {step.icon}
                              <div className="text-white"></div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-[#003366] group-hover:text-[#ff5722] transition-colors duration-300">
                              {step.title}
                            </h3>
                          </div>

                          <div className="text-center">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                              {step.description}
                            </p>

                            {step.requirements && (
                              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
                                <div className="space-y-3">
                                  {step.requirements.map((req, reqIndex) => (
                                    <div
                                      key={reqIndex}
                                      className="flex items-start"
                                    >
                                      <div className="bg-[#ff5722] rounded-full w-3 h-3 mr-4 mt-2 flex-shrink-0 shadow-sm"></div>
                                      <span className="text-gray-700 text-lg">
                                        {req}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {step.conclusion && (
                              <p className="text-[#003366] text-lg font-semibold">
                                {step.conclusion}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
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
                        Ready to Ship Your Yacht?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Yacht transport services can be a simple affair, with a
                      little knowledge and preparation. Rapid Auto Shipping's
                      yacht shipping is designed to keep all the tough parts of
                      the job to itself and let its customers enjoy the benefits
                      of yacht shipping. We invest heavily in our customer
                      support. Our customer support staff is always ready with
                      suggestions, and their tips always help in smoothing the
                      process. We know that the drivers are the backbone of any
                      shipping company, and that's the reason we hire the best,
                      and they are well compensated. <br /> Yacht shipping is a
                      specialty service that requires an expert in the field.
                      Our team of expert professionals is always eager to serve
                      you. So, look no further than Rapid Auto Shipping for your
                      yacht shipping services. Call us at (833) 433- 4447 or
                      email info@rapidautoshipping.com. One of our sales agents
                      will happily guide you for a stress-free, hassle-free, and
                      happy yacht shipping experience.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1752140443/Yatch_Shipping_2_dwragr.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={400}
                        loading="lazy"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
                              ? {
                                  backgroundColor: "#fff3f0",
                                  color: "#ff5722",
                                }
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
