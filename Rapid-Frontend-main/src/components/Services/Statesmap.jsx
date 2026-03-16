import React from "react";

const USAStates = () => {
  

  return (
    <div className="flex flex-col  md:flex-row items-center justify-start p-10 pt-0 bg-white ">
      <div className="md:w-1/3 text-left ml-10">
        <h2 className="text-3xl font-bold text-[#353535] mb-6">
          States of the USA where  <br /> we’re providing our <br /> services
        </h2>
       <ul className=" flex gap-6 list-disc ml-10">
        <li>Alabama</li><li>Alabama</li><li>Alabama</li>
       </ul>
       <ul className=" flex gap-6 list-disc ml-10">
        <li>Alabama</li><li>Alabama</li><li>Alabama</li>
       </ul>
       <ul className=" flex gap-6 list-disc ml-10">
        <li>Alabama</li><li>Alabama</li><li>Alabama</li>
       </ul>
       <ul className=" flex gap-6 list-disc ml-10">
        <li>Alabama</li><li>Alabama</li><li>Alabama</li>
       </ul>
        <p className="text-orange-500 font-semibold ml-5 mt-4 text-xl">& MORE</p>
      </div>
      <div className="md:w-2/3 mt-6 md:mt-0 flex justify-center">
        <img src="images/USA.png" alt="USA Map" className="w-[100%] h-auto md:w-[100%]" />
      </div>
    </div>
  );
};

export default USAStates;