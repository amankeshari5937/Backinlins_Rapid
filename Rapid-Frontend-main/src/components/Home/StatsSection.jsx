import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="relative w-full h-auto py-10 my-10  md:pb-30 flex text-center text-white">
      {/* Background Image */}
     <Image
    src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742470901/rapid-home/Success.webp"
    alt="Proven Track Record of Successful Auto Transport by Rapid Auto Shipping"
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
    layout="fill"
    objectFit="cover"
  />

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative w-full text-center">
        {/* Section Title */}
        <p className="text-rapidcolor font-semibold text-3xl mt-[5%]">
          Our Success
        </p>

        {/* Centered Background Text */}
        <div className="relative text-center mt-[5%]">
          <div className="mb-0 absolute left-[49.5%] -translate-x-1/2 -top-20 text-[6.5rem] hidden md:block font-[600] text-[#e4e4e5]">
            Success
          </div>
          <h3 className="text-3xl  md:text-6xl relative z-10 tracking-wide font-bold text-[#343633]">
            Our Proven Track of Records
          </h3>
        </div>

        {/* Stats Section */}
        <div
          ref={ref} // Track visibility
          className="mt-[8%] w-[90%] mx-auto py-[7%] flex flex-wrap justify-center items-center gap-10 bg-white/10 p-8 rounded-[50px] backdrop-blur-lg shadow-lg border border-white/20"
        >
          {/* Stat 1 */}
          <div className="text-center min-w-[200px]">
            <p className="text-5xl font-extrabold text-[#343633] min-w-[10px]">
              {inView && <CountUp start={0} end={14} duration={4} />}+ Years
            </p>
            <div className="w-[80%] mx-auto bg-black h-[2px] mt-1 mb-2"></div>
            <p className="text-3xl font-[500] text-white">In the business</p>
          </div>

          {/* Vertical Divider */}
          <div className="h-40 hidden md:block w-[2px] bg-[#343633]"></div>

          {/* Stat 2 */}
          <div className="text-center min-w-[200px]">
            <p className="text-5xl font-extrabold text-[#343633]">
              {inView && (
                <CountUp start={100} end={115} duration={3} separator="," />
              )}
              K+
            </p>
            <div className="w-[80%]  mx-auto bg-black h-[2px] mt-1 mb-2"></div>
            <p className="text-3xl font-[500] text-white">Quotes</p>
          </div>

          {/* Vertical Divider */}
          <div className="h-40 md:bg-transparent hidden  md:block w-[2px] lg:bg-[#343633]"></div>

          {/* Stat 3 */}
          <div className="text-center min-w-[200px]">
            <p className="text-5xl font-extrabold text-[#343633]">
              {inView && (
                <CountUp start={0} end={10} duration={3} separator="," />
              )}
              K+
            </p>
            <div className="w-[80%] mx-auto bg-black h-[2px] mt-1 mb-2"></div>
            <p className="text-3xl font-[500] text-white">Vehicles Shipped</p>
          </div>

          {/* Vertical Divider */}
          <div className="h-40 w-[2px] hidden  md:block bg-[#343633]"></div>

          {/* Stat 4 */}
          <div className="text-center min-w-[200px]">
            <p className="text-5xl font-extrabold text-[#343633]">
              {inView && (
                <CountUp start={0} end={4.8} duration={2} decimals={1} />
              )}{" "}
              /5
            </p>
            <div className="w-[80%] mx-auto bg-black h-[2px] mt-1 mb-2"></div>
            <p className="text-3xl font-[500] text-white">Overall Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;