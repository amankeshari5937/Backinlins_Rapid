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
  Wrench,
  FileText,
  CheckCircle,
  Award,
  MapPin,
  Clock,
  Shield,
  Phone,
  Users,
  Weight,
  Route,
  Zap,
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

  const costFactors = useMemo(
    () => [
      {
        number: 1,
        title: "Truck Size and Weight",
        description:
          "Heavier and bigger vehicles need specialized trailers, extra permits, and even escort vehicles, all of which increase the cost of shipping. For instance, bulldozers and articulated trucks need lowboy trailers, while step deck trailers suit forklifts and UTVs.",
        icon: <Weight className="h-8 w-8" />,
      },
      {
        number: 2,
        title: "Transport Distance",
        description:
          "The longer your equipment must travel, the more fuel, time, and logistics factor into it. Short-distance shipping costs up to $5 a mile, whereas cross-country shipping averages $1.75 a mile.",
        icon: <MapPin className="h-8 w-8" />,
      },
      {
        number: 3,
        title: "Shipping Route & Accessibility",
        description:
          "Very busy routes are less expensive because there is constant transport activity. If your heavy vehicle transport involves driving through remote or challenging terrain, though, costs can be higher because of added logistical complexity.",
        icon: <Route className="h-8 w-8" />,
      },
      {
        number: 4,
        title: "Type of Transport Service",
        description: "",
        icon: <Truck className="h-8 w-8" />,
        services: [
          {
            type: "Open-air transport",
            detail: "(on a flatbed or step deck trailer)",
            note: "is the cheapest.",
          },
          {
            type: "Enclosed transport",
            detail: "(like container shipping)",
            note: "is more protective but more costly.",
          },
          {
            type: "Roll-on/Roll-off (RO-RO)",
            detail:
              "shipping is a popular method of overseas shipping, providing a cost-effective option.",
          },
        ],
      },
      {
        number: 5,
        title: "Permits and Regulations",
        description:
          "Special permits are usually needed for oversized loads, particularly when traveling across state lines. Escort vehicles may be required in some instances, adding to the expense.",
        icon: <Shield className="h-8 w-8" />,
      },
      {
        number: 6,
        title: "Insurance Coverage",
        description:
          "Standard insurance is usually provided, but for heavy machinery of high value, extra insurance is advisable, which increases the overall price.",
        icon: <Award className="h-8 w-8" />,
      },
      {
        number: 7,
        title: "Urgency and Expedited Shipping",
        description:
          "If you require your equipment to be shipped in a hurry, expedited services will be more expensive. Flexible scheduling with standard shipments keeps costs low.",
        icon: <Clock className="h-8 w-8" />,
      },
    ],
    []
  );

  const whyChooseUs = useMemo(
    () => [
      {
        number: 1,
        title: "Heavy Equipment Shipping Expertise",
        description:
          "We have a long history of heavy hauling, moving a variety of vehicles such as bulldozers, articulated trucks, lowboy trailers, UTVs, forklifts, food trucks, buses, and others. Our drivers are trained to move oversized and specialty vehicles with the utmost care and precision.",
        icon: <Award className="h-8 w-8" />,
      },
      {
        number: 2,
        title: "Nationwide Oversized Vehicle Transport",
        description:
          "We provide large vehicle transportation services in all 50 states. No matter if you require a flatbed, step deck, or RGN trailer, we provide the appropriate equipment to transport your heavy vehicle safely over any mile.",
        icon: <MapPin className="h-8 w-8" />,
      },
      {
        number: 3,
        title: "Reasonable Pricing & Clear Quotes",
        description:
          "Our competitively priced heavy auto shipping services come without any hidden fees. We calculate our rates according to distance, vehicle size, permits, and shipping routes so you can expect an honest and reasonable quote for your oversized trucking services.",
        icon: <DollarSign className="h-8 w-8" />,
      },
      {
        number: 4,
        title: "Licensed, Bonded & Fully Insured",
        description:
          "Your heavy machine is worth a lot; we do not take its safety lightly. We are a fully licensed and insured company, offering extended coverage for high-value shipments to provide you peace of mind.",
        icon: <Shield className="h-8 w-8" />,
      },
      {
        number: 5,
        title: "24/7 Customer Support & Transparent Communication",
        description:
          "We provide shipment tracking and 24/7 customer support to keep you in the loop at every turn. Our logistics staff will answer your questions and keep you posted from pickup to delivery.",
        icon: <Phone className="h-8 w-8" />,
      },
      {
        number: 6,
        title: "Safe, On-Time Delivery You Can Trust",
        description:
          "We employ skilled heavy hauling drivers and have a well-fitted transport fleet to ensure safe and on-time deliveries. Our staff operates under strict safety measures to ensure your large vehicle is safe in transit.",
        icon: <Clock className="h-8 w-8" />,
      },
      {
        number: 7,
        title: "Easy Scheduling & Door to Door Service",
        description:
          "We offer convenient shipping service, such as door to door oversized auto transport and accommodating scheduling to suit your needs. Whether you need regular or expedited shipping, we tailor our services to provide maximum convenience.",
        icon: <CheckCircle className="h-8 w-8" />,
      },
    ],
    []
  );

  const shippingTips = useMemo(
    () => [
      {
        number: 1,
        title: "Know the Cost Factors",
        description:
          "The price of large vehicle transport varies based on factors such as:",
        icon: <DollarSign className="h-8 w-8" />,
        factors: [
          "Vehicle size & weight: Heavier, larger equipment needs specialized trailers.",
          "Transport distance: The longer the routes, typically the lower the mile cost.",
          "Route accessibility: Less accessible areas can lead to higher transport charges.",
          "Permits & escorts: Large loads can often require additional permits and pilot cars.",
          "Insurance coverage: High-dollar shipments might require additional protection.",
        ],
      },
      {
        number: 2,
        title: "Prepare Your Equipment for Transport",
        description:
          "To have a successful and safe shipping experience, use these prep steps:",
        icon: <Wrench className="h-8 w-8" />,
        factors: [
          "Clean the vehicle: Clear out dirt and debris for an easy inspection.",
          "Document its condition: Take high-resolution, time-stamped images before shipping.",
          "Secure loose parts: Remove or secure loose external parts that may be damaged.",
          "Check for leaks: Fix any leaks to avoid fluid spills during transit.",
          "Lower or remove attachments: Reduces height restrictions on oversized vehicles.",
        ],
      },
      {
        number: 3,
        title: "Select the Appropriate Trailer for Your Heavy Auto Shipping",
        description:
          "The trailer type depends on your transport requirement and vehicle size:",
        icon: <Truck className="h-8 w-8" />,
        factors: [
          "Flatbed trailers: Optimal for light to heavy equipment.",
          "Step deck trailers: Best suited for taller machinery such as UTVs and forklifts.",
          "Lowboy trailers: These are required for super heavy and high machinery such as bulldozers.",
          "RGN (Removable Gooseneck) trailers: Ideal for self-propelled equipment that will be driven on to the trailer.",
        ],
      },
      {
        number: 4,
        title: "Be Aware of Permit and Regulatory Requirements",
        description:
          "States also have certain regulations pertaining to oversized vehicle transport, i.e.:",
        icon: <Shield className="h-8 w-8" />,
        factors: [
          "Weight limits: Keeping total weight within legal limits.",
          "Escort vehicle regulations: Pilot cars are mandatory in some states for wide loads.",
          "Time limits: Some states ban heavy hauling during nights or weekends.",
        ],
      },
      {
        number: 5,
        title: "Understand the Estimated Delivery Time",
        description:
          "The time taken in the shipping of heavy autos varies with considerations like:",
        icon: <Clock className="h-8 w-8" />,
        factors: [
          "Distance: Cross-country shipments are longer than regional deliveries.",
          "Transport mode: Less Than Truckload shipments can take longer than truckloads.",
          "Weather and road conditions: Inclement weather and road closings will cause delays.",
        ],
      },
      {
        number: 6,
        title: "Work With a Trusted Heavy Equipment Transport Provider",
        description:
          "For secure, trustworthy, and affordable heavy hauling, it's essential to use the services of an experienced shipping company such as Rapid Auto Shipping. We take care of everything from permits to scheduling and make your large vehicle shipping hassle-free.",
        icon: <Users className="h-8 w-8" />,
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <FileText className="w-5 h-5" />,
        question: "Do I need special permits to ship heavy equipment?",
        answer:
          "Yes, oversized vehicle transport requires permits depending on the size and weight of the load. Our team handles all state and federal permit requirements, ensuring compliance with transportation laws.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "How long does it take to transport heavy equipment?",
        answer:
          "Shipping times depend on distance, route conditions, and permit approvals. Local deliveries: 1 to 3 days, Cross-country transport: 5 to 10 days, Complex oversized loads: May require extra time for permits and escorts.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Is my heavy equipment insured during transport?",
        answer:
          "Yes! All shipments are covered by comprehensive cargo insurance. Additional insurance options are available for high-value equipment if needed.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "How do I get a quote for heavy equipment shipping?",
        answer:
          "You can request a free, no-obligation quote by calling +1 (833) 233-4447 or filling out our online form. Our team will provide a detailed estimate based on your specific transport needs.",
      },
      {
        icon: <Wrench className="w-5 h-5" />,
        question: "Do I need to provide loading or unloading equipment?",
        answer:
          "It depends on the type of equipment being shipped. If your machinery is self-propelled, an RGN trailer allows for easy loading and unloading. A forklift or crane may be required for stationary equipment. We'll work with you to ensure all logistics are arranged.",
      },
      {
        icon: <Zap className="w-5 h-5" />,
        question: "Can I schedule emergency or expedited shipping?",
        answer:
          "Yes! We offer expedited heavy equipment shipping for urgent requests. If you need same-day or next-day pickup, contact us at +1 (833) 233-4447 to check availability.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Oversized Hauling | Heavy Equipment Shipping</title>
        <meta
          name="description"
          content="Need to transport your movable heavy equipment? We provide large vehicle transport service. Call on +1 (833) 233-4447 and get a free quote!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/heavy-equipment-shipping "
        />
        <meta
          property="og:title"
          content="Oversized Hauling | Heavy Equipment Shipping"
        />
        <meta
          property="og:description"
          content="Need to transport your movable heavy equipment? We provide large vehicle transport service. Call on +1 (833) 233-4447 and get a free quote!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/heavy-equipment-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1752058254/Nationwide_Heavy_Equipment_2_mrfnhm.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Heavy Equipment Shipping Service",
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
                "Specialized heavy equipment shipping services by Rapid Auto Shipping. We transport oversized machinery nationwide with full permit compliance, insurance, and expert logistics.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Do I need special permits to ship heavy equipment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, oversized vehicle transport requires permits depending on the size and weight of the load. Our team handles all state and federal permit requirements, ensuring compliance with transportation laws.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to transport heavy equipment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Shipping times depend on distance, route conditions, and permit approvals.\n\n- Local deliveries: 1 to 3 days\n- Cross-country transport: 5 to 10 days\n- Complex oversized loads: May require extra time for permits and escorts",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is my heavy equipment insured during transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! All shipments are covered by comprehensive cargo insurance. Additional insurance options are available for high-value equipment if needed.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I get a quote for heavy equipment shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You can request a free, no-obligation quote by calling +1 (833) 233-4447 or filling out our online form. Our team will provide a detailed estimate based on your specific transport needs.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need to provide loading or unloading equipment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It depends on the type of equipment being shipped. If your machinery is self-propelled, an RGN trailer allows for easy loading and unloading. A forklift or crane may be required for stationary equipment. We'll work with you to ensure all logistics are arranged.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I schedule emergency or expedited shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! We offer expedited heavy equipment shipping for urgent requests. If you need same-day or next-day pickup, contact us at +1 (833) 233-4447 to check availability.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/services/heavy-equipment-shipping",
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
                  name: "Services",
                  item: "https://rapidautoshipping.com/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "heavy-equipment-shipping",
                  item: "https://rapidautoshipping.com/services/heavy-equipment-shipping ",
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
          <section className="relative py-8  flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on Mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1752058254/Nationwide_Heavy_Equipment_2_mrfnhm.webp"
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
                    Nationwide Heavy Equipment{" "}
                    <span className="text-[#ff5722]">Shipping</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Rapid Auto Shipping specializes in oversized vehicle
                    transport and heavy equipment shipping, providing
                    stress-free transportation of large machinery and trucks of
                    any size to any destination. We deliver superior service at
                    affordable prices, supported by a nationwide team of
                    professional drivers eager to transport your equipment
                    safely and efficiently.
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
                        Heavy Equipment & Oversized Vehicle Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Heavy equipment is specialized, and large machinery is
                      employed in the construction, agriculture, and transport
                      industries. This includes cranes, bulldozers, excavators,
                      UTV, forklifts, and large vehicles like buses, tractors,
                      commercial vehicles, articulated vehicles, lowboys, and
                      food trucks. As these machines are essential to different
                      operations but cannot always be driven long distances,
                      effective heavy equipment shipping is important.
                      <br />
                      We transport movable equipment and oversized vehicles (not
                      general freight or non-motorized loads). If you need to
                      move construction machinery, farm equipment, or commercial
                      trucks, our professional heavy equipment transporters
                      deliver them safely and efficiently. With specialized
                      trailers and national coverage, we provide oversized
                      vehicle transport that is convenient and effortless.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1752058238/Nationwide_Heavy_Equipment_1_f0nvbw.webp"
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
            <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Truck className="hidden md:block h-12 w-12 text-[#ff5722] mr-3" />

                  <h2 className="text-4xl md:text-4xl font-bold">
                    Cost To Ship Heavy Vehicle?
                  </h2>
                </div>
                {/* Cost Overview */}
                <section className="py-8 ">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                      <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          Heavy equipment shipping and oversized vehicle
                          transport cost depends on a number of factors such as
                          the shipment's size, transportation distance, and mode
                          of shipping. The average cost of shipping a heavy
                          vehicle is between $1.75 and $5 per mile, depending on
                          the transport specs. Local transport is usually more
                          expensive per mile, whereas longer distances provide
                          reduced rates.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          To obtain the correct quote for shipping heavy
                          equipment, you should get our free customized quote.
                          We have clear and upfront pricing and tailored
                          shipping solutions to provide the best service at
                          affordable prices.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </header>

            {/* Factors Affecting Cost */}
            <section className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Factors Affecting The Cost Of Shipping Heavy Equipment And
                    Oversized Vehicles
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    A number of significant elements determine the total cost of
                    shipping heavy equipment:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {costFactors.map((factor, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-[#ff5722] rounded-full p-3 mr-4 text-white">
                          {factor.icon}
                        </div>
                        <div className="bg-[#003366] rounded-full w-8 h-8 flex items-center justify-center mr-3 text-white font-bold">
                          {factor.number}
                        </div>
                        <h3 className="text-lg font-bold text-[#003366]">
                          {factor.title}
                        </h3>
                      </div>

                      {factor.description && (
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {factor.description}
                        </p>
                      )}

                      {factor.services && (
                        <div className="space-y-3">
                          {factor.services.map((service, serviceIndex) => (
                            <div
                              key={serviceIndex}
                              className="flex items-start"
                            >
                              <div className="bg-[#ff5722] rounded-full w-2 h-2 mr-3 mt-2 flex-shrink-0"></div>
                              <div className="text-gray-700 text-sm">
                                <strong>{service.type}</strong>{" "}
                                {service.detail && (
                                  <span className="font-medium">
                                    {service.detail}
                                  </span>
                                )}{" "}
                                {service.note && <span>{service.note}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Truck className="hidden md:block h-12 w-12 text-[#ff5722] mr-3" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Why Choose Us For Large Vehicle Hauling?
                    </h2>
                  </div>
                  <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                    For heavy hauling and oversized vehicle transport, selecting
                    a company that is dependable ensures a smooth, safe, and
                    affordable experience. We focus on heavy auto shipping and
                    large vehicle transportation, ensuring your equipment
                    arrives safely and on time. Here's why we're the best
                    option:
                  </p>
                </div>
              </div>
            </header>

            {/* Why Choose Us Section */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {whyChooseUs.map((reason, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#ff5722]"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-[#ff5722] rounded-full p-3 mr-4 text-white">
                          {reason.icon}
                        </div>
                        <div className="bg-[#003366] rounded-full w-10 h-10 flex items-center justify-center mr-3 text-white font-bold text-lg">
                          {reason.number}
                        </div>
                        <h3 className="text-lg font-bold text-[#003366]">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tips Section */}
            <section className="py-8 bg-[#003366] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Tips And Things To Know About Heavy Auto Shipping
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                    Shipping heavy equipment and oversized trucks involves
                    planning in detail to make it a smooth and problem-free
                    experience. Whether you are shipping bulldozers, articulated
                    trucks, buses, or food trucks, knowing the main things about
                    heavy auto shipping will prevent delays and surprise
                    expenses. Below are some tips and things to note:
                  </p>
                </div>
              </div>
            </section>

            {/* Tips Content */}
            <section className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {shippingTips.map((tip, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-[#ff5722] rounded-full p-3 mr-4 text-white">
                          {tip.icon}
                        </div>
                        <div className="bg-[#003366] rounded-full w-10 h-10 flex items-center justify-center mr-3 text-white font-bold text-lg">
                          {tip.number}
                        </div>
                        <h3 className="text-lg font-bold text-[#003366]">
                          {tip.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {tip.description}
                      </p>

                      {tip.factors && (
                        <div className="space-y-2">
                          {tip.factors.map((factor, factorIndex) => (
                            <div key={factorIndex} className="flex items-start">
                              <div className="bg-[#ff5722] rounded-full w-2 h-2 mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">
                                {factor}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Heavy Hauling Across The Country Section */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Heavy Hauling Across The Country
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="bg-[#003366] rounded-xl p-8 text-white">
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="bg-[#ff5722] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <MapPin className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">
                          All 50 States
                        </h3>
                        <p className="text-sm text-gray-200">
                          Nationwide coverage for your heavy hauling needs
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-[#ff5722] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <Truck className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">
                          Specialized Trailers
                        </h3>
                        <p className="text-sm text-gray-200">
                          Flatbeds, lowboys, step decks, and RGN trailers
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-[#ff5722] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <Users className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">
                          Professional Drivers
                        </h3>
                        <p className="text-sm text-gray-200">
                          Experienced team for complex shipments
                        </p>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-lg leading-relaxed mb-4">
                        Oversized vehicle transport and heavy equipment shipping
                        take expertise, an appropriate trailer, and precise
                        planning. We provide heavy hauling services in all 50
                        states, getting your equipment to its destination safely
                        and efficiently.
                      </p>
                      <p className="text-lg leading-relaxed mb-4">
                        From moving construction equipment, farm vehicles, or
                        commercial trucks, we have the specialized trailers and
                        professional drivers to manage even the most intricate
                        shipments.
                      </p>
                      <p className="text-lg leading-relaxed mb-4">
                        Our staff oversees the entire process, from route
                        calculation and obtaining the required permits to safe
                        loading, transportation, and timely delivery. Having
                        access to flatbeds, lowboys, step decks, and RGN
                        trailers, we guarantee your shipment is hauled safely
                        regardless of its size and weight.
                      </p>
                      <p className="text-lg leading-relaxed font-semibold">
                        For reliable heavy auto shipping, trust our experts to
                        get the job done right.
                      </p>
                    </div>
                  </div>
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
                        Let's Get Started Safe & Reliable Heavy Equipment
                        Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Oversized vehicle transport and heavy equipment shipping
                      isn't merely transporting them from point A to point B; it
                      requires experience, precision, and accurate logistics
                      planning. At Rapid Auto Shipping, we do it all for you,
                      from choosing the right trailer to arranging permits and
                      ensuring hassle-free transit. <br />
                      With our extensive nationwide transportation network,
                      skilled staff, and safety as our priority, you can rely on
                      us to deliver your cargo on time and in top condition.{" "}
                      <br />
                      Call us today at +1 (833) 233-4447 to get a free quote!
                      Let us assist your large vehicle transportation with ease
                      and professionalism.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1752058247/Nationwide_Heavy_Equipment_3_n0jylo.webp"
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
                          isOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
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