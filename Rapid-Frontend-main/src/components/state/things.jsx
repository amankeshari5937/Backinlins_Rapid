import React from "react";
import { Truck, Calendar, Clipboard, FileText, MessageCircle } from "lucide-react";
import { IoCarSportOutline } from "react-icons/io5";

const CarShippingTips = ({ data }) => {

  const createMarkup = (htmlContent) => {
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };
  const tips = [
    {
      title: "Choosing the Right Service",
      description: data?.chossing_1 || "Choose a reliable car shipping service.",
      icon: <Truck className="w-12 h-12 mb-4 text-pink-500" />,
    },
    {
      title: "Seasonal Factors",
      description: data?.chossing_2 || "Consider seasonal impacts on shipping.",
      icon: <Calendar className="w-12 h-12 mb-4 text-orange-400" />,
    },
    {
      title: "Vehicle Preparation",
      description: data?.chossing_3 || "Prepare your vehicle properly.",
      icon: <IoCarSportOutline className="w-12 h-12 mb-4 text-pink-500" />,
    },
    {
      title: "Documentation",
      description: data?.chossing_4 || "Ensure all documents are ready.",
      icon: <FileText className="w-12 h-12 mb-4 text-orange-400" />,
    },
    {
      title: "Communication",
      description: data?.chossing_5 || "Maintain clear communication.",
      icon: <MessageCircle className="w-12 h-12 mb-4 text-pink-500" />,
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800">
          Things to Consider While Shipping a Car
        </h3>
        <p
          className="text-gray-600 mt-2"
          dangerouslySetInnerHTML={{ __html: data?.content_5 || "Tips for a smooth car shipping experience." }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-pink-500 to-orange-400 h-2"></div>
            <div className="p-6 flex flex-col items-center">
              {tip.icon}
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {tip.title}
              </h3>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={createMarkup(tip.description || "")}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarShippingTips;