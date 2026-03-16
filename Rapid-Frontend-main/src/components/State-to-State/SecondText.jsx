import { motion } from "framer-motion";

const QSection = ({ data }) => {
  const faqs = [
    {
      question: "What else can we ship with your company?",
      answer:
        "Automobiles, trucks, and SUVs comprise a modest percentage of our transport. We also move vans, motorcycles, limousines, yachts, RVs, and other vehicles. We transport all sorts of vehicles, such as heavy machinery, military vehicles, and even boats.",
    },
    {
      question:
        "Does someone need to be present at the pickup and drop-off location to meet the carrier driver?",
      answer:
        "The vehicle's pick-up and delivery will require the presence of someone. This is where you sign the pick-up and delivery inspection paperwork. The person should be over 18, have your permission, and preferably be a licensed driver.",
    },
    {
      question: "Is there any preparation required for shipping my vehicle?",
      answer:
        "Ensure the car's interior and exterior are clean so the driver can easily see if there is prior damage. Remove all personal belongings. Inform the driver of any vehicle issues. Ensure that the car has a quarter tank of gas at pickup.",
    },
    {
      question: "Can we transport a vehicle that isn't running?",
      answer:
        "Yes! We transport non-running vehicles with a winch-equipped transporter. There is an upcharge for the additional gear and labor. When making reservations online or with your agent, please mark your vehicle as a breakdown or not running.",
    },
    {
      question: "How do you get a shipment cost quote?",
      answer: `On our website, we have a quote form that clients can fill out for an estimate. Fill in all the details for an accurate quote. The process is quick and easy, allowing you to get a free quote for ${data?.from} to ${data?.to} auto transport.`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 bg-white rounded-2xl mt-20">
      <h2 className="text-2xl lg:text-5xl font-bold text-center mb-6">
        Still Have <span className="text-rapidcolor">Doubts</span> About
        <span className="text-rapidcolor"> Shipping</span> Your Car?
      </h2>
      <p className="text-gray-700 text-start mb-6 text-xl">
        Rapid Auto Shipping is always ready to answer any questions related to
        shipping a vehicle. We hope some of these commonly asked questions will
        help you clarify your doubts about shipping your vehicle.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            className="bg-gray-100 p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 border border-rapidcolor"
            whileHover={{ scale: 1.03 }}
          >
            <motion.h3 className="text-2xl font-semibold mb-2 ">
              {faq.question}
            </motion.h3>
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 text-xl"
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QSection;
