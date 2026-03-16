const TenthComponent = () => {
  return (
    <>
      <section className="container mx-auto my-10 py-10 px-4 ">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Things to consider while shipping a car
        </h2>

        <p className="text-center text-lg text-gray-600 mb-8  mx-auto container">
          Shipping a car to or from California can be complex, but proper
          planning ensures a smooth experience. Here are key considerations on
          auto transport in {data?.state_name}:
        </p>
        <div className="flex flex-col lg:flex-row mx-auto justify-center items-center">
          <div className="flex flex-1 flex-col items-center p-6 bg-white  w-full lg:w-72  ">
            <div className="relative grayscale hover:filter-none flex items-center justify-center w-44 h-44  text-white">
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 ">
                <img
                  src="/images/step-1.webp"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <button className="px-4 py-2 w-[100%] my-2 bg-gray-300 rounded-lg text-lg font-semibold shadow-md">
              Step 1
            </button>
            <h3 className="text-xl font-semibold text-rapidcolor text-center">
              Choosing the Right Service
            </h3>
            <p className="text-center text-gray-600 text-sm">
              Based on your vehicle’s value and needs, decide between open and
              enclosed transport. Consider Enclosed carriers for classic,
              luxury, or cars that require extra care through transportation.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center p-6 bg-white  w-full lg:w-72  ">
            <div className="relative grayscale hover:filter-none flex items-center justify-center w-44 h-44  text-white">
              <div className="absolute -top-2 -right-2 rounded-full p-1">
                <img
                  src="/images/step-2.webp "
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <button className="px-4 py-2  my-2 w-[100%] bg-gray-300 rounded-lg text-lg font-semibold shadow-md">
              Step 2
            </button>
            <h3 className="text-xl font-semibold text-rapidcolor text-center">
              Choosing the Right Service
            </h3>
            <p className="text-center text-gray-600 text-sm">
              Based on your vehicle’s value and needs, decide between open and
              enclosed transport. Consider Enclosed carriers for classic,
              luxury, or cars that require extra care through transportation.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center p-6 bg-white  w-full lg:w-72  ">
            <div className="relative grayscale hover:filter-none flex items-center justify-center w-44 h-44  text-white">
              <div className="absolute -top-2 -right-2   p-1">
                <img
                  src="/images/step-3.webp"
                  className="w-full h-full object-cover  "
                />
              </div>
            </div>
            <button className="px-4 py-2 my-2 w-[100%] bg-gray-300 rounded-lg text-lg font-semibold shadow-md">
              Step 3
            </button>
            <h3 className="text-xl font-semibold text-rapidcolor text-center">
              Seasonal Factors
            </h3>
            <p className="text-center text-gray-600 text-sm">
              Based on your vehicle’s value and needs, decide between open and
              enclosed transport. Consider Enclosed carriers for classic,
              luxury, or cars that require extra care through transportation.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center p-6 bg-white  w-full lg:w-72  ">
            {/* Image Container - Positioned Correctly */}
            <div className="relative flex  grayscale hover:filter-none items-center justify-center w-36 h-36 mb-4">
              <img
                src="/images/step-4.webp"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Button - No Overlapping */}
            <button className="px-4 py-2 my-2 w-full bg-gray-300 rounded-lg text-lg font-semibold shadow-md">
              Step 4
            </button>

            {/* Title */}
            <h3 className="text-xl font-semibold text-rapidcolor text-center">
              Vehicle Preparation
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-sm">
              Based on your vehicle’s value and needs, decide between open and
              enclosed transport. Consider enclosed carriers for classic,
              luxury, or cars that require extra care during transportation.
            </p>
          </div>

          <div className="flex flex-1 flex-col items-center p-6 bg-white  w-full lg:w-72  ">
            <div className="relative grayscale hover:filter-none flex items-center justify-center w-44 h-44  text-white">
              <div className="absolute -top-2 -right-2 bg-white  p-1 ">
                <img
                  src="/images/step-5.webp"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <button className="px-4 py-2 my-2 w-[100%] bg-gray-300 rounded-lg text-lg font-semibold shadow-md">
              Step 5
            </button>
            <h3 className="text-xl font-semibold text-rapidcolor text-center">
              Choosing the Right Service
            </h3>
            <p className="text-center text-gray-600 text-sm">
              Based on your vehicle’s value and needs, decide between open and
              enclosed transport. Consider Enclosed carriers for classic,
              luxury, or cars that require extra care through transportation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TenthComponent;
