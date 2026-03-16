import Image from 'next/image';

const shipments = [
  {
    image: "/images/recent-1.jpeg",
    vehicle: "Chevrolet Tahoe",
    price: "$1,100",
    trip: "Pleasant Hill, CA To Fitchburg, WI",
    distance: "2,068.1 mi",
  },
  {
    image: "/images/recent-2.jpeg",
    vehicle: "Ford Mustang",
    price: "$1,600",
    trip: "San Diego, CA To Atlanta, GA",
    distance: "2,139.4 mi",
  },
  {
    image: "https://rapidautoshipping.com/assets/images/jeep%20(1).webp",
    vehicle: "Jeep Austin Champ",
    price: "$1,300",
    trip: "Magna, UT To Bristol, RI",
    distance: "2,388.9 mi",
  },
  {
    image: "https://rapidautoshipping.com/assets/images/Luxury%20carshipments.webp",
    vehicle: "Jaguar F-Type",
    price: "$2,289",
    trip: "San Jose, CA To Miami, FL",
    distance: "3,001 mi",
  },
];

const RecentShipments = () => {
  return (
    <div className="py-10 my-10 bg-white text-center">
      <h2 className="relative text-4xl md:text-5xl font-bold mt-4 mb-8">
        <span className="relative"> Some Of Our </span>
        <span className="text-rapidcolor"> Recent Shipments</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10">
        {shipments.map((shipment, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-4 border-2 border-rapidcolor hover:shadow-2xl transition-all"
          >
           <Image
  src={shipment.image}
  alt={shipment.vehicle}
  className="rounded-xl w-full h-52 md:h-64 object-cover"
  loading="lazy"
  width={800}
  height={256}
/>
            <div className="text-left mt-4 space-y-2">
              <p className="font-bold">Vehicle: <span className="font-normal">{shipment.vehicle}</span></p>
              <p className="font-bold">Trip: <span className="font-normal">{shipment.trip}</span></p>
              <p className="font-bold">Price: <span className="font-normal">{shipment.price}</span></p>
              <p className="font-bold">Distance: <span className="font-normal">{shipment.distance}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentShipments;