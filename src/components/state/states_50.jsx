import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";

const USAStates = () => {
  // Complete list of all 50 US states
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  // Group states by region
  const regions = {
    "Northeast": ["Connecticut", "Maine", "Massachusetts", "New Hampshire", "New Jersey", "New York", "Pennsylvania", "Rhode Island", "Vermont"],
    "Midwest": ["Illinois", "Indiana", "Iowa", "Kansas", "Michigan", "Minnesota", "Missouri", "Nebraska", "North Dakota", "Ohio", "South Dakota", "Wisconsin"],
    "South": ["Alabama", "Arkansas", "Delaware", "Florida", "Georgia", "Kentucky", "Louisiana", "Maryland", "Mississippi", "North Carolina", "Oklahoma", "South Carolina", "Tennessee", "Texas", "Virginia", "West Virginia"],
    "West": ["Alaska", "Arizona", "California", "Colorado", "Hawaii", "Idaho", "Montana", "Nevada", "New Mexico", "Oregon", "Utah", "Washington", "Wyoming"]
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");

  const filteredStates = states.filter(state => 
    state.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (activeRegion === "All" || regions[activeRegion].includes(state))
  );

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-orange-50 to-gray-100 rounded-xl shadow-lg">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl font-bold text-orange-600 mb-2 text-center">
          Rapid Auto Shipping
        </h2>
        <p className="text-xl text-gray-700 mb-6">Serving All 50 States Across the USA</p>
        
        <div className="w-full max-w-4xl mb-8 relative">
        
        
        </div>
      </div>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
       
        
     
      </div>
      
      {filteredStates.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredStates.map((state, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg border border-gray-200 shadow p-3 flex items-center gap-2 transform transition-all hover:shadow-md hover:bg-orange-50 hover:border-orange-200"
            >
              <MapPin size={16} className="text-orange-500 flex-shrink-0" />
              <span className="font-medium text-sm">{state}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No states match your search criteria
        </div>
      )}
      
      <div className="mt-8 text-center text-gray-600 text-sm">
        <p>Professional vehicle shipping services to and from every corner of the United States</p>
      </div>
    </div>
  );
};

export default USAStates;