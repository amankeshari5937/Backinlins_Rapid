import React from "react";
import Image from "next/image";

const AutoShipping = ({ data }) => {
  // Only the content for <p> will be treated as HTML
  const content = data?.content_1 || "Default content goes here";

  // Function to style the HTML content for paragraph only
  const createMarkup = (htmlContent) => {
    // Add style to make anchor tags blue
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  return (
    <div className="border-2 border-black px-6 max-w-[100%] md:max-w-[100%] mx-auto bg-white shadow-lg rounded-lg mt-20 pt-5 pb-5 container">
      <h2 className="text-2xl lg:text-5xl font-bold text-center text-black mb-4">
        Why We Are The Best
        <span className="text-rapidcolor">
          {" "} {data?.from} <span className="text-black">to</span> {data?.to} {" "}
        </span>
        Auto Shipping Specialists?
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6 mt-5">
        <div className="w-full md:w-[55%] flex justify-center">
          <Image
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto/v1742475017/city-to-city/auto-transport.webp"
            alt="City-to-City Auto Transport – Reliable Vehicle Shipping Across U.S. Cities"
            width={432} // Matches md:w-108 (108 * 4 = 432px in Tailwind)
            height={288} // Matches aspect ratio 1.5 (432 / 1.5 = 288)
            className="object-contain"
            priority={false} // Optional: Set to true if this is above-the-fold
          />
        </div>
        <div className="w-full md:w-[65%] text-gray-700 text-xl leading-relaxed">
          <p dangerouslySetInnerHTML={createMarkup(content)} />
        </div>
      </div>
    </div>
  );
};

export default AutoShipping;