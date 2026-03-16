"use client";

import { useState, useEffect } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Head from "next/head";

export default function ShippingQuote() {
  const [progress, setProgress] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();
  const searchParams = useSearchParams(); // To read query parameters

  const sentences = [
    "Distance to be Covered ....",
    "Checking Your Routes ....",
    "Dates Available ....",
    "Calculating Cost ....",
  ];

  // Effect to load LiveChat script
  useEffect(() => {
    window.__lc = window.__lc || {};
    window.__lc.license = 18971929;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";

    (function (n, t, c) {
      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h)
            throw new Error(
              "[LiveChatWidget] You can't use getters before load.",
            );
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          var n = t.createElement("script");
          n.async = true;
          n.type = "text/javascript";
          n.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(n);
        },
      };
      !n.__lc.asyncInit && e.init();
      n.LiveChatWidget = n.LiveChatWidget || e;
    })(window, document, [].slice);

    return () => {
      const script = document.querySelector(
        'script[src="https://cdn.livechatinc.com/tracking.js"]',
      );
      if (script) {
        script.remove();
      }
      delete window.__lc;
      delete window.LiveChatWidget;
    };
  }, []);

  // Effect to fetch form data and update URL
  useEffect(() => {
    let progressInterval;
    let pollInterval;

    const fetchLatestForm = async () => {
      try {
        if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
          throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const forms = await response.json();
        console.log("API Response:", forms);

        if (!Array.isArray(forms) || forms.length === 0) {
          console.warn("No forms returned from API");
          setError("No form data available. Please try again.");
          return;
        }

        const latestForm = forms.sort((a, b) => b.quote_id - a.quote_id)[0];
        console.log("Latest formData:", latestForm);

        setFormData(latestForm);
        setError(null);

        // Update URL with quote_id without reloading
        if (latestForm?.quote_id) {
          const currentQuoteId = searchParams.get("quote_id");
          if (currentQuoteId !== latestForm.quote_id.toString()) {
            router.replace(`?quote_id=${latestForm.quote_id}`, {
              scroll: false,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching form data:", error.message);
        setError("Failed to fetch form data. Please try again.");
      }
    };

    // Initial fetch
    fetchLatestForm();
    // Polling every 5 seconds
    pollInterval = setInterval(fetchLatestForm, 5000);

    // Progress bar logic
    const totalDuration = 180000; // 3 minutes
    const intervalTime = 1000; // 1 second
    const totalSteps = totalDuration / intervalTime;
    const increment = 100 / totalSteps;

    progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + increment, 100);
        console.log("Progress:", newProgress);
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          clearInterval(pollInterval);
        }
        return newProgress;
      });
    }, intervalTime);

    // Pre-fetch step-2
    router.prefetch("/step-2");

    // Cleanup
    return () => {
      clearInterval(pollInterval);
      clearInterval(progressInterval);
    };
  }, [router, searchParams]);

  // Immediate redirect if price is available
  useEffect(() => {
    if (formData?.price && formData?.quote_id) {
      console.log("Price found, redirecting to /step-2");
      router.push(`/step-2?quote_id=${formData.quote_id}`);
    }
  }, [formData, router]);

  // Handle redirects when progress reaches 100 (for no price)
  useEffect(() => {
    if (progress >= 100 && formData && !formData?.price) {
      console.log("Navigation check - formData:", formData);
      if (formData?.quote_id) {
        console.log("No price, sending email and redirecting to /waiting");
        router.push(`/waiting?quote_id=${formData.quote_id}`);
      } else {
        console.warn("quote_id is missing, redirecting to /waiting");
        router.push("/waiting");
      }
    }
  }, [progress, formData, router]);

  // Typing effect
  useEffect(() => {
    const typingSpeed = 100;
    const pauseDuration = 1000;
    const currentSentence = sentences[sentenceIndex];

    if (isTyping && charIndex < currentSentence.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentSentence[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    } else if (charIndex === currentSentence.length) {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
        setIsTyping(true);
      }, pauseDuration);
      setIsTyping(false);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, sentenceIndex, isTyping]);

  return (
    <>
      <Head>

        
      </Head>
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="w-full max-w-4xl bg-white lg:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 max-h-[100vh] overflow-y-auto">
          {/* Left Section */}
          <div className="flex flex-col order-2 md:order-1">
            <div className="relative">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/images/grey-67b734c9585d2.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="relative h-full w-full flex flex-col justify-center px-6 py-4">
                <h3 className="text-3xl font-bold text-white text-center mb-4">
                  Transport Details
                </h3>
                <div className="text-white text-base">
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="font-semibold">Quote ID:</span>
                      {formData?.quote_id || "RAS88922"}
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-semibold">Pickup From:</span>
                      {formData?.ship_form ||
                        "100 3rd Avenue South, Minneapolis, MN, USA"}
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-semibold">Delivery To:</span>
                      {formData?.ship_to || "N/A"}
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-semibold">Vehicle:</span>
                      {formData
                        ? `${formData.year} ${formData.make} ${formData.model}`
                        : "N/A"}
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-semibold">Transport Method:</span>
                      {formData?.transport_method || "N/A"}
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-semibold">
                        First Available Pickup Date:
                      </span>
                      {formData?.pickup_date || "N/A"}
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-semibold">Vehicle Type:</span>
                      {formData?.vehicle_type || "Running"}
                    </li>
                    {formData?.distance && (
                      <li className="flex justify-between items-center">
                        <span className="font-semibold">Distance:</span>
                        {formData.distance}
                      </li>
                    )}
                    {formData?.price && (
                      <li className="flex justify-between items-center">
                        <span className="font-semibold">Price:</span> $
                        {formData.price}
                      </li>
                    )}
                    <li>
                      <br />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex border-r-2 border-[#646464] border-l-2">
              <div className="w-fit mx-auto p-1 bg-white flex items-center justify-center rounded-sm">
                <div className="w-10">
                  <img
                    src="/images/green-sighn.webp"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-sm lg:text-base text-black">
                  Fully Insured
                </h3>
              </div>
              <div className="w-fit mx-auto p-1 bg-white flex items-center justify-center rounded-sm">
                <div className="w-10">
                  <img
                    src="/images/green-sighn.webp"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-sm lg:text-base text-black">
                  Door To Door Auto Transport
                </h3>
              </div>
            </div>
            <div className="relative h-full">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/images/orange-67b734d041194.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="relative flex flex-col h-full px-4">
                <h3 className="text-2xl py-1 font-semibold text-center text-gray-800 leading-snug">
                  Why Choose Rapid Auto Shipping
                </h3>
                <div className="w-full grid grid-cols-2 gap-2 mt-2">
                  {[
                    {
                      icon: "/images/years-of-experience-67b88e1013f3b.webp",
                      number: "14+",
                      label: "Years of Experience",
                    },
                    {
                      icon: "/images/happy-customers-67b88dfb1d37b.webp",
                      number: "459k+",
                      label: "Happy Customers",
                    },
                    {
                      icon: "/images/vehicle-shipped-67b88e09c917d.webp",
                      number: "72k+",
                      label: "Vehicles Shipped",
                    },
                    {
                      icon: "/images/overall-ratings-1-67b88e0189bcb.webp",
                      number: "4.8/5",
                      label: "Overall Rating",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-2 space-y-1"
                    >
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                        />
                        <span className="text-3xl font-bold text-gray-800">
                          {item.number}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 text-center">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex w-full py-2">
                  <div className="w-full flex gap-3 justify-center items-center">
                    <div className="w-[15%]">
                      <img src="/images/US_DOT_Triskelion.png" />
                    </div>
                    <div className="w-[85%] text-[#292929] font-[500] text-sm">
                      Federal Motor Carrier Safety Administration
                      <br />
                      <span className="font-[600]">
                        MC #: 1685548
                        <br /> U.S.DOT #: 4320359
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col order-1 md:order-1 items-center px-8 py-6 bg-white h-full">
            <h2 className="font-bold text-center text-2xl mt-2">
              <span className="text-red-500">“</span>Your Quote Is Getting Ready
              <span className="text-red-500">”</span>
            </h2>
            <p className="text-xl mt-6 text-rapidcolor">Please Wait</p>

            <div className="w-full bg-gray-200 rounded-full mt-1 mb-2 h-6">
              <motion.div
                className="bg-green-500 h-6 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-lg font-semibold text-gray-700">
              {Math.round(progress)}%
            </p>
            <div className="my-1 text-center font-medium text-gray-700">
              {displayedText}
              {sentenceIndex < sentences.length && (
                <span className="animate-blink">|</span>
              )}
            </div>
            <div className="text-center space-y-4 mt-10 lg:mt-24">
              <p className="text-gray-500 font-bold text-2xl">
                For Immediate Assistance
              </p>
              <div className="flex items-center animate-zoomBlink justify-center space-x-2 bg-white border-2 font-[600] border-rapidcolor text-rapidcolor gap-3 px-5 py-3 rounded-full hover:bg-rapidcolor hover:text-white text-lg">
                <MdOutlinePhone size={34} color="green" />
                <a
                  href="tel:8332334447"
                  className="hover:underline text-xl lg:text-4xl"
                >
                  (833) 233-4447
                </a>
              </div>
              <p className="font-semibold text-lg hidden lg:block">OR</p>

              <div className="w-full relative h-[auto] flex flex-col justify-center items-center">
                <div className="relative w-[300px] h-[170px] ml-5 hidden lg:block">
                  <span className="absolute lg:top-0 left-12 text-white text-3xl flex justify-center items-center gap-5 font-bold z-10">
                    <div className="w-12 h-12">
                      <img src="/images/Communication-get.webp" />
                    </div>
                    Live Chat
                  </span>
                  <div
                    className="w-full h-full absolute lg:-top-14"
                    style={{
                      clipPath:
                        "polygon(0 28%, 87% 28%, 100% 50%, 88% 70%, 0 70%)",
                      background:
                        "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(53,51,205,1) 55%)",
                    }}
                  ></div>
                </div>
                <div className="w-full lg:absolute mt-5 flex justify-center items-center text-xs">
                  <h3>
                    Enjoy up to <span className="font-bold">10% discount</span>{" "}
                    by contacting our coordinator at Rapid's to receive a
                    customized quote tailored to your needs
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LiveChat NoScript Fallback */}
        <noscript>
          <a href="https://www.livechat.com/chat-with/18971929/" rel="nofollow">
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechat.com/?welcome"
            rel="noopener nofollow"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript>
      </div>
    </>
  );
}
