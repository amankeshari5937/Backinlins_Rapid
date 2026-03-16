import Link from "next/link";


const FeaturesSection = () => {
  return (
    <div className=" container mx-auto p-6 space-y-6  mt-10">
      <h2 className="text-4xl font-bold text-center">
        OUR OTHER<span className="text-rapidcolor"> FEATURES</span>
      </h2>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          CUSTOMER SUPPORT IS AVAILABLE 24*7
        </h3>
        <p className="text-xl">
          We may be reached via phone or Live Chat whenever you need us. Because
          we have our finger on the pulse, our door-to-door automobile
          transportation services are dependable. We keep an eye on your
          shipment and make sure we're available at all times.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">CANCELLATION WITHOUT CHARGE</h3>
        <p className="text-xl">
          If you cancel your order before we assign a carrier to pick up your
          vehicle, there are no charges. You can cancel once we've assigned a
          carrier, but we'll keep the non-refundable small partial payment in
          this instance. If you plan to ship a car again in the next six months,
          you can use the deposit.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">COMPLETE COVERAGE BY INSURANCE</h3>
        <p className="text-xl">
          Insurance is required, especially if you're exporting a high-value
          vehicle. Most of the time, the insurance included in the shipment cost
          is insufficient. Auto carriers must carry property damage insurance.
          We provide gap insurance, ensuring your vehicle is fully covered
          during transit.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          TRANSPORT SERVICES FOR INOPERABLE VEHICLES
        </h3>
        <p className="text-xl">
          If you have a non-functional vehicle taking up space and are unsure
          what to do with it, we provide inoperable vehicle transportation
          services to help you move or remove it.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          SHIPPING OPTIONS THAT ARE EASY TO USE
        </h3>
        <p className="text-xl">
          We offer multiple shipping methods to match your timeframe and budget,
          ensuring maximum convenience.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">DELIVERY ON TIME</h3>
        <p className="text-xl">
          Delivery is available 24/7 to your doorstep. Some deliveries take up
          to seven days. Contact us for an estimated delivery time.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">GET A FREE QUOTE</h3>
        <p className="text-xl">
          Rapid Auto Shipping offers free quotes instantly to transport your car
          anywhere in the country.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          FULLY CUSTOMIZABLE AND PERSONAL SERVICE
        </h3>
        <p className="text-xl">
          We offer fully customizable door-to-door car transport services,
          ensuring personalized assistance throughout the process.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">SOME SPECIAL DISCOUNTS</h3>
        <p className="text-xl">
          We offer discounts to seniors, students, and U.S. military members.
          Seasonal offers are also available. you can find <Link href="/deals" className="text-rapidcolor font-bold">discounts here !</Link>
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">HASSLE-FREE</h3>
        <p className="text-xl">
          We simplify the vehicle shipment process, starting with a free auto
          shipping quote.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          SERVICE THAT IS COMPLETELY CUSTOMIZABLE AND PERSONAL
        </h3>
        <p className="text-xl">
          Our consultants work with you to ensure a fully customized car
          transportation service that meets your needs.
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
