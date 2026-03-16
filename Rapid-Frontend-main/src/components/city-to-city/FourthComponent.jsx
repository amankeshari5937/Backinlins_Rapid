import React from "react";
import { Truck, ShieldCheck, Clock, MapPin, Warehouse, Wrench } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

const UniqueServiceSection = ({ data }) => {
  // Function to add blue color to anchor tags
  const createMarkup = (htmlContent) => {
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  const services = [
    {
      id: 1,
      title: "Open Auto Transport",
      description: data?.open_content,
      icon: <Truck className="h-12 w-12" />,
      color: "from-orange-500 to-red-500",
      darkColor: "bg-orange-600",
      lightColor: "bg-orange-100",
      textColor: "text-orange-600",
      borderColor: "border-orange-500",
    },
    {
      id: 2,
      title: "Enclosed Auto Transport",
      description: data?.enclosed_content,
      icon: <ShieldCheck className="h-12 w-12" />,
      link: "/enclosed-auto-transport",
      color: "from-blue-500 to-indigo-600",
      darkColor: "bg-blue-600",
      lightColor: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-500",
    },
    {
      id: 3,
      title: "Door-to-Door Auto Transport",
      description: data?.door_content,
      icon: <MapPin className="h-12 w-12" />,
      link: "/door-to-door-service",
      color: "from-emerald-500 to-green-600",
      darkColor: "bg-emerald-600",
      lightColor: "bg-emerald-100",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-500",
    },
    {
      id: 4,
      title: "Terminal-to-Terminal Auto Transport",
      description: data?.terminal_content,
      icon: <Warehouse className="h-12 w-12" />,
      link: "/terminal-to-terminal",
      color: "from-purple-500 to-violet-600",
      darkColor: "bg-purple-600",
      lightColor: "bg-purple-100",
      textColor: "text-purple-600",
      borderColor: "border-purple-500",
    },
    {
      id: 5,
      title: "Expedited Vehicle Shipping",
      description: data?.expedited_content,
      icon: <Clock className="h-12 w-12" />,
      link: "/expedited-shipping",
      color: "from-amber-500 to-yellow-600",
      darkColor: "bg-amber-600",
      lightColor: "bg-amber-100",
      textColor: "text-amber-600",
      borderColor: "border-amber-500",
    },
    {
      id: 6,
      title: "Non-Running Vehicle Transport",
      description: data?.non_running_content,
      icon: <Wrench className="h-12 w-12" />,
      link: "/non-running-vehicle-transport",
      color: "from-teal-500 to-cyan-600",
      darkColor: "bg-teal-600",
      lightColor: "bg-teal-100",
      textColor: "text-teal-600",
      borderColor: "border-teal-500",
    },
  ];

  // Group services into rows of 2
  const rows = [
    [services[0], services[1]],
    [services[2], services[3]],
    [services[4], services[5]],
  ];

  return (
    <section
      id="unique-services"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-orange-500 opacity-5"></div>
      <div className="absolute -top-12 left-1/3 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
      <div className="absolute bottom-32 -left-16 w-64 h-64 rounded-full bg-green-500 opacity-5"></div>
      <div className="absolute -bottom-20 right-1/4 w-40 h-40 rounded-full bg-purple-500 opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold uppercase tracking-wider">
            Premium Transport Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-6 mb-4">
            {data?.from} to{" "}
            {data?.to}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
              Auto Transport Service
            </span>
          </h2>
          {data?.content_4 ? (
            <p
              className="text-center text-gray-600 mb-8 text-xl"
              dangerouslySetInnerHTML={createMarkup(data.content_4)}
            />
          ) : (
            <p className="text-center text-gray-600 mb-8 text-xl">
              No content available
            </p>
          )}
        </div>
        {/* Service cards - 3 rows of 2 */}
        <div className="mt-20">
          {rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            >
              {row.map((service) => (
                <div
                  key={service.id}
                  className="relative overflow-hidden rounded-xl shadow-lg z-10"
                >
                  <div
                    className={`absolute right-0 top-0 h-full w-2 bg-gradient-to-b ${service.color}`}
                  ></div>
                  <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-gradient-to-br from-gray-200 to-gray-100"></div>

                  <div className="relative flex flex-col md:flex-row p-6 bg-white">
                    <div
                      className={`flex-shrink-0 mr-6 p-4 rounded-lg flex justify-center mb-3 items-center ${service.lightColor} ${service.textColor}`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-2">
                        {service.title} Service
                      </h3>
                      <p
                        className="text-gray-600 mb-4 relative z-10"
                        dangerouslySetInnerHTML={createMarkup(
                          service.description || "No description available."
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-orange-500 opacity-10"></div>
            <div className="absolute -left-24 -bottom-24 w-48 h-48 rounded-full bg-blue-500 opacity-10"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Transport Your Vehicle?
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Experience hassle-free state-to-state auto transport with our
                professional team and nationwide carrier network
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="/services/car-shipping-calculator"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-semibold rounded-lg shadow-lg"
                  aria-label="Get a free auto transport quote"
                >
                  Get Free Quote
                </a>
                <a
                  href="tel:+18332334447"
                  className="px-8 py-4 bg-white flex gap-3 items-center text-gray-900 text-lg font-semibold rounded-lg shadow-lg"
                >
                  <FaPhoneAlt color="green" /> (833) 233-4447
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-400">
                No obligation • Instant pricing • 100% secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueServiceSection;