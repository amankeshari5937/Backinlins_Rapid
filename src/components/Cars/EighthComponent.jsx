import React from "react";

const EighthComponent = ({ data }) => {
  // Extract toyotaModels from the data prop (assuming data.models contains the array of models)
  const toyotaModels = data?.models?.map((model) => model.model_name) || [];

  return (
    <div className="bg-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-20">
      <div className="max-w-7xl w-full">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
          Types of {data?.company_name} Models We Ship
        </div>
        <p className="text-center text-gray-700 mb-8 text-base sm:text-lg md:text-xl">
          We understand that each {data?.company_name} model has unique
          requirements, which is why we offer customized solutions to fit your
          needs. Our professional team is trained to handle all{" "}
          {data?.company_name} models, ensuring that your vehicle receives
          specialized care throughout the shipping process.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {toyotaModels.length > 0 ? (
            toyotaModels.map((model, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-2xl transition transform hover:-translate-y-2 hover:shadow-2xl border border-gray-300 shadow-lg"
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-center">
                  {model}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">No models available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EighthComponent;
