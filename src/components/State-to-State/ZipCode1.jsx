import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const ZipTable1 = ({ data }) => {
  const [transportData, setTransportData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});

  const fallbackData = [
    { city: "Anaheim auto transport", zipCodes: "90620, 90621, 92801, 92802, 92804, 92805, 92806, 92807, 92808, 92867, 92868, 92870, 92886, 92887 & surrounding areas" },
    { city: "Bakersfield vehicle shipping", zipCodes: "93203, 93220, 93301, 93303, 93304, 93305, 93306, 93307, 93308, 93309, 93311, 93312, 93313, 93314 & surrounding areas" },
  ];

  useEffect(() => {
    if (data?.from_zipcode) {
      const formattedData = data.from_zipcode.map((item) => ({
        city: item.city,
        zipCodes: item.zip_code || "", 
      }));
      setTransportData(formattedData);
    } else {
      setTransportData(fallbackData);
    }
  }, [data]);

  const toggleExpand = (index) => {
    setExpandedRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="px-8 mt-20 max-w-7xl mx-auto">
      <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-center">
        Popular Auto Transportation Cities In {" "}
        <span className="text-rapidcolor">{data?.from}</span>
      </h2>
      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full border-collapse border border-gray-300 shadow-lg"
      >
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-3 text-left w-1/3">City</th>
            <th className="p-3 text-left">ZIP Codes</th>
          </tr>
        </thead>
        <tbody>
          {(showAll ? transportData : transportData.slice(0, 8)).map((item, index) => {
            const zipLines = typeof item.zipCodes === "string" ? item.zipCodes.split(",") : [];
            const displayZips = expandedRows[index] ? zipLines : zipLines.slice(0, 15);
            return (
              <motion.tr
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="p-3 font-medium w-1/3">{item.city}</td>
                <td className="p-3 text-gray-600">
                  {displayZips.join(", ")} {" "}
                  {zipLines.length > 15 && (
                    <button onClick={() => toggleExpand(index)} className="text-blue-500 ml-2">
                      {expandedRows[index] ? "See Less" : "See More"}
                    </button>
                  )}
                </td>
              </motion.tr>
            );
          })}
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

export default ZipTable1;