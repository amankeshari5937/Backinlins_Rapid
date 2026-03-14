import React from "react";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";

const DynamicStepper = ({
  status = 1,
  steps = [
    { title: "Step 1", description: "Complete your profile" },
    { title: "Step 2", description: "Verify your documents" },
    { title: "Step 3", description: "Review and submit" },
  ],
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 md:py-8 px-2 overflow-x-auto">
      {/* Horizontal layout for all screen sizes with scroll on small screens */}
      <div className="flex items-center justify-between min-w-max">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Circle with Icon */}
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  index + 1 < status
                    ? "bg-indigo-800 text-white"
                    : index + 1 === status
                    ? "bg-blue-900 text-white animate-pulse"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index + 1 < status ? (
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                ) : (
                  <Circle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                )}
              </div>

              {/* Step Title */}
              <h3
                className={`mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-medium ${
                  index + 1 <= status ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {step.title}
              </h3>

              {/* Step Description */}
              <p
                className={`mt-0.5 sm:mt-1 text-xs md:text-sm text-center w-16 sm:w-24 md:w-32 ${
                  index + 1 <= status ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {step.description}
              </p>
            </div>

            {/* Connector Line (except after last step) */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-1 sm:mx-2 md:mx-4 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
                <div
                  className="absolute inset-0 bg-blue-900 transition-all duration-500 ease-in-out"
                  style={{ width: index + 1 < status ? "100%" : "0%" }}
                ></div>
                <ArrowRight
                  className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ${
                    index + 1 < status
                      ? "text-blue-900 translate-x-1 sm:translate-x-2 opacity-100"
                      : "opacity-0"
                  }`}
                  size={16}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DynamicStepper;