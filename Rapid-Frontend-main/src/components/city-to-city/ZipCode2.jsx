import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const ZipTable2 = ({ data }) => {
  const [transportData, setTransportData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});

  // Fallback data if no dynamic data is provided
  const fallbackData = [
    {
      city: "Blue Springs Auto Transport",
      zipCodes: "64014, 64015, 64029, 64057, 64064, 64086 & surrounding areas",
    },
    {
      city: "Cape Girardeau Vehicle Shipping",
      zipCodes: "63701, 63703, 63755, 63780 & surrounding areas",
    },
    {
      city: "Chesterfield Auto Transport",
      zipCodes: "63005, 63011, 63017, 63141, 63146 & surrounding areas",
    },
    {
      city: "Columbia Vehicle Shipping",
      zipCodes: "65201, 65202, 65203, 65215 & surrounding areas",
    },
    {
      city: "Florissant Auto Transport",
      zipCodes: "63031, 63032, 63033 & surrounding areas",
    },
    {
      city: "Independence Vehicle Shipping",
      zipCodes:
        "64015, 64016, 64050, 64052, 64053, 64054, 64055, 64056, 64057, 64058, 64120, 64133, 64136, 64161 & surrounding areas",
    },
    {
      city: "Jefferson City Auto Transport",
      zipCodes: "65043, 65101, 65109, 65111 & surrounding areas",
    },
    {
      city: "Joplin Vehicle Shipping",
      zipCodes: "64801, 64804, 64870 & surrounding areas",
    },
    {
      city: "Kansas City Auto Transport",
      zipCodes:
        "64012, 64030, 64052, 64053, 64055, 64064, 64068, 64079, 64081, 64082, 64101, 64102, 64105, 64106, 64108, 64109, 64110, 64111, 64112, 64113, 64114, 64116, 64117, 64118, 64119, 64120, 64123, 64124, 64125, 64126, 64127, 64129, 64130, 64131, 64132, 64133, 64134, 64136, 64137, 64138, 64139, 64145, 64146, 64147, 64149, 64150, 64151, 64152, 64153, 64154, 64155, 64156, 64157, 64158, 64161, 64163, 64164, 64165, 64166, 64167, 64192 & surrounding areas",
    },
    {
      city: "St. Charles Vehicle Shipping",
      zipCodes: "63301, 63303, 63376 & surrounding areas",
    },
    {
      city: "St. Joseph Auto Transport",
      zipCodes: "64501, 64503, 64504, 64505, 64506, 64507 & surrounding areas",
    },
    {
      city: "St. Louis Vehicle Shipping",
      zipCodes:
        "63101, 63102, 63103, 63104, 63105, 63106, 63107, 63108, 63109, 63110, 63111, 63112, 63113, 63115, 63116, 63117, 63118, 63119, 63120, 63123, 63125, 63130, 63133, 63136, 63137, 63139, 63143, 63147, 63155 & surrounding areas",
    },
    {
      city: "St. Peters Auto Transport",
      zipCodes: "63301, 63303, 63304, 63366, 63376 & surrounding areas",
    },
    {
      city: "Springfield Vehicle Shipping",
      zipCodes:
        "65619, 65714, 65721, 65742, 65757, 65802, 65803, 65804, 65806, 65807, 65809, 65810 & surrounding areas",
    },
    {
      city: "Wentzville Auto Transport",
      zipCodes: "63348, 63367, 63385 & surrounding areas",
    },
  ];

  // Process data when component mounts or data changes
  useEffect(() => {
    if (data?.to_zipcode) {
      const formattedData = data.to_zipcode.map((item) => ({
        city: item.city || "Unknown City", // Fallback for missing city
        zipCodes: item.zip_code || "", // Fallback for missing or undefined zip_code
      }));
      setTransportData(formattedData);
    } else {
      setTransportData(fallbackData); // Use fallback data if no dynamic data
    }
  }, [data]);

  const toggleExpand = (index) => {
    setExpandedRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="px-8 mt-20 max-w-7xl mx-auto">
      <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-center">
        Popular Auto Transportation Cities In{" "}
        <span className="text-rapidcolor">{data?.to}</span>
      </h2>
      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full border-collapse border border-gray-300 shadow-lg"
      >
        <thead>
          <tr className="bg-gray-800 text-white"></tr>
        </thead>
        <tbody>
          {(showAll ? transportData : transportData.slice(0, 8)).map(
            (item, index) => {
              // Ensure zipCodes is a string before splitting; default to empty string if not
              const zipCodesString =
                typeof item.zipCodes === "string" ? item.zipCodes : "";
              const zipLines = zipCodesString.split(", ");
              const displayZips = expandedRows[index]
                ? zipLines
                : zipLines.slice(0, 15);
              return (
                <motion.tr
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="p-3 font-medium w-1/3">{item.city}</td>
                  <td className="p-3 text-gray-600">
                    {displayZips.join(", ")}{" "}
                    {zipLines.length > 15 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-blue-500 ml-2"
                      >
                        {expandedRows[index] ? "See Less" : "See More"}
                      </button>
                    )}
                  </td>
                </motion.tr>
              );
            },
          )}
        </tbody>
      </motion.table>
      {!showAll && transportData.length > 8 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-8 rounded"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ZipTable2;
