export default function BenefitsSection() {
  const benefits = [
    {
      image: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_64,h_64,q_auto,f_webp/v1742468666/icons/zero-upfront-deposit.webp",
      title: "$0",
      subtitle: "Upfront Deposit",
      alt: "Zero Upfront Deposit – Book Auto Transport Without Advance Payment",
    },
    {
      image: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_64,h_64,q_auto,f_webp/v1742468666/icons/Guaranteed-pick-Up.webp",
      title: "Guaranteed Pick-Up",
      subtitle: "Your Choice Of Pick-Up",
      alt: "Guaranteed Vehicle Pick-Up – Reliable Scheduling for Auto Transport",
    },
    {
      image: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_64,h_64,q_auto,f_webp/v1742468666/icons/Express-shipping.webp",
      title: "Express Shipping",
      subtitle: "Reduce Transit Time",
      alt: "Express Auto Shipping – Fast and Time-Sensitive Vehicle Transport Service",
    },
    {
      image: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_64,h_64,q_auto,f_webp/v1742468667/icons/Safe-transport.webp",
      title: "Safe Transport",
      subtitle: "Full Insurance Coverage",
      alt: "Safe Auto Transport – Secure and Damage-Free Vehicle Shipping",
    },
  ];

  return (
    <div className="bg-white border-b-4 border-t-4 border-rapidcolor my-10 mx-auto group">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center justify-start lg:justify-center p-4 space-x-4">
            <div className="flex items-center justify-center grayscale group-hover:grayscale-0">
              <img src={benefit.image} alt={benefit.alt} className="w-16 h-16 object-contain" />
            </div>
            <div>
              <span className="font-semibold text-2xl text-black leading-tight">{benefit.title}</span>
              <p className="text-lg text-gray-600">{benefit.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}