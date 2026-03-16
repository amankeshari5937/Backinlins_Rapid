"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import {
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
  Truck,
} from "lucide-react";

import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";

const parseMetaTags = (metaString) => {
  const metaTags = [];
  let canonical = null;

  if (!metaString || typeof metaString !== "string") {
    return { metaTags, canonical };
  }

  const tagRegex = /(<meta[^>]+>|<link[^>]+>)/gi;
  const tags = metaString.match(tagRegex) || [];

  tags.forEach((tag, index) => {
    const metaMatch = tag.match(
      /<meta\s+(?:name|property)="([^"]+)"\s+content="([^"]+)"\s*\/?>/i,
    );
    const canonicalMatch = tag.match(
      /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?>/i,
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
    }
  });

  return { metaTags, canonical };
};

// Group FAQs by category for sidebar
const groupFaqsByCategory = (faqs) => {
  const categoriesMap = {};
  const groupedFaqs = [];

  faqs.forEach((faq) => {
    if (!categoriesMap[faq.category]) {
      categoriesMap[faq.category] = {
        id: faq.category.toLowerCase().replace(/\s+/g, "-"),
        name: faq.category,
        questions: [],
      };
    }
    categoriesMap[faq.category].questions.push({
      id: faq._id,
      question: faq.question || faq.title,
      slug: faq.slug,
    });
  });

  for (const category in categoriesMap) {
    groupedFaqs.push(categoriesMap[category]);
  }

  return groupedFaqs;
};

// Find related FAQs based on category
const findRelatedFaqs = (currentFaq, allFaqs, limit = 3) => {
  if (!currentFaq || !allFaqs || allFaqs.length === 0) return [];

  const sameCategoryFaqs = allFaqs.filter(
    (faq) => faq.category === currentFaq.category && faq._id !== currentFaq._id,
  );

  if (sameCategoryFaqs.length < limit) {
    const otherFaqs = allFaqs
      .filter(
        (faq) =>
          faq.category !== currentFaq.category && faq._id !== currentFaq._id,
      )
      .slice(0, limit - sameCategoryFaqs.length);

    return [...sameCategoryFaqs, ...otherFaqs].map((faq) => ({
      title: faq.question || faq.title,
      slug: faq.slug,
    }));
  }

  return sameCategoryFaqs.slice(0, limit).map((faq) => ({
    title: faq.question || faq.title,
    slug: faq.slug,
  }));
};

// ... (parseMetaTags, groupFaqsByCategory, findRelatedFaqs functions remain unchanged)

// Individual FAQ Detail Page Component
export default function FaqDetailPage({
  initialFaqData,
  allFaqs,
  error: initialError,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const [faqDetail, setFaqDetail] = useState(initialFaqData);
  const [allFaqsState, setAllFaqs] = useState(allFaqs || []);
  const [faqCategories, setFaqCategories] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(initialError);
  const [searchQuery, setSearchQuery] = useState("");
  const contentRef = useRef(null); // Reference to the content section

  // Initialize FAQ categories from allFaqs
  useEffect(() => {
    if (allFaqsState.length > 0) {
      const groupedFaqs = groupFaqsByCategory(allFaqsState);
      setFaqCategories(groupedFaqs);
    }
  }, [allFaqsState]);

  // Set expanded category based on faqDetail
  useEffect(() => {
    if (faqDetail?.category) {
      const categoryId = faqDetail.category.toLowerCase().replace(/\s+/g, "-");
      setExpandedCategories([categoryId]);
    }
  }, [faqDetail]);

  // Fetch FAQ details when slug changes
  useEffect(() => {
    if (router.isReady && slug) {
      const fetchFaqDetail = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq/slug/${slug}`,
          );
          setFaqDetail(response.data);
        } catch (err) {
          console.error("Error fetching FAQ details:", err);
          setError("Failed to load FAQ details. Please try again later.");
          if (err.response?.status === 404) {
            router.push("/404");
          }
        } finally {
          setLoading(false);
        }
      };
      fetchFaqDetail();
    }
  }, [slug, router.isReady]);

  // Scroll to content section when faqDetail changes
  useEffect(() => {
    if (faqDetail && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [faqDetail]);

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  // Check if question is active
  const isActiveQuestion = (questionSlug) => questionSlug === slug;

  // Filter FAQs based on search
  const filterFaqs = () => {
    if (!searchQuery.trim()) return faqCategories;

    const query = searchQuery.toLowerCase();
    const filtered = faqCategories
      .map((category) => ({
        ...category,
        questions: category.questions.filter((q) =>
          q.question.toLowerCase().includes(query),
        ),
      }))
      .filter((category) => category.questions.length > 0);

    return filtered;
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="animate-pulse space-y-4">
                <div className="bg-white h-12 rounded-lg shadow-sm"></div>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white h-10 rounded-lg shadow-sm"
                  ></div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate-pulse">
                <div className="h-16 bg-white rounded-lg shadow-sm mb-6"></div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error && !loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <div className="bg-white shadow-lg rounded-lg p-10 max-w-lg mx-auto">
            <HelpCircle
              size={64}
              className="text-red-500 mx-auto mb-4"
              strokeWidth={1.5}
            />
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              {error}
            </h2>
            <p className="text-gray-600 mb-8">
              We couldn't find the information you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-[#ff5722] text-white px-6 py-2.5 rounded-lg transition-colors"
              >
                Try Again
              </button>
              <Link
                href="/faqs"
                className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg transition-colors"
              >
                Browse All FAQs
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Return null if no data
  if (!faqDetail) return null;

  const relatedFaqs = findRelatedFaqs(faqDetail, allFaqsState);
  const filteredCategories = filterFaqs();

  // Fallback meta tags
  const fallbackMetaTags = [
    <meta
      key="description"
      name="description"
      content={
        faqDetail.content?.substring(0, 160) ||
        "Learn more about our auto shipping services with Rapid Auto Shipping."
      }
    />,
    <meta
      key="og:title"
      property="og:title"
      content={faqDetail.question || faqDetail.title || "FAQ"}
    />,
    <meta key="og:type" property="og:type" content="article" />,
    <meta
      key="og:description"
      property="og:description"
      content={
        faqDetail.content?.substring(0, 160) ||
        "Learn more about our auto shipping services with Rapid Auto Shipping."
      }
    />,
    <meta name="robots" content="index, follow" />,
  ];

  // Fallback canonical URL
  const canonicalUrl = `https://rapidautoshipping.com/faqs/${slug || ""}`;

  // JSON-LD Schema for Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://rapidautoshipping.com",
          name: "Home",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": "https://rapidautoshipping.com/faqs",
          name: "FAQs",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": canonicalUrl,
          name: faqDetail.question || faqDetail.title || "FAQ",
        },
      },
    ],
  };

  // Parse meta tags and canonical link
  const { metaTags, canonical } = parseMetaTags(faqDetail.meta || "");

  return (
    <>
      <Head>
        <title>{faqDetail.title}</title>
        {metaTags.length > 0 ? metaTags : fallbackMetaTags}
        {canonical || <link rel="canonical" href={canonicalUrl} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="bg-[#ff5722] py-16 md:py-20 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-white rounded-full opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-300 to-transparent"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-3 rounded-full shadow-lg mb-6">
                  <Truck className="h-8 w-8 text-orange-600" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-medium">
                  Find quick answers to your most common questions about our
                  professional auto shipping services
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-10">
              <aside className="lg:w-[30%]">
                <div className="sticky top-20 space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                      FAQ Categories
                    </h2>
                    <div className="space-y-3">
                      {filteredCategories.map((category) => (
                        <div key={category.id}>
                          <button
                            onClick={() => toggleCategory(category.id)}
                            className={`w-full flex justify-between items-center px-4 py-2.5 rounded-lg text-left transition-colors ${
                              expandedCategories.includes(category.id)
                                ? "bg-orange-50 text-orange-600 font-medium"
                                : "text-gray-700"
                            }`}
                            aria-expanded={expandedCategories.includes(
                              category.id,
                            )}
                            aria-controls={`category-${category.id}`}
                          >
                            <span className="flex items-center">
                              {category.name}
                              <span className="ml-2 text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-0.5">
                                {category.questions.length}
                              </span>
                            </span>
                            <ChevronDown
                              size={18}
                              className={`transform transition-transform ${
                                expandedCategories.includes(category.id)
                                  ? "rotate-180 text-orange-600"
                                  : "text-gray-400"
                              }`}
                            />
                          </button>
                          <div
                            id={`category-${category.id}`}
                            className={`overflow-hidden transition-all duration-300 ${
                              expandedCategories.includes(category.id)
                                ? "max-h-[500px] opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <ul className="pl-4 py-2 space-y-1">
                              {category.questions.map((question) => (
                                <li key={question.id}>
                                  <Link
                                    href={`/faqs/${question.slug}`}
                                    className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                                      isActiveQuestion(question.slug)
                                        ? "bg-orange-50 text-orange-600 font-medium border-l-2 border-orange-500"
                                        : "text-gray-600"
                                    }`}
                                  >
                                    {question.question}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Need More Help?
                    </h3>
                    <div className="space-y-4 text-sm text-gray-700">
                      <a href="tel:+18332334447" className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mr-3 transition-colors">
                          <Phone size={16} className="text-[#ff5722]" />
                        </span>
                        <span className="font-medium">(833) 233-4447</span>
                      </a>

                      <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mr-3 transition-colors">
                        <Mail size={16} className="text-[#ff5722]" />
                      </span>
                      <span className="font-medium">
                        info@rapidautoshipping.com
                      </span>

                      <div className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mr-3">
                          <Clock size={16} className="text-orange-500" />
                        </span>
                        <span>Available 24/7 for your questions</span>
                      </div>
                    </div>
                    <Link
                      href="/contact-us"
                      className="mt-6 w-full flex items-center justify-center bg-[#ff5722] text-white py-2.5 rounded-lg transition-colors"
                    >
                      Contact Us
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>

                  <div className="lg:hidden">
                    <Link
                      href="/faqs"
                      className="w-full flex items-center justify-center bg-white border border-gray-200 text-gray-700 py-2.5 rounded-lg shadow-sm"
                    >
                      <ArrowLeft size={18} className="mr-2" />
                      Back to All FAQs
                    </Link>
                  </div>
                </div>
              </aside>

              <div className="lg:w-[70%]">
                <div className="hidden lg:block mb-6">
                  <Link
                    href="/faqs"
                    className="flex items-center text-[#ff5722] font-medium"
                  >
                    <ArrowLeft size={18} className="mr-2" />
                    Back to All FAQs
                  </Link>
                </div>

                <article
                  id="faq-content"
                  ref={contentRef}
                  className="bg-white rounded-lg shadow-sm mb-8"
                >
                  <header className="bg-[#ff5722] rounded-xl text-white p-6 sm:p-8">
                    <span className="inline-block text-sm bg-white/20 rounded-full px-3 py-1 mb-4">
                      {faqDetail.category || "General"}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold">
                      {faqDetail.question || faqDetail.title || "FAQ"}
                    </h2>
                  </header>
                  <div className="p-6 sm:p-8">
                    <div
                      className="prose prose-lg max-w-none custom-content custom-content-faq prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-[#ff5722] prose-a:hover:underline prose-strong:text-gray-800"
                      dangerouslySetInnerHTML={{
                        __html:
                          faqDetail.content || "<p>No content available.</p>",
                      }}
                    />
                  </div>
                </article>

                {relatedFaqs.length > 0 && (
                  <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      Related Questions
                    </h2>
                    <div className="space-y-2">
                      {relatedFaqs.map((faq, index) => (
                        <Link
                          key={index}
                          href={`/faqs/${faq.slug}`}
                          className="flex items-center p-3 rounded-lg group transition-colors"
                        >
                          <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mr-3">
                            <HelpCircle size={16} className="text-[#ff5722]" />
                          </span>
                          <span className="text-gray-700">{faq.title}</span>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                <section className="bg-[#ff5722] rounded-lg shadow-sm p-6 sm:p-8 text-white">
                  <h2 className="text-2xl font-bold mb-3">
                    Ready to Ship Your Vehicle?
                  </h2>
                  <p className="text-white/90 mb-6">
                    Get a free, no-obligation quote for your auto shipping needs
                    today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/services/car-shipping-calculator"
                      className="bg-white text-[#ff5722] font-medium py-2.5 px-6 rounded-lg transition-colors"
                    >
                      Get an Instant Quote
                    </Link>
                    <Link
                      href="/contact-us"
                      className="border border-white text-white font-medium py-2.5 px-6 rounded-lg transition-colors"
                    >
                      Contact Our Team
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

// Server-side data fetching
export async function getServerSideProps(context) {
  const { slug } = context.params; // Get the slug from the URL

  try {
    // Fetch the specific FAQ by slug
    const faqResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq/slug/${slug}`,
    );
    const initialFaqData = faqResponse.data;

    // Fetch all FAQs for the sidebar and related FAQs
    const allFaqsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq`,
    );
    const allFaqs = allFaqsResponse.data;

    return {
      props: {
        initialFaqData,
        allFaqs,
        error: null,
      },
    };
  } catch (err) {
    console.error("Error fetching FAQ data in getServerSideProps:", err);
    if (err.response?.status === 404) {
      return {
        notFound: true, // Return 404 page if FAQ is not foundS
      };
    }
    return {
      props: {
        initialFaqData: null,
        allFaqs: [],
        error: "Failed to load FAQ data. Please try again later.",
      },
    };
  }
}
