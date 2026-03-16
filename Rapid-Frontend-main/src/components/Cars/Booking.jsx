import React from 'react';
import Link from 'next/link';
import { Truck, Calendar, MapPin, Calculator } from 'lucide-react';

const BookingProcess = ({data}) => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Simple Booking Process</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">We make transporting your {data?.company_name} easy with our streamlined process</p>
        </div>
        
        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-orange-50 rounded-lg p-6 shadow-md relative border-t-4 border-orange-500">
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
            <div className="flex flex-col items-center text-center pt-4">
              <Calendar className="text-orange-500 w-12 h-12 mb-4" />
              <h3 className="font-bold text-xl mb-2">Schedule Pick-Up</h3>
              <p className="text-gray-600">Our Cargo-Loading Overseer ensures quality service while tracking your shipment from start to finish.</p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-orange-50 rounded-lg p-6 shadow-md relative border-t-4 border-orange-500">
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
            <div className="flex flex-col items-center text-center pt-4">
              <Truck className="text-orange-500 w-12 h-12 mb-4" />
              <h3 className="font-bold text-xl mb-2">Transport Your {data?.company_name}</h3>
              <p className="text-gray-600">Our professional drivers and crane operators work together to ensure timely and safe delivery.</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-orange-50 rounded-lg p-6 shadow-md relative border-t-4 border-orange-500">
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
            <div className="flex flex-col items-center text-center pt-4">
              <MapPin className="text-orange-500 w-12 h-12 mb-4" />
              <h3 className="font-bold text-xl mb-2">Door-Step Delivery</h3>
              <p className="text-gray-600">Our Logistics Manager ensures clear communication and efficient resource allocation for a smooth delivery.</p>
            </div>
          </div>
        </div>
        
        {/* Cost Calculator Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-8 shadow-lg flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Calculate Your Transport Cost</h3>
            <p className="text-orange-50">Get an instant estimate for shipping your {data?.company_name} using our cost calculator</p>
          </div>
          <Link href="/services/car-shipping-calculator" className="inline-flex items-center bg-white text-orange-600 font-bold py-3 px-6 rounded-full shadow-md hover:bg-orange-50 transition duration-200">
            <Calculator className="mr-2 w-5 h-5" />
            Cost Calculator
          </Link>
        </div>
        
        {/* Progress Tracker */}
    

    
      </div>
    </div>
  );
};

export default BookingProcess;