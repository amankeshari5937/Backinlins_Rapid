import Image from "next/image";
import React from "react";

const reviews = [
  {
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773381079/66ede09890c1d16a8ccb2d2c_1_snxhz7_1_sspljc.webp",
    title: "Clutch",
    text: "We are honoured to be A rated by the Clutch for our exceptional service in the Auto Transportation Industry.",
    link: "https://clutch.co/profile/rapid-auto-shipping-0",
    alt: "Clutch Accredited Review Badge – Trusted Auto Shipping Ratings for Rapid Auto Shipping",
  },
  {
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_144,h_144,c_fit,q_auto,f_webp/v1742461263/review-card/goggle-review.webp",
    title: "Google",
    text: "We've got 5 star rating on Google\nfor our outstanding service\nand customer satisfaction.",
    link: "https://maps.app.goo.gl/ZB7nPKu5Fqw6zQ5u9",
    alt: "Google Review Badge – Verified Customer Feedback for Rapid Auto Shipping",
  },
  {
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_144,h_144,c_fit,q_auto,f_webp/v1742461263/review-card/Trustpilot.webp",
    title: "Trustpilot",
    text: "Our reviews on Trustpilot\nspeak loud about our work ethics\nand commitment to quality.",
    link: "https://www.trustpilot.com/review/rapidautoshipping.com",
    alt: "Trustpilot Review Badge – Customer Ratings for Rapid Auto Shipping Services",
  },
];

const ReviewCards = () => {
  return (
    <div className="flex flex-col mt-8 md:mt-0 items-center lg:flex-row justify-center gap-8 px-4 pb-8 mb-6">
      {reviews.map((review, index) => (
        <a
           href={review.link}
  key={index}
  className="bg-white border border-gray-300 shadow-xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-xl p-6 text-center w-full sm:w-72 md:w-80"
  target="_blank"
  rel="noopener noreferrer"
>
          <Image
            src={review.logo}
            alt={review.alt}
            width={144}
            height={144}
            loading="lazy"
            sizes="(max-width: 768px) 120px, 144px"
            className="mx-auto mb-4 object-contain w-[120px] h-[120px] md:w-[144px] md:h-[144px]"
          />
          <span className="font-semibold text-xl mb-2 block">
            {review.title}
          </span>
          <p className="text-gray-600 whitespace-pre-line text-sm md:text-base">
            {review.text}
          </p>
        </a>
      ))}
    </div>
  );
};

export default ReviewCards;
