import React from "react";
import { motion } from "framer-motion";

function EightCompponent({ data }) {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-100 py-6 px-4 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 border border-rapidcolor"
        >
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 text-xl"
          >
            To start your journey from {data?.from} to {data?.to} auto
            transport, begin by making a quick phone call. Please feel free to
            reach out to our team of transport experts at{" "}
            <div className="flex gap-4 mt-2">
              {/* Call Button */}
              <a href="tel:+18332334447">
                <button className="text-rapidcolor border-2 border-rapidcolor p-2 rounded-xl font-bold">
                  +1 (833) 233-4447
                </button>
              </a>

              {/* Scroll to Quote Section Button */}
              <button
                className="text-rapidcolor border-2 border-rapidcolor p-2 rounded-xl font-bold"
                onClick={() =>
                  document
                    .getElementById("quote-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Quote
              </button>
            </div>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}

export default EightCompponent;
