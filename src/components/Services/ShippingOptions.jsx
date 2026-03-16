import React from "react";

const ShippingOptions = () => {
  const handleMoreInfoClick = (url) => {
    window.location.href = url; // Redirects to the specified URL
  };

  return (
    <div className="h-auto container mx-auto mt-10 mb-10 bg-[#fff4f4] flex flex-col items-center px-2 md:px-4 py-1 gap-4">
      {/* Shipping Options */}
      {shippingData.map((option, index) => (
        <div
          key={index}
          className={`w-full flex flex-col ${
            index % 2 !== 0 ? "md:flex-row flex-col-reverse" : "md:flex-row"
          } rounded-lg overflow-hidden h-auto md:h-[350px]`}
        >
          {index % 2 === 0 ? (
            <>
              <div className="w-full md:w-[50%] h-full">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-[50%] md:p-4 flex flex-col justify-center h-full">
                <h2 className="text-3xl font-semibold text-rapidcolor">
                  {option.title}
                </h2>
                <p className="text-gray-700 mt-2 text-xl">
                  {option.description}
                </p>
                <button
                  onClick={() => handleMoreInfoClick(option.url)}
                  className="md:w-[30%] mt-6 py-2 border border-rapidcolor text-rapidcolor hover:bg-rapidcolor hover:text-white transition"
                >
                  More Info →
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-[50%] md:p-4 flex flex-col justify-center h-full">
                <h2 className="text-3xl font-semibold text-rapidcolor">
                  {option.title}
                </h2>
                <p className="text-gray-700 mt-2 text-xl">
                  {option.description}
                </p>
                <button
                  onClick={() => handleMoreInfoClick(option.url)}
                  className="md:w-[30%] mt-6 py-2 border border-rapidcolor text-rapidcolor hover:bg-rapidcolor hover:text-white transition"
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
    title: "Open Transport Car Shipping",
    description:
      "Our open auto transport service is the most popular and cost-effective way to ship a car anywhere in the USA. Vehicles are safely secured on multi-car carriers, ideal for daily drivers, SUVs, and trucks. Fully licensed and insured, we provide reliable nationwide car shipping with real-time updates and professional support.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770718232/Open-Transport-Car-Shipping.jpg_cey1kk.jpg",
    url: "/open-auto-transport",
  },
  {
    title: "Enclosed Auto Transport",
    description:
      "Enclosed car transport offers maximum protection for luxury, exotic, classic, and high-value vehicles. Your car is shielded from weather, road debris, and external elements inside a fully covered trailer. Our experienced, insured carriers deliver secure, white-glove auto transport services trusted by collectors and dealerships nationwide.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770718233/Enclosed-Auto-Transport.jpg_u00vpd.jpg",
    url: "/enclosed-car-transport",
  },
  {
    title: "Door To Door Auto Transport",
    description:
      "Door-to-door auto transport provides ultimate convenience by picking up and delivering your vehicle as close to your specified locations as safely as possible. No terminals, no hassle. Our licensed drivers handle nationwide car shipping with precision, offering insured transport, flexible scheduling, and clear communication from pickup to delivery.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770718234/Door-To-Door-Auto-Transport.jpg_dyvpyq.jpg",
    url: "/services/door-to-door-auto-transport",
  },
  {
    title: "Expedited Auto Transport",
    description:
      "Need to ship a car fast? Our expedited auto transport service prioritizes your shipment for quicker pickup and delivery. Ideal for urgent relocations, job moves, or last-minute vehicle purchases. We coordinate with top-rated carriers to ensure safe, insured, and reliable express car shipping across the United States.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770804792/Expedited-Auto-Transport.jpg_eqkzki.jpg",
    url: "/",
  },
  {
    title: "Ship Car to Another State",
    description:
      "Shipping a car to another state is simple with our trusted interstate auto transport services. We handle logistics, compliance, and route planning to ensure smooth, insured delivery. Whether relocating, buying, or selling, our experienced team provides dependable state-to-state car shipping nationwide at competitive rates.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770804791/Ship-Car-to-Another-State.jpg_ss6zpq.jpg",
    url: "/services/ship-car-to-another-state",
  },
  {
    title: "Ship Car Across the Country",
    description:
      "Our cross-country car shipping service makes coast-to-coast vehicle transport stress-free and affordable. We coordinate long-distance auto transport with licensed, insured carriers and optimized routes for timely delivery. Ideal for relocations, military moves, and online car purchases anywhere in the continental United States.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770804791/Ship-Car-Across-the-Country.jpg_qrb5fw.jpg",
    url: "/services/ship-car-across-the-country",
  },
  {
    title: "Heavy Equipment Shipping",
    description:
      "We specialize in heavy equipment shipping for construction, agricultural, and industrial machinery. From forklifts to excavators, our experienced logistics team arranges safe, compliant transport using specialized trailers. Fully insured and professionally managed, we deliver oversized equipment efficiently across local and nationwide routes.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770804792/Heavy-Equipment-Shipping.jpg_gnddmu.jpg",
    url: "/services/heavy-equipment-shipping",
  },
  {
    title: "Motorcycle Shipping",
    description:
      "Our motorcycle shipping service ensures safe, secure transport for cruisers, sport bikes, touring motorcycles, and custom builds. Bikes are carefully strapped, crated when needed, and handled by trained professionals. We provide insured, door-to-door motorcycle transport across the USA with reliable scheduling and competitive pricing.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770804791/Motorcycle-Shipping._aerzoj.jpg",
    url: "https://rapidautoshipping.com/motorcycle-shipping",
  },
  {
    title: "Lowboy Trucking",
    description:
      "Lowboy trucking is ideal for transporting oversized and heavy machinery that exceeds standard height limits. Our lowboy hauling solutions accommodate construction equipment, industrial vehicles, and large loads safely and legally. We coordinate permits, routing, and insured transport to ensure smooth nationwide delivery.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770804791/Lowboy-Trucking.jpg_go5gbn.jpg",
    url: "/services/lowboy-shipping",
  },
];

export default ShippingOptions;
