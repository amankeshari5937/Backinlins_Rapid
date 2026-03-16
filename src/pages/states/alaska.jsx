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

const Alaska = () => {
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
    { text: "Nationwide & Alaska coverage", icon: Truck },
  ];

  const routes = [
    {
      title: "●	Mainland to Alaska Car Shipping",
      duration: "10 to 14 days",
      description:
        "This includes transport from your pickup location to the departure port (usually Tacoma, WA), then ocean shipping to Alaska, and final delivery (if selected).",
      icon: <Ship className="w-6 h-6" style={{ color: "#003366" }} />,
    },
    {
      title: "Alaska to Mainland Car Shipping",
      duration: "10 to 14 days ",
      description:
        ". Additional time may be needed for pickups in more remote Alaskan locations before your vehicle reaches the port.",
      icon: <Truck className="w-6 h-6" style={{ color: "#003366" }} />,
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
      title: "Competitive, transparent Alaska car shipping rates",
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
      title: "Years of experience in Alaska auto transport",
      color: "#ff5722",
    },
  ];



   const featuress = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Experience with Alaska logistics",
      description: "We've handled thousands of Alaska car shipping jobs. That means we know the routes, port regulations, and seasonal challenges that come with getting vehicles to and from the state safely."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Personalized service",
      description: "Whether you're shipping from Anchorage, Juneau, Fairbanks, or a smaller town, we tailor the process to fit your situation. No one-size-fits-all approach here, just dependable, friendly help every step of the way."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Flexible transport options",
      description: "From door-to-port and port-to-door car shipping Alaska to enclosed or open carriers, we offer choices to suit your budget and needs. Military member? Snowbird? Shipping multiple vehicles? We've got you covered."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted and transparent",
      description: "With thousands of satisfied customers and great auto transport reviews Alaska, we've built a reputation for doing what we say on time and with no surprises."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive pricing",
      description: "Our rates are fair and all-inclusive. Use our Alaska car shipping quote tool to get a free, instant estimate with no hidden fees, just clear answers."
    }
  ];
  const contentBoxes = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Customized Alaska Transport Solutions",
      description:
        "At Rapid Auto Shipping, we tailor our Alaska car shipping services to meet your unique needs. Whether you need door-to-port, port-to-door, open, or enclosed transport, we provide flexible options to suit your budget and vehicle requirements.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Transparent & Affordable Pricing",
      description:
        "Our pricing is clear, competitive, and free of hidden fees. Use our instant quote tool to get an accurate Alaska car shipping estimate based on your vehicle type, route, and service preferences.",
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
        "Start with a free, instant Alaska car shipping quote online or by phone. Once you confirm the details such as vehicle type, transport method, and delivery preference, we’ll lock in your rate and schedule",
    },
    {
      number: 2,
      title: "Prepare Your Vehicle",
      description:
        "Before pickup, we’ll guide you through a simple prep checklist (more on that below). This ensures your vehicle is ready for safe and legal transport across both land and sea.",
    },
    {
      number: 3,
      title: "Vehicle Pickup and Ocean Transport",
      description:
        "We’ll pick up your vehicle from your door (or designated location) and transport it to the nearest departure port, typically in Tacoma, WA. From there, your car is securely loaded onto an ocean vessel headed for Alaska.",
    },
    {
      number: 4,
      title: "Delivery or Port Pickup",
      description:
        "Depending on your choice, we’ll either deliver your vehicle directly to your address in Alaska or you can pick it up at the port. We’ll provide full tracking and notify you when your car is ready.",
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
    question: "How much does it cost to ship a car to or from Alaska?",
    answer:
      "The cost typically ranges from $1,500 to $3,000, depending on your vehicle type, pickup/delivery location, transport method, and time of year. Use our free Alaska car shipping quote tool for an exact price based on your route.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "How long does Alaska car shipping take?",
    answer:
      "Most shipments take 10–14 days from pickup to delivery. Timing can vary based on distance, port schedules, and weather conditions, especially during winter months.",
  },
  {
    icon: <Car className="w-5 h-5" />,
    question: "Can I ship a non-running vehicle to Alaska?",
    answer:
      "Yes, we can transport inoperable vehicles to or from Alaska, but special equipment may be required. Be sure to let us know in advance so we can arrange the appropriate carrier.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Should I choose open or enclosed auto transport for Alaska?",
    answer:
      "Open transport is more affordable and commonly used. Enclosed auto transport Alaska is ideal for high-value, luxury, or classic cars needing extra protection from weather and road debris.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    question: "Do I need to be present for pickup or delivery?",
    answer:
      "Yes, or you can authorize someone to act on your behalf. A signature and inspection are required at both pickup and drop-off to verify the vehicle's condition.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    question: "Is my car insured during Alaska vehicle shipping?",
    answer:
      "Absolutely. Every shipment is covered by the carrier's insurance. We'll provide full policy details before your vehicle is picked up. Additional coverage is available upon request.",
  },
  {
    icon: <Crown className="w-5 h-5" />,
    question: "What documents are required to ship a car to Alaska?",
    answer:
      "You'll need a valid government-issued ID, the vehicle title or registration, and a notarized letter of authorization if the car isn't registered in your name. We'll help guide you through the port's specific requirements.",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "Can I ship personal items in my car to Alaska?",
    answer:
      "It's best to remove all personal belongings. Ports and carriers often prohibit them for safety and insurance reasons. If needed, contact us about your specific case before shipping.",
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
        "The farther your vehicle has to travel, especially between remote or rural areas, the higher the shipping cost. Routes between major hubs like Seattle and Anchorage tend to be more cost-effective due to higher volume and accessibility.",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Vehicle Type:",
      description:
        "Larger or heavier vehicles like SUVs, trucks, and vans cost more to ship than compact cars. If you’re transporting a luxury, classic, or inoperable vehicle, additional care or equipment may also increase the price.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transport Method:",
      description:
        "Choosing between open and enclosed auto transport Alaska can affect your rate. Open carriers are more affordable and widely used, while enclosed carriers offer premium protection for high-value or vintage cars.",
    },
    {
      icon: <Anchor className="w-6 h-6" />,
      title: "Port Access:",
      description:
        "Easy access to major ports like Tacoma, WA, or Anchorage, AK keeps prices lower. If your pickup or delivery location is far from the port, additional overland transport may be needed, which adds to the cost.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Seasonal Demand:",
      description:
        "Like most industries, car shipping to Alaska experiences seasonal peaks. Summer months often see higher demand and prices, especially from snowbirds or people relocating. Booking during the off-season or in advance can help you save.",
    },
  ];

  const pricingData = [
    {
      route: "Seattle, WA to Anchorage, AK (standard sedan, open transport)",
      transport_details:"",
      cost: "$1,750",
      icon: <Ship className="w-5 h-5" />,
    },
    {
      route: "Seattle to Kahului, CA to Fairbanks, AK (SUV, enclosed transport)",
      transport_details:"",
      cost: "$2,900",
      icon: <Ship className="w-5 h-5" />,
    },
    {
      route: "Honolulu to New York City, AK (standard sedan, open transport)",
      transport_details:"",
      cost: "$2,100",
      icon: <Ship className="w-5 h-5" />,
    },
  ];

  const preparationSteps = [
    {
      icon: <Car className="w-5 h-5" />,
      text: "Wash your car thoroughly",
      detail:
        "A clean vehicle makes it easier to inspect for any pre-existing scratches, dents, or damage before transport. This helps protect both you and the carrier.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      text: "Remove all personal items",
      detail:
        "Personal belongings aren't covered by transport insurance and may shift during shipping. Be sure to clear out the interior, trunk, and glove box before your pickup.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Keep your gas tank under ¼ full",
      detail:
        "Shipping regulations require a near-empty tank for ocean transport. A quarter tank or less is ideal, just enough to drive the car on and off the carrier.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Check for leaks or mechanical issues",
      detail:
        "Vehicles must be in running condition unless arranged otherwise. Let us know if your car has any issues so we can plan accordingly.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Provide a working key",
      detail:
        "Carriers will need a complete set of keys, including those for any alarm systems or locked compartments. If you have a key fob, make sure it’s fully functional.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Disable any alarms",
      detail:
        "Disable aftermarket or factory alarms to prevent unnecessary disruptions during shipping. If left active, alarms may cause delays or even battery drainage.",
    },
    {
      icon: <Ship className="w-5 h-5" />,
      text: "Follow port-specific guidelines",
      detail:
        "Each port has its own rules for drop-off, ID checks, and vehicle condition. Don’t worry, we’ll walk you through exactly what you need to bring and do.",
    },
  ];

  const considerations = [
    {
      title: "Plan Around Weather and Seasonality",
      content:
        "Alaska’s seasons significantly impact auto transport. Snow, icy roads, and limited daylight in winter months can delay pickups and deliveries, especially in remote areas. Summer is the most popular (and reliable) time to ship, but also the busiest. Booking early helps lock in better rates and preferred dates.",
    },
    {
      title: "Be Aware of Port Schedules and Requirements",
      content:
        "Most car shipments to and from Alaska pass through major ports like Tacoma, Anchorage, and Whittier. These ports follow strict schedules and guidelines. Missing a port window can mean waiting days for the next departure. We’ll help you stay on schedule and understand what documentation and preparation are needed.",
    },
    {
      title: "Choose the Right Shipping Method",
      content:
        "Not all vehicles or situations are the same. Open transport works well for everyday cars and lower-cost moves, while enclosed shipping is ideal for luxury or classic vehicles needing extra protection. Also, consider whether door-to-port or port-to-door service makes more sense based on your location and budget.",
    },
    {
      title: "Understand Insurance and Inspection Procedures",
      content:
        "Your vehicle will be inspected at pickup and delivery to document its condition. Basic insurance is included in most shipments, but it’s smart to review the coverage and consider supplemental protection for high-value cars. Always remove personal items, as these are not covered by standard carrier policies.",
    },
    {
      title: "Know the Full Cost Ahead of Time",
      content:
        "Alaska car shipping includes more than just mileage; there are port handling fees, ocean transport costs, and sometimes local delivery charges. Be cautious of unusually low quotes, as they may leave out critical services. At Rapid Auto Shipping, we provide all-inclusive pricing so you know exactly what you're paying for",
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
          Alaska Car Shipping Services | Rapid Auto Shipping
        </title>
        <meta
          name="description"
          content="Rapid Auto Shipping offers reliable, affordable Alaska car shipping services with door-to-port, enclosed transport, and free quotes. Get started today!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/states/alaska"
        />
        <meta
          property="og:title"
          content="Affordable & Safe Alaska Car Shipping Services | Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Alaska car shipping Services made easy with Rapid Auto Shipping. Affordable rates, trusted insured carriers, and convenient door-to-port service. Get your free quote today!"
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/states/alaska"
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
      name: "alaska Auto Transport Service",
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
          name: "alaska",
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
        name: "alaska Vehicle Transport Options",
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
                "Premium enclosed container transport providing maximum protection for luxury, classic, or high-value vehicles during ocean transit to alaska.",
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
                "Complete pickup from your mainland location and delivery to alaska departure port, with professional loading onto ocean vessel.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Port-to-Door Service",
              description:
                "Pickup from alaska port and delivery to your specified destination address on the mainland or within alaska islands.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Port-to-Port Service",
              description:
                "Budget-friendly option with customer drop-off and pickup at designated ports in alaska (Honolulu, Hilo, Kahului, Nawiliwili) and mainland (Oakland, Seattle, Los Angeles).",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Inter-Island Transport",
              description:
                "Vehicle shipping between alaskaan islands including Oahu, Maui, Big Island, Kauai, and Molokai.",
            },
          },
        ],
      },
      description:
        "Professional auto transport services to and from alaska covering ocean shipping between the alaskaan Islands and mainland United States. Specializing in RoRo and container shipping methods with door-to-port, port-to-door, and port-to-port options for cars, SUVs, trucks, motorcycles, and RVs.",
      url: "https://rapidautoshipping.com/states/alaska",
      serviceType: [
        "VehicleTransport",
        "OceanVehicleTransport",
        "alaskaVehicleTransport",
        "InterIslandTransport",
      ],
      serviceArea: {
        "@type": "GeoShape",
        description: "alaska to mainland United States and inter-island transport corridor",
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
          name: "alaska Ports",
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
            name: "alaska",
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
        name: "Get alaska Shipping Quote",
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
          name: "alaska Auto Transport",
          item: "https://rapidautoshipping.com/states/alaska",
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
          name: "How much does it cost to ship a car to alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost to ship a car to alaska typically ranges from $1,597 to $2,500 for RoRo ocean shipping, depending on the vehicle size, departure port, and destination island. Container shipping costs range from $2,200 to $3,500 for premium protection."
          }
        },
        {
          "@type": "Question", 
          name: "How long does it take to ship a car to alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shipping a car to alaska typically takes 8-19 days total, including 5-8 days for ocean transit and additional time for port processing, loading, and delivery. Transit times vary based on departure location and destination island."
          }
        },
        {
          "@type": "Question",
          name: "Which ports serve alaska auto transport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "alaska ports include Honolulu (Oahu), Hilo and Kawaihae (Big Island), Kahului (Maui), and Nawiliwili (Kauai). Mainland departure ports include Oakland and Long Beach (California), Seattle (Washington), and other West Coast locations."
          }
        },
        {
          "@type": "Question",
          name: "What shipping methods are available for alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "alaska auto transport offers Roll-on/Roll-off (RoRo) shipping where vehicles are driven onto cargo ships, and container shipping for premium protection. Both methods include door-to-port, port-to-door, and port-to-port service options."
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
                alt="Alaska Car Shipping Service"
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
                  Alaska Car Shipping{" "}
                  <span className="text-[#ff5722]">Services</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed max-w-3xl drop-shadow-xl backdrop-blur-md bg-[#001933]/20 p-3 sm:p-4 rounded-lg border border-[#001933]/30 text-center sm:text-left">
                  When it comes to shipping a vehicle to and from Alaska, many challenges come due to the remote location and weather conditions. At Rapid Auto Shipping, we specialize in Alaska Auto Transport, offering secure and affordable options to ship your vehicle via key ports such as Anchorage, Whittier, and Kodiak. Whether you're relocating, selling a vehicle, or moving for military service, our team ensures a stress-free Alaska car shipping experience tailored to your needs.
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
                Alaska Car Shipping?
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              When it comes to Alaska car shipping, you need a company that combines experience, reliability, and affordability, and that's where Rapid Auto Shipping comes in. Whether you're moving to the Last Frontier or just need temporary transport, we make it easy to{" "}
              <span className="font-semibold" style={{ color: "#ff5722" }}>
                ship car to Alaska
              </span>{" "}
              or{" "}
              <span className="font-semibold" style={{ color: "#ff5722" }}>
                ship car from Alaska
              </span>{" "}
              to mainland.
            </p>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We specialize in{" "}
              <span className="font-bold" style={{ color: "#ff5722" }}>
                Alaska auto transport
              </span>
              , with a dedicated team that understands the unique challenges of shipping vehicles in and out of the state. From navigating port logistics to ensuring your car is secure for ocean transport, we handle it all with care and professionalism.
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

          {/* Bottom Content */}
          <div className="text-center">
            <p className="text-xl text-gray-300 max-w-7xl mx-auto leading-relaxed mb-6">
              Our goal is to offer affordable, nationwide car shipping to Alaska without compromising on service. That means transparent pricing, flexible scheduling, and real-time updates so you always know where your vehicle is. Plus, with our range of services like{" "}
              <span className="font-semibold" style={{ color: "#ff5722" }}>
                door-to-port and port-to-door shipping
              </span>
              , you can choose what fits your schedule and budget.
            </p>

            <p className="text-xl text-gray-300 max-w-7xl mx-auto leading-relaxed">
              Whether you're shipping to{" "}
              <span className="font-semibold" style={{ color: "#ff5722" }}>
                Anchorage, Juneau, Fairbanks
              </span>
              , or smaller towns like Ketchikan, Rapid Auto Shipping is here to help. And with years of experience handling{" "}
              <span className="font-semibold" style={{ color: "#ff5722" }}>
                military car shipping, snowbird auto transport, and dealership logistics
              </span>
              , we're equipped to handle just about any Alaska vehicle transport need.
            </p>

            {/* Call to Action */}
            <div className="mt-12">
              <div
                className="inline-flex items-center gap-3 backdrop-blur-lg rounded-full px-8 py-4 border hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{
                  backgroundColor: "rgba(255, 87, 34, 0.15)",
                  borderColor: "rgba(255, 87, 34, 0.4)",
                }}
              >
                <Phone className="w-5 h-5" style={{ color: "#ff5722" }} />
                <span className="font-semibold text-lg" style={{ color: "#ff5722" }}>
                   <Link href="tel:+18332334447">Call (833) 233-4447 </Link> 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* Alaska Car Shipping Services Section */}
          <section className="min-h-[500px] bg-gradient-to-br from-blue-50 to-orange-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Our{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent">
                    Alaska Car Shipping
                  </span>
                  <br />
                  <span className="text-4xl md:text-5xl">Services</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
                  At Rapid Auto Shipping, we offer a range of flexible, reliable Alaska auto transport services to meet the needs of individuals, families, military members, dealerships, and seasonal travelers. Whether you're looking to ship a single car or a fleet of vehicles, we've got you covered with efficient and safe vehicle transport Alaska.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#ff5722] mb-3">
                    Door-to-Port Car Shipping
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    With door-to-port car shipping Alaska, we pick up your vehicle right from your home or business on the mainland and transport it directly to the departure port. From there, it’s securely loaded onto a vessel bound for Alaska. This option is perfect if you want a seamless experience with minimal effort on your part.
                  </p>
                </div>
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">
                    Port-to-Door Car Shipping
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Already have your car at the port? No problem. Our port-to-door shipping service handles the final leg of your car's journey, delivering it safely from the Alaska port to your final destination. It's a convenient solution for residents, dealerships, or anyone needing flexible car shipping from Alaska
                  </p>
                </div>
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#ff5722] mb-3">
                    Open vs. Enclosed Transport
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    You can choose between open and enclosed transport depending on your vehicle’s needs. Open carriers are more cost-effective and great for standard vehicles, while enclosed carriers provide extra protection from the elements, ideal for luxury car transport Alaska or classic vehicles needing that added layer of care.
                  </p>
                </div>
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">
                    Multi-Vehicle & Dealership Transport
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Need to ship multiple vehicles? We specialize in multi-vehicle shipments for families, businesses, and dealerships. Whether it's five cars or fifty, we coordinate every step of the Alaska vehicle shipping process to ensure everything arrives on time and in excellent condition.
                  </p>
                </div>
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#ff5722] mb-3">
                    Military Car Shipping
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Serving those who serve. We proudly provide military car shipping to and from Alaska, offering flexible options tailored to PCS moves. We understand the urgency and logistics involved in military relocations and work hard to ensure a smooth transition.
                  </p>
                </div>
                <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">
                    Snowbird Auto Transport
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Heading south for the winter? Our snowbird car shipping Alaska services make it easy to send your vehicle to warmer states and bring it back when you're ready to return. We coordinate both ends of the journey, making seasonal moves stress-free and cost-effective.
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
                      How Much Does It Cost to Ship a Car to or from Alaska?
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
                        Alaska vehicle shipping
                      </span>{" "}
                       can vary quite a bit depending on your specific needs. On average, shipping a car to or from Alaska can range from $1,500 to $3,500, but several factors play into the final price. Whether you're shipping from Anchorage, Juneau, or Fairbanks or sending a car back to the mainland, Rapid Auto Shipping provides competitive car shipping rates Alaska and transparent quotes so you always know what to expect.
                    </p>
                    <p
                      className="text-lg lg:text-xl text-blue-200 leading-relaxed animate-slide-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      We offer instant Alaska car shipping quotes online or over the phone, tailored to your vehicle type, route, and transport preferences. We pride ourselves on affordable car shipping Alaska without cutting corners on safety or service.
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
                          $1,500 to $3,500
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
                    Our pricing includes pickup, ocean transport, and delivery (depending on your service selection), so there are no surprise fees. For the most accurate estimate, we recommend using our car shipping calculator Alaska or speaking directly with one of our auto transport experts.
                  </p>
                </div>
              </div>
            </div>

           {/* Factors Section */}
