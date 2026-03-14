import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function EnhancedCarShippingEstimate({ data }) {
  // Dynamic state names
  const fromState = data?.from;
  const toState = data?.to;

  // Fallback values for dynamic text
  const introText = data?.content_4;
  const shippingCost1 = data?.content_first;
  const shippingTime = data?.content_second;
  const shippingCost2 = data?.content_third;

  // Card images and their alt texts
  const cardImages = [
    {
      src: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1747218579/rapid-home/How-much-does-shipping-from-state-to-state-cost.webp",
      alt: `Estimated cost to ship a car from ${fromState} to ${toState} with Rapid Auto Shipping`,
    },
    {
      src: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1747218911/rapid-home/How-long-does-shipping-take-from-state-to-state.webp",
      alt: `Estimated delivery time for car shipping from ${fromState} to ${toState}`,
    },
    {
      src: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1747218911/rapid-home/What-Makes-the-State-to-State-Route-Unique-for-Auto-Transport.webp",
      alt: `Key highlights of auto transport route from ${fromState} to ${toState}`,
    },
  ];

  // Function to process HTML and style anchor tags
  const createMarkup = (htmlContent) => {
    if (!htmlContent) return { __html: "" };
    // Replace anchor tags with styled version (orange color to match brand)
    const styledContent = htmlContent.replace(
      /<a/g,
     '<a style="color: #333; text-decoration: underline;"'
    );
    return { __html: styledContent };
  };

  // Card component for each estimation section with its own image and alt text
  const EstimateCard = ({ icon, title, content, imageSrc, altText, index }) => (
    <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg bg-white mb-6 transition-all duration-300 hover:translate-y-[-5px]">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"></div>
      <div className="flex flex-col md:flex-row">
        {/* Card image - will adjust height based on content */}
        <div className="md:w-2/5 overflow-hidden">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Card content */}
        <div className="p-6 md:w-3/5">
          <h3 className="text-xl font-semibold text-gray-900 flex items-start gap-3 mb-3">
            {icon}
            <span className="flex-1">{title}</span>
          </h3>
          <div
            className="text-gray-600 text-lg leading-relaxed pl-9"
            dangerouslySetInnerHTML={createMarkup(content)}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="shipping-estimate"
      className="py-16 bg-gray-50 overflow-hidden relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-orange-500 opacity-5"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-orange-500 opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold uppercase tracking-wider">
            Shipping Details
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            <span className="text-orange-500">Cost Estimate</span> and{" "}
            <span className="text-orange-500">Timeline</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            For Transporting a Car from {fromState} to {toState}
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            How much does it cost and how much time will it take to ship a car
            from {fromState} to {toState}? Here are the answers you've been
            looking for:
          </p>
        </div>

        <div className="w-full">
          {/* Full width cards with their individual images and alt texts */}
          <EstimateCard
            icon={
              <MdOutlineDoubleArrow className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
            }
            title={`How much does shipping from ${fromState} to ${toState} cost?`}
            content={shippingCost1}
            imageSrc={cardImages[0].src}
            altText={cardImages[0].alt}
            index={0}
          />

          <EstimateCard
            icon={
              <MdOutlineDoubleArrow className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
            }
            title={`How long does shipping take from ${fromState} to ${toState}?`}
            content={shippingTime}
            imageSrc={cardImages[1].src}
            altText={cardImages[1].alt}
            index={1}
          />

          <EstimateCard
            icon={
              <MdOutlineDoubleArrow className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
            }
            title={`What Makes the ${fromState} to ${toState} Route Unique for Auto Transport?`}
            content={shippingCost2}
            imageSrc={cardImages[2].src}
            altText={cardImages[2].alt}
            index={2}
          />
        </div>
      </div>
    </section>
  );
}