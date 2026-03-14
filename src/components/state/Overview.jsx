import React from "react";

const Overview = ({ data }) => {
  // Function to add blue color to anchor tags
  const createMarkup = (htmlContent) => {
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  return (
    <section className="container mx-auto px-4 py-10 my-10 text-center shadow-3d">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
        Overview Of {data?.state_name} Car Shipping Services
      </h2>

      <div className="flex flex-col lg:flex-row mx-auto gap-10">
        <div className="flex w-full lg:w-[40%] h-auto justify-center md:justify-start mb-6">
          <img
            src={data?.state_image}
            alt="California Cityscape"
            className="w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="text-lg w-full lg:w-[60%] h-full text-gray-800 flex flex-col justify-start text-start items-start mx-auto">
          <p
            className="mb-4 text-lg"
            dangerouslySetInnerHTML={createMarkup(data?.content_1 || "")} // Apply createMarkup
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;