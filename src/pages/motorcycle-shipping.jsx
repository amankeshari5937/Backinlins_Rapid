"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import {
  Truck,
  Plus,
  Minus,
  Car,
  DollarSign,
  Wrench,
  Package,
  Fuel,
  CheckCircle,
  Globe,
  MapPin,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";

// Dynamic import for below-the-fold component (defer loading)
const StatsSection = dynamic(
  () => import("@/components/CommonComponents/StatsSection"),
  { ssr: false }
);

const Hello = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Domestic Motorcycle Shipping",
      description:
        "Our domestic motorcycle shipping in the US offers transportation of motorcycles within the country's borders, encompassing all 50 states, Washington, D.C., and Puerto Rico. We work with the best motorcycle movers, offering nationwide coverage and fast delivery to provide you with the best motorcycle delivery service. The team at Rapid Auto Shipping has mastered the art of shipping a motorcycle across the country. This service caters to various needs, such as relocating, buying or selling bikes, or attending events, with options ranging from door-to-door to terminal-to-terminal transport.",
      icon: <MapPin className="h-8 w-8" />,
      color: "from-[#ff5722] to-[#ff6b47]",
    },
    {
      title: "International Motorcycle Shipping",
      description:
        "International motorcycle shipping involves transporting motorcycles overseas, utilizing options such as air or sea freight, and often includes services like crating, insurance, and customs clearance to ensure safe and efficient delivery. For over 14 years, our team has shipped motorcycles worldwide to collectors, dealers, auction houses, and adventurers. We provide cost-effective motorcycle exports through our warehouses in California, Florida, and New Jersey.",
      icon: <Globe className="h-8 w-8" />,
      color: "from-[#003366] to-[#004080]",
      link: "https://rapidautoshipping.com/services/international-motorcycle-shipping",
    },
    {
      title: "Enclosed vs. Open Transport",
      description:
        "Our company provides enclosed motorcycle shipping services, where we transport your motorbike in a covered vehicle. Dealers often prefer using this mode of transportation, particularly when delivering new motorcycles to customers. Enclosed shipments are also a preferred choice for owners of unique or expensive bikes, as they provide superior protection from weather and road debris. However, this service is a little costly due to the added value it offers. Open motorcycle shipping requires an open carrier, such as a designated trailer or flatbed. Open transport is more affordable but exposes the bike to the elements. Transporting motorcycles locally is commonly carried out using smaller open motorcycle trailers designed to hold 1-4 bikes. Long-distance open transport of bikes, on the other hand, reduces motorcycle shipping costs, making it a cost-effective option and facilitating expedited freight delivery.",
      icon: <Shield className="h-8 w-8" />,
      color: "from-[#ff5722] to-[#ff6b47]",
    },
    {
      title: "Expedited Motorcycle Transport",
      description:
        "For users needing urgent shipping, expedited motorcycle transport is the ideal choice for Bike transport. It prioritizes speed and efficiency to ensure rapid delivery of motorbikes. However, this may be costlier than the standard delivery. Motorcycle dealers use it for quick customer delivery, as well as for individuals who want their bike moved quickly from one place to another. Our transport carriers specialize in expedited motorcycle shipping to ensure fast delivery of a bike while mitigating the risks of damage. Our expedited motorcycle shipping is available to clients throughout the United States.",
      icon: <Clock className="h-8 w-8" />,
      color: "from-[#003366] to-[#004080]",
    },
  ];

  const costFactors = [
    {
      factor: "Distance",
      description:
        "The farther the motorcycle needs to travel, the higher the shipping cost.",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      factor: "Motorcycle Size and Weight",
      description:
        "Larger and heavier motorcycles generally cost more to ship, as they require more space and resources.",
      icon: <Package className="h-6 w-6" />,
    },
    {
      factor: "Type of Service",
      description:
        "Open car shipping (where the motorcycle is transported on an open trailer) is typically less expensive than enclosed transport (where the bike is placed inside a covered container).",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      factor: "Fuel Costs",
      description:
        "Fluctuations in fuel prices can directly impact shipping costs, as fuel is a significant expense for transportation companies.",
      icon: <Fuel className="h-6 w-6" />,
    },
    {
      factor: "Demand",
      description:
        "During peak seasons or periods of high demand, shipping costs may increase as companies adjust prices to reflect higher demand.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      factor: "Insurance",
      description:
        "Shipping companies often charge for insurance to cover potential damage or loss during transit, and this cost varies based on the motorcycle's value and weight.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      factor: "Accessorial Fees",
      description:
        "Additional fees, such as those for special handling, pick-up or delivery at remote locations, or for waiting times, can also increase the overall cost.",
      icon: <DollarSign className="h-6 w-6" />,
    },
  ];

  const preparationSteps = [
    "3/4 Tank of gas or less",
    "Charge the battery (not required, but recommended)",
    "Thoroughly clean your motorcycle (not required, but recommended)",
    "Tires properly Inflated",
    "Check and repair fluid leaks",
    "Make sure the motorcycle is capable of rolling",
    "The steering column is unlocked",
    "Fold all mirrors (if applicable)",
    "Keys and paperwork (i.e., bill of sale and title) cannot be shipped with the motorcycle.",
    "No personal items can be shipped (e.g., helmets, GPS units, video cameras) and should be removed before shipping.",
  ];

  const faqData = [
    {
      icon: <Shield className="w-5 h-5" />,
      question: "How do you ship motorcycles safely?",
      answer:
        "We ship motorcycles using either enclosed or open carriers, with soft tie-downs and wheel chocks to secure the bike. Enclosed transport is recommended for added protection from weather and road debris.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Is motorcycle shipping available nationwide?",
      answer:
        "Yes! We offer motorcycle transport services to all 50 states, including door-to-door delivery for residential and commercial locations.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "How much does it cost to ship a motorcycle?",
      answer:
        "The cost depends on distance, transport type (open or enclosed), bike size, and delivery time. Request a free, no-obligation quote for exact pricing.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is my motorcycle insured during transport?",
      answer:
        "Absolutely. All motorcycle shipments are fully insured, and you'll receive a detailed inspection report before and after delivery.",
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      question: "Can I ship a non-running or damaged motorcycle?",
      answer:
        "Yes. We transport both running and non-running motorcycles. Just let us know the condition when booking so we can prepare the proper loading equipment.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      question: "How do I prepare my motorcycle for shipping?",
      answer:
        "Clean the bike, remove personal items, disconnect the alarm, and keep the gas tank only about ¼ full. Our team will provide a full prep checklist after booking.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Motorcycle Shipping Services | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Need reliable motorcycle shipping? Rapid Auto Shipping offers affordable, secure, door-to-door motorcycle transport nationwide. Get instant quotes today."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/motorcycle-shipping"
        />
        {/* FIX: Preload LCP image for faster loading */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_1600/v1752154088/Motorcycle_Shipping_1_xkkldo.webp"
        />
        <meta
          property="og:title"
          content="Motorcycle Shipping, Motorcycle Transport | (833) 2333-4447"
        />
        <meta
          property="og:description"
          content="Need reliable motorcycle shipping? Rapid Auto Shipping offers affordable, secure, door-to-door motorcycle transport nationwide. Get instant quotes today."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/motorcycle-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752154088/Motorcycle_Shipping_1_xkkldo.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Motorcycle Shipping",
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
                "Need reliable motorcycle shipping? Rapid Auto Shipping offers affordable, secure, door-to-door motorcycle transport nationwide. Get instant quotes today.",
              url: "https://rapidautoshipping.com/motorcycle-shipping",
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
                  name: "motorcycle-shipping",
                  item: "https://rapidautoshipping.com/motorcycle-shipping",
                },
              ],
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          {/* HERO SECTION - OPTIMIZED FOR LCP */}
          {/* FIX: Reduced height from min-h-screen to min-h-[70vh] */}
          <section className="relative py-8 min-h-[70vh] flex items-center w-full">
            <div className="absolute inset-0">
              {/* FIX: Optimized Image - removed placeholder blur, added fetchPriority, using fill */}
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_1600/v1752154088/Motorcycle_Shipping_1_xkkldo.webp"
                alt="Professional Motorcycle Shipping Service"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover"
              />
              {/* FIX: Single overlay instead of 4 overlays + SVG + blur */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center z-10 px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:space-y-8">
                {/* FIX: Removed backdrop-blur-lg, simplified background */}
                <div className="space-y-4 sm:space-y-6 bg-[#001933]/60 max-w-3xl drop-shadow-xl rounded-lg p-3 sm:p-4">
                  <h1
                    className="text-5xl sm:text-6xl lg:text-5xl drop-shadow-2xl font-bold text-center sm:text-left text-white"
                    style={{ fontSize: "50px" }}
                  >
                    Motorcycle Shipping Made Easy with{" "}
                    <span className="text-[rgb(255,87,34)]">
                      Rapid Auto Shipping
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    At Rapid Auto Shipping, we operate like a motorcycle engine:
                    compact, powerful, and reliable. Our nationwide motorcycle
                    shipping service combines safety, efficiency, and
                    affordability. Whether you're buying or selling a bike,
                    relocating, attending events, or transporting for auctions
                    or museums, we ensure stress-free delivery. With expert
                    handling, competitive rates, and coast-to-coast coverage, we
                    treat your bike with the care it deserves. So if you're
                    searching for the best motorcycle shipping company near you,
                    choose Rapid Auto Shipping.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto">
                <TransportForm />
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Why Choose Rapid Auto Shipping for Motorcycle Transport?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Rapid Auto Shipping is a force to be reckoned with in the
                      auto shipping for motorcycle transport. With over 14 years
                      of experience in the auto shipping industry, we have
                      earned the respect of our customers through our
                      comprehensive range of services, including door-to-door
                      motorcycle shipping, enclosed motorcycle transport
                      options, real-time tracking, and licensed and insured
                      business practices. Our door-to-door motorcycle shipping
                      and enclosed motorcycle transport options provide
                      peace-of-mind transport and a hassle-free shipping
                      experience.
                      <br /> <br />
                      Our team of professional shipping advisors is dedicated to
                      finding the optimal carrier solution for every motorcycle
                      we transport. We work tirelessly, 365 days a year, to
                      ensure the best possible motorcycle transport services for
                      our customers. Our haulers meet the insurance standard,
                      and motorcycle insurance is included in our motorcycle
                      shipping quote.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10">
                      {/* FIX: Converted <img> to <Image> with lazy loading and Cloudinary optimization */}
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_800/v1752154099/Motercycle_shipping_3_aezvuk.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={400}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="min-h-screen bg-gray-50">
            <header className="bg-gradient-to-br from-[#003366] via-[#004080] to-[#003366] text-white py-16 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center">
                  <div
                    className={`flex items-center justify-center mb-6 transform transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                      Our Motorcycle Shipping Services
                    </h2>
                  </div>
                  <p
                    className={`text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto transform transition-all duration-1000 delay-300 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    Motorcycle shipping is the art of transporting motorcycles
                    from one destination to another. It is often done using
                    specialized equipment and processes to avoid damage. At
                    Rapid Auto Shipping, we specialize in the art of motorcycle
                    shipping services and offer a range of services to cater to
                    our customers' needs in various aspects of motorcycle
                    shipping. Our Domestic Motorcycle Shipping, International
                    Motorcycle Shipping, Enclosed vs. Open Transport, and
                    Expedited Motorcycle Transport Services cater to the diverse
                    needs of our customers and meet all their requirements.
                  </p>
                </div>
              </div>
            </header>

            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8">
                  <div className="space-y-8">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="transform transition-all duration-500 cursor-pointer"
                        onClick={() => setActiveService(index)}
                      >
                        <div
                          className={`bg-gradient-to-r ${service.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="bg-white/20 rounded-full p-3 mr-4 backdrop-blur-sm">
                              {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-white/90 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Cost Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
                    How Much Does Motorcycle Shipping Cost with Rapid Auto
                    Shipping?
                  </h2>
                  <div className="w-32 h-1 bg-[#ff5722] mx-auto mb-8"></div>
                  <div className="max-w-6xl mx-auto">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      The cost to ship a motorcycle in the US depends on several
                      factors, including distance, bike size, transport type
                      (open or enclosed), location, and time of year. At Rapid
                      Auto Shipping, we offer the best and most affordable
                      motorcycle shipping costs. On average, prices typically
                      range from $180 to $300 for journeys under 1,000 miles and
                      from $300 to $700 for journeys exceeding 1,000 miles.
                    </p>
                    <p className="text-lg text-gray-600">
                      Several factors are taken into consideration when
                      estimating the cost of shipping a motorcycle. Here's a
                      more detailed breakdown of the factors:
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {costFactors.map((factor, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-center mb-6">
                        <div className="bg-gradient-to-br from-[#ff5722] to-[#ff6b47] rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white">
                          {factor.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#003366] group-hover:text-[#ff5722] transition-colors duration-300">
                          {factor.factor}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-center">
                        {factor.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* How to Ship Section */}
            <section className="py-16 bg-[#003366] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    How to Ship a Motorcycle with Rapid Auto Shipping
                  </h2>
                  <div className="w-32 h-1 bg-[#ff5722] mx-auto mb-8"></div>
                  <p className="text-xl">
                    How to ship a motorcycle across the country? The answer to
                    this question is given below in 3 easy steps.
                  </p>
                </div>

                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="bg-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/15 transition-all duration-500">
                    <div className="flex items-center mb-8">
                      <h3 className="text-3xl md:text-4xl font-bold">
                        Get a quote and book your order
                      </h3>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Our cost shipping calculator for motorcycle transport is
                      an easy way to get an accurate price, thanks to the help
                      of our dedicated auto transportation route professionals.
                      Contact us at (833) 233 4447 or chat with a Rapid Auto
                      Shipping representative online. Our motorcycle transport
                      specialists will review the shipping process with you and
                      provide a customized shipping quote. After getting your
                      personalized quote, book your order.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/15 transition-all duration-500">
                    <div className="flex items-center mb-8">
                      <h3 className="text-3xl md:text-4xl font-bold">
                        Prepare your motorcycle for transport
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {preparationSteps.map((step, index) => (
                        <div
                          key={index}
                          className="flex items-start bg-white/5 rounded-xl p-4"
                        >
                          <div className="bg-[#ff5722] rounded-full w-3 h-3 mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-white/90">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/15 transition-all duration-500">
                    <div className="flex items-center mb-8">
                      <h3 className="text-3xl md:text-4xl font-bold">
                        Motorcycle pick-up and delivery
                      </h3>
                    </div>
                    <p className="text-lg leading-relaxed">
                      On your scheduled pickup date, our driver will contact you
                      to arrange a suitable pickup time after the motorcycle
                      inspection and document signing, and the bike will be
                      collected. During the transit period, you can track your
                      shipment by calling our 24/7 customer service and
                      providing the booking number. Our carrier vehicles are
                      equipped with GPS tracking facilities, allowing you to
                      track your shipment and contact the driver for an update.
                      Once your bike reaches its destination, the driver will
                      contact you for the delivery. At the delivery point, the
                      motorcycle will be securely offloaded. Inspect the bike
                      and sign the bill of lading. Finally, pay the driver the
                      balance due in the form of cash, money order, or a
                      Cashier's check, and the motorcycle delivery service is
                      complete.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* FIX: StatsSection is now dynamically imported */}
          <StatsSection />

          {/* Quote Section */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Get Your Free Motorcycle Shipping Quote Today
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Whether you've just purchased new wheels or are embarking
                      on a biking adventure, Rapid Auto Shipping offers secure,
                      safe, and reliable motorcycle shipping to meet your needs.
                      Trust us to handle the transportation of your motorcycle.
                      Our company offers exceptional transportation services at
                      an unbeatable cost. To get your motorcycle shipping quotes
                      online at Rapid Auto Shipping, You can also use the
                      following two options to determine the cost of motorcycle
                      shipping. Please call us toll-free at +1 (833) 233-4447 or
                      complete our online quote calculator form. Both methods
                      will provide you with the necessary information. We are
                      happy to be of service to you, as we believe in earning
                      our success by serving others, not at the expense of
                      others.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10">
                      {/* FIX: Converted <img> to <Image> with lazy loading and Cloudinary optimization */}
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_800/v1752154092/Motercycle_Shipping_2_bswvqc.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={400}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div
            className="min-h-screen py-12 px-4"
            style={{
              background:
                "linear-gradient(135deg, #f8fafc 0%, #fff7ed 50%, #f0f9ff 100%)",
            }}
          >
            <div className="max-w-7xl mx-auto">
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