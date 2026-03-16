import React, { useState, useEffect } from "react";
import {
  Truck,
  Clock,
  Shield,
  DollarSign,
  MapPin,
  Star,
  AlertTriangle,
  Phone,
  Mail,
  Headset,
  CheckCircle,
  ArrowRight,
  Calculator,
  Car,
  Calendar,
  Package,
  Users,
  FileText,
  Plus,
  Minus,
} from "lucide-react";
import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import TransportForm from "@/components/CommonComponents/Form";
import Head from "next/head";
import KeyBanner from "@/components/CommonComponents/key-banner";
import HowItWorks from "@/components/CommonComponents/Howitworks";

export default function DoorToDoorTransport() {
  const [activeTab, setActiveTab] = useState("open");
  const [formData, setFormData] = useState({
    pickupLocation: "",
    deliveryLocation: "",
    vehicleType: "",
    transportType: "open",
    name: "",
    email: "",
    phone: "",
  });

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



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted! We will contact you shortly.");
  };


  const faqData = [
  {
    icon: <Phone className="w-5 h-5" />,
    question: "How do you get a shipment quote?",
    answer:
      "On our website, we offer a quote form that allows clients to request a quote estimate. To make it easy, fill in all the details. Once all the details are filled out and submitted, you will get our instant quote, and our representative will contact you ASAP. Or call +1 (833) 233-4447 to speak with one of our car transport pricing specialists. To compute your estimate, we need to know the origin and destination locations, the type of vehicle you wish to ship, and the date your car will be available.",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "What Payment Methods Do You Accept?",
    answer:
      "For car shipments, Rapid Auto Shipping takes all major credit cards and any sort of certified payment. We take 10-15% of the amount on the day of the pickup, and the balance is due at drop-off, which can be paid to the driver in the form of Cash, Zelle, Venmo, or Certified Check.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "Can I Track My Shipment?",
    answer:
      "Yes! We offer a standard monitoring device to monitor your car in transit. You can monitor your shipment 24/7 using the online tracking function. To monitor your vehicle shipment, please provide us with your tracking information, name, email address, and/or phone number.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Is My Car Insured During Transport?",
    answer:
      "Yes, all vehicles are covered by Damage-Free Carrier Insurance while in transit. We also require our carriers to provide supplemental insurance, which means you'll have added protection in the unlikely event of damage or an accident.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    question: "What Kind of Paperwork Will I Need to Ship My Car?",
    answer:
      "To ship a vehicle, we generally require the following documents: A valid ID (Driver's License or government ID), Proof of ownership or authorization to ship the vehicle, Vehicle registration, Insurance information. Sometimes, we may request additional paperwork, depending on the state or shipment requirements. For more information, consult with our executives.",
  },
  {
    icon: <Truck className="w-5 h-5" />,
    question: "Is there any preparation required to ship my vehicle?",
    answer:
      "Ensure the car's interior and exterior are clean, so the driver can easily see if there is prior damage. If you are not carrying anything else, remove all your personal belongings. Inform the driver of any problems with their vehicle. Ensure that the car has a quarter tank of gas at pickup.",
  },
];

  return (
    <>
      <Head>
        <title>
          Best Auto Transport Services Door to Door | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Read our complete guide on the door-to-door auto transport service we provide. Read our reviews and book now."
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/door-to-door-auto-transport"
        />
        <meta
          property="og:title"
          content="Open Auto Transport - Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Read our complete guide on the door-to-door auto transport service we provide. Read our reviews and book now."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/door-to-door-auto-transport"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1748000321/enclosed-auto-shipping_kxhccu.webp"
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
                    name: "Our Nationwide Auto Transport Services",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/door-to-door-auto-transport",
                    name: "Door-to-Door Auto Transport",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 text-center bg-black bg-opacity-80 bg-blend-overlay bg-[url('https://res.cloudinary.com/dz2zovmf1/image/upload/v1747998080/Door-to-door-auto-transport_s9whft.webp')] bg-center bg-cover">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="mx-auto text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Door-to-Door Auto Transport
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-3xl">
                Rapid Auto Shipping is a well-known vehicle transport company in
                the United States. We understand how important it is to choose
                an affordable auto transportation company that fits within your
                relocation budget. Thus, we offer competitive and transparent
                auto transport services. Our door-to-door auto transport
                services provide a hassle-free and convenient solution for
                relocation. Our team of expert drivers utilizes the latest
                equipment and technology to ensure the safe transfer of your
                automobile.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start order-1 lg:order-2">
              <TransportForm className="w-full max-w-full sm:max-w-md md:max-w-lg" />
            </div>
          </div>
        </section>

        {/* What is Door-to-Door Auto Transport */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
            <div className="absolute bottom-20 left-1/2 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-1 sm:px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Car className="w-4 h-4" />
                Premium Service
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                What is
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {" "}
                  Door-to-Door
                </span>{" "}
                Auto Transport?
              </h2>
              <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                  <p className="text-xl text-start mb-2">
                    Door-to-door auto transport is the most convenient method of
                    car delivery service. In this service, our trailer will
                    directly come to your desired location to pick up and
                    deliver your car. This will eliminate the extra hassle of
                    visiting the terminals to pick up or drop off the vehicles.
                    To enjoy the ultimate convenience, all you need to do is
                    provide an accurate location where your car will be picked
                    up and delivered.
                  </p>

                  <p className="text-xl text-start mb-2">
                    If your address is not open or accessible to a long car
                    hauler, then we will arrange the nearest meeting spot.
                    People with a hectic schedule or who reside in a distant
                    place would appreciate door-to-door car shipping.
                  </p>

                  <p className="text-xl text-start mb-2">
                    Door-to-door transportation service is also the most popular
                    cost-effective method of moving vehicles today. Our
                    door-to-door vehicle shipping service is available all over
                    the United States.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start rounded-3xl p-6 sm:p-8 shadow-xl bg-white border border-gray-100">
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
                  <div className="w-10 hidden sm:flex h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  How Door-to-Door Auto Transport Works
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex gap-4 sm:gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rapidcolor rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                        1
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        Utilizing door-to-door car-carrying service providers is
                        relatively straightforward. First, it is essential to
                        find a reliable company, and with Rapid Auto Shipping,
                        you don't have to worry about anything.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 sm:gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rapidcolor rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                        2
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        Now, you must provide your vehicle details and pickup
                        and delivery locations. Then, we will schedule a pickup
                        time and send a carrier to your doorstep.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 sm:gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rapidcolor rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                        3
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        Once the carrier arrives, they will load your vehicle
                        onto it and transport it to your desired destination.
                        The carrier will usually deliver your car to your
                        doorstep or a nearby location if your street is
                        inaccessible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-white border border-gray-100 overflow-hidden">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-full">
                    <img
                      src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747998146/How_Door-to-Door_Auto_Transport_Works_vecign.webp"
                      alt="how door-to-door auto transport works – Rapid Auto Shipping vehicle pickup and delivery process"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Pros and Cons of Door To Door Auto Transport
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                While you are shipping your vehicle, you better know the
                positive and negative points of door-to-door car shipping. Here
                are some key points mentioned to help you out:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Pros Section */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 order-1">
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-green-600 mr-3 flex-shrink-0 mt-1 sm:mt-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                      Pros
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      There are numerous advantages associated with utilizing
                      door-to-door car transport services. These benefits
                      include:
                    </p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Convenience
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                        Door-to-door transportation services offer exceptional
                        comfort. Rapid Auto Transport will conveniently pick up
                        your vehicle from your location and deliver it directly
                        to your desired destination.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Cost-Effective
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                        Door-to-door vehicle shipping services are often more
                        cost-effective than alternative transportation methods.
                        The service provider offers a variety of transportation
                        options, including open and enclosed transport. This
                        allows you to select the most cost-effective option that
                        aligns with your budget.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Saves Time
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                        Door-to-door auto shipping services will save you time
                        by removing the requirement to drive your car to a
                        transportation hub physically. Our trailer driver will
                        conveniently collect your vehicle from your chosen
                        location and safely deliver it to your desired
                        destination, saving you valuable time and effort.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cons Section */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 order-2">
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-red-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                      Cons
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Besides offering various advantages, door-to-door shipping
                      has some disadvantages:
                    </p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex gap-3">
                    <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Higher Cost
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                        Door-to-door shipping offers great convenience, but the
                        cost of the method is high in comparison to
                        terminal-to-terminal shipping. It is difficult to drive
                        and reach if your address is in a rural area, so
                        transportation may cost you more with this method.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Limited Availability
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                        Although this method is the most popular, it can be
                        difficult to deliver your vehicle if your location is
                        not open to trucks, has tight alleys, no parking area,
                        or has busy streets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-12 sm:py-16 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                style={{ backgroundColor: "#fff3e0", color: "#ff5722" }}
              >
                <DollarSign className="w-4 h-4" />
                Transparent Pricing
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                How Much Does
                <span
                  className="bg-gradient-to-r bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #ff5722, #ff7043)",
                  }}
                >
                  {" "}
                  Door-to-Door
                </span>
                <br />
                Transport Cost?
              </h2>
              <div className="max-w-7xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    The average cost of transporting a car across the United
                    States is around $1,000, with the lowest average price
                    lingering around $500-$750 and the highest average price
                    hovering around $1200-$1,500. The average cost per mile to
                    transport a vehicle for distances greater than 1,000 miles
                    is $0.60. Shorter routes cost roughly $1 more per mile than
                    their lengthier counterparts. The cost depends on various
                    factors, so it's always best to get our free quote for your
                    most accurate shipping cost.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    <div
                      className="rounded-2xl p-4 sm:p-6 text-white text-center"
                      style={{
                        background: "linear-gradient(135deg, #ff5722, #ff7043)",
                      }}
                    >
                      <div className="text-2xl sm:text-3xl font-bold mb-2">
                        $500-$750
                      </div>
                      <div style={{ color: "#ffccbc" }}>Lowest Average</div>
                    </div>
                    <div
                      className="rounded-2xl p-4 sm:p-6 text-white text-center"
                      style={{
                        background: "linear-gradient(135deg, #e64a19, #ff5722)",
                      }}
                    >
                      <div className="text-2xl sm:text-3xl font-bold mb-2">
                        $1,000
                      </div>
                      <div style={{ color: "#ffccbc" }}>Average Cost</div>
                    </div>
                    <div
                      className="rounded-2xl p-4 sm:p-6 text-white text-center"
                      style={{
                        background: "linear-gradient(135deg, #d84315, #e64a19)",
                      }}
                    >
                      <div className="text-2xl sm:text-3xl font-bold mb-2">
                        $1,200-$1,500
                      </div>
                      <div style={{ color: "#ffccbc" }}>Highest Average</div>
                    </div>
                  </div>
                  <div
                    className="mt-6 sm:mt-8 p-4 rounded-xl border"
                    style={{
                      background: "linear-gradient(to right, #fff3e0, #ffe0b2)",
                      borderColor: "#ffab91",
                    }}
                  >
                    <div
                      className="flex items-center gap-3"
                      style={{ color: "#e64a19" }}
                    >
                      <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-medium text-sm sm:text-base">
                        Per Mile Rate: $0.60+ for distances over 1,000 miles
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Factors Affecting Cost */}
        <section id="pricing" className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px:1 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Factors Affecting The Cost of Door-to-Door Car Shipping
              </h3>
              <p className="text-base sm:text-lg">
                The total cost of door-to-door auto transport services can vary
                based on several important factors. Several factors are crucial
                in determining the overall cost of the transportation service.
                These factors include:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <Car className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Vehicle Make and Model
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  The make and model of your vehicle play a significant role in
                  determining the final cost. Transporting smaller cars is
                  generally more cost-effective compared to larger vehicles.
                  This is because larger cars require additional space and
                  weight capacity during transportation, increasing the overall
                  cost.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Delivery Time Frame
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  The final price of door-to-door auto transport services is
                  also influenced by the delivery time frame. The cost will
                  increase as the delivery speed becomes faster. Expedited
                  transportation services will always be more expensive than
                  services that allow more extended pickup and delivery times.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <Package className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Transport Type
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  The choice of transportation is another factor that affects
                  the overall cost. Open auto transport is generally more
                  affordable than enclosed auto transport. Enclosed auto
                  transport is preferable for individuals who own high-end
                  vehicles or modified cars or those who desire enhanced
                  security during transportation.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  The cost of door-to-door vehicle transport is also influenced
                  by the location from where the vehicle is being picked up and
                  transported. The cost of transportation is generally lower
                  when traveling between major cities compared to traveling to
                  or from a more remote location.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Vehicle Condition
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  The condition of the vehicle is an essential factor that can
                  impact the overall cost. Shipping an operational vehicle is
                  the most cost-effective option because it requires less
                  equipment for loading and unloading. On the other hand,
                  inoperable vehicles need expert handling and specialized
                  equipment.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <Calendar className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Seasonality
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  The shipping season can also influence the cost of
                  door-to-door auto transport. Road conditions are better during
                  the summer, and transportation services are typically less
                  expensive. During the winter, road conditions often become
                  hazardous, increasing transportation service costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Services */}
        <section id="services" className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px:1 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Types of Door-to-Door Auto Transport Services
              </h2>
              <p className="text-base sm:text-lg">
                Choosing a transport method to secure your car in your budget is
                essential. Understanding your options will help you make a
                better choice for your vehicle.
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Open Auto Transport
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                      Open auto transport is the most commonly used and
                      budget-friendly shipping service. Although transporting
                      your vehicle on an open trailer exposes it to external
                      elements, it is safer and best compatible with standard
                      vehicles.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          style={{ color: "#ff5722" }}
                        />
                        <span className="text-sm sm:text-base text-gray-700">
                          Most affordable option
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          style={{ color: "#ff5722" }}
                        />
                        <span className="text-sm sm:text-base text-gray-700">
                          Faster pickup and delivery
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          style={{ color: "#ff5722" }}
                        />
                        <span className="text-sm sm:text-base text-gray-700">
                          Suitable for most vehicles
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          style={{ color: "#ff5722" }}
                        />
                        <span className="text-sm sm:text-base text-gray-700">
                          Widely available nationwide
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 rounded-lg overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1748000365/Open-Auto-shipping_futyjz.webp"
                      alt="Open auto transport carrier loading multiple vehicles – Rapid Auto Shipping cost-effective car shipping solution"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1748000321/enclosed-auto-shipping_kxhccu.webp"
                      alt="Enclosed auto transport trailer protecting luxury vehicle – Secure car shipping by Rapid Auto Shipping"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Enclosed Auto Transport
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                      This car shipping method is the most premium and provides
                      your car with maximum protection from various elements
                      during transit. Your vehicle will be protected in a fully
                      covered trailer that shields it from bugs, road dirt,
                      harsh weather, etc. Many individuals choose this auto
                      transport method for expensive models, antiques, and
                      sports cars.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        <span className="text-sm sm:text-base text-gray-700">
                          Maximum protection from elements
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        <span className="text-sm sm:text-base text-gray-700">
                          Ideal for luxury and classic cars
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        <span className="text-sm sm:text-base text-gray-700">
                          Enhanced security
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        <span className="text-sm sm:text-base text-gray-700">
                          Climate-controlled options available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal vs Door-to-Door */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px:1 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Terminal-to-Terminal vs Door-to-Door Transport
              </h2>
              <p className="text-base sm:text-lg">
                At Rapid Auto Shipping, we understand that convenience and cost
                are paramount when transporting your vehicle. To make things
                easier and more budget-friendly, we have two trusted
                alternatives: Terminal-to-Terminal and Door-to-Door transport.
                So which one do you choose? Here's the comparison.
              </p>
            </div>
            <div className="py-12 sm:py-16 px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                      Terminal-to-Terminal
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-red-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Convenience:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            Less convenient, requires drop-off and pickup at
                            designated terminals
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Cost:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            More affordable due to centralized drop-off points
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-red-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Vehicle Handling:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            Higher handling as vehicles are moved between
                            terminals
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-red-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Delivery Time:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            It may take longer due to waiting periods for
                            carrier availability
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Accessibility:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            Ideal for urban areas with easy terminal access
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Best For:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            Budget-conscious customers with flexible schedules
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg p-6 sm:p-8 border-2"
                    style={{
                      backgroundColor: "#ffeee0",
                      borderColor: "#ff5722",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Door-to-Door
                      </h3>
                      <span
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-white rounded-full"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        Recommended
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Convenience:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            Highly convenient, pickup and delivery at your
                            specified locations
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div
                          className="rounded-full p-1 mt-1"
                          style={{ backgroundColor: "#ffccbc" }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "#ff5722" }}
                          ></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Cost:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            Higher cost for the added convenience
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Vehicle Handling:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            Less handling, reducing the risk of damage
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Delivery Time:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            Faster and more direct service
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Accessibility:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            Suitable for suburban and rural areas
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-[700] text-gray-900">
                            Best For:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            Those seeking convenience and faster service
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Rapid Auto Shipping */}
        <section id="about" className="py-4 sm:py-4 bg-gray-50">
          <div className="max-w-7xl mx-auto px:1 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Rapid Auto Shipping for Door-to-Door Auto Transport?
              </h2>
              <p className="text-base sm:text-lg">
                Rapid Auto Shipping is a top-rated, reliable auto transport
                company providing door-to-door services. There are several
                notable reasons to choose Rapid Auto Shipping for your car
                shipping requirements. Here they are:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
                <Users className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  Decades of Experience You Can Trust
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  With more than 14 years of service in the auto transport
                  industry, we've built a network of trusted carriers and
                  perfected best practices that differentiate us. We've
                  perfected our experience over the years and easily handle
                  tricky logistics and non-standard transport requests.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
                <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  Nationwide Coverage, Door-to-Door Delivery
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Wherever you're relocating in the U.S., we've got you covered.
                  Our door-to-door delivery means that your car is picked up and
                  delivered to the door of your destination, saving you time and
                  hassle. We proudly deliver to all 50 states, whether rural or
                  remote.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
                <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  Safe and Secure Delivery
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Your car is one of your most valuable possessions, and we
                  treat it like that as its ours. We offer fully insured
                  delivery services, so you can sit back with the peace of mind
                  that your car is in safe hands. From the moment we pick it up
                  until the moment it's delivered safely to its destination. Our
                  professional drivers adhere to strict safety protocols to
                  ensure that your car arrives in the same condition it departed
                  in.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
                <DollarSign className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  Transparent Pricing with No Hidden Charges
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  At Rapid Auto Shipping, what you see is what you get. Our
                  quotes are competitive and all-inclusive, with no hidden fees.
                  We believe in honest pricing and open communication, so you
                  know exactly what to expect.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
                <Package className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  Flexible Service Options
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Each vehicle and circumstance is different, which is why we
                  offer multiple transport options to fit your requirements. Do
                  you require the cost-savings of open transport or the added
                  protection of enclosed transport for high-performance or
                  vintage vehicles? We can make it happen.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
                <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  Real-Time Vehicle Tracking
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Take control and stay up to date along the way with our
                  regular updates on shipment. You'll always know where your car
                  is and when you can expect to get it.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
                <Headset className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  Exceptional Customer Support
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Our 24/7 support staff is here for you every step of the way.
                  From initial quote to final delivery, we're here to answer
                  questions, provide updates, and make the process effortless.
                  We're proud of our personal service and on-time communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />

        {/* Conclusion */}
        <section className="w-full p-4 sm:p-6 bg-gray-50 mb-10">
          <div className="max-w-7xl py-6 sm:py-8 px-4 sm:px-6 rounded-3xl bg-white mx-auto shadow-3d">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Conclusion
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Shipping your vehicles is much more convenient with our
              door-to-door auto transport service. With just a few simple steps,
              you will experience the expertise of an industry-leading auto
              transport company. Whether you need a budget-friendly option for
              your regular car or the highest level of protection for luxury and
              vintage beauty, we've got you covered.
              <br />
              <br />
              Let Rapid Auto Shipping handle the transportation of your car. Get
              the best deals on high-quality transportation services. To get a
              shipping price, please call us toll-free at{" "}
              <a
                href="tel:+18332334447"
                className="text-orange-600 hover:underline"
              >
                +1 (833) 233-4447
              </a>{" "}
              or fill out our online quote form. We're excited to assist.
            </p>
          </div>
        </section>
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
      </div>
      <Footer />
      <style jsx>{`
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .bg-[url('https://res.cloudinary.com/dz2zovmf1/image/upload/v1747998080/Door-to-door-auto-transport_s9whft.webp')]
          {
            background-position: center;
            background-size: cover;
          }
          .group:hover {
            transform: translateY(-2px);
          }
          .shadow-3d {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        }
        @media (min-width: 640px) and (max-width: 768px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </>
  );
}
