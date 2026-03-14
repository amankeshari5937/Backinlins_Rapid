import TransportForm from "@/components/CommonComponents/Form";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Header = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const fromInputRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (fromInputRef.current) {
      fromInputRef.current.focus();
      console.log("Component Mounted");
    }
  }, []);

  // Fallback values if data is not available
  const title = data?.title || "California Car Shipping Services";
  const description = data?.description || {
    full: `${data?.about}`,
  };
  const backgroundImage = `${data?.map_image}` || "/images/california-map.webp";

  return (
    <div className="bg-white py-12 relative">
      <div className="hidden md:flex absolute items-center justify-center md:right-[35%] z-0">
        <Image
          src={backgroundImage}
          alt={title}
          width={500}
          height={375}
          priority={false} // Change to false since it's not visible on mobile
          fetchPriority="high"
          quality={75}
          sizes="(max-width: 768px) 0px, 500px" // 0px for mobile since hidden
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>

      <div className="bg-white bg-opacity-5 rounded-xl md:px-8 md:p-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1
              className="text-4xl md:text-6xl px-5 font-bold text-h1color"
              style={{ lineHeight: 1.3 }}
            >
              {title}
            </h1>

            <div className="flex">
              <div className="glass">
                <p className="text-gray-800 p-0 font-semibold text-xl leading-relaxed">
                  {description.full}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <TransportForm
              className="w-full max-w-lg"
              ref={fromInputRef}
              initialData={data?.formData} // Passing data to TransportForm if needed
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
