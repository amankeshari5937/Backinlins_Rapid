"use client";

import React, { useState } from "react";

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
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import ShippingBanner from "@/components/CommonComponents/ShippingBanner";
import KeyBanner from "@/components/CommonComponents/key-banner";

const Hello = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
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

  const faqData = [
    {
      icon: <Package className="w-5 h-5" />,
      question: "Can I ship personal items in my car?",
      answer:
        "Our POV military car shipping services allow you to keep one suitcase or box in the trunk of your car at no extra cost. You can transport up to 100 pounds of personal items in your vehicle, provided they are securely stored in the trunk.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "How long does military car shipping take?",
      answer:
        "When you place an order, you will receive an estimated transit time for your shipment. This will provide you with a delivery window indicating when your car will be delivered. Transit times depend on the moving distance. With each delivery being unique, your car may be delivered faster than the estimated transit time provided.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Do you offer on-base pickup and delivery?",
      answer:
        "Yes, we can pick up and deliver at a military base. It has to be acceptable to the base commander, though. Our customer support team will work closely with you to meet your exact specifications, ensuring a stress-free shipment.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "What's the cost to ship a car for a PCS move?",
      answer:
        "For a military PCS move, the cost to ship a car (Privately Owned Vehicle or POV) typically ranges from $600 to $2,000 per vehicle, depending on factors like destination and method of transport.",
    },
  ];
  return (
    <>
      <Head>
        <title>Military Auto Shipping | Military PCS Car Shipping</title>
        <meta
          name="description"
          content="We offer discounts for military auto shipping. Rapid Auto shipping helped 100s of veterans ship their car daily. Call us (833) 233-4447 for more details."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/military-auto-shipping"
        />
        <meta
          property="og:title"
          content="Military Auto Shipping | Military PCS Car Shipping"
        />
        <meta
          property="og:description"
          content="We offer discounts for military auto shipping. Rapid Auto shipping helped 100s of veterans ship their car daily. Call us (833) 233-4447 for more details."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/military-auto-shipping"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752498157/Military_auto_shipping_htcucj.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Military Auto Shipping",
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
                "We offer discounts for military auto shipping. Rapid Auto shipping helped 100s of veterans ship their car daily. Call us (833) 233-4447 for more details.",
              url: "https://rapidautoshipping.com/military-auto-shipping",
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
                  name: "military-auto-shipping",
                  item: "https://rapidautoshipping.com/military-auto-shipping",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752498157/Military_auto_shipping_htcucj.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752498157/Military_auto_shipping_htcucj.webp"
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
                    <span className="text-[rgb(255,87,34)]">
                      Military Auto Shipping{" "}
                    </span>
                    Service
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Rapid Auto Shipping offers trusted military auto shipping
                    services, including the secure relocation of service
                    members' privately owned vehicles (POVs) during a stressful
                    PCS move, as well as specialized military heavy vehicle
                    shipping. We handle various vehicles, cars, trucks, SUVs,
                    motorcycles, and even decommissioned tanks, allowing you to
                    focus on your family's transition.
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
                        Military Auto Shipping: Understanding the Basics
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Military auto shipping is a specialized service designed
                      for active-duty and retired military personnel and their
                      families. A common reality for active-duty U.S. military
                      service members is the potential for frequent relocation
                      to new duty stations, often every few years. These
                      relocations introduce significant logistical challenges,
                      such as the cross-country or overseas movement of
                      household goods. Transporting a personal vehicle is often
                      one of the most demanding tasks.
                      <br /> <br />
                      The Government may cover the cost for shipping one
                      privately owned vehicle (POV) when the move is a Permanent
                      Change of Station (PCS) order. However, service members
                      must cover the cost themselves if they choose to ship
                      additional vehicles.
                      <br /> <br />
                      Rapid Auto Shipping recognizes the complexities of
                      military relocations. We offer competitive pricing on our
                      military auto shipping, including military deals, and
                      reliable door-to-door service across all 50 states,
                      including Alaska and Hawaii. Our streamlined process
                      ensures a hassle-free transport experience. By allowing us
                      to handle your vehicle with care, reliability, and
                      expertise when you need to{" "}
                      <a
                        href="https://rapidautoshipping.com/services/ship-car-across-the-country"
                        className="text-blue-700 font-bold"
                      >
                        ship a car across the country
                      </a>
                      , you can better focus on the transition to your new post.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752498154/military_auto_transport_1_nggif4.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
              {/* Why Military Members Trust Section */}
              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Military Personnel Choose Rapid Auto Shipping?
                </h2>

                <div className="prose prose-lg text-gray-700 mb-8">
                  <p>
                    Rapid Auto Shipping is a trusted and reliable partner for
                    all military auto shipping needs, including crucial
                    Permanent Change of Station (PCS) moves. Military personnel
                    consistently choose us due to the unmatched convenience,
                    time efficiency, and specialized service we provide,
                    especially during PCS relocations, which are known for
                    demanding schedules and intricate logistics.
                    <br /> <br />
                    Our team is highly experienced in military car shipping and
                    understands the necessity for tight turnarounds. We offer
                    highly competitive military car shipping rates and,
                    recognizing the financial demands of relocation, we also
                    provide exclusive military vehicle shipping discounts. This
                    combination of specialized expertise, flexible scheduling,
                    and financial relief ensures that we meet the high level of
                    service the military community expects from a transportation
                    provider.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Other key features of our military auto-shipping include:
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 items-stretch">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                      <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Military discounts for active duty, veterans, and
                        dependents:
                      </h3>
                      <p className="text-gray-700">
                        We offer exclusive discounts of up to 10% for
                        active-duty personnel, veterans, and their families,
                        adjusted based on mileage and market conditions, to
                        honor your service and help reduce relocation costs.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                      <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                        <Truck className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Flexible pickup and delivery options:
                      </h3>
                      <p className="text-gray-700">
                        Our streamlined process ensures a hassle-free
                        experience, with customizable pickup and delivery to
                        meet your schedule. Choose between open or enclosed
                        transport, and we'll handle your vehicle with precision,
                        including on-base pickup where permitted.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                      <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                        <Shield className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Insurance included in every quote:
                      </h3>
                      <p className="text-gray-700">
                        Our ship my car military quotes are all-inclusive, with
                        no hidden charges, and no upfront payment is required.
                        It also includes insurance charges, and you don't have
                        to pay separately for your insurance coverage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="https://rapidautoshipping.com/military-auto-shipping"
                    className="inline-block bg-rapidcolor hover:opacity-90 transition-opacity text-white text-xl font-semibold rounded-xl px-8 py-4 shadow-lg"
                  >
                    Get a Quote
                  </a>
                </div>
              </section>
            </div>

            {/* How Our Military Car Shipping Process Works */}
            <section className="bg-white rounded-xl p-4 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How Our Military Auto Shipping Process Works
              </h3>

              <div className="prose prose-lg text-gray-700 mb-8">
                <p>
                  The military auto shipping process begins with receiving
                  orders for a Permanent Change of Station (PCS) to a new duty
                  station. A detailed breakdown of the process is listed below:
                </p>
              </div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Get a quote:
                    </h4>
                    <p className="text-gray-700">
                      Once a Permanent Change of Station (PCS) to a new duty
                      station order is received, contact Rapid Auto Shipping for
                      PCS auto transport. Our shipping cost calculator for
                      military vehicle shipping provides the most accurate
                      quote, which includes all applicable fees. We offer PCS
                      vehicle shipping discounts to active-duty personnel,
                      veterans, Reservists, National Guard members, and military
                      dependents. We don't charge any upfront amount until we
                      assign a carrier to you.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Prepare your vehicle:
                    </h4>
                    <p className="text-gray-700">
                      Clean the inside and outside of your vehicle a day or so
                      before shipping. Take clear photos and video of the
                      exterior and interior of your vehicle. The gas tank must
                      be precisely 1/4 full or less when you turn in your
                      vehicle for shipping. Remove any personal or temporary
                      accessories before dropping off your vehicle.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Gather Necessary Documents:
                    </h4>
                    <p className="text-gray-700">
                      To prepare for your vehicle drop-off, you will need to
                      gather several necessary documents. These include a copy
                      of your PCS orders and your Military ID. Additionally, if
                      applicable, you must bring the vehicle title or a lien
                      release letter. Finally, if someone other than you will be
                      dropping off the vehicle, they must present a valid Power
                      of Attorney
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Schedule pickup:
                    </h4>
                    <p className="text-gray-700">
                      After booking, we assign a trusted driver and carrier. On
                      pickup day, the driver calls to arrange a time and brings
                      the carrier, including on-base pickup if allowed. Before
                      loading, you and the driver inspect and document any prior
                      damage on the Bill of Lading, which you sign and receive a
                      copy of. The carrier then securely loads your vehicle to
                      begin transport. Go to the{" "}
                      <a
                        href="https://www.military.com/base-guide"
                        className="text-blue-700 font-bold"
                      >
                        Military base guide
                      </a>{" "}
                      for more information.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Track delivery:
                    </h4>
                    <p className="text-gray-700">
                      Stay informed about your vehicle's journey effortlessly.
                      You have the option to reach out to the driver directly
                      for real-time progress updates, or we can arrange
                      scheduled updates for you through your preferred channel:
                      phone, Live Chat, or email.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    6
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Delivery and inspection:
                    </h4>
                    <p className="text-gray-700">
                      Once the truck driver arrives and meets you at the
                      agreed-upon location, or the base station (if permitted),
                      the vehicle will be securely offloaded. Inspect the car to
                      ensure that no damage was caused during transportation.
                      Check it for any damage and note any issues on the
                      delivery document.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Top Benefits Section */}
            <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Top Benefits of Shipping Your Car with Rapid Auto Shipping
              </h2>

              <div className="prose prose-lg text-gray-700">
                <p>
                  Rapid Auto Shipping is a highly reliable choice for Military
                  Auto Shipping, offering specialized, hassle-free military car
                  shipping services with transparent, competitive pricing and no
                  hidden costs. We proudly offer an exclusive military auto
                  transport discount as a tribute to our service members,
                  significantly reducing your overall car shipping costs.
                  <br /> <br />
                  Our commitment to convenience, time efficiency, and
                  specialized military relocation services makes us the
                  preferred choice, especially during Permanent Change of
                  Station (PCS) moves. Recognizing the unique logistical needs
                  of military PCS moves, we offer door-to-door car transport.
                  This eliminates the stress of driving long distances, dealing
                  with vehicle storage, and prevents unnecessary wear on your
                  vehicle.
                  <br /> <br />
                  Rapid Auto Shipping is recognized for its reliable service,
                  comprehensive insurance, and positive customer reviews within
                  the military relocation car transport industry, ensuring peace
                  of mind for every service member. Choose the trusted expert
                  for your next military vehicle shipping needs.
                </p>
              </div>
            </section>
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
                        Military Auto Shipping Discounts: A Thank You for Your
                        Service
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Rapid Auto Shipping offers exclusive military auto
                      shipping discounts for active-duty personnel, veterans,
                      and their families. We are deeply committed to military
                      families, providing both genuine savings and fully
                      transparent pricing.
                      <br /> <br />
                      Depending on the transport specifics, you can save between
                      $50 and over $100 on your shipment. This{" "}
                      <a
                        href="https://rapidautoshipping.com/deals"
                        className="text-blue-700 font-bold"
                      >
                        military deal
                      </a>{" "}
                      is especially helpful in reducing the financial burden of
                      moving additional vehicles during a Permanent Change of
                      Station (PCS) move.
                      <br /> <br />
                      Unlike competitors, our pricing is fully transparent; we
                      never hide fees. Our all-inclusive service includes
                      essential features like on-base delivery and comprehensive
                      insurance at no extra charge. We specialize in reliable
                      and cost-effective military vehicle transport solutions,
                      with customized discounts for both single and
                      multi-vehicle shipments. We are dedicated to being your
                      trusted partner, ensuring dependable auto shipping
                      services and genuine savings.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752498153/Military_Auto_Transport_2_eocwvr.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <KeyBanner />

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
