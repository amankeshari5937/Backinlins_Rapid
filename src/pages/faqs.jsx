import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Search,
  Star,
  HelpCircle,
  Clock,
} from "lucide-react";
import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import Head from "next/head";

// Group FAQs by category
const groupFaqsByCategory = (faqs) => {
  const categoriesMap = {};
  const groupedFaqs = [];

  // Group FAQs by category
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
      slug: faq.slug || faq._id, // Fallback to _id if slug is missing
    });
  });

  // Convert map to array
  for (const category in categoriesMap) {
    groupedFaqs.push(categoriesMap[category]);
  }

  return groupedFaqs;
};

// Debounce utility for search
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default function FaqPage() {
  const router = useRouter();
  const { category: queryCategoryId } = router.query;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [faqCategories, setFaqCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);

  // Fetch all FAQs and group them by category
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq`
          : "http://localhost:5000/api/faq"; // Fallback for development
        const response = await axios.get(apiUrl);
        const groupedFaqs = groupFaqsByCategory(response.data);
        setFaqCategories(groupedFaqs);
        setFilteredCategories(groupedFaqs);

        // Initialize with category from URL query or "all"
        if (router.isReady && queryCategoryId) {
          const validCategory = groupedFaqs.find(
            (c) => c.id === queryCategoryId
          );
          setSelectedCategory(validCategory ? queryCategoryId : "all");
        }
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError("Failed to load FAQs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [queryCategoryId, router.isReady]);

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);

    // Update URL without refreshing page
    if (categoryId === "all") {
      router.push("/faqs", undefined, { shallow: true });
    } else {
      router.push(`/faqs?category=${categoryId}`, undefined, { shallow: true });
    }
  };

  // Handle search with debouncing
  const handleSearch = useCallback(
    debounce((query) => {
      if (query.trim() === "") {
        setFilteredCategories(faqCategories);
        return;
      }

      const lowerQuery = query.toLowerCase();
      const filtered = faqCategories
        .map((category) => {
          const filteredQuestions = category.questions.filter((q) =>
            q.question.toLowerCase().includes(lowerQuery)
          );

          return {
            ...category,
            questions: filteredQuestions,
          };
        })
        .filter((category) => category.questions.length > 0);

      setFilteredCategories(filtered);
    }, 300),
    [faqCategories]
  );

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery, handleSearch]);

  // Get questions based on selected category or all questions
  const getQuestionsToDisplay = () => {
    if (selectedCategory === "all") {
      return filteredCategories;
    }

    const selectedCategoryData = filteredCategories.find(
      (c) => c.id === selectedCategory
    );
    return selectedCategoryData ? [selectedCategoryData] : [];
  };

  // Count total questions
  const getTotalQuestionCount = () => {
    return faqCategories.reduce(
      (total, category) => total + category.questions.length,
      0
    );
  };

  return (
    <>
      <Head>
        <title>
          Auto Transport FAQs | Rapid Auto Shipping - Your Questions Answered
        </title>

        <meta
          name="description"
          content="Get expert answers to your auto transport questions at Rapid Auto Shipping. Understand about car shipping services, costs, delivery times, and more."
        />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section with enhanced styling */}
          <div className="bg-gradient-to-r from-[#ff5722] to-[#ff7a50] py-16 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-sm">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
                Find answers to common questions about our auto shipping
                services
              </p>

              {/* Search bar */}
              <div className="max-w-xl mx-auto relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-3 px-5 pl-12 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722]/50"
                  />
                  <Search
                    size={20}
                    className="absolute left-4 top-3.5 text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {loading ? (
              // Loading skeleton
              <div className="space-y-8">
                <div className="animate-pulse flex flex-wrap gap-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-slate-200 h-12 w-32 rounded-full"
                    ></div>
                  ))}
                </div>
                <div className="animate-pulse space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-slate-200 h-16 rounded-lg"></div>
                  ))}
                </div>
              </div>
            ) : error ? (
              // Error state
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <div className="text-red-600 text-xl mb-4">{error}</div>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-[#ff5722] text-white px-4 py-2 rounded-md hover:bg-[#e64a19] transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Horizontal Category Tabs */}
                <div className="bg-white rounded-xl shadow-sm p-4 overflow-x-auto">
                  <div className="flex flex-nowrap gap-2 min-w-max pb-1">
                    <button
                      onClick={() => handleCategorySelect("all")}
                      className={`px-5 py-3 rounded-full whitespace-nowrap transition-colors font-medium text-sm md:text-base flex items-center gap-2 ${
                        selectedCategory === "all"
                          ? "bg-[#ff5722] text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      All Categories
                      <span className="inline-flex items-center justify-center bg-white bg-opacity-20 text-xs rounded-full h-5 min-w-5 px-1">
                        {getTotalQuestionCount()}
                      </span>
                    </button>

                    {faqCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`px-5 py-3 rounded-full whitespace-nowrap transition-colors font-medium text-sm md:text-base flex items-center gap-2 ${
                          selectedCategory === category.id
                            ? "bg-[#ff5722] text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category.name}
                        <span className="inline-flex items-center justify-center bg-white bg-opacity-20 text-xs rounded-full h-5 min-w-5 px-1">
                          {category.questions.length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

              {/* FAQ Content Area */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Main Questions List - Takes 3 columns on large screens */}
                <div className="lg:col-span-3">
                  {searchQuery && filteredCategories.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                      <HelpCircle
                        size={48}
                        className="mx-auto text-gray-400 mb-4"
                      />
                      <h3 className="text-xl font-medium text-gray-700">
                        No questions found
                      </h3>
                      <p className="text-gray-500 mt-2">
                        Try using different keywords
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* All categories and their questions */}
                      {getQuestionsToDisplay().map((category) => (
                        <div
                          key={category.id}
                          className="bg-white rounded-xl shadow-sm overflow-hidden"
                        >
                          {/* Category header */}
                          <div className="bg-gradient-to-r from-[#ff5722]/10 to-[#ff7a50]/5 p-5 border-l-4 border-[#ff5722]">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center">
                              {category.name}
                              <span className="ml-3 text-sm bg-[#ff5722]/10 text-[#ff5722] rounded-full px-2 py-0.5">
                                {category.questions.length} questions
                              </span>
                            </h2>
                          </div>

                            {/* Questions list */}
                            <div className="divide-y divide-gray-100">
                              {category.questions.map((question) => (
                                <Link
                                  key={question.id}
                                  href={`/faqs/${question.slug}`}
                                  className="block p-5  transition-colors"
                                >
                                  <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                      <div className="h-6 w-6 rounded-full bg-[#ff5722]/10 flex items-center justify-center">
                                        <ChevronRight
                                          size={16}
                                          className="text-[#ff5722]"
                                        />
                                      </div>
                                    </div>
                                    <div className="ml-3">
                                      <h3 className="font-medium text-gray-800">
                                        {question.question}
                                      </h3>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* CTA Button */}
                        <div className="text-center p-6 bg-gradient-to-r from-[#ff5722] to-[#ff7a50] rounded-xl text-white shadow-lg">
                          <h3 className="text-xl font-semibold mb-3">
                            Still not finding what you need?
                          </h3>
                          <p className="mb-5 opacity-90">
                            Get a custom quote for your vehicle shipping needs
                          </p>
                          <Link
                            href="/calculator"
                            className="inline-flex items-center bg-white text-[#ff5722] font-medium py-3 px-6 rounded-md hover:bg-gray-50 transition-colors shadow-sm"
                          >
                            <ArrowRight size={20} className="mr-2" />
                            Get a Free Quote
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar - Contact & Featured Questions - Takes 1 column */}
                  <div className="space-y-6">
                    {/* Contact Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-[#ff5722]">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <HelpCircle size={18} className="mr-2 text-[#ff5722]" />
                        Need Immediate Help?
                      </h3>
                      <div className="space-y-4">
                        <a
                          href="tel:+18332334447"
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Phone size={18} className="text-[#ff5722] mr-3" />
                          <div>
                            <div className="text-sm text-gray-500">
                              Call us 24/7
                            </div>
                            <div className="font-medium">(833) 233-4447</div>
                          </div>
                        </a>
                        <a
                          href="mailto:info@rapidautoshipping.com"
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Mail size={18} className="text-[#ff5722] mr-3" />
                          <div>
                            <div className="text-sm text-gray-500">
                              Email us
                            </div>
                            <div className="font-medium">
                              info@rapidautoshipping.com
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="mt-5 pt-5 border-t border-gray-100">
                        <Link
                          href="/contact-us"
                          className="flex items-center justify-center w-full bg-[#ff5722] text-white py-2.5 px-4 rounded-lg hover:bg-[#e64a19] transition-colors"
                        >
                          Contact us
                        </Link>
                      </div>
                    </div>

                    {/* Popular Questions */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Star size={18} className="mr-2 text-[#ff5722]" />
                        Popular Questions
                      </h3>
                      <div className="space-y-3">
                        {faqCategories.slice(0, 2).flatMap((category) =>
                          category.questions.slice(0, 2).map((question) => (
                            <Link
                              key={question.id}
                              href={`/faqs/${question.slug}`}
                              className="block p-3 rounded-lg border border-gray-100 hover:border-[#ff5722]/20 hover:bg-orange-50 transition-all"
                            >
                              <p className="text-sm text-gray-800">
                                {question.question}
                              </p>
                            </Link>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                      <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                        <Clock size={16} className="mr-2 text-[#ff5722]" />
                        Business Hours
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monday - Friday</span>
                          <span className="font-medium">8:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Saturday</span>
                          <span className="font-medium">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sunday</span>
                          <span className="font-medium">
                            10:00 AM - 4:00 PM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
