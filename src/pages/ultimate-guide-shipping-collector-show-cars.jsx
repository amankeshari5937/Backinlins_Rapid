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
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

const Hello = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [activeSection, setActiveSection] = useState("enclosed-open");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleSection = (section) => {
  setActiveSection(activeSection === section ? null : section);
};

const toggleItem = (index) => {
  setOpenItems((prev) => {
    const newSet = new Set(prev);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    return newSet;
  });
};

  const faqData = [
    {
      icon: <Shield className="w-5 h-5" />,
      question: "What’s the safest way to ship a collector car?",
      answer:
        "Enclosed car transport in a dedicated, climate-controlled container minimizes exposure to weather and potential damage, making it the safest way to ship a collector car.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question:
        "How do I ensure my show car remains in good condition during transport?",
      answer:
        "To ensure the safety of your show car during transportation, thoroughly clean and inspect it, document its condition with photos, remove any loose items or accessories, and choose a reputable and insured car transport company.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "Can Rapid Auto Shipping handle custom vehicles?",
      answer:
        "Yes, Rapid Auto Shipping handles custom vehicles, offering specialized services tailored to unique needs, such as expedited shipping, enclosed transport for valuable cars, and door-to-door delivery.",
    },
  ];
  return (
    <>
      <Head>
        <title>
          Ultimate Guide to Shipping Collector Cars - Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Learn to ship collector cars & show cars safely with expert tips from Rapid Auto Shipping. Get a free quote for secure transport!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/ultimate-guide-shipping-collector-show-cars"
        />
        <meta
          property="og:title"
          content="Ultimate Guide to Shipping Collector Cars - Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Learn to ship collector cars & show cars safely with expert tips from Rapid Auto Shipping. Get a free quote for secure transport!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/ultimate-guide-shipping-collector-show-cars"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752318169/Shipping_Collector_Cars_2_qpvuit.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType:
                "Ultimate Guide to Shipping Collector Cars - Rapid Auto Shipping",
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
                "Learn to ship collector cars & show cars safely with expert tips from Rapid Auto Shipping. Get a free quote for secure transport!",
              url: "https://rapidautoshipping.com/ultimate-guide-shipping-collector-show-cars",
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
                  name: "Ultimate Guide to Shipping Collector Cars - Rapid Auto Shipping",
                  item: "https://rapidautoshipping.com/ultimate-guide-shipping-collector-show-cars",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752318169/Shipping_Collector_Cars_2_qpvuit.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752318169/Shipping_Collector_Cars_2_qpvuit.webp"
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
                    Auto transport for collector cars /{" "}
                    <span className="text-[rgb(255,87,34)]">
                      Shipping collector cars
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    lector cars are classic, exotic, vintage, or rare vehicles.
                    Collector car shipping is a specialized and secure car
                    shipping service designed for the safe transportation of
                    these prized possessions over long distances.
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
                        Introduction
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      "Shipping collector cars is not just moving a vehicle;
                      it's carrying a masterpiece cloaked in history and
                      precision. Each mile traveled is paved with care, ensuring
                      that every curve, every gleam, and every whisper of its
                      engine remains untouched by time or the journey. It’s not
                      about shipping a car—it’s about delivering a legacy on
                      wheels to its next stage of life." Simply describing a
                      dream shipping scenario for your collector car shipping is
                      easier said than done. However, our Rapid auto shipping
                      collector cars business team has toiled day in and day
                      out, making the above-described delivery of your collector
                      cars a reality for you, ensuring that it arrives in the
                      same pristine condition at the delivery point. A collector
                      car or show car is a rare, highly valuable, and unique
                      object that deserves top-notch service of the highest
                      quality.
                      <br />
                      Not all auto transport for collector cars companies have
                      the required experience in handling such delicate
                      consignments. At Rapid Auto Shipping, we know how to ship
                      a collector car, navigating the unpredictable highways and
                      long-distance travel, and delivering the masterpiece
                      vehicles with the utmost care that they deserve.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752318173/Shipping_Collector_Cars_1_ohqqr6.webp"
                        alt="Shipping Service - Professional Transport"
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
              style={{ backgroundColor: "#003366" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
              <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="text-center text-white">
                  <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                    Collector Car Shipping
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
                    Premium Protection for Your Automotive Treasures
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse delay-300"></div>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse delay-600"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Why Collector Cars Need Special Care */}
            <section
              id="section-why-special-care"
              className={`py-20 transition-all duration-1000 ${
                isVisible["section-why-special-care"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <Car className="w-16 h-16 mx-auto mb-6 text-[#ff5722] animate-bounce" />
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Why Collector and Show Cars Need Special Care
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div
                      className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                      style={{ borderColor: "#ff5722" }}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        Collector and show cars are highly valuable cars that
                        hold a very high sentimental value for their owners.
                        These cars represent a piece of automotive history and
                        are often kept in pristine condition, both for their
                        value and to showcase their beauty and craftsmanship.
                        These cars can be worth a significant amount of money,
                        making them valuable assets.
                      </p>
                    </div>

                    <div
                      className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                      style={{ borderColor: "#003366" }}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        Collector cars, especially vintage or classic ones,
                        represent a tangible link to the past with their design,
                        engineering, and cultural trends of their era, making
                        them essential pieces of automotive history. A lot of
                        sentiment and passion are invested in its engineering
                        and craftsmanship, and these cars are often kept in
                        excellent or even in their original condition, which
                        requires a lot of care and regular maintenance.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div
                      className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                      style={{ borderColor: "#ff5722" }}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        Collector cars need meticulous care as they participate
                        in car shows and competitions where they are judged on
                        their authenticity, condition, and overall presentation.
                        The value of collector cars can appreciate over time,
                        making them a form of investment that further motivates
                        collectors to maintain them in good condition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Preparations Section */}
            <section
              id="section-preparations"
              className={`py-20 transition-all duration-1000 ${
                isVisible["section-preparations"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <CheckCircle className="w-16 h-16 mx-auto mb-6 text-[#ff5722] animate-pulse" />
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Preparations Required for Show or Collector Car Shipping
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Before shipping a collector car, specific preparations are
                    required that involve several steps. Here's a checklist to
                    help you prepare for show car transport!
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Clean the exterior",
                      content:
                        "Thoroughly wash and clean the exterior of your classic car. Remove any dirt, grime, or debris that may have accumulated. Don't forget those harder-to-reach areas, such as wheels, undercarriage, and grille.",
                      icon: "🧽",
                    },
                    {
                      title: "Document the condition",
                      content:
                        "Grab your camera! Be sure to take detailed photographs of your classic car from all angles, capturing any existing scratches, dents, or imperfections.",
                      icon: "📸",
                    },
                    {
                      title: "Empty the vehicle",
                      content:
                        "Remove all your personal belongings, random loose items, or accessories from the interior (if applicable). This helps reduce the risk of damage during transit and ensures that the car is empty and ready for shipping.",
                      icon: "📦",
                    },
                    {
                      title: "Secure or remove loose parts",
                      content:
                        "If your collector car has any removable or loose parts, such as spoilers, antennas, or mirrors, either secure them properly or remove them and pack them separately. If your car has a convertible top, make sure it is securely fastened or properly stowed.",
                      icon: "🔧",
                    },
                    {
                      title: "What are the fluid levels?",
                      content:
                        "Ensure that all fluid levels, including fuel, oil, and coolant, are at appropriate levels.",
                      icon: "⛽",
                    },
                    {
                      title: "Check out battery and tire pressure",
                      content:
                        "Ensure that the battery is fully charged and securely connected. Then, check tire pressure and inflate them to the recommended levels.",
                      icon: "🔋",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-4xl mb-4 text-center">
                        {item.icon}
                      </div>
                      <h3
                        className="text-xl font-bold mb-4 text-center"
                        style={{ color: "#003366" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-center leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Shipping Options */}
            <section
              id="section-shipping-options"
              className={`py-20 transition-all duration-1000 ${
                isVisible["section-shipping-options"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <Truck className="w-16 h-16 mx-auto mb-6 text-[#ff5722] animate-bounce" />
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Choosing the Best Shipping Options for Collector Cars
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    When shipping a collector car, consider enclosed transport
                    for maximum protection or container shipping for added
                    security. Always choose a reputable and insured carrier
                    after verifying their credentials, checking reviews, and
                    following expert tips for shipping show cars. Companies
                    offering door-to-door shipping should be given preference
                    because it's hassle-free and convenient.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Enclosed vs Open Transport */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection("enclosed-open")}
                      className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div>
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: "#003366" }}
                        >
                          Enclosed vs Open Transport
                        </h3>
                        <p className="text-gray-600">
                          Understanding the difference between enclosed and open
                          transport options
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-8 h-8 transition-transform duration-200 ${
                          activeSection === "enclosed-open" ? "rotate-180" : ""
                        }`}
                        style={{ color: "#ff5722" }}
                      />
                    </button>

                    {activeSection === "enclosed-open" && (
                      <div className="px-8 pb-8 animate-fade-in">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div
                            className="p-6 rounded-xl border-2"
                            style={{ borderColor: "#ff5722" }}
                          >
                            <h4
                              className="text-xl font-bold mb-4"
                              style={{ color: "#ff5722" }}
                            >
                              Enclosed Transport (Recommended)
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              This is the preferred method for collector cars as
                              it provides the best protection against weather,
                              debris, and potential damage during transit.
                              Enclosed transport offers an added layer of
                              security to your valuable collector cars.
                            </p>
                          </div>

                          <div
                            className="p-6 rounded-xl border-2"
                            style={{ borderColor: "#003366" }}
                          >
                            <h4
                              className="text-xl font-bold mb-4"
                              style={{ color: "#003366" }}
                            >
                              Open Transport
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              While cheaper, open transport exposes your vehicle
                              to the elements and is generally not recommended
                              for valuable or classic cars.
                            </p>
                          </div>
                        </div>

                        <div
                          className="mt-8 p-6 rounded-xl"
                          style={{ backgroundColor: "#f0f8ff" }}
                        >
                          <p className="text-gray-700 leading-relaxed">
                            At RAPID AUTO SHIPPING, we have been providing
                            transport services for more than 14 years with
                            expertise. Our{" "}
                            <a href="https://rapidautoshipping.com/enclosed-car-transport" className="text-blue-700 text-decoration-underline">
                              enclosed vehicle shipping
                            </a>{" "}
                            is one of the best in the industry, as we only work
                            with carriers that employ the most secure, safe, and
                            dependable modes of transportation. We take pride in
                            our enclosed collector car shipping as our enclosed
                            car carrier drivers are specialists in transporting
                            collector cars.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Door-to-door vs Terminal-to-terminal */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection("door-terminal")}
                      className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div>
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: "#003366" }}
                        >
                          Door-to-door vs. Terminal-to-terminal
                        </h3>
                        <p className="text-gray-600">
                          Choose between convenient pickup/delivery or terminal
                          services
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-8 h-8 transition-transform duration-200 ${
                          activeSection === "door-terminal" ? "rotate-180" : ""
                        }`}
                        style={{ color: "#ff5722" }}
                      />
                    </button>

                    {activeSection === "door-terminal" && (
                      <div className="px-8 pb-8 animate-fade-in">
                        <p className="text-gray-700 leading-relaxed">
                          Door-to-door transport for collector cars involves
                          pickup and delivery at the sender's and receiver's
                          specified locations. In contrast, terminal-to-terminal
                          transport requires the shipper to drop off and pick up
                          goods at designated terminals.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Cost Factors */}
            <section
              id="section-cost-factors"
              className={`py-20 transition-all duration-1000 ${
                isVisible["section-cost-factors"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <DollarSign className="w-16 h-16 mx-auto mb-6 text-[#ff5722] animate-pulse" />
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Cost Factors for Shipping Collector and Show Cars
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    Shipping collector cars involves several cost factors,
                    including distance, vehicle type (open vs. enclosed
                    transport), seasonal demand, and the urgency of the service.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      title: "Distance",
                      content:
                        "For Auto transport for collector cars, the cost is generally directly proportional to the distance; the longer the distance, the higher the shipping cost due to increased fuel, time, and resource requirements.",
                      icon: <MapPin className="w-8 h-8" />,
                    },
                    {
                      title: "Vehicle Type and Size",
                      content:
                        "Collector cars require specialized handling, secure car shipping, and Enclosed car transport that may incur higher costs. These cars are often big and heavy, which leads to higher fuel costs.",
                      icon: <Car className="w-8 h-8" />,
                    },
                    {
                      title: "Open vs. Enclosed Transport",
                      content:
                        "Enclosed transport offers better protection for valuable vehicles, but it also incurs higher costs. Open transportation is sometimes risky, but it is less expensive.",
                      icon: <Shield className="w-8 h-8" />,
                    },
                    {
                      title: "Seasonal Demand",
                      content:
                        "Shipping during peak seasons (like summer or holidays) can lead to higher prices due to increased demand.",
                      icon: <Clock className="w-8 h-8" />,
                    },
                    {
                      title: "Urgency",
                      content:
                        "Expedited or time-sensitive shipping services will likely come with a premium.",
                      icon: <Star className="w-8 h-8" />,
                    },
                    {
                      title: "Fuel Prices",
                      content:
                        "Fluctuations in fuel prices can impact the overall cost of auto transport for collector cars.",
                      icon: <DollarSign className="w-8 h-8" />,
                    },
                    {
                      title: "Location",
                      content:
                        "The location of the pickup and delivery can also affect the cost",
                      icon: <MapPin className="w-8 h-8" />,
                    },
                  ].map((factor, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-[#ff5722] mb-4 flex justify-center">
                        {factor.icon}
                      </div>
                      <h3
                        className="text-lg font-bold mb-3 text-center"
                        style={{ color: "#003366" }}
                      >
                        {factor.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {factor.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Rapid Auto Shipping */}
            <section
              id="section-why-choose"
              className={`py-20 transition-all duration-1000 ${
                isVisible["section-why-choose"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <Star className="w-16 h-16 mx-auto mb-6 text-[#ff5722] animate-bounce" />
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Why Choose Rapid Auto Shipping for Collector Car Shipping?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    At Rapid Auto Shipping, we know how to ship a collector car
                    safely. It is a sentimental possession rather than just a
                    car. Whether your collector car is being sold, bought, or
                    relocated, our car shipping experts guarantee hassle-free,
                    safe, and secure transportation. Here's why entrusting your
                    beloved car to our reliable hands is the best solution:
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      title: "1. Superior Protection for Your Collector Car:",
                      content:
                        "Due to their value and delicate components, collector car vehicles require more meticulous care. Our included transportation choice ensures your car arrives in perfect condition by providing maximum protection from weather, road debris, and potential damage.",
                      icon: <Shield className="w-12 h-12" />,
                    },
                    {
                      title: "2. Expert Handling by Trained Professionals:",
                      content:
                        "Our staff specializes in high-value, collector car transport solutions. Using industry-best loading techniques and secure methods to prevent movement during transit, our qualified drivers treat collector cars with the utmost care for secure car shipping.",
                      icon: <Users className="w-12 h-12" />,
                    },
                    {
                      title: "3. Fully Insured for Your Peace of Mind:",
                      content:
                        "Your vehicle's safety comes first. Comprehensive insurance coverage is included in our collector or show car transport program, so you can rest assured knowing your collector car is safe throughout the entire trip.",
                      icon: <CheckCircle className="w-12 h-12" />,
                    },
                    {
                      title: "4. Hassle-Free and Convenient Transport:",
                      content:
                        "Long-distance driving in a collector car can cause unnecessary wear and tear. Your car is safely delivered with our expert collector vehicle transport service, saving you extra mileage, mechanical problems, and travel costs.",
                      icon: <Truck className="w-12 h-12" />,
                    },
                    {
                      title: "5. Flexible Transport Options to Fit Your Needs:",
                      content:
                        "Based on your budget and the level of protection required, we provide both open and enclosed transportation choices. While open transport is a budget-friendly option for collector car owners seeking reasonably priced collector vehicle shipping, enclosed car transport offers the highest level of security for your valuable and highly specialized cars.",
                      icon: <Star className="w-12 h-12" />,
                    },
                  ].map((reason, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-6">
                        <div className="text-[#ff5722] flex-shrink-0">
                          {reason.icon}
                        </div>
                        <div>
                          <h3
                            className="text-2xl font-bold mb-4"
                            style={{ color: "#003366" }}
                          >
                            {reason.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {reason.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
                    <p className="text-gray-700 leading-relaxed">
                      As one of the best collector car transport companies,
                      Rapid Auto Shipping's collector cars team takes pride in
                      serving its customers efficiently. Our goal is to provide
                      exceptional auto shipping solutions, tailored explicitly
                      for vintage and classic cars. Our knowledge, modern safety
                      precautions, and dedication to customer happiness ensure a
                      flawless and worry-free delivery.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <style jsx>{`
              @keyframes fade-in-up {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes fade-in {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }

              .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out forwards;
              }

              .animate-fade-in {
                animation: fade-in 0.3s ease-out forwards;
              }

              .delay-200 {
                animation-delay: 0.2s;
              }

              .delay-300 {
                animation-delay: 0.3s;
              }

              .delay-600 {
                animation-delay: 0.6s;
              }
            `}</style>
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
                      "Shipping a collector car is a task that demands
                      precision, care, and reliability. From selecting the right
                      transportation method to collaborating with a trusted
                      shipping partner, every step plays a crucial role in
                      ensuring your valuable vehicle arrives safely and in
                      pristine condition. By prioritizing research, preparation,
                      and effective communication, car enthusiasts can navigate
                      the shipping process with confidence, thereby preserving
                      both the condition and value of their cherished
                      automobiles. Whether you're shipping vintage cars cross
                      country or overseas, remember that with the right
                      approach, your prized possession is in good hands."
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752318169/Shipping_Collector_Cars_2_qpvuit.webp"
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

export default Hello;
