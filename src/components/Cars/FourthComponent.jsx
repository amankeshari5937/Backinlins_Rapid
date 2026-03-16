import React from "react";
import PropTypes from "prop-types";

const FourthComponent = ({ data }) => {
  console.log("FourthComponent data:", data); // Debug: Log the data prop

  return (
    <div className="container mx-auto p-6 space-y-12 mt-20">
      <h2 className="text-2xl lg:text-5xl font-bold text-black mb-4 text-center">
        Preparing for {data?.company_name} Auto Transport
      </h2>
      <p className="text-gray-600 mb-6 text-lg md:text-xl text-center md:text-left md:mx-5">
        Rapid Auto Shipping's {data?.company_name} car shipping process is
        designed to give you a cherished transport experience. From initial
        planning to the final delivery, our shipping process makes transporting
        your car a stress-free affair. It starts with your inquiry, after this,
        we design a tailored shipping for you. The next step is preparing your
        car, and then we pick it up. The last step of the process is its safe
        journey and delivery.
      </p>

      {/* Section 1 */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12">
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746875136/cars/Reduce-Fuel-Levels.webp"
            className="w-full max-w-[500px] h-auto"
            alt="Reduce Fuel Levels Before Auto Transport – Vehicle Shipping Preparation Tip"
            width={500} // Explicit width (adjust based on actual image size)
            height={300} // Explicit height (adjust based on actual image size)
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-[60%] text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4">Reduce Fuel Levels</h3>
          <p className="text-gray-700 text-xl">
            An important aspect of preparing your {data?.company_name} car before shipping
            is to reduce its fuel level to a quarter tank. This lightens the
            weight of the car, which prevents potential fire hazards and also
            helps in weight management, reducing shipping costs.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-20">
        <div className="w-full md:w-[60%] text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4">
            Remove External Accessories
          </h3>
          <p className="text-gray-700 text-xl">
            Before shipping your {data?.company_name}, be sure to remove all external
            accessories such as antennas, roof racks, and spoilers. Removing
            these items helps prevent damage during transit, reduces the risk of
            loss, and ensures a smoother, safer shipping experience overall.
          </p>
        </div>
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746875208/cars/Remove-External-Accessories.webp"
            alt="Remove External Accessories – Prepare Your Vehicle for Safe Auto Transport"
            className="w-full max-w-[500px] h-auto"
            width={500} // Explicit width (adjust based on actual image size)
            height={300} // Explicit height (adjust based on actual image size)
            loading="lazy"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 mt-20">
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746875266/cars/Clean-and-Document-Your-Vehicle%27s-Condition.webp"
            alt="Clean and Document Your Vehicle's Condition – Pre-Shipping Inspection Checklist"
            className="w-full max-w-[500px] h-auto"
            width={500} // Explicit width (adjust based on actual image size)
            height={300} // Explicit height (adjust based on actual image size)
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-[60%] text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4">
            Clean and Document Your Vehicle's Condition
          </h3>
          <p className="text-gray-700 text-xl">
            Clean your {data?.company_name} and park it in an open place. Then, take photos
            and videos of the car from different perspectives. Document your
            car's condition, as it will serve as evidence in case of disputes
            regarding the vehicle's condition upon delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

FourthComponent.propTypes = {
  data: PropTypes.shape({
    company_name: PropTypes.string,
    content_3: PropTypes.string,
    reduce_content: PropTypes.string,
    remove_content: PropTypes.string,
  }),
};

export default FourthComponent;
