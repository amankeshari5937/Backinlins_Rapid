import React from "react";
import PropTypes from "prop-types";

const SixthComponent = ({ data }) => {
  console.log("SixthComponent data:", data); // Debug: Log the data prop

  // Function to add blue color to anchor tags
  const createMarkup = (htmlContent) => {
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  const factors = [
    {
      title: "Distance",
      description: `The distance a car needs to cover for delivery directly affects the cost of shipping. The greater the distance, the higher the shipping cost of your ${data?.company_name} car.`,
      img: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472736/city-to-city/icons/shiping-distance.webp",
      alt: "Car Shipping Distance – Factors Affecting City-to-City Auto Transport Costs",
    },
    {
      title: "Vehicle Size and Weight",
      description: `Bigger and heavier vehicles take up more space in the trailer truck, leaving less space for other vehicles. This also leads to a higher cost of shipping.`,
      img: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472736/city-to-city/icons/types-of-transport.webp",
      alt: "Safe Vehicle Transport – Reliable City-to-City Car Shipping with Insurance Coverage",
    },
    {
      title: "Transport Type",
      description: `Enclosed transport gives extra protection to your car, expedited shipping helps in meeting deadlines, and guaranteed pickup keeps your schedule intact. However, they are costly.`,
      img: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472718/city-to-city/icons/safe-transport.webp",
      alt: "Types of Auto Transport – Open and Enclosed Options for City-to-City Shipping",
    },
    {
      title: "Season and Demand",
      description: `Peak seasons like the holiday season, from August to October, and the summer season from April to July, see higher rates due to increased demand and limited supply.`,
      img: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472736/city-to-city/icons/seasonality.webp",
      alt: "Seasonality Impact on Auto Transport – How Time of Year Affects City-to-City Shipping",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto text-center px-4 mt-20">
      <h3
        className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
        dangerouslySetInnerHTML={createMarkup(
          `Factors Affecting the Cost and Transportation Time of an ${
            data?.company_name || "Your Company"
          } Car Depends on the Following Factors:`
        )}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {factors.map((factor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl border-2 border-rapidcolor p-6 text-center 
              transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl animate-fadeIn"
          >
            <div className="relative flex justify-center mb-4">
              {/* Soft Orange 3D Shadow */}
              <div className="absolute w-36 h-36 bg-orange-400 blur-xl opacity-40 rounded-full -z-10"></div>

              <img
                src={factor.img}
                alt={factor.alt}
                className="w-36 h-36 transition-transform duration-300 ease-in-out drop-shadow-[3px_3px_8px_rgba(255,125,0,0.6)]"
              />
            </div>

            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              {factor.title}
            </h4>
            <p
              className="text-gray-600 text-base md:text-lg"
              dangerouslySetInnerHTML={createMarkup(
                factor.description || "Default description"
              )}
            />
          </div>
        ))}
      </div>
      <p
        className="text-base md:text-lg lg:text-xl mt-8 animate-fadeIn"
        dangerouslySetInnerHTML={createMarkup(
          data?.footer_content ||
            "At Rapid Auto Shipping, we prioritize timely delivery without compromising safety. Our experienced drivers are well-versed in efficient routes and anticipate potential delays to provide accurate delivery estimates."
        )}
      />
    </div>
  );
};

SixthComponent.propTypes = {
  data: PropTypes.shape({
    company_name: PropTypes.string,
    distance_content: PropTypes.string,
    vehicle_content: PropTypes.string,
    transport_content: PropTypes.string,
    season_content: PropTypes.string,
    footer_content: PropTypes.string, // Optional: for the footer text
  }),
};

export default SixthComponent;