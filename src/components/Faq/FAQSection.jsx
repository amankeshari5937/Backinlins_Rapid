import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question:
      "Why should I use a car shipping service instead of cross-country driving?",
    answer:
      "Car shipping saves time, reduces wear and tear on your vehicle, and enhances safety.",
  },
  {
    question: "Are vehicles insured during shipping?",
    answer:
      "Yes, most shipping companies provide insurance coverage for your vehicle during transit.",
  },
  {
    question: "How does open carrier transport differ from enclosed transport?",
    answer:
      "Open carrier is more affordable but exposes vehicles to weather, while enclosed transport offers protection.",
  },
  {
    question: "How is the cost of shipping determined?",
    answer:
      "Cost depends on distance, vehicle type, shipping method, and seasonal demand.",
  },
  {
    question: "When shipping, can I put personal items in my car?",
    answer:
      "Some companies allow limited personal items, but it's best to confirm with the provider.",
  },
  {
    question: "How long does it typically take to ship a car across the USA?",
    answer:
      "Shipping time varies, but it usually takes 5-10 days depending on the route and method.",
  },
  {
    question:
      "If I am unavailable when the vehicle is picked up or delivered, can any other person do the process on my behalf?",
    answer:
      "Yes, as long as they have proper authorization and identification.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq-section"
      className="w-full mx-auto my-12 p-6 bg-white rounded-lg container"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-black">
        <span className="text-red-500">FAQs</span> on Car Shipping Services in
        the USA
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-100 rounded-xl shadow-lg">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <FaMinus className="text-red-500" />
            ) : (
              <FaPlus className="text-red-500" />
            )}
          </button>
          <div
            className="overflow-hidden"
            style={{ display: openIndex === index ? "block" : "none" }}
          >
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
