import React from "react";

const AutoShipping = ({ data }) => {
  // Only the content for <p> will be treated as HTML
  const content = data?.content_1 || "Default content goes here";

  // Function to style the HTML content for paragraph only
  const createMarkup = (htmlContent) => {
    // Add style to make anchor tags blue
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #1E3A8A"'
    );
    return { __html: styledContent };
  };

  return (
    <div className="border-2 border-black px-4  mx-auto bg-white shadow-lg rounded-lg mt-20 pt-5 pb-5 container">
      <h2 className="text-2xl lg:text-5xl font-bold text-center text-black mb-4">
        <span className="text-rapidcolor">
          {data?.from} to {data?.to}
        </span>{" "}
        Auto Transport : Made <span className="text-rapidcolor">Shipping</span>{" "}
        Easy
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6 mt-5">
        <div className="w-full md:w-[55%] flex justify-center">
         <img
  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_432,h_324,q_auto,f_webp/v1746787450/state_to_state/Auto-Transport-Made-Shipping-Easy.webp"
  alt="State-to-State Auto Transport – Hassle-Free Vehicle Shipping Made Easy by Rapid Auto Shipping"
  class="md:w-108 h-64"
  width="432"
  height="324"
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
