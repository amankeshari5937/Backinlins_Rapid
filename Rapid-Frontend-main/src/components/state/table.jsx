import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AutoTransportTable = ({ data }) => {
  const tableHeaders = [
    { img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_24,h_24,q_auto,f_webp/v1746796326/icons/City-to-City.webp", label: "City to City" },
    { img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_24,h_24,q_auto,f_webp/v1746796446/icons/Approximate-Distance.webp", label: "Approximate Distance" },
    { img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_24,h_24,q_auto,f_webp/v1746796513/icons/Estimate-Time.webp", label: "Estimate Time" },
    { img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_24,h_24,q_auto,f_webp/v1746796584/icons/Estimate-Price.webp", label: "Estimate Price" },
  ];


  const createMarkup = (htmlContent) => {
    // Add style to make anchor tags blue
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  useEffect(() => {
    console.log("AutoTransportTable received data:", data);
  }, [data]);

  const tableData = data?.table || [];
  const stateName = data?.state_name || "Unknown State";

  // Function to scroll to the top of the page
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto my-10 py-10 px-4 md:px-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
        Popular <span className="text-rapidcolor">{stateName}</span> Auto
        Transport Routes We Serve
      </h2>
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-black text-left text-sm md:text-lg overflow-x-hidden">
          <thead>
            <tr className="bg-gray-300 text-black h-16 md:h-20">
              {tableHeaders.map((item, idx) => (
                <th
                  key={idx}
                  className="p-3 md:p-5 border border-black text-center"
                >
                  <img
                    src={`${item.img}`}
                    alt="Icon"
                    className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2"
                    loading="lazy"
                  />
                  <span>{item.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(tableData) && tableData.length > 0 ? (
              tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-100`}
                >
                  <td className="p-2 md:p-3 border border-black text-center"
                  dangerouslySetInnerHTML={createMarkup(row.route)}>
                  </td>
                  <td className="p-2 md:p-3 border border-black text-center">
                    {row.distance || "N/A"} miles.
                  </td>
                  <td className="p-2 md:p-3 border border-black text-center">
                    {row.time || "N/A"} days
                  </td>
                  <td className="p-2 md:p-3 border border-black text-center">
                    <Link href={`/states/${data?.slug}`} onClick={handleClick}>
                      <button className="px-4 py-2 bg-rapidcolor text-white rounded-lg hover:bg-orange-500 transition-colors duration-300">
                        Get Quote
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="p-2 md:p-3 border border-black text-center"
                >
                  {Array.isArray(tableData)
                    ? "No routes available"
                    : "Error: Invalid table data format"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="text-center text-gray-700 mt-4 text-sm md:text-base">
        <strong>Note:</strong> For an accurate and customized quote, please call
        our Auto Transport Professionals now at
        <span className="font-bold text-black"> (833) 233-4447</span>.
      </p>
    </div>
  );
};

AutoTransportTable.propTypes = {
  data: PropTypes.shape({
    state_name: PropTypes.string,
    table: PropTypes.arrayOf(
      PropTypes.shape({
        route: PropTypes.string,
        distance: PropTypes.string,
        time: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }),
};

AutoTransportTable.defaultProps = {
  data: {
    state_name: "Unknown State",
    table: [],
  },
};

export default AutoTransportTable;
