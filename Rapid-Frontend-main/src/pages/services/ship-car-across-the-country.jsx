"use client";

import React, { useState, useMemo, useCallback } from "react";
import Head from "next/head";
import {
  Truck,
  Clock,
  Shield,
  DollarSign,
  MapPin,
  Car,
  Crown,
  Plane,
  TrendingUp,
  Navigation,
  Eye,
  Wrench,
  ShieldAlert,
  Heart,
  Calendar,
  Route,
  GraduationCap,
  Home,
  CheckCircle,
  Star,
  Phone,
  Award,
  Users,
  MessageSquare,
  Plus,
  Calculator,
  FileText,
  Minus,
  ShoppingCart,
} from "lucide-react";
import TransportForm from "@/components/CommonComponents/Form";

import Navbar from "@/components/CommonComponents/Navbar";
import StatsSection from "@/components/CommonComponents/StatsSection";
import Footer from "@/components/CommonComponents/Footer";
import TestimonialSwiperAcross from "@/components/CommonComponents/Across-review";
import Image from "next/image";

const featuresDoor = [
  {
    icon: MapPin,
    text: "Pickup and delivery right at your doorstep",
  },
  {
    icon: Shield,
    text: "Complete insurance coverage for peace of mind",
  },
  {
    icon: Eye,
    text: "Real-time tracking throughout the journey",
  },
  {
    icon: Clock,
    text: "On-time delivery guarantee",
  },
  {
    icon: CheckCircle,
    text: "Experienced and professional carriers",
  },
];
const features = [
  {
    icon: Shield,
    title: "Full Insurance Coverage",
    description: "Complete protection for your vehicle during transport",
  },
  {
    icon: Clock,
    title: "Expedited Shipping",
    description: "Faster delivery options for urgent transport needs",
  },
  {
    icon: MapPin,
    title: "Door-to-Door Service",
    description: "Convenient pickup and delivery at your location",
  },
  {
    icon: CheckCircle,
    title: "Professional Drivers",
    description: "Expert haulers with years of experience",
  },
];

const benefits = [
  "No extra miles on your vehicle",
  "Nationwide coverage across all states",
  "Secure and safe transport methods",
  "Cost-effective shipping solutions",
  "Professional handling and care",
  "Reliable delivery schedules",
];
const routes = [
  {
    route: "New York, NY to Los Angeles, CA",
    reason: "High demand due to major cities and relocations",
    distance: 2800,
    cost: "$1,500 - $2,500",
  },
  {
    route: "Miami, FL to Seattle, WA",
    reason: "Common for snowbirds and cross-country moves",
    distance: 3300,
    cost: "$1,700 - $2,800",
  },
  {
    route: "Chicago, IL to Phoenix, AZ",
    reason: "Popular for retirees and winter escapes",
    distance: 1800,
    cost: "$1,200 - $2,000",
  },
  {
    route: "Dallas, TX to San Francisco, CA",
    reason: "Business relocations and tech industry demand",
    distance: 1700,
    cost: "$1,100 - $1,900",
  },
  {
    route: "Atlanta, GA to Denver, CO",
    reason: "College moves and corporate transfers",
    distance: 1400,
    cost: "$1,000 - $1,700",
  },
  {
    route: "Boston, MA to Houston, TX",
    reason: "Job relocations and seasonal migration",
    distance: 1850,
    cost: "$1,300 - $2,100",
  },
  {
    route: "Washington, DC to Las Vegas, NV",
    reason: "Tourism, job relocations, and military moves",
    distance: 2400,
    cost: "$1,400 - $2,300",
  },
];
const reasons = [
  {
    icon: MapPin,
    title: "Relocation for Work or Personal Reasons",
    description:
      "Moving to a new city or state may be taxing for both personal and business reasons; long distance travel can cause unneeded stress. Shipping your automobile lets you concentrate on adjusting to your new house free from the tiredness of a lengthy road journey.",
    gradient: "from-[#FF5722] to-orange-600",
  },
  {
    icon: ShoppingCart,
    title: "Buying or Selling a Vehicle Remotely",
    description:
      "Purchasing a vehicle from a private seller or out-of-state dealership remotely makes shipping a handy approach to have it delivered securely. Likewise, shipping guarantees a seamless transaction if you are selling a car to a customer in another state.",
    gradient: "from-[#003366] to-blue-600",
  },
  {
    icon: Wrench,
    title: "Avoiding Wear and Tear on Your Vehicle",
    description:
      "Long-distance driving may cause major wear and tear on your vehicle, therefore lowering its lifetime and raising the maintenance expenses. Shipping keeps the state of your car flawless.",
    gradient: "from-[#FF5722] to-red-600",
  },
  {
    icon: Shield,
    title: "Safety Concerns and Weather Conditions",
    description:
      "Driving great distances, especially in bad weather, may be dangerous. Shipping your automobile lessens the risk of mishaps, breakdowns, and extreme environmental damage.",
    gradient: "from-[#003366] to-indigo-600",
  },
  {
    icon: Crown,
    title: "Transporting Classic, Luxury, or Exotic Cars",
    description:
      "Classic or high-value cars require special attention. Enclosed car transport offers more protection against any damage, weather, and road debris.",
    gradient: "from-[#FF5722] to-yellow-600",
  },
  {
    icon: GraduationCap,
    title: "Military or College Relocations",
    description:
      "For assignments or education, members of the military and college students travel across the nation. Cross country car shipping guarantees they have their car ready upon arrival and smoothes out changes.",
    gradient: "from-[#003366] to-purple-600",
  },
  {
    icon: Plane,
    title: "Seasonal Relocations for Snowbirds",
    description:
      "Many individuals go south for the winter and then back north in the summer, known as seasonal Snowbirds relocations. Car shipping lets them travel luxuriously free from the bother of a lengthy trip.",
    gradient: "from-[#FF5722] to-teal-600",
  },
  {
    icon: Car,
    title: "Multiple Vehicle Transport",
    description:
      "Families with more than one automobile might find it challenging to drive many vehicles all throughout the nation. Shipping offers a hassle-free approach to securely transfer any kind of car.",
    gradient: "from-[#003366] to-green-600",
  },
];

