export default function WhyUs() {
  return (
    <div className="flex flex-col py-10 my-10 gap-8 lg:flex-row items-center justify-between container mx-auto lg:p-[1.25rem] bg-white min-h-[600px] w-full ">
      {/* Text Section */}
      <div className="w-full lg:w-3/5  space-y-6 px-3 md:px-5 lg:px-0">
        <div className="">
          <h2 className="text-3xl md:text-5xl  font-bold text-gray-900">
            Why Choose{" "}
            <span className="text-rapidcolor">Rapid Auto Shipping</span> for
            Auto Transport?
          </h2>
        </div>

        {[
          {
            title: "Nationwide Car Shipping",
            text: "We provide hassle-free and reliable service to all 50 states of the USA, covering remote destinations as well as bustling cities alike. We have a team of real people who are 24/7 available no bots.",
          },
          {
            title: "Affordable Pricing",
            text: "Our transparent and competitive pricing system provides cost-effective transportation solutions without compromising on shipping quality. With an experience of 14 years in business",
          },
          {
            title: "Instant Online Quotes",
            text: "We offer clear and upfront vehicle shipping quotes tailored to your specific needs. Moreover we have shipped +10k vehicles. Get a free, no-obligation car shipping quote in seconds.",
          },
          {
            title: "Door-to-Door Vehicle Transport",
            text: "Avoid hassle, save time, and relax with our convenient door-to-door car shipping. Seamless pickup, smooth delivery.",
          },
          {
            title: "Fully Insured Services - No hidden fees",
            text: "Every shipment is backed by comprehensive insurance, ensuring your peace of mind. From the pickup to the delivery, your vehicle is always in safe hands. We provide Transparent, locked-in pricing without zero surprises.",
          },
          {
            title: "Experienced Drivers",
            text: "Get the best auto transport experience. Our professional and skilled drivers prioritize punctual, expedited, and safe car transportation.",
          },
        ].map((item, index) => (
          <div key={index} className="items-start gap-3 w-full">
            <div className="w-full flex items-center gap-5">
              <div className="w-[3%] bg-rapidcolor h-[4px]"></div>
              <h3 className="text-lg md:text-2xl font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
            <p className="text-xl text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
      {/* Video Section */}
      <div className="w-full lg:w-2/5 flex  justify-center mt-0 md:mt-20 bg-gray-500 h-[500px] md:h-[600px] rounded-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742465397/rapid-home/why-us.webp"
          className="w-full h-full object-cover"
          alt="Why Choose Rapid Auto Shipping – trusted nationwide car transport services in the USA"
        />
      </div>
    </div>
  );
}
