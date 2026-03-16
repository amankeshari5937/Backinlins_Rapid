import Link from "next/link";
import React, { useState, useMemo } from "react";
import USAStates from "./Statesmap";

const STATIC_STATES = [
  {
    heading: "Alaska Auto Transport",
    slug: "alaska",
  },
  {
    heading: "Hawaii Auto Transport",
    slug: "hawaii",
  },
];

const StatesTable = ({ data }) => {
  const [search, setSearch] = useState("");

  const headings = useMemo(() => {
    const apiStates =
      data?.map((item) => ({
        heading: item.heading,
        slug: item.slug || item.heading.toLowerCase().replace(/\s+/g, "-"),
      })) || [];

    const existingSlugs = new Set(apiStates.map((s) => s.slug));
    const uniqueStatic = STATIC_STATES.filter(
      (s) => !existingSlugs.has(s.slug),
    );

    return [...apiStates, ...uniqueStatic];
  }, [data]);

  const filtered = useMemo(
    () =>
      headings.filter((item) =>
        item.heading.toLowerCase().includes(search.toLowerCase()),
      ),
    [headings, search],
  );

  return (
    <section className="relative bg-[#f7f8fa] min-h-screen overflow-hidden">
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-rapidcolor/20 to-orange-50 opacity-60 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-slate-200 to-transparent opacity-50 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-rapidcolor mb-4">
            <span className="block w-6 h-px bg-rapidcolor" />
            Nationwide Coverage
            <span className="block w-6 h-px bg-rapidcolor" />
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Auto Shipping{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-rapidcolor">States</span>
              <span
                aria-hidden
                className="absolute bottom-1 left-0 w-full h-3 bg-rapidcolor/10 -z-10 skew-x-2"
              />
            </span>{" "}
            <br className="hidden sm:block" />
            We Serve In
          </h1>
        </div>

        {/* USA Map */}
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white mb-14">
          <USAStates />
        </div>

        {/* Search + Count */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-gray-400 font-medium">
            Showing{" "}
            <span className="text-gray-700 font-bold">{filtered.length}</span>{" "}
            states
          </p>
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search states…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400 text-lg">
            No states found for &ldquo;{search}&rdquo;
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, index) => (
              <Link
                key={index}
                href={`/states/${item.slug}`}
                className="group relative bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-rapidcolor transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover accent bar */}
                <span className="absolute left-0 top-0 h-full w-1 bg-rapidcolor scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-l-2xl" />

                {/* Icon */}
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-rapidcolor/10 group-hover:bg-rapidcolor transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-rapidcolor group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </span>

                {/* Title */}
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 leading-snug transition-colors duration-200">
                  {item.heading}
                </span>

                {/* Arrow */}
                <svg
                  className="ml-auto w-4 h-4 text-gray-300 group-hover:text-rapidcolor group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StatesTable;
