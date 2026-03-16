import React from "react";

const AutoShippingCard = ({ data }) => {
  // Function to add blue color to anchor tags
  const createMarkup = (htmlContent) => {
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  return (
    <div className="relative container h-[auto] flex flex-col md:flex-row bg-white p-2 items-center mx-auto border-4 border-gray-500 rounded-3xl mt-20">
      {/* Left Side - Text Content */}
      <div className="md:w-[70%] p-6 space-y-4">
        <h3 className="text-3xl font-bold text-black">
        Why Choose Rapid Auto Shipping to Transport Your {data?.company_name} Vehicle?
        </h3>
        <p
          className="text-gray-700 text-xl leading-relaxed text-justify"
          dangerouslySetInnerHTML={createMarkup(data?.content_3 || "")} // Apply createMarkup
        />
      </div>

      {/* Right Side - Image Section (Overlapping) */}
      <div className="md:w-1/3 h-full md:flex hidden justify-end items-center">
        <div className="w-full h-full flex justify-end">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742475018/city-to-city/trusted-auto-shipping.webp"
            alt="Trusted City-to-City Auto Shipping Services by Rapid Auto Shipping"
            className="w-full h-full object-cover rounded-3xl shadow-lg border-4 border-white" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default AutoShippingCard;