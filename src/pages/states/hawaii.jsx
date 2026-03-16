"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import StatsSection from "@/components/CommonComponents/StatsSection";
import TestimonialSwiperAcross from "@/components/CommonComponents/Across-review";
import { Anchor, Calendar } from "lucide-react";
import {
  DollarSign,
  Zap,
  Car,
  Plus,
  Minus,
  Ship,
  Calculator,
  AlertCircle,} from "lucide-react";
import {
  CheckCircle,
  Shield,
  Clock,
  Phone,
  Star,
  Truck,
  MapPin,
  Globe,
  FileText,
  Users,
  Award,
  Crown,
} from "lucide-react";
import { FaCar, FaShieldAlt, FaStar, FaHome } from "react-icons/fa";

const Hawaii = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [openItems, setOpenItems] = useState(new Set());
  const fromInputRef = useRef(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [animatedPorts, setAnimatedPorts] = useState([]);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentStep, setCurrentStep] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

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
  }, []);

  useEffect(() => {
    const showStepsSequentially = () => {
      steps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps((prev) => [...prev, index]);
        }, index * 300);
      });
    };
    showStepsSequentially();
  }, []);

  useEffect(() => {
    if (fromInputRef.current) {
      fromInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
    // Stagger port animations
    ports.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedPorts((prev) => [...prev, index]);
      }, index * 200);
    });
  }, []);

  const benefits = [
    { text: "No personal info required", icon: Shield },
    { text: "Quotes in under 1 minute", icon: Zap },
    { text: "Transparent pricing with no hidden fees", icon: CheckCircle },
    { text: "Full insurance coverage", icon: Star },
    { text: "Nationwide & Hawaii coverage", icon: Truck },
  ];

  const routes = [
    {
      title: "Mainland to Hawaii Car Shipping",
      duration: "7–14 days",
      description:
        "Complete door-to-door service from mainland US to Hawaiian islands",
      icon: <Ship className="w-6 h-6" style={{ color: "#003366" }} />,
    },
    {
      title: "Hawaii to Mainland Car Shipping",
      duration: "7–12 days",
      description:
        "Reliable transport from Hawaii back to continental United States",
      icon: <Truck className="w-6 h-6" style={{ color: "#003366" }} />,
    },
    {
      title: "Inter-Island Car Shipping",
      duration: "3–7 days",
      description:
        "Quick island-hopping service (e.g., Oahu to Maui transport)",
      icon: <MapPin className="w-6 h-6" style={{ color: "#003366" }} />,
    },
  ];

  const processSteps = [
    { step: "Pickup", description: "Vehicle collection from your location" },
    {
      step: "Port Handling",
      description: "Professional loading and documentation",
    },
    { step: "Ocean Transit", description: "Secure maritime transportation" },
    { step: "Delivery", description: "Final destination drop-off" },
  ];

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Competitive, transparent Hawaii car shipping rates",
      color: "#ff5722",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Flexible door-to-port and port-to-door service options",
      color: "#003366",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Real-time tracking and 24/7 customer support",
      color: "#ff5722",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Full insurance coverage for every shipment",
      color: "#003366",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Years of experience in Hawaii auto transport",
      color: "#ff5722",
    },
  ];
  const contentBoxes = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Customized Hawaii Transport Solutions",
      description:
        "At Rapid Auto Shipping, we tailor our Hawaii car shipping services to meet your unique needs. Whether you need door-to-port, port-to-door, open, or enclosed transport, we provide flexible options to suit your budget and vehicle requirements.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Transparent & Affordable Pricing",
      description:
        "Our pricing is clear, competitive, and free of hidden fees. Use our instant quote tool to get an accurate Hawaii car shipping estimate based on your vehicle type, route, and service preferences.",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Customer Support",
      description:
        "Our team is available around the clock to answer your questions and provide real-time updates on your shipment. Track your vehicle’s journey from pickup to delivery with ease.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fully Insured & Secure",
      description:
        "Your vehicle is fully insured during transit, offering peace of mind whether shipping to Honolulu, Maui, or the mainland. We prioritize safety and reliability in every shipment.",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Get a Quote and Book Your Shipment",
      description:
        "Request a free Hawaii car shipping quote online or by calling (833) 233-4447. Provide details like vehicle type, route, and service preference (e.g., door-to-port or enclosed transport). Once confirmed, we’ll schedule your shipment.",
    },
    {
      number: 2,
      title: "Prepare Your Vehicle",
      description:
        "Clean your car, remove personal items, keep the gas tank under ¼ full, and report any mechanical issues. Our team provides port-specific guidelines to ensure compliance with Hawaii’s regulations.",
    },
    {
      number: 3,
      title: "Vehicle Pickup and Ocean Transport",
      description:
        "We pick up your vehicle from your location or a terminal and securely ship it via ocean freight to or from major Hawaiian ports like Honolulu, Kahului, or Hilo.",
    },
    {
      number: 4,
      title: "Delivery or Port Pickup",
      description:
        "Your vehicle is delivered to your chosen destination or available for pickup at the port. Every shipment includes full insurance and real-time tracking for a seamless experience.",
    },
  ];

  const ports = ["Honolulu", "Kahului", "Nawiliwili", "Hilo", "Kona"];

  const services = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "All Major Ports",
      description:
        "Coverage across Honolulu, Kahului, Nawiliwili, Hilo, and Kona",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Comprehensive Insurance",
      description:
        "Full protection with real-time tracking throughout transport",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Flexible Delivery",
      description: "Door-to-port and port-to-door options available",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick & Reliable",
      description: "Fast scheduling with dependable island logistics expertise",
    },
  ];

  const customers = [
    "Individuals",
    "Military Families",
    "Dealerships",
    "Snowbirds",
  ];

  const faqData = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "How much does it cost to ship a car to Hawaii?",
      answer:
        "The cost typically ranges from $1,000 to $1,800, depending on vehicle size, route, and delivery method (e.g., door-to-port or port-to-door). Use our Hawaii car shipping calculator for an instant quote.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "How long does it take to ship a car to or from Hawaii?",
      answer:
        "Transit times range from 7 to 14 days for mainland routes and 3 to 7 days for inter-island shipping. Factors like weather and port schedules may affect timing.",
    },
    {
      icon: <Car className="w-5 h-5" />,
      question: "Can I ship personal items in my car?",
      answer:
        "No, ports and carriers prohibit personal belongings inside the vehicle for safety and liability reasons. All cars must be empty except for factory-installed equipment.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is my vehicle insured during transport?",
      answer:
        "Yes, we provide fully insured Hawaii auto transport, covering your vehicle against damage during transit. Inspection reports are completed before and after shipping.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "What ports do you service in Hawaii?",
      answer:
        "We offer vehicle shipping to and from all major ports, including: Honolulu (Oahu), Kahului (Maui), Hilo and Kona (Big Island), and Nawiliwili (Kauai).",
    },
    {
      icon: <Award className="w-5 h-5" />,
      question: "Do you offer military discounts?",
      answer:
        "Yes, we proudly support service members with military car shipping to Hawaii, offering discounts and flexible scheduling to accommodate PCS orders.",
    },
    {
      icon: <Crown className="w-5 h-5" />,
      question: "Can I ship a luxury car or motorcycle?",
      answer:
        "Absolutely. We offer enclosed auto transport services in Hawaii for high-end vehicles, as well as motorcycle shipping services, with full insurance and secure handling.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const factors = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Distance and Route:",
      description:
        "Shipping from West Coast cities like Los Angeles, Oakland, or Seattle is generally more affordable due to port proximity. East Coast and Midwest shipments cost more but are still competitively priced.",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Vehicle Type:",
      description:
        "Larger and heavier vehicles, such as trucks, SUVs, and vans, tend to cost more to ship than compact cars or sedans.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transport Method:",
      description:
        "Choosing enclosed auto transport for Hawaii adds a layer of protection for luxury cars, vintage cars, or those in Hawaii, but it also raises the price compared to standard open transport.",
    },
    {
      icon: <Anchor className="w-6 h-6" />,
      title: "Port Access:",
      description:
        "Delivering to or from major ports like Honolulu on Oahu or Kahului on Maui is typically less expensive than routes involving Kauai or Hilo, due to scheduling and vessel availability.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Seasonal Demand:",
      description:
        "Prices may rise slightly during peak seasons, such as summer relocations or winter snowbird car shipping, when demand spikes.",
    },
  ];

  const pricingData = [
    {
      route: "Los Angeles to Honolulu",
      cost: "$1,050 – $1,450",
      icon: <Ship className="w-5 h-5" />,
    },
    {
      route: "Seattle to Kahului",
      cost: "$1,150 – $1,650",
      icon: <Ship className="w-5 h-5" />,
    },
    {
      route: "Honolulu to New York City",
      cost: "$1,600 – $2,200",
      icon: <Ship className="w-5 h-5" />,
    },
  ];

  const preparationSteps = [
    {
      icon: <Car className="w-5 h-5" />,
      text: "Wash your car thoroughly",
      detail:
        "A clean vehicle allows for proper inspection and accurate documentation of existing scratches or dents before shipping.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      text: "Remove all personal items",
      detail:
        "For safety and insurance reasons, no loose items are allowed inside the car during transport, including electronics, clothing, and accessories.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Keep your gas tank under ¼ full",
      detail:
        "Lower fuel levels are required for safety on cargo vessels and reduce overall vehicle weight.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Check for leaks or mechanical issues",
      detail:
        "Let us know in advance if your car has any known problems so we can plan accordingly.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Provide a working key",
      detail:
        "Your vehicle may need to be moved during the loading or unloading process, so a functioning key is essential.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Disable any alarms",
      detail:
        "Active alarm systems can interfere with handling and cause delays.",
    },
    {
      icon: <Ship className="w-5 h-5" />,
      text: "Follow port-specific guidelines",
      detail:
        "Our team will provide instructions based on your departure or arrival port, ensuring full compliance with local regulations.",
    },
  ];

  const considerations = [
    {
      title: "Plan for Scheduling",
      content:
        "Auto transport to Hawaii isn't as frequent as shipping on the mainland, so it's essential to book in advance. Ship departures are dependent on port schedules, weather conditions, and vessel availability.",
    },
    {
      title: "Understand Port Logistics",
      content:
        "Hawaii vehicle shipping typically involves major ports like Honolulu, Kahului (Maui), Nawiliwili (Kauai), Hilo, and Kona. We coordinate everything from Oahu to the mainland and beyond.",
    },
    {
      title: "Insurance and Safety",
      content:
        "Select a Hawaii car shipping company that offers comprehensive insurance coverage. We provide fully insured and secure vehicle transportation with real-time tracking.",
    },
    {
      title: "Regulatory Compliance",
      content:
        "Hawaii's environmental regulations require your vehicle to pass inspections and be free of soil or pests. We'll guide you through all port and customs requirements.",
    },
    {
      title: "Know the Costs",
      content:
        "Car shipping costs to Hawaii vary based on your vehicle, location, and delivery type. We offer competitive pricing and transparent options for all Hawaii vehicle transport needs.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-observe]");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % preparationSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [preparationSteps.length]);

  const isVisibles = (section) => visibleSections.has(section);

  return (
    <>
      <Head>
        <title>
          Affordable & Safe Hawaii Car Shipping Services | Hawaii Car Transport
        </title>
        <meta
          name="description"
          content="Hawaii car shipping Services made easy with Rapid Auto Shipping. Affordable rates, trusted insured carriers, and convenient door-to-port service. Get your free quote today!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/states/hawaii"
        />
        <meta
          property="og:title"
          content="Affordable & Safe Hawaii Car Shipping Services | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Hawaii car shipping Services made easy with Rapid Auto Shipping. Affordable rates, trusted insured carriers, and convenient door-to-port service. Get your free quote today!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/states/hawaii"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747984450/Car-Shipping-Calculator_xhq3te.webp"
        />
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Hawaii Auto Transport Service",
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
          name: "Hawaii",
          alternateName: "HI",
        },
        {
          "@type": "Country",
          name: "United States",
          alternateName: "US",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hawaii Vehicle Transport Options",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roll-on/Roll-off (RoRo) Ocean Shipping",
              description:
                "Most popular and cost-effective method where vehicles are driven onto ocean cargo ships and secured on deck or inside protective garages during Pacific transit.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "1597",
              maxPrice: "2500",
              priceCurrency: "USD",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Container Shipping",
              description:
                "Premium enclosed container transport providing maximum protection for luxury, classic, or high-value vehicles during ocean transit to Hawaii.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "2200",
              maxPrice: "3500",
              priceCurrency: "USD",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Door-to-Port Service",
              description:
                "Complete pickup from your mainland location and delivery to Hawaii departure port, with professional loading onto ocean vessel.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Port-to-Door Service",
              description:
                "Pickup from Hawaii port and delivery to your specified destination address on the mainland or within Hawaii islands.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Port-to-Port Service",
              description:
                "Budget-friendly option with customer drop-off and pickup at designated ports in Hawaii (Honolulu, Hilo, Kahului, Nawiliwili) and mainland (Oakland, Seattle, Los Angeles).",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Inter-Island Transport",
              description:
                "Vehicle shipping between Hawaiian islands including Oahu, Maui, Big Island, Kauai, and Molokai.",
            },
          },
        ],
      },
      description:
        "Professional auto transport services to and from Hawaii covering ocean shipping between the Hawaiian Islands and mainland United States. Specializing in RoRo and container shipping methods with door-to-port, port-to-door, and port-to-port options for cars, SUVs, trucks, motorcycles, and RVs.",
      url: "https://rapidautoshipping.com/states/hawaii",
      serviceType: [
        "VehicleTransport",
        "OceanVehicleTransport",
        "HawaiiVehicleTransport",
        "InterIslandTransport",
      ],
      serviceArea: {
        "@type": "GeoShape",
        description: "Hawaii to mainland United States and inter-island transport corridor",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Ocean Distance",
          value: "2,400-2,600 miles from mainland",
        },
        {
          "@type": "PropertyValue",
          name: "Transit Time",
          value: "8-19 days including port processing",
        },
        {
          "@type": "PropertyValue",
          name: "Sailing Time",
          value: "5-8 days ocean transit",
        },
        {
          "@type": "PropertyValue",
          name: "Insurance",
          value: "Full ocean marine coverage included",
        },
        {
          "@type": "PropertyValue",
          name: "Tracking",
          value: "Port-to-port vessel tracking available",
        },
        {
          "@type": "PropertyValue",
          name: "Vehicle Types",
          value: "Cars, SUVs, Trucks, Motorcycles, RVs, Boats",
        },
        {
          "@type": "PropertyValue",
          name: "Hawaii Ports",
          value: "Honolulu, Hilo, Kahului, Nawiliwili",
        },
        {
          "@type": "PropertyValue",
          name: "Mainland Ports",
          value: "Oakland, Seattle, Los Angeles, Long Beach",
        },
      ],
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "1597",
          maxPrice: "3500",
          priceCurrency: "USD",
        },
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01",
        eligibleRegion: [
          {
            "@type": "State",
            name: "Hawaii",
          },
          {
            "@type": "Country",
            name: "United States",
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
        name: "Get Hawaii Shipping Quote",
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
          name: "States",
          item: "https://rapidautoshipping.com/states/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hawaii Auto Transport",
          item: "https://rapidautoshipping.com/states/hawaii",
        },
      ],
    }),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to ship a car to Hawaii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost to ship a car to Hawaii typically ranges from $1,597 to $2,500 for RoRo ocean shipping, depending on the vehicle size, departure port, and destination island. Container shipping costs range from $2,200 to $3,500 for premium protection."
          }
        },
        {
          "@type": "Question", 
          name: "How long does it take to ship a car to Hawaii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shipping a car to Hawaii typically takes 8-19 days total, including 5-8 days for ocean transit and additional time for port processing, loading, and delivery. Transit times vary based on departure location and destination island."
          }
        },
        {
          "@type": "Question",
          name: "Which ports serve Hawaii auto transport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hawaii ports include Honolulu (Oahu), Hilo and Kawaihae (Big Island), Kahului (Maui), and Nawiliwili (Kauai). Mainland departure ports include Oakland and Long Beach (California), Seattle (Washington), and other West Coast locations."
          }
        },
        {
          "@type": "Question",
          name: "What shipping methods are available for Hawaii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hawaii auto transport offers Roll-on/Roll-off (RoRo) shipping where vehicles are driven onto cargo ships, and container shipping for premium protection. Both methods include door-to-port, port-to-door, and port-to-port service options."
          }
        }
      ]
    }),
  }}
