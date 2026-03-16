import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport size on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener("resize", checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Jane D",
      role: "CEO",
      image: "https://pagedone.io/asset/uploads/1696229969.png",
      text: "Pagedone is simply the best tool of investment in the market right now.",
    },
    {
      id: 2,
      name: "Harsh P.",
      role: "Product Designer",
      image: "https://pagedone.io/asset/uploads/1696229994.png",
      text: "I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations.",
    },
    {
      id: 3,
      name: "Alex K.",
      role: "Design Lead",
      image: "https://pagedone.io/asset/uploads/1696230027.png",
      text: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
    },
    {
      id: 4,
      name: "Jane D",
      role: "CEO",
      image: "https://pagedone.io/asset/uploads/1696229969.png",
      text: "Pagedone is simply the best tool of investment in the market right now.",
    },
    {
      id: 5,
      name: "Harsh P.",
      role: "Product Designer",
      image: "https://pagedone.io/asset/uploads/1696229994.png",
      text: "I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations.",
    },
    {
      id: 6,
      name: "Alex K.",
      role: "Design Lead",
      image: "https://pagedone.io/asset/uploads/1696230027.png",
      text: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
    },
  ];

  return (
    <section className="py-10 bg-gray-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-center items-center">
          <h4 className="text-rapidcolor text-xl md:text-3xl">
            <b> Testimonials </b>
          </h4>
          <div className="mx-auto relative text-center mt-8 md:mt-[5%]">
            <h3 className="hidden md:block mt-6 absolute left-1/2 -translate-x-1/2 -top-20 text-[3rem] md:text-[5rem] font-semibold text-gray-300">
              Testimonials
            </h3>
            <h4 className="text-2xl md:text-4xl lg:text-6xl relative z-10 font-bold text-gray-800">
              Our Valuable & Trusted Clients
            </h4>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative px-6">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={isMobile ? false : { 
              nextEl: ".next-btn", 
              prevEl: ".prev-btn" 
            }}
            pagination={isMobile ? { 
              clickable: true,
              el: ".swiper-pagination" 
            } : false}
            slidesPerView={3}
            spaceBetween={28}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white border border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-orange-500">
                  {/* Star Rating */}
                  <div className="flex items-center mb-4 gap-2 text-amber-500 group-hover:text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base md:text-lg text-gray-500 leading-7 md:leading-8 h-auto md:h-24 transition-all duration-500 mb-6 group-hover:text-gray-800">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-5">
                    <img
                      className="rounded-full object-cover w-12 h-12 md:w-14 md:h-14"
                      src={testimonial.image}
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="text-gray-900 font-medium group-hover:text-orange-500">
                        {testimonial.name}
                      </h5>
                      <span className="text-sm text-gray-500">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Only shown on larger screens */}
          {!isMobile && (
            <>
              <button className="prev-btn absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white shadow-md p-2 rounded-full text-gray-700 hover:text-white hover:bg-orange-500 transition">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <button className="next-btn absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white shadow-md p-2 rounded-full text-gray-700 hover:text-white hover:bg-orange-500 transition">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Pagination for mobile */}
         
        </div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div>
      <Testimonials />
    </div>
  );
};

export default Page;