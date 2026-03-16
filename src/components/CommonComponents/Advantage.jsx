import React from "react";

const ShippingAdvantages = () => {
  const advantages = [
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743063998/icons/rating.webp",
      alt: "Top-Rated Auto Shipping Services with Verified Customer Reviews",
      title: "Nationwide Auto Shipping Company",
      description:
        "Our extensive and Licensed Carrier network ensures safe and hassle-free vehicle transport to every part of the states. We guarantee you for timely pickup and deliveries that suit your schedule, providing top-tier service across the country. Your vehicle is covered with full insurance through the journey.",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743063998/icons/Complete-Vehicle-Coverage.webp",
      alt: "Complete Vehicle Coverage Provided During Auto Transport by Rapid Auto Shipping",
      title: "5-Star Customer Satisfaction & Positive Reviews",
      description:
        "Over thousands of satisfied customers, Rapid Auto Shipping has built strong reputation for reliability and excellence. Our 5-star ratings on Google, Trustpilot, and BBB accreditation reflect our commitment to providing the best auto transport service in the USA.",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743063998/icons/No-Up-Front-Deposit-Required.webp",
      alt: "No Upfront Deposit Required – Risk-Free Car Shipping Service",
      title: "Transport Convenience & Tracking",
      description:
        "We pickup and deliver your vehicle as per your specified location, eliminating all sort of inconvenience. This save you time and effort ensuring reliable, smooth and stress-free transportation. Our 24/7 Auto Transport Experts assist you with inquiries and GPS tracking facilitates you with real-time update.",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743063998/icons/Online-Shipment-Tracking.webp",
      alt: "Real-Time Online Shipment Tracking for Vehicle Transport",
      title: "Competitive Pricing, no Hidden Fees",
      description:
        "Our Experts provide you with transparent and competitive prices with no unexpected charges. Our quotes include fuel, tolls, and full insurance, ensuring unbeatable price. We also offer discounts to seasonal, students, military personnel, and repeat customers.",
    },
  ];

  return (
    <div className="my-10 mx-auto px-4 py-6">
      <h2 className="text-5xl font-bold text-center mb-6 text-gray-800">
        Advantages Using{" "}
        <span className="text-rapidcolor">Rapid Auto Shipping</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="bg-white shadow-3d border-2 border-black rounded-[40px] p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <img
                src={advantage.image}
                alt={advantage.alt} // Use the alt property here
                className="w-24 h-24 object-contain mb-4"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg text-rapidcolor font-semibold mb-3 text-gray-800">
              {advantage.title}
            </h3>
            <p className="text-gray-600 text-base text-start">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingAdvantages;
