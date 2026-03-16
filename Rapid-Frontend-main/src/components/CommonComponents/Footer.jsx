import React from "react";
import Link from "next/link";
Image;
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white border-t w-full border-gray-200 pt-4 px-5">
        <div className="w-full mx-auto">
          <span className="text-center text-4xl mx-auto flex justify-center font-[600]">
            Our Locations
          </span>
          <div className="bg-black w-[40%] h-[2px] my-3 mx-auto"></div>
          <div className="flex flex-col md:flex-row my-8 md:my-16 justify-center items-center gap-4">
            <div className="w-72 h-60 border-[#f2f3f4] border-[2px] flex flex-col items-center justify-center">
              <div className="flex items-center justify-center h-24 w-70">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_280,h_96,c_fill/v1742815186/footer/Pennsylvania.webp"
                  className="object-contain"
                  width={280}
                  height={96}
                  alt="Auto Transport Services in Pennsylvania by Rapid Auto Shipping"
                  loading="lazy"
                />
              </div>
              <div className="bg-black w-[70%] h-[2px] my-3"></div>
              <div className="text-center">
                <span className="text-xl mb-2 font-[500]">
                  Headquarters (HQ)
                </span>
                <p>
                  817 Herman Road,
                  <br /> Horsham PA 19044
                </p>
              </div>
            </div>
            <div className="w-72 h-60 border-[#f2f3f4] border-[2px] flex flex-col items-center justify-center">
              <div className="flex items-center justify-center h-24 w-70">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742815186/footer/Delaware.webp"
                  className="object-contain"
                  width={280}
                  height={96}
                  alt="Delaware Auto Transport Services by Rapid Auto Shipping"
                  loading="lazy"
                />
              </div>
              <div className="bg-black w-[70%] h-[2px] my-3"></div>
              <div className="text-center">
                <span className="text-xl mb-2 font-[500]">
                  Registered Address
                </span>
                <p>
                  1209 Orange Street,
                  <br /> Wilmington, New Castle, DE 19801
                </p>
              </div>
            </div>
            <div className="w-72 h-60 border-[#f2f3f4] border-[2px] flex flex-col items-center justify-center">
              <div className="flex items-center justify-center h-28 w-72">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_288,h_112,c_fit,q_auto,f_webp/v1742815163/footer/Alabama.webp"
                  className="object-cover"
                  width={288}
                  height={112}
                  alt="Alabama Car Shipping and Auto Transport Services by Rapid Auto Shipping"
                  loading="lazy"
                />
              </div>
              <div className="bg-black w-[70%] h-[2px] my-3"></div>
              <div className="text-center">
                <span className="text-xl mb-2 font-[500]">Branch Address</span>
                <p>
                  701 Commerce Dr,
                  <br /> Gulf Shores, AL 36542
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="container mx-auto">
          {/* Grid layout for footer sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <span className="sr-only">Rapid Auto Shipping</span>
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
              <p className="text-xl md:text-base lg:text-sm text-black-900 mt-4 font-sans">
                We are your trusted Auto shipping partner you can rely on and we
                give you quick fixes. Use our uncomplicated online express car
                shipping calculator for an instant and budget-friendly quote.
                Our chat is open 24/7 to meet all of your auto-shipping needs.
              </p>
              <div className="flex space-x-4 mt-4 text-black-500">
                <Link
                  href="https://www.facebook.com/Rapidautoshipping"
                  className="flex items-center"
                  aria-label="Visit our Facebook page"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF size={20} className="hover:text-gray-800" />
                </Link>
                <Link
                  href="https://x.com/ShippingRapid"
                  className="flex items-center"
                  aria-label="Visit our X profile"
                >
                  <span className="sr-only">X</span>
                  <FaXTwitter size={20} className="hover:text-gray-800" />
                </Link>
                <Link
                  href="https://www.instagram.com/rapidautoshipping"
                  className="flex items-center"
                  aria-label="Visit our Instagram page"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram size={20} className="hover:text-gray-800" />
                </Link>
                <Link
                  href="https://www.youtube.com/@rapidautoshipping9439"
                  className="flex items-center"
                  aria-label="Visit our YouTube channel"
                >
                  <span className="sr-only">Youtube</span>
                  <FaYoutube size={20} className="hover:text-gray-800" />
                </Link>
                <Link
                  href="https://www.threads.net/@rapidautoshipping"
                  className="flex items-center"
                  aria-label="Visit our Threads profile"
                >
                  <span className="sr-only">Threads</span>
                  <BsThreads size={20} className="hover:text-gray-800" />
                </Link>
                <Link
                  href="https://www.pinterest.com/rapidautoshipping"
                  className="flex items-center"
                  aria-label="Visit our Pinterest page"
                >
                  <span className="sr-only">Pinterest</span>
                  <FaPinterestP size={20} className="hover:text-gray-800" />
                </Link>
              </div>
            </div>

            {/* Scope of Services */}
            <div className="lg:col-span-1">
              <span className="text-2xl md:text-lg font-semibold font-sans text-gray-800 mb-4">
                Scope Of Services
              </span>
              <ul className="text-xl md:text-base lg:text-sm space-y-2 text-gray-600">
                <li>
                  <Link
                    href="/services/door-to-door-auto-transport"
                    className="hover:text-gray-800"
                  >
                    Door-to-Door Auto Transport
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/forklift-transportation-company"
                    className="hover:text-gray-800"
                  >
                    Forklift Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/fifth-wheel-transport"
                    className="hover:text-gray-800"
                  >
                    Fifth Wheel Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ambulance-shipping"
                    className="hover:text-gray-800"
                  >
                    Ambulance Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/lowboy-shipping"
                    className="hover:text-gray-800"
                  >
                    Lowboy Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tractor-transport"
                    className="hover:text-gray-800"
                  >
                    Tractor Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rental-car-auto-transport-service"
                    className="hover:text-gray-800"
                  >
                    Rental Car Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs/boat-shipping-cost-calculator"
                    className="hover:text-gray-800"
                  >
                    Boat Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/motorcycle-shipping"
                    className="hover:text-gray-800"
                  >
                    Motorcycle Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/yacht-shipping" className="hover:text-gray-800">
                    Yacht Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/non-running-vehicle-transport"
                    className="hover:text-gray-800"
                  >
                    Non-Running Vehicle Shipping
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pages */}
            <div className="lg:col-span-1">
              <span className="text-2xl md:text-lg font-semibold text-gray-800 mb-4">
                Pages
              </span>
              <ul className="text-xl md:text-base lg:text-sm space-y-2 text-gray-600">
                <li>
                  <Link
                    href="https://rapidautoshipping.com"
                    className="hover:text-gray-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/blogs"
                    className="hover:text-gray-800"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/about-us"
                    className="hover:text-gray-800"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/reviews"
                    className="hover:text-gray-800"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/contact-us"
                    className="hover:text-gray-800"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/states"
                    className="hover:text-gray-800"
                  >
                    Auto Transport States
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/state-to-state"
                    className="hover:text-gray-800"
                  >
                    Auto Transport State to State
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/city-to-city"
                    className="hover:text-gray-800"
                  >
                    Auto Transport City to City
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/auto-transport-carriers"
                    className="hover:text-gray-800"
                  >
                    Auto Transport Carriers
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/cars"
                    className="hover:text-gray-800"
                  >
                    Auto Transport by Car
                  </Link>
                </li>
                <li>
                  <a
                    href="https://rapidautoshipping.com/sitemap.xml"
                    className="hover:text-gray-800"
                  >
                    Sitemap
                  </a>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/faqs"
                    className="hover:text-gray-800"
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/privacy-policy"
                    className="hover:text-gray-800"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rapidautoshipping.com/terms-and-conditions"
                    className="hover:text-gray-800"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <span className="text-2xl md:text-lg font-semibold text-gray-800 mb-4">
                Contact
              </span>
              <div className="space-y-4 text-xl md:text-base lg:text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt size={20} className="text-gray-800" />
                  <Link href="tel:+18332334447" className="truncate">
                    +1 (833) 233-4447
                  </Link>
                </div>
              </div>

              {/* FMCSA Image and Info */}
              <div className="mt-6 flex flex-col items-start">
                <div className="w-full max-w-[300px] md:max-w-[320px] lg:max-w-[280px]">
                  <img
                    src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_280,h_80,c_fit,q_auto,f_webp/v1746629498/footer/Fmcsa.webp"
                    alt="Fmcsa"
                    className="w-full h-auto object-contain"
                    width="280"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-lg md:text-base text-gray-600">
                    Federal Motor Carrier Safety Administration
                    <b>
                      {" "}
                      MC #: 1685548 <br /> U.S.DOT #: 4320359
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t bg-rapidcolor border-gray-200 mt-8 py-5 px-6 md:px-10 text-xs sm:text-sm text-lime-50">
            <div className="flex justify-between items-center flex-wrap">
              <span className="whitespace-normal">
                © {currentYear} Rapid Auto Shipping. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
