"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import { Calculator } from "lucide-react";
import StatsSection from "@/components/CommonComponents/StatsSection";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import {
  Truck,
  Plus,
  Minus,
  Car,
  CreditCard,
  DollarSign,
  Shield,
  Clock,
  Users,
  Star,
  Wrench,
  Quote,
  Route,
  Timer,
  Gauge,
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
  Cog,
  ArrowRight,
  Maximize2,
  Navigation,
  Repeat,
  Phone,
  FileCheck,
  Heart,
  Globe,
  Award,
  Search,
  Cloud,
  Lock,
  Thermometer,
  Settings,
  Zap,
  Eye,
} from "lucide-react";
import {
  MapPin,
  Calendar,
  Snowflake,
  Scale,
  Lightbulb,
  Target,
  BarChart3,
} from "lucide-react";
import { FaCar, FaShieldAlt, FaStar, FaHome } from "react-icons/fa";
import Image from "next/image";

const Home = () => {
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

  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});

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

  const services = [
    {
      title: "Open Transport for Cost Savings",
      description:
        "Do you have a lot of automobiles to move from one dealership to another, or are you transporting many cars at once? Open car transport is the most cost-effective way to get your vehicles where they need to go.",
      icon: Car,
      color: "from-[#003366] to-[#ff5722]",
      bgPattern: "bg-gradient-to-br from-[#003366]/5 to-[#ff5722]/5",
    },
    {
      title: "Enclosed Transport for Premium Vehicles",
      description:
        "If you sell custom or luxury vehicles, or if you provide your most exclusive clients with premium vehicle delivery, you must safeguard those trucks while on the road. Enclosed car transport provides that security. Give your clients VIP treatment when you deliver cars to their homes in one of our enclosed trailers or move vehicles from different dealer locations with added security.",
      icon: Shield,
      color: "from-[#ff5722] to-[#003366]",
      bgPattern: "bg-gradient-to-br from-[#ff5722]/5 to-[#003366]/5",
    },
    {
      title: "Expedited Shipping for Tight Deadlines",
      subtitle: "(Catering to urgent needs)",
      description:
        "If you need expedited delivery or a custom solution, we're equipped to meet your specific shipping requirements. Our car carrier services for resellers cater to the urgent needs of your clients to meet tight deadlines with our expedited shipping services.",
      icon: Zap,
      color: "from-[#003366] to-[#ff5722]",
      bgPattern: "bg-gradient-to-br from-[#003366]/5 to-[#ff5722]/5",
    },
  ];

  const howItWorksSteps = [
    {
      step: "1",
      title: "Get Quote & Book order",
      description:
        "Our cost shipping calculator is an easy way to get an accurate price with the help of our dedicated auto transportation route professionals. We believe that a specific quote can not suit every car reseller's car shipping needs, hence we have customized auto shipping quotes that are based on dealers' 100 % satisfaction in regards to pickup or delivery date, time, and location, and the best part is our insurance coverage is already included in the quote provided. At the time of booking, we confirm all your shipping requirements and we work on the same to get you the right truck that can carry your vehicle and a reliable driver to move your car securely through our car hauling services.",
      icon: Quote,
      color: "from-[#003366] to-[#ff5722]",
    },
    {
      step: "2",
      title: "Pick up Of Vehicle",
      description:
        "On your set pickup date, our driver will contact you and schedule a suitable time and will manage to bring the carrier/trailer as close as possible to your front door. Once the truck/trailer arrives, the driver will inspect the car and make a video or take pictures to record in the bill of lading along with the car reseller and sign the documents. Thereafter, Truck Driver will load your car in the trailer and will take necessary measures to ensure safe transportation of the vehicle. Once the car is in the trailer the car transportation journey begins and you can track your car's location with the help of advanced GPS tracking service installed on the truck or you can call the driver as well.",
      icon: Package,
      color: "from-[#ff5722] to-[#003366]",
    },
    {
      step: "3",
      title: "Delivery of Vehicle",
      description:
        "On the date of delivering your car, the truck driver will contact you and mention the time and location as closest as to your delivery point. Once the truck driver arrives and meets you at the agreed location thereafter unloading of the vehicle happens and again both of you and the driver need to inspect the car take a picture record it in the bill of lading and get the documents signed in order to make sure about no scratch delivery as we guarantee. At the time of delivery, you need to make the final payment to the driver in the form of cash, money order, or Cashier's check. It is not necessary that you need to be present at the time of delivery, it could be any of your relative friends or close ones whom you vote to receive your car at the time of pickup or delivery.",
      icon: CheckCircle,
      color: "from-[#003366] to-[#ff5722]",
    },
  ];

  const uniqueFeatures = [
    {
      title: "Price Lock Guarantee",
      description:
        'Our "Price lock guarantee" ensures that the quoted price for shipping a vehicle remains fixed, protecting customers from unexpected cost increases or hidden fees, even if the market condition changes. Unlike some of our competitors who employ low-ball quotes. This makes us a reliable vehicle transport for car dealerships.',
      icon: DollarSign,
      color: "text-[#ff5722]",
      bg: "bg-[#ff5722]/10",
    },
    {
      title: "24/7 Support for Resellers",
      description:
        "Our professional and dedicated team is easily available 24/7 to guide you to help our resellers receive the best possible support.",
      icon: Phone,
      color: "text-[#003366]",
      bg: "bg-[#003366]/10",
    },
    {
      title: "No Hidden Fees",
      description:
        "Our quoted price is the final price, encompassing all costs, including insurance, pickup, delivery, and fuel surcharges, with no unexpected charges added later. The industry is full of transport companies that employ 'lowball quotes' tactics, only to inflate it later by applying hidden charges. We never resort to such practices and so we are an affordable car shipping for resellers.",
      icon: Eye,
      color: "text-[#ff5722]",
      bg: "bg-[#ff5722]/10",
    },
  ];

  const costFactors = [
    {
      title: "Distance",
      description:
        "The distance a vehicle needs to travel is a major factor, with longer distances generally leading to higher costs due to increased fuel consumption, labor, and time. However, the cost per mile may decrease as the distance increases, so consolidating shipments or using terminals closer to the destination can help reduce costs.",
      icon: Route,
      number: "1",
    },
    {
      title: "Vehicle Type and Size",
      description:
        "Larger or heavier vehicles may require specialized equipment, potentially increasing shipping costs. The condition of the vehicle (e.g., if it needs a winch for loading) can also affect the cost. Enclosed transport for high-value cars can also lead to higher costs.",
      icon: Car,
      number: "2",
    },
    {
      title: "Transport Method",
      description:
        "Open transport is typically less expensive than enclosed transport, which offers better protection from weather and theft. The choice depends on factors like budget, vehicle value, and desired level of protection for dealer inventory shipping.",
      icon: Truck,
      number: "3",
    },
    {
      title: "Season and Demand",
      description:
        "High-demand seasons or routes may lead to increased shipping rates. Consider the time of year and potential surges in demand when planning transport.",
      icon: Calendar,
      number: "4",
    },
    {
      title: "Pickup and Delivery Locations",
      description:
        "The locations for pickup and delivery can impact the cost based on accessibility and distance. Consider optimizing routes to minimize travel time and fuel consumption through our car carrier services for resellers.",
      icon: MapPin,
      number: "5",
    },
    {
      title: "Time Frame",
      description:
        "Expedited or rush services may come at an additional cost for single or bulk car shipping USA. Factor in transit times and potential delays when planning transport.",
      icon: Timer,
      number: "6",
    },
  ];

  const faqData = [
    {
      icon: <Truck className="w-5 h-5" />,
      question:
        "Do you offer car shipping services for resellers and dealerships?",
      answer:
        "Yes! We work with car resellers, dealerships, and online vehicle platforms to transport vehicles safely and efficiently whether it's one unit or a full truckload.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      question: "Can you handle bulk or multi-vehicle shipments?",
      answer:
        "Absolutely. We specialize in multi-car transport and fleet logistics. Whether you're restocking inventory or delivering to buyers, we offer discounted rates for bulk shipments.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question:
        "Do you provide auction-to-dealer or dealer-to-dealer transport?",
      answer:
        "Yes. We offer reliable transport from major auto auctions (like Copart, Manheim, IAA) and between dealerships across the country. We're familiar with auction pickup protocols.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "How fast can you pick up and deliver vehicles for resale?",
      answer:
        "Pickup is usually available within 1–3 business days. We also offer expedited and same-day pickup options for time-sensitive deliveries.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is insurance included when transporting resale inventory?",
      answer:
        "Yes. Every vehicle we transport is fully insured while in transit. You'll receive inspection reports at pickup and drop-off to verify vehicle condition.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      question:
        "How do I set up recurring auto transport for my dealership or resale business?",
      answer:
        "Simply contact us or request a dealer account. We'll assign a dedicated logistics coordinator and customize a plan that fits your volume, frequency, and delivery zones.",
    },
  ];

  return (
    <>
      <Head>
        <title>Auto Transport for Car Resellers | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Reliable auto transport for car resellers. Enjoy bulk discounts, nationwide shipping, and real-time tracking. Get your free quote today!"
        />
     
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href=" https://rapidautoshipping.com/auto-transport-for-car-resellers"
        />
        <meta
          property="og:title"
          content="Auto Transport for Car Resellers | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Reliable auto transport for car resellers. Enjoy bulk discounts, nationwide shipping, and real-time tracking. Get your free quote today!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/auto-transport-for-car-resellers"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753691581/auto-transport-for-car-resellers_2_niccru.webp"
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
                      "https://rapidautoshipping.com/auto-transport-for-car-resellers",
                    name: "auto-transport-for-car-resellers",
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
              serviceType: "auto-transport-for-car-resellers",
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
                "Reliable auto transport for car resellers. Enjoy bulk discounts, nationwide shipping, and real-time tracking. Get your free quote today!",
              url: "https://rapidautoshipping.com/auto-transport-for-car-resellers",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753691581/auto-transport-for-car-resellers_2_niccru.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753691581/auto-transport-for-car-resellers_2_niccru.webp"
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
                    Auto Transport for{" "}
                    <span className="text-[#ff5722]">Car Resellers</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Nationwide car shipping for resellers is easy with Rapid
                    Auto Shipping. We tackle challenges like delays, high costs,
                    and limited carrier capacity with fast, reliable, and
                    affordable solutions. Our expert services help dealerships
                    overcome supply chain issues and grow with confidence. Trust
                    the leader in auto transport to keep your business moving.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-md mx-auto">
                <TransportForm />
              </div>
            </div>
          </section>

          <div className=" bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        Why Resellers Choose Us
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      As discussed earlier, we have an excellent and
                      well-planned business solution for dealerships and bulk
                      car shipping in the USA. Rapid Auto Shipping possesses the
                      desired resources and knows the art of " How to ship cars
                      for resale in the USA". Our extensive nationwide carrier
                      network ensures consistent and available capacity along
                      with the ability to weather market fluctuations with ease.
                      Our cost of shipping multiple cars for dealers is the
                      lowest in the field. Door-to-door car transport and
                      real-time tracking make us the reliable vehicle transport
                      for car dealerships.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Bulk Shipping Discounts:</b> We offer bulk shipping
                      discounts on dealer inventory shipping leading to lower
                      costs per vehicle compared to shipping individual cars.
                      This helps the dealers to save on costs and also in
                      cutting costs and being competitive in their business.{" "}
                      <br /> <br />
                      <b>Nationwide Door-to-Door Service:</b> Our door-to-door
                      car transport services enable the dealers to save precious
                      time and concentrate on their business as they don't need
                      to drop off or pick up their vehicles at a specific
                      location, such as a terminal or storage facility. This
                      convenience helps the dealers enhance their reputation and
                      retain customers. <br /> <br />
                      <b>Real-Time Tracking:</b> We have a superior and
                      technically strong unit that continuously monitors our
                      vehicle movements and status using technologies like GPS
                      and telematics giving us an edge over our competitors and
                      helping us serve our customers better. We don't have any
                      portal or tracking method but you can call us to get
                      real-time updates on your vehicle movements.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753691576/auto-transport-for-car-resellers_3_r3hfh7.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[350px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative z-10 mt-10 hidden md:block">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753691572/auto-transport-for-car-resellers_rkgsao.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[350px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {/* Hero Section */}
            <div
              id="hero"
              className={`relative bg-gradient-to-r from-[#003366] via-[#003366] to-[#ff5722] transition-all duration-1000 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              <div className="relative px-4 py-16 sm:py-20 lg:py-24">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                      <Truck className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold">
                        Professional Auto Transport
                      </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                      Our Auto Transport Services
                      <span className="block bg-gradient-to-r from-[#ff5722] to-orange-300 bg-clip-text text-transparent mt-2">
                        For Car Resellers
                      </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto lg:mx-0 leading-relaxed mb-8">
                      Our professional auto transport services offer a variety
                      of services to choose from in dealer inventory shipping.
                      Open car transport for multiple cars and standard cars.
                      Enclosed transport for high-value cars, vintage, or
                      classic cars. Expedited services for meeting tight
                      deadlines of customers or a custom solution for the
                      dealers in managing their client's needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
              <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 left-10 w-20 h-20 bg-[#ff5722]/20 rounded-full blur-lg"></div>
            </div>

            {/* Services Section */}
            <div
              id="services"
              className={`py-16 sm:py-20 transition-all duration-1000 delay-200 ${
                isVisible.services
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={index}
                        className={`group relative ${service.bgPattern} rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200/50`}
                      >
                        {/* Icon and Title */}
                        <div className="text-center mb-8">
                          <div
                            className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          >
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#ff5722] transition-colors duration-300">
                            {service.title}
                          </h3>

                          {service.subtitle && (
                            <p className="text-[#003366] font-medium italic text-lg">
                              {service.subtitle}
                            </p>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed text-center text-lg">
                          {service.description}
                        </p>

                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/5 to-[#ff5722]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ff5722]/10 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <div
              id="how-it-works"
              className={`py-16 sm:py-20 bg-gradient-to-br from-[#003366]/5 to-[#ff5722]/5 transition-all duration-1000 delay-400 ${
                isVisible["how-it-works"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#003366]/10 rounded-full px-6 py-3 mb-6">
                    <Gauge className="w-6 h-6 text-[#003366]" />
                    <span className="text-[#003366] font-semibold text-lg">
                      Process Overview
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    How It Works
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#003366] to-[#ff5722] mx-auto rounded-full"></div>
                </div>

                {/* Timeline Design */}
                <div className="relative">
                  {/* Vertical Timeline Line */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#003366] via-[#ff5722] to-[#003366] rounded-full"></div>

                  <div className="space-y-16 lg:space-y-24">
                    {howItWorksSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      const isEven = index % 2 === 0;

                      return (
                        <div key={index} className="relative">
                          {/* Mobile Timeline Dot */}
                          <div className="lg:hidden flex justify-center mb-8">
                            <div
                              className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white`}
                            >
                              <span className="text-xl font-bold text-white">
                                {step.step}
                              </span>
                            </div>
                          </div>

                          {/* Desktop Layout */}
                          <div className="hidden lg:flex items-center">
                            {/* Left Side Content */}
                            <div
                              className={`w-1/2 ${
                                isEven ? "pr-16" : "pl-16 order-2"
                              }`}
                            >
                              <div
                                className={`relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform transition-all duration-500 hover:scale-105 ${
                                  isEven
                                    ? "hover:translate-x-4"
                                    : "hover:-translate-x-4"
                                }`}
                              >
                                {/* Arrow */}
                                <div
                                  className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-gray-100 rotate-45 ${
                                    isEven
                                      ? "-right-3 border-r border-b"
                                      : "-left-3 border-l border-t"
                                  }`}
                                ></div>

                                <div className="flex items-start gap-4 mb-6">
                                  <div
                                    className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                                  >
                                    <IconComponent className="w-7 h-7 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                      {step.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] rounded-full"></div>
                                  </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                  {step.description}
                                </p>

                                {/* Decorative Elements */}
                                <div
                                  className={`absolute -top-2 ${
                                    isEven ? "-right-2" : "-left-2"
                                  } w-8 h-8 bg-gradient-to-r ${
                                    step.color
                                  } rounded-full opacity-20`}
                                ></div>
                                <div
                                  className={`absolute -bottom-2 ${
                                    isEven ? "-left-2" : "-right-2"
                                  } w-6 h-6 bg-gradient-to-r ${
                                    step.color
                                  } rounded-full opacity-10`}
                                ></div>
                              </div>
                            </div>

                            {/* Center Timeline Node */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                              <div
                                className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl border-6 border-white group hover:scale-125 transition-transform duration-300`}
                              >
                                <span className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                                  {step.step}
                                </span>
                              </div>
                            </div>

                            {/* Right Side (Visual Space for even steps) */}
                            <div
                              className={`w-1/2 ${
                                !isEven ? "pr-16" : "pl-16 order-2"
                              }`}
                            >
                              {isEven && (
                                <div className="flex justify-center">
                                  <div
                                    className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500 opacity-20 hover:opacity-40`}
                                  >
                                    <IconComponent className="w-16 h-16 text-white" />
                                  </div>
                                </div>
                              )}
                              {!isEven && (
                                <div className="flex justify-center">
                                  <div
                                    className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center shadow-2xl transform hover:-rotate-12 transition-transform duration-500 opacity-20 hover:opacity-40`}
                                  >
                                    <IconComponent className="w-16 h-16 text-white" />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Mobile Layout */}
                          <div className="lg:hidden">
                            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105">
                              <div className="text-center">
                                <div className="flex items-center justify-center gap-3 mb-6">
                                  <div
                                    className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-lg`}
                                  >
                                    <IconComponent className="w-6 h-6 text-white" />
                                  </div>
                                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                                    {step.title}
                                  </h3>
                                </div>

                                <div className="w-16 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] rounded-full mx-auto mb-6"></div>

                                <p className="text-gray-700 leading-relaxed">
                                  {step.description}
                                </p>
                              </div>

                              {/* Mobile Decorative Elements */}
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#ff5722]/20 rounded-full"></div>
                              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#003366]/20 rounded-full"></div>
                            </div>
                          </div>

                          {/* Connecting Line for Mobile (between steps) */}
                          {index < howItWorksSteps.length - 1 && (
                            <div className="lg:hidden flex justify-center mt-8">
                              <div className="w-px h-12 bg-gradient-to-b from-[#003366] to-[#ff5722]"></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* What Sets Us Apart Section */}
            <div
              id="unique-features"
              className={`py-16 sm:py-20 transition-all duration-1000 delay-600 ${
                isVisible["unique-features"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#ff5722]/10 rounded-full px-6 py-3 mb-6">
                    <Star className="w-6 h-6 text-[#ff5722]" />
                    <span className="text-[#ff5722] font-semibold text-lg">
                      Our Advantages
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    What Sets Us Apart
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {uniqueFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                      >
                        <div className="text-center">
                          <div
                            className={`inline-flex items-center justify-center w-20 h-20 ${feature.bg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent
                              className={`w-10 h-10 ${feature.color}`}
                            />
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#ff5722] transition-colors duration-300">
                            {feature.title}
                          </h3>

                          <p className="text-gray-700 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#ff5722]/10 to-transparent rounded-bl-2xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Cost Factors Section */}
            <div
              id="cost-factors"
              className={`py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-[#003366]/5 transition-all duration-1000 delay-800 ${
                isVisible["cost-factors"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#003366]/10 rounded-full px-6 py-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-[#003366]" />
                    <span className="text-[#003366] font-semibold text-lg">
                      Pricing Factors
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Transportation Cost Factors for Car Resellers
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                    In vehicle transport for dealers, transportation cost
                    factors include distance, vehicle type/size, transport
                    method (open vs. enclosed), seasonality, fuel prices,
                    insurance, and additional services, all influencing the
                    overall shipping cost.
                  </p>
                  <p className="text-lg text-gray-700 font-medium">
                    Here's a more detailed breakdown:
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#003366] to-[#ff5722] mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {costFactors.map((factor, index) => {
                    const IconComponent = factor.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                      >
                        {/* Number Badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-[#003366] to-[#ff5722] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {factor.number}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#ff5722]/10 to-[#003366]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-[#003366] group-hover:text-[#ff5722] transition-colors duration-300" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#ff5722] transition-colors duration-300">
                          {factor.title}
                        </h3>

                        <p className="text-gray-700 leading-relaxed">
                          {factor.description}
                        </p>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/5 to-[#ff5722]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 sm:py-20 bg-gradient-to-r from-[#003366] to-[#ff5722]">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transport Your Vehicles?
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Get started with our professional auto transport services
                  designed specifically for car resellers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="https://rapidautoshipping.com/auto-transport-for-car-resellers">
                    <button className="bg-white text-[#003366] hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Get Instant Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" bg-gradient-to-br from-gray-50 via-orange-50 to-blue-50 py-12 px-4"
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

export default Home;
