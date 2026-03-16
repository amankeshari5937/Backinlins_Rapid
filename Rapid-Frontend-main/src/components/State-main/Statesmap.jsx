import React from "react";
import Image from "next/image";

const USAStates = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-8 lg:px-16 py-6">
      <div className="relative w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dz2zovmf1/image/upload/q_auto,f_auto/v1746631186/rapid-home/USA.webp"
          alt="Rapid Auto Shipping, Nationwide Auto Transport Services"
          width={1200}
          height={500}
          className="w-full h-[220px] sm:h-[320px] lg:h-[420px] object-contain object-center"
          sizes="100vw"
          priority={true}
          quality={80}
        />
      </div>
    </div>
  );
};

export default USAStates;