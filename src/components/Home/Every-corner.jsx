import React, { useState, useEffect } from 'react';
import { MapPin, Truck, Shield, Clock, ChevronRight, Star } from 'lucide-react';

const AutoTransportComponent = () => {
  const primaryColor = '#ff5722'; // New orange color as requested
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animation for elements to fade in
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Popular routes data
  const popularRoutes = [
    { from: 'Los Angeles', to: 'New York', days: '7-10', price: '$1,199' },
    { from: 'Chicago', to: 'Miami', days: '5-7', price: '$899' },
    { from: 'Dallas', to: 'Seattle', days: '6-8', price: '$999' },
    { from: 'Boston', to: 'San Diego', days: '8-10', price: '$1,299' }
  ];

  // Testimonials data
  const testimonials = [
    { name: 'Alex Johnson', location: 'Texas', rating: 5, text: 'Shipped my SUV from Houston to Denver without a hitch. The tracking feature gave me peace of mind throughout the journey.' },
    { name: 'Sarah Miller', location: 'Florida', rating: 5, text: "As a snowbird, I've used many auto transport services. This is by far the most reliable and transparent company I've worked with." },
    { name: 'David Chen', location: 'California', rating: 4, text: 'Professional service from start to finish. My classic car arrived in perfect condition, just as promised.' }
  ];

  return (
    <div className="min-h-screen py-10 my-10 font-sans bg-gray-50">
      {/* Hero Section with Animation */}
      {/* <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-grid-white/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 relative z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nationwide Auto Transport You Can <span style={{ color: primaryColor }}>Trust</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              From coast to coast, we deliver vehicles safely, on time, and at competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 py-4 rounded-lg font-bold text-white transition-all"
                style={{ backgroundColor: primaryColor }}
              >
                Get a Free Quote
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-all">
                Track Shipment
              </button>
            </div>
          </div>
        </div>

        
        <div className="hidden md:block absolute bottom-0 right-0 transform translate-x-1/4">
          <Truck size={400} color="rgba(255,255,255,0.05)" />
        </div>
      </section> */}
{/* 
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div style={{ color: primaryColor }} className="mb-4">
                <Truck size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Coverage</h3>
              <p className="text-gray-600">
                We ship to all 50 states, including remote locations like Alaska and Hawaii.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div style={{ color: primaryColor }} className="mb-4">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                Every shipment is covered with comprehensive insurance for your peace of mind.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div style={{ color: primaryColor }} className="mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                We pride ourselves on reliable scheduling and punctual service.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section with Hover Effects */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Auto Shipping to Every Corner of the USA
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: primaryColor }}></div>
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            From Washington D.C. and Miami in the east to Los Angeles and San Francisco in the west, 
            New York and Chicago in the north to Atlanta and New Orleans in the south, 
            our nationwide car shipping services cover the entire country.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Car Shipping Texas', 
                desc: 'Move your vehicle to or from the Lone Star State with ease.',
                icon: <MapPin size={24} />
              },
              { 
                title: 'Auto Transport Florida', 
                desc: 'Perfect for snowbirds or permanent relocations.',
                icon: <MapPin size={24} />
              },
              { 
                title: 'Vehicle Shipping California', 
                desc: 'From San Diego to San Francisco, we cover it all.',
                icon: <MapPin size={24} />
              },
              { 
                title: 'Car Shipping New York', 
                desc: 'Fast transport to or from the Big Apple.',
                icon: <MapPin size={24} />
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 w-1 h-full transition-all group-hover:w-full opacity-10 group-hover:opacity-5" 
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div className="mb-3" style={{ color: primaryColor }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center font-medium transition-colors"
                  style={{ color: primaryColor }}
                >
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

     
   

      {/* Remote Destinations Call to Action */}
    
    </div>
  );
};

export default AutoTransportComponent;