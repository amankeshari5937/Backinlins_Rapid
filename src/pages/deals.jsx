import React, { useEffect, useRef, useState } from "react";
import TransportForm from "@/components/CommonComponents/Form";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import Head from "next/head";
import Link from "next/link";

const VehicleShippingComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const fromInputRef = useRef(null);

  // Check screen size
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

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>
          Auto Shipping Discounts for Military, Students, and Seniors
        </title>
        <meta
          name="description"
          content="We provide affordable auto shipping discounts for military members, students, senior citizens, snowbirds, multiple-car shipping, and repeat customers."
        />
        <link rel="canonical" href="https://rapidautoshipping.com/deals" />
      </Head>
      <Navbar />
      <div className="bg-white py-12 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 flex items-center justify-center z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dz2zovmf1/image/upload/v1743420644/Service/Classic-luxury-car-transport.webp')`,
          }}
        >
          {/* Optional: Add content inside the div if needed */}
        </div>

        {/* Content Wrapper */}
        <div className="bg-white bg-opacity-5 rounded-xl px-2 md:px-8 md:p-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1
                className="text-4xl xl:text-5xl font-[700] text-white"
                style={{ lineHeight: 1.3 }}
              >
                Rapid Auto Shipping Discounts
              </h1>

              <div className="glass-2">
                <p className="text-white p-0  text-lg font-[600] leading-relaxed">
                  {isExpanded || !isMobile
                    ? `Rapid Auto Shipping is a trusted, customer-focused auto shipping company committed to reliable vehicle transport services. To make auto shipping more affordable, we offer a range of customer-friendly discounts as a thank-you for choosing us. These include student, military, senior citizen, snowbird, multiple-car shipping, and return customer discounts. Each option is designed to provide savings while maintaining the high-quality service our customers expect. 
`
                    : `Rapid Auto Shipping is a trusted, customer-focused auto shipping company committed to reliable vehicle transport services.`}
                  {isMobile && !isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-blue-500 font-medium"
                    >
                      Read More
                    </button>
                  )}
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
      <div className="bg-gray-50 min-h-screen">
        {/* Discounts Container */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Student Discount */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 bg-gray-200 relative">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_427,h_320,c_scale,q_auto,f_auto/v1745060504/Service/College-Student-Car-Shipping.webp"
                  alt="College Student Car Shipping – Affordable and Reliable Vehicle Transport for Students"
                  className="w-full h-full object-cover"
                  width="427"
                  height="320"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-[#ff5722] text-white px-4 py-2 rounded-tr-lg">
                  Student Discount
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Student Discount
                </h2>
                <p className="text-gray-600 mb-4">
                  Rapid Auto Shipping offers discounts or reduced rates, a
                  financial relief to college students for moving their vehicle
                  to and from college and home. Students are also eligible for
                  these discounts for driving their cars for university or
                  college-related work.
                </p>
                <p className="text-gray-600 mb-4">
                  Our auto transport student discount may be a flat discount, a
                  percentage off the total shipping cost, or a specific amount
                  off the total price. It can be a $25 or $30 off on the total
                  cost or a percentage off, i.e., 10%. We may have a special
                  offer for students. These special offers may be a promo code
                  or a "Join College" discount. Students can claim an auto
                  transport student discount by providing a copy of their
                  student ID when requesting a quote or providing it at the time
                  of booking.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link href={`/deals`} onClick={handleClick}>
                    <button className="bg-[#ff5722] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Military Discount */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 bg-gray-200 relative">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_427,h_320,c_scale,q_auto,f_auto/v1745060651/Service/Military.webp"
                  alt="Military Car Shipping – Trusted Vehicle Transport Services for Armed Forces Personnel"
                  className="w-full h-full object-cover"
                  width="427"
                  height="320"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-[#ff5722] text-white px-4 py-2 rounded-tr-lg">
                  Military Discount
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Military Discount
                </h2>
                <p className="text-gray-600 mb-4">
                  Our military discount is our way of saying "Thank you" to our
                  military members, who sacrifice to serve our nation. Military
                  member discounts help our military personnel who need to
                  relocate to a new service station due to deployment or change
                  of station. These discounts significantly reduce the cost of
                  shipping their vehicles and help them reduce their relocation
                  cost.
                </p>
                <p className="text-gray-600 mb-4">
                  We offer discounts to active duty, veteran, and retired
                  military members. A flat $50 is provided as a discount on the
                  total cost. To claim a military discount, military members
                  must mention their military status while requesting a quote or
                  when booking the shipment. It should be noted that not all
                  shipping companies offer an auto transport military discount.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link href={`/deals`} onClick={handleClick}>
                    <button className="bg-[#ff5722] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Senior Citizen Discount */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 bg-gray-200 relative">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_427,h_320,c_scale,q_auto,f_auto/v1745853663/Service/Senior-Citizen-Discount.webp"
                  alt="Senior Citizen Car Shipping Discount – Affordable Auto Transport for Seniors"
                  className="w-full h-full object-cover"
                  width="427"
                  height="320"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-[#ff5722] text-white px-4 py-2 rounded-tr-lg">
                  Senior Citizen Discount
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Senior Citizen Discount
                </h2>
                <p className="text-gray-600 mb-4">
                  Senior citizen discount auto shipping is our way of
                  understanding the distinct needs and challenges faced by the
                  elderly members of our society. Those over the age of 60 years
                  can claim our senior citizen auto shipping discount for
                  shipping their car with us. This discount helps elderly people
                  make our affordable car shipping even more affordable.
                </p>
                <p className="text-gray-600 mb-4">
                  At Rapid Auto Shipping, we offer a flat $ 25 discount on the
                  total cost of shipping a car to senior citizens. Not all
                  shipping companies are honest with their discounting process.
                  To avail of this discount, senior citizens must provide proof
                  of their age. They can submit their driving licence or any
                  other ID as proof of their age when requesting the quote or
                  when booking.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link href={`/deals`} onClick={handleClick}>
                    <button className="bg-[#ff5722] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Snowbird Discount */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 bg-gray-200 relative">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_427,h_320,c_scale,q_auto,f_auto/v1745059352/Service/snowbird.webp"
                  alt="Snowbird Auto Transport – Seasonal Car Shipping for Winter Travelers"
                  className="w-full h-full object-cover"
                  width="427"
                  height="320"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-[#ff5722] text-white px-4 py-2 rounded-tr-lg">
                  Snowbird Discount
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Snowbird Discount
                </h2>
                <p className="text-gray-600 mb-4">
                  Retirees or others who move to a warmer climate to the south
                  of the country during the winter to avoid the harsh northern
                  winter are called snowbirds. These people need to move their
                  car to their winter home. Our snowbird deals are for these
                  people to help them in their migration. This discount eases
                  the high transportation costs during these times, as many
                  people relocate during the winter, leading to higher demand
                  and prices.
                </p>
                <p className="text-gray-600 mb-4">
                  At Rapid Auto Shipping, our snowbirds discount is based on the
                  type of transportation service the snowbirds avail themselves
                  of. It is advised to enquire about the discount amount at the
                  time of the inquiry or booking. You must also explicitly
                  mention that you are a snowbird.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link href={`/deals`} onClick={handleClick}>
                    <button className="bg-[#ff5722] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Multiple Car Discount */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 bg-gray-200 relative">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_427,h_320,c_scale,q_auto,f_auto/v1745058144/Service/Across-the-Country.webp"
                  alt="Cross-Country Auto Transport – Reliable Vehicle Shipping Across the USA"
                  className="w-full h-full object-cover"
                  width="427"
                  height="320"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-[#ff5722] text-white px-4 py-2 rounded-tr-lg">
                  Multiple Car Discount
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Multiple Car Discount
                </h2>
                <p className="text-gray-600 mb-4">
                  Our multiple car shipping discount offers a reduced
                  transportation rate to customers who ship more than one car
                  from the same pickup point on the same truck and to the same
                  destination. When you ship multiple vehicles, we can
                  consolidate the transport into a single trip, reducing our
                  costs and potentially leading to savings that we pass on to
                  you as a discount. This discount incentivises our customers to
                  ship multiple vehicles simultaneously.
                </p>
                <p className="text-gray-600 mb-4">
                  Our multiple-car discount helps our customer in reducing their
                  per-car shipping cost. So, to avail of this multiple car
                  discount, the shipment should be a multiple car shipment, and
                  the origin and the destination should also be the same.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link href={`/deals`} onClick={handleClick}>
                    <button className="bg-[#ff5722] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Return Customer Discount */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 bg-gray-200 relative">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_427,h_320,c_scale,q_auto,f_auto/v1745853737/Service/Return-Customer-Discount.webp"
                  alt="Return Customer Discount – Exclusive Savings on Repeat Auto Transport Services"
                  className="w-full h-full object-cover"
                  width="427"
                  height="320"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-[#ff5722] text-white px-4 py-2 rounded-tr-lg">
                  Return Customer Discount
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Return Customer Discount
                </h2>
                <p className="text-gray-600 mb-4">
                  Return customer discount is our way of saying "thank you" and
                  incentivising our customers for the loyalty shown by them. For
                  those customers who repeat their shipping order with us, we
                  return the favour by offering them our return customer
                  discount. We respect your loyalty and value it.
                </p>
                <p className="text-gray-600 mb-4">
                  At Rapid Auto Shipping, we offer a flat $50 discount to our
                  customers as a return customer discount. To avail this
                  discount, our customer need to provide us with their order
                  number from a previous shipment as proof to avail the discount
                  on their next shipment.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link href={`/deals`} onClick={handleClick}>
                    <button className="bg-[#ff5722] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#ff5722]">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Conclusion
            </h2>
            <p className="text-gray-600 text-lg">
              Rapid Auto Shipping discounts on vehicle shipping significantly
              reduce the transport cost. Our shipping costs are the most
              competitive in the auto industry. Still, despite that, we offer
              various discounts to our customers as a token of appreciation and
              to understand their needs for a discount. Our discounts are our
              commitment to serve our customers and maximize savings for them,
              without compromising on our shipping quality.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href={`/deals`} onClick={handleClick}>
                <button className="bg-[#ff5722] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                  Request A Quote Today
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
      </div>
      <Footer />
    </>
  );
};

export default VehicleShippingComponent;
