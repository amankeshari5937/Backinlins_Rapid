import React from "react";

const ShippingService = ({ data }) => {
  // Fallback values for descriptions only
  const descriptions = data?.shippingService?.descriptions || {
    timeSaving: `${data?.content_time}`,
    costEfficient: `${data?.content_cost}`,
    hassleFree: `${data?.content_hassel}`,
  };

  // Function to process HTML and style anchor tags
  const createMarkup = (htmlContent) => {
    if (!htmlContent) return { __html: "" };
    // Replace anchor tags with styled version (blue color)
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #333; text-decoration: underline;"'
    );
    return { __html: styledContent };
  };

  return (
    <div className="max-w-[95%] mx-auto p-5 text-gray-800 mt-16 container">
      <div className="w-full h-auto">
        <div className="text-3xl md:text-5xl font-bold text-black text-center mb-6">
          Why <span className="text-rapidcolor">Choose</span> {data?.from} to{" "}
          {data?.to} <span className="text-rapidcolor">Vehicle Shipping</span>{" "}
          Service Instead of Driving?
        </div>

        <p
          className="text-gray-700 mb-6 text-lg md:text-xl mt-6 text-start md:ml-11"
          dangerouslySetInnerHTML={createMarkup(data?.content_2)}
        />
      </div>

      <div className="space-y-6">
        {/* Time-Saving */}
        <div className="flex flex-col md:flex-row items-center gap-4 border-b p-4 group shadow-lg md:shadow-3d">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_64,h_64,q_auto,f_webp/v1746616577/state_to_state/Time-Saving.webp"
            className="w-16 md:w-[10%] transition duration-300"
            alt="Time-Saving Car Shipping – Fast State-to-State Auto Transport Services"
            width="64"
            height="64"
          />
          <div className="bg-black h-[2px] w-full flex md:hidden"></div>
          <div className="w-[2px] bg-black h-60 hidden md:flex"></div>
          <div className="flex-1">
            <span className="text-lg md:text-xl font-semibold text-rapidcolor transition duration-300">
              Time-Saving
            </span>
            <p
              className="text-gray-600 text-base md:text-xl md:pr-40"
              dangerouslySetInnerHTML={createMarkup(descriptions.timeSaving)}
            />
          </div>
        </div>

        {/* Cost-Efficient */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 border-b p-4 group shadow-lg md:shadow-3d">
          <div className="flex-1 text-right">
            <span className="text-lg md:pl-40 md:text-xl text-start font-semibold text-rapidcolor transition duration-300 justify-end">
              Cost-Efficient
            </span>
            <p
              className="text-gray-600 text-start text-base md:text-xl md:pl-40"
              dangerouslySetInnerHTML={createMarkup(descriptions.costEfficient)}
            />
          </div>
          <div className="bg-black h-[2px] w-full flex md:hidden"></div>
          <div className="w-[2px] bg-black h-60 hidden md:flex"></div>
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_64,h_64,q_auto,f_webp/v1746616577/state_to_state/Cost-Efficient.webp"
            className="w-16 md:w-[10%] transition duration-300"
            alt="Cost-Efficient Auto Transport – Affordable State-to-State Car Shipping Solutions"
            width="64"
            height="64"
          />
        </div>

        {/* Hassle-Free */}
        <div className="flex flex-col md:flex-row items-center gap-4 border-b p-4 shadow-lg md:shadow-3d">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_64,h_64,q_auto,f_webp/v1746616577/state_to_state/Hassle-Free.webp"
            className="w-16 md:w-[10%] transition duration-300"
            alt="Hassle-Free Vehicle Shipping – Smooth and Secure Auto Transport Experience"
            width="64"
            height="64"
          />
          <div className="bg-black h-[2px] w-full flex md:hidden"></div>
          <div className="w-[2px] bg-black h-60 hidden md:flex"></div>
          <div className="flex-1">
            <span className="text-lg md:text-xl font-semibold text-rapidcolor transition duration-300">
              Hassle-Free
            </span>
            <p
              className="text-gray-600 text-base md:text-xl md:pr-40"
              dangerouslySetInnerHTML={createMarkup(descriptions.hassleFree)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingService;