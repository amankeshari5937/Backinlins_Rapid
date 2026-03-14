"use client";

import Head from "next/head";
import Link from "next/link.js";
import { useEffect, useState } from "react";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import ReviewSwiper from "../../components/Home/swipper.jsx";
import Key_banner from "@/components/CommonComponents/key-banner.jsx";
import {
  Facebook,
  Twitter,
  Linkedin,
  Share2,
  Clock,
  Calendar,
  ArrowRight,
  Truck,
  Shield,
  Phone,
  Star,
  ChevronUp,
  CheckCircle,
  Award,
} from "lucide-react";
import BlogList from "@/components/Home/BlogsSection.jsx";

const BlogPage = ({ blog }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("article-content");
      if (article) {
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        const progress = Math.min(
          100,
          Math.max(
            0,
            ((scrollY - articleTop + windowHeight * 0.5) / articleHeight) * 100,
          ),
        );
        setReadProgress(progress);
      }
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl animate-bounce"></div>
          <p className="text-slate-600 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  const { title, meta, content, pageH1, about1, fq, slug, updatedAt } = blog;

  // Handle about1 safely
  const about1Lines = about1
    ? about1.split("\n").filter((line) => line.trim() !== "")
    : [];
  const previewLines = about1Lines.slice(0, 4).join("\n");
  const hasMoreLines = about1Lines.length > 4;

  // Calculate reading time
  const calculateReadingTime = (content) => {
    if (!content || typeof content !== "string") return 3;
    const words = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
    return Math.ceil(words / 200);
  };
  const readingTime = calculateReadingTime(content);

  // Author data with more details
  const authors = [
    {
      name: "Nancy Ticer",
      role: "Automotive Content Writer",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1749625945/nancy_izrmtz.jpg",
      bio: "Nancy Ticer is an automotive content writer at Rapid Auto Shipping, where she writes about auto transport, vehicle relocation, and the everyday realities of car ownership. Her focus is on breaking down complex topics such as shipping logistics, pricing, and insurance into clear, practical information that drivers can use. Nancy’s work is rooted in research and real-world scenarios, helping U.S. car owners make confident, informed decisions without the confusion or pressure.",
      twitter: "https://twitter.com/rapidautoshipping",
      linkedin: "https://linkedin.com/company/rapidautoshipping",
    },
    {
      name: "Caster Jerry",
      role: "Vehicle Transport Content Writer",
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1749625760/casely_kyizon.jpg",
      bio: "Caster Jerry is a vehicle transport content writer at Rapid Auto Shipping, where he focuses on helping readers understand the real-world details of auto shipping. His writing answers practical questions about pricing, timelines, vehicle preparation, and common mistakes to avoid. Caster specializes in clear, step-by-step guidance designed to reduce confusion and help customers feel confident throughout the car shipping process across the U.S.",
      twitter: "https://twitter.com/rapidautoshipping",
      linkedin: "https://linkedin.com/company/rapidautoshipping",
    },
  ];

  // Use consistent author based on slug hash for reproducibility
  const getAuthorIndex = (slug) => {
    if (!slug) return 0;
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = (hash << 5) - hash + slug.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % authors.length;
  };
  const author = authors[getAuthorIndex(slug)];

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) {
      return new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Parse meta tags
  const parseMetaTags = (metaString) => {
    const metaTags = [];
    let canonical = null;
    const scriptTags = [];

    if (!metaString || typeof metaString !== "string") {
      return { metaTags, canonical, scriptTags };
    }

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

  const capitalizedSlug = slug
    ? slug.charAt(0).toUpperCase() + slug.slice(1)
    : "Alabama";

  const canonicalUrl = `https://rapidautoshipping.com/blogs/${
    slug || "alabama"
  }`;

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
          "@id": "https://rapidautoshipping.com/blogs",
          name: "Blog",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": canonicalUrl,
          name: pageH1 || `Auto Shipping in ${capitalizedSlug}`,
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageH1 || title,
    author: {
      "@type": "Person",
      name: author.name,
    },
    dateModified: updatedAt || new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "Rapid Auto Shipping",
      logo: {
        "@type": "ImageObject",
        url: "https://rapidautoshipping.com/logo.png",
      },
    },
  };

  const { metaTags, canonical, scriptTags } = parseMetaTags(meta);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <style jsx global>{`
        :root {
          --color-primary: #ea580c;
          --color-primary-dark: #c2410c;
          --color-secondary: #0f172a;
          --color-accent: #f97316;
          --color-bg-warm: #fffbf7;
          --color-text-primary: #1e293b;
          --color-text-secondary: #64748b;
        }

        /* Article Content Headings */
        .article-content h1,
        .article-content h2,
        .article-content h3,
        .article-content h4 {
          color: var(--color-secondary);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .article-content h2 {
          font-size: 1.75rem;
        }

        .article-content h3 {
          font-size: 1.5rem;
        }

        .article-content h4 {
          font-size: 1.25rem;
        }

        /* Paragraphs */
        .article-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--color-text-primary);
          margin-bottom: 1.5rem;
        }

        /* Unordered Lists - Proper Styling */
        .article-content ul {
          margin: 1.5rem 0;
          padding-left: 0;
          list-style: none;
        }

        .article-content ul li {
          position: relative;
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 0.875rem;
          padding-left: 1.75rem;
          color: var(--color-text-primary);
        }

        .article-content ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
          border-radius: 50%;
        }

        /* Nested UL */
        .article-content ul ul {
          margin: 0.75rem 0 0.75rem 0;
        }

        .article-content ul ul li::before {
          width: 6px;
          height: 6px;
          background: #94a3b8;
          border-radius: 50%;
        }

        /* Ordered Lists - Proper Styling */
        .article-content ol {
          margin: 1.5rem 0;
          padding-left: 0;
          list-style: none;
          counter-reset: item;
        }

        .article-content ol li {
          position: relative;
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1rem;
          padding-left: 2.5rem;
          color: var(--color-text-primary);
          counter-increment: item;
        }

        .article-content ol li::before {
          content: counter(item);
          position: absolute;
          left: 0;
          top: 0.1em;
          width: 1.75rem;
          height: 1.75rem;
          background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
          color: white;
          font-size: 0.875rem;
          font-weight: 700;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Nested OL */
        .article-content ol ol {
          margin: 0.75rem 0 0.75rem 0;
          counter-reset: subitem;
        }

        .article-content ol ol li {
          counter-increment: subitem;
          padding-left: 2rem;
        }

        .article-content ol ol li::before {
          content: counter(subitem, lower-alpha);
          width: 1.5rem;
          height: 1.5rem;
          font-size: 0.75rem;
          background: #64748b;
        }

        /* Links */
        .article-content a {
          color: var(--color-primary);
          transition: color 0.2s ease;
        }

        .article-content a:hover {
          color: var(--color-primary-dark);
        }

        /* Images */
        .article-content img {
          border-radius: 1rem;
          margin: 2rem 0;
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
        }

        /* Blockquotes */
        .article-content blockquote {
          border-left: 4px solid var(--color-primary);
          background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
          padding: 1.5rem 2rem;
          margin: 2rem 0;
          border-radius: 0 1rem 1rem 0;
          font-style: italic;
          font-size: 1.25rem;
        }

        /* Tables - Professional Styling */
        .article-content table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin: 2rem 0;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }

        .article-content thead {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .article-content th {
          color: white;
          padding: 1rem 1.25rem;
          text-align: left;
          font-weight: 600;
          font-size: 0.9375rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 2px solid var(--color-primary);
        }

        .article-content th:first-child {
          border-top-left-radius: 1rem;
        }

        .article-content th:last-child {
          border-top-right-radius: 1rem;
        }

        .article-content tbody tr {
          transition: background-color 0.2s ease;
        }

        .article-content tbody tr:nth-child(odd) {
          background-color: #ffffff;
        }

        .article-content tbody tr:nth-child(even) {
          background-color: #f8fafc;
        }

        .article-content tbody tr:hover {
          background-color: #fff7ed;
        }

        .article-content td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #e2e8f0;
          font-size: 1rem;
          color: var(--color-text-primary);
        }

        .article-content tbody tr:last-child td {
          border-bottom: none;
        }

        .article-content tbody tr:last-child td:first-child {
          border-bottom-left-radius: 1rem;
        }

        .article-content tbody tr:last-child td:last-child {
          border-bottom-right-radius: 1rem;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .article-content {
            overflow-x: hidden; /* prevents main layout shift */
          }

          .article-content table {
            display: block;
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            border-collapse: collapse;
          }

          .article-content tbody,
          .article-content thead,
          .article-content tr {
            width: 100%;
          }

          .article-content th,
          .article-content td {
            white-space: nowrap;
            padding: 0.75rem 1rem;
            font-size: 0.875rem;
          }
        }

        /* Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #ea580c 0%, #f97316 100%);
          z-index: 9999;
          transition: width 0.1s ease-out;
        }

        /* Author Card */
        .author-card {
          background: linear-gradient(180deg, #fffbf7 0%, #fff7ed 100%);
          border: 1px solid #fed7aa;
        }

        /* Share Button */
        .share-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .share-button:hover {
          transform: translateY(-3px);
        }

        /* Back to Top */
        .back-to-top {
          transition: all 0.3s ease;
        }

        .back-to-top:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(234, 88, 12, 0.4);
        }

        /* Sidebar CTA Cards */
        .sidebar-cta {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          position: relative;
          overflow: hidden;
        }

        .sidebar-cta::before {
          content: "";
          position: absolute;
          top: -30%;
          right: -30%;
          width: 60%;
          height: 60%;
          background: radial-gradient(
            circle,
            rgba(249, 115, 22, 0.2) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .sidebar-trust {
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid #e2e8f0;
        }
      `}</style>

      {/* Reading Progress Bar */}
      <div className="progress-bar" style={{ width: `${readProgress}%` }} />

      <Navbar />

      {/* Hero Section */}
      <section className="blog-hero relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dz2zovmf1/image/upload/v1743153389/Service/Auto-Shipping.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/85 z-10" />

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-slate-300">
                <Link
                  href="/"
                  className="hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>
                <span className="text-slate-500">/</span>
                <Link
                  href="/blogs"
                  className="hover:text-orange-400 transition-colors"
                >
                  Blog
                </Link>
                <span className="text-slate-500">/</span>
                <span className="text-orange-400">{capitalizedSlug}</span>
              </nav>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {pageH1 || "Best Car Transport Company"}
              </h1>

              {/* Description */}
              <div className="text-slate-200 text-base sm:text-lg leading-relaxed">
                {about1 ? (
                  <>
                    <p style={{ whiteSpace: "pre-line" }}>
                      {isExpanded ? about1 : previewLines}
                    </p>
                    {hasMoreLines && (
                      <button
                        className="text-orange-400 hover:text-orange-300 font-semibold mt-2 flex items-center gap-1 transition-colors"
                        onClick={() => setIsExpanded(!isExpanded)}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    )}
                  </>
                ) : (
                  <p>Discover everything about auto shipping services.</p>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="lg:pl-8">
              <div className="rounded-3xl p-1">
                <TransportForm className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Bar with Social Links - All in one row */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Left side - Meta info + Social Links together */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              {/* Reading Time */}
              <div className="flex items-center gap-1.5 text-slate-600">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="text-xs sm:text-sm font-medium">
                  {readingTime} min read
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-5 bg-slate-200"></div>

              {/* Updated Date */}
              <div className="hidden sm:flex items-center gap-1.5 text-slate-600">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">
                  Updated: {formatDate(updatedAt)}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-5 bg-slate-200"></div>

              {/* Author */}
              <div className="flex items-center gap-2">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover ring-2 ring-orange-100"
                />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {author.name}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-5 bg-slate-200"></div>

              {/* Social Share Links */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-slate-400 text-xs sm:text-sm hidden md:inline">
                  Share:
                </span>
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://rapidautoshipping.com/blogs/${slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white text-slate-500 transition-all"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href={`https://twitter.com/intent/tweet?url=https://rapidautoshipping.com/blogs/${slug}/&text=${encodeURIComponent(pageH1 || title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white text-slate-500 transition-all"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href={`https://www.linkedin.com/shareArticle?url=https://rapidautoshipping.com/blogs/${slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-blue-700 hover:text-white text-slate-500 transition-all"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: pageH1 || title,
                        url: `https://rapidautoshipping.com/blogs/${slug}/`,
                      });
                    } else {
                      navigator.clipboard.writeText(
                        `https://rapidautoshipping.com/blogs/${slug}/`,
                      );
                      alert("Link copied to clipboard!");
                    }
                  }}
                  className="share-button w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-500 transition-all"
                  aria-label="Copy link"
                >
                  <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <main className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Article Content - Left Side */}
            <div className="flex-1 max-w-4xl">
              {/* Article Content */}
              <article
                id="article-content"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: content }}
                className="article-content prose prose-lg max-w-none"
              />

              {/* Author Bio Section - Mobile Optimized */}
              <div className="author-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 mt-8 mb-6">
                {/* Mobile: Centered layout, Desktop: Side by side */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                  {/* Author Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full sm:rounded-2xl object-cover shadow-lg"
                    />
                  </div>

                  {/* Author Info */}
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <div>
                      <span className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                        Written By
                      </span>
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                        {author.name}
                      </h4>
                      <p className="text-slate-500 text-sm sm:text-base font-medium">
                        {author.role}
                      </p>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {author.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
                      <Link
                        href={author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 text-slate-500 hover:text-sky-500 transition-colors"
                      >
                        <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-medium">
                          Twitter
                        </span>
                      </Link>
                      <Link
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 text-slate-500 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-medium">
                          LinkedIn
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Right Side (Hidden on Mobile) */}
            <aside className="hidden lg:block lg:w-60 xl:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Get Quote CTA */}
                <div className="sidebar-cta rounded-2xl p-6 text-white">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                      <Truck className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Get a Free Quote</h3>
                    <p className="text-slate-300 text-sm mb-4">
                      Ship your vehicle anywhere in the US with confidence.
                      Instant quotes, no hidden fees.
                    </p>
                    <Link
                      href="https://rapidautoshipping.com/calculator"
                      className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-center py-3 px-6 rounded-xl font-semibold transition-all shadow-lg shadow-orange-600/30"
                    >
                      Get Instant Quote
                    </Link>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="sidebar-trust rounded-2xl p-6">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-orange-500" />
                    Why Choose Us
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">
                        Fully Licensed & Insured Carriers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">
                        Door-to-Door Delivery Service
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">
                        Real-Time Shipment Tracking
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">
                        No Hidden Fees or Charges
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">
                        50,000+ Vehicles Shipped
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Mobile CTA - Only visible on mobile */}
      <div className="lg:hidden bg-white border-t border-slate-200 p-4">
        <div className="flex gap-3">
          <Link
            href="https://rapidautoshipping.com/calculator"
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-3 px-4 rounded-xl font-semibold text-sm"
          >
            Get Free Quote
          </Link>
          <Link
            href="tel:+18332334447"
            className="flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-3 px-4 rounded-xl font-semibold text-sm"
          >
            <Phone className="w-4 h-4" />
            Call
          </Link>
        </div>
      </div>

      <ReviewSwiper />
      <BlogList />
      <Key_banner />

      {/* FAQ Section */}
      {fq && (
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: fq }}
                className="article-content prose prose-lg max-w-none"
              />
            </div>
          </div>
        </section>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top fixed bottom-20 lg:bottom-8 right-4 lg:right-8 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      )}

      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(`http://localhost:5001/api/blogs/${slug}`);
    if (!res.ok) {
      console.error(`API error: ${res.status}`);
      return { notFound: true };
    }

    const blog = await res.json();
    if (!blog) {
      console.error("Empty blog data");
      return { notFound: true };
    }

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
