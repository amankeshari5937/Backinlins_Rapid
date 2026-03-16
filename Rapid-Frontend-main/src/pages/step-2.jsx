"use client"; // Required for client-side features in Next.js App Router

import { GiFastForwardButton } from "react-icons/gi";
import { FaCheck, FaCheckDouble } from "react-icons/fa";
import { useState, useEffect } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Lock } from "lucide-react";
import { IoClose } from "react-icons/io5";
import ReviewSwiper from "../components/Home/swipper.jsx";

export default function QuotePage() {
  const router = useRouter();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEmailSending, setIsEmailSending] = useState(false); // Loading state for email
  const searchParams = useSearchParams();
  const quoteIdFromUrl = searchParams.get("quote_id");

  // Fetch form data only when quote_id is provided
  useEffect(() => {
    const fetchFormData = async () => {
      setLoading(true);
      setError(null);

      // If no quote_id is provided, do not fetch any data
      if (!quoteIdFromUrl) {
        setError("No quote ID provided");
        setLoading(false);
        return;
      }

      // Validate backend URL
      if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
        setError("Backend URL is not configured");
        setLoading(false);
        return;
      }

      try {
        // Fetch specific form by quote_id
        console.log(`Fetching form for quote_id: ${quoteIdFromUrl}`);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/by-quote/${quoteIdFromUrl}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const text = await response.text();
          throw new Error(
            `Failed to fetch form for quote_id ${quoteIdFromUrl}: ${response.status} - ${text}`
          );
        }

        const form = await response.json();
        console.log("Form data:", form);

        if (!form || Object.keys(form).length === 0) {
          throw new Error(`No form found for quote_id: ${quoteIdFromUrl}`);
        }

        setFormData(form);
      } catch (error) {
        console.error("Error fetching form data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormData();
  }, [quoteIdFromUrl]);

  // Pre-fetch the next page when formData is available
  useEffect(() => {
    if (formData?.quote_id) {
      console.log(`Prefetching /step-3?quote_id=${formData.quote_id}`);
      router.prefetch(`/step-3?quote_id=${formData.quote_id}`);
    }
  }, [formData?.quote_id, router]);

  const rapidPrice = formData?.price && formData?.insurance_price 
  ? Number(formData.price) + Number(formData.insurance_price) 
  : formData?.price 
    ? Number(formData.price) 
    : formData?.insurance_price 
      ? Number(formData.insurance_price) 
      : 0;

const marketPrice = rapidPrice 
  ? Math.round((rapidPrice * 1.19).toFixed(2)) 
  : 0;

  const calculateTransitTime = (distance) => {
    if (!distance) return "Within 7 days";
    const miles = parseInt(distance, 10);
    if (miles <= 300) return "Same Day / Overnight";
    if (miles <= 600) return "1-2 Days";
    if (miles <= 1000) return "2-3 Days";
    if (miles <= 1500) return "3-4 Days";
    if (miles <= 2000) return "3-5 Days";
    return "5-7 Days";
  };

  const handleLockPriceClick = async () => {
    if (!formData?.quote_id) {
      console.error("No quote_id available for navigation");
      setError("Cannot proceed: No quote ID available");
      return;
    }

    // setIsEmailSending(true); // Show loading state (optional)

    // Start email sending in the background (commented out)
    /*
    console.time("Email Request");
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: formData?.email || "default@example.com",
        subject: "Your Price Has Been Locked!",
        message: generateEmailTemplate(),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send email");
        }
        console.log("Email sent successfully!");
        console.timeEnd("Email Request");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        console.timeEnd("Email Request");
      })
      .finally(() => setIsEmailSending(false));
    */

    // Navigate immediately
    console.time("Navigation");
    router.push(`/step-3?quote_id=${formData.quote_id}`);
    console.timeEnd("Navigation");
  };

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen py-6 px-4 text-red-600">
        Error: {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen py-6 px-4 text-gray-600">
        Loading...
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="bg-gray-50 min-h-screen py-6 px-4 text-red-600">
        No quote data available
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto py-2 flex items-center justify-between px-3">
        <div className="flex items-center">
          <img
            src="/images/rapidautoshipping-logo.webp"
            alt="Logo"
            className="h-8 md:h-12 lg:h-14 w-auto"
          />
        </div>
        <button className="bg-white border-2 font-[600] border-rapidcolor text-rapidcolor flex items-center gap-1 md:gap-2 px-1 md:px-3 lg:px-5 py-2 md:py-3 rounded-full hover:bg-rapidcolor hover:text-white text-xs md:text-sm lg:text-lg">
          <MdOutlinePhone className="text-lg md:text-xl lg:text-4xl text-green-500" />
          <span className="text-xs md:text-sm lg:text-2xl">
            {" "}
            (833) 233-4447
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div
        className="container mx-auto"
        style={{
          background:
            "linear-gradient(0deg, rgba(255,212,198,1) 0%, rgba(253,253,253,1) 76%)",
        }}
      >
        <div className="flex flex-col md:flex-row w-full md:w-[95%] lg:w-[90%] gap-4 p-2 md:p-4 mx-auto font-sans">
          {/* Left Section */}
          <div className="flex-1 border border-gray-700 rounded-lg p-3 md:p-4">
            {/* Alert Message */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-2 md:p-3 mb-4 md:mb-6">
              <p className="text-gray-800 text-sm md:text-base">
                Your quote has been sent to your email.
                <br />
                Excited to proceed? Great news! You can book your shipment now
                with{" "}
                <span className="text-red-500 font-medium">
                  No Payment Required.
                </span>
              </p>
            </div>

            {/* Price Comparison */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-7 my-6 md:my-12">
              {/* Rapid's Price */}
              <div
                className="flex-1 relative border-2 border-green-500 rounded-lg p-3 md:p-4 shadow-3d"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,212,198,1) 0%, rgba(253,253,253,1) 55%)",
                }}
              >
                <div className="absolute right-2 md:right-2 -top-5 md:-top-7">
                  <img
                    src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746099916/Social_media_icons/bbb-rating.webp"
                    className="w-24 md:w-32"
                  />
                </div>
                <div className="flex items-center mb-2 md:mb-3">
                  <GiFastForwardButton className="text-green-500 text-xl md:text-3xl mr-1 md:mr-2" />
                  <span className="text-orange-500 font-bold mr-1 md:mr-2 text-xl md:text-3xl">
                    Rapid's
                  </span>
                  <span className="text-black font-bold text-xl md:text-3xl">
                    Price
                  </span>
                </div>
                <div className="text-gray-600 text-5xl md:text-7xl font-semibold mb-2 md:mb-4">
                  <span className="text-2xl md:text-3xl">$</span>
                  {rapidPrice}
                </div>
                <ul className="space-y-1 md:space-y-2">
                  <li className="flex items-center gap-2 md:gap-3">
                    <FaCheckDouble className="text-base md:text-xl text-green-500" />
                    <span className="text-base md:text-xl">No Hidden Fees</span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-3">
                    <FaCheckDouble className="text-base md:text-xl text-green-500" />
                    <span className="text-base md:text-xl">
                      Rapid's Price Guarantee
                    </span>
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 -ml-1 md:-ml-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center gap-2 md:gap-3">
                    <FaCheckDouble className="text-base md:text-xl text-green-500" />
                    <span className="text-base md:text-xl">
                      Insurance Included
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-3">
                    <FaCheckDouble className="text-base md:text-xl text-green-500" />
                    <span className="text-base md:text-xl">Door to Door</span>
                  </li>
                </ul>
              </div>

              {/* Market Price */}
              <div className="flex-1 border border-gray-700 bg-white/30 backdrop-blur-md rounded-lg p-2">
                <div className="flex gap-2 md:gap-3 items-center mb-2 md:mb-3">
                  <div className="bg-red-500 rounded-full p-1">
                    <IoClose className="text-white text-xl md:text-2xl" />
                  </div>
                  <span className="text-blue-600 font-bold mr-1 md:mr-2 text-xl md:text-3xl">
                    Market
                  </span>
                  <span className="text-black font-bold text-xl md:text-3xl">
                    Price
                  </span>
                </div>
                <div className="relative inline-block">
                  <div
                    className="text-gray-600 text-5xl md:text-7xl font-semibold mb-2 md: Sylvia
