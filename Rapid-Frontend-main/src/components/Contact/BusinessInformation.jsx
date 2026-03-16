import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaCalendarAlt, FaEnvelope } from "react-icons/fa";

const BusinessDetails = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-md p-4 sm:p-6 md:p-8">
      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2 sm:pb-3 border-orange-200">
        Business Information
      </h2>

      {/* Business Hours Section */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-700 flex items-center">
          <span className="bg-orange-100 p-1.5 sm:p-2 rounded-full mr-2">
            <FaCalendarAlt className="text-orange-500 text-xs sm:text-sm" />
          </span>
          <span className="text-sm sm:text-base">
            Business Hours (Eastern Time)
          </span>
        </h3>

        <div className="space-y-3 sm:space-y-4 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-orange-100 pb-2 sm:pb-3">
            <div className="flex items-center mb-1 sm:mb-0">
              <div className="bg-orange-50 p-1 sm:p-1.5 rounded-md mr-2 sm:mr-3">
                <FaCalendarAlt className="text-orange-500 text-xs sm:text-sm" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                Monday to Friday
              </span>
            </div>
            <span className="text-orange-600 font-medium text-sm sm:text-base pl-6 sm:pl-0">
              Open 24 hours
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-orange-100 pb-2 sm:pb-3">
            <div className="flex items-center mb-1 sm:mb-0">
              <div className="bg-orange-50 p-1 sm:p-1.5 rounded-md mr-2 sm:mr-3">
                <FaCalendarAlt className="text-orange-500 text-xs sm:text-sm" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                Weekend Days
              </span>
            </div>
            <span className="text-orange-600 font-medium text-sm sm:text-base pl-6 sm:pl-0">
              8:00 am - 8:00 pm
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center mb-1 sm:mb-0">
              <div className="bg-orange-50 p-1 sm:p-1.5 rounded-md mr-2 sm:mr-3">
                <FaCalendarAlt className="text-orange-500 text-xs sm:text-sm" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                Public Holidays
              </span>
            </div>
            <span className="text-orange-600 font-medium text-sm sm:text-base pl-6 sm:pl-0">
              8:00 am - 8:00 pm
            </span>
          </div>
        </div>
      </div>

      {/* Email Contact Section */}
      <div>
        

        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-700 mt-4 sm:mt-5 flex items-center">
          <span className="bg-orange-100 p-1.5 sm:p-2 rounded-full mr-2">
            <IoMdCall className="text-orange-500 text-xs sm:text-sm" />
          </span>
          <span className="text-sm sm:text-base">Phone number</span>
        </h3>

        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="flex items-center">
            <div className="bg-orange-50 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
              <IoMdCall className="text-orange-500 text-xs sm:text-sm" />
            </div>
            <div>
              
              <p className="font-medium text-sm sm:text-base">(833) 233-4447</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
