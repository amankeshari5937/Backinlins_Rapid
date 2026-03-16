import Image from "next/image";
import React from "react";


const TwoPartSection = () => {
    return (
        <>
            <div className="container  mx-auto relative py-10 my-10">
                {/* Heading */}
                <h2 className="text-[#343633] md:absolute md:top-10 text-center text-5xl font-bold ml-5 ">
                    How Is Auto Shipping Cost Calculated?
                </h2>
                <span className="text-[#e4e4e4] text-7xl ml-1  hidden md:block  font-[700]">
                    Cost Calculation
                </span>

                <div className="md:px-5">
                    {/* First Section */}
                    <div className="py-10">
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Left Side (70%) */}
                            <div className="group relative w-full sm:w-[70%] shadow-md overflow-hidden">
                                {/* Image */}
                                
<Image
  src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742458223/rapid-home/container-truck.webp"
  alt="Enclosed Container Truck for Secure Auto Transport by Rapid Auto Shipping"
  className="w-full h-[300px] sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
  loading="lazy"
  width={1200}
  height={300}
/>
                                {/* Background overlay with hover effect */}
                                <div className="absolute inset-0 bg-transparent transition-all duration-500 group-hover:bg-black group-hover:bg-opacity-30">
                                    <div className="absolute bottom-0 left-0 right-0 inset-0 flex flex-col items-start justify-end p-4 transition-all duration-500 group-hover:translate-y-[-50px]">
                                        <h3 className="text-white text-3xl font-[500] group-hover:translate-y-[-10px] transition-all duration-500">
                                            Weight & Size
                                        </h3>
                                        <span className="text-xl text-white mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-[-10px] transition-all duration-500">
                                            Bigger and heavier vehicles are expensive to transport as they require more space on the transport truck and need more fuel during shipping.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Right Side (30%) */}


                            <div className="group relative w-full sm:w-[30%] bg-green-200 shadow-md overflow-hidden">
                                {/* Image with scale effect on hover */}
                             <Image
  src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742458223/rapid-home/distance.webp"
  alt="Long Distance Auto Transport Services Across the USA by Rapid Auto Shipping"
  className="w-full h-[300px] sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
  loading="lazy"
  width={1200}
  height={300}
/>

                                {/* Overlay with background fade and content move on hover */}
                                <div className="absolute inset-0 bg-transparent transition-all duration-500 group-hover:bg-black group-hover:bg-opacity-30">
                                    <div className="absolute bottom-0 left-0 right-0 inset-0 flex flex-col items-start justify-end p-4 transition-all duration-500 group-hover:translate-y-[-50px]">
                                        <h3 className="text-white text-3xl font-[500] group-hover:translate-y-[-10px] transition-all duration-500">
                                            Distance
                                        </h3>
                                        <span className="text-xl text-white mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-[-10px] transition-all duration-500">
                                            The distance between pickup and dropoff determines the cost of transportation; the further the distance, the higher the shipping cost.

                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="group relative w-full  shadow-md overflow-hidden">
                        
<Image
  src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_90/v1742458223/rapid-home/type-of-trailer.webp"
  alt="Different Types of Auto Transport Trailers Used by Rapid Auto Shipping"
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  loading="lazy"
  width={1200}
  height={800}
/>
                        {/* Overlay with background fade and content move on hover */}
                        <div className="absolute inset-0 bg-transparent transition-all duration-500 group-hover:bg-black group-hover:bg-opacity-30">
                            <div className="absolute bottom-0 left-0 right-0 inset-0 flex flex-col items-start justify-end p-4 transition-all duration-500 group-hover:translate-y-[-50px]">
                                <h3 className="text-white text-3xl font-[500] group-hover:translate-y-[-10px] transition-all duration-500">Type of Trailer</h3>
                                <span className="text-xl text-white mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-[-10px] transition-all duration-500">
                                    Open car transport is cheaper than Covered car transport since open trailers can transport more cars at a time and are easily available than an enclosed trailer.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Third Section */}
                    <div className="py-10">
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Left Side (45%) */}
                            <div className="relative sm:w-[45%] w-full group  shadow-md overflow-hidden">
                                <Image
  src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742458224/rapid-home/Seasonal-routes.webp"
  alt="Seasonal Auto Transport Routes Across the USA by Rapid Auto Shipping"
  className="w-full h-[300px] sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
  loading="lazy"
  width={1200}
  height={300}
/>
                                <div className="absolute inset-0 bg-transparent transition-all duration-500 group-hover:bg-black group-hover:bg-opacity-30">
                                    <div className="absolute bottom-0 left-0 right-0 inset-0 flex flex-col items-start justify-end p-4 transition-all duration-500 group-hover:translate-y-[-50px]">
                                        <h3 className="text-white text-3xl font-[500] group-hover:translate-y-[-10px] transition-all duration-500">Seasonal & Routes</h3>
                                        <span className="text-xl text-white mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-[-10px] transition-all duration-500">
                                            Shipping costs for peak season and busier routes are higher compared to off-season and quieter routes.

                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side (55%) */}
                            <div className="relative sm:w-[55%] w-full group  overflow-hidden shadow-md">
                               <Image
  src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_90,h_300,c_fill/v1742458223/rapid-home/fast-delivery.webp"
  alt="Fast and Reliable Car Delivery Service by Rapid Auto Shipping"
  className="w-full h-[300px] sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
  loading="lazy"
  width={1200}
  height={300}
/>
                                <div className="absolute inset-0 bg-transparent transition-all duration-500 group-hover:bg-black group-hover:bg-opacity-30">
                                    <div className="absolute bottom-0 left-0 right-0 inset-0 flex flex-col items-start justify-end p-4 transition-all duration-500 group-hover:translate-y-[-50px]">
                                        <h3 className="text-white text-3xl font-[500] group-hover:translate-y-[-10px] transition-all duration-500">Expedited Shipping</h3>
                                        <span className="text-xl text-white mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-[-10px] transition-all duration-500">
                                            Expedited shipping is a premium service where pickup and dropoff are given preference over other shipments.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fourth Section */}
                    {/* <div className="relative group overflow-hidden  flex w-full">
                        <img
                            src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742458222/rapid-home/Longer-routes.webp"
                            className="w-full h-[300px] sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-transparent transition-all duration-500 group-hover:bg-black group-hover:bg-opacity-30">
                            <div className="absolute bottom-0 left-0 right-0 inset-0 flex flex-col items-start justify-end p-4 transition-all duration-500 group-hover:translate-y-[-50px]">
                                <h4 className="text-white text-3xl font-[500] group-hover:translate-y-[-10px] transition-all duration-500">Distance</h4>
                                <span className="text-xl text-white mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-[-10px] transition-all duration-500">Longer routes cost more.</span>
                            </div>
                        </div>
                    </div> */}
                </div >
            </div >
        </>
    );
};

export default TwoPartSection;
