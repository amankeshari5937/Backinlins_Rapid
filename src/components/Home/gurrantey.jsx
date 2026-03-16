// pages/index.js
import { Link } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">


      <main className="container mx-auto px-5 py-8">
        <div className="mb-8">
          <div className="text-5xl font-bold text-navy-900">Rapid Auto Shipping</div>
          <div className="mt-2 w-[fit-content]">
            <h2 className="text-xl font-semibold text-rapidcolor uppercase tracking-wider pb-2 inline-block">
              CROSS-COUNTRY CAR SHIPPING SPECIALIST
            </h2>
            <div className="w-28 h-[4px] bg-rapidcolor mx-auto"> </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12 bg-gray-100 rounded-3xl overflow-hidden">
          <div className="p-6 md:w-3/4">
            <h3 className="text-2xl font-bold text-black mb-4">
          Our Guaranteed Auto Shipping Service Across the Country –<span className='text-rapidcolor'>Guaranteed Pick-Up </span>
            </h3>
            <p className="text-navy-800 leading-relaxed">
              You don't have to be available when we are available; rather, We offer flexible scheduling to fit your needs, so you don’t have to adjust your availability for us. Our guaranteed pickup locks in the date and time of
              your choice with expert precision-no delays, no excuses. When 
              uncertainty is unaffordable, we step in. Our premium service options, like <a href="https://rapidautoshipping.com/" className="text-rapidcolor">guaranteed pickup service</a>, full
              insurance coverage, and door-to-door delivery, are designed to give you peace of mind. We deliver
              our promises with the same precision as we deliver your car, so your vehicle arrives exactly when
              you need it.
            </p>
          </div>
          <div className="md:w-1/4">
            <div className="h-full relative">
              <Image
  src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1745243993/rapid-home/Our-Guaranteed-Auto-Shipping.webp"
  alt="Guaranteed Auto Shipping Service by Rapid Auto Shipping – Safe and Reliable Nationwide Transport"
  className="w-full h-full object-cover"
  loading="lazy"
  width={1200} // Specify the width of the image
  height={800} // Specify the height of the image
/>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-6 bg-gray-100 rounded-3xl overflow-hidden">
          <div className="p-6 md:w-3/4">
            <h3 className="text-2xl font-bold text-black  mb-4">
           When You Need to Ship Your Car Quickly – <span className='text-rapidcolor'>Our Expedited Auto Shipping Service</span>
            </h3>
            <p className="text-navy-800 leading-relaxed">
              Rapid Auto Shipping is the answer to all your <a href='https://rapidautoshipping.com'>express auto shipping</a> needs for your vehicle. We
              were founded with the motive of delivering your car rapidly, hence the name Rapid Auto Shipping.
              When time is of the essence in cases like last-minute plans, urgent relocations, and new car
              deliveries, our expedited auto transport service is perfect for such unique needs. With pickups arranged within
              1-2 business days and prioritized delivery, express auto shipping service gets your vehicle moving
              fast. So whether it is open-air car shipping or covered car transport, our process delivers it fast
              without compromising on safety of the vehicle. Trust us for fast and reliable shipping services because
              your schedule is our priority.
            </p>
          </div>
          <div className="md:w-1/4">
            <div className="h-full relative">
              <img
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_90,w_800,h_400,c_fill/v1745243998/rapid-home/Express-Auto-Shipping.webp"
                alt="Express Auto Shipping Services by Rapid Auto Shipping – Fast and Timely Vehicle Delivery"
                className="w-full h-full object-cover"
                loading='lazy'
              />  
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
