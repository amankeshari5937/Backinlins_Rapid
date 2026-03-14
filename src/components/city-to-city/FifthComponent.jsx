import React from "react";
import Image from "next/image";

function FifthComponent({ data }) {
  // Log data to debug
  console.log("FifthComponent Data:", data);

  return (
    <>
      {/* Desktop Version */}
      <section className="container w-full mx-auto py-12 mt-20 bg-gray-100">
        <div className="w-full overflow-hidden">
          {/* Hero Section with Blurred Black Background */}
          <div className="relative max-w-7xl mx-auto flex">
            <div className="relative w-full h-[690px]">
              <div className="relative w-full h-[600px]">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_auto,h_600,c_fill/v1742471449/city-to-city/How-Much-Does-It-Cost-To-Ship-Car.webp"
                  alt="How Much Does It Cost to Ship a Car City-to-City – Auto Transport Pricing Guide"
                  className="w-full h-full object-cover filter blur-sm brightness-50"
                  fill
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] px-4 md:px-0 md:w-[70%] flex flex-col justify-center items-center text-center bg-transparent bg-gradient-to-b from-black to-black">
              <h2 className="text-5xl md:text-6xl text-white font-extrabold tracking-tight drop-shadow-lg">
                How Much Does It Cost to Ship a Car?
              </h2>
              {/* Render content_7 with fallback */}
              {data?.content_7 ? (
                <p
                  className="text-white mt-6 text-lg md:text-xl max-w-3xl leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: data.content_7 }}
                />
              ) : (
                <p className="text-gray-200 mt-6 text-lg md:text-xl max-w-3xl leading-relaxed">
                  No content available for this section.
                </p>
              )}
            </div>
          </div>

          {/* Card Section */}
          <div className="max-w-7xl mx-auto mt-16 px-6">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900">
                Factors Affecting Car Shipping Cost
              </h3>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                The cost of shipping a car from{" "}
                <span className="font-[600] text-black">{data?.from}</span> to{" "}
                <span className="font-[600] text-black">{data?.to}</span> on
                several factors
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472736/city-to-city/icons/types-of-transport.webp",
                  title: "Vehicle Size and Weight",
                  description:
                    "Larger and heavier vehicles occupy more space and require more fuel, increasing shipping costs.",
                  alt: "Safe Vehicle Transport – Reliable City-to-City Car Shipping with Insurance Coverage",
                },
                {
                  icon: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472736/city-to-city/icons/seasonality.webp",
                  title: "Seasonality",
                  description:
                    "Peak seasons like summer see higher demand, leading to elevated shipping costs compared to winter.",
                  alt: "Seasonality Impact on Auto Transport – How Time of Year Affects City-to-City Shipping",
                },
                {
                  icon: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472736/city-to-city/icons/shiping-distance.webp",
                  title: "Shipping Distance",
                  description:
                    "Longer distances require more fuel, labor, and time, resulting in higher shipping costs.",
                  alt: "Car Shipping Distance – Factors Affecting City-to-City Auto Transport Costs",
                },
                {
                  icon: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472718/city-to-city/icons/safe-transport.webp",
                  title: "Types of Transport",
                  description:
                    "Open and terminal-to-terminal shipping are cost-effective, while enclosed and door-to-door methods are pricier.",
                  alt: "Types of Auto Transport – Open and Enclosed Options for City-to-City Shipping",
                },
              ].map((factor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200"
                >
                  <div className="h-40 w-40 mb-4">
                    <img
                      src={factor.icon}
                      alt={factor.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {factor.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FifthComponent;