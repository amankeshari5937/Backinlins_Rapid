import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const getQuestions = (stateName) => [
  `Why should I use a car shipping service instead of driving across ${stateName} or cross-country?`,
  `Is open or enclosed auto transport better for ${stateName}?`,
  `Is my car insured during transport in ${stateName}?`,
  `How do I prepare my car for shipping in ${stateName}?`,
  `How long does auto transport take in ${stateName}?`,
  `Can I leave personal items in my car when shipping it to or from ${stateName}?`,
  `Can someone else handle vehicle pickup or delivery on my behalf in ${stateName}?`,
  `What payment options are available for ${stateName} auto transport services?`,
];

const FAQSection = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  const stateName = data?.state_name || "USA";

  const faqs = getQuestions(stateName).map((question, i) => ({
    question,
    answer: data?.[`faq_${i + 1}`] || "",
  }));

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("faq-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        setVisible(top < window.innerHeight - 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!data) {
    return <p className="text-center text-gray-500">Loading FAQs...</p>;
  }

  return (
    <motion.div
      id="faq-section"
      className="w-full mx-auto px-6 my-10 py-10 bg-white rounded-lg container"
      initial={{ opacity: 0, y: 50 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-5xl font-bold text-center mb-8 text-black">
        <span className="text-red-500">FAQs</span> on Car Shipping Services in{" "}
        {stateName}
      </h2>
      {faqs.length > 0 ? (
        faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="mb-4 p-4 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? (
                <FaMinus className="text-red-500" />
              ) : (
                <FaPlus className="text-red-500" />
              )}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                openIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div
                className="mt-2 text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: faq.answer || "Answer not available",
                }}
              />
            </motion.div>
          </motion.div>
        ))
      ) : (
        <p className="text-center text-gray-500">No FAQs available</p>
      )}
    </motion.div>
  );
};

export default FAQSection;
