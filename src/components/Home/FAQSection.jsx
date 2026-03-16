import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How does auto transport with Rapid Auto Shipping work?",
    answer:
      "Rapid Auto Shipping is a trusted auto shipping company that can transport any vehicle with expertise. It offers an affordable, safe, and reliable car shipping process. The expert team of sales professionals is available for any queries and help from pickup to delivery, giving you the best car shipping experience.",
  },
  {
    question: "How much does it cost to ship a car in the United States?",
    answer:
      "The cost to ship a car in the United States ranges from $500 to $1500, with the average hovering around $1000. However, the total cost of shipping a vehicle is vastly affected by factors such as the distance, the size of the car, the cost of gas, the selected method of transport, and the time of the year, among others.",
  },
  {
    question:
      "What is the difference between open and enclosed auto transport?",
    answer:
      "In an open auto transport, vehicles are shipped in an open-air two-level trailer where vehicles are exposed to the elements. This method is cheaper, faster, and suitable for standard and used vehicles. Enclosed auto transport is carried out with a fully enclosed trailer that gives protection from external elements such as dust, debris, and theft. This method suits high-value and classic cars that need more protection during shipping.",
  },
  {
    question: "Can I ship a non-running or inoperable vehicle?",
    answer:
      "A vehicle that cannot move on its own power is a non-running or inoperable vehicle. Almost any kind of vehicle can be shipped, whether it's moving or not. However, this type of vehicle requires special equipment and techniques for loading and unloading, leading to higher shipping costs.",
  },
  {
    question: "Is my vehicle insured during transport?",
    answer:
      "The answer is 'yes.' Each vehicle that is shipped is insured during transit. Auto transport companies are legally required to have liability insurance that covers potential damage to your vehicle while it's in their custody. This insurance provides protection during loading, unloading, and transit.",
  },
  {
    question: "Can I Ship Personal Items Inside My Vehicle?",
    answer:
      "You may transport personal items in your car, as long as their total weight does not exceed 100 pounds and they are stored in the trunk or back seat (below the window line). Please keep in mind that personal belongings are not covered by insurance if they are reported as damaged or missing.",
  },
  {
    question: "How long does it take to ship a car?",
    answer:
      "There is no fixed timeframe for car delivery. However, it typically takes 6-12 days to deliver a car in the USA, but this can vary due to distance, route, weather, carrier availability, and the method of transport, such as open or enclosed.",
  },
  {
    question: "Do you offer door-to-door auto transport services?",
    answer:
      "Yes, at Rapid Auto Shipping, we offer door-to-door auto transport services. This is a very convenient way of shipping your car, where you don't need to drop your vehicle at a terminal. Your car is picked up from your location and delivered to your desired destination.",
  },
  {
    question: "How do I prepare my vehicle for shipping?",
    answer:
      "To prepare your vehicle for shipping, you must thoroughly wash and clean your vehicle's interior and exterior. To avoid leaks during transport, you must top off excess fluids, such as coolant, oil, brake fluid, etc. Check tire pressure and remove accessories and personal belongings. Take the vehicle's picture and document its condition before shipping.",
  },
  {
    question: "Can I track my car during transport?",
    answer:
      "Yes, you can track your vehicle during transport. We offer a vehicle tracking facility; our carrier trucks have GPS installed that allows you to track your vehicles' location in real time. You can also speak to our drivers and get an update. Apart from this, you can always contact us and get an update on your vehicle.",
  },
  {
    question: "What types of vehicles can you ship?",
    answer:
      "We can ship any vehicle that has wheels in it. Rapid Auto Shipping specializes in shipping all types of vehicles, such as sedans, SUVs, pickup trucks, minivans, oversized vehicles, antiques, classic cars, motorcycles, construction vehicles, inoperable cars, and boats. If you think your vehicle cannot be shipped, just call us at +1-833-233-4447 to find out what we can do for you.",
  },
  {
    question: "Do you offer any discounts or special rates?",
    answer:
      "Yes, we offer several types of discounts and special rates on our car transport services. We provide various discounts, including Student discount, Military discount, Senior citizen discount, Snowbird discount, Multiple car shipping discount, and return customer discount. For a more detailed discussion on this, click the link https://rapidautoshipping.com/deals",
  },
  {
    question:
      "Why choose Rapid Auto Shipping over other car shipping companies?",
    answer:
      "Rapid Auto Shipping is a reliable and reputable auto shipping company that offers safe and secure auto shipping at an affordable price. It has gained its customers' confidence, and they keep reporting positive experiences with their car shipments. Customers choose us for our affordable options at a competitive price and our 24/7 customer support from quote to delivery.",
  },
  {
    question: "How Do You Handle Extreme Weather During Transport?",
    answer:
      "We prioritize vehicle safety and route adjustments to handle extreme weather during transport. Our experienced drivers and handlers abide by the industry regulations and use secure loading and unloading practices. We prioritize the use of enclosed transportation for added security. We leverage data and analytics to optimize routes that help us avoid delays and ensure timely and secure delivery.",
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
      className="w-full mx-auto px-6 my-10 py-10 bg-white rounded-lg container"
    >
      <h3 className="text-5xl font-bold text-center mb-8 text-black">
        <span className="text-red-500">FAQs</span> on Car Shipping Services in
        the USA
      </h3>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-100 rounded-xl shadow-lg">
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
          <div
            className="overflow-hidden"
            style={{ display: openIndex === index ? "block" : "none" }}
          >
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Main Content */}
      <main>
        <FAQSection />
      </main>
    </div>
  );
};

export default App;
