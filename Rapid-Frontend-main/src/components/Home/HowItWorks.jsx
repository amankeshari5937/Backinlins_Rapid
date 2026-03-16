import Image from 'next/image';
import React from "react";

const RapidAutoShipping = () => {
  return (
    <div className="container mx-auto pt-10 mt-10 px-1 md:px-[1.25rem] text-center">
      <h2 className="text-black text-5xl font-bold mb-5">
        How Does<span className="text-rapidcolor">Rapid Auto Shipping </span>Make the Car Shipping Process as Easy as
        <span className="text-rapidcolor">1-2-3?</span>
      </h2>
      <div className="w-full h-[560px]">
        <div
          className="youtube-placeholder relative w-full h-full cursor-pointer"
          data-yt-url="https://www.youtube.com/embed/lXWUAMd19Ps?si=V9zBkaVjVZEoVP4X"
        >
          <Image
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_1200,h_560,c_fill,q_auto,f_webp/v1746181124/Reviews/ship-your-car.webp"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1200}
            height={560}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-lg text-[#5a5a5a] mt-10">
        When it comes to shipping a car, questions like " whom to trust with our
        valued investment?" may arise. There are thousands of car shipping
        companies offering ordinary shipping services, but their shipping
        process is complicated. But why settle for ordinary when the best
        vehicle shipping is within reach? Rapid Auto Shipping gives the best
        auto transport experience by making its process as easy as 1-2-3
      </p>
      {/* Step 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-center bg-transparent">
        <div className="flex-1 flex justify-center">
          <div className="relative w-full h-full rounded-lg">
            <Image
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747470822/rapid-home/get-a-quote-book-your-order.webp"
              alt="Get a Quote and Book Your Car Shipping Order with Rapid Auto Shipping – Fast and Easy Process"
              className="w-full h-full object-contain"
              loading="lazy"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left space-y-6 mt-20">
          {/* Heading Section */}
          <div className="flex w-full items-center relative gap-5">
            <div className="w-[15%] h-[100%]">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_100,h_100,c_fit,q_auto,f_webp/v1742461715/icons/get-a-quote.webp"
                className="w-full h-full z-10"
                alt="Get a Quote Icon – Rapid Auto Shipping Car Transport Quote Request"
                loading="lazy"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-[#5a5a5a] text-start w-[75%] text-5xl font-semibold">
              Get a Quote & Book Your Order
            </h3>
            <span className="absolute text-[10rem] -z-10 text-gray-400 right-1 font-[800] opacity-25">
              01
            </span>
          </div>
          {/* Steps Section */}
          <div className="space-y-3">
            {/* Step 1 */}
            <div className="flex items-start">
              <p className="text-lg text-[#5a5a5a] text-start">
                You can obtain an instant car shipping quote through our online
                form, by
                calling (833) 233-4447 to speak with our friendly auto transport
                coordinator, or by filling the form online on our website
                rapidautoshipping.com. Here is what we need:
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex w-full items-start gap-5">
              <div className="w-[10%] h-20">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fit,q_auto,f_webp/v1742461715/icons/provide-the-necessary-information.webp"
                  className="w-full h-full object-contain"
                  alt="Provide Necessary Information Icon – Auto Shipping Form Submission Step"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-lg text-start w-[90%] text-[#5a5a5a]">
                <strong>Provide the Necessary Information: </strong> Provide us
                with your vehicle details like make, model, condition, and
                desired shipping method (open vehicle shipping or enclosed
                vehicle shipping). Your desired pickup date, pickup and delivery
                location, and zip code.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex w-full items-start gap-5">
              <div className="w-[10%] h-20">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fit,q_auto,f_webp/v1742461715/icons/get-a-quote-2.webp"
                  className="w-full h-full object-contain"
                  alt="Quote Confirmation Icon – Finalize Car Shipping Quote with Rapid Auto Shipping"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-lg text-start w-[90%] text-[#5a5a5a]">
                <strong>Get a Quote: </strong> After getting the information,
                one of our knowledgeable agents will be happy to put a quote
                together for you. Get a free, accurate quote tailored to your
                specific car shipping needs.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex w-full items-start gap-5">
              <div className="w-[10%] h-20">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fit,q_auto,f_webp/v1742462249/icons/necessary-information.webp"
                  className="w-full h-full object-contain"
                  alt="Required Shipping Information Icon – Input Vehicle and Transport Details"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-lg text-start w-[90%] text-[#5a5a5a]">
                <strong>Book Your Order: </strong>Once you get the quote and
                compare it with other auto shipping companies, you will surely
                find out that you get a higher level of service at a fairer
                price with us. So go ahead and book your order, we will confirm
                the services and delivery timeframe for your order.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:p-8 pb-0 pt-0 bg-white">
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Heading Section */}
          <div className="flex w-full items-center relative gap-5">
            <div className="w-[15%] h-[100%]">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_100,h_100,c_fit,q_auto,f_webp/v1742461715/icons/Pickup-%20vehicle.webp"
                className="w-full h-full z-100 mt-10 md:mt-0"
                alt="Vehicle Pickup Icon – Schedule Pickup with Rapid Auto Shipping"
                loading="lazy"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-[#5a5a5a] text-start w-[75%] text-5xl font-semibold">
              Pick Up of Vehicle
            </h3>
            <span className="absolute text-[10rem] text-gray-400 right-1 font-[800] opacity-25">
              02
            </span>
          </div>

          {/* Steps Section */}
          <div className="space-y-3">
            <div className="flex items-start">
              <p className="text-lg text-start text-[#5a5a5a]">
                On booking, we don't demand a single penny until the right
                driver for your transport has been located and your pickup is
                scheduled according to your shipping requirements and the safe
                transportation of the vehicle. Here's how it goes.
              </p>
            </div>
            <div className="flex w-full items-start gap-5">
              <div className="w-[10%] h-20">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fit,q_auto,f_webp/v1742461714/icons/Communication.webp"
                  className="w-full h-full object-contain"
                  alt="Customer Communication Icon – Stay Informed During Auto Transport Process"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-lg w-[90%] text-start text-[#5a5a5a]">
                <strong>Communication:</strong>Communication is the essence of
                our transportation process. On your set pickup date, our driver
                will contact you to schedule a pickup time and will bring the
                loading carrier at the pickup spot.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex w-full items-start gap-5">
              <div className="w-[10%] h-20">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fit,q_auto,f_webp/v1742461715/icons/Documentation-and-inspection:.webp"
                  className="w-full h-full object-contain"
                  alt="Documentation and Vehicle Inspection Icon – Pre-shipping Checklist for Auto Transport"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-lg w-[90%] text-start text-[#5a5a5a]">
                <strong>Documentation and Inspection:</strong> When your driver
                arrives at your pre-arranged pick-up location, you and he will
                carry out a detailed inspection of your car and fill out a Bill
                of Lading. This document records the exact condition of your
                vehicle at the beginning of its journey. Sign it to proceed.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex w-full items-start gap-5">
              <div className="w-[10%] h-20">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fit,q_auto,f_webp/v1742461715/icons/pickup-of-the-vehicle.webp"
                  className="w-full h-full object-contain"
                  alt="Pickup of the Vehicle Icon – Secure Vehicle Handover for Shipping"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-lg w-[90%] text-start text-[#5a5a5a]">
                <strong>Pickup of the Vehicle: </strong>Next, the driver will
                load and secure your vehicle, and the journey to transport it to
                your new location begins.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-full h-full p-3 lg:p-8 pb-0 pt-0 rounded-lg">
            <Image
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747469985/rapid-home/pick-up-of-vehicle.webp"
              alt="Professional Pickup of Vehicle for Nationwide Auto Transport by Rapid Auto Shipping"
              className="w-full h-full object-contain"
              loading="lazy"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-0 bg-white">
        <div className="flex-1 flex">
          <div className="relative w-full h-full p-3 lg:p-8 pb-0 pt-0 rounded-lg">
            <Image
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747470503/rapid-home/delivery-of-vehicle.webp"
              alt="Safe and On-Time Delivery of Vehicle by Rapid Auto Shipping Across the USA"
              className="w-full h-full object-contain mb-10 sm:mb-0"
              loading="lazy"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Heading Section */}
          <div className="flex w-full items-center relativeHands gap-5">
            <div className="w-[15%] h-[100%]">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_100,h_100,c_fit,q_auto,f_webp/v1742461715/icons/delivery-of-vehicle.webp"
                className="w-full h-full z-10"
                alt="Delivery of Vehicle Icon – Final Step in the Auto Transport Process by Rapid Auto Shipping"
                loading="lazy"
                width={100}
                height={100}
              />
            </div>

            <h3 className="text-[#5a5a5a] w-[75%] text-5xl font-semibold">
              Delivery of Vehicle
            </h3>
            <span className="absolute text-[10rem] text-gray-400 right-1 font-[800] opacity-25">
              03
            </span>
          </div>

          {/* Steps Section */}
          <div className="space-y-3">
            <div className="flex items-start">
              <p className="text-lg text-start text-[#5a5a5a]">
                The last step in the process is receiving the vehicle on its
                arrival. Here is how the delivery process goes.
              </p>
            </div>
            <div className="flex w-full items-start gap-5">
              <div className="w-[10%] h-20">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fit,q_auto,f_webp/v1742461714/icons/Communication.webp"
                  className="w-full h-full object-contain"
                  alt="Communication Icon – Constant Updates and Support During Car Shipping"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-lg text-start w-[90%] text-[#5a5a5a]">
                <strong>Communication:</strong>Your driver will call you when
                the transport is getting close to your location, ensuring that
                you are available to pick up the car.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex w-full items-start gap-5">
              <div className="w-[10%] h-20">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fit,q_auto,f_webp/v1747471607/icons/off-load-of-the-vehicle.webp"
                  className="w-full h-full object-contain"
                  alt="Off-loading Vehicle Icon – Safe Unloading at Destination by Rapid Auto Shipping"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-lg text-start w-[90%] text-[#5a5a5a]">
                <strong>Off-Load of the Vehicle: </strong>On arrival, your
                vehicle will be carefully offloaded. Now all you have to do is
                re-inspect your vehicle to confirm that we took excellent care
                of it during its transportation.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex w-full items-start gap-5">
              <div className="w-[10%] h-20">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fit,q_auto,f_webp/v1747471808/icons/Finalizing-the-delivery.webp"
                  className="w-full h-full object-contain"
                  alt="Finalizing Delivery Icon – Complete Handover and Confirmation of Vehicle Delivery"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
          
              <p className="text-lg text-start w-[90%] text-[#5a5a5a]">
                <strong>Finalizing the Delivery: </strong> The last step is to
                sign the Bill of Lading and make the final payment to the driver
                in the form of cash, money order, or a cashier's check. The
                process is complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RapidAutoShipping;