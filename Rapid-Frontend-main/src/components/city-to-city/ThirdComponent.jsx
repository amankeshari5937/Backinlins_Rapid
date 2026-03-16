import Image from "next/image";
import { FaCheckDouble } from "react-icons/fa";

const AutoShippingBanner = ({ data }) => {
  return (
    <div className="bg-gray-100 p-3 sm:p-6 rounded-xl mt-12 sm:mt-20">
      <div className="bg-gray-100 w-full h-auto rounded-3xl mx-auto py-4 sm:py-8">
        <h2
          className="text-xl Echo md:text-3xl lg:text-5xl font-semibold text-black text-center mb-4 sm:mb-6 px-2"
          dangerouslySetInnerHTML={{
            __html: `Why ${data?.from} to ${data?.to} <span className="text-rapidcolor"> Auto Shipping </span>Is The <span className="text-rapidcolor"> Best</span> Option Over Driving?`,
          }}
        />

        <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-6">
          {/* Text Content */}
          <div className="w-full sm:w-[90%] mx-auto text-center md:text-left p-2 sm:p-4">
            <p className="text-black text-center text-base sm:text-xl font-[400]">
              Driving long distances can be a road experience. But when you ship
              your car, you save yourself the time to do what you set out to do.
              Shipping saves you from fatigue and accidents due to stressful and
              tiring long drives, and is cost-effective and faster.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center bg-pink-100 px-3 sm:px-6 lg:px-12">
        {/* Left Section */}
        <div className="max-w-md order-2 md:order-1 text-center lg:text-left lg:mr-5 mb-4 lg:mb-0 w-full px-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <FaCheckDouble color="green" />
            Save Time for What Matters Most
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Driving can be fun, but not always, especially when driving a long
            distance. Long-distance driving consumes a lot of time, and you miss
            out on doing essential tasks.
          </p>
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            Shipping Advantage:
          </h3>
          <p className="mt-2 text-gray-700 text-justify text-sm sm:text-base">
            When you ship your car with a professional auto shipping company
            like Rapid Auto Shipping, you choose peace of mind and save yourself
            valuable time to focus on the tasks that need attention.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative order-1 md:order-2 max-w-full sm:max-w-md mb-4 lg:mb-0 px-2">
          <Image
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_748,h_556,c_fill/v1742475017/city-to-city/Save-Time-for-What-Matters-Most.webp"
            alt="Save Time for What Matters Most – Efficient City-to-City Auto Transport Services"
            className="rounded-lg shadow-lg w-full"
            width={748} 
            height={556} 
          />
        </div>

        {/* Right Section */}
        <div className="max-w-md order-3 md:order-3 text-center lg:text-left lg:ml-5 w-full px-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <FaCheckDouble color="green" />
            Save Your Ride from Wear and Tear
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Long road trips can also be equally taxing for your car! It can go
            through a lot of wear and tear and may even require repair, making
            your trip feel heavy on your pocket.
          </p>
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            Shipping Advantage:
          </h3>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Shipping your car saves it from wear and tear. Shipping companies,
            like Rapid Auto, deliver vehicles in the same pristine condition as
            they were picked up from your doorstep.
          </p>
        </div>
      </div>

      {/* Second row of benefits */}
      <div className="flex flex-col lg:flex-row items-center justify-center bg-pink-100 px-3 sm:px-6 lg:px-12 mt-8 sm:mt-20">
        {/* Left Section */}
        <div className="max-w-md text-center order-2 md:order-1 lg:text-left lg:mr-5 mb-4 lg:mb-0 w-full px-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <FaCheckDouble color="green" />
            Avoid Unpredictable Road Hazards
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Long-distance driving can get hazardous, especially during winter
            when snow and ice reduce road traction and visibility, increasing
            the risk of accidents, injuries, and fatalities.
          </p>
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            Shipping Advantage:
          </h3>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Auto transport of your car is a good choice to save yourself and the
            vehicle from unpredictable road hazards during winter, reducing the
            risk of injuries, accidents, and fatalities.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative max-w-full order-1 md:order-2 sm:max-w-md mb-4 lg:mb-0 px-2">
          <Image
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_748,h_556,c_fill/v1742475017/city-to-city/Avoid-Unpredictable-Road-Hazards.webp"
            alt="Avoid Unpredictable Road Hazards – Safe and Reliable Auto Transport Services"
            className="rounded-lg shadow-lg w-full"
            width={448} // Adjust based on actual image size or design
            height={256} // Adjust based on actual image size or design
          />
        </div>

        {/* Right Section */}
        <div className="max-w-md text-center order-3 md:order-3 lg:text-left lg:ml-5 w-full px-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <FaCheckDouble color="green" />
            Cost Efficiency
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Driving long distances is certainly not cost-efficient. You must pay
            for gas, tolls, maintenance issues during the drive, and other
            expenses. All this makes driving pocket-heavy.
          </p>
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            Shipping Advantage:
          </h3>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Shipping your car is cost-effective and pocket-friendly; it saves on
            gas, tolls, maintenance during the drive, and several other
            miscellaneous expenses to make you laugh all the way to the bank.
          </p>
        </div>
      </div>

      {/* Third row of benefits */}
      <div className="flex flex-col lg:flex-row items-center justify-center bg-pink-100 px-3 sm:px-6 lg:px-12 mt-8 sm:mt-20 pb-4">
        {/* Left Section */}
        <div className="max-w-md text-center order-2 md:order-1 lg:text-left lg:mr-5 mb-4 lg:mb-0 w-full px-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <FaCheckDouble color="green" />
            Reduced Stress and Fatigue
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Stress and fatigue are a big issue in long-distance or city-to-city
            driving. Long hours behind the wheel take a heavy toll on the body
            and may be the cause of accidents.
          </p>
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            Shipping Advantage:
          </h3>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Shipping your car protects you from the arduous journey and long
            hours behind the wheel. This helps you avoid fatigue, road
            incidents, and accidents, making you cheerful and happy.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative max-w-full order-1 md:order-2 sm:max-w-md mb-4 lg:mb-0 px-2">
          <Image
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_748,h_556,c_fill/v1742475018/city-to-city/Reduced-Stress-and-Fatigue.webp"
            alt="Reduced Stress and Fatigue – Convenient City-to-City Car Shipping Solutions"
            className="rounded-lg shadow-lg w-full"
            width={448} // Adjust based on actual image size or design
            height={256} // Adjust based on actual image size or design
          />
        </div>

        {/* Right Section */}
        <div className="max-w-md text-center order-3 md:order-3 lg:text-left lg:ml-5 w-full px-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <FaCheckDouble color="green" />
            Eco-Friendly Option
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Driving a car long distances can never be eco-friendly. More cars on
            the road mean more carbon emissions and more fuel consumption. It
            also leads to roads getting more congested.
          </p>
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            Shipping Advantage:
          </h3>
          <p className="mt-3 sm:mt-4 text-gray-700 text-justify text-sm sm:text-base">
            Shipping a car is a more eco-friendly option as auto shipping
            companies ship multiple vehicles together, which can lower the
            per-car carbon emissions. Shipping can also conserve fuel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutoShippingBanner;