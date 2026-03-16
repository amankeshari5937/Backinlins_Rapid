import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSwiperopen = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jacqueline Nguyen",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1748696890/Jacqueline-Nguyen_uyiace.jpg",
      secondaryImage:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_96,h_96,c_fit,q_auto,f_webp/v1742461263/review-card/goggle-review.webp",
      content:
        "I used Rapid Auto Shipping to transport my car from Southern to Northern California on 2/27/25, and they exceeded my expectations. The process was smooth, fast, and exactly as promised—no delays or hidden fees. The team was professional, communicative, and my car arrived on time in perfect condition. Highly recommend for reliable, affordable transport!This is the best service I've ever had. I recently moved my car from Lawrence, Kansas to Cleveland, Ohio. It took only 28 hours to transport. I utilized open carrier and received the item in 'as is' condition. The transportation cost is lower than that of other carriers. Customer service representatives are kind and responsible. I highly suggest this service.",
      rating: 5,
      date: "2025-02-28",
    },
    {
      id: 2,
      name: "Janice Kellogg",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1748262346/door_to_door_autotransport_kybrha.webp",
      secondaryImage:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_96,h_96,c_fit,q_auto,f_webp/v1742461263/review-card/Trustpilot.webp",
      content:
        "This is the best service I've ever had. I recently moved my car from Lawrence, Kansas to Cleveland, Ohio. It took only 28 hours to transport. I utilized open carrier and received the item in 'as is' condition. The transportation cost is lower than that of other carriers. Customer service representatives are kind and responsible. I highly suggest this service.",
      rating: 5,
      date: "2024-05-28",
    },
    {
      id: 3,
      name: "JandE-Essam",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1748697641/JandE-Essam_qwxeh3.jpg",
      secondaryImage:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_96,h_96,c_fit,q_auto,f_webp/v1742461263/review-card/goggle-review.webp",
      content:
        "After speaking with several auto transport companies this one proved to be the best company at an affordable price. I was very impressed with the professionalism and smoothness of the delivery of my vehicle. If you are looking for the quick and honest services choose them.",
      rating: 5,
      date: "2024-10-28",
    },
    {
      id: 4,
      name: "LEVI HOLMES",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1746789123/Reviews/Doreen-Clysdale.webp",
      secondaryImage:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_96,h_96,c_fit,q_auto,f_webp/v1742461263/review-card/goggle-review.webp",
      content:
        "This company was very professional with great communication. We had to make some last minute change involving our transport. They are good in boat shipments rapid auto shipping delivered sooner than expected and arrived in the same condition. I would recommend based on ease of booking system online and great communication throughout the process. Lovely price!",
      rating: 5,
      date: "2024-05-28",
    },
    {
      id: 5,
      name: "Cheri Zaupa",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1746789372/Reviews/Cheri-Zaupa.webp",
      secondaryImage:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_96,h_96,c_fit,q_auto,f_webp/v1742461263/review-card/goggle-review.webp",
      content:
        "The service is simply great! The transport went effortless, and there was no lack in professionalism and responsiveness of the team. The delivery of the car was also on time and there was nothing wrong with my car. Strongly recommend this company for easy and safe car shipping!",
      rating: 5,
      date: "2024-08-28",
    },
    {
      id: 6,
      name: "Edward Brito",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1746789708/Reviews/Edward-brito.webp",
      secondaryImage:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_96,h_96,c_fit,q_auto,f_webp/v1742461263/review-card/Trustpilot.webp",
      content:
        "Rapid Auto Shipping Company not only delivered my car safely, but their assistance made me believe in this experience that shipping a car can be a simple and straightforward process. I would like to recommend this company to other people who are looking for expertise in driving.",
      rating: 5,
      date: "2024-03-28",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2); // Tablet: 2 cards
      } else {
        setVisibleCount(1); // Mobile: 1 card
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="w-full container mx-auto sm:px-4 py-10 my-10">
      <div className="text-3xl font-bold text-center mb-12">
        What Our Clients Say
      </div>

      <div className="relative px-8 lg:px-12">
        {/* Testimonials Container */}
        <div className="flex justify-center gap-4">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`
                flex-shrink-0 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 
                transition-all duration-300 border border-gray-200 hover:shadow-xl
                w-full md:w-5/12 lg:w-4/12 relative overflow-hidden
                ${index === 0 ? "block" : ""}
                ${index === 1 ? "hidden md:block" : ""}
                ${index === 2 ? "hidden lg:block" : ""}
              `}
            >
              {/* Testimonial card content (unchanged) */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="flex items-center">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-gray-500">
                      {formatDate(testimonial.date)}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <img
                src={testimonial.secondaryImage}
                alt="Review platform logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
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

      {/* Pagination Dots */}
    

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

export default TestimonialSwiperopen;