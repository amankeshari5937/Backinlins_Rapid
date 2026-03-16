import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MapPin, ArrowRight, Truck, ChevronDown } from "lucide-react";

// Original routes array
const routes = [
  {
    slug: "/state-to-state/new-york-to-florida",
    route: "New York to Florida",
    distance: "1,267 mi",
    popularityRank: 1,
  },
  {
    slug: "/state-to-state/california-to-texas",
    route: "California to Texas",
    distance: "1,584 mi",
    popularityRank: 2,
  },


  {
    slug: "/state-to-state/california-to-florida",
    route: "California to Florida",
    distance: "2,706 mi",
    popularityRank: 3,
  },
  {
    slug: "/state-to-state/texas-to-california",
    route: "Texas to California",
    distance: "1,584 mi",
    popularityRank: 4,
  },
  {
    slug: "/illinois-to-florida-auto-transport",
    route: "Illinois to Florida",
    distance: "1,158 mi",
    popularityRank: 5,
  },
 

 
  {
    slug: "/state-to-state/new-jersey-to-florida",
    route: "New Jersey to Florida",
    distance: "1,127 mi",
    popularityRank: 6,
  },
  {
    slug: "/state-to-state/arizona-to-washington",
    route: "Arizona to Washington",
    distance: "1,421 mi",
    popularityRank: 7,
  },
  {
    slug: "/massachusetts-to-florida-auto-transport-service",
    route: "Massachusetts to Florida",
    distance: "1,394 mi",
    popularityRank: 8,
  },
 

  {
    slug: "/state-to-state/florida-to-california",
    route: "Florida to California",
    distance: "2,706 mi",
    popularityRank: 9,
  },

 
  {
    slug: "/pennsylvania-to-florida-auto-transport-service",
    route: "Pennsylvania to Florida",
    distance: "1,147 mi",
    popularityRank: 10,
  },
  {
    slug: "/state-to-state/colorado-to-california",
    route: "Colorado to California",
    distance: "1,088 mi",
    popularityRank: 11,
  },
];

// Function to remove bidirectional duplicates
const removeBidirectionalDuplicates = (routes) => {
  const seenPairs = new Set();
  const filteredRoutes = [];

  routes.forEach((routeA) => {
    const [originA, , destinationA] = routeA.route.split(" ");
    const pairKey = [originA, destinationA].sort().join("-");

    if (!seenPairs.has(pairKey)) {
      seenPairs.add(pairKey);
      filteredRoutes.push(routeA);
    } else {
      const existingRouteIndex = filteredRoutes.findIndex(
        (r) => {
          const [originB, , destinationB] = r.route.split(" ");
          return [originB, destinationB].sort().join("-") === pairKey;
        }
      );
      const existingRoute = filteredRoutes[existingRouteIndex];
      if (routeA.popularityRank < existingRoute.popularityRank) {
        filteredRoutes[existingRouteIndex] = routeA;
      }
    }
  });

  return filteredRoutes;
};

// Create unique routes array
const uniqueRoutes = removeBidirectionalDuplicates(routes);

// Group routes by origin state
const getOriginState = (route) => route.route.split(" to ")[0];
const groupedRoutes = uniqueRoutes.reduce((acc, route) => {
  const origin = getOriginState(route);
  if (!acc[origin]) acc[origin] = [];
  acc[origin].push(route);
  return acc;
}, {});

const RoutesList = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport width on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter routes based on search term
  const filteredRoutes = uniqueRoutes.filter((route) =>
    route.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Display routes based on active tab
  const displayedRoutes =
    activeTab === "all"
      ? filteredRoutes
      : filteredRoutes.filter((route) => getOriginState(route) === activeTab);

  // Popular origin states limited to 5 for desktop tabs
  const popularOrigins = Object.keys(groupedRoutes).slice(0, 5);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 md:mb-12 text-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Truck className="text-rapid-color mr-2" size={24} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Top Auto Transport Routes
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Find the most popular routes for shipping your vehicle across the
            United States. Click on any route to get detailed information and
            instant quotes.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 sm:mb-8 bg-white rounded-lg shadow-md p-3 sm:p-4">
          <div className="flex flex-col space-y-3 sm:space-y-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search routes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg pl-9 sm:pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filter Section - Mobile Dropdown */}
            {isMobile ? (
              <div className="relative">
                <button
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md text-sm font-medium border border-gray-300"
                >
                  <span>
                    {activeTab === "all" ? "All Routes" : `From ${activeTab}`}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isFilterDropdownOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                
                {isFilterDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                    <button
                      onClick={() => {
                        setActiveTab("all");
                        setIsFilterDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        activeTab === "all" ? "bg-blue-50 text-blue-700" : ""
                      }`}
                    >
                      All Routes
                    </button>
                    {Object.keys(groupedRoutes).map((origin) => (
                      <button
                        key={origin}
                        onClick={() => {
                          setActiveTab(origin);
                          setIsFilterDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          activeTab === origin ? "bg-blue-50 text-blue-700" : ""
                        }`}
                      >
                        {origin}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Filter Section - Desktop Tabs */
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    activeTab === "all"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  All Routes
                </button>
                {popularOrigins.map((origin) => (
                  <button
                    key={origin}
                    onClick={() => setActiveTab(origin)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                      activeTab === origin
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {origin}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {displayedRoutes.map((route) => (
            <Link
              key={route.slug}
              href={`${route.slug}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 block border border-gray-200"
            >
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-rapid-color mr-1" />
                      <span className="text-xs sm:text-sm font-medium text-rapid-color">
                        Route #{route.popularityRank}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {route.route}
                    </h3>
                    <div className="mt-1 sm:mt-2 flex items-center text-gray-500 text-xs sm:text-sm">
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span>{route.distance}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-rapid-color group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="text-xs sm:text-sm text-gray-600">
                    Get instant quotes and transport details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show when no routes match */}
        {displayedRoutes.length === 0 && (
          <div className="text-center py-8 sm:py-10 md:py-12 bg-white rounded-lg shadow-md">
            <Truck className="mx-auto h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-400" />
            <h3 className="mt-2 text-base sm:text-lg font-medium text-gray-900">
              No routes found
            </h3>
            <p className="mt-1 text-sm sm:text-base text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoutesList;