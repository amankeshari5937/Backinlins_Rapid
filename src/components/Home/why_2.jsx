import React from 'react';
import { Phone, Truck, Shield, Star, MapPin, Clock } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Why_2() {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container px-2 md:px-10 mx-auto p-6 font-sans bg-gray-50">
      {/* Header - Updated with gradient background and better spacing */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-xl p-10 mb-12 text-white relative overflow-hidden">
        <div className="absolute opacity-10 right-0 bottom-0">
          <Truck size={220} />
        </div>
        <div className="relative z-10">
          <h3 className="text-4xl font-bold mb-6 leading-tight">What Makes Rapid Auto Shipping Unique?</h3>
          <div className="mt-6">

          </div>
        </div>
      </div>

      {/* Features Section - Redesigned with better visual hierarchy */}
      <div className="flex flex-col lg:flex-row gap-6 w-full pb-10 ">
        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 border-b-4 border-orange-500 flex-1">
          <div className="inline-flex items-center justify-center p-4 bg-orange-100 rounded-full mb-6">
            <Shield className="text-orange-500" size={32} />
          </div>
          <h4 className="text-2xl font-bold mb-4 text-gray-800">Unmatched Expertise</h4>
          <p className="text-gray-700">
            With more than 14 years in shipping services, we have attained a high level of skill, experience, and knowledge. We've mastered the art of <strong>vehicle transport</strong>. From <strong>motorcycle shipping</strong> to <strong>heavy equipment transport</strong>. Our team can handle any type of shipment with care and professionalism, from luxury cars to those needing specialized transport methods, along with expertise in ensuring the vehicle's safety and reaching its destination in the best condition.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 border-b-4 border-orange-500 flex-1">
          <div className="inline-flex items-center justify-center p-4 bg-orange-100 rounded-full mb-6">
            <Phone className="text-orange-500" size={32} /> 
          </div>
          <h4 className="text-2xl font-bold mb-4 text-gray-800">Customer-First Approach</h4>
          <p className="text-gray-700">
            We're not a 9-5 team, we're available 24/7 to answer your questions, provide updates, and ensure your <strong>car shipping</strong> experience is smooth from start to finish. Call us anytime at [1-833-233-4447] or email [info@rapidautoshipping.com] for any queries, updates, and or shipping needs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 border-b-4 border-orange-500 flex-1">
          <div className="inline-flex items-center justify-center p-4 bg-orange-100 rounded-full mb-6">
            <MapPin className="text-orange-500" size={32} />
          </div>
          <h4 className="text-2xl font-bold mb-4 text-gray-800">Cutting-Edge Technology</h4>
          <p className="text-gray-700">
            Track your shipment in real-time. Our trucks have GPS installed, and our customers can contact our drivers for an update. Get instant <strong>auto shipping quotes</strong>, and schedule pickups online through email and our online portal—all with our user-friendly tools designed to save you time.
          </p>
        </div>
      </div>

      {/* Call to Action - Enhanced with more visual appeal */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden shadow-lg border border-blue-200">
        {/* Top ribbon */}
        <div className="bg-orange-500 h-3 w-full"></div>

        <div className="p-8">
          {/* Header with icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-500 p-3 rounded-full">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Ready to Ship Your Car? Let's Get Started!</h3>
          </div>

          {/* Main content */}
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 mb-6">
            <p className="text-gray-700 text-lg">
              Whether you're relocating, selling a car, or moving your prized possession, Rapid Auto Shipping is here to make <span className="font-bold text-orange-600">auto transport</span> fast, easy, and affordable. From <span className="font-bold text-orange-600">car shipping Texas</span> to <span className="font-bold text-orange-600">auto transport Florida</span>, we deliver exceptional service every time. Don't wait— <span className="font-bold text-orange-600">transport your car across the country</span> by getting your free quote now and experience the best in <span className="font-bold text-orange-600">nationwide car shipping</span>.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href={`/`} onClick={handleClick}>
              <button className="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg flex items-center gap-2">
                <span>Get Your Free Quote</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}