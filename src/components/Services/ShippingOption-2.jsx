import React from "react";

const ShippingOptions_2 = () => {
  const handleMoreInfoClick = (url) => {
    window.location.href = url; // Redirects to the specified URL
  };

  return (
    <div className="h-auto container mx-auto mt-10 mb-10 bg-[#fff4f4] flex flex-col items-center px-4 py-1 gap-4">
      {/* Shipping Options */}
      {shippingData.map((option, index) => (
        <div
          key={index}
          className={`w-full flex flex-col ${
            index % 2 !== 0 ? "md:flex-row flex-col-reverse" : "md:flex-row"
          } rounded-lg overflow-hidden`}
        >
          {index % 2 === 0 ? (
            <>
              <div className="w-full md:w-[50%] h-auto">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-[50%] p-4 flex flex-col justify-center h-full">
                <h2 className="text-3xl font-semibold text-rapidcolor">
                  {option.title}
                </h2>
                <p className="text-gray-700 mt-2 text-xl">
                  {option.description}
                </p>
                <button
                  onClick={() => handleMoreInfoClick(option.url)}
                  className="w-[30%] mt-6 py-2 border border-rapidcolor text-rapidcolor hover:bg-rapidcolor hover:text-white transition"
                >
                  More Info →
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-[50%] p-4 flex flex-col justify-center h-full">
                <h2 className="text-3xl font-semibold text-rapidcolor">
                  {option.title}
                </h2>
                <p className="text-gray-700 mt-2 text-xl">
                  {option.description}
                </p>
                <button
                  onClick={() => handleMoreInfoClick(option.url)}
                  className="w-[30%] mt-6 py-2 border border-rapidcolor text-rapidcolor hover:bg-rapidcolor hover:text-white transition"
                >
                  More Info →
                </button>
              </div>
              <div className="w-full md:w-[50%] h-full">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const shippingData = [
  {
    title: "Auto Transport Auction",
    description:
      "Buying or selling at an auto auction? Our auto auction shipping service handles prompt vehicle pickup and delivery from major auction houses nationwide. We work with dealers and individuals, providing licensed, insured transport and real-time tracking to ensure vehicles arrive safely and on schedule.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770703930/Auto-Transport-Auction._q0d89h.jpg",
    url: "/services/auto-auction-shipping",
  },
  {
    title: "Military Car Shipping",
    description:
      "We proudly support service members with reliable military auto shipping across the United States. Whether PCS relocation or deployment, our experienced team provides flexible scheduling, secure transport, and competitive rates. We understand military timelines and offer dependable, insured car shipping you can trust.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770703928/Military-Car-Shipping.jpg_fiw8ae.jpg",
    url: "/military-auto-shipping",
  },
  {
    title: "Snowbird Shipping",
    description:
      "Our snowbird car transport service helps seasonal travelers move vehicles between northern and southern states with ease. Avoid long drives and vehicle wear by choosing safe, insured auto transport. We offer flexible scheduling during peak seasons and reliable nationwide service tailored for snowbirds.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770703930/Snowbird-Shipping.jpg_sw0h8n.jpg",
    url: "/snowbird-car-transport-service",
  },
  {
    title: "Classic Car Shipping",
    description:
      "Classic car shipping requires expert handling and specialized equipment. We offer enclosed transport options, soft tie-downs, and experienced drivers to protect vintage and collectible vehicles. Fully licensed and insured, our nationwide classic auto transport service is trusted by collectors and restoration enthusiasts.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770703929/Classic-Car-Shipping._tjvf2g.jpg",
    url: "/services/classic-car-shipping",
  },
  {
    title: "Boat Shipping Services",
    description:
      "Our boat shipping service safely transports vessels of various sizes across state lines or nationwide. We coordinate permits, specialized trailers, and experienced carriers to ensure compliant marine transport. Whether relocating or purchasing, we provide insured, professional boat hauling with dependable scheduling.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770703929/Boat-Shipping-Services.jpg_qvhram.jpg",
    url: "/services/boat-shipping",
  },
  {
    title: "College Students Car Transport",
    description:
      "College student car shipping makes campus moves easier and safer. Whether heading to school out of state or returning home for break, we provide affordable, insured vehicle transport nationwide. Parents and students trust our reliable scheduling, transparent pricing, and door-to-door service.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770703929/College-Students-Car-Transport._iepn9r.jpg",
    url: "/college-student-car-shipping",
  },
  {
    title: "International Car Shipping",
    description:
      "Our international car shipping service handles overseas vehicle transport with expertise and compliance. We coordinate ocean freight, customs documentation, and secure handling for smooth global delivery. Fully licensed and experienced, we provide trusted international auto transport solutions from the USA to destinations worldwide.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770716045/International-Car-Shipping.jpg_ab6jxc.jpg",
    url: "/services/international-car-shipping",
  },
  {
    title: "Family Relocation Services",
    description:
      "Relocating your family? Our family auto transport service simplifies moving by safely shipping your vehicles nationwide. We coordinate pickup and delivery to match your relocation schedule, reducing stress and travel costs. Licensed, insured, and reliable, we make family car shipping seamless and efficient.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770716045/Family-Relocation-Services.jpg_wvi0fw.jpg",
    url: "https://rapidautoshipping.com/relocating-families-car-shipping-services",
  },
  {
    title: "Transportation Cars for Dealerships",
    description:
      "We provide dependable vehicle transport solutions for car dealerships nationwide. Whether moving inventory between locations or delivering to customers, our licensed and insured carriers ensure timely, damage-free delivery. Dealerships rely on our scalable, professional auto transport services to keep operations running smoothly.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770716045/Transportation-Cars-for-Dealerships.jpg_epkdnb.jpg",
    url: "/services/transporting-cars-for-dealerships",
  },
];

export default ShippingOptions_2;
