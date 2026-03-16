"use client";
import React, { useState, useMemo, useCallback } from "react";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import { Calculator } from "lucide-react";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import StatsSection from "@/components/CommonComponents/StatsSection";
import {
  Truck,
  Plus,
  Minus,
  Car,
  DollarSign,
  FileText,
  CheckCircle,
  MapPin,
  Shield,
  Phone,
  Star,
  Users,
  Clock,
  Package,
  Target,
  Award,
  Mail,
  Ruler,
  Weight,
  Route,
} from "lucide-react";
import Image from "next/image";

const Home = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [activeTab, setActiveTab] = useState("routes");
  const [expandedSection, setExpandedSection] = useState(null);

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

  const vanModels = useMemo(
    () => [
      {
        brand: "Ford",
        icon: <Car className="h-6 w-6" />,
        models: [
          {
            name: "Transit",
            category: "Full-Size Cargo Van",
            features: "High roof options, strong towing capacity",
            icon: <Package className="h-5 w-5" />,
          },
          {
            name: "Transit Connect",
            category: "Compact Cargo Van",
            features: "Ideal for urban deliveries, fuel-efficient",
            icon: <Target className="h-5 w-5" />,
          },
          {
            name: "Econoline (E-Series)",
            category: "Heavy-Duty Cargo Van",
            features: "Durable, high payload capacity",
            icon: <Shield className="h-5 w-5" />,
          },
        ],
      },
      {
        brand: "RAM",
        icon: <Truck className="h-6 w-6" />,
        models: [
          {
            name: "ProMaster",
            category: "Full-Size Cargo Van",
            features: "Spacious interior, front-wheel drive",
            icon: <Package className="h-5 w-5" />,
          },
          {
            name: "ProMaster City",
            category: "Compact Cargo Van",
            features: "Agile, fuel-efficient for city use",
            icon: <Target className="h-5 w-5" />,
          },
        ],
      },
      {
        brand: "Mercedes-Benz",
        icon: <Star className="h-6 w-6" />,
        models: [
          {
            name: "Sprinter",
            category: "Full-Size Cargo Van",
            features: "Premium features, excellent cargo capacity",
            icon: <Award className="h-5 w-5" />,
          },
          {
            name: "Metris",
            category: "Mid-Size Cargo Van",
            features: "Balance of space and efficiency",
            icon: <CheckCircle className="h-5 w-5" />,
          },
        ],
      },
      {
        brand: "Chevrolet",
        icon: <Car className="h-6 w-6" />,
        models: [
          {
            name: "Express",
            category: "Full-Size Cargo Van",
            features: "Heavy-duty, widely used for business transport",
            icon: <Shield className="h-5 w-5" />,
          },
          {
            name: "City Express",
            category: "Compact Cargo Van",
            features: "Efficient, maneuverable in city settings",
            icon: <Target className="h-5 w-5" />,
          },
        ],
      },
      {
        brand: "Nissan",
        icon: <Car className="h-6 w-6" />,
        models: [
          {
            name: "NV200",
            category: "Compact Cargo Van",
            features: "Cost-effective, easy to drive",
            icon: <Target className="h-5 w-5" />,
          },
          {
            name: "NV2500/NV3500",
            category: "Full-Size Cargo Van",
            features: "High payload, durable",
            icon: <Package className="h-5 w-5" />,
          },
        ],
      },
      {
        brand: "GMC",
        icon: <Truck className="h-6 w-6" />,
        models: [
          {
            name: "Savana",
            category: "Full-Size Cargo Van",
            features: "Similar to Chevy Express, reliable for fleets",
            icon: <Users className="h-5 w-5" />,
          },
        ],
      },
      {
        brand: "Freightliner",
        icon: <Truck className="h-6 w-6" />,
        models: [
          {
            name: "Sprinter",
            category: "Full-Size Cargo Van",
            features: "Used for commercial and logistics needs",
            icon: <Package className="h-5 w-5" />,
          },
        ],
      },
      {
        brand: "Isuzu",
        icon: <Car className="h-6 w-6" />,
        models: [
          {
            name: "Reach",
            category: "Specialty Cargo Van",
            features: "Commonly used for delivery services",
            icon: <Clock className="h-5 w-5" />,
          },
        ],
      },
      {
        brand: "Workhorse",
        icon: <Truck className="h-6 w-6" />,
        models: [
          {
            name: "Walk-In Vans",
            category: "Specialty Cargo Van",
            features: "USPS, FedEx, and last-mile delivery vans",
            icon: <Mail className="h-5 w-5" />,
          },
        ],
      },
    ],
    [],
  );

  const trailerTypes = useMemo(
    () => [
      {
        name: "Low-Boy Trailers",
        description: "Ideal for heavy and oversized cargo vans.",
        icon: <Shield className="h-8 w-8" />,
      },
      {
        name: "Step-Deck Trailers",
        description: "Suitable for taller vans needing extra height clearance.",
        icon: <Ruler className="h-8 w-8" />,
      },
      {
        name: "Flatbed Trailers",
        description: "Best for standard-sized cargo vans.",
        icon: <Package className="h-8 w-8" />,
      },
    ],
    [],
  );

  const keyFactors = useMemo(
    () => [
      {
        icon: Ruler,
        title: "Size",
        description:
          "Is the van long or short? Are there any attachments included? Depending on the size of the van, it may require space equivalent to 2-3 regular-sized vehicles.",
      },
      {
        icon: Weight,
        title: "Weight",
        description:
          "Does your van contain any supplies, or is it empty? To dispatch the appropriate trailer type, it is necessary to have an accurate weight.",
      },
      {
        icon: Route,
        title: "Route",
        description:
          "What is the estimated distance that your van will cover? Distance is a crucial factor that must be considered during the planning process.",
      },
      {
        icon: MapPin,
        title: "Pickup and Destination",
        description:
          "Are we picking you up from your workplace or home? To safely load and unload, we will require a commercial space of significant size.",
      },
    ],
    [],
  );

  const costData = useMemo(
    () => [
      {
        distance: "Short-distance (under 500 miles)",
        cost: "$500 – $1,500",
      },
      {
        distance: "Medium-distance (500–1,000 miles)",
        cost: "$1,000 – $2,500",
      },
      {
        distance: "Long-distance (1,000+ miles)",
        cost: "$1,500 – $3,500",
      },
    ],
    [],
  );

  const pricingFactors = useMemo(
    () => [
      {
        factor: "Distance",
        details:
          "Short hauls (under 500 miles) cost less than cross country transport.",
      },
      {
        factor: "Van Size & Weight",
        details:
          "Larger, heavier vans increase costs due to space and fuel needs.",
      },
      {
        factor: "Transport Type",
        details: "Enclosed transport costs more than open transport.",
      },
      {
        factor: "Shipping Locations",
        details: "Rural deliveries may cost more due to accessibility issues.",
      },
      {
        factor: "Seasonality",
        details: "Prices may rise during peak moving seasons.",
      },
    ],
    [],
  );

  const advantages = useMemo(
    () => [
      {
        icon: <Clock className="h-8 w-8" />,
        title: "Convenience & Time Savings",
        description:
          "Rapid Auto Shipping eliminates the need for you to personally drive the vans to their destination. This saves you time and effort, especially moving to a different state across the country. You can focus on other essential tasks while professionals handle the transportation process.",
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: "Protection During Transport",
        description:
          "Cargo vans services have trained personnel in handling and transporting vehicles, ensuring proper care and protection during transit. They use specialized equipment like enclosed transport carriers or flatbed trucks to shield vehicles from road debris, weather conditions, and other potential risks. This helps prevent damage, scratches, or wear and tear during a long drive.",
      },
      {
        icon: <Award className="h-8 w-8" />,
        title: "Insurance Coverage",
        description:
          "Reputable cargo van services typically cover the vehicles they transport. This coverage offers financial protection in case of any damage or loss during transit. Before hiring a shipping service, inquire about their insurance policy and coverage details.",
      },
      {
        icon: <DollarSign className="h-8 w-8" />,
        title: "Cost-Effectiveness",
        description:
          "Although cargo van services involve some cost, they can often be more cost-effective compared to driving the vehicle yourself, especially for long distances. When you consider expenses such as fuel, accommodation, meals, and the wear and tear on your vehicle, shipping your car can often be a more economical choice.",
      },
      {
        icon: <Target className="h-8 w-8" />,
        title: "Faster Delivery Options",
        description:
          "For individuals who require quick and dependable service, we provide expedited transportation services to guarantee timely delivery. From one van to a whole fleet, our services aim to ensure efficiency, cost-effectiveness, and security.",
      },
    ],
    [],
  );

  const shippingProcess = useMemo(
    () => [
      {
        step: 1,
        title: "Request an Instant Auto Shipping Quote",
        description:
          "Getting an auto transport quote is the first step to ship cargo van. Fill out the details in the auto shipping calculator, or get in touch with us by email or phone.",
        icon: <Calculator className="h-8 w-8" />,
      },
      {
        step: 2,
        title: "Booking of the Shipment",
        description:
          "Once you get the auto transportation quote, you need to schedule your shipments. For your convenience, we provide electronic contracts. An email with a link will be sent to you so you can conveniently schedule your service online.",
        icon: <CheckCircle className="h-8 w-8" />,
      },
      {
        step: 3,
        title: "Van Pickup",
        description:
          "On the appointed day and within the scheduled time limit, our skilled auto transport driver will come to pick up your van. Before loading the van on the carrier, they will inspect it and record its condition.",
        icon: <Truck className="h-8 w-8" />,
      },
      {
        step: 4,
        title: "Van Transportation",
        description:
          "Your vehicle will arrive as soon as you arrive at your location. The carrier will provide you with an estimated arrival time a few hours before delivery. If you are unable to do so, you can choose a reliable person to accept the van on your behalf.",
        icon: <MapPin className="h-8 w-8" />,
      },
    ],
    [],
  );

  const whyChooseUs = useMemo(
    () => [
      {
        icon: <Users className="h-8 w-8" />,
        title: "Expertise You Can Count On",
        description:
          "With decades of experience in auto transport cargo vans, we know the intricacies of shipping vans of any size. Our experts guarantee smooth delivery, safety regulations, and optimal route planning for a trouble-free experience.",
      },
      {
        icon: <Target className="h-8 w-8" />,
        title: "Customized Transport Solutions",
        description:
          "Each delivery is one-of-a-kind, and we tailor each transport solution to your individual requirements. From a single van to a whole fleet, we offer the best value for money shipping solutions.",
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: "Efficient Drivers & Secure Transportation",
        description:
          "Our professionally trained drivers adopt stringent safety guidelines to load, transport, and offload smoothly. Your van is treated gently to avoid risks during transportation.",
      },
      {
        icon: <MapPin className="h-8 w-8" />,
        title: "Nationwide Coverage",
        description:
          "We transport vans to all 50 states, and deliver to even the most out-of-the-way places. Wherever you need to be moved, we've got you covered.",
      },
      {
        icon: <DollarSign className="h-8 w-8" />,
        title: "Transparent & Competitive Pricing",
        description:
          "Our rates are simple and competitive, with no surprise charges. You'll know exactly what cargo delivery service will cost up front, so there are no surprises.",
      },
    ],
    [],
  );

  const faqData = useMemo(
    () => [
      {
        icon: <Truck className="w-5 h-5" />,
        question: "Can I ship an inoperable cargo van?",
        answer:
          "Yes! We transport an inoperable cargo van with a winch-equipped trailer. There is an upcharge for the additional gear and labor. When making reservations online or with our representative on our phone reservation lines, please mark your vehicle as a malfunction or not running.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        question: "Is enclosed transport available for cargo vans?",
        answer:
          "Yes, but enclosed transport is usually more expensive and limited to smaller cargo vans.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "Are there additional fees?",
        answer:
          "Possible extra charges include oversized vehicle fees, expedited shipping, and remote location surcharges.",
      },
      {
        icon: <Package className="w-5 h-5" />,
        question: "Do I need to empty my van before transport?",
        answer:
          "Yes! For safety reasons, we generally do not allow personal items inside the van. If you need to ship items, consider using a separate shipping service. However, small, non-valuable items up to 100 pounds are allowed at your peril, so it's best to discuss your specific needs with our shipping coordinator.",
      },
      {
        icon: <Phone className="w-5 h-5" />,
        question: "How do I book a cargo van shipping service?",
        answer:
          "On our website, we have a quote form that clients can fill out for a quote estimate. To make it easy, fill in all the details. To compute your estimate, we need to know the origin and destination locations, the type of vehicle you wish to ship, and the date your car will be available. Once all the details are filled out and submitted, you will get our instant quote, and our representative will contact you ASAP. Or call +1 (833) 233-4447 to speak with one of our car transport pricing specialists.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "Do I need to be present for pickup or delivery?",
        answer:
          "The vehicle's pick-up and delivery will require the presence of someone. This is where you sign the pick-up and delivery inspection paperwork. The person must be over 18, have your permission, and preferably be a licensed driver.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "Do I need to provide any documents for transport?",
        answer:
          "To ship a cargo van, we generally require the following documents: A valid ID (Driver's License or government ID), Proof of ownership or authorization to ship the vehicle, Vehicle registration, and Insurance information. Sometimes, we may request additional paperwork depending on the state or shipment requirements. For more information, consult with our executives.",
      },
      {
        icon: <Calculator className="w-5 h-5" />,
        question: "Are there any size or weight restrictions?",
        answer:
          "Yes, some carriers have limits on height, width, and weight, especially for oversized or modified cargo vans.",
      },
    ],
    [],
  );

  return (
    <>
      <Head>
        <title>Ship Cargo Vans | Get Free Quote!</title>
        <meta
          name="description"
          content="Read a complete guide on the best way to ship cargo vans at an affordable cost. Call (833) 233-4447 for more details!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/ship-cargo-vans"
        />
        <meta property="og:title" content="Ship Cargo Vans | Get Free Quote!" />
        <meta
          property="og:description"
          content="Read a complete guide on the best way to ship cargo vans at an affordable cost. Call (833) 233-4447 for more details!"
        />
        
        <meta
          property="og:url"
          content=" https://rapidautoshipping.com/ship-cargo-vans "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751961905/ship_cargo_van_Banner_gk7hdf.webp"
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
                    "@id": " https://rapidautoshipping.com/ship-cargo-vans",
                    name: "ship-cargo-vans",
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
              serviceType: "Cargo Van Shipping Service",
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
                "Secure and reliable cargo van shipping services across the USA by Rapid Auto Shipping. We handle inoperable vans, oversized vehicles, and offer both open and enclosed transport.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Can I ship an inoperable cargo van?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! We transport an inoperable cargo van with a winch-equipped trailer. There is an upcharge for the additional gear and labor. When making reservations online or with our representative on our phone reservation lines, please mark your vehicle as a malfunction or not running.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is enclosed transport available for cargo vans?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, but enclosed transport is usually more expensive and limited to smaller cargo vans.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are there additional fees?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Possible extra charges include oversized vehicle fees, expedited shipping, and remote location surcharges.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need to empty my van before transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! For safety reasons, we generally do not allow personal items inside the van. If you need to ship items, consider using a separate shipping service. However, small, non-valuable items up to 100 pounds are allowed at your peril, so it's best to discuss your specific needs with our shipping coordinator.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I book a cargo van shipping service?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "On our website, we have a quote form that clients can fill out for a quote estimate. Fill in all the details including origin, destination, vehicle type, and available date. Once submitted, you'll receive our instant quote and our representative will contact you ASAP. Or call +1 (833) 233-4447 to speak directly with our car transport pricing specialists.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need to be present for pickup or delivery?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The vehicle's pick-up and delivery will require the presence of someone over 18 with your permission, preferably a licensed driver, to sign the inspection paperwork.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need to provide any documents for transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "To ship a cargo van, we generally require a valid ID (Driver's License or government ID), proof of ownership or authorization to ship the vehicle, vehicle registration, and insurance information. Sometimes, additional paperwork may be requested depending on state or shipment requirements.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are there any size or weight restrictions?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, some carriers have limits on height, width, and weight, especially for oversized or modified cargo vans.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/ship-cargo-vans",
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          {/* Hero Section - Mobile: solid bg, Desktop: image */}
          <section className="relative py-8  flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on Mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751961905/ship_cargo_van_Banner_gk7hdf.webp"
                alt="Professional Auto Transport Service"
                width={1200}
                height={600}
                quality={75}
                priority={true}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#001933]/50 via-[#001933]/20 to-[#001933]/40"></div>
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
                <rect width="100%" height="100%" fill="url(#glassPattern)" />
              </svg>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center z-10 px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 md:bg-[#001933]/40 max-w-3xl rounded-lg p-3 sm:p-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    Ship Cargo Van{" "}
                    <span className="text-[#ff5722]">Service</span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    You have come to the right place if you need to help ship
                    cargo vans. Rapid Auto Shipping provides reliable cargo van
                    auto transport service in the United States. We are the top
                    choice in the industry for fulfilling all your auto
                    transportation requirements. We have the expertise and
                    understanding to help you with cargo van transportation.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto relative z-30">
                <TransportForm />
              </div>
            </div>
          </section>

          <div className=" bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-4xl font-bold text-[#003366] leading-tight">
                        What is Cargo Van Auto Transport Service ? | Ship Cargo
                        Vans?
                      </h2>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Cargo Van Auto Transport Service is a dedicated vehicle
                      shipping solution that ship cargo vans safely and
                      efficiently over short or long distances. Whether you want
                      to ship a cargo van for business, relocation, fleet
                      management, or dealership transfers, this service provides
                      a hassle-free, secure, and affordable transportation
                      process.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      <b>Key Features of Cargo Van Auto Transport:</b> Safe and
                      Reliable Transport: Your cargo van is treated with care by
                      professional carriers, who deliver it in pristine
                      condition. <br /> <br />
                      <b>Nationwide Reach:</b> Transport cargo vans to all over
                      the United States. <br /> <br />
                      <b>Fleet and Business Solutions:</b> Suitable for fleet
                      operators, dealerships, rental firms, and logistics
                      companies requiring bulk vehicle transport. <br /> <br />
                      <b> Door to Door Service:</b> Convenient pickup and
                      delivery to your location of choice, residential or
                      commercial. <br /> <br />
                      <b>Comprehensive Insurance Protection: </b> Liability
                      coverage is included with all shipments, with
                      comprehensive insurance available as an option for extra
                      peace of mind. <br /> <br />
                      <b>Cost-Effective and Time-Saving:</b> Spare yourself from
                      wear and tear, high fuel prices, and long travel time by
                      using professional transportation. <br /> <br />
                      Cargo van shipping is a cost-efficient, convenient
                      solution to driving far, providing a hassle-free shipping
                      experience.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751965031/Ship_Cargo_van_ncy29e.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={900}
                        loading="lazy"
                        className="w-full h-[900px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center mb-4">
                  <Truck className="h-12 w-12 text-[#ff5722] mr-3" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Rapid Auto Shipping
                  </h2>
                </div>
                <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">
                    Types of Cargo Vans We Transport
                  </h2>
                  <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                    At Rapid Auto Shipping, we specialize in shipping a variety
                    of cargo vans, ranging from small city vans to full-size
                    commercial models. Whether you have one van to ship or fleet
                    logistics to coordinate, our professionals provide a safe,
                    efficient, and cost-effective transport solution
                    specifically for your vehicle.
                  </p>
                </div>
              </div>
            </header>

            {/* Van Models Section */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Top Cargo Van Models We Ship
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto"></div>
                </div>

                <div className="max-w-6xl mx-auto p-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Desktop Table View */}
                    <div className="hidden md:block">
                      <table className="w-full">
                        <thead className="bg-[#003366] text-white">
                          <tr>
                            <th className="px-6 py-4 text-left text-lg font-semibold">
                              Brand
                            </th>
                            <th className="px-6 py-4 text-left text-lg font-semibold">
                              Model
                            </th>
                            <th className="px-6 py-4 text-left text-lg font-semibold">
                              Category
                            </th>
                            <th className="px-6 py-4 text-left text-lg font-semibold">
                              Key Features
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {vanModels.map((brand, brandIndex) =>
                            brand.models.map((model, modelIndex) => (
                              <tr
                                key={`${brandIndex}-${modelIndex}`}
                                className="hover:bg-gray-50"
                              >
                                <td className="px-6 py-4">
                                  <div className="flex items-center">
                                    <div className="bg-[#ff5722] rounded-full p-2 mr-3 text-white">
                                      {brand.icon}
                                    </div>
                                    <span className="font-bold text-[#003366]">
                                      {brand.brand}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center">
                                    <div className="bg-[#003366] rounded-full p-1.5 mr-2 text-white">
                                      {model.icon}
                                    </div>
                                    <span className="font-semibold text-gray-700">
                                      {model.name}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-[#ff5722] font-medium">
                                  {model.category}
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-sm">
                                  {model.features}
                                </td>
                              </tr>
                            )),
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden">
                      <div className="bg-[#003366] text-white p-4">
                        <h2 className="text-lg font-semibold text-center">
                          Van Models
                        </h2>
                      </div>
                      <div className="divide-y divide-gray-200">
                        {vanModels.map((brand, brandIndex) =>
                          brand.models.map((model, modelIndex) => (
                            <div
                              key={`${brandIndex}-${modelIndex}`}
                              className="p-4 space-y-3"
                            >
                              {/* Brand */}
                              <div className="flex items-center">
                                <div className="bg-[#ff5722] rounded-full p-2 mr-3 text-white">
                                  {brand.icon}
                                </div>
                                <div>
                                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                                    Brand
                                  </span>
                                  <div className="font-bold text-[#003366]">
                                    {brand.brand}
                                  </div>
                                </div>
                              </div>

                              {/* Model */}
                              <div className="flex items-center">
                                <div className="bg-[#003366] rounded-full p-1.5 mr-3 text-white">
                                  {model.icon}
                                </div>
                                <div>
                                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                                    Model
                                  </span>
                                  <div className="font-semibold text-gray-700">
                                    {model.name}
                                  </div>
                                </div>
                              </div>

                              {/* Category */}
                              <div className="ml-0">
                                <span className="text-xs text-gray-500 uppercase tracking-wide">
                                  Category
                                </span>
                                <div className="text-[#ff5722] font-medium">
                                  {model.category}
                                </div>
                              </div>

                              {/* Features */}
                              <div className="ml-0">
                                <span className="text-xs text-gray-500 uppercase tracking-wide">
                                  Key Features
                                </span>
                                <div className="text-gray-600 text-sm leading-relaxed">
                                  {model.features}
                                </div>
                              </div>
                            </div>
                          )),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="py-6 bg-[#003366] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Extensive Experience in Cargo Van Transportation
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed mb-6">
                    Each vehicle transport is unique and differs from the
                    others. We approach every van transport request
                    individually. We collect detailed information about your
                    move to develop a customized transportation plan. Which
                    service option is the most suitable for your van?
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white bg-opacity-10 rounded-xl p-4 text-center">
                    <div className="bg-[#ff5722] rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      Open Transportation
                    </h3>
                    <p className="text-sm text-gray-200">
                      Cost-effective shipping solution for standard cargo vans
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-xl p-4 text-center">
                    <div className="bg-[#ff5722] rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Enclosed Haulage</h3>
                    <p className="text-sm text-gray-200">
                      Premium protection for valuable or specialty cargo vans
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-xl p-4 text-center">
                    <div className="bg-[#ff5722] rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      Door to Door Delivery
                    </h3>
                    <p className="text-sm text-gray-200">
                      Convenient pickup and delivery at your specified locations
                    </p>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <p className="text-base leading-relaxed max-w-4xl mx-auto">
                    Every cargo van model is distinct in size, weight, and
                    transportation needs. Our experts review these elements in
                    order to arrive at the optimal shipping solution so that
                    delivery remains seamless and inexpensive. Whether it's open
                    transportation, enclosed haulage, or door to door delivery,
                    we offer you the finest logistic solutions for transporting
                    your cargo vans.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Factors Section */}
            <section className="py-6 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Key Factors for Shipping a Cargo Van
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {keyFactors.map((factor, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="bg-[#ff5722] rounded-full p-2 mr-3">
                          <factor.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-[#003366]">
                          {factor.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {factor.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-[#003366] rounded-xl p-4 text-white">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#ff5722] rounded-full p-2 mr-3">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">Trailer Type</h3>
                  </div>
                  <p className="text-sm leading-relaxed">
                    We must select the appropriate trailer that can accommodate
                    the weight and dimensions of your van. We offer multiple
                    transport options based on your van's size and shipping
                    requirements:
                  </p>
                </div>
              </div>
            </section>

            {/* Trailer Types Section */}
            <section className="py-6 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-4">
                  {trailerTypes.map((trailer, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                    >
                      <div className="bg-[#003366] rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center text-white">
                        {trailer.icon}
                      </div>
                      <div className="bg-[#ff5722] text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-3 text-xs font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-[#003366] mb-3">
                        {trailer.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {trailer.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#003366] text-white py-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Truck className="h-6 w-6 text-[#ff5722] mr-2" />
                  <span className="text-lg font-bold">Rapid Auto Shipping</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Professional cargo van transportation services nationwide
                </p>
              </div>
            </footer>
          </div>

          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="h-12 w-12 text-[#ff5722] mr-3" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Cargo Van Shipping Costs
                  </h2>
                </div>
                <p className="text-lg max-w-3xl mx-auto">
                  The cost to ship a van can vary significantly depending on
                  several factors, including the distance of the shipment, the
                  size and weight of the van, the shipping method chosen, and
                  any additional services or requirements.
                </p>
              </div>
            </header>

            {/* Cost Overview */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Estimated Shipping Costs
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-gray-600 max-w-4xl mx-auto">
                    The average cost for shipping a van within the United States
                    ranged from $500 to $1,500 for shorter distances, while
                    long-distance or cross-country shipping could cost several
                    thousand dollars.
                  </p>
                </div>

                <div className="max-w-7xl mx-auto">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-[#003366] text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Distance
                          </th>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Estimated Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {costData.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-700 font-medium">
                              {item.distance}
                            </td>
                            <td className="px-6 py-4 text-[#ff5722] font-bold text-lg">
                              {item.cost}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Pricing Factors */}
            <section className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Key Pricing Factors
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-[#ff5722] text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Factor
                          </th>
                          <th className="px-6 py-4 text-left text-lg font-semibold">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {pricingFactors.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-[#003366] font-bold">
                              {item.factor}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {item.details}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Advantages */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Advantages of Using Cargo Van Shipping Services
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-gray-600 max-w-4xl mx-auto">
                    Cargo van auto transport services have many benefits that
                    make it a smart and effective choice for both businesses and
                    individuals.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {advantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-[#ff5722] rounded-full p-3 mr-4 text-white">
                          {advantage.icon}
                        </div>
                        <h3 className="text-lg font-bold text-[#003366]">
                          {advantage.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Shipping Process */}
            <section className="py-8 bg-[#003366] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Understanding the Cargo Van Shipping Process
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-lg max-w-3xl mx-auto">
                    Our cargo van shipping process is easy and hassle-free. To
                    book your van shipment, follow simple steps:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {shippingProcess.map((step, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-10 rounded-xl p-6"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-[#ff5722] rounded-full p-3 mr-4 text-white">
                          {step.icon}
                        </div>
                        <div className="bg-[#ff5722] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          <span className="text-white font-bold">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                    Why Choose Rapid Auto Shipping for Cargo Van Transport?
                  </h2>
                  <div className="w-20 h-1 bg-[#ff5722] mx-auto mb-4"></div>
                  <p className="text-gray-600 max-w-4xl mx-auto">
                    At Rapid Auto Shipping, we know that putting your vehicle in
                    someone else's hands is a big decision. That's why we're
                    committed to delivering a hassle-free, worry-free, and
                    secure cargo van auto transport experience. With years of
                    experience and thousands of happy customers in the U.S.,
                    we've established a reputation for excellence.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {whyChooseUs.map((reason, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-[#003366] rounded-full p-3 mr-4 text-white">
                          {reason.icon}
                        </div>
                        <h3 className="text-lg font-bold text-[#003366]">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
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
                              ? {
                                  backgroundColor: "#fff3f0",
                                  color: "#ff5722",
                                }
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
