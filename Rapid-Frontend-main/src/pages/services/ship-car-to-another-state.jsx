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
  Calculator,
  Star,
  FileText,
  CheckCircle,
  MapPin,
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

  const reasons = useMemo(
    () => [
      {
        title: "Moving for Personal or Work Reasons",
        description:
          "When people move to a new state for work, family, or retirement, they often need to move their cars.",
        benefits: [
          "Keeps your car from getting too much mileage and wear and tear.",
          "Saves time so you can focus on getting used to your new home.",
        ],
      },
      {
        title: "Seasonal Transport (Snowbird Car Transport)",
        description:
          "A lot of snowbirds move between states in the north and south to avoid bad weather.",
        benefits: [
          "Shipping a car makes travel safe and easy, and it keeps you from having to drive long distances.",
        ],
      },
      {
        title: "Buying or Selling a Car in a Different State",
        description:
          "Buying a car in another state from a dealership or an individual seller.",
        benefits: [
          "Getting someone from another state to buy my car.",
          "Rapid Auto Shipping takes care of the details and makes sure the delivery is safe.",
        ],
      },
      {
        title: "People in college Changing states",
        description:
          "For ease of travel, college students who live far away may need a car.",
        benefits: [
          "Avoids the stress of a long drive and makes sure the car is ready when you get there.",
        ],
      },
      {
        title: "Moving classic or expensive cars",
        description:
          "The owner of expensive cars prefer enclosed car shipping because it keeps their cars safer.",
        benefits: [
          "Keeps you from having to deal with road hazards, bad weather, and extra mileage.",
        ],
      },
      {
        title: "Moving a Non-Operational Vehicle:",
        description:
          "Professional auto transport companies have special carriers that can move your car even if it can't be driven.",
        benefits: [
          "It saves time and money by not having to tow the car long distances.",
        ],
      },
      {
        title: "Avoiding Long Distance Hassle",
        description:
          "It can be tiring, expensive, and dangerous to drive thousands of miles.",
        benefits: [
          "When you ship a car, you don't have to worry about things like gas prices, lodging, and breakdowns.",
          "Makes moving stress-free while your car is safely moved.",
        ],
      },
      {
        title: "Safer and better value for money",
        description:
          "There are risks with long road trips, like getting lost, having an accident, or getting tired.",
        benefits: [
          "It's safer and usually cheaper to hire a professional auto transport service than to drive yourself.",
        ],
      },
    ],
    [],
  );

  const costRanges = useMemo(
    () => [
      { distance: "Short Distances (up to 500 miles)", cost: "$200 to $600" },
      {
        distance: "Medium Distances (500-1,000 miles)",
        cost: "$400 to $1,000",
      },
      {
        distance: "Long Distances (1,000-2,000 miles)",
        cost: "$800 to $1,600",
      },
      {
        distance: "Cross-Country (2,000+ miles)",
        cost: "$1,200 to $2,000 or more",
      },
    ],
    [],
  );

  const factors = useMemo(
    () => [
      {
        title: "Shipping Distance:",
        description:
          "Transporting a vehicle across the country will be more expensive than transporting it to a nearby state. As the distance increases, so does the expense associated with car shipping.",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        title: "Shipping Options:",
        description:
          "Premium options, like enclosed transportation rather than open, can be significantly pricier than standard services.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Vehicle Type:",
        description:
          "The larger and more expensive a vehicle is, the more it typically costs to transport. Transporting high-value cars, such as exotic or classic automobiles, or alternative vehicles, such as RVs, ATVs, and motorcycles, may incur additional fees.",
        icon: <Car className="w-6 h-6" />,
      },
      {
        title: "Time of Year:",
        description:
          "The demand for car shipping fluctuates throughout the year, affecting the cost. For example, shipping a vehicle in summer costs more due to peak demand.",
        icon: <Clock className="w-6 h-6" />,
      },
      {
        title: "Vehicle condition:",
        description:
          "Shipping inoperable vehicles requires special equipment and handling, which may cost you extra.",
        icon: <CheckCircle className="w-6 h-6" />,
      },
      {
        title: "Shipping speed:",
        description:
          "If you need expedited shipping or have a tight delivery schedule, you can expect to pay more.",
        icon: <Star className="w-6 h-6" />,
      },
    ],
    [],
  );

  const faqData = useMemo(
    () => [
      {
        icon: <DollarSign className="w-5 h-5" />,
        question:
          "What is the most affordable method for moving an automobile to another state?",
        answer:
          "An affordable open carrier vehicle transport service is one of the most cost-effective methods for shipping a car to another state. To further enhance affordability, consider opting for terminal to terminal delivery. This entails dropping off and picking up the vehicle at a designated location. Additionally, selecting flexible scheduling enables transport companies to optimize trailer capacity by efficiently filling it up from nearby areas.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "What is the time frame for shipping a car?",
        answer:
          "The duration of car shipping can vary depending on factors such as the move's distance and the company's scheduling policies. In most locations in the contiguous United States, estimating a delivery time between three days and one week is reasonable. Moves over shorter distances will require less time, whereas shipping a car across the country to Hawaii, Alaska, or any other U.S. territories may require a significantly longer duration.",
      },
      {
        icon: <Calculator className="w-5 h-5" />,
        question:
          "What is the price of shipping an automobile to another state?",
        answer:
          "The typical cost of hiring another state vehicle shipping company ranges from $0.70 per mile for distances between 1000 and 1500 miles. Various factors, including the length of the journey, the date of pick-up, the chosen route, the make and model of the vehicle, the method of transportation, the time of year, the condition of the car, and any applicable discounts, determine the cost of shipping a vehicle to another state.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "Can I ship anything in my vehicle with them?",
        answer:
          "Many car shipping providers have restrictions on allowing personal belongings to be placed inside the vehicle during transportation. At Rapid Auto Shipping, customers can ship personal items weighing up to 100 pounds in their cars. However, it's important to note that the cargo insurance policy will not cover these unique items.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "How can I prepare my car for transport?",
        answer:
          "It is advisable to have your car inspected and undergo routine maintenance before transporting it to another state. After completing the task, it is advisable to take photographs and make notes of any scratches, dents, or dings that may already be present on your vehicle. It is essential to ensure you have a spare set of keys readily available upon receiving the car.",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        question: "What is an enclosed carrier?",
        answer:
          "An enclosed carrier is distinct from an open carrier in that it transports vehicles within a truck, protecting them from the elements and other external factors, as opposed to being exposed to the open air. Although it may be pricier, this option is highly recommended for luxury or collector cars due to its excellent protection against harsh weather conditions and potential damage from road debris.",
      },
    ],
    [],
  );

  return (
    <>
      <Head>
        <title>Ship Car to Another State | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Want to ship your car to another state? Rapid Auto Shipping is the best company to ship car to another state. Contact us at (833) 233-4447 and get the free quote!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/ship-car-to-another-state"
        />
        <meta
          property="og:title"
          content="Ship Car to Another State | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Want to ship your car to another state? Rapid Auto Shipping is the best company to ship car to another state. Contact us at (833) 233-4447 and get the free quote!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/ship-car-to-another-state"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751900268/ship_car_to_another_state_banner_msst9u.webp"
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
                    name: "ship-car-to-another-state",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/ship-car-to-another-state",
                    name: "ship-car-to-another-state",
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
              serviceType: "Car Shipping to Another State",
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
                "Professional car shipping services to transport your vehicle to another state. Safe, insured, and efficient interstate auto transport by Rapid Auto Shipping.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the most affordable method for moving an automobile to another state?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "An affordable open carrier vehicle transport service is one of the most cost-effective methods for shipping a car to another state. To further enhance affordability, consider opting for terminal to terminal delivery and selecting flexible scheduling.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the time frame for shipping a car?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The duration of car shipping can vary depending on factors such as the move's distance and the company's scheduling policies. In most locations in the contiguous United States, estimating a delivery time between three days and one week is reasonable.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the price of shipping an automobile to another state?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The typical cost of hiring another state vehicle shipping company ranges from $0.70 per mile for distances between 1000 and 1500 miles. Various factors determine the cost including distance, pick-up date, route, vehicle make and model, and transportation method.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I ship anything in my vehicle with them?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "At Rapid Auto Shipping, customers can ship personal items weighing up to 100 pounds in their cars. However, it's important to note that the cargo insurance policy will not cover these unique items.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How can I prepare my car for transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It is advisable to have your car inspected and undergo routine maintenance before transporting it to another state. Take photographs and make notes of any existing scratches, dents, or dings. Ensure you have a spare set of keys readily available.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is an enclosed carrier?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "An enclosed carrier transports vehicles within a truck, protecting them from the elements and other external factors. Although it may be pricier, this option is highly recommended for luxury or collector cars due to its excellent protection against harsh weather conditions and potential damage from road debris.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/services/ship-car-to-another-state",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751900268/ship_car_to_another_state_banner_msst9u.webp"
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
                    Ship Car to{" "}
                    <span className="text-[#ff5722]">Another State</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Want to ship car to another state? When shipping cars to
                    another state, you can choose how it gets done and which
                    company does it. Then your search ends here with us. Rapid
                    Auto Shipping is a dependable auto shipping company with
                    more than 14 years of state-to-state vehicle shipping
                    experience. Contact us for a safe, affordable, and
                    hassle-free shipping experience.
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
                        State to State Car Transport Service You Need
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Auto transport from state to state is becoming more and
                      more popular among Americans as a simple and reasonably
                      priced option for ship car across state. Because of their
                      dependability and convenience, auto transport services are
                      growing in popularity, whether for seasonal needs, new
                      purchases, or relocation.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Long-distance driving can be stressful and time-consuming
                      and cause unnecessary mileage that damages your car. Rapid
                      Auto Shipping is here to help with that. We provide
                      dependable, effective, and safe state to state auto
                      shipping services. Our staff makes sure that your car
                      arrives at its destination in top shape, on schedule, and
                      without any problems at all. We can help you whether you
                      need to ship car to another state or across the nation.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751900464/ship_car_to_another_state_2_dqpqlf.webp"
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

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{ backgroundColor: "#003366" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                  <div className="flex justify-center mb-8">
                    <div className="p-4 rounded-full bg-white/10">
                      <Truck className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    State to State Car Transport
                  </h2>
                  <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                    State-to-state car transport is a professional shipping
                    service for cars that lets you move your car from one state
                    to another quickly and safely without having to drive it
                    yourself. State-to-state auto transport is a convenient
                    option whether you're moving, buying a car from another
                    state, or traveling during the holidays.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Why Choose Rapid Auto Shipping?
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    In the continental United States of America, Rapid Auto
                    Shipping is the best company to ship car to another state.
                    We are experts at moving cars across the country from door
                    to door without any problems. Our team of professionals will
                    make sure that your car is delivered on time and with care.
                    Instead of putting extra miles on your car and going on
                    long, tiring road trips, let us take care of the details
                    while you relax and enjoy the ride.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg">
                    <div
                      className="p-3 rounded-full mx-auto mb-4 w-fit"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "#003366" }}
                    >
                      Professional Service
                    </h3>
                    <p className="text-gray-600">
                      Our team of professionals will make sure that your car is
                      delivered on time and with care.
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg">
                    <div
                      className="p-3 rounded-full mx-auto mb-4 w-fit"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "#003366" }}
                    >
                      Time Saving
                    </h3>
                    <p className="text-gray-600">
                      Instead of putting extra miles on your car and going on
                      long, tiring road trips, let us handle it.
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg">
                    <div
                      className="p-3 rounded-full mx-auto mb-4 w-fit"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "#003366" }}
                    >
                      Door to Door
                    </h3>
                    <p className="text-gray-600">
                      We move cars across the country from door to door without
                      any problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections - All visible at once */}
            <div className="py-16 bg-gradient-to-b from-white to-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                {/* Reasons Section */}
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2
                      className="text-3xl font-bold mb-4"
                      style={{ color: "#003366" }}
                    >
                      Reasons To Ship Car To Another State
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Some people choose to ship their cars across state lines
                      instead of driving them. In the following situations,
                      moving a car from one state to another is usually the best
                      choice:
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3
                              className="text-xl font-semibold mb-3"
                              style={{ color: "#003366" }}
                            >
                              {reason.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {reason.description}
                            </p>
                            <ul className="space-y-2">
                              {reason.benefits.map((benefit, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start space-x-2"
                                >
                                  <CheckCircle
                                    className="w-4 h-4 mt-1 flex-shrink-0"
                                    style={{ color: "#ff5722" }}
                                  />
                                  <span className="text-sm text-gray-600">
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <p className="text-lg text-gray-700">
                      No matter why you need to ship your car from one state to
                      another,{" "}
                      <span
                        className="font-semibold"
                        style={{ color: "#ff5722" }}
                      >
                        Rapid Auto Shipping
                      </span>{" "}
                      will make the process easy and affordable.
                    </p>
                  </div>
                </div>

                {/* Costs Section */}
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2
                      className="text-3xl font-bold mb-4"
                      style={{ color: "#003366" }}
                    >
                      Cost to Ship Car to Another State
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Shipping a vehicle over a long distance, such as from one
                      state to another, involves various factors. Also, these
                      factors affect the cost of car shipping. The average cost
                      of moving a car to another state is mentioned here to help
                      you understand a general shipping cost estimate.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {costRanges.map((range, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                      >
                        <div className="mb-4">
                          <DollarSign
                            className="w-12 h-12 mx-auto"
                            style={{ color: "#ff5722" }}
                          />
                        </div>
                        <h3
                          className="text-lg font-semibold mb-4"
                          style={{ color: "#003366" }}
                        >
                          {range.distance}
                        </h3>
                        <div
                          className="text-2xl font-bold"
                          style={{ color: "#ff5722" }}
                        >
                          {range.cost}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Factors Section */}
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2
                      className="text-3xl font-bold mb-4"
                      style={{ color: "#003366" }}
                    >
                      Factors Affecting the Cost of Shipping A Car to Another
                      State
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Several factors determine how much to transport a car to
                      another state. These typically consist of the following:
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {factors.map((factor, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className="flex-shrink-0 p-3 rounded-full"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            <div className="text-white">{factor.icon}</div>
                          </div>
                          <div className="flex-1">
                            <h3
                              className="text-xl font-semibold mb-3"
                              style={{ color: "#003366" }}
                            >
                              {factor.title}
                            </h3>
                            <p className="text-gray-600">
                              {factor.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-16">
              {/* Header */}
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                  State to State Car Shipping
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Professional auto transport services with various options to
                  meet your specific needs
                </p>
              </div>

              {/* Shipping Services Section */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-blue-900">
                    Our Shipping Services
                  </h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Choose from our comprehensive range of auto transport
                    services designed to meet every need and budget
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                      <div className="p-3 rounded-full text-white flex-shrink-0 bg-orange-600">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-blue-900">
                          Open Auto Shipping
                        </h3>
                        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-orange-600 text-white">
                          Budget-Friendly
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-center md:text-left">
                      Budget-friendly service using open-air trailers for
                      standard vehicles. Multiple vehicles transported at once
                      to reduce costs.
                    </p>
                  </div>

                  <div className="group bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                      <div className="p-3 rounded-full text-white flex-shrink-0 bg-orange-600">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.5-1.5a2.5 2.5 0 00-4 0l-7 7a2.5 2.5 0 004 0l7-7z"
                          />
                        </svg>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-blue-900">
                          Enclosed Auto Shipping
                        </h3>
                        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-orange-600 text-white">
                          Premium
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-center md:text-left">
                      Premium protection for luxury, classic, or vintage
                      vehicles using enclosed trailers with professional staff
                      care.
                    </p>
                  </div>

                  <div className="group bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                      <div className="p-3 rounded-full text-white flex-shrink-0 bg-orange-600">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-blue-900">
                          Door to Door Shipping
                        </h3>
                        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-orange-600 text-white">
                          Convenient
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-center md:text-left">
                      Convenient pickup and delivery at your chosen locations,
                      eliminating the hassle of visiting terminals.
                    </p>
                  </div>

                  <div className="group bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                      <div className="p-3 rounded-full text-white flex-shrink-0 bg-orange-600">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-blue-900">
                          Non-Running Car Transport
                        </h3>
                        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-orange-600 text-white">
                          Specialized
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-center md:text-left">
                      Specialized service for non-operational vehicles with
                      professional staff and specialized equipment.
                    </p>
                  </div>
                </div>
              </div>

              {/* How It Works and Cost Savings Section - Side by Side */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* How It Works Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-blue-900">
                      How to Ship Your Car
                    </h2>
                    <p className="text-slate-600">
                      Our streamlined process makes car shipping simple and
                      stress-free in just four easy steps
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-orange-600">
                        1
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-blue-900">
                          Request a Quote
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Visit our website or contact us through Live Chat,
                          email, or phone to get started.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-orange-600">
                        2
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-blue-900">
                          Book Your Shipment
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Schedule your shipment with our convenient electronic
                          contracts sent via email.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-orange-600">
                        3
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-blue-900">
                          Car Pickup
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Our skilled driver will inspect and load your car on
                          the appointed day and time.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-orange-600">
                        4
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-blue-900">
                          Car Transportation
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Receive your car at destination with estimated arrival
                          time provided before delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost Savings Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-blue-900">
                      Cheapest Ways to Ship Your Car
                    </h2>
                    <p className="text-slate-600">
                      Smart strategies to reduce your car shipping costs while
                      maintaining quality service
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-orange-600">
                        1
                      </div>
                      <p className="text-slate-700 leading-relaxed text-center md:text-left">
                        Pick Open Transportation - Most affordable option
                        compared to enclosed transport
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-orange-600">
                        2
                      </div>
                      <p className="text-slate-700 leading-relaxed text-center md:text-left">
                        Be Flexible with Your Schedule - Book during off-peak
                        times for better rates
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-orange-600">
                        3
                      </div>
                      <p className="text-slate-700 leading-relaxed text-center md:text-left">
                        Avoid Expedited Shipping - Standard shipping costs
                        significantly less
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-orange-600">
                        4
                      </div>
                      <p className="text-slate-700 leading-relaxed text-center md:text-left">
                        Choose Terminal to Terminal - Save money by using
                        transportation hubs
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-blue-900">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                      Pro Tip
                    </h3>
                    <p className="text-slate-200 leading-relaxed">
                      Booking in advance and being flexible with your dates can
                      save you hundreds of dollars. Last-minute or expedited
                      shipping requests typically cost significantly more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Popular Routes Section */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-blue-900">
                    Popular Interstate Routes
                  </h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Explore our most popular shipping routes with estimated
                    costs, distances, and delivery times
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-900">
                        <th className="text-white p-4 text-left font-semibold rounded-tl-xl">
                          Route
                        </th>
                        <th className="text-white p-4 text-left font-semibold">
                          Distance (Miles)
                        </th>
                        <th className="text-white p-4 text-left font-semibold">
                          Delivery Time
                        </th>
                        <th className="text-white p-4 text-left font-semibold rounded-tr-xl">
                          Cost Range
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-blue-900">
                          California to Texas
                        </td>
                        <td className="p-4 text-slate-600">1,500 - 1,800</td>
                        <td className="p-4 text-slate-600">3 - 5 Days</td>
                        <td className="p-4 font-semibold text-orange-600">
                          $900 - $1,500
                        </td>
                      </tr>
                      <tr className="bg-slate-50 border-b hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-blue-900">
                          Florida to New York
                        </td>
                        <td className="p-4 text-slate-600">1,000 - 1,300</td>
                        <td className="p-4 text-slate-600">2 - 4 Days</td>
                        <td className="p-4 font-semibold text-orange-600">
                          $800 - $1,400
                        </td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-blue-900">
                          Illinois to California
                        </td>
                        <td className="p-4 text-slate-600">1,800 - 2,100</td>
                        <td className="p-4 text-slate-600">4 - 6 Days</td>
                        <td className="p-4 font-semibold text-orange-600">
                          $1,000 - $1,600
                        </td>
                      </tr>
                      <tr className="bg-slate-50 border-b hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-blue-900">
                          Texas to Florida
                        </td>
                        <td className="p-4 text-slate-600">900 - 1,200</td>
                        <td className="p-4 text-slate-600">2 - 4 Days</td>
                        <td className="p-4 font-semibold text-orange-600">
                          $700 - $1,300
                        </td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-blue-900">
                          New York to Texas
                        </td>
                        <td className="p-4 text-slate-600">1,500 - 1,700</td>
                        <td className="p-4 text-slate-600">3 - 5 Days</td>
                        <td className="p-4 font-semibold text-orange-600">
                          $900 - $1,500
                        </td>
                      </tr>
                      <tr className="bg-slate-50 border-b hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-blue-900">
                          Arizona to Washington
                        </td>
                        <td className="p-4 text-slate-600">1,200 - 1,500</td>
                        <td className="p-4 text-slate-600">3 - 5 Days</td>
                        <td className="p-4 font-semibold text-orange-600">
                          $850 - $1,400
                        </td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-blue-900">
                          Georgia to California
                        </td>
                        <td className="p-4 text-slate-600">2,200 - 2,400</td>
                        <td className="p-4 text-slate-600">5 - 7 Days</td>
                        <td className="p-4 font-semibold text-orange-600">
                          $1,200 - $1,800
                        </td>
                      </tr>
                      <tr className="bg-slate-50 border-b hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-blue-900">
                          Ohio to Florida
                        </td>
                        <td className="p-4 text-slate-600">900 - 1,100</td>
                        <td className="p-4 text-slate-600">2 - 4 Days</td>
                        <td className="p-4 font-semibold text-orange-600">
                          $750 - $1,300
                        </td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-blue-900">
                          North Carolina to Texas
                        </td>
                        <td className="p-4 text-slate-600">1,200 - 1,400</td>
                        <td className="p-4 text-slate-600">3 - 5 Days</td>
                        <td className="p-4 font-semibold text-orange-600">
                          $850 - $1,400
                        </td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-blue-900">
                          Pennsylvania to Illinois
                        </td>
                        <td className="p-4 text-slate-600">600 - 800</td>
                        <td className="p-4 text-slate-600">1 - 3 Days</td>
                        <td className="p-4 font-semibold text-orange-600">
                          $600 - $1,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    Ready to Ship Your Car?
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Get a free quote today and experience professional car
                    shipping services with Rapid Auto Shipping
                  </p>

                  <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                    <button className="px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-orange-600">
                      Get Free Quote
                    </button>
                  </Link>
                </div>
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
                        Rapid Auto Shipping: Your Trusted Ship Car to Another
                        State Partner
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      At Rapid Auto Shipping, we know that entrusting your car
                      to someone else is a big decision. That's why we're
                      committed to delivering a hassle-free, worry-free, and
                      secure auto transport experience. With years of experience
                      and thousands of happy customers in the U.S., we've
                      established an excellent reputation.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      To ship a car to another state, begin by making a quick
                      phone call. Please feel free to reach out to our team of
                      transport experts at +1 (833) 233-4447.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        {/* Image with enhanced effects */}
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1748000365/Open-Auto-shipping_futyjz.webp"
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
