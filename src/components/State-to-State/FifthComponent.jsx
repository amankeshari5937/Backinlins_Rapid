import React from "react";
import { motion } from "framer-motion";

const CaliforniaMissouri = ({ data }) => {
  // Fallback values for states data
  const statesData = data?.californiaMissouri?.states || [
    {
      description: `${
        data?.from_content || "No description available for California"
      }`,
      imgSrc: `${
        data?.from_image 
      }`,
    },
    {
      description: `${
        data?.to_content || "No description available for Missouri"
      }`,
      imgSrc: `${
        data?.to_image 
      }`,
    },
  ];

  // Define alt texts dynamically from data with fallbacks
  const altTexts = [
    data?.from_image_alt || "About California",
    data?.to_image_alt || "About Missouri",
  ];

  // Function to process HTML and style anchor tags
  const createMarkup = (htmlContent) => {
    if (!htmlContent) return { __html: "" };
    // Replace anchor tags with styled version (blue color)
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #1E3A8A"'
    );
    return { __html: styledContent };
  };

  // Function to construct image URL
  const getImageUrl = (imgSrc) => {
    // If imgSrc is a full URL (e.g., from Cloudinary), use it directly
    if (imgSrc && imgSrc.startsWith("http")) {
      return imgSrc;
    }
    // Fallback for relative paths (though not needed with Cloudinary URLs)
    return imgSrc; // Since your backend now returns full Cloudinary URLs
  };

  return (
    <div className="px-8 bg-white max-w-9xl mx-auto mt-40">
      <div className="flex flex-col md:flex-row items-start justify-center gap-12">
        {[
          { name1: "About", name2: data?.from },
          { name1: "About", name2: data?.to },
        ].map((state, index) => (
          <motion.div
            key={index}
            className="text-center max-w-lg flex flex-col items-center bg-white p-6 rounded-xl transition-transform duration-500 transform shadow-3d hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={getImageUrl(statesData[index].imgSrc)}
              alt={altTexts[index]} // Dynamically set alt text
              className="w-96 h-48 mb-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <h3 className="text-4xl font-bold text-black transition-colors duration-300">
              {state.name1}{" "}
              <span className="text-rapidcolor">{state.name2}</span>
            </h3>
            <p
              className="text-gray-700 text-justify text-xl mt-2 leading-relaxed"
              dangerouslySetInnerHTML={createMarkup(
                statesData[index].description
              )}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaliforniaMissouri;
