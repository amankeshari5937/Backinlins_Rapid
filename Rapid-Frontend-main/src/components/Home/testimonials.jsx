"use client";

import React,{ useEffect, useCallback, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdOutlineStar } from "react-icons/md";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom hook to detect mobile view
const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

// Slides data
const slides = [
  {
    videoPoster:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1746188386/Reviews/Kenneth-Douglas.webp",
    videoSrc: "https://www.youtube.com/embed/Lb4T7WlLy7Y",
    testimonials: [
      {
        name: "Cheryl Montoney",
        role: "Feb 2025",
        feedback:
          "I recently used Rapid Auto Shipping, and I am beyond impressed with their service! From the moment I requested a quote to the final delivery, everything was smooth and hassle-free.",
        rating: 5,
        reviewImageSrc:
          "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743596786/review-card/google-reviews.png",
      },
      {
        name: "Cheri Zaupa",
        role: "May 2024",
        feedback:
          "The service is simply great! The transport went effortless, and there was no lack in professionalism and responsiveness of the team. The delivery of the car was also on time and there was nothing wrong with my car. Strongly recommend this company for easy and safe car shipping!",
        rating: 5,
        reviewImageSrc:
          "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743596786/review-card/google-reviews.png",
      },
      {
        name: "Corrie Ann Ragland",
        role: "Oct 2024",
        feedback:
          "After speaking with several auto transport companies this one proved to be the best company at an affordable price. I was very impressed with the professionalism and smoothness of the delivery of my vehicle. If you are looking for the quick and honest services choose them.",
        rating: 5,
        reviewImageSrc:
          "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743596786/review-card/google-reviews.png",
      },
    ],
  },
  {
    videoPoster:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1746019481/Reviews/Epic-car.png",
    videoSrc: "https://www.youtube.com/embed/-Jo89zfbrlw",
    testimonials: [
      {
        name: "Jeanne Frase",
        role: "May 2024",
        feedback:
          "Best RV transport Company. I have always shipped with them my fifth wheel and they were superb every time.",
        rating: 5,
        reviewImageSrc:
          "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743596786/review-card/google-reviews.png",
      },
      {
        name: "Jacqueline Nguyen",
        role: "2025",
        feedback:
          "I recently used Rapid Auto Shipping to transport my car from Southern to Northern California on 2/27/25, and I could not be happier with their service. At first, I was a bit skeptical because the price and customer service seemed too good to be true, but they exceeded my expectations in every way. The entire process was smooth, fast, and exactly as planned; no delays, no hidden fees, just reliable service. Their team was professional and communicative, keeping me updated throughout the journey. Best of all, my car arrived in perfect condition right on time. If you are looking for an affordable, efficient, and trustworthy auto transport service, I highly recommend Rapid Auto Shipping. Thank you for making this such an easy and stress-free experience!",
        rating: 5,
        reviewImageSrc:
          "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743596786/review-card/google-reviews.png",
      },
      {
        name: "Edward Brito",
        role: "Mar 2024",
        feedback:
          "Rapid Auto Shipping Company not only delivered my car safely, but their assistance made me believe in this experience that shipping a car can be a simple and straightforward process.",
        rating: 5,
        reviewImageSrc:
          "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743596786/review-card/google-reviews.png",
      },
    ],
  },
  {
    videoPoster: "/images/pixelcut-export.webp",
    videoSrc: "https://www.youtube.com/embed/X1saqrqUwoA",
    testimonials: [
      {
        name: "Robert Brock",
        role: "Mar 2025",
        feedback:
          "Good Company to Ship vehicles. Called them Monday Morning to get my vehicle picked and guess what they made the pickup in 2 hours and it was approx. 1000miles and they made the delivery on Wednesday. Really Quick services the driver and Nathan was professional during the whole communication will use them again for any future shipment.",
        rating: 5,
        reviewImageSrc:
          "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743596786/review-card/google-reviews.png",
      },
      {
        name: "Vamsi Devalla",
        role: "Mar 2025",
        feedback:
          "Vishesh assisted us in shipping our Model 3 from Pennsylvania to California. As we had never shipped a car before, we were worried about the process. However, Vishesh provided us with comprehensive guidance and remained in touch throughout the entire journey, from the initial pickup of the vehicle to its post-delivery inspection. During the pickup and delivery phases, the driver thoroughly inspected the car for any scratches or dents. Remarkably, our car arrived at its destination without any damage, and not a single item had been touched (we had a car cover and some charging cables). The process was so smooth that they picked up the car at my door and delivered the car at apartment gate(it is impossible for that big truck to enter my apartments)",
        rating: 5,
        reviewImageSrc:
          "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743596786/review-card/google-reviews.png",
      },
    ],
  },
];

// Scoped CSS styles
const customSwiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    top: 50%;
    transform: translateY(-50%);
  }
  .swiper-button-next {
    right: 5px;
  }
  .swiper-button-prev {
    left: -5px;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 14px;
    font-weight: bold;
    color: #333;
  }
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    opacity: 0.7;
  }
  .swiper-pagination-bullet-active {
    background-color: #121d50;
  }
`;

// Memoized TestimonialCard component
const TestimonialCard = memo(({ testimonial }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
    <div className="text-rapidcolor text-xl flex mb-2">
      {[...Array(testimonial.rating)].map((_, i) => (
        <MdOutlineStar key={i} className="text-Yellow-500" />
      ))}
    </div>
    <p className="text-[#121d50] text-sm mb-2 italic">
      "{testimonial.feedback}"
    </p>
    <div className="flex justify-between items-center gap-4">
      <div className="w-[65%]">
        <span className="text-[#121d50] text-lg font-semibold">
          {testimonial.name}
        </span>
        <p className="text-gray-500 text-xs">{testimonial.role}</p>
      </div>
      <div className="w-[35%] flex justify-end">
        <Image
          src={testimonial.reviewImageSrc}
          className="object-contain"
          width={80}
          height={40}
          alt="Google Reviews logo"
          priority={false}
        />
      </div>
    </div>
  </div>
));

// Memoized SwiperContent component
const SwiperContent = memo(() => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handlePlaceholderClick = useCallback((placeholder, videoSrc) => {
    if (placeholder.querySelector("iframe")) return;

    const iframe = document.createElement("iframe");
    iframe.src = videoSrc;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    placeholder.innerHTML = "";
    placeholder.appendChild(iframe);
  }, []);

  useEffect(() => {
    const placeholders = document.querySelectorAll(".youtube-placeholder");
    const clickHandler = (e) => {
      const placeholder = e.currentTarget;
      handlePlaceholderClick(placeholder, placeholder.dataset.ytUrl);
    };

    placeholders.forEach((placeholder) => {
      placeholder.addEventListener("click", clickHandler);
    });

    return () => {
      placeholders.forEach((placeholder) => {
        placeholder.removeEventListener("click", clickHandler);
      });
    };
  }, [handlePlaceholderClick]);

  return (
    <>
    
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="bg-white py-6 mt-6 container mx-auto px-4 md:px-6 lg:px-8 rounded-lg">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-2/5">
                  <div className="relative w-full max-w-sm h-[400px] md:h-[560px] mx-auto">
                    <div
                      className="youtube-placeholder absolute inset-0 cursor-pointer"
                      data-yt-url={slide.videoSrc}
                      role="button"
                      aria-label="Play testimonial video"
                      loading="lazy"
                    >
                      <div className="relative w-full h-full">
                        <div className="relative w-full h-[400px] md:h-[550px]">
                          <Image
                            src={slide.videoPoster.replace(
                              "/upload/",
                              "/upload/q_auto,f_auto/"
                            )}
                            alt="Testimonial video thumbnail"
                            width={400}
                            height={isMobile ? 400 : 560}
                            className="object-cover rounded-lg w-full h-full"
                            sizes="(max-width: 768px) 100vw, 400px"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-3/5 space-y-4">
                  {(isMobile ? slide.testimonials.slice(0, 2) : slide.testimonials).map(
                    (testimonial, i) => (
                      <TestimonialCard key={i} testimonial={testimonial} />
                    )
                  )}
                </div>
              </div>
              <a
                href="https://www.google.com/search?sca_esv=c0e29f6dcc44160e&sxsrf=AHTn8zobXQi2AQwtX6GiGbAX9aucOmi5qA:1745575735067&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzbaZHo1tytNbCbB8puqYy2In6EPlt2xMWkyg-lDUDKrcFrtuoXZVw_1MHIm_1SFfAIw5MsN_BSAMGIvOSCv77pFhi7eN9cLkXvp9_lmvJ9yu2aa-BQ%3D%3D&q=RAPID+AUTO+SHIPPING+Reviews&sa=X&ved=2ahUKEwib7_es-PKMAxUASWwGHV9yLysQ0bkNegQILhAE&biw=1536&bih=695&dpr=1.25"
                className="block text-end text-2xl mt-10 text-rapidcolor"
              >
                More Reviews
              </a>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});

// Main SwiperComponent
const SwiperComponent = () => {
  return (
    <>
      <div className="container py-10 my-10 shadow-3d mx-auto md:px-4">
        <style>{customSwiperStyles}</style>
        <h2 className="text-rapidcolor font-semibold mb-10 text-2xl md:text-4xl leading-snug text-center">
          Our Clients Speak for Us
        </h2>
        <SwiperContent />
      </div>
    </>
  );
};

export default memo(SwiperComponent);