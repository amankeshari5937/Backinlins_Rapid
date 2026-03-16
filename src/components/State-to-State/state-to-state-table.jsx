import Link from "next/link";
import React, { useState, useMemo } from "react";
import USAStates from "../State-main/Statesmap";

const STATIC_ROUTES = [
  {
    title: "Hawaii to California Auto Transport",
    slug: "state-to-state/hawaii-to-california",
    source: "static",
  },
  {
    title: "California to Hawaii Auto Transport",
    slug: "state-to-state/california-to-hawaii",
    source: "static",
  },
  {
    title: "Hawaii to Alabama Auto Transport",
    slug: "state-to-state/hawaii-to-alabama",
    source: "static",
  },
  {
    title: "Alabama to Hawaii Auto Transport",
    slug: "state-to-state/alabama-to-hawaii",
    source: "static",
  },
  {
    title: "Arizona to Hawaii Auto Transport",
    slug: "state-to-state/arizona-to-hawaii",
    source: "static",
  },
  {
    title: "Washington to Hawaii Auto Transport",
    slug: "washington-to-hawaii-auto-transport-service",
    source: "static_root",
  },
  {
    title: "Hawaii to New York Auto Transport",
    slug: "hawaii-to-new-york-auto-transport-service",
    source: "static_root",
  },
  {
    title: "Alaska to California Auto Transport",
    slug: "state-to-state/alaska-to-california",
    source: "static",
  },
  {
    title: "California to Alaska Auto Transport",
    slug: "state-to-state/california-to-alaska",
    source: "static",
  },
  {
    title: "Alaska to Alabama Auto Transport",
    slug: "state-to-state/alaska-to-alabama",
    source: "static",
  },
  {
    title: "Alabama to Alaska Auto Transport",
    slug: "state-to-state/alabama-to-alaska",
    source: "static",
  },
  {
    title: "Alaska to Arizona Auto Transport",
    slug: "state-to-state/alaska-to-arizona",
    source: "static",
  },
  {
    title: "Arizona to Alaska Auto Transport",
    slug: "state-to-state/arizona-to-alaska",
    source: "static",
  },
  {
    title: "Alaska to Arkansas Auto Transport",
    slug: "state-to-state/alaska-to-arkansas",
    source: "static",
  },
  {
    title: "Alaska to Colorado Auto Transport",
    slug: "state-to-state/alaska-to-colorado",
    source: "static",
  },
  {
    title: "Alaska to Connecticut Auto Transport",
    slug: "state-to-state/alaska-to-connecticut",
    source: "static",
  },
  {
    title: "Alaska to Delaware Auto Transport",
    slug: "state-to-state/alaska-to-delaware",
    source: "static",
  },
  {
    title: "Alaska to Florida Auto Transport",
    slug: "state-to-state/alaska-to-florida",
    source: "static",
  },
  {
    title: "Alaska to Idaho Auto Transport",
    slug: "state-to-state/alaska-to-idaho",
    source: "static",
  },
  {
    title: "Alaska to Illinois Auto Transport",
    slug: "state-to-state/alaska-to-illinois",
    source: "static",
  },
  {
    title: "Alaska to Indiana Auto Transport",
    slug: "state-to-state/alaska-to-indiana",
    source: "static",
  },
  {
    title: "Alaska to Iowa Auto Transport",
    slug: "state-to-state/alaska-to-iowa",
    source: "static",
  },
  {
    title: "Alaska to Kansas Auto Transport",
    slug: "state-to-state/alaska-to-kansas",
    source: "static",
  },
  {
    title: "Alaska to Kentucky Auto Transport",
    slug: "state-to-state/alaska-to-kentucky",
    source: "static",
  },
  {
    title: "Alaska to Maryland Auto Transport",
    slug: "state-to-state/alaska-to-maryland",
    source: "static",
  },
  {
    title: "New Mexico to Alaska Auto Transport",
    slug: "state-to-state/new-mexico-to-alaska",
    source: "static",
  },
];

const getHref = (state) => {
  if (state.source === "api1") return `/state-to-state/${state.slug}`;
  if (state.source === "api2") return `/${state.slug}`;
  return `/${state.slug}`;
};

const StatesTable = ({ api1Data, api2Data }) => {
  const [search, setSearch] = useState("");

  const excludedSlugs = [
    "kenworth-t680-truck-tractor",
    "texas-to-california",
    "slucalifornia-to-las-vegasg3",
  ];

  const states = useMemo(() => {
    const apiStates = [
      ...(api1Data?.map((item) => ({
        title: item.title,
        slug: item.slug,
        source: "api1",
      })) || []),
      ...(api2Data?.map((item) => ({
        title: item.title,
        slug: item.slug,
        source: "api2",
      })) || []),
    ].filter((state) => !excludedSlugs.includes(state.slug));

    const existingSlugs = new Set(apiStates.map((s) => s.slug));
    const uniqueStatic = STATIC_ROUTES.filter(
      (s) => !existingSlugs.has(s.slug),
    );

    return [...apiStates, ...uniqueStatic];
  }, [api1Data, api2Data]);

  const filtered = useMemo(
    () =>
      states.filter((s) =>
        s.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [states, search],
  );

  return (
    <section className="relative bg-[#f7f8fa] min-h-screen overflow-hidden">
      {/* Background accent */}
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
            Popular{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-rapidcolor">
                State-to-State
              </span>
              <span
                aria-hidden
                className="absolute bottom-1 left-0 w-full h-3 bg-rapidcolor/10 -z-10 skew-x-2"
              />
            </span>{" "}
            <br className="hidden sm:block" />
            Auto Transport Routes
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
            routes
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
              placeholder="Search routes…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400 text-lg">
            No routes found for &ldquo;{search}&rdquo;
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((state, index) => (
              <Link
                key={index}
                href={getHref(state)}
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
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7"
                    />
                  </svg>
                </span>

                {/* Title */}
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 leading-snug transition-colors duration-200">
                  {state.title}
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
