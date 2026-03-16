import React from "react";

function Routes({ data }) {
  return (
    <>
      <div className="container mx-auto my-10 bg-white rounded-2xl shadow-md border border-orange-300 p-8">
        <div className="text-2xl md:text-4xl font-bold text-center text-h1color mb-8">
          Some Popular Auto Transport Routes to and from {data?.state_name}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center text-lg text-gray-800">
          {[
            " to Los Angeles auto transport",
            " to Phoenix auto transport",
            " to Denver auto transport",
            " to Chicago auto transport",
            " to Atlanta auto transport",
            " to Miami auto transport",
            " to Orlando auto transport",
            " to Nashville auto transport",
            " to Charlotte auto transport",
            " to New York auto transport",
            " to Boston auto transport",
            " to Philadelphia auto transport",
            " to Washington DC auto transport",
            " to Seattle auto transport",
            " to Portland auto transport",
            " to San Francisco auto transport",
            " to San Diego auto transport",
            " to Las Vegas auto transport",
            " to Salt Lake City auto transport",
            " to Kansas City auto transport",
            " to St. Louis auto transport",
            " to Minneapolis auto transport",
            " to Detroit auto transport",
            " to Cleveland auto transport",
            " to Indianapolis auto transport",
            " to Columbus auto transport",
            " to Cincinnati auto transport",
            " to Tampa auto transport",
            " to Jacksonville auto transport",
            " to New Orleans auto transport",
            " to Oklahoma City auto transport",
            " to Tulsa auto transport",
            " to Memphis auto transport",
            " to Louisville auto transport",
            " to Richmond auto transport",
            " to Virginia Beach auto transport",
            " to Raleigh auto transport",
            " to Sacramento auto transport",
            " to San Jose auto transport",
            " to Fresno auto transport",
            " to Tucson auto transport",
            " to Albuquerque auto transport",
            " to Honolulu auto transport",
            " to Anchorage auto transport",
          ].map((route, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:rotate-1"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <p className="text-gray-800">
                {data?.state_name} {route}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Routes;
