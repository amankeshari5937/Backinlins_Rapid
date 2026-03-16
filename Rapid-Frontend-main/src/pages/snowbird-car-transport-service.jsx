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
  Calendar,
  Shield,
  Settings,
  Phone,
  Star,
  Globe,
  Users,
  Clock,
  Package,
  Navigation,
  ArrowRight,
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

  const features = useMemo(
    () => [
      {
        title: "Decades of Experience in Seasonal Auto Transport",
        description:
          "After 14 years in auto transport, we specialize in snowbird car transport service for easy seasonal relocations. Due to our knowledge, we can handle complex logistics, non-standard transport demands, and busy seasonal routes.",
        icon: (
          <Calendar className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
        ),
      },
      {
        title: "Nationwide Coverage with Door-to-Door Convenience",
        description:
          "We offer nationwide door to door delivery for winter vacations in Florida, Arizona, California, Texas, and across the nation. Saving time and effort, your vehicle is picked up and brought directly to you. You can count on us no matter how far away.",
        icon: (
          <MapPin className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
        ),
      },
      {
        title: "Safe, Secure, and Fully Insured Transport",
        description:
          "We respect your car as an essential asset. Our guaranteed services ensure safe delivery. Our skilled drivers follow stringent safety standards to deliver your vehicle in the same condition.",
        icon: (
          <Shield className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
        ),
      },
      {
        title: "Flexible Transport Options",
        description:
          "We offer customized snowbird car shipping solutions for antique and luxury vehicles, whether you need open or enclosed shipments. We can handle all kinds of vehicles like sedans, SUVs, RVs, and motorcycles.",
        icon: (
          <Settings className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
        ),
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      {
        icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />,
        title: "Enhance Safety",
        description:
          "Driving long distances might cause your car to wear and tear. By depending on a qualified and skilled auto transport provider, you can avoid the dangers of bad weather, road hazards, and needless miles. Your car will reach its destination in perfect shape without further depreciation.",
      },
      {
        icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-white" />,
        title: "Saves Money and Time",
        description:
          "It can take a lot of time and energy to go from the northern states to well-known Snowbird locations. You'll have to make stops along the route for food, lodging, and petrol, which will add up to a lot of money. These expenses are removed with door to door auto transport, which makes it a more economical and efficient choice.",
      },
      {
        icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-white" />,
        title: "Reduces Fatigue and Stress",
        description:
          "Long car tours over uncharted territory can be unpleasant and raise the possibility of exhaustion, accidents, and getting lost. Long periods of sitting can also cause fatigue and physical discomfort. Employing a seasonal auto shipping expert like us guarantees the safe and effective delivery of your vehicle, enabling you to travel without worry.",
      },
    ],
    []
  );

  const shippingSteps = useMemo(
    () => [
      {
        number: "1",
        title: "Request a Quote",
        description:
          "Getting a quote is the first step to starting your Snowbird auto transport. Visit our website or get in touch with us through Live Chat, email, or phone.",
        icon: <Phone className="w-5 h-5 text-white" />,
      },
      {
        number: "2",
        title: "Booking of the Shipment",
        description:
          "Once you get the quote, you need to schedule your shipments. For your convenience, we provide electronic contracts. An email with a link will be sent to you so you can conveniently schedule your service online.",
        icon: <Calendar className="w-5 h-5 text-white" />,
      },
      {
        number: "3",
        title: "Car Pickup",
        description:
          "On the appointed day and within the predetermined time limit, our skilled auto transport driver will come to get your car. Before loading the car on the carrier, they will inspect it and record its condition.",
        icon: <Truck className="w-5 h-5 text-white" />,
      },
      {
        number: "4",
        title: "Car Transportation",
        description:
          "Your car will arrive as soon as you arrive at your seasonal location. A few hours before delivery, the carrier will provide you with an estimated arrival time. If you are unable to do so, you can choose a reliable person to accept the car on your behalf.",
        icon: <CheckCircle className="w-5 h-5 text-white" />,
      },
    ],
    []
  );

  const routes = useMemo(
    () => [
      {
        from: "New York",
        to: "Florida",
        cities: "Miami, Orlando, Tampa, Fort Lauderdale, Naples",
        distance: "1,100 – 1,300",
        time: "4 – 6 days",
      },
      {
        from: "Chicago",
        to: "Arizona",
        cities: "Phoenix, Scottsdale, Tucson",
        distance: "1,500 – 1,800",
        time: "5 – 7 days",
      },
      {
        from: "Boston",
        to: "South Carolina",
        cities: "Charleston, Myrtle Beach, Hilton Head Island",
        distance: "900 – 1,100",
        time: "3 – 5 days",
      },
      {
        from: "Michigan",
        to: "Texas",
        cities: "Houston, Dallas, San Antonio",
        distance: "1,200 – 1,500",
        time: "4 – 6 days",
      },
      {
        from: "Pennsylvania",
        to: "Georgia",
        cities: "Atlanta, Savannah, Augusta",
        distance: "700 – 900",
        time: "3 – 4 days",
      },
      {
        from: "Washington D.C.",
        to: "California",
        cities: "Los Angeles, San Diego, Palm Springs",
        distance: "2,500 – 2,800",
        time: "7 – 10 days",
      },
      {
        from: "Minnesota",
        to: "Nevada",
        cities: "Las Vegas, Henderson",
        distance: "1,600 – 1,900",
        time: "5 – 7 days",
      },
    ],
    []
  );

  const pricingData = useMemo(
    () => [
      {
        distance: "100 to 500 Miles",
        time: "1 - 3 Days",
        open: "$710",
        enclosed: "$930",
      },
      {
        distance: "501 to 1500 Miles",
        time: "3 - 5 Days",
        open: "$1070",
        enclosed: "$1440",
      },
      {
        distance: "1501 to 2500 Miles",
        time: "5 - 7 Days",
        open: "$1370",
        enclosed: "$1720",
      },
      {
        distance: "2501 Miles And Above",
        time: "7 - 9 Days",
        open: "$1680",
        enclosed: "$1,580",
      },
    ],
    []
  );

  const regionalRoutes = useMemo(
    () => [
      {
        title: "Northeast to Southeast",
        from: "States like New York, New Jersey, Massachusetts, and Connecticut",
        to: "Florida destinations such as Miami, Tampa, Fort Lauderdale, and Orlando",
      },
      {
        title: "Midwest to Southeast",
        from: "States like Illinois, Ohio, and Michigan",
        to: "Various parts of Florida and sometimes coastal Georgia",
      },
      {
        title: "Pacific Northwest to Southwest",
        from: "States like Washington and Oregon",
        to: "Arizona (Phoenix, Tucson) and sometimes Southern California",
      },
      {
        title: "Midwest to Southwest",
        from: "States such as Iowa, Missouri, and Nebraska",
        to: "Arizona or Texas (Houston, Dallas, or San Antonio)",
      },
      {
        title: "Northeastern States",
        from: "States like Washington and Oregon",
        to: "Arizona or Southern California",
      },
    ],
    []
  );

  const costFactors = useMemo(
    () => [
      {
        icon: <MapPin className="w-6 h-6 text-white" />,
        title: "Distance",
        description:
          "Distance is the most important factor affecting the shipping cost. It calculates the distance between the pickup and the delivery address. The larger the distance, the less the shipping cost per mile.",
      },
      {
        icon: <Car className="w-6 h-6 text-white" />,
        title: "Vehicle Make & Model",
        description:
          "Our car shipping quote calculator needs the vehicle make and model to prepare for transport properly. Larger vehicles occupy a more significant amount of space, resulting in higher costs.",
      },
      {
        icon: <Package className="w-6 h-6 text-white" />,
        title: "Transport Type",
        description:
          "Rapid Auto Shipping provides customers with two options for snowbird vehicle transportation: open auto transport and enclosed auto transport. Although open auto transport is the typical shipping method, enclosed auto transport offers enhanced protection against weather conditions and debris. The enclosed item is more expensive.",
      },
      {
        icon: <Settings className="w-6 h-6 text-white" />,
        title: "Vehicle Condition",
        description:
          "One important factor to consider is whether your car is in working condition or not. Special equipment is necessary for loading and unloading inoperable cars. Due to this factor, the cost is higher for vehicles that are not in running condition.",
      },
      {
        icon: <Navigation className="w-6 h-6 text-white" />,
        title: "Shipping Route And Location",
        description:
          "The route and shipping location also affect Snowbird auto transport cost because metropolitan areas have more transportation routes than rural areas.",
      },
    ],
    []
  );

  const transportBenefits = useMemo(
    () => [
      {
        icon: <Car className="w-6 h-6 md:w-8 md:h-8 text-white" />,
        title: "Avoid Wear and Tear on Your Vehicle",
        description:
          "Your automobile may accrue needless miles from long-distance driving, which could result in depreciation, technical problems, and eventual repairs. Without the extra miles, Snowbird car shipping guarantees that your car arrives safely and in top condition.",
      },
      {
        icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-white" />,
        title: "Saves Time and Reduces Stress",
        description:
          "It can be quite draining to drive thousands of miles to your vacation or winter residence. Snowbird auto shipping services allow you to travel peacefully by airline or other means while relaxing and have your car delivered straight to your home.",
      },
      {
        icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />,
        title: "Safe and Reliable Transportation",
        description:
          "Our Snowbird auto shipping service guarantees that your car will be handled carefully and with industry-accepted safety precautions. You may rest easy knowing your automobile is safe during the trip with fully insured and certified carriers.",
      },
      {
        icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-white" />,
        title: "Cost-Effective Alternative",
        description:
          "Long-distance driving may be costly when you include gas prices, hotel expenses, meal expenses, and possible auto maintenance. Snowbird auto shipping frequently turns out to be a more cost-effective and effective option.",
      },
      {
        icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-white" />,
        title: "Ideal for Non-Drivable or Classic Cars",
        description:
          "Using a specialized service to transport your vintage, exotic, or non-operational vehicle guarantees safe handling and protection while transporting. For further security, we also provide more secure alternatives like enclosed auto transport.",
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "Will My Vehicle Accumulate Mileage During Transport?",
        answer:
          "No, when you choose Rapid Auto Shipping, your vehicle is transported via a secure truck, preventing any additional mileage. Unlike drive-away services, where a driver physically drives your car, our transport methods ensure no wear and tear on your vehicle.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "What Happens If My Car is Delayed During Transport?",
        answer:
          "Delays due to weather, traffic, or unforeseen events are rare but possible. Rapid Auto Shipping maintains clear communication and provides updates on your vehicle's status. Our team works diligently to minimize delays and ensure a smooth shipping process.",
      },
      {
        icon: <Calculator className="w-5 h-5" />,
        question: "Are There Any Hidden Fees in Your Transport Services?",
        answer:
          "No, we believe in transparent pricing. Our quotes include all costs upfront, with no hidden fees or surprise charges. You'll know exactly what to expect before booking your snowbird car transport.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question: "What Happens if I'm Not Around When My Car is Delivered?",
        answer:
          "The vehicle's pick-up and delivery will require the presence of someone. This is where you sign the pick-up and delivery inspection paperwork. The person must be over 18, have your permission, and preferably be a licensed driver.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "What Payment Methods Do You Accept?",
        answer:
          "For car shipments, Rapid Auto Shipping takes all major credit cards and any sort of certified payment. We take 10-15% of the amount on the day of the pickup, and the balance is due at drop-off, which can be paid to the driver in the form of Cash, Zelle, Venmo, or Certified Check.",
      },
      {
        icon: <Calculator className="w-5 h-5" />,
        question: "Can I Place an Order If I Don't Know the Exact Address?",
        answer:
          "Yes, you can place an order, even if the exact address isn't known, by providing both pickup and delivery cities, ZIP codes, or general areas for pickup and delivery. You could update the details of the final locations closer to the transport date. Please keep in mind that changes may also affect the final cost or schedule.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        question:
          "Can I Include Personal Items in My Vehicle During Transport?",
        answer:
          "Policies vary, but generally, we allow up to 100 lbs of personal belongings to be securely placed in the trunk. However, we recommend avoiding valuable or fragile items, as they are not covered by insurance.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        question: "What Happens If the Trailer Can't Access My Location?",
        answer:
          "If a large transport truck can't access your pickup or delivery address, we will arrange for a nearby location with easier access, such as a parking lot.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Stress-Free Snowbird Car Transport</title>
        <meta
          name="description"
          content="Rapid Auto Shipping provides top-rated seasonal car transport within budget. Call (833) 233-4447 for snowbird car transport service without any upfront fees."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/snowbird-car-transport-service"
        />
        <meta
          property="og:title"
          content="Stress-Free Snowbird Car Transport"
        />
        <meta
          property="og:description"
          content="Rapid Auto Shipping provides top-rated seasonal car transport within budget. Call (833) 233-4447 for snowbird car transport service without any upfront fees."
        />
        <meta
          property="og:url"
          content="https://rapidautoshipping.com/snowbird-car-transport-service "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751707360/snow_bird_grt01t.webp"
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
                      "https://rapidautoshipping.com/snowbird-car-transport-service",
                    name: "komatsu-equipment-shipping",
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
              serviceType: "Snowbird Car Transport Service",
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
                "Reliable snowbird car transport services across the United States by Rapid Auto Shipping. Secure, insured, and transparent car shipping solutions for seasonal travelers.",
              hasFAQ: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Will My Vehicle Accumulate Mileage During Transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No, when you choose Rapid Auto Shipping, your vehicle is transported via a secure truck, preventing any additional mileage. Unlike drive-away services, where a driver physically drives your car, our transport methods ensure no wear and tear on your vehicle.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What Happens If My Car is Delayed During Transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Delays due to weather, traffic, or unforeseen events are rare but possible. Rapid Auto Shipping maintains clear communication and provides updates on your vehicle's status. Our team works diligently to minimize delays and ensure a smooth shipping process.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are There Any Hidden Fees in Your Transport Services?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No, we believe in transparent pricing. Our quotes include all costs upfront, with no hidden fees or surprise charges. You'll know exactly what to expect before booking your snowbird car transport.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What Happens if I'm Not Around When My Car is Delivered?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The vehicle's pick-up and delivery will require the presence of someone. This is where you sign the pick-up and delivery inspection paperwork. The person must be over 18, have your permission, and preferably be a licensed driver.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What Payment Methods Do You Accept?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "For car shipments, Rapid Auto Shipping takes all major credit cards and any sort of certified payment. We take 10-15% of the amount on the day of the pickup, and the balance is due at drop-off, which can be paid to the driver in the form of Cash, Zelle, Venmo, or Certified Check.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I Place an Order If I Don't Know the Exact Address?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, you can place an order even if the exact address isn't known, by providing both pickup and delivery cities, ZIP codes, or general areas. You can update the final details closer to the transport date, but note that changes may affect the cost or schedule.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I Include Personal Items in My Vehicle During Transport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Policies vary, but generally, we allow up to 100 lbs of personal belongings to be securely placed in the trunk. However, we recommend avoiding valuable or fragile items, as they are not covered by insurance.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What Happens If the Trailer Can't Access My Location?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "If a large transport truck can't access your pickup or delivery address, we will arrange for a nearby location with easier access, such as a parking lot.",
                    },
                  },
                ],
              },
              url: "https://rapidautoshipping.com/snowbird-car-transport-service",
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="bg-gray-50 w-full">
        <div className="max-w-full">
          {/* Hero Section - Mobile: solid bg, Desktop: image */}
          <section className="relative py-8 flex items-center w-full bg-[#003366] md:bg-transparent">
            {/* Background Image - Hidden on Mobile */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,q_auto,f_auto/v1751707228/1719158775_fncitk.webp"
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
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#glassPattern)"
                />
              </svg>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center z-10 px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 md:bg-[#001933]/40 max-w-3xl rounded-lg p-3 sm:p-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-center sm:text-left text-white md:text-white">
                    Stress-Free Snowbird{" "}
                    <span className="text-[#ff5722]">
                      Car Transport Service
                    </span>
                  </h1>

                  {/* Paragraph - Hidden on Mobile */}
                  <p className="hidden md:block text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed text-center sm:text-left">
                    As the winter season comes down, thousands of individuals
                    migrate from colder lands to sunny destinations. Seasonal
                    car transport is a challenging task due to high demand,
                    tight deadlines, and excessive vehicle wear and tear. Rapid
                    Auto Shipping efficiently transports over 3,000 vehicles
                    with outstanding carrier networks and advanced technologies.
                    Our happy consumers trust us for dependability and
                    convenience and praise our personalized Snowbird Car
                    Transport services.
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
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        What Is Snowbird Car Transport?
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Snowbird Car Transport is a car relocation service for
                      "snowbirds" or "individuals" who reside in colder states
                      and migrate to warmer climates during winter.
                      Traditionally, snowbirds are retirees or seasonal visitors
                      who live most of their lives in sunny destinations but
                      relocate between a primary residence and a second home.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Seasonal car shipping is more beneficial for snowbirds
                      than driving. Snowbird car transport service is more
                      efficient, secure, and time-saving. Our snowbird car
                      shipping enables individuals and businesses to have their
                      cars transported from one location to another without
                      having to drive them themselves.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10">
                      <Image
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751707360/snow_bird_grt01t.webp"
                        alt="Shipping Service - Professional Transport"
                        width={800}
                        height={400}
                        loading="lazy"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 py-8 px-4 mt-10">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h2
                  className="text-4xl font-bold mb-4"
                  style={{ color: "#003366" }}
                >
                  Snowbird Auto Shipping Services
                </h2>
                <div
                  className="w-24 h-1 mx-auto"
                  style={{ backgroundColor: "#ff5722" }}
                ></div>
              </div>

              {/* Main Section */}
              <div className="mb-12">
                <h3
                  className="text-3xl font-bold mb-8 text-center"
                  style={{ color: "#003366" }}
                >
                  Why Choose Rapid Auto Shipping For Snowbird Shipping?
                </h3>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <p className="text-gray-700 text-lg text-center mb-10 leading-relaxed max-w-5xl mx-auto">
                    At Rapid Auto Shipping, we know that putting your car in
                    someone else's hands is a big decision. That's why we're
                    committed to delivering a hassle-free, worry-free, and
                    secure seasonal auto shipping experience. With 14 years of
                    experience and thousands of happy customers in the U.S.,
                    we've established a reputation for excellence. Here are just
                    a few reasons why our customers return to us time and time
                    again for their Snowbird auto shipping needs:
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {features.map((feature, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-lg p-6 border-l-4 hover:shadow-lg transition-shadow duration-300"
                          style={{ borderLeftColor: "#ff5722" }}
                        >
                          {/* Mobile Layout - Centered */}
                          <div className="block md:hidden text-center mb-6">
                            <div
                              className="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center"
                              style={{ backgroundColor: "#ff5722" }}
                            >
                              {feature.icon}
                            </div>
                            <h4
                              className="text-xl font-semibold mb-4"
                              style={{ color: "#003366" }}
                            >
                              {feature.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>

                          {/* Desktop Layout - Left Aligned */}
                          <div className="hidden md:block">
                            <div className="flex items-start mb-4">
                              <div
                                className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: "#ff5722" }}
                              >
                                {feature.icon}
                              </div>
                              <h4
                                className="text-xl font-semibold"
                                style={{ color: "#003366" }}
                              >
                                {feature.title}
                              </h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed ml-16">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* 24/7 Support Section */}
                  <div className="text-center mb-8">
                    <div
                      className="bg-white rounded-lg p-8 border-2 max-w-3xl mx-auto hover:shadow-lg transition-shadow duration-300"
                      style={{ borderColor: "#ff5722" }}
                    >
                      <div
                        className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                        style={{ backgroundColor: "#003366" }}
                      >
                        <Phone className="w-10 h-10 text-white" />
                      </div>
                      <h4
                        className="text-2xl font-semibold mb-4"
                        style={{ color: "#003366" }}
                      >
                        24/7 Dedicated Customer Support
                      </h4>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Our 24/7 customer support team can answer any questions.
                        For Snowbirds seeking reliable auto transport, we make
                        the process easy from quote to delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Section */}
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <h3
                    className="text-3xl font-bold mb-6"
                    style={{ color: "#003366" }}
                  >
                    Let us ship your Snowbird car so you can enjoy your
                    vacation!
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                    Experience worry-free seasonal auto transport with America's
                    trusted snowbird shipping specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #ff5722 100%)",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative max-w-7xl mx-auto px-4 py-20">
                <div className="text-center text-white">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    Snowbird Car Shipping
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                    Professional seasonal auto transport services for your
                    winter getaway
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Shipping Section */}
            <div className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2
                    className="text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Why Choose Shipping Over Driving Yourself?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Relocating your car to a warmer climate can be done quickly,
                    easily, and efficiently by selecting Snowbird Car Transport
                    service. Here are some reasons why hiring a professional
                    auto transport is preferable to driving your own car:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 h-full">
                        {/* Mobile Center Layout */}
                        <div className="block md:hidden text-center">
                          <div
                            className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {benefit.icon}
                          </div>
                          <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: "#003366" }}
                          >
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:block">
                          <div
                            className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {benefit.icon}
                          </div>
                          <h3
                            className="text-2xl font-bold mb-4"
                            style={{ color: "#003366" }}
                          >
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
                    Let us handle your snowbird car transportation needs so you
                    can concentrate on enjoying your seasonal holidays!
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <div className="py-16 px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h3
                    className="text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    How Snowbird Shipping Works?
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Snowbird car shipping services make it easy and stress-free
                    for people who don't want to drive long distances to get to
                    their summer homes. We can make sure that your car gets to
                    its destination safely and quickly, whether you're going
                    south for the winter or just for a short trip. Here are a
                    few simple steps to start your snowbird car transport
                    journey:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {shippingSteps.map((step, index) => (
                    <div key={index} className="relative">
                      {/* Mobile Center Layout */}
                      <div className="block md:hidden text-center">
                        <div
                          className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                          style={{ backgroundColor: "#003366" }}
                        >
                          {step.number}
                        </div>
                        <div
                          className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center -mt-10 relative z-10"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          {step.icon}
                        </div>
                        <h4
                          className="text-xl font-bold mb-3"
                          style={{ color: "#003366" }}
                        >
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:block text-center">
                        <div
                          className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                          style={{ backgroundColor: "#003366" }}
                        >
                          {step.number}
                        </div>
                        <div
                          className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center -mt-12 relative z-10"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          {step.icon}
                        </div>
                        <h4
                          className="text-xl font-bold mb-3"
                          style={{ color: "#003366" }}
                        >
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {index < shippingSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                          <ArrowRight className="w-6 h-6 text-gray-300" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    By leaving the logistics to the experts, Snowbird auto
                    shipment allows you to enjoy your winter getaway without
                    having to deal with the inconvenience of a lengthy trip!
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Types Section */}
            <div className="py-16 px-4" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h3
                    className="text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    What are the Types of Snowbird Car Shipping?
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    First, Snowbird car shipping is just like a car shipping
                    service, but it is made to withstand winter snow and
                    obstacles when shipping your car to snowy areas. Rapid Auto
                    Shipping provides two primary car shipping services for
                    Snowbird Auto Transport. These are as follows:
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div
                    className="bg-white rounded-2xl p-8 shadow-lg border-l-4"
                    style={{ borderLeftColor: "#ff5722" }}
                  >
                    {/* Mobile Center Layout */}
                    <div className="block md:hidden text-center">
                      <div
                        className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        <Truck className="w-8 h-8 text-white" />
                      </div>
                      <h4
                        className="text-2xl font-bold mb-4"
                        style={{ color: "#003366" }}
                      >
                        Open Auto Shipping
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        This is the most common and affordable way to ship your
                        car. It exposes your car to open air and road debris,
                        making it suitable to ship family or daily use cars. If
                        you are a seasonal mover and want an affordable option
                        for your standard car, we've got you covered.
                      </p>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                      <div className="flex items-center mb-6">
                        <div
                          className="w-14 h-14 rounded-xl mr-4 flex items-center justify-center"
                          style={{ backgroundColor: "#ff5722" }}
                        >
                          <Truck className="w-7 h-7 text-white" />
                        </div>
                        <h4
                          className="text-2xl font-bold"
                          style={{ color: "#003366" }}
                        >
                          Open Auto Shipping
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        This is the most common and affordable way to ship your
                        car. It exposes your car to open air and road debris,
                        making it suitable to ship family or daily use cars. If
                        you are a seasonal mover and want an affordable option
                        for your standard car, we've got you covered.
                      </p>
                    </div>
                  </div>

                  <div
                    className="bg-white rounded-2xl p-8 shadow-lg border-l-4"
                    style={{ borderLeftColor: "#003366" }}
                  >
                    {/* Mobile Center Layout */}
                    <div className="block md:hidden text-center">
                      <div
                        className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: "#003366" }}
                      >
                        <Package className="w-8 h-8 text-white" />
                      </div>
                      <h4
                        className="text-2xl font-bold mb-4"
                        style={{ color: "#003366" }}
                      >
                        Enclosed Auto Shipping
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        This is for special vehicles like vintage, classic, or
                        sports cars. Your car will be loaded in an enclosed
                        container. This provides a unique, secure vessel for
                        your car, cutting it off from harsh winter elements.
                        This comes at an extra cost but offers complete safety
                        for your car.
                      </p>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                      <div className="flex items-center mb-6">
                        <div
                          className="w-14 h-14 rounded-xl mr-4 flex items-center justify-center"
                          style={{ backgroundColor: "#003366" }}
                        >
                          <Package className="w-7 h-7 text-white" />
                        </div>
                        <h4
                          className="text-2xl font-bold"
                          style={{ color: "#003366" }}
                        >
                          Enclosed Auto Shipping
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        This is for special vehicles like vintage, classic, or
                        sports cars. Your car will be loaded in an enclosed
                        container. This provides a unique, secure vessel for
                        your car, cutting it off from harsh winter elements.
                        This comes at an extra cost but offers complete safety
                        for your car.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Routes Section */}
            <div className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <h3
                  className="text-4xl font-bold text-center mb-8"
                  style={{ color: "#003366" }}
                >
                  Common Snowbird Shipping Routes
                </h3>
                <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                  Below, we have provided a table of state-wise common snowbird
                  shipping routes.
                </p>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead style={{ backgroundColor: "#003366" }}>
                        <tr className="text-white">
                          <th className="px-4 md:px-6 py-4 text-left font-semibold">
                            Starting Location
                          </th>
                          <th className="px-4 md:px-6 py-4 text-left font-semibold">
                            Destination
                          </th>
                          <th className="px-4 md:px-6 py-4 text-left font-semibold">
                            Popular Cities
                          </th>
                          <th className="px-4 md:px-6 py-4 text-left font-semibold">
                            Estimated Distance (Miles)
                          </th>
                          <th className="px-4 md:px-6 py-4 text-left font-semibold">
                            Estimated Delivery Time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {routes.map((route, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-orange-50 transition-colors duration-200`}
                          >
                            <td
                              className="px-4 md:px-6 py-4 font-semibold"
                              style={{ color: "#003366" }}
                            >
                              {route.from}
                            </td>
                            <td
                              className="px-4 md:px-6 py-4 font-semibold"
                              style={{ color: "#ff5722" }}
                            >
                              {route.to}
                            </td>
                            <td className="px-4 md:px-6 py-4 text-gray-600 text-sm">
                              {route.cities}
                            </td>
                            <td className="px-4 md:px-6 py-4 text-gray-800">
                              {route.distance}
                            </td>
                            <td className="px-4 md:px-6 py-4 text-gray-800">
                              {route.time}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-lg text-gray-600 mb-6">
                    This table presents a summary of popular snowbird auto
                    transport routes, offering insights into estimated travel
                    times and distances.
                  </p>
                </div>

                {/* Regional Routes */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4
                    className="text-3xl font-bold text-center mb-8"
                    style={{ color: "#003366" }}
                  >
                    Popular Region-Based Snowbird Shipping Routes:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regionalRoutes.map((route, index) => (
                      <div
                        key={index}
                        className="border-l-4 pl-6 py-4"
                        style={{ borderLeftColor: "#ff5722" }}
                      >
                        <h5
                          className="text-xl font-bold mb-3"
                          style={{ color: "#003366" }}
                        >
                          {route.title}
                        </h5>
                        <div className="space-y-2">
                          <p className="text-gray-600">
                            <span className="font-semibold">From:</span>{" "}
                            {route.from}
                          </p>
                          <p className="text-gray-600">
                            <span className="font-semibold">To:</span>{" "}
                            {route.to}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="py-16 px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <h3
                  className="text-4xl font-bold text-center mb-8"
                  style={{ color: "#003366" }}
                >
                  Cost Of Snowbird Car Shipping Service
                </h3>
                <div className="mb-8 bg-gray-50 rounded-2xl p-8 shadow-lg">
                  <p className="text-lg text-gray-700 text-center leading-relaxed mb-6">
                    The cost of Snowbird car shipping service is approximately{" "}
                    <span className="font-bold" style={{ color: "#ff5722" }}>
                      $1.40 per mile
                    </span>{" "}
                    for distances between 1 and 500 miles. For example, a
                    350-mile trip would cost $490. The cost per mile of shipping
                    a car decreases as the distance increases. For example, if
                    the distance is around 1000 miles, the cost per mile drops
                    to $1, resulting in a total cost of $1000. The cost of
                    coast-to-coast auto transport can be as low as $0.60 per
                    mile.
                  </p>
                  <h4
                    className="text-2xl font-bold text-center mb-6"
                    style={{ color: "#003366" }}
                  >
                    Here is the Average-Estimated Cost of Snowbird Shipping:
                  </h4>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead style={{ backgroundColor: "#ff5722" }}>
                        <tr className="text-white">
                          <th className="px-4 md:px-6 py-4 text-left font-semibold">
                            Distance
                          </th>
                          <th className="px-4 md:px-6 py-4 text-left font-semibold">
                            Estimated Time
                          </th>
                          <th className="px-4 md:px-6 py-4 text-left font-semibold">
                            Estimated Open Transport Cost
                          </th>
                          <th className="px-4 md:px-6 py-4 text-left font-semibold">
                            Estimated Enclosed Transport Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {pricingData.map((pricing, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-blue-50 transition-colors duration-200`}
                          >
                            <td
                              className="px-4 md:px-6 py-4 font-semibold"
                              style={{ color: "#003366" }}
                            >
                              {pricing.distance}
                            </td>
                            <td className="px-4 md:px-6 py-4 text-gray-700">
                              {pricing.time}
                            </td>
                            <td className="px-4 md:px-6 py-4 font-bold text-green-600">
                              {pricing.open}
                            </td>
                            <td
                              className="px-4 md:px-6 py-4 font-bold"
                              style={{ color: "#ff5722" }}
                            >
                              {pricing.enclosed}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cost Factors */}
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                  <h4
                    className="text-3xl font-bold text-center mb-8"
                    style={{ color: "#003366" }}
                  >
                    Factors Affecting Shipping Cost
                  </h4>
                  <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto">
                    To be precise, the transportation cost varies depending on
                    various factors, and distance is one of them. These factors
                    will determine whether the cost will be lowered or higher
                    for different vehicles with different services in different
                    conditions. Here are a few important factors you should know
                    about while shipping a car.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {costFactors.map((factor, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200">
                          {/* Mobile Center Layout */}
                          <div className="block md:hidden text-center">
                            <div
                              className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                              style={{ backgroundColor: "#ff5722" }}
                            >
                              {factor.icon}
                            </div>
                            <h5
                              className="text-lg font-bold mb-3"
                              style={{ color: "#003366" }}
                            >
                              {factor.title}
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {factor.description}
                            </p>
                          </div>

                          {/* Desktop Layout */}
                          <div className="hidden md:block">
                            <div
                              className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                              style={{ backgroundColor: "#ff5722" }}
                            >
                              {factor.icon}
                            </div>
                            <h5
                              className="text-lg font-bold mb-3"
                              style={{ color: "#003366" }}
                            >
                              {factor.title}
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {factor.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="py-16 px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h4
                    className="text-4xl font-bold mb-4"
                    style={{ color: "#003366" }}
                  >
                    Benefits of Snowbird Auto Transport
                  </h4>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Snowbird auto transport provides numerous advantages to
                    seasonal travelers who need their vehicles during the
                    winter. Here are some of the essential benefits of utilizing
                    Snowbird auto transport services:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {transportBenefits.map((benefit, index) => (
                    <div key={index} className="group">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 h-full">
                        {/* Mobile Center Layout */}
                        <div className="block md:hidden text-center">
                          <div
                            className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {benefit.icon}
                          </div>
                          <h5
                            className="text-xl font-bold mb-3"
                            style={{ color: "#003366" }}
                          >
                            {benefit.title}
                          </h5>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:block">
                          <div
                            className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: "#ff5722" }}
                          >
                            {benefit.icon}
                          </div>
                          <h5
                            className="text-xl font-bold mb-3"
                            style={{ color: "#003366" }}
                          >
                            {benefit.title}
                          </h5>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div
              className="py-16 px-4"
              style={{
                background: "linear-gradient(135deg, #003366 0%, #ff5722 100%)",
              }}
            >
              <div className="max-w-4xl mx-auto text-center text-white">
                <h3 className="text-4xl font-bold mb-6">
                  Ready to Ship Your Vehicle?
                </h3>
                <p className="text-xl mb-8 opacity-90">
                  Get your free quote today and experience worry-free snowbird
                  auto transport
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                    Get Free Quote Now
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-800 transition-colors duration-300">
                    Call (555) 123-4567
                  </button>
                </div>
              </div>
            </div>
          </div>

          <StatsSection />

          <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                        Rapid Auto Shipping: Your Trusted Seasonal Auto
                        Transport Partner
                      </h2>
                      <div className="h-1 w-24 bg-[#ff5722] mt-4 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      Rapid Auto Shipping is your trusted partner for seasonal
                      auto transport. We offer stress-free and dependable
                      snowbird car transport services throughout the United
                      States. Our area of expertise is the transportation of a
                      wide range of vehicles, such as automobiles, motorcycles,
                      ATVs, and boats, at competitive rates that are customized
                      to meet your specific requirements. We have accumulated 14
                      years of experience in this field. Our committed team
                      guarantees a seamless and stress-free experience by
                      providing door-to-door delivery that is fully insured,
                      with transparent pricing and no concealed fees.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      We prioritize safety, efficiency, and customer
                      satisfaction, regardless of whether you are traveling to
                      the South for the winter or returning home in the summer.
                      To obtain a personalized car shipping quote, contact us at
                      (833) 233-4447 or fill out our quick online form.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative group">
                    {/* Image */}
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative group">
                        {/* Image with enhanced effects */}
                        <Image
                          src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_800,q_auto,f_auto/v1751707212/1379684024_lsprug.webp"
                          alt="Shipping Service - Professional Transport Solutions"
                          width={800}
                          height={400}
                          loading="lazy"
                          className="w-full h-[400px] object-cover rounded-2xl shadow-2xl 
                 transition-all duration-700 ease-in-out
                 group-hover:scale-105 group-hover:shadow-3xl
                 group-hover:brightness-110 group-hover:contrast-105"
                        />

                        {/* Overlay gradient for better text readability */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        />

                        {/* Optional: Loading skeleton */}
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl -z-10" />

                        {/* Optional: Decorative corner accent */}
                        <div
                          className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full 
                    animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

                      {/* Optional: Image caption/badge */}
                      <div
                        className="absolute bottom-4 left-4 bg-white/90 
                  px-3 py-1 rounded-lg text-sm font-medium text-gray-800
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                  transform translate-y-2 group-hover:translate-y-0"
                      >
                        Professional Transport
                      </div>
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
        </div>
      </div>
    </>
  );
};

export default Home;