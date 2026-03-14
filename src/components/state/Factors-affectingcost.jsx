export default function ShipmentFactors_state({ data }) {
  return (
    <div className="relative px-4 sm:px-6  py-20  ">
      {/* Background Image with Gray Shade */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40 bg-gray-200"></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col items-center space-y-6 sm:space-y-8 text-center max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold text-black">
          How Much Does {data?.state_name} Auto Transport Cost ?
        </h2>
        <p className="text-base sm:text-xl text-gray-600">
          The cost to transport a car to and from {data?.state_name} varies
          depending on factors such as distance, vehicle type, shipping method,
          and market conditions. For a standard open transport, expect to pay
          $0.45 to $0.85, while enclosed transport costs range from $0.80 to $
          1.50 or more. The following are brief descriptions of the factors that
          help to evaluate the overall shipping cost
        </p>

        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-12">
          {/* Card 1 */}
          <div className="border-2 rounded-lg p-4 w-full sm:w-64 h-auto sm:h-108 flex flex-col items-center bg-white shadow-xl drop-shadow-[6px_6px_12px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300">
            <div className="relative flex justify-center mb-4">
              {/* Soft Orange 3D Shadow */}
              <div className="absolute w-36 h-36 bg-orange-400 blur-xl opacity-40 rounded-full -z-10"></div>

              <img
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472736/city-to-city/icons/shiping-distance.webp"
                alt="Car Shipping Distance – Factors Affecting City-to-City Auto Transport Costs"
                class="w-36 h-36 object-cover transition-transform duration-300 ease-in-out drop-shadow-[3px_3px_8px_rgba(255,125,0,0.6)]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-full flex flex-col justify-center p-2 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Distance & Route:
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-lg">
                Longer distances and remote locations increase costs and transit
                time, while major highways and common routes may be faster and
                more affordable.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-2 rounded-lg p-4 w-full sm:w-64 h-auto sm:h-108 flex flex-col items-center bg-white shadow-xl drop-shadow-[6px_6px_12px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300">
            <div className="relative flex justify-center mb-4">
              {/* Soft Orange 3D Shadow */}
              <div className="absolute w-36 h-36 bg-orange-400 blur-xl opacity-40 rounded-full -z-10"></div>

              <img
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472736/city-to-city/icons/types-of-transport.webp"
                alt="Types of Auto Transport – Open and Enclosed Options for City-to-City Shipping"
                className="w-36 h-36 transition-transform duration-300 ease-in-out  drop-shadow-[3px_3px_8px_rgba(255,125,0,0.6)]"
              />
            </div>
            <div className="w-full flex flex-col justify-center p-2 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Transport Type (Open vs. Enclosed)
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-lg">
                Enclosed transport offers added protection but costs more than
                open carriers, which are more common and budget-friendly.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-2 rounded-lg p-4 w-full sm:w-64 h-auto sm:h-108 flex flex-col items-center bg-white shadow-xl drop-shadow-[6px_6px_12px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300">
            <div className="relative flex justify-center mb-4">
              {/* Soft Orange 3D Shadow */}
              <div className="absolute w-36 h-36 bg-orange-400 blur-xl opacity-40 rounded-full -z-10"></div>

              <img
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472718/city-to-city/icons/safe-transport.webp"
                alt="Safe Vehicle Transport – Reliable City-to-City Car Shipping with Insurance Coverage"
                className="w-36 h-36 transition-transform duration-300 ease-in-out  drop-shadow-[3px_3px_8px_rgba(255,125,0,0.6)]"
              />
            </div>
            <div className="w-full flex flex-col justify-center p-2 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Vehicle Size & Type
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-lg">
                Larger, heavier vehicles (SUVs, trucks) require more space and
                fuel, increasing costs compared to standard sedans or compact
                cars.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border-2 rounded-lg p-4 w-full sm:w-64 h-auto sm:h-108 flex flex-col items-center bg-white shadow-xl drop-shadow-[6px_6px_12px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300">
            <div className="relative flex justify-center mb-4">
              {/* \   Soft Orange 3D Shadow */}
              <div className="absolute w-36 h-36 bg-orange-400 blur-xl opacity-40 rounded-full -z-10"></div>

              <img
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_144,h_144/v1742472736/city-to-city/icons/seasonality.webp"
                alt="Seasonality Impact on Auto Transport – How Time of Year Affects City-to-City Shipping"
                className="w-36 h-36 transition-transform duration-300 ease-in-out  drop-shadow-[3px_3px_8px_rgba(255,125,0,0.6)]"
              />
            </div>
            <div className="w-full flex flex-col justify-center p-2 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Season & Demand
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-lg">
                Peak seasons (summer, winter snowbird routes) drive up prices
                and delays, while off-peak periods may offer faster and
                cheaper shipping.
              </p>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-xl text-black">
          Call Rapid Auto Shipping today and get your worry-free, efficient, and
          competitive {data?.state_name} vehicle shipping experience.
        </p>
      </div>
    </div>
  );
}
