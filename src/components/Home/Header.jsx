import React, { useRef, useEffect } from "react";
import Image from "next/image";
import TransportForm from "../CommonComponents/Form";

const VehicleShippingComponent = () => {
  const fromInputRef = useRef(null);

  // Defer focus to avoid blocking LCP
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (fromInputRef.current) {
        fromInputRef.current.focus();
      }
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-white pt-12 relative w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="hidden md:flex absolute items-center justify-center md:right-[35%] z-0">
        <Image
          src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1749284992/Rapid-auto-shipping-usa_br9gua.webp"
          alt="Rapid Auto Shipping USA"
          width={500}
          height={375}
          priority={false}
          fetchPriority="low"
          quality={75}
          sizes="(max-width: 768px) 0px, 500px"
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Content Wrapper */}
      <div className="bg-white bg-opacity-5 rounded-xl px-4 md:p-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* LCP Element - No JS dependencies */}
            <h1 className="text-4xl xl:text-5xl font-bold text-h1color block leading-[1.3]">
              Trust Rapid Auto Shipping for Fast, Secure, and Affordable Vehicle
              Transport
            </h1>

            {/* Paragraph - Hidden on mobile, visible on sm and above */}
            <div className="glass hidden sm:block">
              <p className="text-gray-800 p-0 text-lg font-semibold leading-relaxed">
                Whether you're moving a family sedan, shipping a luxury car
                cross-country, or transporting heavy equipment nationwide, Rapid
                Auto Shipping delivers unmatched reliability and value. As a
                leading auto shipping company with 14 years of experience and a
                98% customer satisfaction rate, we make vehicle transport
                simple, secure, and stress-free. Our dedicated team ensures
                safe, door-to-door service tailored to your needs, backed by
                thousands of 5-star reviews from customers across the USA. Get
                your instant auto shipping quote today and experience why Rapid
                Auto Shipping is the trusted choice for individuals and
                businesses alike!
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col justify-start">
            <TransportForm className="w-full max-w-lg" ref={fromInputRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleShippingComponent;