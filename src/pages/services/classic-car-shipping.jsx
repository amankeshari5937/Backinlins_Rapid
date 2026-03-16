"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import { Calculator, Home as HomeIcon } from "lucide-react";
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
  Wrench,
  FileText,
  Package,
  Fuel,
  TrendingUp,
  Heart,
  Settings,
  Lock,
  Phone,
  Clipboard,
  User,
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

  const preparationTips = useMemo(
    () => [
      {
        title: "Give Your Car a Good Clean",
        description:
          "A clean car isn't just for appearances; it makes it easier for us to photograph the condition of your vehicle before it's transported. Take a few minutes to wash the outside and clean out any debris in the interior. This way, you and our drivers can quickly spot and record any existing scratches or damages.",
      },
      {
        title: "Snap Photos for Your Peace of Mind",
        description:
          "We know how much your vehicle is worth to you, and we do everything we can to safeguard it. Before pickup, take a few photos of your car from different angles, including close-ups of any existing damage. These photos likely serve as a handy reference when your vehicle arrives.",
      },
      {
        title: "Remove Personal Items",
        description:
          "As much as we'd like to help move your favorite beach chair or gym bag, removing all personal items from your car is best. This keeps your stuff safe and makes sure your car ships as securely as possible. And it keeps the weight down to safe levels.",
      },
      {
        title: "Check Under the Hood",
        description:
          "We take care of the road; you take care of the engine. Keep your vehicle in good working order by checking for leaks, topping off fluids, and charging its battery. Let us know if there are any quirky features so our drivers can handle your vehicle with precaution.",
      },
      {
        title: "Adjust Tire Pressure and Fuel Level",
        description:
          "Tires full of air make loading and unloading a breeze. Leave a quarter tank of fuel, just enough for a seamless transition at pickup and delivery without adding extra weight.",
      },
      {
        title: "Prepare Key Documents and the Keys",
        description:
          "Please keep your registration and any other required shipping documents available. Also, remember to bring an extra set of keys for us!",
      },
    ],
    []
  );

  const vehicleTypes = useMemo(
    () => [
      {
        title: "Luxury, Exotic & Antique Car Transport:",
        description:
          "High-end cars require more security and care. Our enclosed transportation choices guarantee a damage-free delivery and best protection for exotic, sports, and luxury cars.",
      },
      {
        title: "Motorcycle Transport:",
        description:
          "we also have expertise in motorcycle shipping service; we provide both open and enclosed delivery to protect your bike from road debris and environmental elements.",
      },
      {
        title: "SUVs, Trucks & Oversized Vehicles:",
        description:
          "Larger vehicles including vans, pickup trucks, and SUVs call for specific transportation options. Our staff guarantees safe loading and delivery even for lifted or modified vehicles.",
      },
      {
        title: "RV & Motorhome Transport:",
        description:
          "Needs to move RV or motorhome? From small camper vans to big motorhomes, our professional transportation services handle everything.",
      },
      {
        title: "Heavy Equipment & Specialty Vehicles:",
        description:
          "Offering both domestic and long-distance shipping options, we move building tools, farming gear, and other large vehicles.",
      },
      {
        title: "Boat & Watercraft Transport:",
        description:
          "Whether you need to ship a jet ski, fishing boat, or yacht, we offer specialist carriers and expert handling to guarantee seamless arrival to your location.",
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <Car className="w-5 h-5" />,
        question: "Which method is best for shipping a classic car?",
        answer:
          "Enclosed auto shipping will protect your classic car from any road hazards and be safeguarded from potentially harmful weather conditions.",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        question: "How do you move a classic car?",
        answer:
          "Classic automobile shipping is similar to conventional vehicle shipping. Get exotic car shipping quotes, book a transport, update your insurance, and examine the car before and after transfer. The enclosed auto transport is the best way to move a classic car.",
      },
      {
        icon: <Package className="w-5 h-5" />,
        question: "Can I Put Personal Items in the Car for Shipping?",
        answer:
          "Your personal items are not covered by insurance, and for safety reasons, we generally do not allow it inside the vehicle. If you need to ship items, consider using a separate shipping service. However, small, non-valuable items up to 100 pounds are allowed at your peril, so it's best to discuss your specific needs with our shipping coordinator.",
      },
      {
        icon: <Wrench className="w-5 h-5" />,
        question: "Can We Transport a Vehicle That Isn't Running?",
        answer:
          "Yes! We transport non-running vehicles with a winch-equipped trailer. There is an upcharge for the additional gear and labor. When making reservations online or with our representative on our phone reservation lines, please mark your vehicle as a breakdown or not running.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "What time should I place my order?",
        answer:
          "Booking the service should be made two weeks before to accommodate the requested pick-up dates and ensure that there are enough carriers. Summer, holiday season, and others usually call for a booking to be made at least three or four weeks before the service date. Last-minute shipments are also accepted and incur an expedited charge, but they could get pretty expensive. Early booking may ensure a reasonable price rate and avoid confusion when planning to arrange things.",
      },
      {
        icon: <User className="w-5 h-5" />,
        question: "Is a Person Required for a Pick-Up and Vehicle Delivery?",
        answer:
          "Yes, a person must be present to accept the vehicle at both pick-up and delivery. The inspection report must be signed, and they must also supply a spare set of keys. Have a friend or relative sign on your behalf if you are unavailable.",
      },
    ],
    []
  );

  const costEstimates = useMemo(
    () => [
      {
        title: "Under 100 miles, short distances",
        rate: "$3.38 per mile",
        description: "Perfect for local moves and short-distance transport",
      },
      {
        title: "Long distances over 1,000+ miles",
        rate: "$1.14 per mile",
        description: "Economical rates for cross-country shipping",
      },
    ],
    []
  );

  const costFactors = useMemo(
    () => [
      {
        title: "Seasonal Demand:",
        description:
          "Because of increased demand, prices often climb during peak seasons like summer and January.",
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        title: "Size and Weight:",
        description:
          "Larger and heavier vehicles demand more space and resources, which drives higher expenses.",
        icon: <Truck className="w-6 h-6" />,
      },
      {
        title: "Fuel Prices:",
        description:
          "Shipping rates are directly impacted by changes in gas prices.",
        icon: <Fuel className="w-6 h-6" />,
      },
      {
        title: "Pickup & Delivery Locations:",
        description:
          "Because of limited carrier availability, shipping to or from remote areas could cost extra.",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        title: "Transport Method:",
        description:
          "Enclosed transportation provides maximum protection but costs more than open transportation, which is a more affordable choice.",
        icon: <Shield className="w-6 h-6" />,
      },
    ],
    []
  );

  const processSteps = useMemo(
    () => [
      {
        number: "1",
        title: "Request an Instant Auto Shipping Quote:",
        description:
          "Getting an auto transport quote is the first step to ship a classic car. Fill out the details in the auto shipping calculator, or get in touch with us by email or call (833) 233-4447.",
        icon: <FileText className="w-6 h-6" />,
      },
      {
        number: "2",
        title: "Booking of the Shipment:",
        description:
          "Once you get the auto transportation quote, you need to schedule your shipments. For your convenience, we provide electronic contracts. An email with a link will be sent to you so you can conveniently schedule your service online.",
        icon: <Phone className="w-6 h-6" />,
      },
      {
        number: "3",
        title: "Pickup:",
        description:
          "On the appointed day and within the scheduled time limit, our skilled auto transport driver will come to pick up your classic vehicle. Before loading the car on the carrier, they will inspect it and record its condition.",
        icon: <Clipboard className="w-6 h-6" />,
      },
      {
        number: "4",
        title: "Transportation:",
        description:
          "The carrier will provide you with an estimated arrival time a few hours before delivery. If you are unable to do so, you can ask a reliable person to accept the car on your behalf.",
        icon: <Clock className="w-6 h-6" />,
      },
    ],
    []
  );

  const whyChooseReasons = useMemo(
    () => [
      {
        number: "1",
        title: "Superior Protection for Your Classic Car:",
        description:
          "Because of their value and delicate parts, classic and vintage vehicles demand more care. Our included transportation choice guarantees your car comes in perfect condition by providing maximum protection from weather, road trash, and possible damage.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        number: "2",
        title: "Expert Handling by Trained Professionals:",
        description:
          "Our staff specializes in high-value, antique car transport solutions. Using industry-best loading techniques and securing methods to stop any movement during transit, our qualified drivers treat classic cars with the greatest care.",
        icon: <Users className="w-6 h-6" />,
      },
      {
        number: "3",
        title: "Fully Insured for Your Peace of Mind:",
        description:
          "Your vehicle's safety comes first. Comprehensive insurance coverage is part of our classic auto shipping program, so you can relax knowing your vintage car is safe all through the trip.",
        icon: <Heart className="w-6 h-6" />,
      },
      {
        number: "4",
        title: "Hassle-Free and Convenient Transport:",
        description:
          "Long distance driving in a classic car can cause unnecessary wear and tear. Your car is safely delivered with our expert classic vehicle transport service, saving you extra mileage, mechanical problems, and travel costs.",
        icon: <Truck className="w-6 h-6" />,
      },
      {
        number: "5",
        title: "Flexible Transport Options to Fit Your Needs:",
        description:
          "Based on your budget and the level of protection required, we provide both open and enclosed transportation choices. While open transport is a budget-friendly option for classic car owners searching for reasonably priced classic vehicle shipping, enclosed classic car transport offers the best degree of security.",
        icon: <Settings className="w-6 h-6" />,
      },
    ],
    []
  );

  const haulerOptions = useMemo(
    () => [
      {
        number: "1",
        title: "Enclosed Classic Car Transport: Maximum Protection",
        description:
          "Our enclosed classic car transport service is the best option for the maximum degree of safety. Your vintage car is covered from weather, road trash, and outside elements within a totally enclosed trailer. This is the recommended choice for highly valuable vintage cars that call for extra attention.",
        icon: <Lock className="w-6 h-6" />,
      },
      {
        number: "2",
        title: "Open Auto Transport: Cost-Effective & Reliable",
        description:
          "Open auto transportation is a fantastic choice if you're trying for a less expensive solution. Like dealers or collectors moving multiple cars, your car will be firmly fastened onto an open trailer. Although this choice exposes the vehicle to environmental elements, it is still a safe and often used shipping choice.",
        icon: <DollarSign className="w-6 h-6" />,
      },
      {
        number: "3",
        title:
          "Door to Door Classic Vehicle Transport: Hassle-Free Pickup & Delivery",
        description:
          "Max convenience comes from our door to door classic vehicle transport. To reduce handling and guarantee a seamless experience, we pick up your vintage car from your doorsteps and directly deliver it to your given location.",
        icon: <HomeIcon className="w-6 h-6" />,
      },
      {
        number: "4",
        title: "Expedited Classic Car Shipping: Fast & Efficient",
        description:
          "Require your classic car shipped right away. As classic car shippers, our expedited classic car shipping service guarantees the fastest delivery by giving your vehicle top priority for shipping. For auctions, auto shows, or last-minute moves, this option is perfect.",
        icon: <Clock className="w-6 h-6" />,
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Nationwide Classic Car Shipping Service</title>
        <meta
          name="description"
          content="Ship your classic car safely with Rapid Auto Shipping. Our expert team ensures seamless, efficient classic car transport tailored to your needs. Get quote now!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/classic-car-shipping"
        />
        <meta
          property="og:title"
          content="Nationwide Classic Car Shipping Service"
        />
        <meta
          property="og:description"
          content="Ship your classic car safely with Rapid Auto Shipping. Our expert team ensures seamless, efficient classic car transport tailored to your needs. Get quote now!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/classic-car-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751619637/Classic_Car_Shipping_1_qtiu3w.webp"
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
                    name: "classic-car-shipping",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/classic-car-shipping",
                    name: "classic-car-shipping",
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
              serviceType: "Classic Car Shipping",
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
                "Secure and specialized shipping for classic cars across the United States. Enclosed auto transport, insured and handled by experienced professionals.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Which method is best for shipping a classic car?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Enclosed auto shipping will protect your classic car from any road hazards and be safeguarded from potentially harmful weather conditions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do you move a classic car?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Classic automobile shipping is similar to conventional vehicle shipping. Get exotic car shipping quotes, book a transport, update your insurance, and examine the car before and after transfer. The enclosed auto transport is the best way to move a classic car.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I Put Personal Items in the Car for Shipping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Your personal items are not covered by insurance, and for safety reasons, we generally do not allow it inside the vehicle. If you need to ship items, consider using a separate shipping service. However, small, non-valuable items up to 100 pounds are allowed at your peril, so it's best to discuss your specific needs with our shipping coordinator.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can We Transport a Vehicle That Isn't Running?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! We transport non-running vehicles with a winch-equipped trailer. There is an upcharge for the additional gear and labor. When making reservations online or with our representative on our phone reservation lines, please mark your vehicle as a breakdown or not running.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What time should I place my order?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Booking the service should be made two weeks before to accommodate the requested pick-up dates and ensure that there are enough carriers. Summer, holiday season, and others usually call for a booking to be made at least three or four weeks before the service date. Last-minute shipments are also accepted and incur an expedited charge, but they could get pretty expensive. Early booking may ensure a reasonable price rate and avoid confusion when planning to arrange things.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is a Person Required for a Pick-Up and Vehicle Delivery?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, a person must be present to accept the vehicle at both pick-up and delivery. The inspection report must be signed, and they must also supply a spare set of keys. Have a friend or relative sign on your behalf if you are unavailable.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/services/classic-car-shipping",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751619780/Classic_Car_Shipping_Banner_Image_vrpfwu.webp"
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
                    Classic Car{" "}
                    <span className="text-[#ff5722]">Shipping Service</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    Being the owner of a classic car is always accompanied by
                    numerous considerations, and moving it from one location to
                    another is one of them. Classic vehicle shipping is not the
                    same as a normal everyday car, it's all about protecting its
                    value, delicate components, and historical significance. At
                    Rapid Auto Shipping, our classic car shipping service backed
                    by fourteen years of experience, ensures your cherished
                    vehicles reach their destination safely, efficiently, and on
                    time.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto relative z-30">
                <TransportForm />
              </div>
            </div>
          </section>

          <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header with Image Section */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight">
                    <span style={{ color: "#003366" }}>Why </span>
                    <span style={{ color: "#ff5722" }}>
                      Rapid Auto Shipping
                    </span>
                    <span style={{ color: "#003366" }}>
                      {" "}
                      is the Best Choice for Classic Car Shipping
                    </span>
                  </h2>
                </div>

                {/* Content with Image Side by Side */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div
                      className="bg-white rounded-3xl p-8 shadow-xl border-l-4"
                      style={{ borderColor: "#ff5722 " }}
                    >
                      <p
                        className="text-lg leading-relaxed mt-10"
                        style={{ color: "#003366" }}
                      >
                        At Rapid Auto Shipping, we know that your vintage or
                        classic car is a sentimental possession rather than just
                        a car. Whether your classic car is being sold, bought,
                        or relocated, our <strong>classic car shipping</strong>{" "}
                        experts guarantee hassle-free, safe, and secure
                        transportation. Here's why entrusting your beloved car
                        to our reliable hands is the best solution:
                      </p>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="flex-1">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        {/* Image Placeholder - Replace this div with your actual image */}
                        <div className="text-center">
                          <Image
                            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751619317/Classic_Car_Shipping_2_n3p6wv.webp"
                            alt="Shipping Service - Professional Transport Solutions"
                            width={800}
                            height={400}
                            loading="lazy"
                            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl 
                            transition-all duration-700 ease-in-out
                            group-hover:scale-105 group-hover:shadow-3xl
                            group-hover:brightness-110 group-hover:contrast-105"
                          />
                        </div>
                      </div>

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

                      {/* Floating Badge */}
                      <div className="absolute top-6 right-6 bg-white/90 rounded-full px-4 py-2 shadow-lg">
                        <div className="flex items-center space-x-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us - Hexagon Pattern */}
              <div className="mb-20">
                <div className="grid gap-6">
                  {whyChooseReasons.map((reason, index) => (
                    <div
                      key={index}
                      className={`relative group transform transition-all duration-500 hover:-translate-y-2 ${
                        index % 2 === 0 ? "" : "lg:ml-20"
                      }`}
                    >
                      <div
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border-r-4"
                        style={{
                          borderColor: index % 2 === 0 ? "#ff5722" : "#003366",
                        }}
                      >
                        <div className="flex items-start gap-6">
                          {/* Number Badge */}
                          <div className="relative flex-shrink-0">
                            {/* Pulse Ring */}
                            <div
                              className="absolute inset-0 rounded-full animate-ping opacity-25"
                              style={{
                                backgroundColor:
                                  index % 2 === 0 ? "#ff5722" : "#003366",
                              }}
                            ></div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3
                              className="text-xl font-bold mb-3"
                              style={{ color: "#003366" }}
                            >
                              {reason.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {reason.description}
                            </p>
                          </div>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                          <div
                            className="absolute top-4 right-4 w-8 h-8 transform rotate-45"
                            style={{
                              backgroundColor:
                                index % 2 === 0 ? "#ff5722" : "#003366",
                              opacity: 0.1,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conclusion Paragraph */}
                <div
                  className="mt-12 bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-3xl p-10 shadow-xl border-2"
                  style={{ borderColor: "#ff5722" }}
                >
                  <p
                    className="text-lg text-center font-medium leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    As one of the best collector car transport companies, our
                    goal is to provide first-rate auto shipping solutions
                    specifically for vintage and classic cars. Our knowledge,
                    modern safety precautions, and dedication to customer
                    happiness ensure a flawless and worry-free delivery.
                  </p>
                </div>
              </div>

              {/* Flexible Hauler Options - Diamond Layout */}
              <div className="mb-16">
                <div className="text-center mb-16">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Flexible Classic Car Hauler Options for{" "}
                    <span style={{ color: "#ff5722" }}>
                      Safe and Effective Shipping
                    </span>
                  </h2>
                  <div
                    className="w-32 h-2 mx-auto rounded-full"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto mt-6">
                    We believe every classic car is different and calls for
                    specific care during transportation. Thus, we provide a
                    number of choices for classic car hauling catering to your
                    particular requirements. Whether you are moving a valuable
                    antique or a vintage collectible, we have the correct
                    solution.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {haulerOptions.map((option, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 p-8 overflow-hidden"
                    >
                      {/* Background Pattern */}
                      <div
                        className="absolute top-0 left-0 w-full h-2"
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#ff5722" : "#003366",
                        }}
                      ></div>

                      <div
                        className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-5"
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#ff5722" : "#003366",
                        }}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <h3
                            className="text-xl font-bold flex-1"
                            style={{ color: "#003366" }}
                          >
                            {option.title}
                          </h3>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                          {option.description}
                        </p>
                      </div>

                      {/* Hover Gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${
                            index % 2 === 0 ? "#ff5722" : "#003366"
                          }, transparent)`,
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-20">
                <div
                  className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 shadow-2xl animate-pulse-glow"
                  style={{
                    background: "linear-gradient(135deg, #ff5722, #ff7043)",
                  }}
                >
                  <Calculator className="w-16 h-16 text-white animate-float" />
                </div>

                <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight text-white animate-slide-in-up">
                  Cost to Ship a Classic Car:{" "}
                  <span style={{ color: "#ff5722" }}>
                    Pricing Breakdown & Key Factors
                  </span>
                </h2>

                <div
                  className="max-w-4xl mx-auto bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <p className="text-lg leading-relaxed text-gray-200">
                    Vintage car transport requires special care, and several
                    factors can affect the cost to ship a classic car. Whether
                    you are moving a luxury antique, a rare collectible, or a
                    vintage muscle car, knowing the pricing structure will
                    enable you to make an informed decision.
                  </p>
                </div>
              </div>

              {/* Cost Estimates Cards */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-in-left">
                    Average Cost Estimates:
                  </h2>
                  <div
                    className="w-24 h-1 mx-auto rounded-full animate-expand"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {costEstimates.map((estimate, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 animate-card-reveal"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Glowing Border Effect */}
                      <div
                        className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{
                          background:
                            "linear-gradient(135deg, #ff5722, #ff7043)",
                        }}
                      ></div>

                      <div className="relative z-10 text-center">
                        <h3 className="text-xl font-bold text-white mb-4">
                          {estimate.title}
                        </h3>

                        <div
                          className="text-3xl font-bold mb-4"
                          style={{ color: "#ff5722" }}
                        >
                          {estimate.rate}
                        </div>

                        <p className="text-gray-300">{estimate.description}</p>
                      </div>

                      {/* Floating Particles */}
                      <div
                        className="absolute top-4 right-4 w-2 h-2 rounded-full animate-ping"
                        style={{ backgroundColor: "#ff5722", opacity: 0.6 }}
                      ></div>
                      <div
                        className="absolute bottom-4 left-4 w-1 h-1 rounded-full animate-ping"
                        style={{
                          backgroundColor: "#ff5722",
                          opacity: 0.4,
                          animationDelay: "1s",
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Factors Section */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-in-right">
                    Important Factors Influencing{" "}
                    <span style={{ color: "#ff5722" }}>
                      Cost to Ship a Classic Car
                    </span>
                  </h2>
                  <div
                    className="w-24 h-1 mx-auto rounded-full animate-expand"
                    style={{
                      backgroundColor: "#ff5722",
                      animationDelay: "0.5s",
                    }}
                  ></div>
                </div>

                <div className="space-y-6">
                  {costFactors.map((factor, index) => (
                    <div
                      key={index}
                      className="group bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-x-2 animate-slide-in-stagger"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className="flex items-start gap-6">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        >
                          <div className="text-white">{factor.icon}</div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3">
                            {factor.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {factor.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Example */}
              <div className="mb-20">
                <div
                  className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl p-10 border border-white/20 shadow-2xl animate-fade-in-up"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Pricing Example
                    </h3>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      Shipping a classic Mustang from Chicago to Los Angeles
                      (approximately 2,000 miles) might cost anywhere between{" "}
                      <span className="font-bold" style={{ color: "#ff5722" }}>
                        $1,500 to $2,500
                      </span>
                      , depending on the transportation method and particular
                      shipping conditions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div className="mb-16">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-in-up">
                    Process of{" "}
                    <span style={{ color: "#ff5722" }}>
                      Classic Car Shipping Service
                    </span>
                  </h2>
                  <div
                    className="w-24 h-1 mx-auto rounded-full animate-expand"
                    style={{
                      backgroundColor: "#ff5722",
                      animationDelay: "1.2s",
                    }}
                  ></div>
                  <p
                    className="text-lg text-gray-300 max-w-3xl mx-auto mt-6 animate-fade-in"
                    style={{ animationDelay: "1.4s" }}
                  >
                    Our classic car shipping process is easy and hassle-free. To
                    book your classic auto shipping, follow simple steps:
                  </p>
                </div>

                <div className="grid gap-8">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`group flex flex-col lg:flex-row items-center gap-8 animate-process-reveal ${
                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                      style={{ animationDelay: `${index * 0.3 + 1.6}s` }}
                    >
                      {/* Step Content */}
                      <div className="flex-1 bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
                        <div className="flex items-start gap-6">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                            style={{
                              backgroundColor:
                                index % 2 === 0 ? "#ff5722" : "#003366",
                            }}
                          >
                            <div className="text-white">{step.icon}</div>
                          </div>

                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-4">
                              {step.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step Number Circle */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <div className="relative inline-block mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    <span className="block" style={{ color: "#003366" }}>
                      Essential Tips
                    </span>
                    <span
                      className="block text-4xl md:text-4xl mt-2"
                      style={{ color: "#ff5722" }}
                    >
                      for Hassle-Free Classic Car Shipping
                    </span>
                  </h2>
                  <div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                <div
                  className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed"
                  style={{ color: "#003366" }}
                >
                  <p>
                    We know your classic car is more than just a car; it's a
                    reflection of your passion, dedication and hard work. If
                    you're shipping your beloved car across the country for
                    relocation, shipping a car to a relative, or buying your
                    dream vehicle from out of state, we're here to make shipping
                    easy and secure.
                  </p>
                  <p>
                    As we give our all to protect your vehicle, you also have
                    the responsibility to prepare our vehicle appropriately.
                    Preparing your car ahead of time allows us to go the extra
                    mile and make sure everything goes smoothly. Here are a few
                    tips for you to prepare your car for the journey:
                  </p>
                </div>
              </div>

              {/* Tips Section - Two Boxes Per Row */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-8">
                  {preparationTips.map((tip, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-8 border-l-8"
                      style={{
                        borderLeftColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                      }}
                    >
                      <div>
                        <h3
                          className="text-2xl font-bold mb-4"
                          style={{ color: "#003366" }}
                        >
                          {tip.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {tip.description}
                        </p>
                      </div>

                      {/* Subtle hover indicator */}
                      <div
                        className="absolute top-8 right-8 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#ff5722" : "#003366",
                        }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Bottom Message */}
                <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-8 border border-gray-200">
                  <p
                    className="text-lg text-center font-medium leading-relaxed"
                    style={{ color: "#003366" }}
                  >
                    At Rapid Auto Shipping, we handle your vehicle like it's our
                    own. By taking these simple steps, you'll help us give your
                    vehicle the best care possible on the road. Got questions or
                    special requests? Don't be afraid to call us; we're always
                    here to help.
                  </p>
                </div>
              </div>

              {/* Vehicle Types Section - Clean Grid */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Other Vehicles We
                    <span
                      className="block md:inline"
                      style={{ color: "#ff5722" }}
                    >
                      {" "}
                      Specialize in Transporting
                    </span>
                  </h2>
                  <div
                    className="w-24 h-1 mx-auto rounded-full mt-4"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>
                </div>

                <div className="max-w-4xl mx-auto mb-12">
                  <p className="text-lg text-gray-700 text-center leading-relaxed">
                    We provide dependable shipping options not only for classic
                    cars but also for a broad range of vehicles. Our
                    knowledgeable staff guarantees safe and secure
                    transportation whether you need us to move a luxury car, a
                    motorbike, or even an oversized vehicle.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {vehicleTypes.map((vehicle, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border-r-6"
                      style={{
                        borderRightColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                      }}
                    >
                      <div className="flex items-start gap-6">
                        <div
                          className="w-4 h-4 rounded-full mt-2 flex-shrink-0"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                          }}
                        ></div>

                        <div className="flex-1">
                          <h3
                            className="text-xl font-bold mb-3"
                            style={{ color: "#003366" }}
                          >
                            {vehicle.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {vehicle.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simple CTA */}
              <div
                className="text-center bg-white rounded-lg shadow-lg p-12 border-2"
                style={{ borderColor: "#ff5722" }}
              >
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ color: "#003366" }}
                >
                  Get a Free Quote Tailored for Your Need to Book Vehicle
                  Transportation
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Ready to ship your vehicle with confidence? Our expert team is
                  here to provide personalized shipping solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="https://rapidautoshipping.com/calculator">
                    <button
                      className="px-8 py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      Get Your Free Quote
                    </button>
                  </Link>
                  <Link href="tel:+18332334447">
                    <button
                      className="px-8 py-3 rounded-lg font-semibold text-lg border-2 transition-all duration-300 hover:scale-105"
                      style={{ borderColor: "#003366", color: "#003366" }}
                    >
                      Contact Our Experts
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
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        About Rapid Auto Shipping
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      At Rapid Auto Shipping, we know that putting your car in
                      someone else's hands is a big decision. That's why we're
                      committed to delivering a hassle-free, worry-free, and
                      secure auto transport experience. With years of experience
                      and thousands of happy customers in the U.S., we've
                      established a reputation for excellence.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Our team is aware that shipping a car, especially a
                      vintage or valuable one, requires careful handling and
                      attention to detail. For this reason, we provide
                      customised transportation solutions with open transport
                      for affordable choices and enclosed shipping for maximum
                      security. To guarantee a flawless shipping experience, we
                      give customer satisfaction top priority along with regular
                      updates, open pricing, and dedicated customer support.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Rapid Auto Shipping is dedicated to making relocation,
                      vehicle purchase from out of state, or classic car
                      shipping services seamless, safe, and stress-free. Get the
                      quote now!
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
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751619637/Classic_Car_Shipping_1_qtiu3w.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          width={800}
                          height={500}
                          loading="lazy"
                          className="w-full h-[500px] object-cover rounded-2xl shadow-2xl 
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