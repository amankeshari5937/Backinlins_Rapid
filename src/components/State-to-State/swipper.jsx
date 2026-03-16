import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// ✅ Source → Logo mapping
const SOURCE_LOGOS = {
  Google:
    "https://res.cloudinary.com/dz2zovmf1/image/upload/w_96,h_96,c_fit,q_auto,f_webp/v1742461263/review-card/goggle-review.webp",
  Trustpilot:
    "https://res.cloudinary.com/dz2zovmf1/image/upload/w_96,h_96,c_fit,q_auto,f_webp/v1742461263/review-card/Trustpilot.webp",
  TransportReviews: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1771564637/Logo_b6ta2e.png",
};

const SOURCE_ALTS = {
  Google: "Google Reviews",
  Trustpilot: "Trustpilot",
  TransportReviews: "Transport Reviews",
};
const TestimonialSwiper = ({ data }) => {
  // ─── Static fallback reviews ───────────────────────────────────────────────
  const staticTestimonials = [
    {
      id: "s1",
      name: "Cheryl Montoney",
      content:
        "I recently used Rapid Auto Shipping, and I am beyond impressed with their service! From the moment I requested a quote to the final delivery, everything was smooth and hassle-free.",
      logo: SOURCE_LOGOS.Google,
      logoAlt: SOURCE_ALTS.Google,
    },
    {
      id: "s2",
      name: "Dandi Dewey",
      content:
        "Professional & Reliable auto shipping company. Their Carrier and driver were reliable and had all the necessary safety measures to transport my vehicles.",
      logo: SOURCE_LOGOS.Trustpilot,
      logoAlt: SOURCE_ALTS.Trustpilot,
    },
    {
      id: "s3",
      name: "Corrie Ann Ragland",
      content:
        "After speaking with several auto transport companies this one proved to be the best company at an affordable price. I was very impressed with the professionalism and smoothness of the delivery of my vehicle.",
      logo: SOURCE_LOGOS.Google,
      logoAlt: SOURCE_ALTS.Google,
    },
    {
      id: "s4",
      name: "LEVI HOLMES",
      content:
        "This company was very professional with great communication. We had to make some last minute change involving our transport. They delivered sooner than expected and arrived in the same condition.",
      logo: SOURCE_LOGOS.Google,
      logoAlt: SOURCE_ALTS.Google,
    },
    {
      id: "s5",
      name: "Cheri Zaupa",
      content:
        "The service is simply great! The transport went effortless, and there was no lack in professionalism and responsiveness of the team. The delivery of the car was also on time. Strongly recommend!",
      logo: SOURCE_LOGOS.Google,
      logoAlt: SOURCE_ALTS.Google,
    },
    {
      id: "s6",
      name: "Edward Brito",
      content:
        "Rapid Auto Shipping Company not only delivered my car safely, but their assistance made me believe that shipping a car can be a simple and straightforward process. Highly recommended!",
      logo: SOURCE_LOGOS.Trustpilot,
      logoAlt: SOURCE_ALTS.Trustpilot,
    },
  ];

  // ─── Build final testimonials list ────────────────────────────────────────
  const buildTestimonials = () => {
    const dynamicReviews = (data?.reviews || [])
      .filter((r) => r.name?.trim() && r.content?.trim())
      .map((r, i) => {
        // ✅ Use actual source field instead of alternating by index
        const source = r.source || "Google";
        return {
          id: `d${i}`,
          name: r.name,
          content: r.content,
          logo: SOURCE_LOGOS[source] || SOURCE_LOGOS.Google,
          logoAlt: SOURCE_ALTS[source] || SOURCE_ALTS.Google,
        };
      });

    const dynamicCount = dynamicReviews.length;
    const remainingStatic = staticTestimonials.slice(dynamicCount);
    return [...dynamicReviews, ...remainingStatic];
  };

  const testimonials = buildTestimonials();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <div className="w-full container mx-auto sm:px-4 py-10 my-10">
      <div className="text-3xl font-bold text-center mb-12">
        What Our Clients Say
      </div>

      <div className="relative px-8 lg:px-12">
        {/* ── Testimonials Container ──────────────────────────────────────── */}
        <div className="flex justify-center gap-4">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`
                flex-shrink-0 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6
                transition-all duration-300 border border-gray-200 hover:shadow-xl
                w-full md:w-5/12 lg:w-4/12 relative overflow-hidden flex flex-col
                ${index === 0 ? "block" : ""}
                ${index === 1 ? "hidden md:block" : ""}
                ${index === 2 ? "hidden lg:block" : ""}
              `}
            >
              {/* Decorative elements */}
              <div
                className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-30"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 w-16 h-16 bg-blue-50 rounded-tr-full opacity-30"
                aria-hidden="true"
              />

              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-blue-200">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>

              {/* ── Reviewer Name ─────────────────────────────────────────── */}
              <div className="flex items-center mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 border-2 border-white shadow-md flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">
                    {testimonial.name}
                  </span>
                </div>
              </div>

              {/* ── Review Content ────────────────────────────────────────── */}
              <p className="text-gray-700 font-light italic relative z-10 flex-1">
                "{testimonial.content}"
              </p>

              {/* ── Footer with Verified + Logo ───────────────────────────── */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm text-gray-500 flex items-center">
                  <svg
                    className="w-6 h-6 mr-1 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified Customer
                </span>

                {/* ✅ Logo from actual source field */}
                <Image
                  src={testimonial.logo}
                  alt={testimonial.logoAlt}
                  className="w-24 h-auto object-contain"
                  loading="lazy"
                  width={96}
                  height={96}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Navigation Buttons ──────────────────────────────────────────── */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="text-start ml-9 mt-8">
        <a
          href="https://www.google.com/search?q=rapidautoshipping&oq=rapidautoshipping+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYQTIGCAcQRRhB0gEINDY5OGowajeoAgiwAgHxBQvvp7a7guxY&sourceid=chrome&ie=UTF-8#lrd=0x87004d8702dc4ac7:0x9f3bfd5545d14ae8,1,,,,"
          className="text-2xl font-medium text-blue-600 hover:underline"
        >
          Read our Google reviews
        </a>
      </div>
    </div>
  );
};

export default TestimonialSwiper;
