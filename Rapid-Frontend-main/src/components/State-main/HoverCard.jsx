import React from "react";

const CardSection = () => {
  return (
    <>
      <div
        className="w-full  bg-cover bg-center relative flex pb-[2%]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/aircraft-caterers-airport-buses-parking-lot-near-garages_527900-339.jpg?w=900')",
        }}
      >
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        {/* Content */}
        <div className="relative w-full mx-auto container px-6 py-3">
          <div className="relative text-center mt-[5%]">
            <h3 className="mb-0 absolute left-[49.5%] -translate-x-1/2 -top-20 text-[6.5rem] font-[600] text-[rgb(250,250,250)]">
              Services
            </h3>
            <h4 className="text-6xl relative z-10 tracking-wide font-bold text-[#343633] mb-10">
              Auto Transportation Services
            </h4>
          </div>

          <div className="flex w-full gap-6 justify-between mt-10">
            {/* Left Section (3 Cards) */}
            <div className="w-[48%] flex flex-col gap-6 mt-10">
              {[
                {
                  title: "Open Car Transport",
                  desc: "Specialized transportation for military personnel and vehiclesSpecialized transportation for military personnel and vehicles",
                  img: "images/shipping.webp",
                },
                {
                  title: "Door-to-Door Transport",
                  desc: "Specialized transportation for military personnel and vehiclesSpecialized transportation for military personnel and vehicles",
                  img: "images/door-to-door.png",
                },
                {
                  title: "Expedited Shipping",
                  desc: "Specialized transportation for military personnel and vehiclesSpecialized transportation for military personnel and vehicles",
                  img: "images/shipping.webp",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-black text-lg bg-white rounded-tr-[40px] rounded-bl-[40px] flex items-center w-full shadow-lg"
                >
                  <div className="text-black bg-rapidcolor rounded-full flex justify-center items-center p-2 m-1 w-[15%] aspect-square">
                    <img
                      className="w-full h-full object-contain"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-[3px] bg-black h-full"></div>
                  <div className="p-3">
                    <h3 className="text-black text-xl font-[500] w-[80%]">
                      {item.title}
                    </h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section (3 Cards) */}
            <div className="w-[48%] flex flex-col gap-6 mt-10">
              {[
                {
                  title: "Enclosed Car Transport",
                  desc: "Specialized transportation for military personnel and vehiclesSpecialized transportation for military personnel and vehicles",
                  img: "images/enclosed.webp",
                },
                {
                  title: "Ship a car cross country",
                  desc: "Specialized transportation for military personnel and vehiclesSpecialized transportation for military personnel and vehicles",
                  img: "images/Ship-a-car-cross-country.webp",
                },
                {
                  title: "Seasonal Shipping",
                  desc: "Specialized transportation for military personnel and vehiclesSpecialized transportation for military personnel and vehicles.",
                  img: "images/snowbird-icon.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-black text-lg bg-white rounded-br-[40px] rounded-tl-[40px] flex items-center w-full shadow-lg"
                >
                  <div className="text-black bg-rapidcolor rounded-full flex justify-center items-center p-2 m-1 w-[15%] aspect-square">
                    <img
                      className="w-full h-full object-contain"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-[3px] bg-black h-full"></div>
                  <div className="p-3">
                    <h3 className="text-black text-xl font-[500] w-[80%]">
                      {item.title}
                    </h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
