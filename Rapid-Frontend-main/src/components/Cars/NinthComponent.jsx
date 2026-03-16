import Link from "next/link";
import React from "react";


const NinthComponent = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-4 border-2 border-rapidcolor rounded-lg shadow-lg mt-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 w-full p-4 order-2 md:order-1">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_600,q_auto,f_auto/v1746873280/cars/Request-a-Free-Quote.webp"
            alt="Request a Free Auto Transport Quote – Rapid and Hassle-Free Shipping Estimates"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 w-full p-4 order-1 md:order-2 text-justify">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Request a Free Quote for {data?.company_name} Auto Transport
          </h3>
          <p className="text-gray-700 mb-4 text-lg md:text-xl">
            Getting a quote for your {data?.company_name} auto shipping is quick
            and easy with Rapid Auto Shipping. Use our online quote calculator
            to receive an estimate within minutes.
          </p>
          <p className="text-gray-700 mb-4 text-lg md:text-xl">
            Alternatively, contact our customer service team at
            <span className="font-semibold"> +1 (833) 233-4447 </span>
            or through Live Chat for personalized assistance.
          </p>
          <p className="text-gray-700 mb-4 text-lg md:text-xl">
            We are committed to providing a seamless, secure, and affordable
            transport experience for your {data?.company_name}. Our team is
            ready to answer your questions and help you schedule your shipment
            at your convenience.
          </p>
          <Link href="/services/car-shipping-calculator">
          <button
            className="mt-4 bg-rapidcolor text-white font-semibold py-2 px-4 rounded-lg hover:bg-rapidcolor-dark transition duration-300"
          >
            Get a Quote
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NinthComponent;