import React from "react";

const Card = ({ children, className }) => (
  <div
    className={`bg-white p-4 rounded-lg shadow-3d border border-red-300 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-0 ${className}`}>{children}</div>
);

export default function VehicleShippingTips({ data }) {
  // Function to add blue color to anchor tags
  const createMarkup = (htmlContent) => {
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  const tips = [
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fill/v1742478853/city-to-city/icons/Leaks-of-Fluid.webp",
      title: "Leaks of Fluid",
      description:
        "Make sure your vehicle has no fluid leaks before transport, as leaks can cause safety issues and may lead to delays or additional charges during shipping.",
      alt: "Check for Leaks or Fluid Issues – Vehicle Prep Tip for Auto Transport",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fill/v1742478853/city-to-city/icons/Charged-Battery.webp",
      title: "Charged Battery",
      description:
        "When shipping an electric vehicle (EV), ensure the battery is adequately charged. An undercharged or inoperable EV may incur additional fees during transport.",
      alt: "Ensure a Fully Charged Battery – Car Shipping Preparation Checklist",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fill/v1742478854/city-to-city/icons/Tyre-Pressure.webp",
      title: "Tyre Pressure",
      description:
        "To prevent any issues during loading and unloading, make sure all tires are accurately inflated and your vehicle is free of any fluid leaks.",
      alt: "Check Tire Pressure – Essential Step Before City-to-City Auto Transport",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fill/v1742478854/city-to-city/icons/Turn-off-the-Alarms.webp",
      title: "Turn off the Alarms",
      description:
        "Whenever possible, please disable any car alarms to prevent accidental triggers that could disrupt the transport process and ensure a smoother, hassle-free vehicle shipment experience.",
      alt: "Turn Off Vehicle Alarms – Important Preparation Step for Auto Transport",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fill/v1742478853/city-to-city/icons/Removed-Toll-Tags.webp",
      title: "Removed Toll Tags",
      description:
        "To avoid unnecessary toll charges during transport, be sure to remove or deactivate any toll tags or electronic pass devices from your vehicle.",
      alt: "Remove Toll Tags – Prevent Unnecessary Charges During Auto Shipping",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,c_fill/v1742479148/city-to-city/icons/Mechanical-Issues.webp",
      title: "Mechanical Issues",
      description:
        "If your vehicle has any issues with starting or shifting gears, please let us know in advance. This helps ensure a smooth loading and unloading process for our operators.",
      alt: "Report Mechanical Issues – Ensure Safe and Smooth Vehicle Transport",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-5xl font-bold text-black mb-4">
        Essential Tips On Preparing The Vehicles For A Smooth Shipping
        Experience
      </h2>
      <p
        className="text-gray-700 mb-6 text-xl"
        dangerouslySetInnerHTML={createMarkup(data?.content_5 || "")}
      />
      <div className="grid gap-4">
        {tips.map((tip, index) => (
          <Card
            key={index}
            className="flex flex-col md:flex-row justify-center md:justify-start items-center p-4 md:items-start group gap-4"
          >
            <img
              src={tip.image}
              alt={tip.alt}
              className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 bg-white"
            />

            {/* Vertical line */}
            <div className="w-full h-[2px] bg-rapidcolor md:hidden"></div>
            <div className="hidden md:block bg-rapidcolor w-[2px] md:h-full"></div>

            <CardContent className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-gray-800">
                {tip.title}
              </h3>
              <p
                className="text-gray-600 text-xl"
                dangerouslySetInnerHTML={createMarkup(tip.description || "")}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}