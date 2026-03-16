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
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

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
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const mainFeatures = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Nationwide Coverage with a Trusted Network",
      description:
        "Our long-distance towing services feature a network of trusted carriers with nationwide coverage, prompt emergency assistance, and 24/7 support. We have established a vast network of licensed and experienced carriers nationwide. Our extensive connections allow us to coordinate and manage long-distance towing services efficiently, ensuring the safety and security of your vehicle.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Door-to-Door auto transport Service for car towing",
      description:
        "Door-to-door auto transport for car towing is a convenient and hassle-free service that simplifies the process of shipping your vehicle. Instead of dropping your vehicle off at a terminal, our experienced carriers will pick it up directly from your preferred location, whether it's your home, office, or any other spot that works best for you. Once the carrier arrives, they'll load your car onto a specialized transport truck designed to ensure safety and security throughout the journey. After loading, your vehicle will be delivered directly to your chosen destination, whether that's another home, business, or any specific address. With door-to-door auto transport for car towing, you get the convenience of having your car picked up and dropped. So, all you need to do is sit back, relax, and wait for your vehicle to be delivered to locations that are most convenient for you, all with minimal effort on your part.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Guaranteed Pricing for long-distance towing – No Hidden Fees",
      description:
        "At Rapid Auto Shipping, what you see is what you get. Our quotes are competitive and all-inclusive for long-distance car shipping, with no hidden fees. We believe in honest pricing and open communication, so you know exactly what to expect. We don't process payment until a carrier has been secured and assigned to your order.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description:
        "We may be reached via phone or Live Chat whenever you need us. Because we have our finger on the pulse, our door-to-door long-distance towing services are dependable and are available 24/7. We keep a close eye on your shipment and ensure we're available at all times. Delivery is available 24 hours a day, 7 days a week, to your door with nationwide towing services.",
    },
  ];

  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Car Towing and Transport",
      description:
        "Car towing services offered at Rapid Auto Shipping save you from the hassle of driving it for longer distances. We offer open or enclosed door-to-door auto transport with insurance for your running or non-running vehicle, ensuring peace of mind. Our long-distance car shipping can help move your car nationwide without adding miles to it (unnecessary mileage). It also enables you to save on your gas bill.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Long Distance Motorcycle Towing",
      description:
        "Our nationwide towing services for motorcycle shipping have never been easier with Rapid Auto Transport. We offer two types of motorcycle transport services to our customers: Door-to-Door (home delivery) and shipping between distribution centers. Home delivery (Door-to-Door) transport is the most common and preferred customer solution.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enclosed Transport for Luxury Vehicles",
      description:
        "Enclosed transport for luxury vehicles requires truckers to possess knowledge of classic, luxury, and collectible cars, in addition to standard industry expertise. We make sure to select the most qualified carrier companies to ensure the best service for every customer, as luxury car towing services require very delicate and deft handling to prevent it from wear and tear and also from weather and road debris.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Commercial and Auction Transport",
      description:
        "We provide auto transport services to and from the country's significant automotive auctions, as well as commercial long-distance towing services. Count on us for enclosed auto transportation to ensure that your new vintage, luxury, or exotic car arrives and departs the auction block in the same condition as purchased or sold. Our commercial auto transport offers discounted rates on shipping costs for bulk shipping.",
    },
  ];

  const costFactors = [
    {
      title: "Vehicle type and size",
      description:
        "These factors significantly impact car towing costs. Towing a motorcycle will cost less than towing a heavy-duty truck. Some companies specialize in certain types of vehicles, such as motorcycles or heavy equipment, which costs less for towing services.",
    },
    {
      title: "Time of Year",
      description:
        "Moving rates may be higher during peak seasons, such as late spring and summer.",
    },
    {
      title: "Open vs. Closed Carrier",
      description:
        "Consider whether you need an open or closed carrier for your vehicle, as closed carriers offer more protection but are more expensive.",
    },
    {
      title: "Distance towed",
      description:
        "A short local tow will be cheaper than a long-distance haul",
    },
    {
      title: "Vehicle condition",
      description:
        "If your car is inoperable, a more complex recovery process might be needed.",
    },
    {
      title: "Location",
      description: "Towing rates can vary by city or state regulations.",
    },
  ];

  const faqData = [
    {
      icon: <Clock className="w-5 h-5" />,
      question: "How long does long-distance towing take?",
      answer:
        "It can take a few days to over a week, depending on the distance and the towing company's schedule.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is my vehicle insured during transport?",
      answer:
        "Most towing companies offer some insurance, but you should also check your insurance to make sure your car is fully covered.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "What's the cheapest way to tow a car long distance?",
      answer:
        "Open transport method of shipping is the most cost-effective way to tow a car over a long distance.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Can you tow a motorcycle across the country?",
      answer: "Yes, we tow a motorcycle across the country.",
    },
  ];
  return (
    <>
      <Head>
        <title>Long Distance Towing Service | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Need reliable long-distance towing service or auto shipping? Rapid Auto Shipping offers nationwide, door-to-door service with guaranteed rates. Get a free quote today!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/long-distance-towing-service"
        />
        <meta
          property="og:title"
          content="Long Distance Towing Service | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Need reliable long-distance towing service or auto shipping? Rapid Auto Shipping offers nationwide, door-to-door service with guaranteed rates. Get a free quote today!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/long-distance-towing-service"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752478795/Long_Distance_Towing_Service_1_ty2efs.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              serviceType: "Long Distance Towing Service",
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
                "Need reliable long-distance towing service or auto shipping? Rapid Auto Shipping offers nationwide, door-to-door service with guaranteed rates. Get a free quote today!",
              url: "https://rapidautoshipping.com/long-distance-towing-service",
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
                  name: "long-distance-towing-service",
                  item: "https://rapidautoshipping.com/long-distance-towing-service",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752478795/Long_Distance_Towing_Service_1_ty2efs.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752478795/Long_Distance_Towing_Service_1_ty2efs.webp"
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
                    Long Distance Towing service with{" "}
                    <span className="text-[rgb(255,87,34)]">
                      Rapid Auto Shipping
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Long-distance towing involves transporting vehicles safely
                    and efficiently over extensive distances, typically
                    exceeding 50 miles. Whether it's a cross-country road trip
                    gone awry, relocating to a new city, purchasing a car from a
                    remote dealer, taking an idle vehicle to a mechanic, or
                    transporting a classic car to a show, these services ensure
                    that vehicles are handled with care and precision.
                    Long-distance towing is different from regular towing;
                    regular towing services represent those you would call if
                    you were stranded somewhere and needed your car taken to a
                    shop or back home. They are not only costly (costing up to
                    $7.00 per mile due to convenience), but they also do not
                    travel long distances. Regular towing companies often use
                    conventional trucks to drag cars on their wheels, but
                    Long-distance towing requires meticulous planning,
                    specialized equipment, and attention to detail to ensure
                    safe transportation.
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
                        Why Choose Rapid Auto Shipping for Long-Distance Towing?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      RAPID AUTO SHIPPING is one of the reliable towing
                      companies in the USA. Its 24/7 services, door-to-door auto
                      transport, and vast carrier network around the country
                      make it a formidable force in auto shipping for
                      long-distance towing. <br /> <br />
                      <b>Long-Distance Towing Experience:</b> With over 15 years
                      of experience as a long-distance towing company, we have
                      refined our skills and gained valuable insights into
                      delivering top-notch long-distance towing services. We
                      understand the unique challenges that come with
                      transporting a car long distance and have developed
                      efficient processes and protocols to handle even the most
                      complex towing requests. <br /> <br />
                      <b>Network of Trusted Carriers:</b> We have established a
                      vast network of licensed and experienced carriers
                      nationwide. Our extensive connections allow us to
                      coordinate and manage long-distance towing services
                      efficiently, ensuring the safety and security of your
                      vehicle. <br /> <br />
                      <b>Personalized Towing Solutions:</b> We recognize that
                      each towing request is unique, and we take pride in
                      providing tailored solutions to meet your specific
                      requirements. Whether you have a standard-sized vehicle, a
                      luxury car, a motorcycle, or a specialty vehicle, we have
                      the right equipment and expertise to handle your towing
                      needs with utmost care and professionalism. <br /> <br />
                      <b>Easy Communication and Tracking:</b> We believe in
                      transparent and open communication throughout the car
                      transport and long-distance towing process. Our team is
                      available to address any questions or concerns you may
                      have, providing regular updates on the status of your
                      towing request. Additionally, our advanced tracking system
                      allows you to monitor the progress of your vehicle.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752478795/Long_Distance_Towing_Service_1_ty2efs.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="relative group mt-10">
                    {/* Image */}
                    <div className="relative z-10">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752478807/Long_Distance_Towing_Service_2_alxfy2.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-[#003366] to-[#004080] text-white">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center transform transition-all duration-1000 ease-out">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                    Rapid Auto Shipping
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                    Long-distance towing services play a critical role in
                    transporting vehicles safely and efficiently over extensive
                    distances
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Get Quote Now
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-[#003366] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                      <Phone className="inline w-5 h-5 mr-2" />
                      Call 24/7
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Main Features Section */}
            <section id="features" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-[#003366] mb-4">
                    Our Key Features
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    These services cater to diverse needs, including vehicle
                    breakdowns in remote areas, transporting non-operational
                    vehicles, relocating vehicles across states or countries,
                    and transporting luxury or vintage cars.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {mainFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                        isVisible.features ? "animate-slide-up" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-[#ff5722] text-white p-3 rounded-xl  inline-block mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#003366] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section
              id="services"
              className="py-20 bg-gradient-to-r from-[#003366] to-[#004080]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Our Long-Distance Towing and Shipping Services
                  </h2>
                  <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                    We offer a range of long-distance car shipping services. Our
                    services include car towing, motorcycle towing, and enclosed
                    transport for luxury vehicles.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 transform hover:scale-105 ${
                        isVisible.services ? "animate-slide-up" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="bg-[#ff5722] text-white p-3 rounded-xl inline-block mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-[#003366] mb-4">
                    How Much Does Long-Distance Towing Cost?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    At Rapid Auto Shipping, we know getting a long-distance tow
                    can be stressful. That's why we strive to be transparent
                    about our pricing.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-12 items-start">
                  <div
                    className={`${
                      isVisible.pricing ? "animate-slide-left" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-[#003366] mb-6">
                      The factors that affect nationwide towing service are as
                      follows:
                    </h3>
                    <div className="space-y-6">
                      {costFactors.map((factor, index) => (
                        <div
                          key={index}
                          className="p-6 bg-gradient-to-r from-orange-100 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-x-2"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <h4 className="text-[#003366] font-bold text-lg mb-2">
                            {factor.title}:
                          </h4>
                          <p className="text-gray-600">{factor.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-16 p-8 bg-gradient-to-r from-[#003366] to-[#004080] text-white rounded-3xl">
                  <h3 className="text-2xl font-bold mb-4">
                    Why Choose Long-Distance Towing?
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Driving a car for a long distance can be costly and adds
                    unnecessary mileage to the odometer. This includes skipping
                    the drive for relocation, as fuel and other driving-related
                    charges may be higher than the cost of towing the car. With
                    long-distance car shipping companies offering door-to-door
                    auto transport, it makes sense to use the nationwide towing
                    services rather than driving a vehicle long distance.
                  </p>
                </div>
              </div>
            </section>

            <style jsx>{`
              @keyframes fade-in {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes slide-up {
                from {
                  opacity: 0;
                  transform: translateY(50px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes slide-right {
                from {
                  opacity: 0;
                  transform: translateX(-50px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }

              @keyframes slide-left {
                from {
                  opacity: 0;
                  transform: translateX(50px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }

              .animate-fade-in {
                animation: fade-in 1s ease-out;
              }

              .animate-slide-up {
                animation: slide-up 0.8s ease-out;
              }

              .animate-slide-right {
                animation: slide-right 0.8s ease-out;
              }

              .animate-slide-left {
                animation: slide-left 0.8s ease-out;
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
                        The Rapid Auto Shipping Process
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Long-distance towing doesn't have to be complicated, which
                      is why Rapid Auto Shipping brings the most straightforward
                      booking method. With us, shipping your vehicles is just as
                      simple as 1-2-3. Here is how it works: <br /> <br />
                      <b>Get an Instant Quote:</b> Enter your details to receive
                      an instant quote for your vehicle shipment. <br /> <br />
                      <b>Schedule Your Pickup:</b> Once a carrier has been
                      assigned to your shipment and on your arranged pickup
                      date, your vehicle will be picked up at the agreed-upon
                      location. <br /> <br />
                      <b>Ship Your Vehicle Safely:</b> We will safely transport
                      your vehicle by long-distance car shipping. <br /> <br />
                      <b>Receive Your Car:</b> Finally, your car will be
                      delivered to your doorstep.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1752478812/Long_Distance_Towing_Service_3_fsuj41.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
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
