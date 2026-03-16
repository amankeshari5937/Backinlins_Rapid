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
  Users,
  Star,
  Package,
  CheckCircle,
  GraduationCap,
  Calendar,
  Award,
  ArrowRight,
  User,
  Fuel,
  Wrench,
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
        title: "Ship Your Personal Items in The Car",
        icon: <Package className="w-6 h-6" />,
        description:
          "We enable you to transport your necessities with your automobile, unlike many other auto shipping companies that prohibit personal belongings in your car while it is in transit. You can save time and money by not having to pay for separate luggage transportation thanks to this extra convenience. However, to save extra costs, we advise keeping the overall weight within the carrier's legal bounds (about 100 pounds).",
      },
      {
        title: "Affordable Car Rental Services",
        icon: <Car className="w-6 h-6" />,
        description:
          "While you wait for your car to be delivered, we give you access to reasonably priced car rental options in case you need a temporary vehicle. You can carry on with your daily schedule without any problems thanks to our reliable and affordable automobile rental service. Our goal is to ensure that the entire shipping process is as seamless and economical as possible.",
      },
      {
        title: "Rapid's Price Guarantee",
        icon: <Award className="w-6 h-6" />,
        description:
          "Our dedication to affordability and honesty is unwavering. With Rapid Auto Shipping, you won't ever have to be concerned about unforeseen or hidden costs. We make extra measures with our price guarantee to make sure the estimate you get matches the price you pay. By offering the most reasonable prices in the market, we hope to make auto shipping affordable for everyone.",
      },
      {
        title: "Damage-Free Guarantee",
        icon: <Shield className="w-6 h-6" />,
        description:
          "Because we recognize how expensive your car is, we put safety first during the whole shipping procedure. Our fully insured carriers and skilled drivers make sure your automobile gets to its destination in the same condition as when it was picked up. Thanks to our effective insurance coverage, you may rest easy knowing that you are fully covered in the unlikely case of damage.",
      },
      {
        title: "We Work Seven Days a Week",
        icon: <Clock className="w-6 h-6" />,
        description:
          "In contrast to many transport businesses with set hours, Rapid Auto Shipping is open seven days a week. Our committed staff is here to help whenever you need it, whether it's with booking, pickup, tracking your shipments, delivery, or addressing any issues. Your car shipping demands will be satisfied promptly thanks to our dedication to providing round-the-clock service.",
      },
      {
        title: "Our Standard Delivery Service is Better than Expedited Delivery",
        icon: <Truck className="w-6 h-6" />,
        description:
          "Our standard delivery service is intended to be equally effective without incurring excessive expenses, even if expedited shipping is frequently promoted as the fastest choice. Our well-planned routes and timetables provide dependable and timely delivery without the additional cost of rush fees. You can count on us to deliver your car in a timely manner and at the best price.",
      },
    ],
    []
  );

  const shippingTypes = useMemo(
    () => [
      {
        title: "Cheap Auction Car Shipping",
        description:
          "Did you win a car at an auction? We offer affordable transportation services to deliver your just-acquired car in a timely and safe manner, guaranteeing a hassle-free experience.",
      },
      {
        title: "Cheap Reseller Car Shipping",
        description:
          "We provide reasonably priced shipping options if you're a reseller who needs to transfer cars regularly. You can keep your inventory under control without going overboard with transportation expenses.",
      },
      {
        title: "Cheap Rental Car Shipping",
        description:
          "For fleet management, rental organizations rely on effective logistics. For safe and efficient transportation of rental cars between sites, we provide the cheapest shipping services.",
      },
      {
        title: "Cheap Classic Car Shipping",
        description:
          "We recognize the sentimental and monetary worth of vintage automobiles. Your vintage car will arrive in flawless shape and at a favorable price thanks to our specialized, affordable shipping services.",
      },
      {
        title: "Cheap Exotic Car Shipping",
        description:
          "Luxury and exotic vehicles need special care. To keep expensive cars safe while in transit, we offer enclosed transport services and specialist handling as part of our cost-effective yet secure shipping solutions.",
      },
      {
        title: "Cheap Non-Running Car Shipping",
        description:
          "Do you need to move a car that isn't working? We provide cheap options for non-running vehicles, utilizing the appropriate tools and carriers to guarantee seamless transportation.",
      },
      {
        title: "Cheap Relocation Car Shipping",
        description:
          "Relocating to a new residence? With our reasonably priced and dependable shipping, we make moving your car stress-free so you can concentrate on getting settled in your new place.",
      },
      {
        title: "Cheap Snowbird Car Shipping",
        description:
          "Our Snowbird auto shipping service provides economical transportation. We make sure your car is ready for you when you arrive at your destination if you travel seasonally between warmer and colder locations.",
      },
    ],
    []
  );

  const discounts = useMemo(
    () => [
      {
        title: "College Student Discount",
        icon: <GraduationCap className="w-6 h-6" />,
        description:
          "We provide reasonably priced student car travel choices, whether you're going to college or coming home. Let us take care of your car shipping at a cost that is affordable for students and save you the trouble of lengthy travels.",
      },
      {
        title: "Military Auto Shipping Discount",
        icon: <Shield className="w-6 h-6" />,
        description:
          "We are pleased to provide special savings on auto shipping to our military members. We guarantee a smooth and economical auto shipping experience, regardless of your status as a veteran or active-duty service member.",
      },
      {
        title: "Senior Citizen Discount",
        icon: <Users className="w-6 h-6" />,
        description:
          "This offer, which is intended for our respected senior customers, lowers the cost and eases the burden of auto travel. We put convenience and economy first, whether we're relocating or just moving a car.",
      },
      {
        title: "Seasonal Discounts",
        icon: <Calendar className="w-6 h-6" />,
        description:
          "You can save even more money by shipping your car during off-peak times. To assist clients in lowering their auto transport expenses, we provide exclusive deals and discounts at specific periods of the year.",
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "How can I transport my car more cheaply?",
        answer:
          "Saving money on car shipping will be much easier if you book your reservations in advance and select terminal-to-terminal transport with an open shipping method. Even though enclosed auto transport and having the car delivered to your house are great options, getting cheap car shipping will be much harder.",
      },
      {
        icon: <Car className="w-5 h-5" />,
        question: "Is driving a car more expensive than shipping?",
        answer:
          "Driving is usually more economical if you only need to move a car a few hundred miles. However, it is more cost-effective to ship your automobile for longer journeys where additional costs, such as lodging and lost wages, must also be considered.",
      },
      {
        icon: <Calculator className="w-5 h-5" />,
        question: "Does shipping cost more money than driving a car?",
        answer:
          "Driving is typically more cost-effective when moving a car a short distance, such as a few hundred miles. For longer trips, where other expenses like housing and lost income must also be considered, it is more economical to ship your car.",
      },
      {
        icon: <Package className="w-5 h-5" />,
        question: "Can I transport personal belongings in my car?",
        answer:
          "You can ship personal items inside your automobile using some carriers. However, they frequently have guidelines about the weight and packing of these things.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "How much will shipping my automobile cost?",
        answer:
          "The average cost of shipping a car varies widely. The price of your cargo can vary depending on several variables, including the shipping distance, the mode of transportation you select, the season, and the locations of your pick-up and delivery points.",
      },
      {
        icon: <User className="w-5 h-5" />,
        question: "Is a Person Required for a Pick-Up and Vehicle Delivery?",
        answer:
          "Someone must be present at pick-up and delivery to accept the vehicle. The inspection report must be signed, and a spare key provided. If you're unavailable, have a friend or family member sign.",
      },
      {
        icon: <Fuel className="w-5 h-5" />,
        question: "What Gas Amount Should You Keep in the Tank?",
        answer:
          "It's unnecessary for your car to have a full gas tank. But it should have between 1/8 and 1/2 gas in it.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "Can a pick-up and delivery time be guaranteed?",
        answer:
          "Sure, we do. You can get an immediate quote with a certain pick-up date on our website. For a quote with an assured delivery date, please call us.",
      },
      {
        icon: <Wrench className="w-5 h-5" />,
        question: "Does my vehicle need to run properly?",
        answer: "No, we can transfer automobiles that are not operational.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Does my car have insurance?",
        answer:
          "Your car is wholly insured from when it is picked up to the very end of the journey. All of the carriers we partner with adhere to the Department of Transportation standards regarding insurance.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Cheap Car Shipping | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Rapid Auto Shipping is the ideal cheap car shipping & auto transport service to meet your demands if economical car transport is what you're looking for."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/cheap-car-shipping"
        />
        <meta
          property="og:title"
          content="Cheap Car Shipping | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping is the ideal cheap car shipping & auto transport service to meet your demands if economical car transport is what you're looking for."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/cheap-car-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751372926/Car-Hauler-South-Florida-2_fqzcft.jpg"
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
                    name: "cheap-car-shipping",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/cheap-car-shipping ",
                    name: "cheap-car-shipping",
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
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Cheap Car Shipping Service",
              name: "Cheap Car Shipping Service",
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
                "Affordable and reliable car shipping service across the USA. Rapid Auto Shipping offers cheap rates without compromising quality — with full insurance, tracking, and expert logistics.",
              url: "https://rapidautoshipping.com/services/cheap-car-shipping",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How can I transport my car more cheaply?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Saving money on car shipping will be much easier if you book your reservations in advance and select terminal-to-terminal transport with an open shipping method. Even though enclosed auto transport and having the car delivered to your house are great options, getting cheap car shipping will be much harder.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is driving a car more expensive than shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Driving is usually more economical if you only need to move a car a few hundred miles. However, it is more cost-effective to ship your automobile for longer journeys where additional costs, such as lodging and lost wages, must also be considered.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does shipping cost more money than driving a car?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Driving is typically more cost-effective when moving a car a short distance, such as a few hundred miles. For longer trips, where other expenses like housing and lost income must also be considered, it is more economical to ship your car.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I transport personal belongings in my car?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You can ship personal items inside your automobile using some carriers. However, they frequently have guidelines about the weight and packing of these things.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much will shipping my automobile cost?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The average cost of shipping a car varies widely. The price of your cargo can vary depending on several variables, including the shipping distance, the mode of transportation you select, the season, and the locations of your pick-up and delivery points.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is a Person Required for a Pick-Up and Vehicle Delivery?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Someone must be present at pick-up and delivery to accept the vehicle. The inspection report must be signed, and a spare key provided. If you're unavailable, have a friend or family member sign.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What Gas Amount Should You Keep in the Tank?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It's unnecessary for your car to have a full gas tank. But it should have between 1/8 and 1/2 gas in it.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can a pick-up and delivery time be guaranteed?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sure, we do. You can get an immediate quote with a certain pick-up date on our website. For a quote with an assured delivery date, please call us.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does my vehicle need to run properly?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No, we can transfer automobiles that are not operational.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does my car have insurance?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Your car is wholly insured from when it is picked up to the very end of the journey. All of the carriers we partner with adhere to the Department of Transportation standards regarding insurance.",
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
          <section className="relative py-8 flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on Mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751372926/Car-Hauler-South-Florida-2_fqzcft.jpg"
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
                    Cheap Car{" "}
                    <span className="text-[#ff5722]">Shipping Service</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Rapid Auto Shipping is a reliable and trusted cheap car
                    shipping service provider in the USA. This is not a false
                    claim or mere promise; we will discuss the reasons why we
                    are able to provide affordable car shipping within the
                    United States. As we are 14 years old company, so we have a
                    good network of carriers even in rural areas.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto relative z-30">
                <TransportForm />
              </div>
            </div>
          </section>

          <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center mb-8">
                  <div className="relative">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-700 hover:scale-110 hover:rotate-6"
                      style={{
                        background: `linear-gradient(135deg, #ff5722, #ff7043)`,
                      }}
                    >
                      <Star className="w-12 h-12 text-white" />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#003366" }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-6">
                  <span style={{ color: "#003366" }}>How are We </span>
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Cheap Car Shipping Service Provider
                  </span>
                  <span style={{ color: "#003366" }}> in the USA?</span>
                </h2>

                <div
                  className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 border-2 shadow-lg"
                  style={{ borderColor: "#ff5722" }}
                >
                  <p
                    className="text-lg leading-relaxed mb-4"
                    style={{ color: "#003366" }}
                  >
                    There are many factors apart from shipping quotes that
                    increase the shipping price. There are hidden costs and
                    charges that will surprise you at the end of the and spoil
                    your shipping experience. Let us discuss that point and how
                    we help our customers with cheap car shipping service.
                  </p>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: "#ff5722" }}
                  >
                    Rapid Auto Shipping is the greatest option for reasonably
                    priced auto shipping for the following reasons:
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-l-4 ${
                      index === services.length - 1 ? "lg:col-span-2" : ""
                    }`}
                    style={{
                      borderLeftColor: index % 2 === 0 ? "#ff5722" : "#003366",
                      animationDelay: `${index * 150}ms`,
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
                          <div className="text-white">{service.icon}</div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-2xl font-bold mb-6 text-center"
                        style={{ color: "#003366" }}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-center">
                        {service.description}
                      </p>

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
              <p className="text-center max-w-7xl m-auto text-gray-700 border-[#003366] border-2 p-4 rounded-2xl">
                You can rely on Rapid Auto Shipping as the most cost-effective,
                dependable, and hassle-free auto shipping company in the United
                States. Contact us right now for a free estimate and to take
                advantage of our exceptional car shipping services at unmatched
                costs!
              </p>
            </div>
          </div>

          <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section with Text and Image */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center mb-8">
                  <div className="relative">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-700 hover:scale-110 hover:rotate-6"
                      style={{
                        background: `linear-gradient(135deg, #ff5722, #ff7043)`,
                      }}
                    >
                      <Truck className="w-12 h-12 text-white" />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#003366" }}
                    >
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-12">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Rapid Auto Shipping:
                  </span>
                  <span style={{ color: "#003366" }}>
                    {" "}
                    America's Trusted Auto Shipping Company
                  </span>
                </h2>

                {/* Content with Image Side by Side */}
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                  {/* Left Content */}
                  <div className="flex-1 lg:text-left text-center">
                    <div
                      className="bg-gray-50 rounded-2xl p-8 border-2 shadow-lg"
                      style={{ borderColor: "#ff5722" }}
                    >
                      <p
                        className="text-lg leading-relaxed mb-4"
                        style={{ color: "#003366" }}
                      >
                        Rapid Auto Shipping is a nations-serving company. We
                        take pride in providing dependable and reasonably priced
                        auto shipping services to customers nationwide. Our
                        dedication extends beyond merely turning a profit. We
                        put the needs of our customers first by providing a
                        range of incentives to make vehicle shipping more
                        affordable for all.
                      </p>
                      <p
                        className="text-lg leading-relaxed"
                        style={{ color: "#003366" }}
                      >
                        Whether you are a Senior citizen, a student, or a member
                        of the military, we aim to offer affordable options that
                        meet your needs. We often provide the following special
                        discounts for cheap car shipping services:
                      </p>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="flex-1">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_600,q_auto,f_auto/v1748342102/ship_car_across_the_country_gxmle2.webp"
                        alt="Professional Auto Transport Service"
                        width={600}
                        height={700}
                        quality={75}
                        loading="lazy"
                        className="object-cover"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      {/* Floating Badge */}
                      <div className="absolute top-6 right-6 bg-white/90 rounded-full px-4 py-2 shadow-lg">
                        <div className="flex items-center space-x-2">
                          <Star
                            className="w-4 h-4"
                            style={{ color: "#ff5722" }}
                          />
                          <span
                            className="font-semibold text-sm"
                            style={{ color: "#003366" }}
                          >
                            Trusted Service
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discounts Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {discounts.map((discount, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-l-4"
                    style={{
                      borderLeftColor: index % 2 === 0 ? "#ff5722" : "#003366",
                      animationDelay: `${index * 150}ms`,
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
                          <div className="text-white">{discount.icon}</div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-2xl font-bold mb-6 text-center"
                        style={{ color: "#003366" }}
                      >
                        {discount.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-center">
                        {discount.description}
                      </p>

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
              <p className="text-center max-w-7xl m-auto text-gray-700 border-[#003366] border-2 p-4 rounded-2xl">
                At Rapid Auto Shipping, we are committed to providing excellent
                service at the most competitive cost. Get a free quote and find
                out more about our discounts by getting in touch
                with us right now!
              </p>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center justify-center mb-8">
                  <div className="relative">
                    <div
                      className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl transform transition-all duration-700 hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, #ff5722, #ff7043)`,
                      }}
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#003366" }}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight">
                  <span style={{ color: "#003366" }}>Types Of </span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Reliable And Cheapest
                  </span>
                  <span style={{ color: "#003366" }}>
                    {" "}
                    Car Shipping Services We Provide
                  </span>
                </h2>

                <div className="max-w-5xl mx-auto">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Every vehicle shipment requirement is different, and we at
                    Rapid Auto Shipping are aware of this. We provide the most
                    dependable and cheap car shipping service, whether you're
                    moving, buying a car at auction, or transferring a valuable
                    automobile. Our specialist shipping services include the
                    following:
                  </p>
                </div>
              </div>

              {/* Services Grid Layout */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {shippingTypes.map((type, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "fadeInUp 0.8s ease-out forwards",
                    }}
                  >
                    {/* Gradient Header */}
                    <div
                      className="h-2"
                      style={{
                        backgroundColor: type.useOrange ? "#ff5722" : "#003366",
                      }}
                    ></div>

                    {/* Card Content */}
                    <div className="p-8">
                      {/* Centered Icon at Top */}
                      <div className="flex justify-center mb-6"></div>

                      {/* Title */}
                      <h3
                        className="text-xl font-bold leading-tight mb-6 text-center"
                        style={{ color: "#003366" }}
                      >
                        {type.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-center">
                        {type.description}
                      </p>

                      {/* Decorative Elements */}
                      <div className="flex justify-center mt-6">
                        <div
                          className="w-8 h-8 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                          style={{
                            backgroundColor: type.useOrange
                              ? "#ff5722"
                              : "#003366",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"
                      style={{
                        backgroundColor: type.useOrange ? "#ff5722" : "#003366",
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Call to Action Section */}
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute top-10 left-10 w-20 h-20 rounded-full"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <div
                    className="absolute bottom-10 right-10 w-16 h-16 rounded-full"
                    style={{ backgroundColor: "#003366" }}
                  ></div>
                  <div
                    className="absolute top-20 right-20 w-12 h-12 rounded-full"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <div
                    className="absolute bottom-20 left-20 w-14 h-14 rounded-full"
                    style={{ backgroundColor: "#003366" }}
                  ></div>
                </div>

                <div
                  className="relative bg-white rounded-3xl p-12 shadow-2xl border-2 text-center"
                  style={{ borderColor: "#ff5722" }}
                >
                  <div className="mb-8">
                    <div className="flex justify-center space-x-3 mb-6">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full animate-pulse"
                          style={{
                            backgroundColor: i === 1 ? "#ff5722" : "#003366",
                            animationDelay: `${i * 0.5}s`,
                          }}
                        />
                      ))}
                    </div>

                    <h2
                      className="text-3xl md:text-4xl font-bold mb-6"
                      style={{ color: "#003366" }}
                    >
                      Dependability, Safety, and Cost - Our Top Priorities
                    </h2>

                    <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                      At Rapid Auto Shipping, dependability, safety, and cost
                      are our top priorities. We offer an affordable option for
                      you, regardless of the kind of vehicle you need to move.
                      For a free quote, contact us right now!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="https://rapidautoshipping.com/calculator">
                        <button
                          className="group relative px-10 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl overflow-hidden"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <span className="relative z-10">
                            Get Free Quote Now
                          </span>
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>
                      </Link>
                      <Link href="tel:+18332334447">
                        <button
                          className="group px-10 py-4 rounded-2xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-900 hover:text-white"
                          style={{ borderColor: "#003366", color: "#003366" }}
                        >
                          Contact Us Today
                        </button>
                      </Link>
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