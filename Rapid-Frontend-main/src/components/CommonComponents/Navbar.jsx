"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdOutlinePhone, MdMenu, MdClose } from "react-icons/md";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { BsThreads } from "react-icons/bs";
import { FaPinterestP, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";

const GA_TRACKING_ID = "G-KWPC9CG7M4";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const messages = [
    {
      text: "Trusted by 10,000+ Customers Nationwide",
      highlight: "4.9 ★ Rating",
      href: "https://maps.app.goo.gl/ZB7nPKu5Fqw6zQ5u9",
      linkText: "Read Reviews",
      internal: true,
    },
    {
      text: "Limited Time: Save on Cross-Country Auto Transport",
      highlight: "Get Your Free Quote",
      href: "/services/car-shipping-calculator",
      linkText: "Calculate Cost",
      internal: true,
    },
    {
      text: "Fully Insured & Bonded — Door-to-Door Car Shipping",
      highlight: "Licensed & Certified",
      href: "/how-it-works",
      linkText: "Learn How It Works",
      internal: true,
    },
    {
      text: "Ship Your Car in 24-48 Hours — Free Instant Quotes",
      highlight: "No Hidden Fees",
      href: "/services/car-shipping-calculator",
      linkText: "Get a Quote →",
      internal: true,
    },
  ];

  const toggleMobileSubmenu = (index) => {
    setMobileSubmenu(mobileSubmenu === index ? null : index);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [messages.length]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GA_TRACKING_ID);
    };
  }, []);

  return (
    <>
      <section className="w-full mx-auto">
        {/* ── Top Bar with Rotating Messages ── */}
        <div className="border-b-2 mx-auto bg-gray-50 h-[50px] flex flex-row items-center justify-between px-4 md:px-8 z-50">
          {/* Rotating Messages */}
          <div className="w-full md:w-[70%] overflow-hidden relative h-[50px] flex items-center pr-8 md:pr-0">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center transition-all duration-500 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <span className="text-black font-medium text-sm">
                  {msg.text}
                  {msg.highlight && (
                    <span className="text-[#FF5722] font-bold ml-1">
                      — {msg.highlight}
                    </span>
                  )}
                  {msg.href && (
                    <Link
                      href={msg.href}
                      className="text-blue-900 underline font-bold ml-2 hover:text-[#FF5722] transition-colors"
                    >
                      {msg.linkText}
                    </Link>
                  )}
                </span>
              </div>
            ))}

            {/* Progress dots */}
            <div className="absolute right-0 hidden md:flex gap-1.5 items-center">
              {messages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#FF5722] w-4"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Show message ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Social Links — hidden on mobile */}
          <div className="hidden md:flex md:w-[30%] justify-end gap-4">
            <Link
              href="https://www.facebook.com/Rapidautoshipping"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-rapidcolor hover:text-blue-600 transition duration-300 flex items-center"
              aria-label="Visit our Facebook page"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://x.com/ShippingRapid"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-rapidcolor hover:text-blue-600 transition duration-300 flex items-center"
              aria-label="Visit our X profile"
            >
              <span className="sr-only">X</span>
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/rapidautoshipping"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-rapidcolor hover:text-blue-600 transition duration-300 flex items-center"
              aria-label="Visit our Instagram page"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@rapidautoshipping9439"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-rapidcolor hover:text-blue-600 transition duration-300 flex items-center"
              aria-label="Visit our YouTube channel"
            >
              <span className="sr-only">YouTube</span>
              <FaYoutube size={20} />
            </Link>
            <Link
              href="https://www.pinterest.com/rapidautoshipping"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-rapidcolor hover:text-blue-600 transition duration-300 flex items-center"
              aria-label="Visit our Pinterest page"
            >
              <span className="sr-only">Pinterest</span>
              <FaPinterestP size={20} />
            </Link>
            <Link
              href="https://www.threads.net/@rapidautoshipping"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-rapidcolor hover:text-blue-600 transition duration-300 flex items-center"
              aria-label="Visit our Threads profile"
            >
              <span className="sr-only">Threads</span>
              <BsThreads size={20} />
            </Link>
          </div>
        </div>

        {/* ── Main Navbar ── */}
        <nav className="bg-white w-full sticky top-0 z-[100] transition-transform duration-500">
          <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap justify-between items-center py-2">
            <button
              className="xl:hidden text-rapidcolor focus:outline-none"
              name="mobileMenuToggle"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
            </button>
            <Link href="/" aria-label="Rapid Auto Shipping Homepage">
              <div className="w-[144px] md:w-[202px] aspect-[3.156] relative">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/q_auto,f_auto,w_202,h_64/v1746875096/icons/qggrlgu02t3mfvfeps3v.webp"
                  alt="Rapid Auto Shipping Logo – Trusted Nationwide Vehicle Transport Services"
                  fill
                  priority
                  sizes="(max-width: 768px) 144px, 202px"
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="hidden xl:flex xl:items-center xl:justify-center order-2 flex-grow">
              <ul className="flex border-[2px] border-[#e1e1e1] rounded-[50px] py-2 px-4 flex-col md:flex-row justify-between text-sm lg:text-base font-medium w-auto mx-auto">
                <li className="px-2 xl:px-4">
                  <Link
                    href="/how-it-works"
                    className="block py-2 hover:text-rapidcolor"
                  >
                    How It Works
                  </Link>
                </li>
                <li className="relative group px-2 xl:px-4">
                  <Link
                    href="/services"
                    className="flex items-center space-x-1 hover:text-rapidcolor py-2"
                  >
                    <span>Services</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <div className="absolute hidden group-hover:flex top-full left-1/2 -translate-x-1/2 p-4 bg-white border-[1px] border-gray-400 shadow-3d rounded-[30px] w-[700px] z-50 gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex-1 bg-gray-50 rounded-[20px] p-3">
                      <span className="font-bold text-gray-800 mb-2">
                        Services We Offer
                      </span>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/open-auto-transport"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Open Carrier Transport
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/enclosed-car-transport"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Enclosed Car Transport Service
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/exotic-car-transport"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Exotic Car Transport
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/classic-car-shipping"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Shipping Classic Cars
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/ship-car-to-another-state"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Ship Car to Another State
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/ship-car-across-the-country"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Ship Car Across the Country
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1 bg-[radial-gradient(circle,_rgba(255,216,205,1)_0%,_rgba(243,247,252,1)_100%)] rounded-[20px] p-3">
                      <span className="font-bold text-gray-800 mb-2">
                        Who We Serve
                      </span>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/relocating-families-car-shipping-services"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Relocating Families
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/college-student-car-shipping"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            College Student Car Shipping
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/transporting-cars-for-dealerships"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Dealerships
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/multi-car-shipping"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Multi Car Transport
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/auto-auction-shipping"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Auto Auction
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/auto-transport-for-car-resellers"
                            className="block py-1 px-2 hover:bg-white rounded-lg hover:text-rapidcolor"
                          >
                            Auto Transport for Car Resellers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="px-2 xl:px-4">
                  <Link
                    href="/about-us"
                    className="block py-2 hover:text-rapidcolor"
                  >
                    Why Rapid
                  </Link>
                </li>
                <li className="px-2 xl:px-4">
                  <Link
                    href="/deals"
                    className="block py-2 hover:text-rapidcolor"
                  >
                    Deals
                  </Link>
                </li>
                <li className="relative group px-2 xl:px-4">
                  <Link
                    href="/services/car-shipping-calculator"
                    className="flex items-center space-x-1 hover:text-rapidcolor py-2"
                  >
                    <span>Cost Calculator</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <div className="absolute hidden group-hover:block top-full right-0 p-4 bg-white border-[1px] border-gray-400 shadow-3d rounded-[30px] w-[350px] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ul className="space-y-3">
                      <li className="transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                        <Link
                          href="/services/car-shipping-calculator"
                          className="flex items-center p-2"
                        >
                          <span className="text-2xl mr-3">🚗</span>
                          <div>
                            <div className="font-medium">
                              Car Shipping Cost Calculator
                            </div>
                            <div className="text-xs text-gray-500">
                              Calculate costs for car transportation
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                        <Link
                          href="/services/cost-to-ship-a-bus"
                          className="flex items-center p-2"
                        >
                          <span className="text-2xl mr-3">🚌</span>
                          <div>
                            <div className="font-medium">
                              Bus Shipping Cost Calculator
                            </div>
                            <div className="text-xs text-gray-500">
                              Calculate costs for bus transportation
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                        <Link
                          href="/blogs/boat-shipping-cost-calculator"
                          className="flex items-center p-2"
                        >
                          <span className="text-2xl mr-3">🚢</span>
                          <div>
                            <div className="font-medium">
                              Boat Shipping Cost Calculator
                            </div>
                            <div className="text-xs text-gray-500">
                              Calculate costs for marine transportation
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                        <Link
                          href="/motorcycle-shipping"
                          className="flex items-center p-2"
                        >
                          <span className="text-2xl mr-3">🏍️</span>
                          <div>
                            <div className="font-medium">
                              Motorcycle Shipping Cost Calculator
                            </div>
                            <div className="text-xs text-gray-500">
                              Calculate costs for motorcycle transportation
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="xl:flex items-center animate-zoomBlinkNumber order-3">
              <Link href="tel:+18332334447">
                <button className="bg-white font-[700] flex items-center gap-2 px-3 py-2 xl:py-3 rounded-full hover:bg-rapidcolor text-sm xl:text-base hover:text-white">
                  <MdOutlinePhone className="text-xl text-green-500" />
                  <span className="text-sm xl:text-lg text-[#003366] hover:text-white">
                    (833) 233-4447
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* ── Mobile Menu ── */}
          {mobileMenuOpen && (
            <div className="xl:hidden absolute top-14 left-0 w-full order-1 bg-white shadow-md z-50 overflow-hidden transition-all duration-300 ease-in-out max-h-[80vh] overflow-y-auto">
              <ul className="flex flex-col text-base font-medium divide-y divide-gray-100">
                <li className="transition-all duration-200 hover:bg-gray-50">
                  <Link
                    href="/how-it-works"
                    className="block px-4 py-1 hover:text-rapidcolor text-xl"
                  >
                    How It Works
                  </Link>
                </li>
                {/* Services Dropdown */}
                <li className="transition-all duration-200">
                  <div
                    className="flex items-center gap-5 px-4 hover:bg-gray-50 cursor-pointer"
                    onClick={() => toggleMobileSubmenu("services")}
                  >
                    <Link
                      href="/services"
                      className="block py-1 hover:text-rapidcolor text-xl"
                    >
                      Services
                    </Link>
                    <div className="text-gray-500">
                      {mobileSubmenu === "services" ? (
                        <IoIosArrowUp size={25} />
                      ) : (
                        <IoIosArrowDown size={25} />
                      )}
                    </div>
                  </div>
                  {mobileSubmenu === "services" && (
                    <div className="bg-gray-50 px-2 py-2 animate-fadeIn">
                      <div className="rounded-lg bg-white overflow-hidden border border-gray-200 mb-3">
                        <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
                          <span className="font-semibold text-gray-900">
                            Services We Offer
                          </span>
                        </div>
                        <ul className="py-1">
                          <li>
                            <Link
                              href="/open-auto-transport"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Open Carrier Transport
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/enclosed-car-transport"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Enclosed Car Transport Service
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/exotic-car-transport"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Exotic Car Transport
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/classic-car-shipping"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Shipping Classic Cars
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/ship-car-to-another-state"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Ship Car to Another State
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/ship-car-across-the-country"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Ship Car Across the Country
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg bg-[radial-gradient(circle,_rgba(255,216,205,1)_0%,_rgba(243,247,252,1)_100%)] overflow-hidden border border-gray-200">
                        <div className="px-3 py-2">
                          <span className="font-semibold text-gray-900">
                            Who We Serve
                          </span>
                        </div>
                        <ul className="py-1">
                          <li>
                            <Link
                              href="/relocating-families-car-shipping-services"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Relocating Families
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/college-student-car-shipping"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              College Student Car Shipping
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/transporting-cars-for-dealerships"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Dealerships
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/multi-car-shipping"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Multi Car Transport
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/auto-auction-shipping"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Auto Auction
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/auto-transport-for-car-resellers"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Auto Transport for Car Resellers
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                {/* Why Rapid */}
                <li className="transition-all duration-200 hover:bg-gray-50">
                  <Link
                    href="/about-us"
                    className="block px-4 py-1 hover:text-rapidcolor text-xl"
                  >
                    Why Rapid
                  </Link>
                </li>
                <li className="transition-all duration-200 hover:bg-gray-50">
                  <Link
                    href="/deals"
                    className="block px-4 py-1 hover:text-rapidcolor text-xl"
                  >
                    Deals
                  </Link>
                </li>
                {/* Cost Calculator Dropdown */}
                <li className="transition-all duration-200">
                  <div
                    className="flex items-center gap-5 px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    onClick={() => toggleMobileSubmenu("calculator")}
                  >
                    <Link
                      href="/services/car-shipping-calculator"
                      className="hover:text-rapidcolor text-xl"
                    >
                      Cost Calculator
                    </Link>
                    <div className="text-gray-500">
                      {mobileSubmenu === "calculator" ? (
                        <IoIosArrowUp size={25} />
                      ) : (
                        <IoIosArrowDown size={25} />
                      )}
                    </div>
                  </div>
                  {mobileSubmenu === "calculator" && (
                    <div className="bg-gray-50 px-2 py-2 animate-fadeIn">
                      <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
                        <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
                          <h4 className="font-semibold text-gray-900">
                            Shipping Cost Calculator
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                            <Link
                              href="/services/car-shipping-calculator"
                              className="flex items-center p-2"
                            >
                              <span className="text-2xl mr-3">🚗</span>
                              <div>
                                <div className="font-medium">
                                  Car Shipping Cost Calculator
                                </div>
                                <div className="text-xs text-gray-500">
                                  Calculate costs for car transportation
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                            <Link
                              href="/services/cost-to-ship-a-bus"
                              className="flex items-center p-2"
                            >
                              <span className="text-2xl mr-3">🚌</span>
                              <div>
                                <div className="font-medium">
                                  Bus Shipping Cost Calculator
                                </div>
                                <div className="text-xs text-gray-500">
                                  Calculate costs for bus transportation
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                            <Link
                              href="/blogs/boat-shipping-cost-calculator"
                              className="flex items-center p-2"
                            >
                              <span className="text-2xl mr-3">🚢</span>
                              <div>
                                <div className="font-medium">
                                  Boat Shipping Cost Calculator
                                </div>
                                <div className="text-xs text-gray-500">
                                  Calculate costs for marine transportation
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                            <Link
                              href="/motorcycle-shipping"
                              className="flex items-center p-2"
                            >
                              <span className="text-2xl mr-3">🏍️</span>
                              <div>
                                <div className="font-medium">
                                  Motorcycle Shipping Cost Calculator
                                </div>
                                <div className="text-xs text-gray-500">
                                  Calculate costs for motorcycle transportation
                                </div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                {/* Contact button for mobile */}
                <li className="px-4 py-3">
                  <Link href="tel:+18332334447">
                    <button className="bg-white border-2 font-[600] border-rapidcolor text-rapidcolor flex items-center gap-2 px-3 py-2 xl:py-3 rounded-full hover:bg-rapidcolor hover:text-white text-sm xl:text-base">
                      <MdOutlinePhone className="text-xl xl:text-2xl text-green-500" />
                      <span className="text-sm xl:text-lg">(833) 233-4447</span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </section>
    </>
  );
}