<div className="py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 animate-slide-up">
     <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
  <span className="bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent">
    Factors That Influence
  </span>
  <br />
  <span className="text-3xl md:text-4xl">Car Shipping Cost to Alaska:</span>
</h2>
      <p
        className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        Shipping a car to or from Alaska involves more logistics than standard mainland transport, and several variables can impact your total cost. Here's what goes into determining your Alaska car shipping rate:
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
          {/* Mobile: Icon on top, Desktop: Icon on side */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
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
            <div className="flex-1 text-center sm:text-left">
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
                              className="w-14 h-10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
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
                    
                      <p
                        className="text-lg font-semibold "
                        style={{ color: "#003366" }}
                      >
                        These are average estimates. Actual pricing may vary depending on timing, availability, and vehicle specifics.
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
                 
               <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
  How Long Does It Take to
  <br />
  <span className="bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent">
    Ship a Car to or from Alaska?
  </span>
</h2>

                </div>
                <p
                  className="text-lg max-w-3xl mx-auto leading-relaxed"
                  style={{ color: "#003366", opacity: 0.8 }}
                >
                  Shipping a car to or from Alaska involves a few key steps: ground transport, ocean shipping, and final delivery, and while it’s not instant, we make it as efficient as possible. Your timeline will depend on distance, location, and seasonal conditions.
                </p>
              </div>

              {/* Shipping Routes Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
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
               <p className="text-blue-200 text-lg w-full text-center mb-10">
                    <span
                      style={{ color: "#ff5722" }}
                      className="font-semibold animate-pulse"
                    >We provide regular updates and work closely with you to coordinate delivery windows so you’re never left guessing. </span></p>
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
                  Use our instant calculator or speak with our Alaska shipping
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

        <section className="relative py-20 px-4 overflow-hidden bg-[#003366]">
      {/* Animated Background */}
     
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-400 rounded-full opacity-25 animate-ping"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Why Alaska Chooses{' '}
         
              Rapid Auto Shipping
            
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Alaskans have unique transportation needs, and they choose Rapid Auto Shipping because we understand them. 
            From extreme weather to remote locations, we've built our Alaska car transport services around reliability, 
            efficiency, and customer care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuress.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/50 to-blue-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-[#ff5722] rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <p className="text-white text-lg font-semibold mb-4">
              Rapid Auto Shipping isn't just another Alaska car shipping company
            </p>
            <p className="text-orange-100 text-xl font-bold">
              We're your reliable partner in navigating the road (and sea) ahead.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
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
                <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-900 mb-4 leading-tight">
                  Step-by-Step Alaska Auto Shipping Process
                </h2>
                <div className="text-xl md:text-xl font-bold text-gray-800 mb-6">
                  At Rapid Auto Shipping, we’ve simplified the entire Alaska car transport process into a clear, step-by-step journey. Whether you ship car to Alaska or from Alaska to the mainland, here’s exactly what to expect:
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
            <p className="text-xl  text-[#003366]  text-center px-12 py-12">
                    From start to finish, our goal is to make auto transport to Alaska as stress-free and transparent as possible. Whether you're moving, deploying, or just shipping seasonally, we handle the heavy lifting literally.
                  </p>
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
                    How to Prepare Your Car for Alaska Shipping
                  </h2>
                  <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    A little preparation goes a long way in ensuring your vehicle arrives safely and on time. Whether you're using door-to-port or port-to-door car shipping Alaska, following these simple steps will help your shipment go smoothly:
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
                      src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1750154818/alaska_auto_shipping_image_bkl3a4.webp" 
                      alt="Car being prepared for alaska shipping"
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
                 <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center leading-tight">
  Things to Consider When
  <br />
  <span className="bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent">
    Transporting a Car to or from Alaska
  </span>
</h2>

                  <p className="text-gray-600 leading-relaxed text-2xl  text-center">
                   Shipping a vehicle to or from Alaska is a bit more involved than standard mainland transport. From logistics to legal requirements, here are some key things to keep in mind before booking your shipment.
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
                    Get Your Free Alaska Car Shipping Quote Today!
                  </h3>

                  <div className="flex items-start space-x-6 mb-8">
                    <div className="flex-1">
                      <p className="text-white leading-relaxed text-lg">
                        Ready to ship your car to or from Alaska? Whether you’re relocating, serving in the military, heading south for the winter, or buying a vehicle remotely, Rapid Auto Shipping is here to make the process easy and stress-free. <br />

We offer fast, accurate, and no-obligation Alaska car shipping quotes with no hidden fees, upsells, or pressure. Just straightforward pricing, professional auto transport Alaska service, and a team that genuinely cares about getting your vehicle where it needs to go, safely and on time. <br />

All it takes is a few clicks or a quick call to get started. Let us know your vehicle type, origin, and destination, and preferred transport method open or enclosed, door-to-port, or port-to-door and we’ll take care of the rest. Get your instant quote today and discover why Rapid Auto Shipping is a top choice for Alaska auto transport across the U.S.

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

        
         <StatsSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Alaska;
