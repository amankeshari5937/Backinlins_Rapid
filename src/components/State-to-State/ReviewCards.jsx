import React from "react";

const reviews = [
  {
    logo: "../images/bbb.png", 
    title: "BBB",
    text: "We’ve been recognized by the BBB\nas the best auto shipping company\nin the industry.",
  },
  {
    logo: "../images/google-review.png",
    title: "Google",
    text: "We’ve got 4.9+ rating on Google\nfor our outstanding service\nand customer satisfaction.",
  },
  {
    logo: "../images/Trustpilot.jpg", 
    title: "Trustpilot",
    text: "Our reviews on Trustpilot\nspeak loud about our work ethics\nand commitment to quality.",
  },
];

const ReviewCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 px-4 mt-20 mb-20">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl p-6 text-center w-full sm:w-72 md:w-80"
        >
          <img
            src={review.logo}
            alt={review.title}
            className="mx-auto mb-4 w-28 h-28 object-contain"
          />
          <h3 className="font-semibold text-xl mb-2">{review.title}</h3>
          <p className="text-gray-600 whitespace-pre-line text-sm md:text-base">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewCards;
