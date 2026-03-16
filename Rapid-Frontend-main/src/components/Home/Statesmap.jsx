import { useState } from "react";
import {
  Map,
  Truck,
  Navigation,
  Award,
  Info,
  ChevronRight,
} from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function AutoTransportationUSA() {
  const topRoutes = [
    {
      route: "California to Michigan Auto Transport",
      href: "/state-to-state/california-to-michigan",
      distance: "2,340 miles",
      popularity: "Very High",
    },
    {
      route: "Virginia to Ohio Car Shipping",
      href: "/virginia-to-ohio-auto-transport-service",
      distance: "375 miles",
      popularity: "Very High",
    },
    {
      route: "California to North Carolina Car Shipping",
      href: "/state-to-state/california-to-north-carolina",
      distance: "2,555 miles",
      popularity: "Very High",
    },
    {
      route: "Austin to Seattle Auto Transport",
      href: "/austin-to-seattle-auto-transport",
      distance: "2,115 miles",
      popularity: "Very High",
    },
    {
      route: "New York to Alabama Car Shipping",
      href: "/state-to-state/new-york-to-alabama",
      distance: "925 miles",
      popularity: "Very High",
    },
    {
      route: "Alabama to Texas Auto Transport",
      href: "/state-to-state/alabama-to-texas",
      distance: "675 miles",
      popularity: "High",
    },
    {
      route: "Alabama to Colorado Auto Transport",
      href: "/state-to-state/alabama-to-colorado",
      distance: "1,370 miles",
      popularity: "High",
    },
    {
      route: "Georgia to California Car Shipping",
      href: "/state-to-state/georgia-to-california",
      distance: "2,175 miles",
      popularity: "High",
    },
    {
      route: "Pennsylvania to Illinois Auto Transport",
      href: "/pennsylvania-to-illinois-auto-transport-service",
      distance: "660 miles",
      popularity: "High",
    },
    {
      route: "Arizona to Colorado Auto Transport",
      href: "/state-to-state/arizona-to-colorado",
      distance: "600 miles",
      popularity: "High",
    },
    {
      route: "Arizona to New Jersey Auto Transport",
      href: "/state-to-state/arizona-to-new-jersey",
      distance: "2,275 miles",
      popularity: "High",
    },
    {
      route: "Georgia to Florida Car Shipping",
      href: "/georgia-to-florida-auto-transport",
      distance: "350 miles",
      popularity: "High",
    },
    {
      route: "Louisiana to California Auto Transport",
      href: "/state-to-state/louisiana-to-california",
      distance: "1,880 miles",
      popularity: "High",
    },
    {
      route: "Philadelphia to Los Angeles Car Shipping",
      href: "/philadelphia-to-los-angeles-auto-transport",
      distance: "2,720 miles",
      popularity: "High",
    },
    {
      route: "Pennsylvania to New York Vehicle Transport",
      href: "/pennsylvania-to-new-york-auto-transport-service",
      distance: "170 miles",
      popularity: "High",
    },
    {
      route: "North Carolina to Florida Auto Transport",
      href: "/north-carolina-to-florida-auto-transport-service",
      distance: "650 miles",
      popularity: "High",
    },
    {
      route: "Atlanta to Los Angeles Auto Transport",
      href: "/atlanta-to-los-angeles-auto-transport",
      distance: "2,175 miles",
      popularity: "High",
    },
    {
      route: "Florida to Texas Car Shipping",
      href: "/florida-to-texas-auto-transport-service",
      distance: "1,100 miles",
      popularity: "High",
    },
    {
      route: "Pittsburgh to Chicago Auto Transport",
      href: "/pittsburgh-to-chicago-auto-transport",
      distance: "460 miles",
      popularity: "High",
    },
    {
      route: "New Jersey to California Car Shipping",
      href: "/state-to-state/new-jersey-to-california",
      distance: "2,775 miles",
      popularity: "Medium",
    },
    {
      route: "Ohio to California Auto Transport",
      href: "/state-to-state/ohio-to-california",
      distance: "2,350 miles",
      popularity: "Medium",
    },
    {
      route: "Los Angeles to Houston Auto Transport",
      href: "/los-angeles-to-houston-auto-transport",
      distance: "1,550 miles",
      popularity: "Medium",
    },
    {
      route: "Indiana to California Vehicle Transport",
      href: "/state-to-state/indiana-to-california",
      distance: "2,100 miles",
      popularity: "Medium",
    },
    {
      route: "Oregon to California Auto Transport",
      href: "/state-to-state/oregon-to-california",
      distance: "640 miles",
      popularity: "Medium",
    },
    {
      route: "Chicago to Los Angeles Car Shipping",
      href: "/chicago-to-los-angeles-auto-transport",
      distance: "2,015 miles",
      popularity: "Medium",
    },
    {
      route: "New York to California Auto Transport",
      href: "/state-to-state/new-york-to-california",
      distance: "2,800 miles",
      popularity: "Medium",
    },
    {
      route: "New York to Florida Car Shipping",
      href: "/state-to-state/new-york-to-florida",
      distance: "1,280 miles",
      popularity: "Medium",
    },
    {
      route: "Boston to Los Angeles Auto Transport",
      href: "/boston-to-los-angeles-auto-transport",
      distance: "2,985 miles",
      popularity: "Medium",
    },
    {
      route: "Chicago to New York Car Shipping",
      href: "/chicago-to-new-york-auto-transport",
      distance: "790 miles",
      popularity: "Medium",
    },
    {
      route: "Boston to San Francisco Auto Transport",
      href: "/boston-to-san-francisco-auto-transport",
      distance: "3,095 miles",
      popularity: "Medium",
    },
    {
      route: "Atlanta to Houston Car Shipping",
      href: "/atlanta-to-houston-auto-transport",
      distance: "795 miles",
      popularity: "Medium",
    },
    {
      route: "Dallas to Los Angeles Auto Transport",
      href: "/dallas-to-los-angeles-auto-transport",
      distance: "1,435 miles",
      popularity: "Medium",
    },
    {
      route: "San Francisco to Denver Car Shipping",
      href: "/san-francisco-to-denver-auto-transport",
      distance: "1,245 miles",
      popularity: "Medium",
    },
    {
      route: "Atlanta to Dallas Auto Transport",
      href: "/atlanta-to-dallas-auto-transport",
      distance: "780 miles",
      popularity: "Medium",
    },
    {
      route: "Portland to Seattle Car Shipping",
      href: "/portland-to-seattle-auto-transport",
      distance: "175 miles",
      popularity: "Medium",
    },
    {
      route: "Philadelphia to Atlanta Auto Transport",
      href: "/philadelphia-to-atlanta-auto-transport",
      distance: "775 miles",
      popularity: "Medium",
    },
    {
      route: "Atlanta to Tampa Car Shipping",
      href: "/atlanta-to-tampa-auto-transport",
      distance: "455 miles",
      popularity: "Medium",
    },
    {
      route: "Denver to Houston Auto Transport",
      href: "/denver-to-houston-auto-transport",
      distance: "1,030 miles",
      popularity: "Medium",
    },
    {
      route: "Chicago to Dallas Car Shipping",
      href: "/chicago-to-dallas-auto-transport",
      distance: "925 miles",
      popularity: "Medium",
    },
    {
      route: "Salt Lake City to Phoenix Auto Transport",
      href: "/salt-lake-city-to-phoenix-auto-transport",
      distance: "660 miles",
      popularity: "Medium",
    },
    {
      route: "Atlanta to Charlotte Car Shipping",
      href: "/atlanta-to-charlotte-auto-transport",
      distance: "245 miles",
      popularity: "Medium",
    },
    {
      route: "Miami to Washington DC Auto Transport",
      href: "/miami-to-washington-dc-auto-transport",
      distance: "1,055 miles",
      popularity: "Medium",
    },
    {
      route: "Chicago to Boston Car Shipping",
      href: "/chicago-to-boston-auto-transport",
      distance: "985 miles",
      popularity: "Medium",
    },
    {
      route: "Boston to Tampa Auto Transport",
      href: "/boston-to-tampa-auto-transport",
      distance: "1,345 miles",
      popularity: "Medium",
    },
    {
      route: "San Diego to Atlanta Car Shipping",
      href: "/san-diego-to-atlanta-auto-transport",
      distance: "2,125 miles",
      popularity: "Medium",
    },
    {
      route: "Chicago to Minneapolis Auto Transport",
      href: "/chicago-to-minneapolis-auto-transport",
      distance: "410 miles",
      popularity: "Medium",
    },
    {
      route: "Philadelphia to Houston Car Shipping",
      href: "/philadelphia-to-houston-auto-transport",
      distance: "1,540 miles",
      popularity: "Medium",
    },
    {
      route: "Dallas to San Antonio Auto Transport",
      href: "/dallas-to-san-antonio-auto-transport",
      distance: "275 miles",
      popularity: "Medium",
    },
    {
      route: "Tampa to Orlando Car Shipping",
      href: "/tampa-to-orlando-auto-transport",
      distance: "85 miles",
      popularity: "Medium",
    },
    {
      route: "Alaska to California Auto Transport",
      href: "/state-to-state/alaska-to-california",
      distance: "3,365 miles",
      popularity: "Medium",
    },
  ];

  const topLocations = [
    {
      name: "Los Angeles, CA",
      description:
        "Busiest West Coast auto transport hub with cross-country routes",
    },
    {
      name: "New York, NY",
      description:
        "Highest-volume Northeast corridor for domestic and international shipments",
    },
    {
      name: "Chicago, IL",
      description:
        "Central hub connecting 46 auto transport routes coast to coast",
    },
    {
      name: "Philadelphia, PA",
      description:
        "Major Northeast port serving Pennsylvania, New Jersey, and Delaware",
    },
    {
      name: "Atlanta, GA",
      description:
        "Southeast auto transport hub with 20 active shipping routes",
    },
    {
      name: "Austin, TX",
      description:
        "Growing Texas hub with high-demand routes to Seattle and West Coast",
    },
    {
      name: "Seattle, WA",
      description:
        "Pacific Northwest gateway for vehicle transport and imports",
    },
    {
      name: "Houston, TX",
      description:
        "Gulf Coast shipping center connecting Texas to national routes",
    },
    {
      name: "Miami, FL",
      description:
        "Florida auto shipping hub serving snowbird and international transport",
    },
    {
      name: "Pittsburgh, PA",
      description: "Key Midwest-to-East Coast auto transport connector",
    },
    {
      name: "Dallas, TX",
      description:
        "Central Texas distribution hub with 17 vehicle shipping routes",
    },
    {
      name: "Boston, MA",
      description: "New England auto transport gateway for East Coast shipping",
    },
    {
      name: "Denver, CO",
      description:
        "Mountain region hub connecting both coasts via Interstate 70",
    },
    {
      name: "Phoenix, AZ",
      description: "Southwest auto shipping destination with year-round demand",
    },
    {
      name: "Detroit, MI",
      description: "Motor City hub with established auto transport networks",
    },
    {
      name: "San Diego, CA",
      description:
        "Southern California port with cross-border shipping to Mexico",
    },
    {
      name: "Portland, OR",
      description:
        "Pacific Northwest auto transport hub serving Oregon and Washington",
    },
    {
      name: "Tampa, FL",
      description:
        "Florida Gulf Coast hub for snowbird auto transport services",
    },
    {
      name: "Orlando, FL",
      description: "Central Florida destination for seasonal vehicle shipping",
    },
    {
      name: "Charlotte, NC",
      description: "Growing Southeast auto transport hub serving the Carolinas",
    },
    {
      name: "Salt Lake City, UT",
      description:
        "Mountain West vehicle shipping center with coast-to-coast access",
    },
    {
      name: "Minneapolis, MN",
      description: "Upper Midwest hub serving 20 auto transport routes",
    },
    {
      name: "San Francisco, CA",
      description:
        "Bay Area auto shipping hub for Northern California transport",
    },
    {
      name: "Jacksonville, FL",
      description:
        "East Coast port with dedicated vehicle processing terminals",
    },
    {
      name: "San Antonio, TX",
      description: "South Texas auto transport hub with Mexico border access",
    },
  ];

  const topStates = [
    {
      state: "California",
      href: "/states/california",
      vehicles: "850,000+",
      features:
        "Highest route volume, major ports, cross-country auto transport",
    },
    {
      state: "Alabama",
      href: "/states/alabama",
      vehicles: "380,000+",
      features: "Southeast gateway with 20,000+ route impressions annually",
    },
    {
      state: "Michigan",
      href: "/states/michigan",
      vehicles: "550,000+",
      features: "Motor City hub, top California auto transport corridor",
    },
    {
      state: "North Carolina",
      href: "/states/north-carolina",
      vehicles: "480,000+",
      features: "Growing Southeast market with high California route demand",
    },
    {
      state: "Pennsylvania",
      href: "/states/pennsylvania",
      vehicles: "700,000+",
      features: "Highest backlink authority, key Northeast shipping corridor",
    },
    {
      state: "New York",
      href: "/states/new-york",
      vehicles: "650,000+",
      features: "Dense population, major domestic and international shipping",
    },
    {
      state: "Colorado",
      href: "/states/colorado",
      vehicles: "420,000+",
      features: "Mountain region hub connecting Arizona and Alabama routes",
    },
    {
      state: "Arizona",
      href: "/states/arizona",
      vehicles: "420,000+",
      features: "High-growth Southwest market, snowbird auto transport",
    },
    {
      state: "Florida",
      href: "/states/florida",
      vehicles: "780,000+",
      features: "Snowbird shipping capital, international auto transport hub",
    },
    {
      state: "Texas",
      href: "/states/texas-tx",
      vehicles: "720,000+",
      features: "Multiple metro hubs, Gulf Coast cross-country routes",
    },
    {
      state: "Georgia",
      href: "/states/georgia",
      vehicles: "520,000+",
      features: "Southeast logistics hub with major port access",
    },
    {
      state: "New Jersey",
      href: "/states/new-jersey",
      vehicles: "450,000+",
      features: "Dense Northeast corridor, California route demand",
    },
  ];

  return (
    <div className="container px-2 mx-auto font-sans py-10">
      <div className="w-full mx-auto">
        <h2 className="text-2xl md:text-5xl text-center font-[600] mt-10">
          Our Famous Auto Transportation Routes
        </h2>
        <div className="w-48 h-[4px] bg-rapidcolor mx-auto mb-10 mt-2"></div>
      </div>

      {/* Main Sections - Two Column Layout */}
      <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-5">
        {/* Locations Section */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-full lg:w-1/2 h-[600px] overflow-y-auto">
          <div className="bg-[#FF5722] bg-opacity-10 p-4 sm:p-5 border-b">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <Map className="text-[#FF5722] mr-2" size={20} />
              Top Auto Transportation Locations
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Major hubs for vehicle shipping across the United States
            </p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {topLocations.map((location, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 border rounded-lg hover:shadow-md transition-shadow flex items-start bg-white"
                >
                  <div className="bg-[#FF5722] text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm sm:text-xl">
                      {location.name}
                    </div>
                    <p className="text-gray-600 text-xs sm:text-base mt-1">
                      {location.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Routes Section — overflow: auto = both X and Y scroll */}
        <div
          className="bg-white rounded-lg shadow-lg mb-6 w-full lg:w-1/2 h-[600px]"
          style={{ overflow: "auto", WebkitOverflowScrolling: "touch" }}
        >
          <div className="bg-[#FF5722] bg-opacity-10 p-2 sm:p-2 border-b">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <Navigation className="text-[#FF5722] mr-2" size={20} />
              Top Auto Transportation Routes
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Most popular vehicle transportation corridors in the USA
            </p>
          </div>
          <div>
            <table
              style={{ minWidth: "650px", width: "100%" }}
              className="divide-y divide-gray-200"
            >
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Distance
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Popularity
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topRoutes.map((route, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap font-medium text-xs sm:text-lg">
                      <Link
                        href={route.href}
                        className="text-gray-800 hover:text-[#FF5722] transition-colors"
                      >
                        {route.route}
                      </Link>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-gray-600 text-xs sm:text-lg">
                      {route.distance}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          route.popularity === "Very High"
                            ? "bg-[#FF5722] text-white"
                            : route.popularity === "High"
                              ? "bg-[#FF5722] bg-opacity-70 text-white"
                              : "bg-[#FF5722] bg-opacity-40 text-white"
                        }`}
                      >
                        {route.popularity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-5 h-[650px]">
        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-full lg:w-1/2 h-[650px] overflow-y-auto">
          <div className="bg-[#FF5722] bg-opacity-10 p-4 sm:p-5 border-b">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <Map className="text-[#FF5722] mr-2" size={20} />
              Auto Transportation Map
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Visualization of major transportation hubs and routes
            </p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="relative">
              <div className="w-full">
                <Image
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_60,w_800,h_400,c_fill/v1746631186/rapid-home/USA.webp"
                  alt="Nationwide Auto Transportation Services in the USA by Rapid Auto Shipping"
                  className="w-full h-auto rounded-lg border object-contain"
                  loading="lazy"
                  width={800}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        {/* States Section */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-full lg:w-1/2 h-[650px] overflow-y-auto">
          <div className="bg-[#FF5722] bg-opacity-10 p-4 sm:p-5 border-b">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <Award className="text-[#FF5722] mr-2" size={20} />
              Top Auto Transportation States
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              States with the highest volume of vehicle transportation
            </p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {topStates.map((state, index) => (
                <Link href={state.href} key={index} className="block">
                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-2 sm:p-3 text-white font-medium bg-rapidcolor">
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-xl">
                          {state.state}
                        </span>
                        <div className="bg-white bg-opacity-20 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <div className="p-3 sm:p-4">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <div className="text-xs sm:text-sm text-gray-500">
                          Annual Volume
                        </div>
                        <div className="font-semibold text-[#FF5722] text-xs sm:text-sm">
                          {state.vehicles}
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {state.features}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#FF5722] to-orange-500 rounded-lg shadow-lg p-4 sm:p-6 text-white mb-6 sm:mb-8 mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="sm:mr-4">
            <span className="text-lg sm:text-xl font-bold mb-2">
              Ready to Transport Your Vehicle?
            </span>
            <p className="text-white text-opacity-90 text-sm sm:text-base">
              Get a free quote today and experience our premium auto
              transportation service.
            </p>
          </div>
          <div className="flex">
            <Link href="/services/car-shipping-calculator">
              <button className="bg-white text-[#FF5722] px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center font-semibold w-full sm:w-auto justify-center">
                Get a Free Quote
                <ChevronRight size={16} className="ml-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
