import { useState, useEffect, useRef } from "react";
import { GiPathDistance } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa6";
import { RiPinDistanceLine } from "react-icons/ri";

export default function CardSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Track visibility for lazy loading
  const sliderRef = useRef(null);
  const sectionRef = useRef(null); // Ref for the section container

  const cardsData = [
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745319194/rapid-home/Lamborghini-Auto-Transport.webp",
      title: "Lamborghini",
      description: {
        trip: "San Francisco, CA To Brooklyn, NY",
        price: "$2,460",
        distance: "2.910 mi",
      },
      alt: "Lamborghini being transported from San Francisco to Brooklyn",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745319293/rapid-home/Jeep-Wrangler-Auto-Transport.webp",
      title: "Jeep Wrangler",
      description: {
        trip: "Philadelphia, PA To Miami, FL",
        price: "$840",
        distance: "1,198 mi",
      },
      alt: "Jeep Wrangler on a transport trailer from Philadelphia to Miami",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745843760/rapid-home/Motorcycle-shipping-review.webp",
      title: "Street Glide Harley Davison",
      description: {
        trip: "Galveston, TX To Somerset, MA",
        price: "$1,120",
        distance: "1,846 mi",
      },
      alt: "Street Glide Harley Davidson motorcycle being shipped from Galveston to Somerset",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745243468/rapid-home/Sky-Trak-Tractor.webp",
      title: "Sky Trak Tractor",
      description: {
        trip: "New Boston, TX to Sparta, TN",
        price: "$2,250.00",
        distance: "650 mi",
      },
      alt: "Sky Trak Tractor being transported from New Boston to Sparta",
    },
  ];

  // Set background based on hover on desktop or active card on mobile/tablet
  const backgroundImage =
    !isSmallScreen && !isMediumScreen && hoveredCard !== null
      ? cardsData[hoveredCard].image
      : cardsData[activeCard].image;

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when in viewport
          observer.disconnect(); // Stop observing after loading
        }
      },
      {
        root: null, // Use viewport as root
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Effect for hover on desktop
  useEffect(() => {
    if (!isSmallScreen && !isMediumScreen && hoveredCard !== null) {
      setActiveCard(hoveredCard);
    }
  }, [hoveredCard, isSmallScreen, isMediumScreen]);

  const handleNextCard = () => {
    setActiveCard((prev) => (prev + 1) % cardsData.length);
  };

  const handlePrevCard = () => {
    setActiveCard((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  useEffect(() => {
    if (sliderRef.current && (isSmallScreen || isMediumScreen)) {
      const cardWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft = activeCard * cardWidth;
    }
  }, [activeCard, isSmallScreen, isMediumScreen]);

  return (
    <div
      ref={sectionRef} // Attach ref to the container
      className="relative w-full h-screen transition-all duration-700 py-10 my-10 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: isVisible ? `url(${backgroundImage})` : "none", // Load background only when visible
        backgroundColor: isVisible ? "transparent" : "#000", // Fallback color while not visible
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="absolute top-0 left-0 right-0 p-4 md:p-6 lg:p-8 z-20">
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Some Of Our Recent Shipments
        </h3>
      </div>

      {/* Navigation buttons for mobile/tablet */}
      {(isSmallScreen || isMediumScreen) && (
        <div className="absolute z-30 w-full flex justify-between px-4 top-1/2 transform -translate-y-1/2">
          <button
  onClick={handlePrevCard}
  aria-label="Previous card"
  className="bg-white/30 hover:bg-white/50 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
</button>

<button
  onClick={handleNextCard}
  aria-label="Next card"
  className="bg-white/30 hover:bg-white/50 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>
        </div>
      )}

      <div className="relative z-10 h-full w-full flex flex-col justify-end">
        {/* Desktop View */}
        {!isSmallScreen && !isMediumScreen && (
          <div className="grid grid-cols-4 h-full">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-end h-full border-r border-gray-400/30 last:border-r-0 group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-6 h-full flex flex-col justify-end">
                  <span className="text-3xl font-bold text-white mb-4">
                    {card.title}
                  </span>

                  <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-80 group-hover:opacity-100">
                    <div className="space-y-3">
                      <p className="text-white flex items-center">
                        <span className="inline-block text-2xl mr-2">
                          <GiPathDistance />
                        </span>
                        <span className="text-gray-300">Trip:</span>
                        <span className="ml-2 font-semibold">
                          {card.description.trip}
                        </span>
                      </p>
                      <p className="text-white flex items-center">
                        <span className="inline-block text-2xl mr-2">
                          <FaDollarSign />
                        </span>
                        <span className="text-gray-300">Price:</span>
                        <span className="ml-2 font-semibold">
                          {card.description.price}
                        </span>
                      </p>
                      <p className="text-white flex items-center">
                        <span className="inline-block text-2xl mr-2">
                          <RiPinDistanceLine />
                        </span>
                        <span className="text-gray-300">Distance:</span>
                        <span className="ml-2 font-semibold">
                          {card.description.distance}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile/Tablet View */}
        {(isSmallScreen || isMediumScreen) && (
          <div
            ref={sliderRef}
            className="w-full overflow-x-hidden scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className={`flex ${isSmallScreen ? "w-[400%]" : "w-[200%]"}`}>
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className={`${
                    isSmallScreen ? "w-1/4" : "w-1/2"
                  } shrink-0 flex flex-col h-full border-r border-gray-400/30 last:border-r-0`}
                >
                  <div className="p-4 md:p-6 h-full flex flex-col justify-end">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {card.title}
                    </h2>

                    <div
                      className={`bg-black/60 backdrop-blur-sm p-4 md:p-6 rounded-xl ${
                        activeCard === index ? "block" : "hidden"
                      }`}
                    >
                      <div className="space-y-3">
                        <p className="text-white flex items-center">
                          <span className="inline-block text-2xl mr-2">
                            <GiPathDistance />
                          </span>
                          <span className="text-gray-300">Trip:</span>
                          <span className="ml-2 font-semibold">
                            {card.description.trip}
                          </span>
                        </p>
                        <p className="text-white flex items-center">
                          <span className="inline-block text-2xl mr-2">
                            <FaDollarSign />
                          </span>
                          <span className="text-gray-300">Price:</span>
                          <span className="ml-2 font-semibold">
                            {card.description.price}
                          </span>
                        </p>
                        <p
                          class_unused
                          className="text-white flex items-center"
                        >
                          <span className="inline-block text-2xl mr-2">
                            <RiPinDistanceLine />
                          </span>
                          <span className="text-gray-300">Distance:</span>
                          <span className="ml-2 font-semibold">
                            {card.description.distance}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
