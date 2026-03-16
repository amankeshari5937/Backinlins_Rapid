import React, { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  // Stats data
  const statItems = [
    {
      value: 14,
      label: "Years",
      suffix: " Yr",
      description: "In the business",
    },
    { value: 459, label: "K", suffix: "K", description: "Quotes" },
    { value: 72, label: "K", suffix: "K", description: "Vehicles Shipped" },
    {
      value: 4.8,
      label: "/5",
      suffix: "/5",
      description: "Overall Rating",
      decimals: 1,
    },
  ];

  // Custom intersection observer hook
  const useOnScreen = (options = {}) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce) {
            observer.disconnect();
          }
        }
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.disconnect();
        }
      };
    }, [options.triggerOnce, options.threshold]);

    return [ref, isVisible];
  };

  // Custom count up hook
  const useCountUp = (
    end,
    duration = 2000,
    start = 0,
    isVisible = false,
    decimals = 0
  ) => {
    const [count, setCount] = useState(start);
    const countRef = useRef(start);
    const timeRef = useRef(null);

    useEffect(() => {
      if (!isVisible) return;

      const startTime = Date.now();
      const endTime = startTime + duration;
      const totalChange = end - start;

      const updateCount = () => {
        const now = Date.now();
        const remaining = Math.max(endTime - now, 0);
        const progress = 1 - remaining / duration;

        const nextCount = start + totalChange * progress;

        if (progress < 1) {
          countRef.current = nextCount;
          setCount(nextCount);
          timeRef.current = requestAnimationFrame(updateCount);
        } else {
          countRef.current = end;
          setCount(end);
        }
      };

      timeRef.current = requestAnimationFrame(updateCount);

      return () => {
        if (timeRef.current) {
          cancelAnimationFrame(timeRef.current);
        }
      };
    }, [start, end, duration, isVisible]);

    return decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString();
  };

  // Animation utilities
  const useFadeInAnimation = (delay = 0) => {
    const [opacity, setOpacity] = useState(0);
    const [transform, setTransform] = useState("translateY(20px)");

    useEffect(() => {
      const timer = setTimeout(() => {
        setOpacity(1);
        setTransform("translateY(0)");
      }, delay);

      return () => clearTimeout(timer);
    }, [delay]);

    return {
      opacity,
      transform,
      transition: `all 0.5s ease-out ${delay}ms`,
    };
  };

  const [ref, isVisible] = useOnScreen({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="relative w-full h-auto py-24 md:py-36 flex text-center text-white">
      {/* Background Image */}
      <img
        src="/images/new-2.webp" // Change this to your image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-out",
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
          {statItems.map((stat, index) => {
            const animationStyle = useFadeInAnimation(index * 200);
            const countValue = useCountUp(
              stat.value,
              2500,
              0,
              isVisible,
              stat.decimals || 0
            );

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105 group"
                style={animationStyle}
              >
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gray-400 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="flex justify-center items-center">
                  <h3 className="text-5xl md:text-6xl font-bold text-white text-center">
                    {countValue}
                    <span>{stat.suffix}</span>
                  </h3>
                </div>

                <div className="w-16 h-1 bg-rapidcolor mx-auto my-3 group-hover:w-24 transition-all duration-300"></div>

                <p className="text-xl md:text-2xl font-medium text-blue-100 mt-2 text-center">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
