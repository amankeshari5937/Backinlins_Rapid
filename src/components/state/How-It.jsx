import React from "react";

const steps = [
  {
    title: "Get an Instant Quote",
    content:
      "Enter your details to receive an instant quote for your vehicle shipment.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1742552993/components/Get-an-Instant-Quote.webp",
    alt: "Instant quote for vehicle shipping",
  },
  {
    title: "Schedule your pickup",
    content: "Choose a convenient time for your vehicle pickup.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1742552993/components/skjdjmjpktqdl7rwdvv8.webp",
    alt: "Scheduling vehicle pickup",
  },
  {
    title: "Ship your vehicle safely",
    content: "We ensure a smooth and secure shipping process.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1742552993/components/q9zso2z3gurs23a6lpwy.webp",
    alt: "Safe vehicle shipping process",
  },
  {
    title: "Receive your car",
    content: "Your vehicle is delivered to your chosen destination.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1742552994/components/hg2vnpdxchsfzlnnc0uk.webp",
    alt: "Vehicle delivery at destination",
  },
];

const HowItWorks = ({ data }) => {
  return (
    <div className="bg-white mb-10 pb-10">
      <div className="mx-auto relative text-center mt-[5%] mb-10">
        <span className="mt-6 absolute left-1/2 -translate-x-1/2 -top-20 text-[5rem] hidden lg:block font-semibold text-gray-300">
          How It Works ?
        </span>
        <h2 className="text-4xl w-[90%] mx-auto lg:text-5xl relative z-10 font-bold text-gray-800">
          <span className="text-rapidcolor">How </span> Does {data?.state_name}
          <span className="text-rapidcolor"> Vehicle Transportation </span>Work?
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
        {steps.map((step, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg group">
            <div className="relative">
              <img
                src={step.image}
                alt={step.alt}
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-70 transition-all duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-500 group-hover:translate-y-[-50px]">
              <span className="font-bold text-2xl md:text-3xl group-hover:translate-y-[-10px] transition-all duration-500">
                {step.title}
              </span>
              <p className="text-base md:text-lg mt-1 opacity-0 h-[0px] group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-[-10px] transition-all duration-500">
                {step.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;