import React, { useEffect, useState } from "react";
import TransportForm from "@/components/CommonComponents/Form";
import Image from "next/image";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import {
  ChevronDown,
  Shield,
  DollarSign,
  MapPin,
  Star,
  Home,
  Anchor,
  Users,
  Gift,
  Ship,
  ArrowRight,
  Car,
  Wrench,
  Fuel,
  Thermometer,
  Eye,
  CheckCircle,
  Clock,
  Truck,
  Phone,
  Bell,
  Plus,
  Minus,
  Package,
  Award
} from "lucide-react";
import { FaCar, FaShieldAlt, FaStar, FaHome } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";

function alaskaArizona() {
  const [activeSection, setActiveSection] = useState(null);
  const [activePort, setActivePort] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState("timeline");
  const [animateCards, setAnimateCards] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
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
      setCurrentFeature((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featuress = [
    { icon: Clock, text: "24/7 customer service and tracking" },
    {
      icon: Shield,
      text: "Multiple transport options (open/enclosed, port/door)",
    },
    { icon: MapPin, text: "24/7 customer service and tracking" },
    { icon: Star, text: "Competitive rates and special discounts" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Truck,
      title: "10,000+ Vehicles Successfully Shipped",
      description:
        "We have extensive experience handling long-distance and multi-modal auto transport routes like Arizona to Alaska.",
      delay: "delay-100",
    },
    {
      icon: Phone,
      title: "24/7 Customer Support",
      description:
        "Whether you have a question at booking or during transit, our dedicated team is always available to assist.",
      delay: "delay-200",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing with No Hidden Fees",
      description:
        "No hidden fees, what we quote is what you pay. Our team explains every cost upfront so you can make an informed decision.",
      delay: "delay-300",
    },
    {
      icon: Shield,
      title: "Fully Insured Shipments",
      description:
        "Every transport includes insurance coverage for added peace of mind.",
      delay: "delay-500",
    },
    {
      icon: Star,
      title: "Flexible Shipping Options",
      description:
        "Choose from open or enclosed transport, plus door-to-door, port-to-door, or port-to-port services tailored to your schedule and budget.",
      delay: "delay-700",
    },
  ];

  useEffect(() => {
    setAnimateCards(true);
  }, []);

  const timelineData = [
    { route: "Open Transport", time: "7–14 days (weather permitting)", icon: Ship },
    { route: "Enclosed Transport", time: "8–16 days (subject to route availability)", icon: Truck },
    { route: "Port-to-port services", time: "May add 1–3 days for port handling and sea transit logistics", icon: MapPin },
  ];

  const trackingFeatures = [
    { title: "Carrier Contact Information", icon: Phone },
    { title: "Estimated Arrival Times", icon: Clock },
    {
      title: "Status updates at key checkpoints (port arrival, mainland transfer, final delivery ETA)",
      icon: Bell,
      subtitle: " ",
    },
  ];

  const steps = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Clean Your Vehicle Inside and Out",
      description:
        "Wash your vehicle thoroughly to make inspection easier. Take clear photos of all sides and any existing damage; this serves as your record before shipping.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Remove All Personal Items",
      description:
        "Auto transport insurance typically doesn’t cover personal belongings left in the vehicle. Remove all loose items, valuables, electronics, and aftermarket accessories.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Check Fluids, Battery, and Tire Pressure",
      description:
        "Ensure oil, brake fluid, and coolant levels are appropriate. Top off your antifreeze, especially important for Alaska’s colder climates. Check that your battery is fully charged and your tires are properly inflated.",
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      title: "Disable Alarms and Remove Toll Tags",
      description:
        "Turn off any vehicle alarms to prevent disruptions during transport. Also, remove or deactivate toll tags to avoid unnecessary charges while in transit.",
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Leave Only 1/4 Tank of Fuel",
      description:
        " A quarter tank is ideal enough for loading and unloading, but light enough to meet weight guidelines and ensure safe transport.",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Secure or Remove Loose Parts and Accessories",
      description:
        "Fold in side mirrors, retract antennas, and remove bike racks, spoilers, or any detachable components that could be damaged or lost during shipment.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev.length < steps.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(stepTimer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingData = [
    {
      vehicle: "Sedan",
      transport: "Open",
      cost: "$1,500 - $2,000",
      time: "7 – 14 days",
    },
    {
      vehicle: "SUV",
      transport: "Open",
      cost: "$1,700 - $2,200",
      time: "8 – 16 days",
    },
    {
      vehicle: "Truck",
      transport: "Enclosed",
      cost: "$2,300 - $2,800",
      time: "10 – 18 days",
    },
    {
      vehicle: "Luxury Car",
      transport: "Enclosed",
      cost: "$2,500–$3,200",
      time: "10–20 days",
    },
  ];

  const shippingOptions = [
    {
      title: "Door-to-Door Car Shipping",
      icon: <Home className="w-6 h-6" />,
      description:
        "Door-to-door car shipping Arizona to Alaska is the most convenient option available. We pick up your vehicle directly from your home, workplace, or designated location in Arizona and deliver it right to your doorstep in Alaska, including Anchorage, Fairbanks, or Juneau.",
      benefits: [
        "Hassle-free pickup and delivery",
        "Saves time and eliminates terminal visits",
        "Available for most residential and commercial addresses",
      ],
      bestFor: "Customers who value convenience and time over price",
    },
    {
      title: "Port-to-Port Car Shipping",
      icon: <Anchor className="w-6 h-6" />,
      description:
        "Port-to-port car shipping Arizona to Alaska is the most economical option. You deliver your vehicle to a designated port in Arizona (or nearby California options), and we transport it to an Alaskan port such as Anchorage or Juneau.",
      benefits: [
        "Most cost-effective shipping option",
        "Ideal for customers who live near ports",
        "Streamlined for high-volume or regular shipments",
      ],
      bestFor:
        " Budget-conscious users who can manage pickup and drop-off at ports.",
    },
    {
      title: "Port-to-Door Car Shipping",
      icon: <MapPin className="w-6 h-6" />,
      description:
        "Port-to-door car shipping Arizona to Alaska combines cost savings with added convenience. You drop your vehicle off at a designated port, and we deliver it directly to your Alaskan residence.",
      benefits: [
        "Lower cost than full door-to-door service",
        "Ideal for remote destinations in Alaska",
        "Combines affordability with convenience",
      ],
      bestFor:
        " Customers comfortable dropping off at a port but want home delivery in Alaska.",
    },
    {
      title: "Door-to-Port Car Shipping",
      icon: <Truck className="w-6 h-6" />,
      description:
        "Door-to-port car shipping Arizona to Alaska is perfect for customers who need help getting their vehicle to the departure port. We pick up from your Arizona location and ship to your chosen Alaska port.",
      benefits: [
        "Simplified departure logistics",
        "No need to drive to a port yourself",
        "Great for those relocating quickly or from remote Arizona areas",
      ],
      bestFor:
        "Those leaving Arizona who can pick up their vehicle at an Alaskan port",
    },
  ];

  const costFactors = [
    {
      title: "Distance & Route",
      description:
        "Longer distances and remote delivery points increase the cost.",
      icon: <MapPin className="w-8 h-8" />,
    },
    {
      title: "Vehicle Size & Weight",
      description:
        " Larger or heavier vehicles cost more to transport.",
      icon: <Truck className="w-8 h-8" />,
    },
    {
      title: "Transport Type",
      description:
        "Open transport is more economical; enclosed is pricier but provides extra protection.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Seasonal Demand",
      description:
        "Winter months or extreme weather in Alaska can affect cost and timing.",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Pickup & Drop-off Locations",
      description:
        "Residential vs. port terminals impact price and convenience.",
      icon: <DollarSign className="w-8 h-8" />,
    },
  ];

  const transportComparison = [
    {
      feature: "Cost",
      open: "Lower",
      enclosed: "Higher due to added protection",
    },
    {
      feature: "Protection",
      open: "Basic (exposed to elements)",
      enclosed: "High (protected from weather/road debris)",
    },
    
    {
      feature: "Vehicle Types",
      open: "Standard sedans, SUVs, and standard vehicles",
      enclosed: "High-value, luxury, antique, or classic vehicles",
    },
    {
      feature: "Availability",
      open: "More frequent",
      enclosed: "Limited and must be scheduled in advance",
    },
  ];

  const hawaiianPorts = [
    {
      name: "Anchorage",
      island: "",
      description: "Alaska’s busiest port, ideal for most outbound shipments",
    },
    {
      name: "Fairbanks",
      island: "",
      description: "Serviced through nearby port access and overland transport",
    },
    {
      name: "Juneau",
      island: "",
      description: "Popular for regional and seasonal shipments",
    },
  ];
  const ArizonaPorts = [
    {
      name: "Birmingham",
      island: "",
      description: "Central location, highly accessible for final delivery",
    },
    {
      name: "Montgomery",
      island: "",
      description: " A major southern hub ideal for regional drop-offs",
    },
    {
      name: "Mobile",
      island: "",
      description:
        "Close to Gulf ports, convenient for port-to-port transitions",
    },
  ];

  const nyDestinations = [
    "Birmingham",
    "Montgomery",
    "Kahului, Mauifrom",
    "Mobile",
  ];

  const sampleRoutes = [
    { to: "Anchorage, AK", from: "Phoenix, AZ" },
    { to: "Fairbanks, AK", from: "Tucson, AZ" },
    { to: "Juneau, AK", from: "Flagstaff, AZ" },
    { to: "Sitka, AK", from: "Scottsdale, AZ" },
    { to: "Ketchikan, AK", from: "Mesa, AZ" },
    { to: "Wasilla, AK", from: "Chandler, AZ" },
    { to: "Kenai, AK", from: "Wasilla, AK" },
    { to: "Kodiak, AK", from: "Tempe, AZ" },
  ];

  const faqData = [
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "How much does it cost to ship a car from Arizona to Alaska?",
    answer:
      "The cost to ship a car from Arizona to Alaska varies based on factors like vehicle size, transport type, and timing. On average, Arizona to Alaska auto transport prices range between $1,500 and $3,000. For a precise estimate, get a free quote tailored to your specific needs.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "How long does it take to ship a car from Arizona to Alaska?",
    answer:
      "The typical Arizona to Alaska car shipping timeline is between 7 and 20 days, depending on the transport method and route conditions.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Is my vehicle insured during shipping?",
    answer:
      "Yes, all shipments include comprehensive insurance coverage for your peace of mind during Arizona to Alaska vehicle shipping.",
  },
  {
    icon: <Car className="w-5 h-5" />,
    question: "Can I ship personal items inside my vehicle?",
    answer:
      "Most carriers, including Rapid Auto Shipping, do not allow personal belongings inside the vehicle during transport for safety and insurance reasons. It's best to remove all items before shipping.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    question: "Do you offer military discounts?",
    answer:
      "Yes, we proudly offer military discounts for eligible active-duty personnel and veterans. Ask your representative about current specials when you book your auto shipping Arizona to Alaska.",
  },
];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActivePort((prev) => (prev + 1) % hawaiianPorts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Head>
        <title>Arizona to Alaska Car Shipping | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Arizona to Alaska car shipping. Fast, reliable, door-to-door service. Get a free quote today for affordable auto transport!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/state-to-state/arizona-to-alaska"
        />
        <meta
          property="og:title"
          content="Arizona to Alaska Car Shipping | Rapid Auto Shipping"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Arizona to Alaska Auto Transport Service",
              provider: {
                "@type": "Organization",
                name: "Rapid Auto Shipping",
                url: "https://rapidautoshipping.com",
                telephone: "+1-833-233-4447",
                sameAs: [
                  "https://www.facebook.com/Rapidautoshipping",
                  "https://www.instagram.com/rapidautoshipping",
                  "https://www.youtube.com/rapidautoshipping",
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "817 Herman Road",
                  addressLocality: "Horsham",
                  addressRegion: "PA",
                  postalCode: "19044",
                  addressCountry: "US",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "1000",
                },
              },
              areaServed: [
                {
                  "@type": "State",
                  name: "Alaska",
                  alternateName: "AK",
                },
                {
                  "@type": "State",
                  name: "Arizona",
                  alternateName: "AL",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Arizona to Alaska Vehicle Transport Options",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Open Carrier Transport",
                      description:
                        "Cost-effective auto transport using open trailers, suitable for most vehicles on the Arizona to Alaska route.",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      minPrice: "1200",
                      maxPrice: "1800",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Enclosed Carrier Transport",
                      description:
                        "Premium enclosed trailer transport providing maximum protection for luxury and classic vehicles during the long-distance Arizona to Alaska journey.",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      minPrice: "1600",
                      maxPrice: "2400",
                      priceCurrency: "USD",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Door-to-Door Service",
                      description:
                        "Complete service including pickup from your location in Alaska and delivery to your destination in Arizona.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Terminal-to-Terminal Service",
                      description:
                        "Budget-friendly option with customer drop-off and pickup at designated terminals in Alaska and Arizona.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Expedited Shipping",
                      description:
                        "Faster delivery service for urgent Arizona to Alaska auto transport needs with priority scheduling.",
                    },
                  },
                ],
              },
              description:
                "Professional auto transport services from Arizona to Alaska covering approximately 3,400 miles. Specializing in open and enclosed carrier transport with door-to-door and terminal-to-terminal options for reliable interstate vehicle shipping.",
              url: "https://rapidautoshipping.com/state-to-state/arizona-to-alaska",
              serviceType: [
                "VehicleTransport",
                "InterStateVehicleTransport",
                "LongDistanceVehicleTransport",
              ],
              serviceArea: {
                "@type": "GeoShape",
                description: "Arizona to Alaska auto transport corridor",
              },
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Distance",
                  value: "3,350-3,400 miles",
                },
                {
                  "@type": "PropertyValue",
                  name: "Transit Time",
                  value: "7-14 days",
                },
                {
                  "@type": "PropertyValue",
                  name: "Insurance",
                  value: "Full coverage included up to $100,000",
                },
                {
                  "@type": "PropertyValue",
                  name: "Tracking",
                  value: "GPS real-time tracking available",
                },
                {
                  "@type": "PropertyValue",
                  name: "Vehicle Types",
                  value: "Cars, SUVs, Trucks, Motorcycles, RVs",
                },
              ],
              offers: {
                "@type": "Offer",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  minPrice: "1200",
                  maxPrice: "2400",
                  priceCurrency: "USD",
                },
                availability: "https://schema.org/InStock",
                validFrom: "2025-01-01",
                eligibleRegion: [
                  {
                    "@type": "State",
                    name: "Alaska",
                  },
                  {
                    "@type": "State",
                    name: "Arizona",
                  },
                ],
              },
              potentialAction: {
                "@type": "ConsumeAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://rapidautoshipping.com/blogs/car-transportation-cost-calculator",
                  actionPlatform: [
                    "https://schema.org/DesktopWebPlatform",
                    "https://schema.org/MobileWebPlatform",
                  ],
                },
                name: "Get Quote",
              },
              termsOfService:
                "https://rapidautoshipping.com/terms-and-conditions",
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
                  item: "https://rapidautoshipping.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "State to State",
                  item: "https://rapidautoshipping.com/state-to-state/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Arizona to Alaska Auto Transport",
                  item: "https://rapidautoshipping.com/state-to-state/arizona-to-alaska",
                },
              ],
            }),
          }}
        />
      </Head>
      <Navbar />
      <section className="relative py-8 min-h-screen flex items-center w-full">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/q_70,f_webp/v1747984450/Car-Shipping-Calculator_xhq3te.webp"
            alt="Professional Auto Transport Service"
            width={1200}
            height={600}
            quality={75}
            priority={true}
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/q_20,e_blur:200/v1747984450/Car-Shipping-Calculator_xhq3te.webp"
            className="w-full h-full object-contain"
            onError={() => console.error("Image failed to load")}
            sizes="(max-width: 600px) 600px, 800px"
            style={{ aspectRatio: "2/1" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001933]/30 via-[#001933]/20 to-[#001933]/40 backdrop-blur-md"></div>
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
                <circle cx="10" cy="10" r="1" fill="white" fillOpacity="0.3" />
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
            <div className="space-y-4 sm:space-y-6">
              <h1
                className="text-5xl sm:text-6xl lg:text-5xl drop-shadow-2xl font-bold text-center sm:text-left text-white"
                style={{ fontSize: "50px" }}
              >
                <span className="text-[#ff5722]">Arizona </span> to{" "}
                <span className="text-[#ff5722]">Alaska</span> Car Shipping
                Services
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed max-w-3xl drop-shadow-xl backdrop-blur-md bg-[#001933]/20 p-3 sm:p-4 rounded-lg border border-[#001933]/30 text-center sm:text-left">
                At Rapid Auto Shipping, we specialize in reliable Arizona to Alaska car shipping solutions tailored to meet your timeline and budget. Whether you need port-to-door, door-to-port, port-to-port, or open/enclosed transport, we’ve got you covered. Our team ensures a stress-free experience from pickup to delivery. Let us handle the logistics while you enjoy peace of mind. Get a free quote for Arizona to Alaska car shipping today!
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="text-white font-bold text-base sm:text-lg drop-shadow-lg text-center sm:text-left">
                Perfect For:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
                <div
                  className="bg-[#001933]/25 backdrop-blur-md rounded-xl p-3 hover:bg-[#ff5722]/20 transition-all duration-300 cursor-pointer border border-[#001933]/50 hover:border-[#ff5722]/60 shadow-lg hover:shadow-xl hover:shadow-[#ff5722]/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0, 25, 51, 0.25) 0%, rgba(0, 25, 51, 0.1) 100%)",
                    boxShadow: "0 8px 32px 0 rgba(0, 25, 51, 0.37)",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <FaCar className="w-5 h-5 text-white drop-shadow-sm" />
                    <div>
                      <div className="text-white text-lg font-semibold drop-shadow-sm">
                        Luxury Vehicles
                      </div>
                      <div className="text-gray-100 text-md drop-shadow-sm">
                        High-end cars needing extra protection
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#001933]/25 backdrop-blur-md rounded-xl p-3 hover:bg-[#ff5722]/20 transition-all duration-300 cursor-pointer border border-[#001933]/50 hover:border-[#ff5722]/60 shadow-lg hover:shadow-xl hover:shadow-[#ff5722]/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0, 25, 51, 0.25) 0%, rgba(0, 25, 51, 0.1) 100%)",
                    boxShadow: "0 8px 32px 0 rgba(0, 25, 51, 0.37)",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <FaShieldAlt className="w-5 h-5 text-white drop-shadow-sm" />
                    <div>
                      <div className="text-white text-lg font-semibold drop-shadow-sm">
                        Classic Cars
                      </div>
                      <div className="text-gray-100 text-md drop-shadow-sm">
                        Vintage automobiles requiring special care
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#001933]/25 backdrop-blur-md rounded-xl p-3 hover:bg-[#ff5722]/20 transition-all duration-300 cursor-pointer border border-[#001933]/50 hover:border-[#ff5722]/60 shadow-lg hover:shadow-xl hover:shadow-[#ff5722]/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0, 25, 51, 0.25) 0%, rgba(0, 25, 51, 0.1) 100%)",
                    boxShadow: "0 8px 32px 0 rgba(0, 25, 51, 0.37)",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <FaStar className="w-5 h-5 text-white drop-shadow-sm" />
                    <div>
                      <div className="text-white text-lg font-semibold drop-shadow-sm">
                        Exotic Cars
                      </div>
                      <div className="text-gray-100 text-md drop-shadow-sm">
                        Rare and expensive vehicles
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#001933]/25 backdrop-blur-md rounded-xl p-3 hover:bg-[#ff5722]/20 transition-all duration-300 cursor-pointer border border-[#001933]/50 hover:border-[#ff5722]/60 shadow-lg hover:shadow-xl hover:shadow-[#ff5722]/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0, 25, 51, 0.25) 0%, rgba(0, 25, 51, 0.1) 100%)",
                    boxShadow: "0 8px 32px 0 rgba(0, 25, 51, 0.37)",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <FaHome className="w-5 h-5 text-white drop-shadow-sm" />
                    <div>
                      <div className="text-white text-lg font-semibold drop-shadow-sm">
                        New Car Purchases
                      </div>
                      <div className="text-gray-100 text-md drop-shadow-sm">
                        Protecting your investment from day one
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <TransportForm />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] leading-tight">
              Why Choose Rapid Auto Shipping for Arizona to Alaska Car Shipping?
            </h2>

            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Choosing the right transport partner is crucial when it comes to Arizona to Alaska car shipping, and Rapid Auto Shipping delivers unmatched reliability. With years of industry experience, we provide fully insured services backed by real-time GPS tracking for total peace of mind. Our dedicated support team is available 24/7 to answer your questions and ensure a smooth process from start to finish. Whether you're relocating, purchasing a vehicle online, or moving for military or business reasons, our streamlined shipping solutions are tailored to your specific needs. Thousands of customers trust us each year because we prioritize safety, transparency, and on-time delivery every time.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Full Insurance Coverage
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Real-time Tracking
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  24/7 Customer Support
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Transparent Pricing
                </span>
              </div>
            </div>

            {/* CTA Button */}
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-[#003366]/10 to-[#003366]/20 rounded-2xl overflow-hidden shadow-xl">
              {/* You can replace the placeholder with an actual image like this: */}
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1750331132/alaska_port_1_rstyti.webp"
                alt="Arizona to Alaska car shipping service"
                fill
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ff5722]/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#003366]/15 rounded-full"></div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <div
          className={`relative overflow-hidden bg-gradient-to-r from-[#003366] to-[#004080] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-10">
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Cost to Ship a Car from
                <span className="block text-[#ff5722] text-4xl md:text-5xl mt-2">
                  Arizona to Alaska
                </span>
              </h2>
              <p className="text-xl text-slate-200 max-w-4xl mx-auto mb-8">
                If you're budgeting for a long-distance move, understanding the cost to ship a car from Arizona to Alaska is essential. At Rapid Auto Shipping, we offer transparent and competitive pricing based on your vehicle type, transport preference, distance, and seasonal demand. On average, Arizona to Alaska auto transport prices range between $1,500 and $3,200, depending on your chosen service and vehicle size. Whether you’re shipping a sedan via open transport or a luxury vehicle with enclosed service, we provide accurate quotes with no hidden fees. Our goal is to offer pricing that delivers both value and flexibility, so you don’t have to compromise on service to stay within budget.
              </p>
              <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Request Your Custom Quote Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Cost Factors Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div
            className={`text-center mb-12 transition-all duration-800 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              Factors Affecting Vehicle Shipping Costs from Arizona to Alaska
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Several elements influence pricing:
            </p>
          </div>

          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-800 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {costFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#ff5722] group"
              >
                <div className="text-[#ff5722] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {factor.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-3">
                  {factor.title}
                </h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing Table */}
          <div
            className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-800 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                General Guide to Arizona to Alaska Auto Transport Prices
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-[#003366]">
                      Vehicle Type
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-[#003366]">
                      Transport Type
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-[#003366]">
                      Estimated Cost
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-[#003366]">
                      Delivery Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {row.vehicle}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            row.transport === "Open"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {row.transport}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#ff5722]">
                        {row.cost}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-slate-50 p-4 text-center">
              <p className="text-gray-600">
              Need a personalized estimate? Get a free quote for Arizona to Alaska auto transport today!
              </p>
            </div>
          </div>
        </div>

        {/* Flexible Shipping Options */}
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`text-center mb-12 transition-all duration-800 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-[#003366] mb-4">
                Flexible Arizona Car Shipping Options to Fit Your Schedule and
                Budget
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
  At Rapid Auto Shipping, we understand that every customer has different priorities when it comes to Arizona to Alaska auto transport. That’s why we offer a variety of transport options to suit your schedule, location, and budget. Whether you prefer the ease of door-to-door car shipping or the cost-efficiency of port-to-port transport, our flexible services make vehicle transport from Arizona to Alaska straightforward and stress-free.

              </p>
            </div>

            <div
              className={`grid md:grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-800 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {shippingOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#ff5722] group"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-[#ff5722] mr-4 group-hover:scale-110 transition-transform duration-300">
                      {option.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#003366]">
                      {option.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#003366] mb-3">
                      Benefits:
                    </h4>
                    <div className="space-y-2">
                      {option.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-start text-gray-700"
                        >
                          <Star className="w-4 h-4 text-[#ff5722] mr-3 mt-1 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm">
                      <span className="font-semibold text-[#003366]">
                        Best For:
                      </span>
                      <span className="text-gray-600 ml-2">
                        {option.bestFor}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open vs Enclosed Transport */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div
            className={`text-center mb-12 transition-all duration-800 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              Open vs. Enclosed Transport
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When choosing how to ship a car from Arizona to Alaska, consider whether open or enclosed transport best suits your needs.
            </p>
          </div>

          <div
            className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-800 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#003366]">
                    <th className="px-6 py-4 text-left font-bold text-white">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-white">
                      <div className="flex items-center">
                        <Truck className="w-5 h-5 mr-2" />
                        Open Transport
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-white">
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Enclosed Transport
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transportComparison.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 font-semibold text-[#003366] bg-orange-50">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-[#003366]">{row.open}</td>
                      <td className="px-6 py-4 text-[#003366]">
                        {row.enclosed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Military Discounts & Promotions */}
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className={`transition-all duration-800 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-[#ff5722] mr-3" />
                  <Gift className="w-8 h-8 text-[#ff5722]" />
                </div>
                <h3 className="text-2xl font-bold text-[#003366] mb-4">
                  Special Offers Available :
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                 We proudly offer military discounts and seasonal promotions for long-distance relocations!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white mt-10">
        {/* Hero Section */}
        <div
          className="relative overflow-hidden"
          style={{ backgroundColor: "#003366" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-20 left-20 w-32 h-32 rounded-full animate-pulse"
              style={{ backgroundColor: "#ff5722" }}
            ></div>
            <div
              className="absolute top-40 right-32 w-24 h-24 rounded-full animate-bounce"
              style={{ backgroundColor: "#ff5722" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full animate-ping"
              style={{ backgroundColor: "#ff5722" }}
            ></div>
          </div>

     <div             
  className={`relative z-10 container mx-auto px-6 py-10 transition-all duration-1000 ${               
    isVisible                 
      ? "opacity-100 translate-y-0"                 
      : "opacity-0 translate-y-10"             
  }`}           
>             
  <div className="text-center">               
    <div className="flex justify-center items-center mb-6 relative">                 
      <Ship className="w-16 h-16 text-white mr-4 animate-bounce drop-shadow-2xl" />                 
      <ArrowRight                   
        className="w-8 h-8 animate-pulse drop-shadow-lg"                   
        style={{ color: "#ff5722" }}                 
      />                 
      <Truck                   
        className="w-16 h-16 text-white ml-4 animate-bounce drop-shadow-2xl"                   
        style={{ animationDelay: "0.5s" }}                 
      />               
    </div>               
    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">                 
      Arizona to Alaska               
    </h2>               
    <h2 className="text-2xl md:text-3xl font-light text-white mb-8 backdrop-blur-sm bg-white/5 rounded-2xl px-6 py-3 border border-white/10 shadow-2xl">                 
      Auto Transport Routes: From Major Cities to Key Ports               
    </h2>               
    <p className="text-xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed mb-6 backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">                
    Rapid Auto Shipping offers seamless Arizona port-to-Alaska auto transport services, connecting major port cities in Alaska, such as Anchorage, Fairbanks, Juneau, Sitka, and more, with departure points in and near Arizona. If you're shipping a vehicle from Phoenix, Tucson, or Flagstaff, we coordinate delivery to the appropriate port for efficient transport to Alaska. Whether you’re moving for work, military relocation, or seasonal travel, our streamlined port logistics help reduce transit time and cost.          
    </p>               
    <p className="text-xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed mb-6 backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">           
      
We utilize well-established port routes to keep shipping simple and predictable. Below are a few popular combinations:
              
    </p>             
  </div>           
</div>
</div>

        

        <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-5xl font-bold mb-4"
                style={{ color: "#003366" }}
              >
                Popular Shipping Routes
              </h2>
              <div
                className="w-24 h-1 mx-auto mb-6 rounded-full"
                style={{ backgroundColor: "#ff5722" }}
              ></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our most frequently used shipping corridors across the
                country
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {sampleRoutes.map((route, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
                  style={{ backgroundColor: "white" }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, #003366 1px, transparent 1px), radial-gradient(circle at 80% 50%, #ff5722 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                      }}
                    ></div>
                  </div>

                  {/* Top accent bar */}
                  <div
                    className="h-2 w-full group-hover:h-3 transition-all duration-300"
                    style={{ backgroundColor: "#ff5722" }}
                  ></div>

                  <div className="p-8">
                    {/* Route Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div
                          className="p-3 rounded-full group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <Truck className="w-6 h-6 text-white" />
                        </div>
                        <span
                          className="text-sm font-medium tracking-wider uppercase"
                          style={{ color: "#ff5722" }}
                        >
                          Route {index + 1}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Package className="w-4 h-4" />
                        <span className="text-sm">Express</span>
                      </div>
                    </div>

                    {/* Route Path */}
                    <div className="relative mb-6">
                      <div className="flex items-center justify-between">
                        {/* From Location */}
                        <div className="flex items-center space-x-3 z-10 relative">
                          <div
                            className="p-2 rounded-full"
                            style={{ backgroundColor: "#003366" }}
                          >
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p
                              className="text-xl font-bold"
                              style={{ color: "#003366" }}
                            >
                              {route.from}
                            </p>
                            <p className="text-sm text-gray-500">Origin</p>
                          </div>
                        </div>

                        {/* Animated Line */}
                        <div className="flex-1 mx-6 relative">
                          <div className="h-0.5 bg-gray-200 rounded-full">
                            <div
                              className="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                              style={{
                                backgroundColor: "#ff5722",
                                width: "0%",
                                animation: "slideIn 2s ease-out forwards",
                              }}
                            ></div>
                          </div>
                          <ArrowRight
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-6 h-6 group-hover:scale-125 transition-all duration-300"
                            style={{ color: "#ff5722" }}
                          />
                        </div>

                        {/* To Location */}
                        <div className="flex items-center space-x-3 z-10 relative">
                          <div>
                            <p
                              className="text-xl font-bold text-right"
                              style={{ color: "#003366" }}
                            >
                              {route.to}
                            </p>
                            <p className="text-sm text-gray-500 text-right">
                              Destination
                            </p>
                          </div>
                          <div
                            className="p-2 rounded-full"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    
                    
             
                  </div>
                  
                </div>
              ))}
            </div>
            <p className="text-xl text-center font-bold text-blue-900 mt-10">
                      Our team handles all necessary coordination between Arizona and Alaska ports, ensuring your vehicle arrives safely and on time. For Alaska road conditions and updates, refer to the Federal Highway Administration’s Alaska traffic page.
                    </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>

      <div
        className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 mt-20"
        style={{ backgroundColor: "#003366" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 sm:mb-6 animate-pulse"
              style={{ backgroundColor: "#ff5722" }}
            >
              <Car className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight px-2">
              How to Prepare Your Vehicle for Shipping
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
             Getting your vehicle ready for Arizona to Alaska car shipping is an important step to ensure a smooth, damage-free transport process. Here’s a simple checklist to follow before handing your car over to our carrier:
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                } ${activeStep === index ? "scale-105" : "scale-100"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div
                    className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-4 sm:mb-6 transition-all duration-300 ${
                      activeStep === index ? "animate-bounce" : ""
                    }`}
                    style={{ backgroundColor: "#ff5722" }}
                  >
                    <div className="text-white">{step.icon}</div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg transition-all duration-300 ${
                        visibleItems.includes(index) ? "animate-pulse" : ""
                      }`}
                      style={{ backgroundColor: "#003366" }}
                    >
                      {index + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-opacity-80 transition-colors break-words"
                        style={{ color: "#003366" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center px-4">
            <div className="inline-block bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl max-w-full w-full sm:w-auto">
              <h3
                className="text-xl sm:text-2xl font-bold mb-4"
                style={{ color: "#003366" }}
              >
                Ready for Seamless Shipping?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto px-2">
                Following these steps helps guarantee a safe and stress-free Arizona to Alaska vehicle shipping experience.
              </p>
              <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                <button
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  Schedule Your Shipping
                </button>
              </Link>
            </div>
          </div>

          {/* Animated Progress Bar */}
         
        
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }

          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }

          @media (max-width: 640px) {
            .shadow-3xl {
              box-shadow: 0 20px 40px -8px rgba(0, 0, 0, 0.2);
            }
          }
        `}</style>
      </div>
      <div className="max-w-7xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#003366" }}>
            What to Expect: Delivery Timelines and Tracking
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Understanding the Arizona to Alaska car shipping timeline helps set accurate expectations and plan accordingly. Shipping a vehicle between these two distant states typically takes 7 to 20 days, depending on your transport type, exact locations, and seasonal factors.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-full p-2">
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "timeline"
                  ? "text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              style={{
                backgroundColor:
                  activeTab === "timeline" ? "#003366" : "transparent",
              }}
            >
              <Clock className="inline-block w-5 h-5 mr-2" />
              Delivery Timeline
            </button>
            <button
              onClick={() => setActiveTab("tracking")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "tracking"
                  ? "text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              style={{
                backgroundColor:
                  activeTab === "tracking" ? "#003366" : "transparent",
              }}
            >
              <Eye className="inline-block w-5 h-5 mr-2" />
              Vehicle Tracking
            </button>
          </div>
        </div>

        {/* Timeline Section */}
        {activeTab === "timeline" && (
          <div className="space-y-8">
            <h3
              className="text-2xl font-bold text-center mb-8"
              style={{ color: "#003366" }}
            >
              Estimated Delivery Timeline
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timelineData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                      animateCards ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${index * 150}ms`,
                      borderColor: index === 3 ? "#ff5722" : "transparent",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                      style={{
                        backgroundColor: index === 3 ? "#ff5722" : "#003366",
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4
                      className="font-bold text-lg mb-2 text-center"
                      style={{ color: "#003366" }}
                    >
                      {item.route}
                    </h4>
                    <p
                      className="text-2xl font-bold text-center mb-2"
                      style={{ color: index === 3 ? "#ff5722" : "#003366" }}
                    >
                      {item.time}
                    </p>
                    {item.note && (
                      <p className="text-sm text-gray-500 text-center italic">
                        {item.note}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Note Section */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-6 mt-12">
              <h4
                className="font-bold text-lg mb-3"
                style={{ color: "#003366" }}
              >
                Important Note:
              </h4>
              <p className="text-gray-700 leading-relaxed">
            Since shipping to Alaska often involves sea transport from West Coast ports, the timeline includes both overland and maritime segments. Delays due to extreme weather or port congestion are rare but possible, especially during winter months.
              </p>
            </div>
          </div>
        )}

        {/* Tracking Section */}
        {activeTab === "tracking" && (
          <div className="space-y-8">
            <h3
              className="text-2xl font-bold text-center mb-8"
              style={{ color: "#003366" }}
            >
              How Vehicle Tracking Works
            </h3>

             <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
           Once your shipment is on the move, you’ll receive tracking updates by email or text, based on your preferences. Tracking features may vary depending on the carrier and service level, but generally include:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {trackingFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                      animateCards ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                      style={{ backgroundColor: "#ff5722" }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h4
                      className="font-bold text-xl mb-4 text-center"
                      style={{ color: "#003366" }}
                    >
                      {feature.title}
                    </h4>
                    {feature.subtitle && (
                      <p className="text-gray-600 text-center italic">
                        {feature.subtitle}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
               Need a more detailed update? Our 24/7 customer support team is always available to help you track vehicle transport from Arizona to Alaska in real time.
              </p>
            </div>
          </div>
        )}

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

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
        `}</style>
      </div>

      <div
        className="min-h-screen py-20 px-4"
        style={{ backgroundColor: "#003366" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Why Rapid Auto Shipping
              <span className="block" style={{ color: "#ff5722" }}>
                Stands Out
              </span>
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8 rounded-full"
              style={{ backgroundColor: "#ff5722" }}
            ></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
             At Rapid Auto Shipping, we’ve earned a reputation for delivering reliable car shipping from Arizona to Alaska, backed by thousands of satisfied customers and years of proven experience.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-700 hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                } ${feature.delay}`}
              >
                <div
                  className="bg-white rounded-2xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-t-4"
                  style={{ borderTopColor: "#ff5722" }}
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#ff5722" }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4 text-center"
                    style={{ color: "#003366" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div
            className={`text-center transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <p
                className="text-xl md:text-2xl leading-relaxed mb-8"
                style={{ color: "#003366" }}
              >
                When it comes to auto shipping Arizona to Alaska, Rapid Auto Shipping delivers the confidence, convenience, and care your vehicle deserves.
              </p>
              <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                <button
                  className="px-12 py-4 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  style={{ backgroundColor: "#ff5722" }}
                >
                  Get Your Quote Today
                </button>
              </Link>
            </div>
          </div>

          {/* Floating Animation Elements */}
          <div
            className="absolute top-20 left-10 w-4 h-4 rounded-full animate-pulse opacity-60"
            style={{ backgroundColor: "#ff5722" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-6 h-6 rounded-full animate-bounce opacity-40"
            style={{ backgroundColor: "#ff5722" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-3 h-3 rounded-full animate-ping opacity-50"
            style={{ backgroundColor: "#ff5722" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-5 h-5 rounded-full animate-pulse opacity-30"
            style={{ backgroundColor: "#ff5722" }}
          ></div>
        </div>
      </div>

      <div
        className="min-h-screen relative overflow-hidden mt-20 pb-10"
        style={{ backgroundColor: "#003366" }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse"
            style={{ backgroundColor: "#ff5722" }}
          ></div>
          <div
            className="absolute top-60 right-20 w-24 h-24 rounded-full opacity-10 animate-bounce"
            style={{ backgroundColor: "#ff5722" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full opacity-10 animate-ping"
            style={{ backgroundColor: "#ff5722" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div
                className={`transform transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight w-50">
                  Ready to Ship Your Car from
                  <span className="block mt-2" style={{ color: "#ff5722" }}>
                    Arizona to Alaska ?

                  </span>
                </h2>
              </div>

              <div
                className={`transform transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <p className="text-xl text-gray-300 leading-relaxed">
                  Shipping your vehicle from Arizona to Alaska doesn’t have to be complicated. With Rapid Auto Shipping, you get fast, reliable, and affordable service tailored to your needs. Whether you’re relocating, selling, or just need safe transport, we make the process simple and worry-free.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                Book Arizona to Alaska car shipping today and experience stress-free vehicle transport. Get a free, no-obligation quote now or call us at (833) 233-4447 to speak with one of our friendly auto shipping specialists. <br />
                Don’t wait, get a quote for auto transport with Rapid Auto Shipping and enjoy seamless Arizona to Alaska car shipping services you can trust.
                </p>
                
              </div>

              <div
                className={`transform transition-all duration-1000 delay-900 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              ></div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-1100 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                  <button
                    className="group px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"
                    style={{ backgroundColor: "#ff5722" }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Instant Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>

                <Link href="tel:+18332334447">
                  <button
                    className="px-8 py-4 border-2 border-white rounded-lg font-semibold text-white hover:bg-white transition-all duration-300 hover:scale-105"
                    style={{ color: isVisible ? "white" : "#003366" }}
                    onMouseEnter={(e) => (e.target.style.color = "#003366")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    Call Now: (833) 233-4447
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Animated Features */}
            <div className="relative">
              <div
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform transition-all duration-1000 delay-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Key Benefits:
                </h3>

                <div className="space-y-4">
                  {featuress.map((feature, index) => {
                    const Icon = feature.icon;
                    const isActive = currentFeature === index;

                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                          isActive ? "transform scale-105" : ""
                        }`}
                        style={{
                          backgroundColor: isActive ? "#ff5722" : "transparent",
                          borderLeft: isActive ? "none" : "3px solid #ff5722",
                        }}
                      >
                        <Icon
                          className={`w-6 h-6 transition-all duration-300 ${
                            isActive
                              ? "text-white animate-pulse"
                              : "text-gray-300"
                          }`}
                        />
                        <span
                          className={`font-medium transition-all duration-300 ${
                            isActive ? "text-white" : "text-gray-300"
                          }`}
                        >
                          {feature.text}
                        </span>
                        {isActive && (
                          <CheckCircle className="w-5 h-5 text-white ml-auto animate-bounce" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className={`absolute -top-6 -right-6 rounded-xl p-6 shadow-2xl transform transition-all duration-1000 delay-1400 hover:scale-110 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ backgroundColor: "#ff5722" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-white/80">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed mt-5">
            Whether you’re ready to book Arizona to Alaska car shipping or just exploring options, we’re here to help you get a quote for auto transport that fits your needs.

Get a free quote today!
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <section
        className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-blue-50 py-12 px-4"
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
                background: "linear-gradient(135deg, #ff5722 0%, #003366 100%)",
              }}
            >
              <Car className="w-8 h-8 text-white" />
            </div>
            <div
              className="text-4xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #ff5722 100%)",
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
              Everything you need to know about our Alaska auto transport
              services
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
      </section>
      <Footer />
    </>
  );
}

export default alaskaArizona;
