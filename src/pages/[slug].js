"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// CRITICAL FIX: Dynamic imports for all page components
// Only the component that's actually used will be loaded
const BlogPage = dynamic(
  () => import("../components/CommonComponents/NewBlog"),
  {
    ssr: true, // Keep SSR for SEO
    loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />,
  },
);

const StateToState = dynamic(
  () => import("@/components/CommonComponents/State_to_State"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />,
  },
);

const City_to_city = dynamic(
  () => import("@/components/CommonComponents/City_to_city"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />,
  },
);

function Slug({ blog, state_to_state, city_to_city }) {
  // FAQ accordion effect - only run once when content is loaded
  useEffect(() => {
    // Small delay to ensure DOM is ready after hydration
    const timer = setTimeout(() => {
      const boxes = document.querySelectorAll(".box");

      const handleClick = function () {
        const paragraph = this.nextElementSibling;
        const isActive = this.classList.contains("active");

        boxes.forEach(function (otherBox) {
          otherBox.classList.remove("active");
          if (otherBox.nextElementSibling) {
            otherBox.nextElementSibling.classList.remove("active");
          }
        });

        if (!isActive) {
          this.classList.add("active");
          if (paragraph) {
            paragraph.classList.add("active");
          }
        }
      };

      boxes.forEach(function (box) {
        box.addEventListener("click", handleClick);
      });

      // Proper cleanup
      return () => {
        boxes.forEach((box) => {
          box.removeEventListener("click", handleClick);
        });
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [blog, state_to_state, city_to_city]); // Re-run when data changes

  return (
    <div>
      {blog && <BlogPage blog={blog} />}
      {city_to_city && <City_to_city city_to_city={city_to_city} />}
      {state_to_state && <StateToState state_to_state={state_to_state} />}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  console.log("Received slug:", slug);

  try {
    console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);

    // Parallel fetch for better performance
    const [res1, res2, res3] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newslugs/${slug}`),
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/new_state_to_state/slug/${slug}`,
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/city_to_city/slug/${slug}`,
      ),
    ]);

    console.log("Blog API response:", res1.status, res1.statusText);
    console.log("State to State API response:", res2.status, res2.statusText);
    console.log("City API response:", res3.status, res3.statusText);

    const blog = res1.ok ? await res1.json() : null;
    const state_to_state = res2.ok ? await res2.json() : null;
    const city_to_city = res3.ok ? await res3.json() : null;

    console.log("Blog data:", blog);
    console.log("State data:", state_to_state);
    console.log("City data:", city_to_city);

    if (!blog && !state_to_state && !city_to_city) {
      console.log("No data found for slug:", slug);
      return {
        notFound: true,
      };
    }

    return {
      props: { blog, state_to_state, city_to_city },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    console.error("Error stack:", error.stack);
    return {
      notFound: true,
    };
  }
}

export default Slug;
