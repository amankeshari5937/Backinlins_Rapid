import Image from "next/image";
import { useState } from "react";

export default function AutoShippingServices() {
  const services = [
    {
      title: "Door-to-Door Transport",
      description:
        "Our door-to-door transport picks up your vehicle from your specified location and delivers it to a place of your choice.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745053487/Service/Door-to-Door-Transport.webp",
      alt: "Vehicle being picked up for door-to-door auto transport",
      link: "/services/door-to-door-auto-transport",
    },
    {
      title: "Open Transport",
      description:
        "Most affordable, popular, and cost-effective shipping method - open transport where vehicles are shipped on open trailers exposed to the elements.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745057390/Service/Open-Transport.webp",
      alt: "Cars loaded on an open trailer for transport",
      link: "/open-auto-transport",
    },
    {
      title: "Enclosed Transport",
      description:
        "For premium protection of luxury, exotic, or high-value cars, enclosed transport keeps your vehicle safe from weather, debris, and prying eyes.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745057934/Service/Enclosed-Transport.webp",
      alt: "Luxury car inside an enclosed transport trailer",
      link: "/enclosed-car-transport",
    },
    {
      title: "Across the Country",
      description:
        "From California to New York, Texas to Oregon, our nationwide carriers ensure seamless transportation with precision and punctuality.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745058048/Service/Across-the-Country.webp",
      alt: "Vehicle transport truck on a highway for cross-country shipping",
      link: "/services/ship-car-across-the-country",
    },
    {
      title: "Terminal to Terminal Auto Transport",
      description:
        "Our Terminal to terminal auto transport facilitates delivery and pick up of your vehicle at designated locations, offering a budget-friendly vehicle shipping option.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745071401/Service/Terminal-to-Terminal.webp",
      alt: "Vehicle at a terminal for terminal-to-terminal transport",
      link: "/blogs/terminal-to-terminal-auto-transport",
    },
    {
      title: "Motorcycle and ATVs",
      description:
        "Our motorcycle and ATV shipping service uses specialized equipment to secure it, ensuring it arrives ready to ride—safe, secure, and hassle-free.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745058240/Service/Motorcycle-and-ATVs.webp",
      alt: "Motorcycle secured on a transport trailer",
      link: "/motorcycle-shipping",
    },
    {
      title: "Heavy Machinery",
      description:
        "Our heavy machinery transport involves shipping oversized loads like construction equipment, tractors, or industrial gear using specialized carriers.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745058380/Service/Heavy-Machinery.webp",
      alt: "Construction equipment being transported on a flatbed trailer",
      link: "/services/heavy-equipment-shipping",
    },
    {
      title: "RV, Motorhome & Trailers",
      description:
        "We specialize in transporting RVs, motorhomes, trailers, campers, buses, and ambulances with specialized equipment and care.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745408587/Service/RV-Motorhome-Trailers.webp",
      alt: "RV being transported on a specialized trailer",
      link: "/services/rv-transport",
    },
    {
      title: "Boat & Yacht",
      description:
        "Trust us to deliver your boat and yacht securely—big or small—across land to ports or marinas for worry-free sailing.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745058684/Service/Boat-and-yacht.webp",
      alt: "Yacht being transported to a marina",
      link: "/blogs/boat-shipping-cost-calculator",
    },
    {
      title: "Vintage and Classic Cars",
      description:
        "Our enclosed shipping for vintage and classic cars shields your restored beauty or rare classic from the elements.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745058818/Service/Vintage-and-Classic-Cars.webp",
      alt: "Classic car in an enclosed transport trailer",
      link: "/services/classic-car-shipping",
    },
    {
      title: "Snowbird",
      description:
        "Snowbird car shipping service caters to those heading south for winter or north for summer, offering dependable transportation between states.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745059352/Service/snowbird.webp",
      alt: "Car being shipped for snowbird seasonal transport",
      link: "/snowbird-car-transport-service",
    },
    {
      title: "Rental Cars",
      description:
        "Our rental car shipping service handles logistics for rental companies or individuals, ensuring safe and timely delivery.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745059495/Service/Rental-Cars.webp",
      alt: "Rental car being transported for delivery",
      link: "/rental-car-auto-transport-service",
    },
    {
      title: "Driveaway Services",
      description:
        "We provide professional drivers to transport your vehicle from one location to another, rather than shipping it on a truck or trailer.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745059703/Service/Driveaway-Services.webp",
      alt: "Professional driver transporting a vehicle",
      link: "/what-is-driveaway-service",
    },
    {
      title: "Towing",
      description:
        "Our towing service offers short-distance solutions for vehicles during breakdown, getting you back on track quickly and affordably.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745059888/Service/Towing.webp",
      alt: "Tow truck transporting a vehicle",
      link: "/long-distance-towing-service",
    },
    {
      title: "Non-Running",
      description:
        "Specialized equipment and handling to transport vehicles that cannot be driven due to mechanical issues or damage.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745060277/Service/Non-Running.webp",
      alt: "Non-running vehicle being loaded for transport",
      link: "/non-running-vehicle-transport",
    },
    {
      title: "College Student Car Shipping",
      description:
        "Makes it easy for students to bring their vehicles to school or back home, with affordable rates designed for students.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745060504/Service/College-Student-Car-Shipping.webp",
      alt: "Student’s car being shipped to college",
      link: "/college-student-car-shipping",
    },
    {
      title: "Military",
      description:
        "Proud to serve our armed forces with car shipping that offers discounted rates for PCS moves, deployments, or relocations.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745060651/Service/Military.webp",
      alt: "Military vehicle being shipped for relocation",
      link: "/military-auto-shipping",
    },
    {
      title: "Exotic Car",
      description:
        "Unmatched care for high-performance or rare vehicles, ensuring your standout ride arrives in perfect shape.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745060879/Service/Exotic-Car-Shipping.webp",
      alt: "Exotic car in an enclosed transport trailer",
      link: "/exotic-car-transport",
    },
    {
      title: "Auction",
      description:
        "Buying and selling cars at auction becomes easy with our transport service, picking up your purchase or delivering your sale.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745061116/Service/Auction-Auto-Transport.webp",
      alt: "Car being transported from an auction",
      link: "/services/auto-auction-shipping",
    },
    {
      title: "Dealership",
      description:
        "Moves inventory between locations, to customers, or from auctions, keeping your business rolling with efficient options.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745061222/Service/Dealership-auto-transport.webp",
      alt: "Cars being transported for a dealership",
      link: "/services/transporting-cars-for-dealerships",
    },
    {
      title: "International",
      description:
        "Making global moves effortlessly. Our international car shipping service takes your vehicle worldwide, managing customs and delivery.",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745061356/Service/International-auto-transport.webp",
      alt: "Vehicle being prepared for international shipping",
      link: "/services/international-car-shipping",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container px-2 md:px-10 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Comprehensive Auto Shipping Services
          </h2>
          <div className="w-28 h-[4px] bg-rapidcolor mx-auto mb-2"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored solutions for every vehicle transport need, from everyday
            cars to specialized equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="block bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div className="relative">
               <Image
  src={`${service.image}?w=400&h=300&ar=4:3&c=fill&q=auto&f=auto`}
  alt={service.alt}
  className="w-full h-48 object-cover"
  loading="lazy"
  width={400}
  height={300}
  sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 600px"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <div className="inline-block">
                      <h3 className="text-white text-2xl font-semibold">
                        {service.title}
                      </h3>
                      <div className="w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-grow">
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}