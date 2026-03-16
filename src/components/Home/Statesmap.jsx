import { useState } from 'react';
import { Map, Truck, Navigation, Award, Info, ChevronRight } from 'lucide-react';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

export default function AutoTransportationUSA() {
  const topLocations = [
    { name: "Los Angeles, CA", description: "Major hub for vehicle shipping on the West Coast" },
    { name: "Miami, FL", description: "Primary port for international auto transport" },
    { name: "Chicago, IL", description: "Central hub connecting East and West routes" },
    { name: "New York, NY", description: "Major destination for both domestic and international shipments" },
    { name: "Houston, TX", description: "Key location for Gulf Coast auto transport" },
    { name: "Seattle, WA", description: "Important Pacific Northwest port for vehicle imports/exports" },
    { name: "Baltimore, MD", description: "Major East Coast port specializing in vehicle processing" },
    { name: "Jacksonville, FL", description: "Growing automotive port with dedicated vehicle terminals" },
    { name: "Detroit, MI", description: "Automotive manufacturing center with established shipping networks" },
    { name: "Dallas, TX", description: "Central distribution point for the Southwest region" },
    { name: "Atlanta, GA", description: "Major Southeast logistics hub with interstate connections" },
    { name: "Phoenix, AZ", description: "Growing Southwest destination with increasing demand" },
    { name: "Denver, CO", description: "Mountain region hub with routes to both coasts" },
    { name: "Portland, OR", description: "Pacific Northwest port with specialized auto handling facilities" },
    { name: "San Diego, CA", description: "Southern California port with Mexican border proximity" },
    { name: "Boston, MA", description: "New England hub with international shipping connections" },
    { name: "Nashville, TN", description: "Central Southeast location with growing auto industry presence" },
    { name: "Minneapolis, MN", description: "Northern Midwest hub serving upper Midwest states" },
    { name: "New Orleans, LA", description: "Strategic Gulf port with river and ocean access" },
    { name: "Kansas City, MO", description: "Central US rail and trucking nexus" },
    { name: "Philadelphia, PA", description: "Major Northeast port with dedicated vehicle processing facilities" },
    { name: "Charlotte, NC", description: "Growing Southeast distribution center" },
    { name: "Columbus, OH", description: "Centrally located for Midwest auto transport" },
    { name: "San Antonio, TX", description: "South Texas hub with connections to Mexico" },
    { name: "Salt Lake City, UT", description: "Mountain West distribution center with interstate access" }
  ];

  const topRoutes = [
    { route: "Los Angeles to New York", distance: "2,790 miles", popularity: "Very High" },
    { route: "Miami to Boston", distance: "1,490 miles", popularity: "High" },
    { route: "Chicago to Dallas", distance: "925 miles", popularity: "High" },
    { route: "Seattle to San Diego", distance: "1,255 miles", popularity: "Medium" },
    { route: "Detroit to Phoenix", distance: "2,035 miles", popularity: "Medium" },
    { route: "New York to Los Angeles", distance: "2,790 miles", popularity: "Very High" },
    { route: "Boston to Miami", distance: "1,490 miles", popularity: "High" },
    { route: "Dallas to Chicago", distance: "925 miles", popularity: "High" },
    { route: "San Francisco to Denver", distance: "1,245 miles", popularity: "Medium" },
    { route: "Houston to Atlanta", distance: "795 miles", popularity: "High" },
    { route: "Portland to Los Angeles", distance: "960 miles", popularity: "Medium" },
    { route: "Philadelphia to Orlando", distance: "985 miles", popularity: "High" },
    { route: "Atlanta to New York", distance: "865 miles", popularity: "High" },
    { route: "Phoenix to Seattle", distance: "1,425 miles", popularity: "Medium" },
    { route: "Chicago to New York", distance: "790 miles", popularity: "Very High" },
    { route: "Denver to Las Vegas", distance: "750 miles", popularity: "Medium" },
    { route: "Miami to Chicago", distance: "1,380 miles", popularity: "High" },
    { route: "Dallas to Los Angeles", distance: "1,435 miles", popularity: "High" },
    { route: "San Diego to Portland", distance: "1,080 miles", popularity: "Medium" },
    { route: "Boston to Chicago", distance: "985 miles", popularity: "High" },
    { route: "Las Vegas to San Francisco", distance: "570 miles", popularity: "High" },
    { route: "Nashville to Miami", distance: "880 miles", popularity: "Medium" },
    { route: "Minneapolis to Phoenix", distance: "1,660 miles", popularity: "Medium" },
    { route: "Orlando to New York", distance: "1,080 miles", popularity: "Very High" },
    { route: "Seattle to Phoenix", distance: "1,425 miles", popularity: "Medium" },
    { route: "Austin to Los Angeles", distance: "1,375 miles", popularity: "Medium" },
    { route: "Charlotte to Boston", distance: "845 miles", popularity: "Medium" },
    { route: "Kansas City to Denver", distance: "600 miles", popularity: "Medium" },
    { route: "Washington DC to Atlanta", distance: "640 miles", popularity: "High" },
    { route: "Detroit to Tampa", distance: "1,180 miles", popularity: "High" },
    { route: "Indianapolis to Miami", distance: "1,145 miles", popularity: "Medium" },
    { route: "New Orleans to Chicago", distance: "925 miles", popularity: "Medium" },
    { route: "Salt Lake City to Portland", distance: "770 miles", popularity: "Medium" },
    { route: "San Antonio to Los Angeles", distance: "1,350 miles", popularity: "Medium" },
    { route: "Cleveland to Phoenix", distance: "2,090 miles", popularity: "Medium" },
    { route: "St. Louis to New York", distance: "960 miles", popularity: "Medium" },
    { route: "Pittsburgh to Orlando", distance: "945 miles", popularity: "Medium" },
    { route: "Columbus to Miami", distance: "1,130 miles", popularity: "Medium" },
    { route: "Raleigh to Chicago", distance: "780 miles", popularity: "Medium" },
    { route: "Jacksonville to Boston", distance: "1,140 miles", popularity: "Medium" },
    { route: "Milwaukee to Phoenix", distance: "1,770 miles", popularity: "Low" },
    { route: "Louisville to San Diego", distance: "2,070 miles", popularity: "Low" },
    { route: "Tampa to Detroit", distance: "1,180 miles", popularity: "High" },
    { route: "Portland to San Diego", distance: "1,080 miles", popularity: "Medium" },
    { route: "Oklahoma City to Seattle", distance: "1,890 miles", popularity: "Low" },
    { route: "Tucson to Portland", distance: "1,270 miles", popularity: "Low" },
    { route: "Albuquerque to Chicago", distance: "1,325 miles", popularity: "Low" },
    { route: "Memphis to Boston", distance: "1,230 miles", popularity: "Medium" },
    { route: "Omaha to Phoenix", distance: "1,280 miles", popularity: "Low" },
    { route: "El Paso to Dallas", distance: "625 miles", popularity: "Medium" },
    { route: "Fresno to Seattle", distance: "865 miles", popularity: "Low" },
    { route: "Sacramento to Denver", distance: "1,015 miles", popularity: "Medium" },
    { route: "Tulsa to Los Angeles", distance: "1,470 miles", popularity: "Low" },
    { route: "Colorado Springs to San Francisco", distance: "1,270 miles", popularity: "Low" },
    { route: "Wichita to Atlanta", distance: "910 miles", popularity: "Low" },
    { route: "Virginia Beach to Chicago", distance: "870 miles", popularity: "Medium" },
    { route: "Oakland to Las Vegas", distance: "565 miles", popularity: "Medium" },
    { route: "Bakersfield to Seattle", distance: "990 miles", popularity: "Low" },
    { route: "New Haven to Miami", distance: "1,335 miles", popularity: "Medium" },
    { route: "Honolulu to Los Angeles", distance: "2,560 miles", popularity: "Low" },
    { route: "Anchorage to Seattle", distance: "2,265 miles", popularity: "Low" },
    { route: "San Jose to Phoenix", distance: "750 miles", popularity: "Medium" },
    { route: "Providence to Orlando", distance: "1,185 miles", popularity: "Medium" },
    { route: "Fort Worth to Los Angeles", distance: "1,425 miles", popularity: "Medium" },
    { route: "Buffalo to Miami", distance: "1,340 miles", popularity: "Medium" },
    { route: "Spokane to San Diego", distance: "1,250 miles", popularity: "Low" },
    { route: "Boise to Los Angeles", distance: "925 miles", popularity: "Low" },
    { route: "Richmond to Dallas", distance: "1,220 miles", popularity: "Low" },
    { route: "Birmingham to Chicago", distance: "640 miles", popularity: "Medium" },
    { route: "Des Moines to Phoenix", distance: "1,425 miles", popularity: "Low" },
    { route: "Baton Rouge to Denver", distance: "1,180 miles", popularity: "Low" },
    { route: "Knoxville to Miami", distance: "805 miles", popularity: "Medium" },
    { route: "Little Rock to Los Angeles", distance: "1,680 miles", popularity: "Low" },
    { route: "Reno to Portland", distance: "580 miles", popularity: "Low" },
    { route: "Worcester to Tampa", distance: "1,275 miles", popularity: "Low" },
    { route: "Grand Rapids to Phoenix", distance: "1,940 miles", popularity: "Low" },
    { route: "Huntsville to Boston", distance: "1,150 miles", popularity: "Low" },
    { route: "Salt Lake City to Chicago", distance: "1,400 miles", popularity: "Medium" },
    { route: "Mobile to Detroit", distance: "905 miles", popularity: "Low" },
    { route: "Eugene to San Diego", distance: "980 miles", popularity: "Low" },
    { route: "Santa Rosa to Phoenix", distance: "825 miles", popularity: "Low" },
    { route: "Fort Lauderdale to New York", distance: "1,265 miles", popularity: "Very High" },
    { route: "Chattanooga to Chicago", distance: "575 miles", popularity: "Low" },
    { route: "Springfield to Los Angeles", distance: "1,840 miles", popularity: "Low" },
    { route: "Corpus Christi to Denver", distance: "1,130 miles", popularity: "Low" },
    { route: "Tallahassee to Detroit", distance: "935 miles", popularity: "Low" },
    { route: "Shreveport to Phoenix", distance: "1,250 miles", popularity: "Low" },
    { route: "Syracuse to Tampa", distance: "1,245 miles", popularity: "Low" },
    { route: "Savannah to Chicago", distance: "870 miles", popularity: "Medium" },
    { route: "Tacoma to San Francisco", distance: "845 miles", popularity: "Medium" },
    { route: "Greensboro to Miami", distance: "730 miles", popularity: "Medium" },
    { route: "Peoria to Los Angeles", distance: "1,925 miles", popularity: "Low" },
    { route: "Santa Barbara to Seattle", distance: "1,090 miles", popularity: "Low" },
    { route: "Fayetteville to Boston", distance: "985 miles", popularity: "Low" },
    { route: "Lansing to Tampa", distance: "1,215 miles", popularity: "Low" },
    { route: "Fort Collins to Los Angeles", distance: "1,070 miles", popularity: "Low" },
    { route: "Dayton to Orlando", distance: "895 miles", popularity: "Medium" },
    { route: "Montgomery to Chicago", distance: "740 miles", popularity: "Low" },
    { route: "Lexington to Phoenix", distance: "1,900 miles", popularity: "Low" },
    { route: "Augusta to Miami", distance: "620 miles", popularity: "Medium" },
    { route: "Akron to Los Angeles", distance: "2,340 miles", popularity: "Low" },
    { route: "Stockton to Seattle", distance: "810 miles", popularity: "Low" },
    { route: "Cincinnati to Tampa", distance: "930 miles", popularity: "Medium" },
    { route: "Charleston to Chicago", distance: "810 miles", popularity: "Medium" },
    { route: "Rochester to Los Angeles", distance: "2,675 miles", popularity: "Low" },
    { route: "Modesto to Denver", distance: "1,145 miles", popularity: "Low" },
    { route: "Harrisburg to Miami", distance: "1,110 miles", popularity: "Medium" }
  ];
  const topStates = [
    { state: "Pennsylvania", vehicles: "700,000+", features: "Major industrial hub, key Northeast corridor" },
    { state: "California", vehicles: "850,000+", features: "Major ports, high population density" },
    { state: "Florida", vehicles: "780,000+", features: "International shipping hub, snowbird transport" },
    { state: "Texas", vehicles: "720,000+", features: "Multiple major cities, cross-country routes" },
    { state: "New York", vehicles: "650,000+", features: "Dense population, international shipping" },
    { state: "Illinois", vehicles: "580,000+", features: "Central location, major distribution hub" },
    { state: "Ohio", vehicles: "550,000+", features: "Manufacturing center, Midwest hub" },
    { state: "Georgia", vehicles: "520,000+", features: "Southeast hub, major ports" },

  ];

  return (
    <div className="container px-2 mx-auto font-sans  py-10">
      <div className='w-full mx-auto'>
        <div className='text-2xl md:text-5xl text-center font-[600] mt-10 '>Our Famous Auto Transportation Routes</div>
        <div className='w-48 h-[4px] bg-rapidcolor mx-auto mb-10 mt-2 '></div>
      </div>
      {/* Main Sections - Two Column Layout that stacks on mobile */}
      <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-5">
        {/* Locations Section */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-full lg:w-1/2 h-[600px] overflow-y-auto">
          <div className="bg-[#FF5722] bg-opacity-10 p-4 sm:p-5 border-b">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <Map className="text-[#FF5722] mr-2" size={20} />
              Top Auto Transportation Locations
            </h2>
            <p className="text-gray-600 text-sm mt-1">Major hubs for vehicle shipping across the United States</p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {topLocations.map((location, index) => (
                <div key={index} className="p-3 sm:p-4 border rounded-lg hover:shadow-md transition-shadow flex items-start bg-white">
                  <div className="bg-[#FF5722] text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm sm:text-xl">{location.name}</div>
                    <p className="text-gray-600 text-xs sm:text-base mt-1">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Routes Section */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-full lg:w-1/2 h-[600px] overflow-y-auto">
          <div className="bg-[#FF5722] bg-opacity-10 p-2 sm:p-2 border-b">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <Navigation className="text-[#FF5722] mr-2" size={20} />
              Top Auto Transportation Routes
            </h2>
            <p className="text-gray-600 text-sm mt-1">Most popular vehicle transportation corridors in the USA</p>
          </div>
          <div className="p-1 sm:p-1  ">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>

                    <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                    <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
                    <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Popularity</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topRoutes.map((route, index) => (
                    <tr key={index} className="hover:bg-gray-50">

                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap font-medium text-gray-800 text-xs sm:text-lg">{route.route}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-gray-600 text-xs sm:text-lg">{route.distance}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${route.popularity === 'Very High' ? 'bg-[#FF5722] text-white' :
                            route.popularity === 'High' ? 'bg-[#FF5722] bg-opacity-70 text-white' :
                              'bg-[#FF5722] bg-opacity-40 text-white'
                          }`}>
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
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-5 h-[650px]">
        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-full lg:w-1/2 h-[650px] overflow-y-auto">
          <div className="bg-[#FF5722] bg-opacity-10 p-4 sm:p-5 border-b">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <Map className="text-[#FF5722] mr-2" size={20} />
              Auto Transportation Map
            </h2>
            <p className="text-gray-600 text-sm mt-1">Visualization of major transportation hubs and routes</p>
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
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <Award className="text-[#FF5722] mr-2" size={20} />
              Top Auto Transportation States
            </h2>
            <p className="text-gray-600 text-sm mt-1">States with the highest volume of vehicle transportation</p>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {topStates.slice(0, 9).map((state, index) => (
                <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-2 sm:p-3 text-white font-medium  bg-rapidcolor">
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-xl">{state.state}</span>
                      <div className="bg-white bg-opacity-20 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <div className="text-xs sm:text-sm text-gray-500">Annual Volume</div>
                      <div className="font-semibold text-[#FF5722] text-xs sm:text-sm">{state.vehicles}</div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">{state.features}</p>
                  </div>
                </div>
              ))}
           
            </div>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#FF5722] to-orange-500 rounded-lg shadow-lg p-4 sm:p-6 text-white mb-6 sm:mb-8 mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="sm:mr-4">
            <span className="text-lg sm:text-xl font-bold mb-2">Ready to Transport Your Vehicle?</span>
            <p className="text-white text-opacity-90 text-sm sm:text-base">Get a free quote today and experience our premium auto transportation service.</p>
          </div>
          <div className="flex">
            <Link href="/">
              <button className="bg-white text-[#FF5722] px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center font-semibold w-full sm:w-auto justify-center">
                Request a Quote
                <ChevronRight size={16} className="ml-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}