import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';



const TestimonialSwiper = () => {
  const testimonials = [
    {
      id: 1,
      name: "Cheryl Montoney",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1746788604/Reviews/Cheryl-Montoney.webp",
      secondaryImage:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_96,h_96,c_fit,q_auto,f_webp/v1742461263/review-card/goggle-review.webp",
      content:
        "I recently used Rapid Auto Shipping, and I am beyond impressed with their service! From the moment I requested a quote to the final delivery, everything was smooth and hassle-free.",
      rating: 5,
      date: "2025-02-28",
    },
    {
      id: 2,
      name: "Dandi Dewey",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1744723050/Reviews/Dandi-Dewey.webp",
      secondaryImage:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_96,h_96,c_fit,q_auto,f_webp/v1742461263/review-card/Trustpilot.webp",
      content:
        "Professional & Reliable auto shipping company. Their Carrier and driver were reliable and had all the necessary safety measures to transport my vehicles.",
      rating: 5,
      date: "2024-05-28",
    },
    {
      id: 3,
      name: "Corrie Ann Ragland",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1746788931/Reviews/Corrie-Ann-Ragland.webp",
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

  // Add responsive behavior
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

    // Set initial value
    handleResize();

    // Add listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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

  // Get visible testimonials based on current index and visible count
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

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
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
    <div class женщи className="w-full container mx-auto sm:px-4 py-10 my-10">
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
              {/* Decorative elements */}
              <div
                className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-30"
                aria-hidden="true"
              ></div>
              <div
                className="absolute bottom-0 left-0 w-16 h-16 bg-blue-50 rounded-tr-full opacity-30"
                aria-hidden="true"
              ></div>

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

              <div className="flex items-center mb-4 relative z-10">
                <div className="relative">
                 <Image
  src={testimonial.image}
  alt={`Vehicle delivered for ${testimonial.name} during their Rapid Auto Shipping experience`}
  className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white shadow-md"
  loading="lazy"
  width={80}
  height={80}
/>
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">
                    {testimonial.name}
                  </span>
                  <p className="text-sm text-gray-500   text-gray-500">
                    {formatDate(testimonial.date)}
                  </p>
                  <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>

              <p className="text-gray-700 font-light italic relative z-10">
                "{testimonial.content}"
              </p>

              <div className="mt-4 pt-4 border-t z-100 border-gray-100 flex justify-between items-center">
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
                <div className="relative">
                  <Image
  src={testimonial.secondaryImage}
  alt={`${
    testimonial.secondaryImage.includes("Trustpilot")
      ? "Trustpilot"
      : "Google Reviews"
  } logo for ${testimonial.name}'s testimonial`}
  className="w-24 h-auto object-cover"
  loading="lazy"
  width={96}
  height={96}
/>
                </div>
              </div>
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