import { useState, useEffect } from "react";
import Navbar from "@/components/CommonComponents/Navbar";
import StatsSection from "@/components/CommonComponents/StatsSection";
import Link from "next/link";
import TransportForm from "@/components/CommonComponents/Form";
import VideoSection from "@/components/CommonComponents/review/Video";
import Head from "next/head";
import Footer from "@/components/CommonComponents/Footer";

export default function ReviewCards() {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const reviews = [
    {
      name: "Cheryl Montoney",
      review:
        "I recently used Rapid Auto Shipping, and I am beyond impressed with their service! From the moment I requested a quote to the final delivery, everything was smooth and hassle-free.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743498813/Reviews/Cheryl-Montoney.jpg",
      rating: 5,
      verified: true,
    },
    {
      name: "Cheri Zaupa",
      review:
        "The service is simply great! The transport went effortless, and there was no lack in professionalism and responsiveness of the team. The delivery of the car was also on time and there was nothing wrong with my car. Strongly recommend this company for easy and safe car shipping!",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1744719094/Reviews/Cheri-Zaupa.jpg",
      rating: 4,
      verified: true,
    },
    {
      name: "Corrie Ann Ragland",
      review:
        "After speaking with several auto transport companies this one proved to be the best company at an affordable price. I was very impressed with the professionalism and smoothness of the delivery of my vehicle. If you are looking for the quick and honest services choose them.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743498813/Reviews/Corrie-Ann-Ragland.jpg",
      rating: 5,
      verified: true,
    },
    {
      name: "Jeanne Frase",
      review:
        "Best RV transport Company. I have always shipped with them my fifth wheel and they were superb every time",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1744719379/Reviews/Jeanne-Frase.jpg",
      rating: 5,
      verified: true,
    },
    {
      name: "LEVI HOLMES",
      review:
        "This company was very professional with great communication. We had to make some last minute change involving our transport. They are good in boat shipments rapid auto shipping delivered sooner than expected and arrived in the same condition. I would recommend based on ease of booking system online and great communication throughout the process. Lovely price!",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1744720649/Reviews/Doreen-Clysdale.jpg",
      rating: 5,
      verified: false,
    },
    {
      name: "Edward Brito",
      review:
        "My truck was successfully shipped I couldn't be happier with their service. From start to finish, the entire process was seamless and stress-free. The booking was straightforward, and the customer service team was incredibly responsive and helpful, answering all my questions and providing clear instructions.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743498813/Reviews/Edward-brito.jpg",
      rating: 5,
      verified: true,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCardClick = (index) => {
    setSelectedReview(reviews[index]);
  };

  return (
    <>
      <Head>
        <title>Reviews | Rapid Auto Shipping – Customer Feedback</title>
        <meta
          name="title"
          content="Reviews | Rapid Auto Shipping – Customer Feedback"
        />
        <meta
          name="description"
          content="Read Rapid Auto Shipping reviews from real customers. See why we are trusted for reliable auto transport services. Check feedback now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
      </Head>
      <Navbar />
      <div className="bg-white relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/banner-blog.webp"
          alt="Banner background for Rapid Auto Shipping reviews page"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-[2]"></div>

        {/* Content Wrapper */}
        <div className="relative z-[2] px-2 md:px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Text Content */}
            <div className="space-y-4 bg-gray-600/30 backdrop-blur-md p-4 sm:p-6 rounded-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rapidcolor">
                Customer Reviews
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-8 max-w-3xl">
                See what our customers have to say about their experience with
                Rapid Auto Shipping
              </p>
            </div>

            {/* Form Section */}
            <div className="flex justify-center lg:justify-end">
              <TransportForm className="w-full max-w-md sm:max-w-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-blue-50 via-indigo-50 to-white min-h-screen">
        <div className="container mx-auto md:px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          <VideoSection />

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-rapidcolor mt-12 sm:mt-16 md:mt-20">
            More Reviews...
          </h3>

          {/* Review Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer group border border-gray-100 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleCardClick(index)}
              >
                <div className="relative h-48 sm:h-56">
                  <img
                    src={review.image}
                    alt={`Vehicle Delivered for ${review.name} – Customer Experience with Rapid Auto Shipping`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                      {review.name}
                    </h3>
                    <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927C9.316 2.013 10.684 2.013 10.951 2.927l1.286 4.18h4.392c.969 0 1.372 1.24.588 1.81l-3.564 2.589 1.364 4.197c.287.882-.755 1.613-1.538 1.077L10 14.347l-3.479 2.433c-.783.536-1.825-.195-1.538-1.077l1.364-4.197-3.564-2.589c-.784-.57-.38-1.81.588-1.81h4.392l1.286-4.18z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-3 mb-4">
                    {review.review}
                  </p>
                  <div className="flex justify-between items-center">
                    {review.verified && (
                      <div className="flex items-center text-green-600 text-xs sm:text-sm font-medium">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified
                      </div>
                    )}
                    <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-800 transition-colors flex items-center text-xs sm:text-sm">
                      Read More
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-center border-t pt-4">
                    <img
                      src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742818528/icons/google-review.webp"
                      alt="Google review logo for Rapid Auto Shipping"
                      className="h-10 sm:h-14"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <StatsSection />
          </div>

          {/* Call to Action */}
          <div className="mt-12 sm:mt-16 md:mt-24 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Ready to share your experience?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-6 sm:mb-8">
              Join thousands of satisfied customers who trust Rapid Auto
              Shipping for their vehicle transport needs.
            </p>
            <Link href="https://www.google.com/search?...">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 inline-flex items-center text-sm sm:text-base">
                Review Us
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}