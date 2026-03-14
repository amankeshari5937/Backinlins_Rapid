import React from "react";
import Link from "next/link";

const ShippingCostTable = () => {
  const data = [
    { distance: "0 - 500 Miles", time: "1 - 2 Days", openCost: "$350", enclosedCost: "$550" },
    { distance: "500 - 1500 Miles", time: "2 - 4 Days", openCost: "$770", enclosedCost: "$975" },
    { distance: "1500 - 2500 Miles", time: "4 - 7 Days", openCost: "$1,070", enclosedCost: "$1,450" },
    { distance: "2500 Miles And Above", time: "7 - 9 Days", openCost: "$1,580", enclosedCost: "$2,150" },
  ];

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 bg-white rounded-lg transition-all duration-500 ease-in-out transform py-10 my-10">
      {/* Title */}
      <h2 className="text-4xl mt-10 md:text-5xl font-bold text-center text-gray-800 mb-4">
      How Much Does It <span className="text-rapidcolor">Cost to Ship a Car</span> Per Mile?
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-xl sm:text-base text-center mb-6">
        The average cost to ship a car is indirectly proportionate to the
        distance a car needs to be shipped. Let's say if the vehicle needs to be
        transported up to 500 miles than average cost is slightly above $1. As
        the distance increases and it goes up to 1000 miles than average cost
        decreases to $ 0.75 per mile.
      </p>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left min-w-[600px]">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2 sm:p-3 border border-gray-300 text-center text-base sm:text-xl">
                Distance
              </th>
              <th className="p-2 sm:p-3 border border-gray-300 text-center text-base sm:text-xl">
                Estimated Time
              </th>
              <th className="p-2 sm:p-3 border border-gray-300 text-center text-base sm:text-xl">
                Open Transport Cost
              </th>
              <th className="p-2 sm:p-3 border border-gray-300 text-center text-base sm:text-xl">
                Enclosed Transport Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-100`}
              >
                <td className="p-2 sm:p-3 border border-gray-300 text-sm sm:text-lg text-center">
                  {row.distance}
                </td>
                <td className="p-2 sm:p-3 border border-gray-300 text-sm sm:text-lg text-center">
                  {row.time}
                </td>
                <td className="p-2 sm:p-3 border border-gray-300 text-sm sm:text-lg text-center">
                  {row.openCost}
                </td>
                <td className="p-2 sm:p-3 border border-gray-300 text-sm sm:text-lg text-center">
                  {row.enclosedCost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note Section */}
      <p className="text-base sm:text-lg text-gray-600 mt-4 text-center">
        <strong>Note:</strong> Prices are based on recent shipping and market
        conditions. For a customized quote, call{" "}
        <Link href="tel:+18332334447" className="text-rapidcolor font-bold">+1 (833) 233-4447</Link>
      </p>
    </div>
  );
};

export default ShippingCostTable;
