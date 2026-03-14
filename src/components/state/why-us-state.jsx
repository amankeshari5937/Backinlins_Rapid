export default function WhyUs_state({ data }) {
  return (
    <>
      <h2 className="container mx-auto text-2xl md:text-5xl text-center font-bold text-gray-900 px-4">
        {" "}
        Why choose <span className="text-rapidcolor">
          {data?.state_name}
        </span>{" "}
        Auto Transport experts?
      </h2>
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between container mx-auto lg:p-[1.25rem] bg-white min-h-[600px] w-full ">
        {/* Text Section */}
        <div className="w-full md:w-3/5 space-y-6 px-3 md:px-0">
          <div>
            <div className="text-2xl md:text-6xl font-bold text-gray-900"></div>
          </div>

          {[
            {
              title: "Experience You Can Trust",
              text: `With over a decade of experience in the auto shipping industry, Rapid Auto Shipping, as one of the top-rated ${data?.state_name} car shipping companies, has built a reputation for reliability and excellence in shipping a car to and from ${data?.state_name}. We’ve handled thousands of vehicle shipments, and our team of professionals knows how to make the process seamless and efficient.`,
            },
            {
              title: "Damage-Free Carrier Insurance",
              text: "We know how much your vehicle means to you. That’s why we include damage-free carrier insurance with every shipment, ensuring your car is fully protected throughout the transportation process.",
            },
            {
              title: "Personalized Service",
              text: "Whether you're shipping your antique vehicle, a dealer transporting multiple cars, or someone who bought a car online, we offer customized shipping solutions that suit your needs.",
            },
            {
              title: "Reasonable and Transparent Pricing",
              text: `Transparent rates and exclusive discounts make us a top choice for ${data?.state_name} car shippers. You'll receive an accurate and fair quote for your vehicle so you can plan your shipment budget without surprises.`,
            },
            {
              title: "Flexible Transport Options",
              text: `We offer open and enclosed car shipping to or from ${data?.state_name} to accommodate different types of vehicles. Our open carriers are the most common and cost-effective choice, while our enclosed carriers provide extra protection for luxury, classic, and exotic cars.`,
            },
          ].map((item, index) => (
            <div key={index} className="items-start gap-3 w-full">
              <div className="w-full flex justify-centet items-center gap-2 text-center">
                <div className="bg-rapidcolor h-[3px] w-[3%]"></div>
                <h3 className="text-lg text-start md:text-xl font-semibold w-[97%] text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-lg text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="w-full md:w-2/5 flex justify-center mt-0 md:mt-20 bg-gray-500 h-[600px] rounded-lg overflow-hidden">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742465397/rapid-home/why-us.webp"
            className="w-full h-full object-cover"
            alt="Why Choose Rapid Auto Shipping – trusted nationwide car transport services in the USA"
          />
        </div>
      </div>
    </>
  );
}
