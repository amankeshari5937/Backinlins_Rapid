"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import ReviewSwiper from "../../components/Home/swipper.jsx";
import Key_banner from "@/components/CommonComponents/key-banner.jsx";
import ReviewCards from "@/components/Home/ReviewCards.jsx";
import ShippingAdvantages from "@/components/CommonComponents/Advantage.jsx";
import BlogList from "@/components/Home/BlogsSection.jsx";

const BlogPage = ({ blog }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const { title, meta, content, pageH1, about1, fq, slug } = blog;

  // Handle about1 safely
  const about1Lines = about1
    ? about1.split("\n").filter((line) => line.trim() !== "")
    : [];
  const previewLines = about1Lines.slice(0, 4).join("\n");
  const hasMoreLines = about1Lines.length > 4;

  // Debugging logs
  console.log("blog:", blog);
  console.log("meta:", meta);
  console.log("about1:", about1);
  console.log("about1Lines:", about1Lines);
  console.log("hasMoreLines:", hasMoreLines);
  console.log("isExpanded:", isExpanded);

  // Updated parseMetaTags function to handle meta, link, and script tags
  const parseMetaTags = (metaString) => {
    const metaTags = [];
    let canonical = null;
    const scriptTags = [];

    if (!metaString || typeof metaString !== "string") {
      console.warn("No valid meta string provided");
      return { metaTags, canonical, scriptTags };
    }

    // Use regex to match meta, link, and script tags
    const tagRegex =
      /(<meta[^>]+>|<link[^>]+>|<script[^>]*>[\s\S]*?<\/script>)/gi;
    const tags = metaString.match(tagRegex) || [];

    tags.forEach((tag, index) => {
      const metaMatch = tag.match(
        /<meta\s+(?:name|property)="([^"]+)"\s+content="([^"]+)"\s*\/?>/i,
      );
      const canonicalMatch = tag.match(
        /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?>/i,
      );
      const scriptMatch = tag.match(
        /<script(?:\s+type="([^"]+)")?\s*>\s*([\s\S]*?)\s*<\/script>/i,
      );

      if (metaMatch) {
        metaTags.push(
          <meta
            key={`meta-${index}`}
            name={metaMatch[1]}
            content={metaMatch[2]}
          />,
        );
      } else if (canonicalMatch) {
        canonical = (
          <link key="canonical" rel="canonical" href={canonicalMatch[1]} />
        );
      } else if (scriptMatch) {
        scriptTags.push(
          <script
            key={`script-${index}`}
            type={scriptMatch[1] || "text/javascript"}
            dangerouslySetInnerHTML={{ __html: scriptMatch[2] }}
          />,
        );
      } else {
        console.warn(`Unparsed tag: ${tag}`);
      }
    });

    return { metaTags, canonical, scriptTags };
  };

  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        const paragraph = box.nextElementSibling;
        const isActive = box.classList.contains("active");
        boxes.forEach((otherBox) => {
          otherBox.classList.remove("active");
          otherBox.nextElementSibling?.classList.remove("active");
        });
        if (!isActive) {
          box.classList.add("active");
          paragraph?.classList.add("active");
        }
      });
    });

    return () => {
      boxes.forEach((box) => {
        box.removeEventListener("click", () => {});
      });
    };
  }, []);

  // Construct canonical URL with fallback
  const canonicalUrl = `${process.env.NEXT_PUBLIC_FRONT_URL || "https://www.rapidautoshipping.com"}/services/${slug || "alabama"}`;
  console.log("canonicalUrl:", canonicalUrl);

  // Capitalize the slug for display
  const capitalizedSlug = slug
    ? slug.charAt(0).toUpperCase() + slug.slice(1)
    : "Alabama";

  // JSON-LD Schema for Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://www.rapidautoshipping.com",
          name: "Home",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": "https://rapidautoshipping.com/services",
          name: "Our Nationwide Auto Transport Services",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": canonicalUrl,
          name: `${pageH1 || "Best Car Transport Company"}`,
        },
      },
    ],
  };

  // Parse meta tags, canonical link, and script tags
  const { metaTags, canonical, scriptTags } = parseMetaTags(meta);

  return (
    <>
      <Head>
        <title>{title || "Blog Page"}</title>
        {metaTags}
        {canonical || <link rel="canonical" href={canonicalUrl} />}
        {scriptTags}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Navbar />
      <div
        className="bg-white relative"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), 
            url(https://res.cloudinary.com/dz2zovmf1/image/upload/v1743153389/Service/Auto-Shipping.webp)
          `,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute right-[30%] z-0"></div>
        <div className="container mx-auto  md:px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1
                className="text-3xl md:text-6xl px-5 font-bold text-white"
                style={{ lineHeight: 1.3 }}
              >
                {pageH1 || "Best Car Transport Company"}
              </h1>
              <div className="text-white text-xl leading-relaxed max-w-full">
                {about1 ? (
                  <>
                    <p style={{ whiteSpace: "pre-line" }}>
                      {isExpanded ? about1 : previewLines}
                    </p>
                    {hasMoreLines && (
                      <span
                        className="text-blue-400 cursor-pointer hover:underline ml-2 inline-block"
                        onClick={() => setIsExpanded(!isExpanded)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setIsExpanded(!isExpanded);
                          }
                        }}
                        aria-expanded={isExpanded}
                        aria-label={
                          isExpanded ? "Collapse content" : "Expand content"
                        }
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </>
                ) : (
                  <p>No content available.</p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <TransportForm className="w-full max-w-lg" />
            </div>
          </div>
        </div>
      </div>
      <ReviewCards />
      <ShippingAdvantages />
      <div className="container mx-auto px-2 md:px-6 py-6 flex flex-col md:flex-row">
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: content }}
          className="prose max-w-none custom-content flex-1 overflow-y-auto"
        />
        <div className="hidden lg:block ml-8 lg:ml-16">
          <div className="sticky top-1">
            <img
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746867621/Service/Get-a-free-instant-quote.webp"
              alt="Blog Image"
              width="200"
              height="500"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <ReviewSwiper />
      <BlogList />
      <Key_banner />

      {fq && (
        <section className="px-4 md:px-8 lg:px-16 mt-8 mb-8">
          <div
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: fq }}
            className="prose max-w-none"
          />
        </section>
      )}
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(
      `https://api.rapidautoshipping.com/api/services/${slug}`,
    );
    if (!res.ok) {
      console.error(`API error: ${res.status}`);
      return { notFound: true };
    }

    const blog = await res.json();
    if (!blog || Object.keys(blog).length === 0) {
      console.error("Empty blog data");
      return { notFound: true };
    }

    // Add slug to blog object
    blog.slug = slug;

    return {
      props: { blog },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error.message);
    return { notFound: true };
  }
}

export default BlogPage;
