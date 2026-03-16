import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import ShippingOptions from "@/components/Services/ShippingOptions";
import TransportForm from "@/components/CommonComponents/Form";
import ShippingOptions_2 from "@/components/Services/ShippingOption-2";
import WhyUs from "@/components/Home/Why-us";
import TestimonialSwiper from "@/components/Home/swipper";
import Key_banner from "@/components/CommonComponents/key-banner.jsx";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; // Import next/image

function Services() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const fromInputRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const canonicalUrl = `${process.env.NEXT_PUBLIC_FRONT_URL}/services`;
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isDateBasedSwitching, setIsDateBasedSwitching] = useState(true);

  const services = [
    [
      {
        name: "Line Haul Transport",
        url: "https://rapidautoshipping.com/services/line-haul-transport",
      },
      {
        name: "RV Transport",
        url: "https://rapidautoshipping.com/services/rv-transport",
      },
      {
        name: "Multi Car Transport",
        url: "https://rapidautoshipping.com/services/multi-car-shipping",
      },
    ],
    [
      {
        name: "Food Truck Shipping",
        url: "https://rapidautoshipping.com/services/food-truck-shipping",
      },
      {
        name: "Track My Vehicle",
        url: "https://rapidautoshipping.com/how-can-i-track-my-vehicle-while-in-transit",
      },
      {
        name: "Collector Show Cars Shipping",
        url: "https://rapidautoshipping.com/ultimate-guide-shipping-collector-show-cars",
      },
    ],
    [
      {
        name: "Long Distance Towing",
        url: "https://rapidautoshipping.com/long-distance-towing-service",
      },
      {
        name: "Trailer Transport",
        url: "https://rapidautoshipping.com/trailer-transport-service",
      },
      {
        name: "Yacht Shipping",
        url: "https://rapidautoshipping.com/yacht-shipping",
      },
    ],
    [
      {
        name: "Non-Running Vehicle Transport",
        url: "https://rapidautoshipping.com/non-running-vehicle-transport",
      },
      {
        name: "Bus Shipping",
        url: "https://rapidautoshipping.com/services/cost-to-ship-a-bus",
      },
      {
        name: "Forklift Transportation",
        url: "https://rapidautoshipping.com/services/forklift-transportation-company",
      },
    ],
    [
      {
        name: "Fifth Wheel Transport",
        url: "https://rapidautoshipping.com/services/fifth-wheel-transport",
      },
      {
        name: "Isuzu NPR Truck Hauling",
        url: "https://rapidautoshipping.com/services/hauling-isuzu-npr-truck",
      },
      {
        name: "Ambulance Shipping",
        url: "https://rapidautoshipping.com/services/ambulance-shipping",
      },
    ],
    [
      {
        name: "Cheap Car Shipping",
        url: "https://rapidautoshipping.com/services/cheap-car-shipping",
      },
      {
        name: "Komatsu Equipment Shipping",
        url: "https://rapidautoshipping.com/services/komatsu-equipment-shipping",
      },
      {
        name: "New Holland Tractor Shipping",
        url: "https://rapidautoshipping.com/services/new-holland-tractor",
      },
    ],
    [
      {
        name: "Car Shipping Calculator",
        url: "https://rapidautoshipping.com/services/car-shipping-calculator",
      },
      {
        name: "Cargo Vans Shipping",
        url: "https://rapidautoshipping.com/ship-cargo-vans",
      },
      {
        name: "Tractor Transport",
        url: "https://rapidautoshipping.com/services/tractor-transport",
      },
    ],
    [
      {
        name: "Average Cost to Ship a Car",
        url: "https://rapidautoshipping.com/services/average-cost-to-ship-a-car",
      },
      {
        name: "Rental Car Shipping",
        url: "https://rapidautoshipping.com/rental-car-auto-transport-service",
      },
      {
        name: "Auto Transport for Car Resellers",
        url: "https://rapidautoshipping.com/auto-transport-for-car-resellers",
      },
      {
        name: "Best Truck Shipping Services",
        url: "https://rapidautoshipping.com/services/truck-shipping-service",
      },
      {
        name: "Exotic Car Transport",
        url: "https://rapidautoshipping.com/exotic-car-transport",
      },
      {
        name: "Car Shipping Services",
        url: "https://rapidautoshipping.com/services/car-shipping-services ",
      },
    ],
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (fromInputRef.current) {
      fromInputRef.current.focus();
      console.log("Component Mounted");
    }
  }, []);

  // Date-based switching functionality
  useEffect(() => {
    if (isDateBasedSwitching) {
      const updateTabBasedOnDate = () => {
        // Get current date in US Eastern Time
        const now = new Date();
        const usDate = new Date(
          now.toLocaleString("en-US", { timeZone: "America/New_York" }),
        );
        const currentDate = usDate.getDate();

        // Switch tabs based on odd/even dates
        // Even dates (2, 4, 6, etc.) = Tab 0 (Services We Offer)
        // Odd dates (1, 3, 5, etc.) = Tab 1 (Who We Serve)
        const newActiveSection = currentDate % 2 === 0 ? 0 : 1;
        setActiveSection(newActiveSection);
      };

      // Set initial tab based on current date
      updateTabBasedOnDate();

      // Check for date change every minute
      const dateCheckInterval = setInterval(updateTabBasedOnDate, 60000);

      return () => {
        clearInterval(dateCheckInterval);
      };
    }
  }, [isDateBasedSwitching]);

  const handleSectionChange = (index) => {
    setActiveSection(index);
    // Pause date-based switching when user manually clicks
    setIsDateBasedSwitching(false);

    // Resume date-based switching after 24 hours of manual interaction
    setTimeout(
      () => {
        setIsDateBasedSwitching(true);
      },
      24 * 60 * 60 * 1000,
    ); // 24 hours
  };

  return (
    <>
      <div>
        <Head>
          <script type="application/ld+json">
            {JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@id": "https://rapidautoshipping.com",
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
                ],
              },
            ])}
          </script>

          <title>
            Vehicle Shipping Services | Nationwide Auto Transport by Rapid Auto
            Shipping
          </title>
          <meta
            name="description"
            content="Explore reliable auto transport services including open, enclosed, door-to-door, and expedited shipping. Rapid Auto Shipping moves your vehicle safely across the USA with no upfront fees."
          />
          <link rel="canonical" href="/services" />
        </Head>

        <Navbar />

        {/* Vehicle Shipping Header */}
        <div className="bg-white pt-12 relative">
          <div className="absolute flex items-center justify-center md:right-[35%] z-0">
            <Image
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1745245157/rapid-home/Rapid-auto-shipping-usa.png"
              alt="background"
              width={1200}
              height={800}
              className="w-[650px] h-auto"
              priority={true} // Prioritize for LCP
            />
          </div>
          <div className="bg-white bg-opacity-5 rounded-xl px-2 md:px-8 md:p-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1
                  className="text-4xl xl:text-5xl font-[700] text-h1color"
                  style={{ lineHeight: 1.3 }}
                >
                  OUR NATIONWIDE AUTO{" "}
                  <span className="text-rapidcolor">TRANSPORT SERVICES</span>
                </h1>
                <div className="flex">
                  {/* ... (paragraph and button remain unchanged) */}
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <TransportForm className="w-full max-w-lg" ref={fromInputRef} />
              </div>
            </div>
          </div>
        </div>

        {/* Services Section with Flip Button */}
        <div className="container m-auto">
          <section className="flex flex-col items-center justify-center px-2 md:px-10 pb-10">
            <div className="flex justify-center space-x-4 mb-6 mt-8 relative">
              <button
                onClick={() => handleSectionChange(0)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                  activeSection === 0
                    ? "bg-rapidcolor text-white scale-105 shadow-lg"
                    : "bg-white border border-rapidcolor text-rapidcolor hover:bg-gray-100"
                }`}
              >
                Services We Offer
              </button>
              <button
                onClick={() => handleSectionChange(1)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                  activeSection === 1
                    ? "bg-rapidcolor text-white scale-105 shadow-lg"
                    : "bg-white border border-rapidcolor text-rapidcolor hover:bg-gray-100"
                }`}
              >
                Who We Serve
              </button>
            </div>

            {/* Open Transport Section */}
            <div
              className={`transition-all duration-500 w-full ${
                activeSection === 0 ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <ShippingOptions />
            </div>

            {/* Enclosed Transport Section */}
            <div
              className={`transition-all duration-500 w-full ${
                activeSection === 1 ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <ShippingOptions_2 />
            </div>
          </section>
          <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12"></div>

              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {services.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="relative border-b last:border-b-0 border-gray-100"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff5722] opacity-70"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                      {row.map((service, colIndex) => {
                        const itemKey = `${rowIndex}-${colIndex}`;
                        const isHovered = hoveredItem === itemKey;

                        return (
                          <div
                            key={colIndex}
                            className={`p-4 rounded-xl transition-all duration-300 ${
                              isHovered
                                ? "bg-[#ff5722] shadow-lg shadow-[#ff5722]/20 scale-105"
                                : "bg-gray-50 hover:bg-gray-100"
                            }`}
                            onMouseEnter={() => setHoveredItem(itemKey)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <Link
                              href={service.url}
                              className={`flex items-center justify-between font-medium ${
                                isHovered ? "text-white" : "text-gray-700"
                              }`}
                            >
                              <span className="text-lg">{service.name}</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 transition-transform duration-300 ${
                                  isHovered ? "transform translate-x-1" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke={isHovered ? "white" : "#ff5722"}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link href="/calculator">
                  <button className="px-8 py-4 bg-[#ff5722] text-white font-semibold rounded-full shadow-lg shadow-[#ff5722]/30 hover:shadow-xl hover:shadow-[#ff5722]/40 hover:bg-[#e64a19] transition-all duration-300 transform hover:-translate-y-1">
                    Get a Free Quote Today
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <WhyUs />
        <TestimonialSwiper />
        <Key_banner />

        <Footer />
      </div>
    </>
  );
}

export default Services;
