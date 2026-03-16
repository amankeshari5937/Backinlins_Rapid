import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const ZipTable = ({ data }) => {
  const [fromTransportData, setFromTransportData] = useState([]);
  const [toTransportData, setToTransportData] = useState([]);
  const [showAllFrom, setShowAllFrom] = useState(false);
  const [showAllTo, setShowAllTo] = useState(false);
  const [expandedRowsFrom, setExpandedRowsFrom] = useState({});
  const [expandedRowsTo, setExpandedRowsTo] = useState({});

  // Fallback data
  // const fallbackData = {
  //   from: [
  //     {
  //       city: "Anaheim",
  //       zipCodes: "90620, 90621, 92801, 92802, 92804, 92805, 92806, 92807",
  //     },
  //     {
  //       city: "Bakersfield",
  //       zipCodes: "93203, 93220, 93301, 93303, 93304, 93305, 93306, 93307",
  //     },
  //   ],
  //   to: [
  //     {
  //       city: "Houston",
  //       zipCodes: "77002, 77003, 77004, 77005, 77006, 77007, 77008, 77009",
  //     },
  //     {
  //       city: "Dallas",
  //       zipCodes: "75201, 75202, 75203, 75204, 75205, 75206, 75207, 75208",
  //     },
  //   ],
  // };

  // Process data
  useEffect(() => {
    // From data
    if (data?.from_zipcode?.length > 0) {
      const formattedFromData = data.from_zipcode.map((item) => ({
        city: item.city || "Unknown City",
        zipCodes: item.zip_code || "",
      }));
      setFromTransportData(formattedFromData);
    } else {
      setFromTransportData(fallbackData.from);
    }

    // To data
    if (data?.to_zipcode?.length > 0) {
      const formattedToData = data.to_zipcode.map((item) => ({
        city: item.city || "Unknown City",
        zipCodes: item.zip_code || "",
      }));
      setToTransportData(formattedToData);
    } else {
      setToTransportData(fallbackData.to);
    }
  }, [data]);

  // Toggle row expansion
  const toggleExpand = (index, type) => {
    if (type === "from") {
      setExpandedRowsFrom((prev) => ({ ...prev, [index]: !prev[index] }));
    } else {
      setExpandedRowsTo((prev) => ({ ...prev, [index]: !prev[index] }));
    }
  };

  // Reusable table renderer
  const renderTable = ({
    heading,
    transportData,
    showAll,
    setShowAll,
    expandedRows,
    type,
  }) => (
    <div className="px-4 lg:px-8 mt-8 lg:mt-20 w-full md:w-1/2">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
        {heading}
      </h2>
      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full border-collapse border border-gray-300 shadow-lg"
      >
        <thead>
        
        </thead>
        <tbody>
          {(showAll ? transportData : transportData.slice(0, 8)).map(
            (item, index) => {
              const zipCodesString =
                typeof item.zipCodes === "string" ? item.zipCodes : "";
              const zipLines = zipCodesString.split(", ").filter(Boolean);
              const displayZips = expandedRows[index]
                ? zipLines
                : zipLines.slice(0, 15);
              return (
                <motion.tr
                  key={`${type}-${index}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
           
                  <td className="p-3 text-gray-600">
                    {displayZips.join(", ")}
                    {zipLines.length > 15 && (
                      <button
                        onClick={() => toggleExpand(index, type)}
                        className="text-blue-500 ml-2 hover:underline focus:outline-none"
                      >
                        {expandedRows[index] ? "See Less" : "See More"}
                      </button>
                    )}
                  </td>
                </motion.tr>
              );
            }
          )}
        </tbody>
      </motion.table>
      {!showAll && transportData.length > 8 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {renderTable({
          heading: `Pickup from any Zip Code in ${
            data?.from || "Unknown Origin"
          }`,
          transportData: fromTransportData,
          showAll: showAllFrom,
          setShowAll: setShowAllFrom,
          expandedRows: expandedRowsFrom,
          type: "from",
        })}
        {renderTable({
          heading: `Delivery to any Zip Code in ${
            data?.to || "Unknown Destination"
          }`,
          transportData: toTransportData,
          showAll: showAllTo,
          setShowAll: setShowAllTo,
          expandedRows: expandedRowsTo,
          type: "to",
        })}
      </div>
    </div>
  );
};

export default ZipTable;