/>
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          {/* Hero Section */}
          <section className="relative py-8 min-h-screen flex items-center w-full">
            <div className="absolute inset-0">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747984450/Car-Shipping-Calculator_xhq3te.webp"
                alt="Hawaii Car Shipping Service"
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
              <div className="space-y-6 sm:space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-5xl text-white drop-shadow-2xl font-bold text-center sm:text-left" style={{fontSize:"50px"}}>
                  Hawaii Car Shipping{" "}
                  <span className="text-[#ff5722]">Services</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed max-w-3xl drop-shadow-xl backdrop-blur-md bg-[#001933]/20 p-3 sm:p-4 rounded-lg border border-[#001933]/30 text-center sm:text-left">
                  Shipping a car to or from Hawaii to the mainland can be
                  complex due to the islands’ remote location. That’s why you
                  need a reliable Hawaii car shipping company you can trust.
                  Rapid Auto Shipping provides secure, affordable, and
                  hassle-free Hawaii auto transport services tailored to meet
                  your specific needs. Whether you’re relocating to Honolulu,
                  moving a luxury vehicle to Maui, or shipping a car from Oahu
                  back to the mainland, our Hawaii car shipping experts ensure
                  your vehicle’s safe and timely delivery.
                </p>
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
                            Snowbird & Military
                          </div>
                          <div className="text-gray-100 text-md drop-shadow-sm">
                            Seasonal and PCS relocations
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

          {/* Trust Indicators */}
          <div className="py-8 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
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

          <div className="py-8">
            <TestimonialSwiperAcross />
          </div>
          <div
            className="min-h-screen relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #003366 0%, #001a33 50%, #003366 100%)",
            }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                style={{ backgroundColor: "#ff5722", opacity: 0.1 }}
              ></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000"
                style={{ backgroundColor: "#ff5722", opacity: 0.15 }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl animate-pulse delay-500"
                style={{ backgroundColor: "#ff5722", opacity: 0.08 }}
              ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
              {/* Header Section */}
              <div className="text-center mb-16">
                <div
                  className="inline-flex items-center gap-3 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border"
                  style={{
                    backgroundColor: "rgba(255, 87, 34, 0.1)",
                    borderColor: "rgba(255, 87, 34, 0.3)",
                  }}
                >
                  <Truck className="w-5 h-5" style={{ color: "#ff5722" }} />
                  <span className="font-medium" style={{ color: "#ff5722" }}>
                    Expert Auto Shipping
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Why Choose Rapid Auto Shipping for{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #ff5722, #ff5722)",
                      WebkitBackgroundClip: "text",
                      color: "#ff5722",
                    }}
                  >
                    Hawaii Car Shipping?
                  </span>
                </h2>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  When it comes to shipping a car to and from Hawaii, trusting
                  the expert is the best policy to ensure your vehicle reaches
                  its destination without a hitch. Rapid Auto Shipping is one of
                  the nation's top auto shipping companies, offering exceptional{" "}
                  <span className="font-semibold" style={{ color: "#ff5722" }}>
                    Hawaii car shipping services
                  </span>{" "}
                  that won't break the bank.Our motive is to{" "}
                  <span className="font-bold" style={{ color: "#ff5722" }}>
                    serve the country
                  </span>
                  , not to make a profit; that's why we gladly provide:
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative backdrop-blur-xl rounded-2xl p-6 border transition-all duration-500 hover:scale-105 cursor-pointer"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    onMouseEnter={() => {
                      setHoveredFeature(index);
                    }}
                    onMouseLeave={() => {
                      setHoveredFeature(null);
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"
                      style={{ backgroundColor: feature.color }}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: feature.color }}
                      >
                        <div className="text-white">{feature.icon}</div>
                      </div>

                      <h3 className="text-white font-semibold text-lg leading-tight group-hover:transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>

                    <div
                      className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"
                      style={{ backgroundColor: feature.color }}
                    ></div>
                  </div>
                ))}
              </div>

              <p className="text-xl text-gray-300 max-w-7xl mx-auto leading-relaxed">
                With the flexible door-to-port and port-to-door services
                options, you can ship a car from Hawaii to a mainland address or
                vice versa. Pick what works best for your vehicle and budget:
                open transport for everyday vehicles, or enclosed transport for
                luxury, classic, or high-value cars. Your vehicle is fully
                insured throughout the journey, giving you complete peace of
                mind during the shipping process. No hidden fees, no surprises.
                Get a free Hawaii car transport quote online anytime, or call us
                at{" "}
                <span className="font-semibold" style={{ color: "#ff5722" }}>
                  {" "}
                  (833) 233-4447{" "}
                </span>{" "}
                for a personalized estimate.
              </p>
            </div>
          </div>

          {/* Hawaii Car Shipping Services Section */}
          <section className="min-h-[500px] bg-gradient-to-br from-blue-50 to-orange-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                  Our{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent">
                    Hawaii Car Shipping
                  </span>
                  <br />
                  <span className="text-4xl md:text-5xl">Services</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
                  At Rapid Auto Shipping, we know that no two customers or
                  vehicles are the same. That’s why we offer a full suite of
                  Hawaii car shipping services tailored to your specific needs.
                  Whether you're moving to Honolulu, sending a vehicle from Maui
                  to the mainland, or transporting multiple cars for your
                  dealership, we’ve got the tools and experience to make the job
                  simple, safe, and affordable.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#ff5722] mb-3">
                    Door-to-Port Car Shipping
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Our door-to-port service is ideal for customers who want
                    maximum convenience. We pick up your vehicle from your home
                    or business and transport it to the nearest port for ocean
                    shipping. This service is beneficial for customers in remote
                    or non-coastal areas who don’t want the hassle of getting
                    their car to the port themselves. Once your vehicle is
                    received, it’s prepared for ocean transit and safely loaded
                    onto a ship bound for Hawaii or the mainland.
                  </p>
                </div>
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">
                    Port-to-Door Car Shipping
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    If your car is already at a Hawaiian port like Honolulu,
                    Kahului, Hilo, or Nawiliwili, we can handle the rest. Our
                    port-to-door service ensures your vehicle is delivered to
                    your final destination on the mainland, whether that’s
                    Seattle, Los Angeles, New York, or anywhere in between. It’s
                    a smooth, coordinated process designed to save you time and
                    eliminate unnecessary logistics on your end.
                  </p>
                </div>
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#ff5722] mb-3">
                    Open vs. Enclosed Transport
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    We give customers the option to choose between open and
                    enclosed transport. Open transport is the more common and
                    budget-friendly option, perfect for standard cars, SUVs, and
                    trucks. Enclosed auto transport, on the other hand, offers
                    added protection from the elements, ideal for classic cars,
                    exotic vehicles, or high-end electric models. This option is
                    particularly beneficial when shipping to or from coastal
                    environments, such as Hawaii, where exposure to salt air and
                    moisture is a significant concern.
                  </p>
                </div>
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">
                    Multi-Vehicle & Dealership Transport
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Moving more than one vehicle? No problem. Our multi-vehicle
                    shipping services are great for families relocating with
                    multiple cars or for dealerships needing to ship inventory
                    across islands or states. We offer bulk transport discounts
                    and custom logistics planning to ensure all your vehicles
                    arrive on schedule and within budget.
                  </p>
                </div>
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#ff5722] mb-3">
                    Military Car Shipping
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    If you're an active-duty military member, we understand the
                    unique demands that come with PCS moves. That’s why we
                    proudly offer specialized military car shipping services to
                    and from Hawaii. We offer discounted rates, flexible
                    scheduling, and personalized coordination to ensure a smooth
                    transition. Whether you’re being stationed on Oahu or
                    heading back to the mainland, you can count on us to handle
                    your vehicle with care.
                  </p>
                </div>
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">
                    Snowbird Auto Transport
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Planning to escape the cold and spend the winter months in
                    Hawaii? Or heading back to the mainland for the summer? Our
                    snowbird car shipping services are perfect for seasonal
                    travelers who want their vehicle waiting for them when they
                    arrive. We offer flexible booking windows and can ship your
                    vehicle both ways, so your seasonal transition is entirely
                    hassle-free. From single-car shipments to complex logistics
                    involving inter-island vehicle shipping, Rapid Auto Shipping
                    delivers reliability, affordability, and customer-first
                    service every time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header Section */}
            <div
              className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-slate-800"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #001a33 100%)",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-20"></div>

              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-10 animate-pulse"
                  style={{ backgroundColor: "#ff5722" }}
                ></div>
                <div
                  className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 animate-bounce"
                  style={{
                    backgroundColor: "#003366",
                    animationDuration: "3s",
                  }}
                ></div>
                <div
                  className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-400 rounded-full opacity-10 animate-ping"
                  style={{
                    backgroundColor: "#ff5722",
                    animationDuration: "2s",
                  }}
                ></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div
                  className={`text-center space-y-8 transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
                    <span
                      className="bg-gradient-to-r bg-clip-text text-white "
                      style={{
                        background: "linear-gradient(45deg, #ff5722, #ff7043)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      How Much Does It Cost to Ship a Car to or from Hawaii?
                    </span>
                  </h2>

                  <div className="max-w-4xl mx-auto space-y-6">
                    <p
                      className="text-xl lg:text-2xl text-blue-100 leading-relaxed animate-slide-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      The cost of{" "}
                      <span
                        className="font-bold animate-pulse"
                        style={{ color: "#ff5722" }}
                      >
                        Hawaii vehicle shipping
                      </span>{" "}
                      varies depending on several factors. These include the
                      distance between pickup and delivery points, the size and
                      weight of the vehicle, the type of transport selected
                      (open vs. enclosed), and the shipping season.
                    </p>
                    <p
                      className="text-lg lg:text-xl text-blue-200 leading-relaxed animate-slide-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      Shipping from major ports like Los Angeles to Honolulu
                      tends to be more affordable, while shipping to Maui or
                      Kauai can be slightly higher due to port logistics.
                    </p>
                    <div
                      className="animate-bounce-in"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <p className="text-xl font-bold text-white">
                        Typically, prices range from{" "}
                        <span
                          className="animate-pulse"
                          style={{ color: "#ff5722" }}
                        >
                          $1,050 to $2,200
                        </span>{" "}
                        depending on the route.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-slide-up"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <Link href="https://rapidautoshipping.com/calculator">
                      <button
                        className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:rotate-1 flex items-center space-x-3 animate-pulse"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <Calculator
                          className="w-5 h-5 animate-spin"
                          style={{ animationDuration: "3s" }}
                        />
                        <span>Use Car Shipping Calculator</span>
                      </button>
                    </Link>
                    <Link href="tel:+18332334447">
                      <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:-rotate-1 flex items-center space-x-3">
                        <Phone className="w-5 h-5 animate-bounce" />
                        <span>Get Personalized Quote</span>
                      </button>
                    </Link>
                  </div>

                  <p
                    className="text-blue-200 text-lg animate-fade-in"
                    style={{ animationDelay: "1s" }}
                  >
                    For accurate pricing, we recommend using our car shipping
                    calculator for Hawaii or calling us directly for a
                    personalized quote.
                  </p>
                </div>
              </div>
            </div>

            {/* Factors Section */}
            <div className="py-16 lg:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-slide-up">
                  <h2
                    className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in"
                    style={{ color: "#003366" }}
                  >
                    Factors That Influence Car Shipping Cost to Hawaii:
                  </h2>
                  <p
                    className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Understanding these key factors will help you estimate your
                    Hawaii car shipping costs more accurately
                  </p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                  {factors.map((factor, index) => (
                    <div
                      key={index}
                      className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-l-4 animate-slide-up cursor-pointer ${
                        activeCard === index ? "scale-105" : ""
                      }`}
                      style={{
                        borderLeftColor:
                          index % 2 === 0 ? "#ff5722" : "#003366",
                        animationDelay: `${index * 0.1}s`,
                      }}
                      onMouseEnter={() => setActiveCard(index)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      <div className="flex items-start space-x-6">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ff5722" : "#003366",
                            color: "white",
                          }}
                        >
                          <div className="animate-pulse">{factor.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h3
                            className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300"
                            style={{ color: "#003366" }}
                          >
                            {factor.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                            {factor.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Table Section */}
            <div className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-slide-up">
                  <h3
                    className="text-3xl lg:text-4xl font-bold mb-6 animate-bounce-in"
                    style={{ color: "#003366" }}
                  >
                    Here are a few real-world pricing examples:
                  </h3>
                  <p
                    className="text-xl text-gray-600 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Sample routes and their estimated shipping costs
                  </p>
                </div>

                {/* Desktop/Tablet Table (hidden on mobile) */}
                <div className="hidden md:block bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 animate-slide-up">
                  {/* Table Header */}
                  <div
                    className="px-8 py-6 text-white font-bold text-xl relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #003366 0%, #001a33 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-pulse"></div>
                    <div className="relative grid grid-cols-2 gap-4 items-center">
                      <div className="flex items-center space-x-3 animate-slide-right">
                        <MapPin className="w-6 h-6 animate-bounce" />
                        <span>Route</span>
                      </div>
                      <div className="flex items-center space-x-3 justify-end animate-slide-left">
                        <DollarSign className="w-6 h-6 animate-pulse" />
                        <span>Estimated Cost</span>
                      </div>
                    </div>
                  </div>

                  {/* Table Body */}
                  <div className="divide-y divide-gray-200">
                    {pricingData.map((row, index) => (
                      <div
                        key={index}
                        className="px-8 py-6 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-102 animate-slide-up group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="grid grid-cols-2 gap-4 items-center">
                          <div className="flex items-center space-x-4">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                              style={{
                                backgroundColor: "#ff5722",
                                color: "white",
                              }}
                            >
                              <div className="animate-pulse">{row.icon}</div>
                            </div>
                            <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                              {row.route}
                            </span>
                          </div>
                          <div className="text-right">
                            <span
                              className="text-xl font-bold px-4 py-2 rounded-lg group-hover:scale-110 transition-all duration-300 animate-pulse"
                              style={{
                                color: "#003366",
                                backgroundColor: "#f0f9ff",
                              }}
                            >
                              {row.cost}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Cards (visible only on mobile) */}
                <div className="md:hidden space-y-4">
                  {pricingData.map((row, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse"
                            style={{
                              backgroundColor: "#ff5722",
                              color: "white",
                            }}
                          >
                            {row.icon}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {row.route}
                            </p>
                          </div>
                        </div>
                        <div>
                          <span
                            className="text-lg font-bold px-3 py-1 rounded animate-bounce"
                            style={{
                              color: "#003366",
                              backgroundColor: "#f0f9ff",
                            }}
                          >
                            {row.cost}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <div
                  className="mt-12 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <Clock
                        className="w-12 h-12 animate-spin"
                        style={{ color: "#ff5722", animationDuration: "4s" }}
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
                        These are just averages, and your specific quote may
                        vary based on real-time availability and fuel costs. To
                        get the most accurate and up-to-date rate, we strongly
                        recommend using our instant Hawaii car shipping quote
                        tool or calling one of our vehicle shipping specialists.
                      </p>
                      <p
                        className="text-lg font-semibold animate-pulse"
                        style={{ color: "#003366" }}
                      >
                        Remember, our pricing is all-inclusive; you won't find
                        any surprise fees buried in the fine print. We believe
                        in delivering affordable car shipping in Hawaii without
                        compromising on safety or service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes fade-in {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
              @keyframes slide-up {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @keyframes slide-right {
                from {
                  opacity: 0;
                  transform: translateX(-30px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              @keyframes slide-left {
                from {
                  opacity: 0;
                  transform: translateX(30px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              @keyframes bounce-in {
                0% {
                  opacity: 0;
                  transform: scale(0.3);
                }
                50% {
                  opacity: 1;
                  transform: scale(1.05);
                }
                70% {
                  transform: scale(0.9);
                }
                100% {
                  opacity: 1;
                  transform: scale(1);
                }
              }
              .animate-fade-in {
                animation: fade-in 1s ease-out forwards;
              }
              .animate-slide-up {
                animation: slide-up 0.8s ease-out forwards;
              }
              .animate-slide-right {
                animation: slide-right 0.8s ease-out forwards;
              }
              .animate-slide-left {
                animation: slide-left 0.8s ease-out forwards;
              }
              .animate-bounce-in {
                animation: bounce-in 1s ease-out forwards;
              }
              .hover\\:scale-102:hover {
                transform: scale(1.02);
              }
            `}</style>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div
                    className="p-3 rounded-full text-white shadow-lg"
                    style={{ background: "#ff5722" }}
                  >
                    <Clock className="w-8 h-8" />
                  </div>
                  <h2
                    className="text-4xl font-bold"
                    style={{ color: "#003366" }}
                  >
                    How Long Does It Take to Ship a Car to or from Hawaii?
                  </h2>
                </div>
                <p
                  className="text-lg max-w-3xl mx-auto leading-relaxed"
                  style={{ color: "#003366", opacity: 0.8 }}
                >
                  Hawaii vehicle shipping typically takes 7 to 14 days for
                  mainland routes and 3 to 7 days for routes between islands.
                  Timeframes include pickup, port handling, ocean transit, and
                  delivery.
                </p>
              </div>

              {/* Shipping Routes Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {routes.map((route, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                          {route.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-lg leading-tight">
                            {route.title}
                          </h3>
                          <div className="text-2xl font-bold text-orange-500 mt-1">
                            {route.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {route.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Process Timeline */}

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div
                  className="rounded-2xl p-8 text-white"
                  style={{ background: "#ff5722" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                    <h3 className="text-2xl font-bold text-white">
                      What We Provide
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white">
                        Coordination with top carriers
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white">
                        Real-time tracking system
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white">
                        Door-to-port & port-to-door options
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white">
                        Fast, safe, and seamless transport
                      </span>
                    </li>
                  </ul>
                </div>

                <div
                  className="rounded-2xl p-8 text-white"
                  style={{ background: "#003366" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle
                      className="w-8 h-8"
                      style={{ color: "#ff5722" }}
                    />
                    <h3 className="text-2xl font-bold text-white">
                      Important Considerations
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "#ff5722" }}
                      ></div>
                      <span className="text-white">
                        Weather conditions may impact timing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "#ff5722" }}
                      ></div>
                      <span className="text-white">
                        Port congestion can cause delays
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "#ff5722" }}
                      ></div>
                      <span className="text-white">
                        Seasonal demand affects availability
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "#ff5722" }}
                      ></div>
                      <span className="text-white">
                        Book at least 2 weeks in advance
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute bottom-10 right-20 w-16 h-16 bg-orange-400 rounded-full opacity-20 animate-ping"
                style={{ backgroundColor: "#ff5722", animationDuration: "2s" }}
              ></div>
              <div
                className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-pulse"
                style={{ backgroundColor: "#003366" }}
              ></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#003366] p-8 rounded-2xl">
              <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight animate-slide-up">
                  Ready to Get Your Accurate Quote?
                </h2>
                <p
                  className="text-xl lg:text-2xl text-blue-100 leading-relaxed animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Use our instant calculator or speak with our Hawaii shipping
                  specialists for personalized pricing
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Link href="https://rapidautoshipping.com/calculator">
                    <button
                      className="px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:rotate-2 flex items-center space-x-3 animate-pulse"
                      style={{ backgroundColor: "#ff5722", color: "white" }}
                    >
                      <Calculator className="w-6 h-6" />
                      <span>Get Instant Quote</span>
                    </button>
                  </Link>
                  <Link href="tel:+18332334447">
                    <div className="flex items-center space-x-4 bg-white bg-opacity-10 rounded-xl px-6 py-4 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                      <Phone
                        className="w-8 h-8 animate-pulse"
                        style={{ color: "#ff5722" }}
                      />
                      <div className="text-left">
                        <p className="text-2xl font-bold text-white ">
                          (833) 233-4447
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div
                  className="pt-8 border-t border-blue-800 flex items-center justify-center space-x-3 animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  <CheckCircle
                    className="w-6 h-6 "
                    style={{ color: "#ff5722", animationDuration: "3s" }}
                  />
                  <p className="text-blue-200 text-lg">
                    <span
                      style={{ color: "#ff5722" }}
                      className="font-semibold animate-pulse"
                    >
                      All-inclusive pricing
                    </span>{" "}
                    - No hidden fees, no surprises
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section
            className="bg-gradient-to-br from-orange-50 to-slate-100 py-16 px-6"
            style={{
              background: "linear-gradient(to bottom right, #fff5f2, #f8fafc)",
            }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Why Hawaii Chooses Rapid Auto Shipping
                </h2>
                <div
                  className="w-24 h-1 mx-auto rounded-full"
                  style={{ backgroundColor: "#ff5722" }}
                ></div>
              </div>

              {/* First Row - Two Paragraphs Side by Side */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                    <div
                      className="p-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#fff5f2" }}
                    >
                      <MapPin
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        style={{ color: "#ff5722" }}
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        Shipping a car to or from Hawaii involves more than just
                        arranging transport; it requires local knowledge,
                        reliable coordination, and experience with port
                        logistics. At Rapid Auto Shipping, we specialize in
                        Hawaii car transport and work with all major ports,
                        including Honolulu, Kahului, Nawiliwili, Hilo, and Kona.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                    <div
                      className="p-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#e6f2ff" }}
                    >
                      <Shield
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        style={{ color: "#003366" }}
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        Whether you're shipping from Oahu to the mainland or
                        transporting the car to Maui, we understand the specific
                        requirements and schedules that come with island
                        shipping. Our team provides dependable service backed by
                        comprehensive insurance, real-time tracking, and
                        flexible options, including door-to-port and
                        port-to-door delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row - Third Paragraph Full Width */}
              <div
                className="rounded-2xl p-8 text-white shadow-xl"
                style={{
                  background: "linear-gradient(to right, #003366, #004080)",
                }}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                  <div className="bg-white/20 p-4 rounded-full flex-shrink-0">
                    <Users className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white leading-relaxed text-lg">
                      We serve individuals, military families, dealerships, and
                      snowbirds, helping them ship vehicles quickly and safely
                      across the Pacific. From car shipping Honolulu to vehicle
                      shipping Kauai and auto transport Maui, we offer a smooth
                      and affordable experience every time. With Rapid Auto
                      Shipping, you get more than just a service - you get peace
                      of mind.
                    </p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <Truck
                      className="w-12 h-12 sm:w-10 sm:h-10 mx-auto mb-3"
                      style={{ color: "#ff5722" }}
                    />
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      All Major Ports
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Complete port coverage
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <Clock
                      className="w-12 h-12 sm:w-10 sm:h-10 mx-auto mb-3"
                      style={{ color: "#003366" }}
                    />
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Real-Time Tracking
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Monitor every step
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <Shield
                      className="w-12 h-12 sm:w-10 sm:h-10 mx-auto mb-3"
                      style={{ color: "#ff5722" }}
                    />
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Full Insurance
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Comprehensive coverage
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <Star
                      className="w-12 h-12 sm:w-10 sm:h-10 mx-auto mb-3"
                      style={{ color: "#003366" }}
                    />
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Flexible Options
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Door-to-port delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step-by-Step Process Section */}
          <section className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse"
                style={{ backgroundColor: "#ff5722" }}
              ></div>
              <div
                className="absolute bottom-16 right-16 w-24 h-24 rounded-full animate-pulse delay-300"
                style={{ backgroundColor: "#003366" }}
              ></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-900 mb-4 leading-tight">
                  Step-by-Step Process
                </h2>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Shipping your vehicle to or from Hawaii is simple when you
                  know what to expect. Here’s how Rapid Auto Shipping makes it
                  easy in four straightforward steps:
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] rounded-full mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {steps.map((step, index) => (
                  <div key={index} className="group relative">
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#ff5722] to-[#003366] opacity-30 z-0"></div>
                    )}
                    <div
                      className={`relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 h-full ${
                        index % 2 === 0
                          ? "bg-gradient-to-br from-white to-orange-50/30 border-[#ff5722]/20 hover:border-[#ff5722]/40"
                          : "bg-gradient-to-br from-white to-blue-50/30 border-[#003366]/20 hover:border-[#003366]/40"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12  rounded-xl font-black text-lg mb-4 shadow-md ${
                          index % 2 === 0
                            ? "bg-gradient-to-br from-[#ff5722] to-orange-600 text-white"
                            : "bg-gradient-to-br from-[#003366] to-blue-800 text-white"
                        }`}
                      >
                        {step.number}
                      </div>
                      <h3
                        className={`text-xl font-bold mb-3 ${
                          index % 2 === 0 ? "text-[#ff5722]" : "text-[#003366]"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

           <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                      {/* Hero Section */}
                      <div className="relative overflow-hidden  text-white" style={{
                        background:
                          "linear-gradient(135deg, #003366 0%, #001a33 50%, #003366 100%)",
                      }}>
                       
                        <div className="relative max-w-6xl mx-auto px-6 py-16">
                          <div className="text-center">
                            <div className="flex justify-center mb-6">
                              <div className="relative">
                                <Ship className="w-16 h-16 text-orange-500 animate-bounce" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full animate-ping"></div>
                              </div>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                              How to Prepare Your Car for Hawaii Shipping
                            </h2>
                            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                              Getting your vehicle ready for Hawaii car shipping is simple
                              when you know what to expect. Follow these steps to ensure a
                              smooth and stress-free transport process:
                            </p>
                          </div>
                        </div>
                      </div>
          
                      {/* Preparation Steps Section */}
                      <div
                        className="max-w-7xl mx-auto px-6 py-16"
                        data-observe
                        id="preparation"
                      >
                        <div
                          className={`transition-all duration-1000 ${
                            isVisibles("preparation")
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-8"
                          }`}
                        >
                          <div className="grid md:grid-cols-2 gap-8 min-h-[600px]">
                            {/* Steps List */}
                            <div className="space-y-4">
                              {preparationSteps.map((step, index) => (
                                <div
                                  key={index}
                                  className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-500 hover:shadow-lg cursor-pointer ${
                                    currentStep === index
                                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white transform scale-105"
                                      : "bg-white hover:bg-gray-50 border border-gray-200"
                                  }`}
                                >
                                  <div
                                    className={`flex-shrink-0 p-2 rounded-lg ${
                                      currentStep === index
                                        ? "bg-white bg-opacity-20"
                                        : "bg-blue-900 text-white"
                                    }`}
                                  >
                                    {step.icon}
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-lg mb-2">
                                      {step.text}
                                    </h3>
                                    <p
                                      className={`text-sm ${
                                        currentStep === index
                                          ? "text-white text-opacity-90"
                                          : "text-gray-600"
                                      }`}
                                    >
                                      {step.detail}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
          
                            {/* Full Height Image */}
                            <div className="relative h-full min-h-[600px]">
                              <img 
                                src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1750155795/hawaii_auto_shipping_srbusm.webp" 
                                alt="Car being prepared for Hawaii shipping"
                                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                              />
                              {/* Optional overlay for better text readability if needed */}
                             
                            </div>
                          </div>
                        </div>
                      </div>

            {/* Considerations Section */}
            <div className="bg-white py-16" data-observe id="considerations">
              <div className="max-w-6xl mx-auto px-6">
                <div
                  className={`transition-all duration-1000 ${
                    isVisibles("considerations")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
                    Things to Consider When Transporting a Car to or from Hawaii
                  </h2>

                  <p className="text-gray-600 leading-relaxed text-2xl  text-center">
                    When it comes to Hawaii Auto Transport, there are a few
                    essential considerations that can make or break your
                    experience. Whether you're shipping a car to Hawaii or
                    returning it to the mainland, being informed helps ensure a
                    smooth and cost-effective process.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {considerations.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:border-opacity-30"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="rounded-2xl p-8 text-white shadow-xl mt-10"
                 style={{
              background:
                "linear-gradient(135deg, #003366 0%, #001a33 50%, #003366 100%)",
            }}
                >
                  <h3 className="text-4xl text-center text-white font-bold mb-5">
                    Get Your Free Hawaii Car Shipping Quote Today!
                  </h3>

                  <div className="flex items-start space-x-6 mb-8">
                    <div className="flex-1">
                      <p className="text-white leading-relaxed text-lg">
                        Planning to ship a car to Hawaii or from Hawaii? Rapid
                        Auto Shipping makes the process simple, fast, and
                        worry-free. Simply fill out our online quote form for an
                        instant estimate, or call us at (833) 233-4447 to speak
                        with one of our friendly shipping experts. Whether
                        you're moving a sedan, SUV, motorcycle, or luxury
                        vehicle, we offer reliable and affordable auto transport
                        in Hawaii tailored to your needs. Rapid Auto Shipping is
                        the trusted name in Hawaii car shipping. Book today and
                        let us take care of the journey across the Pacific!
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    {/* Get Instant Quote Button */}
                    <a
                      href="https://rapidautoshipping.com/calculator"
                      className="inline-block"
                    >
                      <button
                        className="px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:rotate-2 flex items-center space-x-3 animate-pulse"
                        style={{ backgroundColor: "#ff5722", color: "white" }}
                      >
                        <Calculator className="w-6 h-6" />
                        <span>Get Instant Quote</span>
                      </button>
                    </a>

                    {/* Phone Number Link */}
                    <a href="tel:+18332334447" className="inline-block">
                      <div className="flex items-center space-x-4 bg-white bg-opacity-10 rounded-xl px-6 py-4 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                        <Phone
                          className="w-8 h-8 animate-pulse"
                          style={{ color: "#ff5722" }}
                        />
                        <div className="text-left">
                          <p className="text-2xl font-bold text-white">
                            (833) 233-4447
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
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
                  Everything you need to know about our Hawaii auto transport
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

        
         <StatsSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Hawaii;
