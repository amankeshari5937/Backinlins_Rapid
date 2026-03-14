import Link from "next/link";
import React from "react";
import USAStates from "./Statesmap";

const StatesTable = ({ data }) => {
  // Extract headings and optional slugs from the data prop
  const headings = data?.map((item) => ({
    heading: item.heading,
    slug: item.slug || item.heading.toLowerCase().replace(/\s+/g, "-"), // Fallback to heading-based slug
  })) || [];

  return (
    <div className="container mx-auto p-6">
      <div className="mx-auto relative text-center mt-[5%]">
        <div className="mt-8 absolute left-1/2 -translate-x-1/2 -top-20 text-[5rem] font-semibold text-gray-300">
          Shipping States
        </div>
        <h1 className="text-6xl relative z-10 font-bold text-gray-800">
          Auto Shipping States We Serve In
        </h1>
      </div>

      <div className="font-bold text-center mt-2 text-rapidcolor">
        Select your pickup state below for more information and carrier
        availability in that area.
      </div>
      <USAStates />
      <div className="overflow-x-auto">
        <table
          className="w-full border-collapse border-2 border-gray-700"
          aria-label="States we serve for auto shipping"
        >
          <tbody>
            {Array.from(
              { length: Math.ceil(headings.length / 4) },
              (_, rowIndex) => (
                <tr key={rowIndex} className="border-2 border-gray-500">
                  {headings
                    .slice(rowIndex * 4, rowIndex * 4 + 4)
                    .map((item, colIndex) => (
                      <td
                        key={colIndex}
                        className="border-2 border-gray-500 p-4 text-center transition-all duration-300 hover:bg-rapidcolor hover:text-white hover:border-rapidcolor"
                      >
                        <Link href={`/states/${item.slug}`} className="block w-full h-full">
                          {item.heading}
                        </Link>
                      </td>
                    ))}
                  {[...Array(4 - (headings.length % 4)).keys()].map((_, i) =>
                    rowIndex === Math.floor(headings.length / 4) &&
                    headings.length % 4 !== 0 ? (
                      <td
                        key={`empty-${i}`}
                        className="border-2 border-gray-500 p-4"
                      ></td>
                    ) : null
                  )}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatesTable;