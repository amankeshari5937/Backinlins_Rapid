"use client";

import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import { Calculator, Headphones } from "lucide-react";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import StatsSection from "@/components/CommonComponents/StatsSection";
import TestimonialSwiperAcross from "@/components/CommonComponents/Across-review";
import {
  Truck,
  Shield,
  Clock,
  DollarSign,
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Route,
  Eye,
  Plus,
  Minus,
  Car,
  CreditCard,
} from "lucide-react";
import { FaCar, FaShieldAlt, FaStar, FaHome } from "react-icons/fa";
import Image from "next/image";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const fromInputRef = useRef(null);
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

  const benefits = [
    { text: "No personal info required", icon: Shield },
    { text: "Quotes in under 1 minute", icon: Zap },
    { text: "Transparent pricing with no hidden fees", icon: CheckCircle },
    { text: "AI-powered accuracy", icon: Star },
    { text: "Nationwide coverage", icon: Truck },
  ];

  const contentBoxes = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Customized Transport Solutions",
      description:
        "At Rapid Auto Shipping, we are a car transport company that understands that every customer is unique and has different needs when it comes to vehicle transportation. For this reason, we offer a wide range of convenient auto transport options that cater to your specific needs. Whether you need open or enclosed transport, standard or expedited delivery, or a combination of different services, we have you covered. Our experienced team will work with you to create a customized plan and give you the best car shipping rates that suit your requirements and budget.",
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Transparent & Competitive Pricing",
      description:
        "We understand that vehicle transportation can be expensive, so we offer our customers competitive pricing. Our car shipping price calculator understands this, and that is why our pricing is transparent and straightforward, with no hidden fees or surprises. We provide you with a free, no-obligation auto transport quote upfront, so you can view the price and carrier availability for your specific route. Our pricing is backed by our proprietary car shipping rate algorithm, which guarantees we'll provide the most accurate vehicle shipping quote for your vehicle shipment.",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Customer Support",
      description:
        "At Rapid Auto Shipping, we pride ourselves on providing excellent customer service to our clients. Our team of experienced transport specialists is available 24/7 to answer any questions you may have and provide you with updates on the status of your shipment. We also provide real-time tracking so that you can monitor your vehicle throughout the entire transport process. We aim to ensure you have a stress-free and positive car shipping experience with us.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fully Insured & Protected",
      description:
        "We understand your vehicle is a valuable asset, so we take every precaution to ensure it is transported safely and securely. We are fully insured and bonded, so your vehicle is protected throughout the transport process. In the unlikely event that something goes wrong, you can rest assured that we offer the most comprehensive coverage options for complete peace of mind.",
    },
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      title: "Customized Solutions",
      description:
        "We understand that every customer is unique and has different needs regarding vehicle transportation. We offer a wide range of convenient auto transport options including open or enclosed transport, standard or expedited delivery, tailored to your specific requirements and budget.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          ></path>
        </svg>
      ),
      title: "Transparent Pricing",
      description:
        "Our pricing is transparent and straightforward, with no hidden fees or surprises. We provide free, no-obligation auto transport quotes upfront backed by our proprietary rate algorithm, guaranteeing the most accurate vehicle shipping quote for your shipment.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
          ></path>
        </svg>
      ),
      title: "24/7 Customer Service",
      description:
        "Our experienced team of transport specialists is available 24/7 to answer questions and provide shipment updates. We offer real-time tracking so you can monitor your vehicle throughout the entire transport process for a stress-free experience.",
    },
  ];

  const badges = [
    { text: "Fully Licensed", icon: "✓" },
    { text: "Bonded & Insured", icon: "✓" },
    { text: "Real-time Tracking", icon: "✓" },
  ];

  const factors = [
    {
      id: "1",
      title: "Vehicle Information",
      color: "from-[#ff5722] to-[#ff5722]",
      borderColor: "border-[#ff5722]",
      iconColor: "text-[#ff5722]",
      items: [
        {
          icon: "fas fa-route",
          title: "Vehicle Type and Size",
          description:
            "The calculator needs to know if it's a sedan, truck, SUV, or any other type of vehicle. Your vehicle's model, make, year, and size determine the price. Auto transport cost also varies with the car's overall size, as this can affect the space needed on the trailer.",
        },
        {
          icon: "fas fa-road",
          title: "Operational Condition",
          description:
            "The calculator will likely need to know whether the vehicle is running. Auto transport costs will be less for a running car than for a vehicle in a non-running condition, as the car shipping rate calculator will factor in the requirement for specialised equipment in its shipping process.",
        },
      ],
    },
    {
      id: "2",
      title: "Shipping Method",
      color: "from-[#003366] to-[#003366]",
      borderColor: "border-[#003366]",
      iconColor: "text-[#003366]",
      items: [
        {
          icon: "fas fa-car",
          title: "Method of Transport",
          description:
            "The transport method used for car shipping also affects the shipping car prices. Open or enclosed transport options have different costs, so this must be specified. The car transport estimate will be less for an open method of transportation, but an enclosed method will cost more.",
        },
        {
          icon: "fas fa-cogs",
          title: "Shipping Speed",
          description:
            "Express or expedited shipping will typically have a higher auto transport quote, arrived at by vehicle shipping cost calculator, since your vehicle is given priority in pickup and delivery over other vehicles.",
        },
      ],
    },
    {
      id: "3",
      title: "Location Information",
      color: "from-[#ff5722] to-[#003366]",
      borderColor: "border-[#ff5722]",
      iconColor: "text-[#ff5722]",
      items: [
        {
          icon: "fas fa-shield-alt",
          title: "Pick-up and Delivery Locations",
          description:
            "The Auto shipping rate depend on pickup and delivery locations for the shipment. The distance between these locations is a significant factor in determining the overall cost. Shipping between major cities and busy transport points is generally less expensive because carriers are often available. If, however, your pickup or delivery point is a rural or isolated area, the car shipping quote will be higher since fewer carriers are available for those routes.",
        },
        {
          icon: "fas fa-clock",
          title: "Desired Pick-up and Drop-off Dates",
          description:
            "The calculator needs to understand when you want the vehicle picked up and delivered to help determine the best possible routes and potential surge pricing.",
        },
      ],
    },
    {
      id: "4",
      title: "Other Factors",
      color: "from-[#003366] to-[#ff5722]",
      borderColor: "border-[#003366]",
      iconColor: "text-[#003366]",
      items: [
        {
          icon: "fas fa-calendar-alt",
          title: "Time of Year",
          description: `Certain times of the year, like holidays or peak seasons, may have higher shipping costs. Our <a href="https://rapidautoshipping.com/services/car-shipping-calculator" style="color:blue;">car shipping price calculator</a> determines auto car transport quotes after considering the time of the year the vehicle is being transported.`,
        },
        {
          icon: "fas fa-gas-pump",
          title: "Fuel Prices",
          description:
            "Fuel prices are also a factor that can fluctuate and impact shipping costs while determining the car shipping rates.",
        },
      ],
    },
  ];

  const faqData = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "What is the cost of moving a car to another state?",
      answer:
        "To determine how much it will cost to move a car to another state, you can either use our instant car shipping cost calculator above to get a free online car shipping quote or call us at (833) 233-4447 to receive a quote from our car shipping cost estimator.",
    },
    {
      icon: <Calculator className="w-5 h-5" />,
      question: "How is my auto transport cost calculated?",
      answer:
        "When determining your car transport cost, we consider a few things to provide you with an accurate auto transport quote. The mileage between the origin and destination is the most significant factor contributing to your total rate. In addition to the distance of your relocation, another factor is the type and condition of the vehicle being shipped. The final factor is the date of desired transportation. These factors are the most significant contributors to determining accurate vehicle shipping costs.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      question: "How do I pay for my auto shipping?",
      answer:
        "We accept all major credit cards, electronic transfer, postal money order, and bank/certified check for the deposit or full pre-payment of your shipment. If a balance is due upon delivery, it can be paid directly to the driver in cash, by bank/certified check, or by postal money order.",
    },
    {
      icon: <Car className="w-5 h-5" />,
      question: "Can I pay the whole auto transport cost with my credit card?",
      answer:
        "Yes, you can pay the whole auto transport cost via credit card. If you want to pay in full online, you can do so at the time of booking, either online or by phone with a shipping agent. This option allows you to make a convenient, one-time payment with a credit or debit card. You also have the option of paying a deposit with your credit card and then paying the rest of your remaining balance with cash upon delivery.",
    },
  ];

  // 1. RouteIcon (Fixed placeholder content)
  const RouteIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3H4a1 1 0 01-1-1V4zm10 0a1 1 0 011-1h3a1 1 0 011 1v3h-4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3H4a1 1 0 01-1-1v-3zm10 0a1 1 0 011-1h3a1 1 0 011 1v3h-4a1 1 0 01-1-1v-3z" />
    </svg>
  );

  // 2. TruckIcon
  const TruckIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zm11 3a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17 a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z" />
      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );

  // 3. WeightIcon
  const WeightIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-1 .89l-1 9A1 1 0 004 18h12a1 1 0 001-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
      />
    </svg>
  );

  // 4. CalendarIcon
  const CalendarIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      />
    </svg>
  );

  // 5. PlusIcon
  const PlusIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
      />
    </svg>
  );

  // 6. RoadIcon
  const RoadIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v4a1 1 0 00.293.707L6 12.414V11a1 1 0 011-1h4a1 1 0 011 1v1.414l3.707-3.707A1 1 0 0016 8V4a1 1 0 00-.293-.707l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 00-.293.707z"
      />
    </svg>
  );

  const steps = [
    {
      number: 1,
      title: "Provide the Necessary Information:",
      description:
        "You can obtain an instant car shipping quote through our online form, or by calling 833 233 4447 to speak with our friendly auto transport coordinator, or by filling out the form online on our website, rapidautoshipping.com. Please compare our prices and delivery services; our auto transport quotes are highly competitive. Please provide us with your details, including the pickup and delivery location and the zip code. Vehicle details like make, model, condition, and desired shipping method (open or enclosed). That way, we can provide you with the best quote possible.",
    },
    {
      number: 2,
      title: "Get a Quote",
      description:
        "After providing all the necessary information, wait a few moments for our car shipping price calculator to work on it and collect a tailored, no-obligation vehicle transport quote. At Rapid Auto Shipping, we refuse to adhere to any hidden prices or hidden fees and instead are dedicated to providing our customers with a straightforward price. What you see in the car shipping quote is what you pay—simple as that!",
    },
    {
      number: 3,
      title: "Book Your Order",
      description:
        "Once you get the auto transport quote, the representative will contact you ASAP, or you can call (833) 233-4447 to speak with one to confirm the services and delivery timeframe for booking your order. Once you confirm your booking, we ask for a deposit to confirm your shipment, and the remaining balance can be paid upon vehicle delivery.",
    },
  ];

  const factorss = [
    {
      icon: RouteIcon,
      title: "Distance",
      description: `The distance between the pickup and the delivery location will be calculated for the automobile shipment. Longer distances naturally increase auto transport costs, as calculated by our car shipping price calculator, since the carrier needs to travel further.`,
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: TruckIcon,
      title: "Type of Carrier",
      description:
        "Open carriers are generally cheaper than enclosed carriers, so you'll get a lower car shipping quote. Enclosed carriers offer more protection but come at a higher price, and hence, the car shipping cost calculator will give a higher car transportation quote.",
      gradient: "from-blue-900 to-blue-800",
    },
    {
      icon: WeightIcon,
      title: "Vehicle Size and Weight",
      description:
        "Larger and heavier vehicles take up more space on the carrier and require more fuel, leading to a higher auto shipping quote.",
      gradient: "from-orange-600 to-blue-900",
    },
    {
      icon: CalendarIcon,
      title: "Seasonality",
      description:
        "Car shipping rates tend to increase during peak seasons like summer and holidays due to higher demand. Off-peak months like fall and winter might offer lower auto shipping quotes.",
      gradient: "from-blue-800 to-orange-500",
    },
    {
      icon: PlusIcon,
      title: "Additional Services",
      description:
        "Other car transport services like expedited shipping, additional insurance, and other special requests can add to the overall automobile shipping quotes.",
      gradient: "from-orange-500 to-blue-900",
    },
    {
      icon: RoadIcon,
      title: "Route",
      description:
        "The specific route and any potential traffic delays can also impact the final auto transport cost.",
      gradient: "from-blue-900 to-orange-600",
    },
  ];

  const testimonials = [
    {
      name: "Michael Johnson",
      location: "New York, NY",
      rating: 5,
      text: "The AI calculator provided an accurate quote within seconds. Saved me hundreds compared to other companies!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Sarah Williams",
      location: "Austin, TX",
      rating: 5,
      text: "Smart scheduling saved me 15% by shipping a week earlier. Fantastic service!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Robert Chen",
      location: "Los Angeles, CA",
      rating: 5,
      text: "As a car collector, I rely on their accurate quotes and fast delivery. Highly recommend!",
      avatar: "https://via.placeholder.com/50",
    },
  ];

  return (
    <>
      <Head>
        <title>Car Shipping Calculator: Instant Quote in 1 Minute!</title>
        <meta
          name="description"
          content="Get a free instant quote with our car shipping calculator. No personal info needed. Takes 1 minute to get an accurate shipping quote."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/services/car-shipping-calculator"
        />
        <meta
          property="og:title"
          content="Car Shipping Calculator - Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Get a free instant quote with our car shipping calculator. No personal info needed. Takes 1 minute to get an accurate shipping quote."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/services/car-shipping-calculator"
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
                      "https://rapidautoshipping.com/services/car-shipping-calculator",
                    name: "Car Shipping Calculator",
                  },
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
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/q_70,f_webp/v1747984450/Car-Shipping-Calculator_xhq3te.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/q_20,e_blur:200/v1747984450/Car-Shipping-Calculator_xhq3te.webp"
                className="w-full h-full object-cover"
                onError={() => console.error("Image failed to load")}
                sizes="(max-width: 600px) 600px, 800px"
                style={{ aspectRatio: "2/1" }}
              />

              <div className="absolute inset-0 bg-black/60"></div>
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
                <div className="space-y-4 sm:space-y-6">
                  <h1
                    className="text-5xl sm:text-6xl lg:text-5xl drop-shadow-2xl font-bold text-center sm:text-left text-white"
                    style={{ fontSize: "50px" }}
                  >
                    Car Shipping{" "}
                    <span className="text-[#ff5722]">Calculator</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed max-w-3xl drop-shadow-xl backdrop-blur-md bg-[#001933]/20 p-3 sm:p-4 rounded-lg border border-[#001933]/30 text-center sm:text-left">
                    Planning to ship your car? Worried about how much it may
                    cost to ship it? Rapid Auto Shipping is the choice of
                    thousands of customers when shipping their car. The script
                    of our successful auto shipping transportation journey
                    begins with our auto transport quote. Get an instant and
                    accurate car shipping quote with our vehicle shipping cost
                    calculator for safe, reliable, and affordable car shipping.
                    Whether you need open transportation, enclosed
                    transportation, door-to-door delivery, or expedited
                    shipping, we have various shipping processes designed to
                    meet your shipping needs.
                  </p>
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

          {/* Calculator Explanation Section */}
          <section className="relative bg-gradient-to-br from-gray-50 to-white">
            <div className="absolute inset-0 opacity-5">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
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
                <rect width="60" height="60" fill="url(#shippingPattern)" />
              </svg>
            </div>
            <div className="container mx-auto px-4 relative z-10 py-12">
              <div className="min-h-[600px] bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#ff5722]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#003366]/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#ff5722]/10 to-[#003366]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 py-12">
                  <div
                    className={`text-center mb-12 transform transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <div className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                      Instant Car
                      <span className="block bg-gradient-to-r from-[#ff5722] via-[#ff5722] to-[#003366] bg-clip-text text-transparent">
                        Shipping Quotes
                      </span>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                      Get accurate shipping estimates in seconds with our
                      advanced calculator
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
                    <div
                      className={`relative transform transition-all duration-1000 delay-300 ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-10 opacity-0"
                      }`}
                    >
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#ff5722] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1749949723/1747832615841_h9vbcz.webp"
                          alt="Car Shipping Calculator"
                          width={650}
                          height={650}
                          className="w-full h-[650px] object-cover rounded-3xl shadow-2xl border-4 border-white/50 group-hover:scale-105 transition-transform duration-500"
                          priority={false} // Optional: Set to true for above-the-fold images
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 via-transparent to-[#ff5722]/20 rounded-3xl"></div>
                        <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300 group-hover:scale-110">
                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <div className="text-3xl font-black bg-gradient-to-r from-[#003366] to-[#ff5722] bg-clip-text text-transparent">
                                1M+
                              </div>
                              <div className="text-sm font-semibold text-gray-600">
                                Quotes Generated
                              </div>
                            </div>
                            <div className="w-px h-16 bg-gradient-to-b from-[#003366] to-[#ff5722]"></div>
                            <div className="text-center">
                              <div className="text-3xl font-black text-[#ff5722]">
                                99%
                              </div>
                              <div className="text-sm font-semibold text-gray-600">
                                Accuracy
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`space-y-8 transform transition-all duration-1000 delay-500 ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`}
                    >
                      <div className="relative bg-gradient-to-br from-white via-white to-blue-50/30 backdrop-blur-xl rounded-3xl p-8 border border-[#003366]/20 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/5 to-[#ff5722]/5 rounded-3xl"></div>
                        <div className="relative">
                          <div className="bg-gradient-to-r from-[#ff5722]/10 to-[#003366]/10 rounded-2xl p-6 mb-6 border border-[#ff5722]/20">
                            <p className="text-gray-700 leading-relaxed text-lg">
                              When a question like"How much to ship a
                              car?"arises, you don't have to worry too much. Log
                              onto our website,
                              <span className="font-bold text-[#003366]">
                                {" "}
                                Rapidautoshipping.com
                              </span>
                              , and get your question answered using our car
                              shipping price calculator. Therefore, a car
                              shipping calculator is a tool on our website that
                              provides a quick estimate of the cost to ship a
                              car. This helps you get a general idea of vehicle
                              shipping prices based on factors such as distance,
                              vehicle type, and shipping type.
                            </p>
                          </div>
                          <div className="space-y-4">
                            {benefits.map((benefit, index) => {
                              const IconComponent = benefit.icon;
                              return (
                                <div
                                  key={index}
                                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                                    hoveredBenefit === index
                                      ? "bg-gradient-to-r from-[#003366]/10 to-[#ff5722]/10 transform scale-105 shadow-lg"
                                      : "hover:bg-gray-50"
                                  }`}
                                  onMouseEnter={() => setHoveredBenefit(index)}
                                  onMouseLeave={() => setHoveredBenefit(null)}
                                >
                                  <div
                                    className={`p-2 rounded-full transition-all duration-300 ${
                                      hoveredBenefit === index
                                        ? "bg-gradient-to-r from-[#003366] to-[#ff5722]"
                                        : "bg-[#003366]"
                                    }`}
                                  >
                                    <IconComponent className="w-5 h-5 text-white" />
                                  </div>
                                  <span className="text-gray-700 font-medium text-lg flex-1">
                                    {benefit.text}
                                  </span>
                                  <ArrowRight
                                    className={`w-5 h-5 transition-all duration-300 ${
                                      hoveredBenefit === index
                                        ? "text-[#ff5722] transform translate-x-2"
                                        : "text-gray-400"
                                    }`}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Car Shipping Cost Section */}
          <div className="min-h-[500px] bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4 relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                  How is the{" "}
                  <span className="bg-gradient-to-r from-[#ff5722] via-[#ff5722] to-[#003366] bg-clip-text text-transparent">
                    car shipping cost
                  </span>
                  <br />
                  <span className="text-4xl md:text-5xl">calculated?</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
                  A car shipping cost calculator uses numerous variables to
                  calculate the car transport cost. Here are the variables that
                  our online car shipping cost calculator uses to give you an
                  accurate car shipping cost.
                </p>
                <div className="flex justify-center mt-8 space-x-4">
                  <div className="w-3 h-3 bg-[#ff5722] rounded-full animate-bounce"></div>
                  <div
                    className="w-3 h-3 bg-[#003366] rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-[#ff5722] rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
                {factors.map((factor, index) => (
                  <div
                    key={factor.id}
                    className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 hover:scale-105"
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${factor.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-700 -z-10 blur-sm`}
                    ></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${factor.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-700 -z-20`}
                    ></div>
                    <div className="flex items-center mb-8">
                      <div
                        className={`bg-gradient-to-r ${factor.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl mr-6 shadow-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10">{factor.id}</span>
                      </div>
                      <h3 className="text-3xl xl:text-4xl font-black text-gray-900 group-hover:text-[#003366] transition-all duration-500">
                        {factor.title}
                      </h3>
                    </div>
                    <div className="space-y-8">
                      {factor.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`relative pl-12 ${factor.borderColor} border-l-4 hover:border-l-8 transition-all duration-500 group-hover:pl-16`}
                        >
                          <div
                            className={`absolute -left-4 top-0 w-8 h-8 ${factor.borderColor.replace(
                              "border-",
                              "bg-",
                            )} rounded-full shadow-xl flex items-center justify-center transform group-hover:scale-125 transition-all duration-500`}
                          >
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div className="space-y-4">
                            <h4 className="font-black text-xl xl:text-2xl text-gray-900 flex items-center group-hover:text-[#003366] transition-colors duration-500">
                              <div
                                className={`w-10 h-10 ${factor.iconColor} mr-4 text-2xl flex items-center justify-center bg-gray-50 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                              >
                                <Shield className="w-8 h-8" />
                              </div>
                              {item.title}
                            </h4>
                            <div
                              className="text-gray-700 leading-relaxed text-lg xl:text-xl font-medium group-hover:text-gray-800 transition-colors duration-500"
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`absolute top-6 right-6 w-24 h-24 bg-gradient-to-r ${factor.color} opacity-5 rounded-full blur-2xl group-hover:opacity-15 group-hover:scale-150 transition-all duration-700`}
                    ></div>
                    <div
                      className={`absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r ${factor.color} opacity-3 rounded-full blur-xl group-hover:opacity-10 group-hover:scale-125 transition-all duration-700`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cost Estimation Guide Section */}
          <div className="min-h-[500px] bg-gradient-to-br from-blue-50 to-orange-50 py-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12 relative">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-100 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-10 right-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-30 animate-pulse delay-300"></div>
                <div className="relative z-10">
                  <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-blue-900 rounded-full">
                    <span className="text-white text-sm font-semibold tracking-wider uppercase">
                      Car Shipping Guide
                    </span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                    How Much Does It Cost to
                    <span className="block bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent mt-2">
                      Ship a Car
                    </span>
                    <span className="block text-4xl md:text-5xl font-bold text-gray-700 mt-4">
                      in the United States?
                    </span>
                  </div>
                  <div className="flex justify-center items-center mt-6">
                    <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-blue-900 rounded-full mx-4 animate-spin"></div>
                    <div className="w-12 h-1 bg-blue-900 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-orange-50 to-blue-50 rounded-3xl transform rotate-1"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:pr-8">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-900 rounded-2xl blur-md opacity-30 transform scale-110"></div>
                          <div className="relative bg-gradient-to-br from-orange-500 to-blue-900 p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-orange-500"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Cost Estimation Guide
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-blue-900 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="relative pl-6 border-l-2 border-orange-200">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            One of the vehicle owners' most concerning questions
                            is{" "}
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-900 text-xl">
                              "how much to ship a car?"
                            </span>
                            . As mentioned earlier, the cost of shipping a car
                            in the USA is estimated by considering several
                            factors. Auto transport quotes are a reflection of
                            these factors.
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-xl border-l-3 border-orange-500 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-900 opacity-5 rounded-full transform translate-x-8 -translate-y-8"></div>
                          <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                            At{" "}
                            <span className="font-bold text-blue-900">
                              Rapid Auto Shipping
                            </span>
                            , our sole motive is to serve our customers well and
                            not bother about profit. This is reflected in our
                            car shipping quotes as well. We provide the most
                            competitive, reasonable, and affordable vehicle
                            shipping rates in the United States without
                            compromising our services.
                          </p>
                        </div>
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 to-orange-500 p-0.5">
                          <div className="bg-white rounded-xl p-6 relative">
                            <div className="absolute top-2 left-2 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-900 rounded-full animate-pulse delay-300"></div>
                            <p className="text-lg text-gray-700 leading-relaxed font-semibold text-center">
                              Average car shipping costs are mentioned below to
                              help get a general idea of the pricing structure
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 lg:pl-8 max-w-lg">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-900 rounded-2xl transform rotate-2 opacity-10 group-hover:rotate-1 transition-transform duration-500"></div>
                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-2xl transition-shadow duration-500">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-900/10 z-10"></div>
                            <img
                              src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747986323/1747753114714_1_xhbg6m.webp"
                              alt="Car shipping illustration"
                              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                              width="1200" // Replace with actual image width
                              height="800" // Replace with actual image height
                            />
                            <div className="absolute top-3 left-3 w-8 h-8 bg-gradient-to-br from-orange-500 to-transparent rounded-full opacity-40 z-20"></div>
                            <div className="absolute bottom-3 right-3 w-8 h-8 bg-gradient-to-tl from-blue-900 to-transparent rounded-full opacity-40 z-20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Factors That Impact Car Shipping Cost Section */}
          <div className="min-h-[500px] bg-gradient-to-br from-blue-50 to-orange-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 relative">
                <div className="absolute top-0 left-1/5 w-24 h-24 bg-orange-100 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-8 right-1/3 w-20 h-20 bg-blue-100 rounded-full opacity-30 animate-pulse delay-500"></div>
                <div className="relative z-10">
                  <div className="inline-block mb-6 px-8 py-3 bg-gradient-to-r from-orange-500 to-blue-900 rounded-full shadow-lg">
                    <span className="text-white text-sm font-bold tracking-wider uppercase">
                      Cost Factors Guide
                    </span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                    Factors That Impact{" "}
                    <span className="block bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent mt-2">
                      Car Shipping Cost
                    </span>
                  </h2>
                  <div className="flex justify-center items-center mb-6">
                    <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-blue-900 rounded-full mx-4 animate-spin"></div>
                    <div className="w-16 h-1 bg-blue-900 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                    Car transportation quotes are affected by several factors.
                    The car shipping estimate calculator considers these factors
                    to estimate shipping costs. These include distance, the type
                    of carrier (open or enclosed), the size and weight of the
                    vehicle, seasonality, and the need for additional services
                    like expedited shipping or insurance. Here's a more detailed
                    breakdown:
                  </p>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
                <div className="space-y-6">
                  {factorss.slice(0, 3).map((factor, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-orange-50 to-blue-50 rounded-3xl transform rotate-1 opacity-70 group-hover:rotate-0 transition-transform duration-500"></div>
                      <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div
                          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${factor.gradient} opacity-5 rounded-bl-full`}
                        ></div>
                        <div className="relative z-10">
                          <div className="flex items-start gap-6 mb-6">
                            <div className="relative flex-shrink-0">
                              <div
                                className={`absolute inset-0 bg-gradient-to-r ${factor.gradient} rounded-2xl blur-md opacity-30 transform scale-110`}
                              ></div>
                              <div
                                className={`relative bg-gradient-to-r ${factor.gradient} p-4 rounded-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                              >
                                <div className="w-8 h-8 text-white">
                                  <factor.icon />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-2xl text-gray-900 mb-2">
                                {factor.title}
                              </h3>
                              <div
                                className={`w-12 h-1 bg-gradient-to-r ${factor.gradient} rounded-full`}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <div
                              className={`absolute -left-4 top-0 w-1 h-full bg-gradient-to-b ${factor.gradient} rounded-full opacity-30`}
                            ></div>
                            <p className="text-lg text-gray-700 leading-relaxed pl-6">
                              {factor.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {factorss.slice(3, 6).map((factor, index) => (
                    <div key={index + 3} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-l from-white via-blue-50 to-orange-50 rounded-3xl transform -rotate-1 opacity-70 group-hover:rotate-0 transition-transform duration-500"></div>
                      <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${factor.gradient} opacity-5 rounded-br-full`}
                        ></div>
                        <div className="relative z-10">
                          <div className="flex items-start gap-6 mb-6">
                            <div className="relative flex-shrink-0">
                              <div
                                className={`absolute inset-0 bg-gradient-to-r ${factor.gradient} rounded-2xl blur-md opacity-30 transform scale-110`}
                              ></div>
                              <div
                                className={`relative bg-gradient-to-r ${factor.gradient} p-4 rounded-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                              >
                                <div className="w-8 h-8 text-white">
                                  <factor.icon />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-2xl text-gray-900 mb-2">
                                {factor.title}
                              </h3>
                              <div
                                className={`w-12 h-1 bg-gradient-to-r ${factor.gradient} rounded-full`}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <div
                              className={`absolute -left-4 top-0 w-1 h-full bg-gradient-to-b ${factor.gradient} rounded-full opacity-30`}
                            ></div>
                            <p className="text-lg text-gray-700 leading-relaxed pl-6">
                              {factor.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 text-center">
                <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold text-gray-700">
                    Understanding these factors helps you get accurate quotes
                  </span>
                  <div className="w-3 h-3 bg-blue-900 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>

          <section className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse"
                style={{ backgroundColor: "#ff5722" }}
              ></div>
              <div
                className="absolute bottom-16 right-16 w-24 h-24 rounded-full animate-pulse delay-300"
                style={{ backgroundColor: "#003366" }}
              ></div>
              <div
                className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full animate-pulse delay-700"
                style={{ backgroundColor: "#ff5722" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-1/5 w-12 h-12 rounded-full animate-pulse delay-500"
                style={{ backgroundColor: "#003366" }}
              ></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Compact Header */}
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-900 mb-4 leading-tight">
                  Step-by-Step Process
                </h2>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  for Obtaining a Car Transport Quote
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-[#ff5722] to-[#003366] rounded-full mx-auto"></div>
              </div>

              {/* Company Info Card - Compact */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <div>
                      <p className="text-gray-700 font-medium">
                        <span className="text-[#ff5722] font-bold">
                          14+ years
                        </span>{" "}
                        of trusted service •
                        <span className="text-[#003366] font-bold">
                          {" "}
                          Licensed & Insured
                        </span>
                      </p>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                        Rapid Auto Shipping is a trusted name in the auto
                        shipping industry, as we believe in making shipping
                        <span className="text-[#ff5722] font-semibold">
                          {" "}
                          simple, reliable, and affordable
                        </span>
                        . We have been helping customers ship their vehicles for
                        more than{" "}
                        <span className="text-[#003366] font-semibold">
                          14 years
                        </span>
                        , and their positive reviews are a testament to that.We
                        are licensed and insured with the Federal Motor Carrier
                        Safety Administration (MC #: 1685548, U.S.DOT #: 4320359
                        FMCSA). So, without wasting any time, use our vehicle
                        shipping cost calculator to get an accurate vehicle
                        transport quote tailored to your specific car shipping
                        needs. Here is what our car shipping estimate calculator
                        requires for an accurate auto shipping quote.:
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {steps.map((step, index) => (
                  <div key={index} className="group relative">
                    {/* Connection Line for larger screens */}
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
                      {/* Step Number */}
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl font-black text-lg mb-4 shadow-md ${
                          index % 2 === 0
                            ? "bg-gradient-to-br from-[#ff5722] to-orange-600 text-white"
                            : "bg-gradient-to-br from-[#003366] to-blue-800 text-white"
                        }`}
                      >
                        {step.number}
                      </div>

                      {/* Content */}
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

                      {/* Hover Effect Accent */}
                      <div
                        className={`absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${
                          index % 2 === 0 ? "bg-[#ff5722]" : "bg-[#003366]"
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA - Compact */}
              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-left">
                    <p className="text-lg font-bold text-gray-800">
                      Ready to ship your vehicle?
                    </p>
                    <p className="text-sm text-gray-600">
                      Get your free quote in under 60 seconds
                    </p>
                  </div>
                  <button className="px-8 py-3 bg-gradient-to-r from-[#ff5722] to-[#003366] text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                    Start Now →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <div className="relative mb-20">
            {/* Hero Section with Background */}
            <div className="relative bg-black bg-opacity-80 bg-blend-overlay overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-20000 hover:scale-105"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dz2zovmf1/image/upload/v1743420098/Service/College-students-car-transport.webp')`,
                }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-transparent opacity-90"></div>

              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse"
                  style={{ backgroundColor: "#ff5722" }}
                ></div>
                <div
                  className="absolute bottom-20 right-20 w-40 h-40 rounded-full opacity-10 animate-pulse delay-1000"
                  style={{ backgroundColor: "#003366" }}
                ></div>
                <div
                  className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full opacity-10 animate-pulse delay-500"
                  style={{ backgroundColor: "#ff5722" }}
                ></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 ">
                <div className="text-center">
                  <div className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                    Why Choose{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5722] to-orange-400">
                      Rapid Auto Shipping?
                    </span>
                  </div>
                  <p className="text-2xl text-gray-200 max-w-4xl mx-auto mb-16 font-light leading-relaxed">
                    Your trusted partner for safe reliable affordable vehicle
                    transportation across the country
                  </p>

                  {/* Content Boxes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {contentBoxes.map((box, index) => (
                      <div
                        key={index}
                        className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                      >
                        {/* Gradient Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff5722] to-[#003366] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500"></div>

                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-[#ff5722] to-[#003366] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                          {box.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                          {box.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white leading-relaxed text-left group-hover:text-white transition-colors duration-300">
                          {box.description}
                        </p>

                        {/* Floating Orb Effect */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#ff5722] to-[#003366] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                      </div>
                    ))}
                  </div>

                  {/* Buttons Section */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="https://rapidautoshipping.com/services/car-shipping-calculator">
                      <button className="group relative bg-gradient-to-r from-[#ff5722] to-orange-600 hover:from-orange-600 hover:to-[#ff5722] text-white px-12 py-5 rounded-2xl font-bold text-lg duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden">
                        <span className="relative z-10">Get Free Quote</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </button>
                    </a>

                    <a
                      href="tel:+18332334447"
                      className="group relative bg-white text-[#003366] px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-gray-100 hover:scale-105 hover:shadow-xl"
                    >
                      <span className="relative z-10">(833) 233-4447</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section (Continued) */}
          </div>

          {/* Stats Section */}
          <StatsSection />

          {/* Final CTA Section */}
          <section className="relative bg-gradient-to-br from-[#003366] to-[#ff5722] py-16 overflow-hidden m-20">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full animate-pulse delay-500"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Ship Your Vehicle?
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                Get a free, no-obligation quote in under 60 seconds with our
                advanced car shipping calculator.
              </p>
              <div className="flex justify-center gap-6">
                <Link href="https://rapidautoshipping.com/services/car-shipping-calculator">
                  <button className="group relative bg-white text-[#003366] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:shadow-lg hover:scale-105">
                    <span className="relative z-10">Get Instant Quote</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff5722]/20 to-[#003366]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </button>
                </Link>
                <a
                  href="tel:+18332334447"
                  className="group relative bg-gradient-to-r from-[#ff5722] to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:shadow-lg hover:scale-105"
                >
                  <span className="relative z-10">
                    Call Now: (833) 233-4447
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                </a>
              </div>
            </div>
          </section>

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
