import React from 'react';
import Link from 'next/link';

export default function CarShippingRates() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="container px-2 md:px-20 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="border-l-4 border-rapidcolor pl-4 mb-6">
        <h3 className="text-3xl font-bold text-gray-800">Budget-Friendly Car Shipping Rates – Get Started Today!</h3>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
       <span className='font-[600]'> Rapid Auto Shipping</span> is one of the best auto shipping company in the USA, we have earned our success by serving our clients fairly, so we believe our <span className='font-[600]'>auto shipping cost</span> should be straightforward and budget friendly with no hidden charges and no upfront payment. That's why we offer:
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-orange-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-rapidcolor text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="ml-4 text-xl font-bold text-gray-800">Instant Quotes</h4>
          </div>
          <p className="text-gray-700">
            Our instant online quote calculator gives you a fast and accurate estimate for shipping your vehicle anywhere in the country<span className="font-bold">.</span> Get a free, no-obligation estimate in seconds that's reasonable and budget-friendly, so that you can check prices and pick the best choice.
          </p>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-rapidcolor text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="ml-4 text-xl font-bold text-gray-800">Transparent Pricing</h4>
          </div>
          <p className="text-gray-700">
            Transparency is one of our key business ethics, which is reflected in our pricing too. We provide our customers with a clear, upfront, and accurate <span className="font-bold">vehicle shipping quote</span> that includes all fees and surcharges, with no hidden costs or surprises—what you see is what you pay.
          </p>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-rapidcolor text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="ml-4 text-xl font-bold text-gray-800">Flexible Payment</h4>
          </div>
          <p className="text-gray-700">
            Our flexible payment method makes car transportation, especially over long distances, more affordable to our customers. We are a <span className="font-bold">car hauler</span> with a difference.<span className="font-bold"> No upfront payment</span> required; pay only when your car is picked up, and the balance can be paid upon the final delivery of the car.
          </p>
        </div>
      </div>
      
      <div className="mt-8 mb-6 text-center">
        <p className="text-lg text-gray-700 mb-4">Ready to find out how much it costs to ship a car? Use our easy auto shipping quote calculator</p>
        <Link href={`/`} onClick={handleClick}> <div className="bg-white p-6">
  <button className="bg-rapidcolor  text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
    Grab Your Free Quote Today!
  </button>
</div>
        </Link>
      </div>
    </div>
  );
}