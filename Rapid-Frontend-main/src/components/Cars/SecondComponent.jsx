import React from "react";

const Transport = ({ data }) => {
  console.log("Transport data:", data);

  // Function to add blue color to anchor tags
  const createMarkup = (htmlContent) => {
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  const advantages = [
    {
      imgSrc: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,q_auto,f_webp/v1746874215/cars/Experience-and-Expertise.webp",
      title: "Experience and Expertise",
      description: `We have been shipping cars for more than 15 years. Our specialized knowledge, skill, and understanding of handling various aspects of car shipping, our ability to navigate market fluctuations and logistical challenges, are a big asset for our customers.`,
      alt: "Experienced Auto Transport Professionals with Industry Expertise",
    },
    {
      imgSrc: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,q_auto,f_webp/v1746874264/cars/Comprehensive-Insurance-Coverage.webp",
      title: "Comprehensive Insurance Coverage",
      description: `Our comprehensive insurance coverage gives you an extra layer of protection and peace of mind. Apart from your basic insurance, you also get protection from theft, fire, vandalism, or damage from weather.`,
      alt: "Comprehensive Insurance Coverage for Safe and Secure Car Shipping",
    },
    {
      imgSrc: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,q_auto,f_webp/v1746874333/cars/Real-Time-Tracking-and-Customer-Support.webp",
      title: "Real-Time Tracking and Customer Support",
      description: `Rapid Auto Shipping invests heavily in its customer support. We are available 24/7 for any updates on your ${data?.company_name} car shipping. Our real-time tracking and GPS aid you in tracking your car's movement`,
      alt: "Real-Time Vehicle Tracking and 24/7 Customer Support for Auto Transport",
    },
    {
      imgSrc: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,q_auto,f_webp/v1746874422/cars/Flexible-Transportation-Options.webp",
      title: "Flexible Transportation Options",
      description: `We offer a range of transportation services for our customers to pick and choose from as per their needs and benefits. Customers can choose from our open or enclosed carriers, multiple vehicle shipping, expedited shipping, and door-to-door pickup/delivery.`,
      alt: "Flexible Transportation Options for Customized Car Shipping Solutions",
    },
  ];

  return (
    <div className="p-1 md-p-4">
      {/* Image Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center p-1 md:p-6 container md:px-10 mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-1 text-center lg:text-left">
          <h2
            className="text-3xl md:text-3xl font-bold mb-4"
            dangerouslySetInnerHTML={createMarkup(
              `Rapid Auto Shipping Offers Premium and Reliable ${
                data?.company_name
              } Car Transport Services with Excellence`
            )}
          />
          <p
            className="text-gray-700 text-xl"
            dangerouslySetInnerHTML={createMarkup(
              data?.content_1 || "Default overview content"
            )}
          />
        </div>
        <div className="flex-1">
          <img
            src={data?.car_image}
            alt={data?.car_image_alt}
            className="w-full rounded-lg border-4 border-rapidcolor object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Advantages Section */}
      <div className="px-1 md:px-6 mt-10">
        <h3
          className="text-center text-2xl md:text-5xl font-bold mb-6"
          dangerouslySetInnerHTML={createMarkup(
            `Why Do ${
              data?.company_name || "Your Company"
            } Owners Trust Rapid Auto Shipping for All Auto Transport Services?`
          )}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container px-1 md:px-10 mx-auto">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="group p-6 border-2 shadow-lg transition-all duration-300 hover:shadow-xl border-black rounded-[50px] flex flex-col items-center text-center"
            >
              <img
                src={adv.imgSrc}
                alt={adv.alt}
                className="w-20 h-20 object-contain transition-all duration-300 grayscale group-hover:grayscale-0 mb-4"
                loading="lazy"
              />
              <h4 className="text-lg md:text-xl font-semibold text-rapidcolor mb-2">
                {adv.title}
              </h4>
              <p
                className="text-gray-700 text-sm md:text-base text-justify"
                dangerouslySetInnerHTML={createMarkup(
                  adv.description || "Default advantage description"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transport;