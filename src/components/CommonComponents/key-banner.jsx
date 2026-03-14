import React from 'react';
import { Phone } from 'lucide-react';
import Link from 'next/link';

function KeyBanner() {
  return (
    <>
      {/* Mobile View */}
      <section className="w-full relative block md:hidden">
        <div className="w-full h-auto">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_768,q_auto,f_webp/v1745852922/rapid-home/Begin-Your-Shipping-Journey-with-the-Best.webp"
            alt="Begin Your Shipping Journey with the Best – Trusted Auto Transport by Rapid Auto Shipping"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto flex flex-col justify-end items-center w-full pb-6">
            <div className="flex flex-col gap-4 w-full px-4">
              <Link href="tel:+18332334447" className="w-full">
                <button className="bg-rapidcolor text-base text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-3 w-full hover:bg-opacity-90 transition">
                  <Phone color="white" size={20} /> (833) 233-4447
                </button>
              </Link>
              <Link href="/calculator" className="w-full">
                <button className="bg-rapidcolor text-base text-white font-bold py-3 px-6 rounded-full w-full hover:bg-opacity-90 transition">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop View */}
      <section className="w-full relative hidden md:block">
        <div className="w-full h-auto">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1743152327/icons/Start-Shipping-With-The-Best.webp"
            alt="Start Shipping with the Best – Reliable and Professional Auto Transport Services"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto flex flex-col justify-center items-center w-full">
            <div className="flex flex-row gap-6 w-full max-w-md justify-center">
              <Link href="tel:+18332334447">
                <button className="bg-rapidcolor text-lg text-white font-bold py-3 px-8 rounded-full flex items-center gap-3 hover:bg-opacity-90 transition">
                  <Phone color="white" size={24} /> (833) 233-4447
                </button>
              </Link>
              <Link href="/calculator">
                <button className="bg-rapidcolor text-lg text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KeyBanner;