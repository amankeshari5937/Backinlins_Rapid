import React from "react";

const CarShipping = ({ data = {} }) => {
  // Destructure with fallbacks
  const {
    state_name: stateName = "Your State",
    content_2: mainContent = "Default content for car shipping.",
    to_content: toContent = "Default shipping from content.",
    from_content: fromContent = "Default shipping to content.",
  } = data;

  // Function to add blue color to anchor tags
  const createMarkup = (htmlContent) => {
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-orange-600">Car Shipping</span> To and From {stateName}
          </h2>
          <div
            className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={createMarkup(mainContent)} // Apply createMarkup
          />
        </div>

        {/* Shipping Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* From State Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-t-4 border-orange-500">
            <div className="flex items-center justify-center bg-orange-50 py-4">
              <h3 className="text-xl font-bold text-gray-900">
                Shipping From {stateName}
              </h3>
              <svg
                className="w-8 h-8 text-orange-500 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={createMarkup(fromContent)} // Apply createMarkup
              />
            </div>
          </div>

          {/* To State Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-t-4 border-orange-500">
            <div className="flex items-center justify-center bg-orange-50 py-4">
              <svg
                className="w-8 h-8 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                ></path>
              </svg>
              <h3 className="text-xl font-bold text-gray-900">
                Shipping To {stateName}
              </h3>
            </div>
            <div className="p-6">
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={createMarkup(toContent)} // Apply createMarkup
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarShipping;