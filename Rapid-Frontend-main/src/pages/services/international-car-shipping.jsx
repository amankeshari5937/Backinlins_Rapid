"use client";

import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import { Calculator, Headphones } from "lucide-react";
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
  Shield,
  Clock,
  Users,
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
  Cog,
  ArrowRight,
  Maximize2,
  Navigation,
  Repeat,
  Phone,
  Ship,
  Anchor,
  Globe,
  Droplets,
  Battery,
  Camera,
  AlertCircle,
  Globe2,
  TrendingDown,
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

  const services = [
    {
      title: "Door-to-Door Shipping",
      icon: <Truck className="w-8 h-8" />,
      description:
        "Door-to-door car shipping (D2D) is a comprehensive service where the car is picked up from the shipper's location and delivered to the consignee's location, encompassing all aspects of the shipping process, including pick-up, transport, and delivery.",
      features: [
        "Complete convenience - eliminates shipper handling",
        "Includes customs clearance procedures",
        "End-to-end transportation on same equipment",
        "Real-time tracking throughout process",
        "Cost-effective with minimal risk of loss",
      ],
    },
    {
      title: "Roll-on/Roll-off (RORO)",
      icon: <Ship className="w-8 h-8" />,
      description:
        "Roll-on/roll-off (RORO) shipping is a method of transporting wheeled cargo, like cars, trucks, and trailers, where the cargo is driven directly onto and off of specialized vessels using ramps, rather than being lifted by cranes.",
      features: [
        "Vehicles driven directly onto specialized vessels",
        "Quick loading and unloading processes",
        "Reduced turnaround times",
        "Affordable and widely used method",
        "Efficient for various wheeled cargo types",
      ],
    },
    {
      title: "Container Shipping",
      icon: <Package className="w-8 h-8" />,
      description:
        "Container car shipping for international auto shipments involves loading vehicles into standard shipping containers for transport, offering protection and flexibility, but it's generally more expensive than RoRo shipping.",
      features: [
        "Vehicles secured in standard dry containers",
        "Multi-modal transport compatibility",
        "Complete weather and theft protection",
        "Ideal for high-value and collector cars",
        "Enhanced security during transit",
      ],
    },
    {
      title: "Enclosed Transport",
      icon: <Shield className="w-8 h-8" />,
      description:
        "For international auto-shipments, enclosed transport involves shipping vehicles in fully enclosed trailers, offers enhanced protection against weather and damage, making it a preferred choice for high-value or luxury cars.",
      features: [
        "Full protection from weather and debris",
        "Perfect for luxury and exotic vehicles",
        "Enhanced security and peace of mind",
        "Suitable for classic and race cars",
        "Door-to-door service available",
      ],
    },
    {
      title: "Port-to-Port Shipping",
      icon: <Anchor className="w-8 h-8" />,
      description:
        "Port-to-port shipping involves transporting vehicles from the port of origin to the port of destination, excluding pre-carriage and on-carriage services, which are the responsibility of the shipper.",
      features: [
        "Focuses solely on ocean freight portion",
        "Excludes inland transportation services",
        "Shipper handles customs clearance",
        "Budget-friendly shipping option",
        "Requires additional logistics coordination",
      ],
    },
  ];

  const professionalBenefits = [
    {
      category: "Safety and Security",
      icon: <Shield className="w-10 h-10" />,
      benefits: [
        "Experienced Drivers: Professional companies employ skilled drivers experienced in handling various vehicle types and routes of overseas car transport.",
        "Specialized Equipment: They use secure loading techniques and specialized equipment to minimize the risk of damage during transit in international car transport.",
        "Insurance Coverage: Reputable companies provide comprehensive insurance coverage for your vehicle, offering protection against unforeseen incidents.",
      ],
    },
    {
      category: "Convenience and Time-Saving",
      icon: <Clock className="w-10 h-10" />,
      benefits: [
        "Hassle-Free Process: They handle everything from pickup to delivery, saving you the time and effort of arranging transportation yourself.",
        "Flexibility: They offer various shipping options, including open or enclosed transport, to suit your specific needs and budget.",
        "Freedom to Travel: You can travel to your destination while your vehicle is being transported, saving time and reducing travel stress.",
      ],
    },
    {
      category: "Expertise and Reliability",
      icon: <Users className="w-10 h-10" />,
      benefits: [
        "Knowledge of Regulations: Professional companies are familiar with the legal requirements and regulations related to car shipping, ensuring a smooth and compliant process for car shipping overseas.",
        "Specialized Equipment: They may use specialized equipment like car carriers or trailers to transport vehicles safely.",
        "24/7 Support: Some companies offer 24/7 support and tracking, providing peace of mind throughout the shipping process.",
      ],
    },
    {
      category: "Transparent Pricing",
      icon: <Target className="w-10 h-10" />,
      benefits: [
        "Reputable companies offer transparent pricing with no hidden fees, allowing you to budget accurately.",
      ],
    },
  ];

  const tips = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Research and Planning",
      description:
        "Research and choose a reputable car shipping company with a good track record and well-equipped international car shipping.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Preparing Your Vehicle",
      description:
        "Remove items, check condition, document damage, complete required forms schedule pick-up, etc.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Understanding Insurance",
      description:
        "Verify coverage details. And inquire whether the shipping company provides marine insurance for car shipping.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timing Your Shipment",
      description: "Align with weekly schedules or expedite if needed.",
    },
  ];

  const steps = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Clean the Car",
      description:
        "A thorough wash helps with inspections. Make sure to remove all personal items and clutter from inside and outside the vehicle.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Check Fluid Levels",
      description:
        "Before shipping, verify that your oil, coolant, brake fluid, and gas levels are adequate. It's usually best to keep the gas tank around a quarter full.",
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Battery Maintenance",
      description:
        "Disconnect the battery to prevent it from draining during transport. If your car has an alarm, ensure it's disabled to avoid unintended alerts.",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Document the Condition",
      description:
        "Take detailed photos of your car from various angles. This documentation can be crucial if any disputes arise regarding damages during transport.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Secure Loose Parts",
      description:
        "If your vehicle has any external or aftermarket accessories, like bike racks or spoilers, securely fasten or remove them to prevent damage.",
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Check for Leaks",
      description:
        "Inspect your car for any signs of fluid leaks, as this could lead to complications during shipping.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Review Insurance",
      description:
        "Verify that your car insurance covers international shipping, or consider additional coverage through the shipping company like marine insurance for shipping car.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Complete Required Forms",
      description:
        "Fill out any necessary documentation for shipping and customs clearance to avoid delays.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Schedule Pickup",
      description:
        "Arrange for your car to be picked up ahead of time to sync with your shipping schedule.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Final Check",
      description:
        "Do a last-minute check to ensure nothing essential is left inside, and everything is tightened up.",
    },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Shipping Options & Flexibility",
      items: [
        "Containerized Shipping: This method offers better protection for your vehicle, especially during long voyages, as the car is enclosed in a container.",
        "Roll-on/Roll-off (RoRo) Shipping: This is a more cost-effective option, where vehicles are driven directly onto the ship.",
        "Choose the right option: Consider your budget, the type of vehicle, and the distance of the shipment when choosing between containerized or RoRo.",
      ],
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Port Coverage & Global Reach",
      items: [
        "Ensure the company serves both your origin and destination ports: This simplifies the process and avoids unnecessary transfers.",
        "Look for a company with a strong global car transport network: This ensures they can handle shipments to a wide range of destinations like car shipping to Europe/Africa/Asia.",
      ],
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Transparency and Pricing",
      items: [
        "Get multiple quotes: Compare car shipping quotes and services from different companies to find the best deal.",
        "Inquire about hidden fees: Make sure the company is upfront about all costs, including potential additional fees.",
        "Ask about insurance options: Verify that the company offers comprehensive insurance coverage.",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experience and Expertise",
      items: [
        "Look for companies with a proven track record: Choose a reliable car shipping company with extensive experience in international car shipping.",
        "Check for positive customer reviews: Online reviews can provide valuable insights into a company's reliability and customer service.",
        "Inquire about their knowledge of international regulations: A good company will be able to guide you through the necessary paperwork and customs procedures.",
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation and Compliance",
      items: [
        "An experienced shipper will guide you through necessary paperwork: This includes customs forms and other import/export documents.",
        "Ensure compliance with import/export regulations: A reputable company will have the expertise to handle all the necessary paperwork and ensure your shipment is compliant with regulations.",
        "Prepare the required documentation far in advance: This will help ensure a smooth and timely shipment.",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tracking and Communication",
      items: [
        "Look for companies that offer cargo tracking capabilities: This allows you to monitor the progress of your shipment.",
        "Ensure clear communication throughout the process: A good company in global car transport will keep you informed about the status of your shipment and address any questions or concerns promptly.",
      ],
    },
  ];

  const pricingData = [
    {
      method: "Container",
      costRange: "$1,000 - $3,500",
      icon: <Package className="w-6 h-6" />,
    },
    {
      method: "RoRo",
      costRange: "$900 - $2,000",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      method: "Air Freight",
      costRange: "$8,000 - $16,000",
      icon: <Calendar className="w-6 h-6" />,
    },
  ];

  const costFactors = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Distance",
      description:
        "Naturally, the farther the destination, the higher the shipping cost. An international shipment from the U.S. to Europe will typically be pricier than a shipment to Canada.",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Vehicle Size and Weight",
      description:
        "Larger vehicles, such as SUVs or trucks, will incur higher shipping fees due to their size and weight, which can affect how many cars can fit in a container or how much fuel is consumed during transport.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Additional Services",
      description:
        "Extras like insurance, customs clearance services, and storage can also add to your costs. Opting for door-to-door service instead of terminal-to-terminal can lead to significant price differences too.",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Market Fluctuations",
      description:
        "Just like any other industry, shipping rates can fluctuate based on demand and supply dynamics. Keeping an eye on seasonal trends can help you find better rates during off-peak times.",
    },
  ];

  const savingStrategies = [
    {
      title: "Choose the Right Shipping Method",
      items: [
        "RoRo (Roll-On/Roll-Off): This is generally the most cost-effective method, where you drive your car onto a specialized vessel for transportation.",
        "Open Transport: If you don't need extra protection, open transport is cheaper than enclosed transport.",
        "Container Shipping: Consider container shipping if you need added protection for your vehicle.",
      ],
    },
    {
      title: "Timing is Key",
      items: [
        "Book in Advance: Booking early can often secure better rates and ensure availability, especially during peak seasons.",
        "Flexible Pickup Dates: Be flexible with your pickup and delivery dates, as this can lead to cost savings.",
      ],
    },
    {
      title: "Compare Quotes and Negotiate",
      items: [
        "Gather Multiple Quotes: Don't settle for the first quote you receive. Compare prices from different reputable car shipping companies.",
        "Negotiate Rates: Don't be afraid to negotiate the price, as shipping companies may be open to lower rates.",
      ],
    },
    {
      title: "Other Cost-Saving Tips",
      items: [
        "Consider Seasonal Shipping: Shipping during off-peak seasons can sometimes be cheaper.",
        "Ensure Adequate Insurance: While car shipping companies offer basic coverage, consider additional insurance to protect your vehicle.",
        "Leverage Discounts: Ask about discounts for early bookings, multiple vehicle shipments, or volume discounts.",
        "Choose Reputable Companies: Research and choose a reputable car shipping company with a good track record.",
        "Optimize Packaging (if applicable): If you're shipping items along with your car, ensure they are properly packaged to prevent damage and potential extra costs. Compare quotes, and choose RORO over containers.",
      ],
    },
  ];

  const faqData = [
    {
      icon: <Truck className="w-5 h-5" />,
      question: "What is a Lowboy trucking service?",
      answer:
        "A Lowboy trucking service uses specialized trailers with a low deck height to haul oversized or heavy equipment that exceeds standard height restrictions, such as construction machinery, industrial equipment, and large vehicles.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Why choose Rapid Auto Shipping for Lowboy trucking?",
      answer:
        "We have extensive experience in heavy equipment logistics and a fleet of specialized Lowboy trailers. Our team handles everything from permits to route planning to ensure safe, legal, and efficient delivery.",
    },
    {
      icon: <Package className="w-5 h-5" />,
      question: "What types of loads can be hauled with a Lowboy trailer?",
      answer:
        "Lowboy trailers are ideal for transporting bulldozers, excavators, cranes, industrial tanks, forklifts, ISUZU NPR trucks, and more. If your load exceeds normal height or weight limits, Lowboy hauling is likely the best option.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Do you offer nationwide Lowboy trucking services?",
      answer:
        "Yes, we provide Lowboy trucking solutions across all 50 states. Whether your load is going coast-to-coast or locally, we can accommodate it.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is my cargo insured during Lowboy transport?",
      answer:
        "Absolutely. Every shipment includes full cargo insurance for peace of mind. We also perform detailed inspections before and after transport.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "How much does Lowboy trucking cost?",
      answer:
        "Pricing depends on the type of equipment, size, weight, distance, permits, and escort requirements. Contact us for a fast, custom quote with no hidden fees.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "Do I need special permits for oversized loads?",
      answer:
        "Yes, and we handle all of that for you. Our team secures the necessary permits, escorts, and follows DOT regulations to ensure compliance and safety.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "How long does it take to haul equipment on a Lowboy trailer?",
      answer:
        "Transit times vary based on distance, equipment size, and permitting. Short hauls can be completed in 1–3 days, while long-distance moves may take 5–7 days.",
    },
    {
      icon: <Repeat className="w-5 h-5" />,
      question: "Can I schedule recurring Lowboy shipments for my business?",
      answer:
        "Yes! We offer ongoing logistics partnerships for companies with frequent hauling needs. Ask us about our commercial discounts and dedicated support.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      question: "How do I book Lowboy trucking with Rapid Auto Shipping?",
      answer:
        "It's easy, just call us or request a quote online. One of our logistics experts will guide you through the process and get your equipment moving quickly and safely.",
    },
  ];

  return (
    <>
      <Head>
        <title>International Car shipping - Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Rapid Auto Shipping is trusted and affordable international car shipping companies for shipping cars overseas safely, click now for a deal!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/international-car-shipping"
        />
        <meta
          property="og:title"
          content="International Car shipping - Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping is trusted and affordable international car shipping companies for shipping cars overseas safely, click now for a deal!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/international-car-shipping"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753172221/international_car_shipping_1_sjgbz9.webp"
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
                    name: "Services",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://rapidautoshipping.com/services/international-car-shipping",
                    name: "International Car shipping - Rapid Auto Shipping",
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
              serviceType: "International Car Shipping",
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
                "Rapid Auto Shipping is trusted and affordable international car shipping companies for shipping cars overseas safely, click now for a deal!",
              url: "https://rapidautoshipping.com/services/international-car-shipping",
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753172221/international_car_shipping_1_sjgbz9.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753172221/international_car_shipping_1_sjgbz9.webp"
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
                    The Ultimate Guide to{" "}
                    <span className="text-[#ff5722]">
                      International Car Shipping
                    </span>{" "}
                    in 2025
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed    text-center sm:text-left">
                    Embarking on a journey across continents, international car
                    shipping is more than logistics, it's the art of delivering
                    horsepower to new horizons. Whether navigating bustling
                    ports or gliding through serene seas, every vehicle tells a
                    story of global connection and adventure. Trust us to turn
                    extraordinary into the everyday, making the world your
                    driveway.
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
                        Introduction
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      International auto transport is the complex process of
                      moving vehicles across borders for reasons such as buying,
                      selling, or relocation. Careful preparation, following
                      rules, and choosing the best delivery option are
                      necessary. Everything you need to know about shipping a
                      vehicle internationally is included in this extensive
                      guide, making the process go smoothly and stress-free from
                      beginning to end. It is essential to comprehend the subtle
                      differences in customs processes and vehicle inspection
                      requirements in other nations to prevent delays and
                      guarantee compliance with shipping regulations. You can
                      handle these challenges confidently if your global car
                      transport is with Rapid Auto Shipping, a reliable foreign
                      car shipping services company, knowing that your vehicle
                      is in good hands.
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
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1753172223/international_car_shipping_3_wcgh5x.webp"
                        alt="Shipping Service - Professional Transport"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-[#003366] to-[#001a33]">
            {/* Header Section */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-[#003366] opacity-90"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#ff5722] rounded-full">
                      <Globe className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    International Car Shipping
                  </h2>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-xl text-gray-200 leading-relaxed">
                      International car shipping involves transporting vehicles
                      across national borders, by sea or air, using
                      Roll-on/Roll-off (RoRo) shipping or container car shipping
                      methods. A lot of variables are involved in overseas
                      vehicle relocation. It is essential to comprehend the
                      subtle differences in customs processes and vehicle
                      inspection requirements in other nations to prevent delays
                      and guarantee compliance with shipping regulations.
                    </p>
                    <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                      <p className="text-white">
                        Car shipping abroad is a complex process that requires
                        giving logistics, laws, and practical considerations a
                        lot of thought. It is crucial to comprehend the
                        procedure whether you are sending an automobile as a
                        present, moving abroad, or buying a car from overseas.
                        Due to these, the service of a reliable car shipping
                        company becomes essential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why It Matters Section */}
            <div className="bg-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#003366] mb-6">
                    Why It Matters
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-[#003366] p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-[#ff5722] rounded-full flex items-center justify-center mb-6">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      Global Automotive Industry
                    </h3>
                    <p>
                      International car shipping is crucial for the global
                      automotive industry, allowing manufacturers to export
                      vehicles to different markets and consumers to import
                      their desired cars.
                    </p>
                  </div>

                  <div className="bg-[#ff5722] p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                      <Truck className="w-8 h-8 text-[#ff5722]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      International Relocation
                    </h3>
                    <p>
                      Many people relocate internationally, and car shipping
                      allows them to transport their vehicles to their new
                      homes, avoiding the need to sell and repurchase a car.
                    </p>
                  </div>

                  <div className="bg-[#003366] p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
                    <div className="w-16 h-16 bg-[#ff5722] rounded-full flex items-center justify-center mb-6">
                      <Ship className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      Cost-Effective Solutions
                    </h3>
                    <p>
                      Depending on the shipping method and destination,
                      international car shipping can be a cost-effective way to
                      transport vehicles, especially for longer distances, while
                      navigating complex customs regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-[#003366] mb-6">
                    Types of International Car Shipping Services
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto rounded-full"></div>
                  <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                    Choose from our comprehensive range of shipping services,
                    each designed to meet specific needs and budgets for
                    international vehicle transportation.
                  </p>
                </div>

                <div className="space-y-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } flex flex-col lg:flex`}
                    >
                      <div className="lg:w-1/2 p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className="p-3 bg-[#ff5722] rounded-full text-white mr-4">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-[#003366]">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 bg-[#ff5722] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`lg:w-1/2 bg-gradient-to-br ${
                          index % 2 === 0
                            ? "from-[#003366] to-[#001a33]"
                            : "from-[#ff5722] to-[#e64a19]"
                        } p-8 lg:p-12 flex items-center justify-center`}
                      >
                        <div className="text-center text-white">
                          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            {React.cloneElement(service.icon, {
                              className: "w-12 h-12",
                            })}
                          </div>
                          <h4 className="text-xl font-semibold mb-4">
                            Professional Service
                          </h4>
                          <p className="text-white/90">
                            Rapid Auto Shipping provides reliable logistics
                            support with professionals handling overseas
                            shipping via sea or air.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-[#ff5722] via-[#e64a19] to-[#ff5722] overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    viewBox="0 0 1000 1000"
                    className="absolute inset-0 w-full h-full"
                  >
                    <polygon
                      fill="rgba(0,51,102,0.1)"
                      points="0,0 1000,300 1000,1000 0,700"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#003366] rounded-full mb-8">
                    <Globe2 className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                    How Does International
                    <br />
                    Car Shipping Work?
                  </h2>
                  <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-xl text-white/95 leading-relaxed">
                      International car shipping can seem daunting, especially
                      when transporting a vehicle across borders or shipping
                      cars from USA to other countries. With the right knowledge
                      and preparation, though, it can be a streamlined process.
                    </p>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                      <p className="text-white/90 text-lg">
                        This comprehensive guide will walk you through the
                        essentials of international car shipping, covering
                        different methods, costs, and best practices for a
                        successful shipment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction Section */}
            <div className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#003366] mb-6">
                    Step-by-Step Process
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto rounded-full mb-6"></div>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Getting your car ready for international shipping doesn't
                      need to be a stress-fest. Follow this streamlined
                      checklist to ensure your vehicle is prepped for its
                      journey. Let's dive into the crucial aspects of getting
                      your car ready for international shipping.
                    </p>
                    <p className="text-lg text-[#003366] font-medium">
                      A little foresight in this process can save you not just
                      time but also money, making it smoother as you transition
                      to your new life abroad.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {steps.map((step, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#ff5722]">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white group-hover:bg-[#ff5722] transition-colors duration-300">
                              {step.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <span className="w-8 h-8 bg-[#ff5722] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                {index + 1}
                              </span>
                              <h3 className="text-xl font-semibold text-[#003366]">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <div className="bg-[#003366] rounded-2xl p-8">
                    <p className="text-white text-lg font-medium">
                      By following these steps, you can rest easy knowing your
                      vehicle is primed and ready for its international journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Section */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-[#003366] mb-6">
                    Key Features of Top Car Shipping Companies
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto rounded-full mb-8"></div>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Top international car shipping companies or Overseas
                      vehicle relocation shipping should offer diverse shipping
                      options (containerized and RoRo), extensive port coverage,
                      transparent pricing, comprehensive insurance, and
                      expertise in navigating international regulations and
                      documentation.
                    </p>
                    <p className="text-lg text-[#003366] mt-4 font-medium">
                      Here's a more detailed breakdown of key features:
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div key={index} className="group">
                      <div
                        className={`rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ${
                          index % 2 === 0
                            ? "lg:flex-row"
                            : "lg:flex-row-reverse"
                        } flex flex-col lg:flex`}
                      >
                        <div
                          className={`lg:w-1/3 p-8 flex items-center justify-center ${
                            index % 2 === 0
                              ? "bg-gradient-to-br from-[#003366] to-[#001a33]"
                              : "bg-gradient-to-br from-[#ff5722] to-[#e64a19]"
                          }`}
                        >
                          <div className="text-center">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                              <div className="text-white">{feature.icon}</div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {feature.title.split("&")[0]}
                              {feature.title.includes("&") && (
                                <>
                                  <span className="text-white/80"> &</span>
                                  <br />
                                  {feature.title.split("& ")[1]}
                                </>
                              )}
                            </h3>
                            <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                          </div>
                        </div>

                        <div className="lg:w-2/3 p-8 lg:p-12 bg-white">
                          <div className="space-y-6">
                            {feature.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-start group/item"
                              >
                                <div
                                  className={`w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0 ${
                                    index % 2 === 0
                                      ? "bg-[#003366]"
                                      : "bg-[#ff5722]"
                                  } group-hover/item:scale-125 transition-transform duration-300`}
                                ></div>
                                <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-[#003366] via-[#004080] to-[#003366] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 1000 1000"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="100"
                      height="100"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 100 0 L 0 0 0 100"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </pattern>
                  </defs>
                  <rect width="1000" height="1000" fill="url(#grid)" />
                </svg>
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-[#ff5722] rounded-2xl mb-8 shadow-2xl">
                    <DollarSign className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                    Costs and Factors
                    <br />
                    <span className="text-[#ff5722]">Affecting Pricing</span>
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Understanding these factors will go a long way in helping
                    you navigate the complexities of international auto
                    transport without breaking the bank.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Table Section */}
            <div className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#003366] mb-4">
                    Average Cost Range
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Here's a quick snapshot of estimated costs for the different
                    shipping methods:
                  </p>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto rounded-full"></div>
                </div>

                <div className="bg-gradient-to-r from-[#003366] to-[#004080] rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    Estimated Cost Range
                  </h3>
                  <div className="overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-6">
                      {pricingData.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-[#ff5722] rounded-full flex items-center justify-center text-white">
                              {item.icon}
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-[#003366] mb-2">
                            {item.method}
                          </h4>
                          <p className="text-2xl font-bold text-[#ff5722]">
                            {item.costRange}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-white/90 text-lg">
                      These rates are influenced by various elements, including
                      the shipping company, the distance, and even the current
                      fuel prices. For most, the choice of method will
                      significantly impact the final cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Factors */}
            <div className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#003366] mb-6">
                    Factors Influencing Costs
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto rounded-full mb-6"></div>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Calculate Shipping Cost
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {costFactors.map((factor, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#ff5722]">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-[#003366] rounded-2xl flex items-center justify-center text-white mr-4 group-hover:bg-[#ff5722] transition-colors duration-300">
                            {factor.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-[#003366]">
                            {factor.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Money Saving Section */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-[#003366] mb-6">
                    How to Save Money
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto rounded-full mb-6"></div>
                  <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    To save costs on international car shipping, consider
                    Roll-On/Roll-Off (RoRo) shipping, open transport, booking in
                    advance, being flexible with pickup dates, and comparing
                    quotes from multiple companies.
                  </p>
                  <p className="text-lg text-[#003366] mt-4 font-medium">
                    Here's a more detailed breakdown of cost-saving strategies:
                  </p>
                </div>

                <div className="space-y-8">
                  {savingStrategies.map((strategy, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-200"
                    >
                      <h3 className="text-2xl font-bold text-[#003366] mb-6 flex items-center">
                        <span className="w-10 h-10 bg-[#ff5722] text-white rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                          {index + 1}
                        </span>
                        {strategy.title}
                      </h3>
                      <div className="space-y-4 ml-14">
                        {strategy.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <div className="w-3 h-3 bg-[#ff5722] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Services Benefits */}
            <div className="py-20 bg-gradient-to-br from-[#003366] to-[#001a33]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Why Choose Professional Car Shipping Services?
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto rounded-full mb-8"></div>
                  <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                    Choosing professional car shipping services offers peace of
                    mind, convenience, and expertise, ensuring your vehicle is
                    transported safely and efficiently, with options for
                    insurance, flexible scheduling, and specialized equipment.
                  </p>
                  <p className="text-lg text-white/80 mt-4">
                    Here's a more detailed breakdown of the benefits:
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {professionalBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-20 h-20 bg-[#ff5722] rounded-2xl flex items-center justify-center text-white mr-6">
                          {benefit.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-[#003366]">
                          {benefit.category}
                        </h3>
                      </div>
                      <div className="space-y-4">
                        {benefit.benefits.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                            <p className="text-gray-700 leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="py-16 bg-gray-50">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#003366] mb-6">
                    Tips for a Smooth International Car Shipping Experience
                  </h2>
                  <div className="w-24 h-1 bg-[#ff5722] mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tips.map((tip, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center h-full flex flex-col">
                        <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-[#ff5722] transition-colors duration-300">
                          {tip.icon}
                        </div>
                        <h3 className="text-lg font-bold text-[#003366] mb-3">
                          {tip.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed flex-1">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  ))}
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
