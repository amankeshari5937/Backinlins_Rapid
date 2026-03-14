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
  Package,
  CheckCircle,
  Cloud,
  Navigation,
  ArrowRight,
  GraduationCap,
  UserCheck,
  MapPin,
  Calendar,
  Check,
  Clock,
  Shield,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";

const Home = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [selectedRoute, setSelectedRoute] = useState(null);

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

  const steps = useMemo(
    () => [
      {
        number: 1,
        title: "Request an Instant Auto Shipping Quote",
        description:
          "Obtaining a shipping quote is the first step to shipping a car. Fill out the details in the auto shipping calculator, or get in touch with us by email or call +1 (833) 233-4447.",
        icon: Calculator,
      },
      {
        number: 2,
        title: "Booking of the Shipment",
        description:
          "Once you get the auto transportation quote, you need to schedule your shipments. For your convenience, we provide electronic contracts. An email containing a link will be sent to you so you can conveniently schedule your shipment online.",
        icon: Calendar,
      },
      {
        number: 3,
        title: "Pickup",
        description:
          "Our skilled auto transport driver will pick up your vehicle on the appointed day and within the scheduled time limit. Before loading the car on the carrier, the operator will inspect and record its condition.",
        icon: Truck,
      },
      {
        number: 4,
        title: "Transportation",
        description:
          "The carrier will contact and provide you with an estimated arrival time a few hours before delivery. If you are unable to do so, you can ask a reliable person to accept the car on your behalf.",
        icon: MapPin,
      },
    ],
    []
  );

  const routes = useMemo(
    () => [
      {
        from: "New York, NY",
        to: "Los Angeles, CA",
        distance: 2800,
        time: "7–9 days",
        cost: "$1,120–$2,240",
      },
      {
        from: "Chicago, IL",
        to: "Miami, FL",
        distance: 1400,
        time: "4–6 days",
        cost: "$560–$1,120",
      },
      {
        from: "Dallas, TX",
        to: "Boston, MA",
        distance: 1800,
        time: "5–7 days",
        cost: "$720–$1,440",
      },
      {
        from: "Atlanta, GA",
        to: "Denver, CO",
        distance: 1400,
        time: "4–6 days",
        cost: "$560–$1,120",
      },
      {
        from: "San Francisco, CA",
        to: "Seattle, WA",
        distance: 800,
        time: "2–4 days",
        cost: "$320–$640",
      },
      {
        from: "Washington, D.C.",
        to: "Austin, TX",
        distance: 1500,
        time: "4–6 days",
        cost: "$600–$1,200",
      },
      {
        from: "Philadelphia, PA",
        to: "Phoenix, AZ",
        distance: 2300,
        time: "6–8 days",
        cost: "$920–$1,840",
      },
      {
        from: "Orlando, FL",
        to: "New Orleans, LA",
        distance: 600,
        time: "2–3 days",
        cost: "$240–$480",
      },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        title: "Door-to-Campus Delivery",
        description:
          "Avoid the hassle of long road drives! Our car shipping from your door to campus guarantees that your car reaches you as close to your college or university as possible. In case your campus imposes restrictions on heavy trucks, we will make sure there is a convenient meeting place nearby.",
        icon: <MapPin className="w-8 h-8" />,
        highlight: "Most Convenient",
      },
      {
        title: "Open Transport",
        description:
          "For budget-conscious college students seeking cheap car shipping, open transport is the ideal option. This affordable process entails shipping your car on an open carrier, which is the most popular method utilized by most car shipping companies with student discounts.",
        icon: <Truck className="w-8 h-8" />,
        highlight: "Most Cost-Effective",
      },
      {
        title: "Enclosed Transport",
        description:
          "If you have a luxury, vintage, or high-end vehicle, enclosed shipping provides the greatest protection. Your car will be transported in a completely covered carrier, protecting it from weather, road hazards, and possible damage.",
        icon: <Shield className="w-8 h-8" />,
        highlight: "Maximum Protection",
      },
      {
        title: "Expedited Shipping",
        description:
          "Need your car urgently? Our expedited auto shipping service ensures priority pickup and faster delivery. While it may cost more than standard options, this is the best choice if you're relocating at the last minute and need your car to arrive on time without delays.",
        icon: <Clock className="w-8 h-8" />,
        highlight: "Most Urgent Delivery",
      },
    ],
    []
  );

  const features = useMemo(
    () => [
      {
        icon: Shield,
        title: "Trustworthy & Licensed Drivers",
        description:
          "Fully trained experts provide safe, hassle-free transport.",
      },
      {
        icon: Car,
        title: "No Long Drive Worries",
        description:
          "Skip tedious, long drives and have us do the work for you.",
      },
      {
        icon: Users,
        title: "Highest-Rated Services",
        description:
          "Trusted nationwide for secure, on-time vehicle shipping.",
      },
      {
        icon: Check,
        title: "Shipping with Personal Belongings",
        description: "Certain items can be safely shipped with your car.",
      },
      {
        icon: Phone,
        title: "Top-Notch Customer Support",
        description: "Helpful, 24/7 service for an effortless process.",
      },
      {
        icon: Calendar,
        title: "Flexible Scheduling",
        description:
          "We accommodate your college move-in and move-out schedules.",
      },
      {
        icon: DollarSign,
        title: "Transparent Pricing",
        description:
          "No surcharges or surprise fees, just fair, upfront prices with car shipping student discount.",
      },
    ],
    []
  );

  const distancePricing = useMemo(
    () => [
      { distance: "Short distances (less than 500 miles)", price: "$500–$700" },
      { distance: "Medium distances (500–1,500 miles)", price: "$700–$1,200" },
      {
        distance: "Long distances (more than 1,500 miles)",
        price: "$1,000–$1,500",
      },
    ],
    []
  );

  const shippingOptions = useMemo(
    () => [
      {
        option: "Open Transport",
        description:
          "Affordable option where your vehicle is shipped on an open carrier",
        cost: "Least Expensive",
        suitability: "Suitable for most students",
      },
      {
        option: "Enclosed Transport",
        description:
          "Provides added protection, ideal for luxury or vintage cars",
        cost: "More Expensive",
        suitability: "Best for premium vehicles",
      },
    ],
    []
  );

  const deliveryOptions = useMemo(
    () => [
      {
        service: "Door-to-Door Service",
        description: "Convenient pickup and delivery",
        cost: "Higher Cost",
        notes: "May have campus restrictions",
      },
      {
        service: "Terminal to Terminal",
        description: "Drop-off and pickup at transport terminals",
        cost: "Lower Cost",
        notes: "Requires travel to terminals",
      },
      {
        service: "Flexible Meeting Places",
        description: "Safe location near campus",
        cost: "Moderate Cost",
        notes: "College-approved locations",
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "How much does it cost to ship a car to college?",
        answer:
          "Car shipping cost typically ranges from 40 cents to $2.00 per mile. Compared to long-distance and cross-country shipping, short-distance moves utilizing open transit have lower total costs but higher average expenses per mile. You might obtain lower charges if you are more flexible with your drop-off and pickup dates.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "How long does it take to ship my car to college?",
        answer:
          "The typical time to ship a car is 3 to 5 business days. However, car shipping depends on factors like transport truck bandwidth, traffic, weather, and other factors that will influence your specific timings.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Is my car insured?",
        answer:
          "Yes, all vehicles are covered by Damage-Free Carrier Insurance while in transit. We also require our carriers to provide supplemental insurance, which means you'll have added protection in the unlikely event of damage or an accident.",
      },
      {
        icon: <GraduationCap className="w-5 h-5" />,
        question: "Can I get a discount as a student?",
        answer:
          "Absolutely! We offer car shipping student discounts ranging from 10% to 15%, with special promotions during back-to-college and summer break seasons. Referral and group discounts are also available.",
      },
      {
        icon: <CheckCircle className="w-5 h-5" />,
        question: "What to do before shipping?",
        answer:
          "Ensure the car's interior and exterior are clean so the driver can easily see if there is prior damage. If you are not carrying anything else, remove all your personal belongings. Inform the driver of any problems with your vehicle. Ensure that the car has a quarter tank of gas at pickup.",
      },
      {
        icon: <Package className="w-5 h-5" />,
        question: "Can I pack my personal items in the car?",
        answer:
          "Most car shipping companies with student discounts allow up to 100 lbs of personal items in the trunk. However, these items are not insured, so avoid packing valuables.",
      },
      {
        icon: <UserCheck className="w-5 h-5" />,
        question: "What happens if I am not available at delivery?",
        answer:
          "If you can't be present, you can authorize a trusted person (friend, roommate, or family member) to receive the vehicle on your behalf. Just notify us in advance to avoid delays.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>College Student Car Shipping Service | +1-833-233-4447</title>
        <meta
          name="description"
          content="Car transportation services for college students cater specifically to the needs of students who require their vehicles to be transported to or from college campuses."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/college-student-car-shipping"
        />
        <meta
          property="og:title"
          content="College Student Car Shipping Service | +1-833-233-4447"
        />
        <meta
          property="og:description"
          content="Car transportation services for college students cater specifically to the needs of students who require their vehicles to be transported to or from college campuses."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/college-student-car-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747998146/How_Door-to-Door_Auto_Transport_Works_vecign.webp"
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
                      "https://rapidautoshipping.com/college-student-car-shipping",
                    name: "College Student Car Shipping Service | +1-833-233-4447",
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
              serviceType:
                "College Student Car Shipping Service | +1-833-233-4447",
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
                "Car transportation services for college students cater specifically to the needs of students who require their vehicles to be transported to or from college campuses.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How much does it cost to ship a car to college?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Car shipping cost typically ranges from 40 cents to $2.00 per mile. Compared to long-distance and cross-country shipping, short-distance moves utilizing open transit have lower total costs but higher average expenses per mile. You might obtain lower charges if you are more flexible with your drop-off and pickup dates.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to ship my car to college?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The typical time to ship a car is 3 to 5 business days. However, car shipping depends on factors like transport truck bandwidth, traffic, weather, and other factors that will influence your specific timings.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is my car insured?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, all vehicles are covered by Damage-Free Carrier Insurance while in transit. We also require our carriers to provide supplemental insurance, which means you'll have added protection in the unlikely event of damage or an accident.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I get a discount as a student?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely! We offer car shipping student discounts ranging from 10% to 15%, with special promotions during back-to-college and summer break seasons. Referral and group discounts are also available.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What to do before shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ensure the car's interior and exterior are clean so the driver can easily see if there is prior damage. If you are not carrying anything else, remove all your personal belongings. Inform the driver of any problems with your vehicle. Ensure that the car has a quarter tank of gas at pickup.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I pack my personal items in the car?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most car shipping companies with student discounts allow up to 100 lbs of personal items in the trunk. However, these items are not insured, so avoid packing valuables.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What happens if I am not available at delivery?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "If you can't be present, you can authorize a trusted person (friend, roommate, or family member) to receive the vehicle on your behalf. Just notify us in advance to avoid delays.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/services/college-car-shipping",
            }),
          }}
        />
        
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          {/* Hero Section - Optimized for Mobile and Page Speed */}
          <section className="relative py-8  flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on Mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1743153389/Service/Auto-Shipping.webp"
                alt="Professional Auto Transport Service"
                fill
                quality={75}
                priority={true}
                className="object-cover"
                sizes="100vw"
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

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 max-w-3xl rounded-lg p-3 sm:p-4 md:bg-[#001933]/40">
                  {/* H1 - Black on mobile, White on desktop - Optimized for LCP */}
                  <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    College Student Car{" "}
                    <span className="text-[#ff5722]">Shipping</span>
                  </h1>

                  {/* Paragraph - Hidden on mobile, visible on desktop */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    College student car shipping provides a cost-effective and
                    convenient solution for students to ship their cars to and
                    from campus. With cost-effective options and door-to-campus
                    pickup, it provides a worry-free experience, particularly
                    for students studying far from home. Identifying students'
                    requirements, such as flexibility, affordability, and
                    reliability, is the key to seamless relocation. By using the
                    appropriate service, students are able to concentrate on
                    their studies without concern for long drives or car
                    logistics.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto relative z-20">
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
                        Why Students Should Get Student Car Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Transporting a car to college can frequently be a better
                      option than driving, especially for students undertaking
                      long-distance trips. It presents several benefits that
                      render it an attractive choice. To begin with, student car
                      shipping offers considerable time and energy savings,
                      enabling students to arrive at their destination quickly
                      and without the exhaustion that often comes with lengthy
                      drives. The time saved can be allocated to academics,
                      extracurricular pursuits, and social engagements.
                      Transporting a car can be more economical when factoring
                      in costs such as fuel, lodging, and the wear and tear on
                      the vehicle during an extended road journey.
                      <br />
                      Additionally, it maintains the vehicle's condition,
                      minimizes environmental impact, and offers reassurance
                      through professional handling and safety protocols. In the
                      end, car transport provides a practical and effective
                      option that provides convenient and stress-free moves to
                      improve the overall college experience for students.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1747998146/How_Door-to-Door_Auto_Transport_Works_vecign.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={600}
                        className="w-full h-[600px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-orange-600 text-white">
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative max-w-7xl mx-auto px-6 py-20">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white bg-opacity-20 p-4 rounded-full">
                      <Car className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-5xl font-bold mb-6 leading-tight">
                    Why Choose{" "}
                    <span className="text-orange-300">Rapid Auto Shipping</span>
                    <br />
                    for Student Car Shipping?
                  </h2>
                  <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
                    At Rapid Auto Shipping, we know that college students
                    require a quick, dependable, and convenient means of
                    shipping their vehicles. Our name says it all: we value
                    speed, efficiency, and security to get your car to campus on
                    time and in pristine condition.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-6 py-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cost Calculation Section */}
            <div className="bg-white py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-16">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 sm:p-4 rounded-full">
                      <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 px-4">
                    How is the Cost to Ship a Car to College Calculated?
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
                    At Rapid Auto Shipping, we pride ourselves on our clear and
                    cost-effective car shipping for students. A number of
                    factors determine the price of student car shipping, and
                    knowing them can assist you in making the right choice while
                    saving time and money.
                  </p>
                </div>

                {/* Distance Pricing Table */}
                <div className="mb-8 sm:mb-12">
                  <div className="flex items-center mb-4 sm:mb-6 px-4">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mr-2 sm:mr-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                      1. Distance Pricing
                    </h3>
                  </div>
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg mx-4 sm:mx-0">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[300px]">
                        <thead className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                          <tr>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                              Distance Range
                            </th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                              Average Cost
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {distancePricing.map((item, index) => (
                            <tr
                              key={index}
                              className="border-b border-gray-200 hover:bg-orange-50 transition-colors duration-200"
                            >
                              <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-800 text-sm sm:text-base">
                                {item.distance}
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-orange-600 font-bold text-base sm:text-lg">
                                {item.price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-center italic text-sm sm:text-base px-4">
                    The longer the distance, the greater the price.
                  </p>
                </div>

                {/* Shipping Options Table */}
                <div className="mb-8 sm:mb-12">
                  <div className="flex items-center mb-4 sm:mb-6 px-4">
                    <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mr-2 sm:mr-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                      2. Shipping Options
                    </h3>
                  </div>
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg mx-4 sm:mx-0">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[600px]">
                        <thead className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                          <tr>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                              Transport Type
                            </th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                              Description
                            </th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                              Cost Level
                            </th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                              Best For
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {shippingOptions.map((item, index) => (
                            <tr
                              key={index}
                              className="border-b border-gray-200 hover:bg-orange-50 transition-colors duration-200"
                            >
                              <td className="px-3 sm:px-6 py-3 sm:py-4 font-bold text-blue-900 text-sm sm:text-base">
                                {item.option}
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base">
                                {item.description}
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4">
                                <span
                                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                                    item.cost === "Least Expensive"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-orange-100 text-orange-800"
                                  }`}
                                >
                                  {item.cost}
                                </span>
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm sm:text-base">
                                {item.suitability}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Additional Factors */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4 sm:px-0">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3" />
                      <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                        3. Timeframe & Scheduling
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-green-700 text-sm sm:text-base">
                            Book Early (2–4 Weeks in Advance)
                          </p>
                          <p className="text-gray-600 text-sm sm:text-base">
                            Booking ahead guarantees lower rates and
                            availability.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-orange-700 text-sm sm:text-base">
                            Expedited Shipping Available
                          </p>
                          <p className="text-gray-600 text-sm sm:text-base">
                            Quick delivery at a premium price.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 sm:p-8 border border-orange-200">
                    <div className="flex items-center mb-4">
                      <Car className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mr-2 sm:mr-3" />
                      <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                        4. Vehicle Size & Weight
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-orange-700 text-sm sm:text-base">
                            Larger Vehicles Cost More
                          </p>
                          <p className="text-gray-600 text-sm sm:text-base">
                            Trucks and SUVs cost more to ship than sedans
                            because they are heavier and take up more space.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8 sm:mb-12">
                  <div className="flex items-center mb-4 sm:mb-6 px-4">
                    <Package className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mr-2 sm:mr-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                      5. Pickup & Delivery Locations
                    </h3>
                  </div>
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg mx-4 sm:mx-0">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[700px]">
                        <thead className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                          <tr>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                              Service Type
                            </th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                              Description
                            </th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                              Cost Impact
                            </th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                              Notes
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {deliveryOptions.map((item, index) => (
                            <tr
                              key={index}
                              className="border-b border-gray-200 hover:bg-orange-50 transition-colors duration-200"
                            >
                              <td className="px-3 sm:px-6 py-3 sm:py-4 font-bold text-blue-900 text-sm sm:text-base">
                                {item.service}
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base">
                                {item.description}
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4">
                                <span
                                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                                    item.cost === "Lower Cost"
                                      ? "bg-green-100 text-green-800"
                                      : item.cost === "Higher Cost"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {item.cost}
                                </span>
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm sm:text-base">
                                {item.notes}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Banner */}
            <div className="bg-blue-50 py-12">
              <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-8 text-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-900">
                        Speed & Efficiency
                      </div>
                      <div className="text-gray-600 text-sm">
                        On-time delivery guaranteed
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-900">
                        Secure Transport
                      </div>
                      <div className="text-gray-600 text-sm">
                        Pristine condition arrival
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-900">
                        Student Discounts
                      </div>
                      <div className="text-gray-600 text-sm">
                        Budget-friendly pricing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto p-6 bg-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 rounded-t-lg">
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <Truck className="w-8 h-8" />
                How Long Does it Take to Ship a Car to College?
              </h2>
              <p className="text-orange-100 text-lg">
                The time taken for car shipping by students varies based on
                factors such as distance, route, and shipping method. On
                average, the following is what to expect:
              </p>
            </div>

            {/* Main Content */}
            <div className="bg-white border-2 border-gray-200 rounded-b-lg">
              {/* Transit Time Section */}
              <div className="p-8 border-b border-gray-200">
                <h2
                  className="text-2xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: "#003366" }}
                >
                  <Clock className="w-6 h-6" />
                  1. Estimated Transit Time by Distance
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Short Distance */}
                  <div
                    className="bg-gray-50 p-6 rounded-lg border-l-4"
                    style={{ borderColor: "#ff5722" }}
                  >
                    <h3
                      className="font-bold text-lg mb-3"
                      style={{ color: "#003366" }}
                    >
                      Short Distance
                    </h3>
                    <p className="text-gray-600 mb-2">(Under 500 miles)</p>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#ff5722" }}
                    >
                      1-2 days
                    </div>
                  </div>

                  {/* Medium Distance */}
                  <div
                    className="bg-gray-50 p-6 rounded-lg border-l-4"
                    style={{ borderColor: "#ff5722" }}
                  >
                    <h3
                      className="font-bold text-lg mb-3"
                      style={{ color: "#003366" }}
                    >
                      Medium Distance
                    </h3>
                    <p className="text-gray-600 mb-2">(500–1,500 miles)</p>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#ff5722" }}
                    >
                      2-4 days
                    </div>
                  </div>

                  {/* Long Distance */}
                  <div
                    className="bg-gray-50 p-6 rounded-lg border-l-4"
                    style={{ borderColor: "#ff5722" }}
                  >
                    <h3
                      className="font-bold text-lg mb-3"
                      style={{ color: "#003366" }}
                    >
                      Long Distance
                    </h3>
                    <p className="text-gray-600 mb-2">(Over 1,500 miles)</p>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#ff5722" }}
                    >
                      5-7 days
                    </div>
                  </div>
                </div>
              </div>

              {/* Factors Section */}
              <div className="p-8">
                <h2
                  className="text-2xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: "#003366" }}
                >
                  <Navigation className="w-6 h-6" />
                  2. Factors That Affect Shipping Time
                </h2>

                <div className="space-y-6">
                  {/* Distance & Route */}
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <MapPin
                        className="w-6 h-6 mt-1"
                        style={{ color: "#ff5722" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg mb-2"
                        style={{ color: "#003366" }}
                      >
                        Distance & Route
                      </h3>
                      <p className="text-gray-700">
                        Longer routes will take longer, and faraway places can
                        add one or two days.
                      </p>
                    </div>
                  </div>

                  {/* Shipping Method */}
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <Truck
                        className="w-6 h-6 mt-1"
                        style={{ color: "#ff5722" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg mb-2"
                        style={{ color: "#003366" }}
                      >
                        Shipping Method
                      </h3>
                      <p className="text-gray-700">
                        Open transport (affordable car shipping for college
                        students) is quicker as it is readily available, but
                        enclosed transport can take longer.
                      </p>
                    </div>
                  </div>

                  {/* Carrier Schedules */}
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <Calendar
                        className="w-6 h-6 mt-1"
                        style={{ color: "#ff5722" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg mb-2"
                        style={{ color: "#003366" }}
                      >
                        Frequency of Carrier Schedules
                      </h3>
                      <p className="text-gray-700">
                        Booking early gets things delivered quicker, but leaving
                        it to the last moment can take longer.
                      </p>
                    </div>
                  </div>

                  {/* Weather & Road Conditions */}
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <Cloud
                        className="w-6 h-6 mt-1"
                        style={{ color: "#ff5722" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg mb-2"
                        style={{ color: "#003366" }}
                      >
                        Weather & Road Conditions
                      </h3>
                      <p className="text-gray-700">
                        Inclement weather or traffic can affect transit times.
                      </p>
                    </div>
                  </div>

                  {/* Pickup & Delivery Type */}
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <Navigation
                        className="w-6 h-6 mt-1"
                        style={{ color: "#ff5722" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg mb-2"
                        style={{ color: "#003366" }}
                      >
                        Pickup & Delivery Type
                      </h3>
                      <p className="text-gray-700">
                        Campus-to-door delivery is convenient but can be
                        time-consuming if there are restrictions on large
                        trucks, and a nearby meeting point must be used.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #ff5722 100%)",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
                  <Car className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Student Car Shipping
                  <br />
                  <span className="text-orange-200">Made Simple</span>
                </h2>
                <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Convenient, affordable, and secure auto transport solutions
                  designed specifically for college students moving across the
                  country.
                </p>
              </div>
            </div>

            {/* Popular Routes Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="text-center mb-12">
                <h2
                  className="text-4xl font-bold mb-4"
                  style={{ color: "#003366" }}
                >
                  Popular Student Routes
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Discover the most common car shipping routes for students,
                  with transparent pricing and delivery times.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead style={{ backgroundColor: "#003366" }}>
                      <tr>
                        <th className="text-left py-6 px-6 text-white font-semibold text-lg">
                          Route
                        </th>
                        <th className="text-left py-6 px-6 text-white font-semibold text-lg">
                          Distance
                        </th>
                        <th className="text-left py-6 px-6 text-white font-semibold text-lg">
                          Estimated Time
                        </th>
                        <th className="text-left py-6 px-6 text-white font-semibold text-lg">
                          Average Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {routes.map((route, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-100 hover:bg-orange-50 transition-all duration-300 cursor-pointer ${
                            selectedRoute === index
                              ? "bg-orange-50 ring-2 ring-orange-200"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedRoute(
                              selectedRoute === index ? null : index
                            )
                          }
                        >
                          <td className="py-5 px-6">
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: "#ff5722" }}
                                ></div>
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900">
                                  {route.from}
                                </div>
                                <div className="flex items-center text-gray-500 text-sm mt-1">
                                  <ArrowRight className="w-4 h-4 mx-2" />
                                  <span>{route.to}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-gray-700 font-medium">
                            {route.distance.toLocaleString()} miles
                          </td>
                          <td className="py-5 px-6 text-gray-700 font-medium">
                            {route.time}
                          </td>
                          <td className="py-5 px-6">
                            <span
                              className="font-bold text-lg"
                              style={{ color: "#ff5722" }}
                            >
                              {route.cost}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-50 py-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2
                    className="text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Tailored Transport Solutions
                  </h2>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                    We know that every car is distinctive and needs customized
                    care. Choose from our specialized services designed with
                    student needs and budgets in mind.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
                    >
                      <div className="p-8">
                        <div className="flex items-start space-x-4 mb-6">
                          <div
                            className="flex-shrink-0 p-3 rounded-xl text-white transform group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3
                                className="text-xl font-bold"
                                style={{ color: "#003366" }}
                              >
                                {service.title}
                              </h3>
                              <span
                                className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                                style={{ backgroundColor: "#ff5722" }}
                              >
                                {service.highlight}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div
                        className="h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        style={{ backgroundColor: "#ff5722" }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto p-6 bg-white">
            {/* Header */}
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ color: "#003366" }}
              >
                How Student's Car Shipping Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                At Rapid Auto Shipping, our student vehicle transport process is
                easy and hassle-free. To book your car shipment, follow these
                simple steps:
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={step.number}
                    className={`flex items-center gap-8 ${
                      isEven ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      <div
                        className={`p-6 rounded-lg shadow-lg ${
                          isEven ? "text-right" : ""
                        }`}
                        style={{
                          backgroundColor: "#f8f9fa",
                          borderLeft: isEven ? "none" : "4px solid #ff5722",
                          borderRight: isEven ? "4px solid #ff5722" : "none",
                        }}
                      >
                        <h3
                          className="text-xl font-semibold mb-3"
                          style={{ color: "#003366" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Step number circle */}
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          {step.number}
                        </div>

                        {/* Icon */}
                        <div
                          className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>

                        {/* Connector line */}
                        {index < steps.length - 1 && (
                          <div
                            className="absolute top-16 left-1/2 w-0.5 h-16 transform -translate-x-1/2"
                            style={{ backgroundColor: "#ff5722" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: "#003366" }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Ship Your Car?
                </h3>
                <p className="text-gray-200 mb-4">
                  Get your instant quote today and experience hassle-free
                  student car shipping
                </p>
                <Link href="tel:+18332334447">
                  <button
                    className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: "#ff5722" }}
                  >
                    Get Quote Now: +1 (833) 233-4447
                  </button>
                </Link>
              </div>
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
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        Student Car Shipping Discount
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      We provide affordable car shipping for college students
                      with special student discounts to ensure vehicle
                      transportation becomes affordable. We give a 10% to 15%
                      car shipping student discount, along with seasonal deals
                      aimed at providing students with ways to save and have a
                      trouble-free transport process. Whether you require
                      shipping your vehicle back to campus, home during summer
                      break, or to another destination for an internship, we
                      have services adapted to student demands. As one of the
                      most reputable car transport companies with discounts for
                      students, we provide scheduling flexibility and reliable
                      transport services. Our student discount car shipping
                      service is available in both open transport and enclosed
                      transport, providing cost-effective solutions for your
                      vehicle make and budget.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Want even more deals? Make use of our referral bonus
                      student discount car shipping reward refer your friend and
                      save even more! We also give discounts for multiple cars
                      shipped in a group, making it more affordable for group
                      students moving altogether. Reserve your student car
                      shipping today and get the best offer with Rapid Auto
                      Shipping!
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1743420722/Service/Transport-cars-for-dealerships.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          width={800}
                          height={600}
                          className="w-full h-[600px] object-cover rounded-2xl shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-3xl group-hover:brightness-110 group-hover:contrast-105"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                        <div className="absolute inset-0 bg-gray-200 rounded-2xl -z-10" />

                        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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