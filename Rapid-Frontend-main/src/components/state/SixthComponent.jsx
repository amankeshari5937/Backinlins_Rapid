import React from "react";

const SixthComponent = ({ data }) => {
  // Function to add blue color to anchor tags
  const createMarkup = (htmlContent) => {
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  // Dynamic alt text based on state_name or a fallback
  const imageAlt = data?.state_name
    ? `Best ${data?.state_name} Car Shipping Company`
    : "Car Shipping";

  return (
    <section className="px-4 md:px-16 text-center my-10 py-10 border-gray-400 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-6 mx-auto max-w-7xl">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="text-3xl lg:text-4xl font-bold text-gray-900">
            Rapid Auto Shipping: Best {data?.state_name} Car Shipping Company
            Near Me
          </div>
          <p
            className="mt-4 text-lg text-gray-700 text-justify w-full"
            dangerouslySetInnerHTML={createMarkup(data?.content_3 || "")}
          />
        </div>
        <div className="w-full md:w-1/2 h-[500px] mt-6 md:mt-0 flex justify-center">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_1024/v1742898422/state/rapid-truck.webp"
            alt={imageAlt}
            className="w-[600px] h-[500px] object-cover rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default SixthComponent;