mb-4"
                  >
                    <span className="text-2xl md:text-3xl">$</span>
                    {marketPrice + ".03"}
                  </div>
                  <div className="absolute top-[25px] md:top-[40px] left-3 md:left-4 -right-3 md:-right-5 h-1 bg-gray-500 transform -rotate-[165deg]"></div>
                </div>
                <ul className="space-y-1 md:space-y-2">
                  <li className="flex items-center gap-2 md:gap-3">
                    <FaCheck className="text-base md:text-xl" />
                    <span className="text-base md:text-xl">
                      Hidden Fees Included
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-3">
                    <FaCheck className="text-base md:text-xl" />
                    <span className="text-base md:text-xl">
                      No Price Guarantee
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-3">
                    <FaCheck className="text-base md:text-xl" />
                    <span className="text-base md:text-xl">
                      No Insurance Included
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-3">
                    <FaCheck className="text-base md:text-xl" />
                    <span className="text-base md:text-xl">
                      Bait And Switch
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Lock Price Button */}
            <div className="p-2 md:p-4 flex justify-center items-center">
              <button
                onClick={handleLockPriceClick}
                disabled={isEmailSending}
                className={`group relative bg-white border-2 border-orange-500 text-orange-500 font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg flex items-center justify-between transition-all duration-300 ease-in-out shadow-md shadow-gray-900/50 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md hover:bg-orange-50 ${
                  isEmailSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <div className="flex items-center space-x-2 md:space-x-4">
                  <Lock className="w-6 h-6 md:w-8 md:h-8 text-green-500 transition-transform group-hover:scale-110" />
                  <span className="text-base md:text-xl group-hover:text-orange-600 transition-colors">
                    {isEmailSending ? "Processing..." : "Lock Your Price Now"}
                  </span>
                </div>
                <MdKeyboardDoubleArrowRight className="text-green-500 text-3xl md:text-5xl font-extrabold" />
              </button>
            </div>

            {/* Additional Information */}
            <div className="space-y-1 md:space-y-2 my-6 md:my-10">
              <div className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2 flex items-center justify-center">
                  <img
                    src="/images/tick-image-67c56d98523f2.webp"
                    className="w-full h-full"
                  />
                </div>
                <span className="text-base md:text-xl font-bold">
                  Not sure about the exact date? No problem!
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2 flex items-center justify-center">
                  <img
                    src="/images/tick-image-67c56d98523f2.webp"
                    className="w-full h-full"
                  />
                </div>
                <span className="text-base md:text-xl font-bold">
                  You can update it anytime.
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2 flex items-center justify-center">
                  <img
                    src="/images/tick-image-67c56d98523f2.webp"
                    className="w-full h-full"
                  />
                </div>
                <span className="text-base md:text-xl font-bold">
                  You'll still have the chance to review your order.
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="border-t border-gray-300 flex-grow"></div>
              <div className="px-2 md:px-4 text-2xl md:text-4xl font-bold">
                - OR -
              </div>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            {/* Call Option */}
            <div className="mb-4 md:mb-6 cursor-pointer w-[fit-content] mx-auto">
              <p className="text-center text-base md:text-lg mb-2 md:mb-4">
                Schedule with one of our friendly Customer Service Agents!
              </p>
              <a
                href="tel:+18332334447"
                className="block w-full border-2 border-green-500 bg-white rounded-full py-2 md:py-3 px-3 md:px-4 text-center"
              >
                <div className="flex items-center justify-center">
                  <div className="bg-green-500 rounded-full p-1 md:p-2 mr-1 md:mr-2">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-orange-500 text-xl md:text-3xl font-bold">
                    +1 (833) 233-4447
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-64 lg:w-72 space-y-2">
            {/* Reservation Details */}
            <div className="border border-gray-700 rounded-lg p-3 md:p-4">
              <h2 className="text-xl md:text-2xl text-[#535353] font-semibold mb-1 md:mb-2">
                Reservation Details
              </h2>
              <div className="h-[8px] md:h-[10px] w-[50%] bg-[#d9d9d9] mb-1"></div>
              <div className="text-3xl md:text-4xl font-bold">
                <span className="text-rapidcolor text-4xl md:text-6xl">$</span>
                <span className="text-3xl md:text-5xl">0</span>
                <span className="text-xl md:text-3xl font-normal text-gray-600">
                  /Due Now
                </span>
              </div>
            </div>

            {/* Quote Overview */}
            <div className="border border-gray-700 rounded-lg flex justify-center items-center bg-red-50 p-2">
              <h2 className="text-xl md:text-2xl text-center font-semibold mb-1 md:mb-2">
                Overview of the Quote
              </h2>
            </div>

            {/* Route Details */}
            <div className="border border-gray-700 rounded-lg p-3 md:p-4">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Route details
                </h2>
              </div>

              <>
                {/* Quote ID */}
                <div className="mb-3 md:mb-4">
                  <div className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <span className="text-gray-600 text-base md:text-lg">
                      Quote ID
                    </span>
                  </div>
                  <p className="ml-6 md:ml-7 text-sm md:text-base">
                    {formData?.quote_id || "N/A"}
                  </p>
                  <hr className="mt-2 border-gray-200" />
                </div>

                {/* From */}
                <div className="mb-3 md:mb-4">
                  <div className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-600 text-base md:text-lg">
                      From
                    </span>
                  </div>
                  <p className="ml-6 md:ml-7 text-sm md:text-base">
                    {formData?.ship_form || "N/A"}
                  </p>
                  <hr className="mt-2 border-gray-200" />
                </div>

                {/* To */}
                <div className="mb-3 md:mb-4">
                  <div className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-600 text-base md:text-lg">
                      To
                    </span>
                  </div>
                  <p className="ml-6 md:ml-7 text-sm md:text-base">
                    {formData?.ship_to || "N/A"}
                  </p>
                  <hr className="mt-2 border-gray-200" />
                </div>

                {/* First Pick up Date */}
                <div className="mb-3 md:mb-4">
                  <div className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-600 text-base md:text-lg">
                      First Pick up Date
                    </span>
                  </div>
                  <p className="ml-6 md:ml-7 text-sm md:text-base">
                    {formData?.pickup_date || "N/A"}
                  </p>
                  <hr className="mt-2 border-gray-200" />
                </div>

                {/* Vehicle */}
                <div className="mb-3 md:mb-4">
                  <div className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        d="M1.5 13.5h21v3h-21zm2-8h17v2h-17z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 10.5H4.5v2h-3v7h3v2h15v-2h3v-7h-3v-2H17"
                      ></path>
                      <circle cx="7.5" cy="16.5" r="1.5" />
                      <circle cx="16.5" cy="16.5" r="1.5" />
                    </svg>
                    <span className="text-gray-600 text-base md:text-lg">
                      Vehicle
                    </span>
                  </div>
                  <p className="ml-6 md:ml-7 text-sm md:text-base truncate">
                    {formData
                      ? `${formData?.year} ${formData?.make} ${formData.model}`
                      : "N/A"}
                  </p>
                  <hr className="mt-2 border-gray-200" />
                </div>

                {/* Transit Time */}
                <div className="mb-3 md:mb-4">
                  <div className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600 text-base md:text-lg">
                      Transit Time
                    </span>
                  </div>
                  <p className="ml-6 md:ml-7 text-sm md:text-base">
                    {calculateTransitTime(formData?.distance)}
                  </p>
                  <hr className="mt-2 border-gray-200" />
                </div>

                {/* Transport Type */}
                <div className="mb-3 md:mb-4">
                  <div className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                    <span className="text-gray-600 text-base md:text-lg">
                      Transport Type
                    </span>
                  </div>
                  <p className="ml-6 md:ml-7 text-sm md:text-base">
                    {formData?.transport_method || "N/A"}
                  </p>
                  <hr className="mt-2 border-gray-200" />
                </div>

                {/* Vehicle Condition */}
                <div className="mb-3 md:mb-4">
                  <div className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                    <span className="text-gray-600 text-base md:text-lg">
                      Vehicle Condition
                    </span>
                  </div>
                  <p className="ml-6 md:ml-7 text-sm md:text-base">
                    {formData?.vehicle_type || "N/A"}
                  </p>
                  <hr className="mt-2 border-gray-200" />
                </div>

                {/* Price (if available) */}
                {formData?.price && (
                  <div className="mb-3 md:mb-4">
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600 text-base md:text-lg">
                        Price
                      </span>
                    </div>
                    <p className="ml-6 md:ml-7 text-sm md:text-base">
                      ${rapidPrice}
                    </p>
                    <hr className="mt-2 border-gray-200" />
                  </div>
                )}

                {/* FMCSA Information */}
                <div className="flex items-center mt-4 md:mt-6">
                  <div className="w-14 h-14 md:w-20 md:h-20 mr-2">
                    <img
                      src="/images/US_DOT_Triskelion.png"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="text-[#003e7e] font-bold text-sm md:text-base">
                    <p>FMCSA</p>
                    <p>MC #: 1685548</p>
                    <p>U.S.DOT #: 4320359</p>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
      <ReviewSwiper />
    </>
  );
}
