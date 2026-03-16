import { useState, useEffect } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-5">
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-rapidcolor transition-all duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-md font-bold text-black">{progress}%</p>
    </div>
  );
};

export default Loader;