export default function AutoTransportPage() {
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

  const faqData = useMemo(
    () => [
      {
        icon: <MapPin className="w-5 h-5" />,
        question: "Do you offer cross-country car shipping in the U.S.?",
        answer:
          "Yes. We provide reliable, nationwide car shipping services across all 50 states. Whether you're relocating, purchasing a car out of state, or sending a vehicle to family, we make cross-country transport safe and simple.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        question: "How long does it take to ship a car across the country?",
        answer:
          "Typical cross-country transport takes 5–7 business days depending on the pickup and drop-off locations. We also offer expedited options for time-sensitive moves.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Is my car insured during cross-country transport?",
        answer:
          "Absolutely. Every shipment is fully insured while in transit. We conduct detailed inspections at pickup and delivery to ensure your vehicle's condition is documented and protected.",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        question:
          "Can you pick up the car from my house and deliver it to the new address?",
        answer:
          "Yes. We offer door-to-door service for most locations. If a large carrier cannot access your exact address, we'll arrange a nearby, safe meeting point.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question:
          "Do I need to prepare my car before shipping it across the country?",
        answer:
          "Yes. Please remove personal belongings, check for leaks, ensure the tires are inflated, and keep the fuel tank about ¼ full. We'll send you a full checklist after booking.",
      },
      {
        icon: <Phone className="w-5 h-5" />,
        question: "How can I get a quote to ship my car cross-country?",
        answer:
          "Just fill out our online quote form or call us. We'll give you an accurate, transparent estimate with no hidden fees and help you schedule pickup and delivery.",
      },
    ],
    []
  );

  const useCases = useMemo(
    () => [
      {
        icon: Car,
        title: "Luxury Vehicles",
        desc: "High-end cars needing extra protection",
      },
      {
        icon: Shield,
        title: "Classic Cars",
        desc: "Vintage automobiles requiring special care",
      },
      { icon: Star, title: "Exotic Cars", desc: "Rare and expensive vehicles" },
      {
        icon: Home,
        title: "New Car Purchases",
        desc: "Protecting your investment from day one",
      },
    ],
    []
  );

  const serviceFeatures = useMemo(
    () => [
      {
        icon: Clock,
        title: "Save Time for What Matters Most",
        description:
          "Cross-country road trips can take days or even weeks, depending on how far apart the destinations are. With our professional car transport service, you can pick up and arrange delivery while concentrating on settling down at your destination without stress.",
        color: "from-[#003366] to-blue-600",
      },
      {
        icon: Wrench,
        title: "Save Your Ride from Wear and Tear",
        description:
          "Any long drive strains your vehicle. From engine deterioration and brake wear to tire degradation, the miles driven on a long road trip can lead to costly maintenance in the future. Cross country car shipping keeps your car in perfect condition, thus avoiding the wear and tear that comes with prolonged driving.",
        color: "from-green-500 to-green-600",
      },
      {
        icon: ShieldAlert,
        title: "Avoid Unpredictable Road Hazards",
        description:
          "Crossing multiple states when driving will attract you to unpredictable weather, rough roads, and the risk of accidents. Not forgetting, long hours behind the wheel can be quite dangerous. Our professional carriers ensure that your car is safely transported without the risks of long-haul driving.",
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: DollarSign,
        title: "Cost Efficiency",
        description:
          "Driving would seem to be the cheaper alternative at first, but all the hidden costs should be considered. Fuel costs, food, lodging, and potential vehicle repairs can add up quickly. Shipping costs are usually comparable when factoring in the hidden expenses; it is the financially profitable alternative for long distances.",
        color: "from-orange-500 to-orange-600",
      },
      {
        icon: Heart,
        title: "Reduced Stress and Fatigue",
        description:
          "Long distances take a lot of physical and mental energy. Dealing with traffic, unexplored routes, and numerous stops can make a journey rather nerve-wracking. By entrusting transportation to professionals, you are able to forget all about stress, focus on what really matters, and make a smooth transition into the next phase of your life.",
        color: "from-teal-500 to-teal-600",
      },
    ],
    []
  );

  const transportTypes = useMemo(
    () => [
      {
        title: "Open Auto Transport",
        price: "Starting at $350",
        features: [
          "Most cost-effective option",
          "Suitable for everyday vehicles",
          "Quick pickup and delivery",
          "Reliable and safe transport",
        ],
        image:
          "https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1748342102/ship_car_across_the_country_gxmle2.webp",
        popular: false,
      },
      {
        title: "Enclosed Auto Transport",
        price: "Starting at $550",
        features: [
          "Maximum protection from elements",
          "Perfect for luxury and classic cars",
          "Lower capacity, higher security",
          "Climate-controlled options available",
        ],
        image:
          "https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1748606426/enclosed_auto_shippinggg_aga5zb.webp",
        popular: true,
      },
    ],
    []
  );

  const processSteps = useMemo(
    () => [
      {
        step: "01",
        title: "Get Your Quote",
        description:
          "Fill out our simple form or call us for an instant, no-obligation quote based on your specific needs.",
        icon: DollarSign,
      },
      {
        step: "02",
        title: "Book Your Transport",
        description:
          "Confirm your booking with flexible scheduling options and secure payment methods.",
        icon: Calendar,
      },
      {
        step: "03",
        title: "Vehicle Pickup",
        description:
          "Our professional carrier arrives at your location for safe and secure vehicle pickup.",
        icon: Truck,
      },
      {
        step: "04",
        title: "Safe Delivery",
        description:
          "Track your vehicle in real-time and receive it in perfect condition at your destination.",
        icon: CheckCircle,
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Sarah Johnson",
        location: "New York, NY",
        rating: 5,
        text: "Excellent service! My BMW was delivered in perfect condition. The team was professional and kept me updated throughout the entire process.",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b9f71134?w=100&h=100&fit=crop&crop=face",
      },
      {
        name: "Mike Rodriguez",
        location: "Los Angeles, CA",
        rating: 5,
        text: "Used Rapid Auto Shipping for my classic Mustang. Enclosed transport was worth every penny. Highly recommend!",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      },
      {
        name: "Jennifer Lee",
        location: "Miami, FL",
        rating: 5,
        text: "Great experience from start to finish. Competitive pricing and excellent customer service. Will use again!",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      },
    ],
    []
  );

  const factors = useMemo(
    () => [
      {
        id: 1,
        title: "Distance and Route",
        description:
          "The most important variable in the price is the distance between the pickup and delivery points. In simple words, longer routes mean more fuel consumption, driver time, and vehicle wear, which add to the price. Also routes between major cities are usually less expensive than those between towns and villages.",
        icon: "🛣️",
        color: "#003366",
      },
      {
        id: 2,
        title: "Type of Vehicle",
        description:
          "The size, weight, and type of your vehicle will play a huge role in the final cost. Larger and heavier vehicles such as trucks and SUVs cost more to transport than smaller sedans. Luxury, exotic, and classic cars may also have a higher price tag because of special handling requirements.",
        icon: "🚗",
        color: "#ff5722",
      },
      {
        id: 3,
        title: "Transport Type",
        description:
          "Open and enclosed transport will make a huge difference in the cost. Open auto transport is the cheapest way to ship a car across the country, and it is suitable for regular cars. On the other hand, enclosed auto transport is more costly but provides much better protection, which is great for high-value cars or special vehicles.",
        icon: "🚛",
        color: "#003366",
      },
      {
        id: 4,
        title: "Time of the Year",
        description:
          "Auto transport costs may vary as they depend upon seasonal demand. During peak seasons, such as summer and early fall, are the most expensive due to high demand. Off-peak seasons (winter and late fall) may cost less except during holiday seasons. Weather conditions in certain regions can also impact transport availability and costs.",
        icon: "📅",
        color: "#ff5722",
      },
      {
        id: 5,
        title: "Pickup and Delivery Options",
        description:
          "Door to door shipping offers the most convenient, but typically more expensive. Terminal to terminal on either hand, is a cost saver service if you're willing to drop off and pick up your car from designated terminals.",
        icon: "📍",
        color: "#003366",
      },
      {
        id: 6,
        title: "Vehicle Condition",
        description:
          "If your car is inoperable or needs special handling for loading and unloading, you will have to pay more. Transportation operators require special equipment and extra effort for non-running vehicles.",
        icon: "🔧",
        color: "#ff5722",
      },
      {
        id: 7,
        title: "Scheduling Flexibility",
        description:
          "If you are in a rush and need expedited shipping, you can expect to pay more. Flexible scheduling, where the carrier can fit your car into their standard schedule, usually offers better rates.",
        icon: "⏰",
        color: "#003366",
      },
      {
        id: 8,
        title: "Fuel Prices",
        description:
          "Changes in fuel prices could directly affect transport costs by increasing the running cost of the carrier. Increased fuel prices typically result in an increase in shipping rates.",
        icon: "⛽",
        color: "#ff5722",
      },
    ],
    []
  );

  const factorstwo = useMemo(
    () => [
      {
        icon: MapPin,
        factor: "Distance",
        effect: "Longer distances cost more and take more time.",
        color: "from-[#FF5722] to-orange-600",
      },
      {
        icon: Car,
        factor: "Vehicle Size & Weight",
        effect: "Larger vehicles require more space and may cost extra.",
        color: "from-[#003366] to-blue-600",
      },
      {
        icon: Shield,
        factor: "Transport Type",
        effect: "Enclosed transport costs more but offers added protection.",
        color: "from-[#FF5722] to-red-600",
      },
      {
        icon: TrendingUp,
        factor: "Fuel Prices",
        effect: "Fluctuating gas prices can affect transport costs.",
        color: "from-[#003366] to-indigo-600",
      },
      {
        icon: Calendar,
        factor: "Seasonal Demand",
        effect:
          "Peak seasons (e.g., summer and holiday seasons) may increase prices.",
        color: "from-[#FF5722] to-yellow-600",
      },
      {
        icon: Navigation,
        factor: "Pickup & Delivery Location",
        effect: "Rural areas may have longer transit times and higher costs.",
        color: "from-[#003366] to-purple-600",
      },
    ],
    []
  );

  const serviceAdvantages = useMemo(
    () => [
      {
        icon: Shield,
        title: "Complete Insurance Coverage",
        description:
          "Your vehicle is fully protected with comprehensive insurance coverage throughout the entire shipping process.",
      },
      {
        icon: Eye,
        title: "24/7 Real-Time Tracking",
        description:
          "Monitor your vehicle's journey with our advanced tracking system, providing updates around the clock.",
      },
      {
        icon: MessageSquare,
        title: "Frequent Updates",
        description:
          "Stay informed with regular communication and status updates from pickup to delivery.",
      },
      {
        icon: Truck,
        title: "Extensive Carrier Network",
        description:
          "Our nationwide network of reliable carriers ensures safe and efficient transport to any destination.",
      },
      {
        icon: DollarSign,
        title: "Budget-Friendly Pricing",
        description:
          "Competitive rates without compromising on quality or service excellence.",
      },
      {
        icon: CheckCircle,
        title: "Reliable & Secure",
        description:
          "Trusted by thousands of customers for safe and dependable vehicle transportation services.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>
          Best Way to Ship Car Across the Country | +1 (833) 233-4447
        </title>
        <meta
          name="description"
          content="Looking to ship car across the country? Ship Your Car Across the Country with Rapid Auto Shipping. A Top-Rated and Affordable Auto Transport company.."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/ship-car-across-the-country"
        />
        <meta
          property="og:title"
          content="Best Way to Ship Car Across the Country | +1 (833) 233-4447"
        />
        <meta
          property="og:description"
          content="Looking to ship car across the country? Ship Your Car Across the Country with Rapid Auto Shipping. A Top-Rated and Affordable Auto Transport company.."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/ship-car-across-the-country"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1748342102/ship_car_across_the_country_gxmle2.webp"
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
                    name: "services",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/ship-car-across-the-country",
                    name: "ship-car-across-the-country",
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
              serviceType: "Cross Country Car Shipping",
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
                "Nationwide cross country car shipping services by Rapid Auto Shipping. We safely transport vehicles coast-to-coast with full insurance, flexible scheduling, and transparent pricing.",
              url: "https://rapidautoshipping.com/services/ship-car-across-the-country",
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section - Optimized for Mobile and Page Speed */}
        <section className="relative py-8 min-h-screen flex items-center w-full bg-[#003366] md:bg-transparent">
          {/* Background Image - Hidden on Mobile */}
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1748606426/enclosed_auto_shippinggg_aga5zb.webp"
              alt="Professional Auto Transport Service"
              fill
              quality={75}
              priority={true}
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#001933]/30 via-[#001933]/20 to-[#001933]/40"></div>
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
              <div className="space-y-4 sm:space-y-6">
                {/* H1 - Black on mobile, White on desktop - Optimized for LCP */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                  Ship Car Across the{" "}
                  <span className="text-[#ff5722]">Country</span>
                </h1>
                {/* Paragraph - Hidden on mobile, visible on desktop */}
                <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed max-w-3xl md:bg-[#001933]/20 p-3 sm:p-4 rounded-lg md:border md:border-[#001933]/30 text-center sm:text-left">
                  Are you looking for a company to ship car across the country?
                  Then you've come to the right place. Rapid Auto Shipping is a
                  top-rated car shipping company with expertise in secure, safe,
                  and hassle-free vehicle shipping across the United States. We
                  have a sophisticated network of approved carriers that allows
                  us to offer you safe, efficient, and stress-free car shipping
                  across the country.
                </p>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto relative z-20">
              <TransportForm />
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <div className="py-12 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full mb-3">
                  <Shield className="w-8 h-8 text-[#ff5722]" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  Fully Licensed & Insured
                </div>
                <p className="text-gray-600 text-sm">DOT & MC Certified</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-3">
                  <Star className="w-8 h-8 text-blue-700" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  5-Star Service
                </div>
                <p className="text-gray-600 text-sm">
                  Thousands of Happy Customers
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-3">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  On-Time Delivery
                </div>
                <p className="text-gray-600 text-sm">
                  Guaranteed Pickup & Delivery
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 p-4 rounded-full mb-3">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  24/7 Support
                </div>
                <p className="text-gray-600 text-sm">Live Customer Service</p>
              </div>
            </div>
          </div>
        </div>
        <TestimonialSwiperAcross />
        <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white min-h-screen">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <pattern
                  id="shippingPattern"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="30" cy="30" r="2" fill="#003366" />
                  <circle cx="15" cy="15" r="1" fill="#ff5722" />
                  <circle cx="45" cy="45" r="1" fill="#ff5722" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#shippingPattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header Section */}
            <div className="text-center mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
              <div className="inline-flex items-center bg-[#003366]/10 rounded-full px-6 py-3 mb-6 border border-[#003366]/20">
                <Truck className="w-5 h-5 text-[#003366] mr-2" />
                <span className="text-[#003366] font-semibold text-sm uppercase tracking-wide">
                  Professional Transport Service
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
                Ship Car
                <span className="block text-[#003366]">Across the Country</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional Cross Country Car Transport Service that ships your
                car securely and effectively. Remove the strain and wear of
                driving thousands of miles with our expert haulers.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Image Section */}
              <div className="relative transform transition-all duration-1000 delay-300 translate-x-0 opacity-100">
                <div className="relative">
                  <Image
                    src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1748342102/ship_car_across_the_country_gxmle2.webp"
                    alt="Cross Country Car Shipping Service"
                    width={800}
                    height={600}
                    className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/30 to-transparent rounded-2xl"></div>

                  {/* Stats Overlay */}
                  <div className="absolute -bottom-6 -right-6 bg-white/95 rounded-xl p-6 shadow-xl border border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#003366]">
                          50+
                        </div>
                        <div className="text-sm text-gray-600">
                          States Covered
                        </div>
                      </div>
                      <div className="w-px h-12 bg-gray-300"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#ff5722]">
                          24/7
                        </div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-8 transform transition-all duration-1000 delay-500 translate-x-0 opacity-100">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#003366]/10 to-[#ff5722]/10 rounded-2xl p-8 border border-[#003366]/20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Ship Car Across the Country: Professional Cross Country
                      Car Transport Service
                    </h2>

                    <div className="space-y-4 mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        Cross Country Car Shipping is a professional auto
                        transport service that ship car across the country
                        securely and effectively. This service removes the
                        strain and wear of driving your automobile thousands of
                        miles, whether you're moving for work, buying a car
                        online, or taking a vacation. Instead of putting extra
                        miles on your car, our expert haulers will take care of
                        the transport and make sure it gets to its destination
                        safely. For customers requiring quicker and convenient
                        travel, we provide door to door service, complete
                        insurance coverage, and expedited shipping services.
                        Cross country auto shipping is the dependable and
                        cheapest way to ship a car across the country, with
                        nationwide coverage.
                      </p>
                    </div>

                    {/* Benefits List */}
                    <div className="grid grid-cols-1 gap-3">
                      {benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-[#003366] flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="transform transition-all duration-1000 delay-700 translate-y-0 opacity-100">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Premium Services
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience the convenience and reliability of professional car
                  transport with our comprehensive service features.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/80 rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                  >
                    <div className="bg-[#003366]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-[#003366]" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="mb-20 transform transition-all duration-1000 delay-800 translate-y-0 opacity-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#ff5722]/10 rounded-full px-6 py-3 mb-6 border border-[#ff5722]/20">
              <span className="text-[#ff5722] font-semibold text-sm uppercase tracking-wide">
                Transparent Pricing
              </span>
            </div>
            <h3 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-4">
              How Much Does It Cost to
              <span className="block text-[#003366]">
                Ship a Car Across the Country?
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Rapid Auto Shipping, we take pride in our transparent auto
              transport service pricing. Here we have mentioned the average cost
              to ship car across the country so you will know what to expect.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[#003366] to-[#003366]/90 text-white p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-bold text-center">
                  <div className="text-sm md:text-base">Distance</div>
                  <div className="text-sm md:text-base">Estimated Time</div>
                  <div className="text-sm md:text-base">
                    Open Transport Cost
                  </div>
                  <div className="text-sm md:text-base">
                    Enclosed Transport Cost
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {/* Row 1 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 hover:bg-gray-50/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-lg">
                      0 - 500 Miles
                    </div>
                    <div className="text-gray-500 text-sm">Short Distance</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">
                      1 - 2 Days
                    </div>
                    <div className="text-gray-500 text-sm">Quick Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#ff5722] text-xl">$350</div>
                    <div className="text-gray-500 text-sm">Starting Price</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-xl">$550</div>
                    <div className="text-gray-500 text-sm">
                      Premium Protection
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 hover:bg-gray-50/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-lg">
                      500 - 1500 Miles
                    </div>
                    <div className="text-gray-500 text-sm">Medium Distance</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">
                      2 - 4 Days
                    </div>
                    <div className="text-gray-500 text-sm">
                      Standard Delivery
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#ff5722] text-xl">$770</div>
                    <div className="text-gray-500 text-sm">Great Value</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-xl">$975</div>
                    <div className="text-gray-500 text-sm">Enhanced Safety</div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 hover:bg-gray-50/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-lg">
                      1500 - 2500 Miles
                    </div>
                    <div className="text-gray-500 text-sm">Long Distance</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">
                      4 - 7 Days
                    </div>
                    <div className="text-gray-500 text-sm">Cross Country</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#ff5722] text-xl">
                      $1,070
                    </div>
                    <div className="text-gray-500 text-sm">
                      Competitive Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-xl">
                      $1,450
                    </div>
                    <div className="text-gray-500 text-sm">
                      Maximum Protection
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 hover:bg-gray-50/50 transition-all duration-300 bg-gradient-to-r from-[#ff5722]/5 to-[#003366]/5">
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-lg">
                      2500+ Miles
                    </div>
                    <div className="text-gray-500 text-sm">Coast to Coast</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">
                      7 - 9 Days
                    </div>
                    <div className="text-gray-500 text-sm">
                      Extended Transit
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#ff5722] text-xl">
                      $1,580
                    </div>
                    <div className="text-gray-500 text-sm">Best Value</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-xl">
                      $2,150
                    </div>
                    <div className="text-gray-500 text-sm">Ultimate Care</div>
                  </div>
                </div>
              </div>

              {/* Table Footer */}
              <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    * Prices may vary based on vehicle size, pickup location,
                    destination, and seasonal demand
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <div className="w-4 h-4 bg-[#ff5722] rounded-full"></div>
                      <span className="text-gray-600">
                        Open Transport - Most Popular
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <div className="w-4 h-4 bg-[#003366] rounded-full"></div>
                      <span className="text-gray-600">
                        Enclosed Transport - Maximum Protection
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20 transform transition-all duration-1000 delay-800 translate-y-0 opacity-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#ff5722]/10 rounded-full px-6 py-3 mb-6 border border-[#ff5722]/20">
              <span className="text-[#ff5722] font-semibold text-sm uppercase tracking-wide">
                Seasonal Pricing Guide
              </span>
            </div>
            <h3 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-4">
              The Average Cost of Cross Country
              <span className="block text-[#003366]">
                Car Transport In Different Seasons
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding seasonal pricing variations helps you plan your car
              shipment and potentially save money by choosing the right time of
              year.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[#003366] to-[#003366]/90 text-white p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-bold text-center">
                  <div className="text-sm md:text-base">Season</div>
                  <div className="text-sm md:text-base">
                    Short Distance (&lt;500 miles)
                  </div>
                  <div className="text-sm md:text-base">
                    Long Distance (&gt;1000 miles)
                  </div>
                  <div className="text-sm md:text-base">Demand Level</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {/* Spring Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 hover:bg-gray-50/50 transition-all duration-300 bg-gradient-to-r from-green-50/30 to-green-100/30">
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-lg">
                      Spring
                    </div>
                    <div className="text-gray-500 text-sm">March - May</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#ff5722] text-lg">
                      $1.00 - $1.50
                    </div>
                    <div className="text-gray-500 text-sm">per mile</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#ff5722] text-lg">
                      $0.60 - $1.00
                    </div>
                    <div className="text-gray-500 text-sm">per mile</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full text-sm">
                      High
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      Peak Season
                    </div>
                  </div>
                </div>

                {/* Summer Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 hover:bg-gray-50/50 transition-all duration-300 bg-gradient-to-r from-yellow-50/30 to-orange-100/30">
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-lg">
                      Summer
                    </div>
                    <div className="text-gray-500 text-sm">June - August</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#ff5722] text-lg">
                      $1.20 - $1.80
                    </div>
                    <div className="text-gray-500 text-sm">per mile</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#ff5722] text-lg">
                      $0.80 - $1.20
                    </div>
                    <div className="text-gray-500 text-sm">per mile</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full text-sm">
                      Very High
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      Peak Season
                    </div>
                  </div>
                </div>

                {/* Fall Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 hover:bg-gray-50/50 transition-all duration-300 bg-gradient-to-r from-amber-50/30 to-orange-50/30">
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-lg">Fall</div>
                    <div className="text-gray-500 text-sm">
                      September - November
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#ff5722] text-lg">
                      $0.80 - $1.30
                    </div>
                    <div className="text-gray-500 text-sm">per mile</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#ff5722] text-lg">
                      $0.50 - $0.90
                    </div>
                    <div className="text-gray-500 text-sm">per mile</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full text-sm">
                      Moderate
                    </div>
                    <div className="text-gray-500 text-xs mt-1">Good Value</div>
                  </div>
                </div>

                {/* Winter Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 hover:bg-gray-50/50 transition-all duration-300 bg-gradient-to-r from-blue-50/30 to-cyan-50/30">
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-lg">
                      Winter
                    </div>
                    <div className="text-gray-500 text-sm">
                      December - February
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-lg">
                      $0.70 - $1.20
                    </div>
                    <div className="text-gray-500 text-sm">per mile</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#003366] text-lg">
                      $0.40 - $0.80
                    </div>
                    <div className="text-gray-500 text-sm">per mile</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                      Low
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      Cheapest Season
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Footer */}
              <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    * Seasonal pricing reflects supply and demand fluctuations
                    throughout the year
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                      <span className="text-gray-600">Very High Demand</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-600">High Demand</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-600">Moderate Demand</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      <span className="text-gray-600">
                        Low Demand (Best Savings)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Factors Section */}
        <div className="mb-20 transform transition-all duration-1000 delay-900 translate-y-0 opacity-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#003366]/10 rounded-full px-6 py-3 mb-6 border border-[#003366]/20">
              <span className="text-[#003366] font-semibold text-sm uppercase tracking-wide">
                Cost Factors
              </span>
            </div>
            <h3 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-6">
              Factors That Affect The Cost Of
              <span className="block text-[#003366]">
                Shipping Car Across Country
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              There are several factors that affect auto transportation costs,
              and understanding them will certainly help you make an effective
              decision. This will help you not only save money on auto transport
              but also save valuable time. Here is the breakdown of what affects
              the across country car shipping cost:
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Factor 1 */}
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#003366]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#003366] font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Distance and Route:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      The most important variable in the price is the distance
                      between the pickup and delivery points. In simple words,
                      longer routes mean more fuel consumption, driver time, and
                      vehicle wear, which add to the price. Also routes between
                      major cities are usually less expensive than those between
                      towns and villages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Factor 2 */}
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff5722]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff5722] font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Type of Vehicle:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      The size, weight, and type of your vehicle will play a
                      huge role in the final cost. Larger and heavier vehicles
                      such as trucks and SUVs cost more to transport than
                      smaller sedans. Luxury, exotic, and classic cars may also
                      have a higher price tag because of special handling
                      requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Factor 3 */}
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#003366]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#003366] font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Transport Type:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Open and enclosed transport will make a huge difference in
                      the cost. Open auto transport is the cheapest way to ship
                      a car across the country, and it is suitable for regular
                      cars. On the other hand, enclosed auto transport is more
                      costly but provides much better protection, which is great
                      for high-value cars or special vehicles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Factor 4 */}
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff5722]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff5722] font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Time of the Year:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Auto transport costs may vary as they depend upon seasonal
                      demand. During peak seasons, such as summer and early
                      fall, are the most expensive due to high demand. Off-peak
                      seasons (winter and late fall) may cost less except during
                      holiday seasons. Weather conditions in certain regions can
                      also impact transport availability and costs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Factor 5 */}
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#003366]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#003366] font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Pickup and Delivery Options:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Door to door shipping offers the most convenient, but
                      typically more expensive. Terminal to terminal on either
                      hand, is a cost saver service if you're willing to drop
                      off and pick up your car from designated terminals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Factor 6 */}
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff5722]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff5722] font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Vehicle Condition:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      If your car is inoperable or needs special handling for
                      loading and unloading, you will have to pay more.
                      Transportation operators require special equipment and
                      extra effort for non-running vehicles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Factor 7 */}
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#003366]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#003366] font-bold text-xl">7</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Scheduling Flexibility:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      If you are in a rush and need expedited shipping, you can
                      expect to pay more. Flexible scheduling, where the carrier
                      can fit your car into their standard schedule, usually
                      offers better rates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Factor 8 */}
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff5722]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#ff5722] font-bold text-xl">8</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Fuel Prices:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Changes in fuel prices could directly affect transport
                      costs by increasing the running cost of the carrier.
                      Increased fuel prices typically result in an increase in
                      shipping rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Features Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-[600] text-[#003366]  mb-6">
                Why Choose{" "}
                <span className="text-rapidcolor">
                  Cross Country Car Shipping Over DIY
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When you are relocating or moving your car over long distances,
                you'll likely ask: drive it or ship it? While a cross-country
                road trip might sound fancy, shipping offers many undeniable
                benefits that save time, money, and hassle. Here's why cross
                country car shipping is a great option instead of self driving:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
                >
                  <div
                    className={`inline-flex p-4 bg-gradient-to-r ${feature.color} rounded-2xl mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center max-w-7xl m-auto text-gray-700 border-[#003366] border-2 p-4 rounded-2xl">
              At Rapid Auto Shipping, we pride ourselves on offering safe,
              reliable, and affordable car shipping services. Whether you're
              moving for a job, attending college, or shipping a car to a family
              member, car shipping gives you peace of mind from
              pickup to delivery.
            </p>
          </div>
        </div>
        <div className=" p-6 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-6xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                <Route className="text-[#FF5722]" />
                Top Cross-Country Auto Shipping Routes
              </h2>
              <p className="text-gray-600">
                Popular routes with estimated costs and distances
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gradient-to-r from-[#FF5722] to-[#003366] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        Route
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Why It's Popular
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <Route size={18} />
                        Distance (Miles)
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <DollarSign size={18} />
                        Estimated Cost
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((route, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 hover:bg-orange-50 transition-colors duration-200 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-800">
                          {route.route}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {route.reason}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-[#FF5722]">
                          {route.distance.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-[#003366]">
                          {route.cost}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                * Costs are estimates and may vary based on vehicle type,
                season, and specific pickup/delivery locations
              </p>
            </div>
          </div>
        </div>
        <div className=" mx-auto p-6 bg-white">
          <div className="max-w-7xl mx-auto  pt-10">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-6xl font-bold text-gray-800 mb-4">
                Key Reasons to Opt for
                <span className="text-rapidcolor">
                  {" "}
                  Cross-Country Car Shipping
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Ship car across the country is a convenient option for most
                circumstances. If you are moving, buying a car from another
                state, or require a dependable means of transportation,
                cross-country car shipping has a number of advantages. Some of
                the most important reasons why you may opt for this include:
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  >
                    {/* Card Header */}
                    <div
                      className={`bg-gradient-to-r ${reason.gradient} p-6 text-white relative`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-white/20 p-3 rounded-full">
                          <IconComponent size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium opacity-90 block mb-1">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl font-bold leading-tight">
                            {reason.title}
                          </h3>
                        </div>
                      </div>

                      {/* Decorative element */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {reason.description}
                      </p>
                    </div>

                    {/* Hover Effect Border */}
                    <div
                      className={`h-1 bg-gradient-to-r ${reason.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Transport Options Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Transport Option
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the perfect transport solution that fits your vehicle
                type and budget requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {transportTypes.map((type, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 ${
                    type.popular ? "border-[#ff5722]" : "border-gray-200"
                  } hover:shadow-3xl transition-all duration-300`}
                >
                  {type.popular && (
                    <div className="absolute top-0 right-0 bg-[#ff5722] text-white px-6 py-2 rounded-bl-2xl font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="h-64 overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      width={800}
                      height={256}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <div className="text-2xl font-bold text-[#ff5722] mb-6">
                      {type.price}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                        type.popular
                          ? "bg-[#ff5722] text-white hover:bg-[#e64a19]"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      Choose This Option
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" mx-auto p-6  rounded-2xl shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-6xl font-bold text-gray-800 leading-tight">
                  <span className="text-[#003366]">Door to Door</span>
                  <br />
                  Cross Country Car Transport Service
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Door-to-door cross-country car shipping offers a hassle-free
                  and convenient method of shipping your car without the
                  inconvenience of terminal pickups or drop-offs. Our
                  experienced carriers collect your vehicle from your doorstep
                  and drop it off at your destination, offering maximum
                  convenience, safety, and efficiency.
                </p>
              </div>

              {/* Additional Benefits */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FF5722]">
                <p className="text-gray-700 leading-relaxed">
                  With real-time tracking, complete insurance coverage, and
                  on-time delivery,
                  <span className="font-bold text-[#003366]">
                    {" "}
                    Rapid Auto Shipping
                  </span>{" "}
                  promises a hassle-free transport experience, whether you're
                  moving, buying a car, or requiring seasonal transportation.
                </p>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <p className="text-lg text-gray-600 mb-4">
                  Let us take care of the logistics as you experience a
                  hassle-free shipping process.
                </p>
                <button className="bg-rapidcolor text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Free Quote Now
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FF5722]/10 to-[#003366]/10 rounded-2xl ">
                {/* Placeholder for car transport image */}
                <div className=" rounded-xl  text-center text-white relative overflow-hidden">
                  <div className="relative">
                    <Image
                      src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1748262346/door_to_door_autotransport_kybrha.webp"
                      alt="door to door"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <MapPin size={24} className="text-[#FF5722]" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <Shield size={24} className="text-[#003366]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-6 space-y-12">
          {/* Header Section */}
          <div className="text-center bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-[#003366]">
                How to Prepare Your Car
              </span>
              <br />
              for Cross Country Car Shipping
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The secret to a smooth cross country car transport experience is
              effective preparation. Conduct the following prior to shipping:
            </p>
          </div>

          {/* Preparation Checklist */}

          {/* Factors Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#003366] p-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Factors Affecting Cost & Time
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-800">
                      Factor
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-800">
                      Effect on Cost & Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {factorstwo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 hover:bg-orange-50 transition-colors duration-200 ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div
                              className={`bg-gradient-to-r ${item.color} p-2 rounded-full`}
                            >
                              <IconComponent size={20} className="text-white" />
                            </div>
                            <span className="font-semibold text-gray-800">
                              {item.factor}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-700">{item.effect}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Process Section */}
        <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How Our Process Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, transparent, and efficient - from quote to delivery in
                four easy steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-8">
                    <div className="bg-[#003366] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-[#ff5722] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-12 bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#FF5722]">
          <div className="flex justify-center mb-4">
            <div className="bg-[#003366] p-4 rounded-full">
              <Star size={32} className="text-white" />
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose{" "}
            <span className="text-[#FF5722]">Rapid Auto Shipping</span>
            <br />
            <span className="text-[#003366]">
              to Ship Your Car Across the Country?
            </span>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Your car is more than just a means of getting from one place to
              another—it has emotional and monetary worth. That's why selecting
              an established and dependable automobile shipping firm is
              important. Here at Rapid Auto Shipping, we offer reputable,
              nationwide auto shipping with an extensive network of reliable
              carriers to get your vehicle safely and efficiently to its final
              destination.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our long-distance car transport is made convenient with 24/7
              tracking, frequent updates, and complete insurance coverage for
              maximum peace of mind. From shipping a car from one end of the
              country to another or transporting a vehicle from state to state,
              we offer budget-friendly, secure, and reliable transport services
              to suit your requirements. Trust Rapid Auto Shipping for
              hassle-free, budget-friendly car shipping!
            </p>

            <br />
            <p className="text-lg text-gray-600 leading-relaxed">
              Use our instant online quote calculator to get your transportation
              estimate in seconds for free. You can also contact us at +1(833)
              233-4447 to get your quote from one of our professionals through
              emails or phones, or you can use our live chat option as well.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#003366] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience Professional Car Shipping?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their
              valuable vehicles. Get your free, no-obligation quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FF5722] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg">
                Get Free Quote Now
              </button>
              <button className="bg-white text-[#003366] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Call Us Today
              </button>
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
    </>
  );
}