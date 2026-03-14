import React, { useState } from "react";

function RoutesTwo({data}) {
  const routes = [
    " to Raleigh auto transport",
    " to Nashville auto transport",
    " to Riverside-San Bernardino auto transport",
    " to Austin auto transport",
    " to Dallas-Fort Worth auto transport",
    " to Orlando auto transport",
    " to Oklahoma City auto transport",
    " to Charlotte auto transport",
    " to Houston auto transport",
    " to Salt Lake City auto transport",
    " to San Jose auto transport",
    " to Denver auto transport",
    " to San Diego auto transport",
    " to Phoenix auto transport",
    " to Tulsa auto transport",
    " to Kansas City auto transport",
    " to Atlanta auto transport",
    " to Indianapolis auto transport",
    " to Sacramento auto transport",
    " to Jacksonville auto transport",
    " to Grand Rapids auto transport",
    " to San Antonio auto transport",
    " to Columbus auto transport",
    " to Birmingham auto transport",
    " to Tampa-St. Petersburg auto transport",
    " to Virginia Beach-Norfolk auto transport",
    " to Richmond auto transport",
    " to Minneapolis-St. Paul auto transport",
    " to St. Louis auto transport",
    " to Cincinnati auto transport",
    " to Louisville auto transport",
    " to Memphis auto transport",
    " to Tucson auto transport",
    " to Los Angeles auto transport",
    " to Portland auto transport",
    " to Fresno auto transport",
    " to Miami auto transport",
    " to Las Vegas auto transport",
    " to Seattle auto transport",
    " to Detroit auto transport",
    " to Hartford auto transport",
    " to Milwaukee auto transport",
    " to Providence auto transport",
    " to Honolulu auto transport",
    " to Washington auto transport",
    " to New Orleans auto transport",
    " to Cleveland auto transport",
    " to Rochester auto transport",
    " to Baltimore auto transport",
    " to Pittsburgh auto transport",
    " to Buffalo auto transport",
    " to San Francisco auto transport",
    " to Philadelphia auto transport",
    " to Boston auto transport",
    " to New York auto transport",
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleRoutes = showAll ? routes : routes.slice(0, 8); // Mobile view par sirf 8 routes dikhayenge

  return (
    <div className="container mx-auto my-10 bg-white rounded-2xl shadow-md border border-orange-300 p-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-h1color mb-8">
        Some Popular Auto Transport Routes to and from {data?.to || ""}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center text-lg text-gray-800">
        {visibleRoutes.map((route, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:rotate-1"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <p className="text-gray-800">{data?.to}{route}</p>
          </div>
        ))}
      </div>

      {/* "See More" Button Sirf Mobile View Ke Liye */}
      <div className="text-center mt-6 md:hidden">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-white bg-rapidcolor px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}

export default RoutesTwo;
