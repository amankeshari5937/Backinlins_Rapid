import React from "react";
import { MdOutlinePhone } from "react-icons/md";

const SeventhComponent = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="relative bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dz2zovmf1/image/upload/v1746875770/cars/Secure-and-Transparent-Shipping-Process.webp')",
          
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="text-rapidcolor">Secure</span> and{" "}
          <span className="text-rapidcolor">Transparent</span> Shipping Process
        </h2>
 
        <div className="border-2 border-white rounded-lg p-4 sm:p-6 md:p-8">
          <p className="text-base sm:text-lg md:text-xl mb-4">
            Security and transparency are our priority. Our advanced{" "}
            {data?.comapany_name} car carrier ship tracking system allows you to
            monitor your vehicle’s location, ensuring peace of mind throughout
            the journey. You will receive a booking number upon confirmation,
            which provides access to our online tracking portal.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Our dedicated support team is available 24/7 to answer any questions
            and provide updates on your shipment. We believe in clear
            communication and keeping you informed at every step of the process.
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            className="bg-blue-500 rounded-full text-white font-semibold py-2 px-6 hover:bg-opacity-80 text-xl"
            onClick={scrollToTop}
          >
            Get a Quote »
          </button>
          <div className="hidden xl:flex items-center mr-5">
            <button className="bg-white border-2 font-[600]  border-rapidcolor text-rapidcolor flex items-center gap-3 px-5 py-3 rounded-full hover:bg-rapidcolor hover:text-white text-lg">
              <MdOutlinePhone size={30} color="green" />
              <span className="text-xl"> (833) 233-4447</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhComponent;
