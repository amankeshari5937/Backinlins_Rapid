import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Head from "next/head"; // Use next/head instead of next/document

const FAQSection = ({ data }) => {
  const faqs = [
    {
      question: `How much will it cost to ship my car from ${data?.from} to ${data?.to}?`,
      answer: data?.faq_1,
    },
    {
      question: `How long does it take to get my car from ${data?.from} to ${data?.to}?`,
      answer: data?.faq_2,
    },
    {
      question: `Can I pack personal stuff in my car when shipping it?`,
      answer: `It’s best to keep your car empty during ${data?.from} to ${data?.to} car shipping. Carriers aren’t responsible for personal items, and extra weight could bump up the auto transport cost. To avoid any hiccups, clear out all your belongings and valuables before the driver picks up your vehicle.`,
    },
    {
      question: `Is my car insured while it’s being shipped from ${data?.from} to ${data?.to}?`,
      answer: `Absolutely! Your vehicle is protected by the carrier’s cargo insurance during ${data?.from} to ${data?.to} vehicle shipping. At Rapid Auto Shipping, we only work with fully licensed, insured, and bonded carriers who offer up to $1 million in coverage. Need extra reassurance? Ask about our additional insurance options for complete peace of mind during the auto transport process.`,
    },
    {
      question: `Can I keep tabs on my car while it’s being shipped?`,
      answer: `You bet! With Rapid Auto Shipping, you can track your ${data?.from} to ${data?.to} auto transport in real time. After booking, you’ll get a unique tracking number to check your car’s status online whenever you want. Our team will also keep you in the loop with regular updates throughout the vehicle shipping process.`,
    },
    {
      question: `Do I need to show proof of ownership to ship my car?`,
      answer: `Nope! You don’t need to provide ownership papers or a title to ship your car from ${data?.from} to ${data?.to}. The transport agreement gives the carrier permission to move your vehicle, whether you own it or not. Just make sure to keep the title safe and have it sent separately to avoid any mix-ups during car shipping.`,
    },
  ].filter((faq) => faq.answer !== undefined); // Filter out FAQs with undefined answers

  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("faq-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        setVisible(top < window.innerHeight - 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD schema dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]+>/g, ""), // Strip HTML tags for schema
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <motion.div
        id="faq-section"
        className="w-full mx-auto my-12 p-6 bg-white rounded-lg container"
        initial={{ opacity: 0, y: 50 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-8 text-black">
          <span className="text-rapidcolor">FAQs</span> on Car Shipping Services
          in the USA
        </h2>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="mb-4 p-4 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
            >
              <div className="w-full flex">
                <div className="w-[97%] text-start">{faq.question}</div>
                <div className="w-[3%]">
                  {openIndex === index ? (
                    <FaMinus className="text-red-500" />
                  ) : (
                    <FaPlus className="text-red-500" />
                  )}
                </div>
              </div>
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
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default FAQSection;
