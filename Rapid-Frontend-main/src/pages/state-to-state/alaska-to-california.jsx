import Image from "next/image";
import React, { useEffect, useState } from "react";
import TransportForm from "@/components/CommonComponents/Form";
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
} from "lucide-react";
import { FaCar, FaShieldAlt, FaStar, FaHome } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";

function Alaskanewyork() {
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
    { icon: Clock, text: "Fast and flexible scheduling" },
    { icon: Shield, text: "Fully insured transport" },
    { icon: MapPin, text: "Real-time updates and communication" },
    { icon: Truck, text: "Expert coordination for Alaska’s unique routes" },
    {
      icon: Star,
      text: "Multiple transport types to fit any vehicle or budget",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Truck,
      title: "10,000+ Vehicles Shipped Nationwide",
      description:
        "Our extensive experience means you get a streamlined, proven process for every shipment.",
      delay: "delay-100",
    },
    {
      icon: Phone,
      title: "24/7 Customer Support",
      description:
        "You’re never left guessing. Our support team is available anytime to answer questions or provide updates.",
      delay: "delay-200",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing with No Hidden Fees",
      description:
        " What you see is what you get. Our quotes include all necessary fees, and there are no surprises at delivery.",
      delay: "delay-300",
    },
    {
      icon: Shield,
      title: "Fully Insured Shipments",
      description:
        "Every vehicle is protected with insurance coverage while in transit, giving you peace of mind.",
      delay: "delay-500",
    },
    {
      icon: Star,
      title: "Real Customer Reviews & High Ratings",
      description:
        "With thousands of satisfied customers, we’ve earned high ratings across major review platforms.",
      delay: "delay-700",
    },
  ];

  useEffect(() => {
    setAnimateCards(true);
  }, []);

  const timelineData = [
    { route: "Port-to-Port", time: "10-18 days", icon: Ship },
    { route: "Door-to-Port / Port-to-Door", time: "12–20 days", icon: Truck },
    { route: "Door-to-Door", time: "14–21 days", icon: MapPin },
    {
      route: "Enclosed Transport",
      time: "Add 2–4 days",
      icon: CheckCircle,
      note: "(due to limited availability)",
    },
  ];

  const trackingFeatures = [
    { title: "Carrier contact details", icon: Phone },
    { title: "Estimated Arrival Times", icon: Clock },
    {
      title: "Status Updates at Key Checkpoints",
      icon: Bell,
      subtitle: "",
    },
  ];

  const steps = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Clean Your Vehicle & Document Condition",
      description:
        "Wash your car thoroughly inside and out. This helps the shipping company inspect your vehicle for any existing damage and allows for a smoother loading process.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Remove Personal Belongings",
      description:
        "While you can ship your car, personal items are not allowed inside the vehicle during transport. This helps prevent accidents and ensures compliance with safety regulations.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Check for Leaks and Mechanical Issues",
      description:
        "Make sure your car has enough antifreeze, oil, and other essential fluids. This prevents potential mechanical issues during transit.",
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      title: "Check Tire Pressure",
      description:
        "Ensure the tires are properly inflated to prevent any damage while loading or unloading.",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Document the Vehicle’s Condition",
      description:
        "Take photos from all angles to record your vehicle’s condition before shipping, in case any damage occurs during transport.",
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Disable Alarms",
      description:
        "If your vehicle has an alarm system, disable it to avoid unnecessary disruptions during the journey.",
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
      cost: "$1,500 – $2,000",
      time: "7 – 14 days",
    },
    {
      vehicle: "SUV",
      transport: "Open",
      cost: "$1,700 – $2,300",
      time: "7 – 14 days",
    },
    {
      vehicle: "Truck",
      transport: "Enclosed",
      cost: "$2,200 – $2,800",
      time: "10–16 days",
    },
    {
      vehicle: "Luxury Car",
      transport: "Enclosed",
      cost: "$2,500 – $3,000",
      time: "10 – 16 days",
    },
  ];

  const shippingOptions = [
    {
      title: "Door-to-Door Car Shipping",
      icon: <Home className="w-6 h-6" />,
      description:
        "Door-to-door car shipping Alaska to California is the most convenient option available. We pick up your vehicle directly from your home, workplace, or designated location in Alaska and deliver it right to your doorstep in California, whether it’s Los Angeles, San Francisco, San Diego, or any other city.",
      benefits: [
        "Hassle-free pickup and delivery",
        "Saves time and eliminates the need for terminal visits",
        "Available for most residential and commercial addresses",
      ],
      bestFor: "Customers who value convenience and time over price.",
    },
    {
      title: "Port-to-Port Car Shipping",
      icon: <Anchor className="w-6 h-6" />,
      description:
        "Port-to-port car shipping Alaska to California is the most economical option. You drop off your vehicle at the nearest shipping port in Alaska, such as Anchorage or Juneau, and pick it up at a California port, such as Oakland or Long Beach.",
      benefits: [
        "Cost-effective for budget-conscious customers",
        "Allows flexible timing for drop-off and pickup",
        "Ideal for customers near major ports",
      ],
      bestFor:
        "Those looking to save money and able to handle drop-off and pickup logistics.",
    },
    {
      title: "Port-to-Door Car Shipping",
      icon: <MapPin className="w-6 h-6" />,
      description:
        "With port-to-door car shipping Alaska to California, you drop off your car at an Alaska port, and we handle the delivery to your chosen address in California.",
      benefits: [
        "Reduces cost while providing doorstep delivery",
        "Avoids dealing with California port logistics",
        "Flexible scheduling and personalized delivery",
      ],
      bestFor:
        "Customers comfortable dropping off at port but seeking home delivery convenience.",
    },
    {
      title: "Door-to-Port Car Shipping",
      icon: <Truck className="w-6 h-6" />,
      description:
        "Door-to-port car shipping Alaska to California means we pick up your vehicle from your home or business in Alaska and deliver it to a California port for your pickup.",
      benefits: [
        "Easy departure from Alaska without needing to visit a terminal",
        "Affordable compared to door-to-door service",
        "Great for flexible pickup in California",
      ],
      bestFor:
        "Those relocating from Alaska who can pick up their vehicle from a California port.",
    },
  ];

  const costFactors = [
    {
      title: "Distance & Route Complexity",
      description:
        "Longer routes from cities like Anchorage or Fairbanks to destinations in California naturally cost more.",
      icon: <MapPin className="w-8 h-8" />,
    },
    {
      title: "Vehicle Type & Size",
      description:
        "Larger vehicles (SUVs, trucks) cost more to ship than sedans or compacts.",
      icon: <Truck className="w-8 h-8" />,
    },
    {
      title: "Transport Method",
      description:
        "Open transport is more affordable, while enclosed transport provides added protection at a higher cost.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Seasonal Demand",
      description:
        " Winter weather and peak moving seasons can affect pricing.",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Pickup/Drop-off Locations",
      description:
        "Remote areas or limited port access can impact the final quote.",
      icon: <DollarSign className="w-8 h-8" />,
    },
  ];

  const transportComparison = [
    {
      feature: "Cost",
      open: "Lower",
      enclosed: "Higher due to increased protection",
    },
    {
      feature: "Protection Level",
      open: "Exposed to weather and road conditions",
      enclosed: "Fully shielded from elements and road debris",
    },
    {
      feature: "Vehicle Types",
      open: "Standard sedans, SUVs, and standard vehicles",
      enclosed: "High-value, luxury, antique, or classic vehicles",
    },
    {
      feature: "Availability",
      open: "Widely available with faster scheduling",
      enclosed: "Limited availability and higher demand",
    },
  ];

  const AlaskaanPorts = [
    {
      name: "Anchorage, AK",
      island: "",
      description:
        "Most popular port with regular departures, ideal for door or terminal access.",
    },
    {
      name: "Fairbanks, AK",
      island: "",
      description: "Inland pickup available with transfer to port terminals.",
    },
    {
      name: "Juneau, AK",
      island: "",
      description: "Accessible port for southeastern Alaska residents.",
    },

    {
      name: "Ketchikan, Sitka, Kodiak",
      island: "",
      description: "Additional coastal ports available upon request.",
    },
  ];

  const nyDestinations = [
    "Los Angeles, CA",
    "San Diego, CA",
    "San Francisco, CA",
    "Sacramento, CA",
  ];

  const sampleRoutes = [
    { from: "Anchorage, AK", to: "Los Angeles, CA" },
    { from: "Fairbanks, AK", to: "San Diego, CA" },
    { from: "Juneau, AK", to: "San Francisco, CA" },
    { from: "Kenai, AK", to: "Sacramento, CA" },
    { from: "Anchorage, AK", to: "San Francisco, CA" },
  ];

  const faqData = [
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "How much does it cost to ship a car from Alaska to California?",
    answer:
      "The cost to ship a car from Alaska to California typically ranges from $1,500 to $3,000, depending on your vehicle type, transport method (open vs. enclosed), and pickup/drop-off locations. Seasonal demand and port availability may also impact pricing. For a personalized estimate, call us or request a free quote online.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "How long does it take to ship a car from Alaska to California?",
    answer:
      "The Alaska to California car shipping timeline is generally 7–16 days, depending on distance, port schedules, and weather. Anchorage to Los Angeles, for instance, may take 10–14 days. Delays can occur during winter due to snow or icy road conditions.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Is my vehicle insured during transport?",
    answer:
      "Yes, every shipment includes vehicle insurance coverage during transit. Our carriers are fully licensed and insured, so you're protected from pickup to delivery. You'll receive documentation outlining coverage details when you book.",
  },
  {
    icon: <Car className="w-5 h-5" />,
    question: "Can I ship personal items in my car?",
    answer:
      "While it's possible to ship personal items in your vehicle, it's best to limit belongings to under 100 lbs and keep them in the trunk or out of view. Some restrictions apply, and the items are not covered under insurance.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "Can I ship an inoperable vehicle?",
    answer:
      "Yes, inoperable vehicles can be shipped, but it must be disclosed at the time of booking. Special equipment is required, and additional fees apply based on the type of transport.",
  },
];
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActivePort((prev) => (prev + 1) % AlaskaanPorts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Head>
        <title>Alaska to California Car Shipping | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Alaska to California car shipping. Fast, reliable, door-to-door service. Get a free quote today for affordable auto transport!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/state-to-state/alaska-to-california"
        />
        <meta
          property="og:title"
          content="Alaska to California Car Shipping | Rapid Auto Shipping"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Alaska to California Auto Transport Service",
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
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 21.3069,
                  longitude: -157.8583,
                },
                geoRadius: 5000,
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Alaska to California Vehicle Transport Options",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Roll on/Roll off (RoRo)",
                      description:
                        "Common bulk shipping via cargo ship from Alaska to mainland port.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Shipping Container",
                      description:
                        "Closed-container transport protecting from sea elements.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Open Auto Shipping (land)",
                      description:
                        "Open trailer transport from ports to California.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Enclosed Auto Shipping (land)",
                      description:
                        "Enclosed trailer; high-value vehicle protection.",
                    },
                  },
                ],
              },
              description:
                "Fast, reliable, and affordable auto transport services from Alaska to California, including RoRo, container, open and enclosed options.",
              url: "https://rapidautoshipping.com/state-to-state/alaska-to-california",
              serviceType: [
                "VehicleTransport",
                "InternationalVehicleTransport",
                "CrossCountryVehicleTransport",
              ],
              termsOfService:
                "https://rapidautoshipping.com/terms-and-conditions",
              priceRange: "$1600–$3800",
              areaServed: ["US-HI", "US-NY"],
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
                  name: "Alaska to California Auto Transport",
                  item: "https://rapidautoshipping.com/state-to-state/alaska-to-california",
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
                <span className="text-[#ff5722]">Alaska</span> to{" "}
                <span className="text-[#ff5722]">California</span> Car Shipping
                Services
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed max-w-3xl drop-shadow-xl backdrop-blur-md bg-[#001933]/20 p-3 sm:p-4 rounded-lg border border-[#001933]/30 text-center sm:text-left">
                Looking to move your vehicle from the Last Frontier to the
                Golden State? Rapid Auto Shipping offers expert Alaska to
                California car shipping services tailored to your schedule and
                budget. Whether you need port-to-door, door-to-port,
                door-to-door, or port-to-port transport, we provide reliable
                options for both open and enclosed transport. Get a free quote
                today and experience hassle-free auto shipping with
                industry-leading support!
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
              Why Choose Rapid Auto Shipping for Alaska to California Car
              Shipping?
            </h2>

            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Choosing the right company for Alaska to California car shipping
                can make all the difference. At Rapid Auto Shipping, we
                specialize in long-distance vehicle relocation with a focus on
                safety, efficiency, and customer satisfaction. Our team offers
                fully insured services, real-time tracking, and highly trained
                drivers who ensure your vehicle arrives in top condition. With
                over a decade of experience, we understand the challenges of
                Alaska to California car shipping, from navigating icy roads to
                coordinating port logistics. Customers appreciate our 24/7
                support, transparent pricing, and flexible shipping options.
              </p>

              <p>
                Whether you need door-to-door convenience or port-to-port
                cost-efficiency, we tailor each move to your unique needs. Trust
                a company that’s completed 10,000+ successful shipments. Rapid
                Auto Shipping is here to get your vehicle to California safely
                and on time.
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
                alt="Alaska to California car shipping service"
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
                  Alaska to California
                </span>
              </h2>
              <p className="text-xl text-slate-200 max-w-4xl mx-auto mb-8">
                Cost to Ship a Car from Alaska to California Understanding the
                cost to ship a car from Alaska to California is key to planning
                your vehicle relocation. Pricing varies depending on multiple
                factors, including distance, season, vehicle type, and your
                preferred shipping method. On average, Alaska to California auto
                transport prices range from $1,500 to $3,000.
              </p>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
                If you're looking to balance affordability and convenience,
                Rapid Auto Shipping offers flexible transport options to match
                your budget. Our transparent pricing includes insurance, port
                fees, and expert coordination, so there are no hidden surprises.
                Whether you’re shipping from Anchorage to Los Angeles or Juneau
                to San Diego, our team will guide you through the process.
                <br />
                Want an exact quote? Reach out now for a personalized estimate
                that fits your needs and timeline. It’s free, fast, and
                commitment-free.
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
              Factors Affecting Vehicle Shipping Costs from Alaska to California
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Several elements influence the final price for Alaska to
              California vehicle shipping, including:
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
                General Guide to Alaska to California Auto Transport Prices
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
                <strong>Note:</strong>Looking for the most accurate estimate?
                Get a free shipping quote customized to your route and schedule.
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
                Flexible Alaska Car Shipping Options to Fit Your Schedule and
                Budget
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                At Rapid Auto Shipping, we understand that no two customers have
                the same needs. That’s why we offer multiple transport options
                for Alaska to California car shipping services, allowing you to
                choose what works best for your schedule and budget. Whether you
                need maximum convenience or the most cost-effective solution,
                our flexible shipping models have you covered.
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
              We offer both open transport Alaska to California and enclosed
              transport Alaska to California, depending on your vehicle type and
              protection needs.
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
                  Special Offers Available
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  We also offer military discounts and special offers throughout
                  the year. Ask our team when booking!
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
              <div className="flex justify-center items-center mb-6">
                <Ship className="w-16 h-16 text-white mr-4 animate-bounce" />
                <ArrowRight
                  className="w-8 h-8 animate-pulse"
                  style={{ color: "#ff5722" }}
                />
                <Truck
                  className="w-16 h-16 text-white ml-4 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Alaska Port to California
              </h2>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
                Auto Transport: Shipping from Anchorage, Fairbanks, Juneau &
                More
              </h2>
              <p className="text-xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed mb-6">
                Rapid Auto Shipping offers comprehensive Alaska to California
                vehicle shipping from all major Alaskan ports, ensuring
                flexibility and accessibility no matter where you're starting.
                Whether you're in a remote village or a busy city, we make it
                easy to connect with California destinations.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10 bg-white">
          <div className="container mx-auto px-6">
            <h2
              className="text-4xl font-bold text-center mb-16"
              style={{ color: "#003366" }}
            >
              Alaskaan Departure Ports
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div>
                {AlaskaanPorts.map((port, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl mb-4 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      activePort === index
                        ? "shadow-2xl translate-x-4"
                        : "shadow-lg hover:shadow-xl"
                    }`}
                    style={{
                      backgroundColor:
                        activePort === index ? "#ff5722" : "white",
                      borderColor: "#003366",
                      borderWidth: "2px",
                    }}
                    onClick={() => setActivePort(index)}
                  >
                    <div className="flex items-start">
                      <MapPin
                        className={`w-6 h-6 mr-4 mt-1 ${
                          activePort === index ? "text-white" : "text-current"
                        }`}
                        style={{
                          color: activePort === index ? "white" : "#003366",
                        }}
                      />
                      <div>
                        <h3
                          className={`text-2xl font-bold mb-2 ${
                            activePort === index ? "text-white" : "text-current"
                          }`}
                          style={{
                            color: activePort === index ? "white" : "#003366",
                          }}
                        >
                          {port.name}
                        </h3>
                        <p
                          className={`text-sm font-medium mb-3 ${
                            activePort === index
                              ? "text-white opacity-90"
                              : "text-current"
                          }`}
                          style={{
                            color: activePort === index ? "white" : "#ff5722",
                          }}
                        >
                          {port.island}
                        </p>
                        <p
                          className={`leading-relaxed ${
                            activePort === index
                              ? "text-white opacity-95"
                              : "text-gray-700"
                          }`}
                        >
                          {port.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative h-full">
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative">
                  {/* Single Tall Alaskaan Port Image */}
                  <Image
                    src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1750331132/alaska_port_qhedmn.webp"
                    alt="Alaskaan Port View"
                    width={1920} // You'll need to specify the actual width
                    height={500}
                    className="w-full h-[580px] object-cover"
                    priority // Optional: if this is above the fold
                  />
                </div>
                {/* Animated Truck Icon */}
              </div>
            </div>
          </div>
          <p className="text-xl text-blue-900 opacity-90 font-bold mt-10 max-w-6xl mx-auto leading-relaxed mb-6">
            We work closely with port authorities to ensure timely processing,
            and you can check conditions or updates through the Alaska
            Department of Transportation or FHWA's Alaska Traffic Info.
          </p>
        </div>

        {/* California Destinations */}
        <div className="py-10" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="container mx-auto px-6">
            <h2
              className="text-4xl font-bold text-center mb-16"
              style={{ color: "#003366" }}
            >
              California Arrival Destinations
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {nyDestinations.map((destination, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl text-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer group"
                  style={{
                    backgroundColor: "white",
                    borderColor: "#003366",
                    borderWidth: "2px",
                  }}
                >
                  <MapPin
                    className="w-8 h-8 mx-auto mb-3 group-hover:animate-bounce transition-colors duration-300"
                    style={{ color: "#ff5722" }}
                  />
                  <p
                    className="font-semibold group-hover:font-bold transition-all duration-300"
                    style={{ color: "#003366" }}
                  >
                    {destination}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sample Routes */}
        <div className="py-5 bg-white">
          <div className="container mx-auto px-6">
            <h2
              className="text-4xl font-bold text-center mb-16"
              style={{ color: "#003366" }}
            >
              Here are the top Alaska to California auto transport routes:
            </h2>

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
          </div>

          <p className="text-xl mt-10 text-blue-900 opacity-90 max-w-6xl mx-auto leading-relaxed mb-6 font-bold">
            With established routes and efficient coordination between Alaska
            and California ports, we ensure smooth auto shipping Alaska to
            California, regardless of your origin or destination. For live
            traffic or port updates, you can check the Alaska Department of
            Transportation or the Federal Highway Administration’s traffic info
            page.
          </p>
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
              Properly preparing your vehicle for Alaska to California car
              shipping ensures a smoother and safer transport process. Whether
              you’ve opted for open or enclosed transport, a few simple steps
              can help avoid delays and protect your car during transit.
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
                Following these preparation tips ensures your Alaska to
                California car shipping process is seamless from start to
                finish.
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
          <div className="mt-8 sm:mt-12 px-4">
            <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  backgroundColor: "#ff5722",
                  width: `${(visibleItems.length / steps.length) * 100}%`,
                }}
              />
            </div>
          </div>
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
            Understanding the Alaska to California car shipping timeline helps
            set realistic expectations and allows for better planning. Because
            Alaska shipments often involve both land and sea transport, delivery
            times can vary more than domestic, lower-48 routes.
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Factors such as weather delays, port congestion, and seasonal
                demand can affect total transit time. Alaska’s winter conditions
                and ferry schedules are also key timing variables.
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
                Once your shipment is underway, you’ll receive updates through
                email or text, depending on your preferences. Tracking options
                vary based on the type of transport and carrier, but generally
                include:
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

            {/* Support Section */}
            <div
              className="bg-gradient-to-r rounded-2xl p-8 text-center text-white mt-12"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #ff5722 100%)",
              }}
            >
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-4">
                Need a more precise update during transit?
              </h4>
              <p className="text-lg">
                You can always contact our support team 24/7 to track vehicle
                transport from Alaska to California in real time.
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
              When it comes to Alaska to California vehicle shipping, choosing a reliable partner is essential. Our reputation is built on consistency, transparency, and a strong track record of customer satisfaction.
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
                Our dedication to reliability, affordability, and excellent
                service makes us the go-to choice for anyone looking for
                reliable car shipping Alaska to California.
              </p>
              <p
                className="text-xl md:text-2xl leading-relaxed mb-8 font-bold mt-10"
                style={{ color: "#003366" }}
              >
                Choose a company that puts your peace of mind first. Choose
                Rapid Auto Shipping.
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
                    Alaska to California
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
                  If you're looking for fast, affordable, and reliable Alaska to California car shipping, look no further than Rapid Auto Shipping. Our expert team handles everything from remote port coordination in Alaska to seamless delivery across California, so you don’t have to stress.
Whether you need door-to-door car shipping, port-to-door, or a custom transport solution, we’re here to help. With 24/7 support, real-time tracking, and competitive pricing, it’s easy to see why thousands trust us for their long-distance vehicle relocation needs.

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
            Call us at (833) 233-4447 or get a quote for auto transport using
            our easy online form. Don't wait, book Alaska to California car
            shipping now and experience why thousands of customers choose Rapid
            Auto Shipping.
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

export default Alaskanewyork;
