'use client';

import { useState } from 'react';
import { products as staticProducts } from '@/lib/products';
import Link from 'next/link';
import { formatPrice } from '@/lib/currency';

type QuizAnswer = {
  question: string;
  answer: string;
};

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  
  // Always use static products as the base, admin store is for price overrides only
  const products = staticProducts;

  // Quiz questions
  const quizQuestions = [
    {
      question: "Where will you be using the display?",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      options: [
        { 
          label: "Indoor - Shop/Office", 
          value: "indoor", 
          tags: ["Indoor Display", "Interactive Display"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          description: "Internal displays for retail, corporate, or commercial spaces"
        },
        { 
          label: "Window Display", 
          value: "window", 
          tags: ["Window Display"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          ),
          description: "High-brightness displays visible in direct sunlight"
        },
        { 
          label: "Outdoor - External", 
          value: "outdoor", 
          tags: ["Outdoor Display"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          description: "Weather-resistant displays for external environments"
        },
        { 
          label: "Home/Gallery", 
          value: "home", 
          tags: ["Digital Canvas"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
          description: "Digital art displays for residential or gallery settings"
        }
      ]
    },
    {
      question: "What's your primary use case?",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      options: [
        { 
          label: "Advertising & Promotions", 
          value: "advertising", 
          tags: ["Window Display", "Outdoor Display", "Indoor Display"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          ),
          description: "Attract attention and promote products or services"
        },
        { 
          label: "Customer Interaction", 
          value: "interactive", 
          tags: ["Interactive Display"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          ),
          description: "Touch-enabled displays for wayfinding or self-service"
        },
        { 
          label: "Art & Decoration", 
          value: "art", 
          tags: ["Digital Canvas"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          ),
          description: "Display digital artwork and creative content"
        },
        { 
          label: "Information Display", 
          value: "information", 
          tags: ["Indoor Display", "Interactive Display"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          description: "Share schedules, menus, or important information"
        }
      ]
    },
    {
      question: "Do you need touch/interactive features?",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      options: [
        { 
          label: "Yes - Touch interaction required", 
          value: "yes", 
          tags: ["Interactive Display"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
          ),
          description: "Multi-touch capability for customer engagement"
        },
        { 
          label: "No - Display only", 
          value: "no", 
          tags: ["Indoor Display", "Window Display", "Outdoor Display", "Digital Canvas"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ),
          description: "Standard display without touch functionality"
        }
      ]
    },
    {
      question: "How many displays do you need?",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      options: [
        { 
          label: "Single Display", 
          value: "single", 
          tags: ["Indoor Display", "Window Display", "Outdoor Display", "Interactive Display", "Digital Canvas"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          description: "One display for a specific location"
        },
        { 
          label: "Multiple Displays (2-5)", 
          value: "few", 
          tags: ["Indoor Display", "Window Display", "Interactive Display"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
          ),
          description: "Small network of displays across locations"
        },
        { 
          label: "Large Network (6+)", 
          value: "many", 
          tags: ["Indoor Display", "Window Display", "Interactive Display"],
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
          description: "Enterprise solution with multiple locations"
        }
      ]
    }
  ];

  // Handle quiz answer
  const handleQuizAnswer = (question: string, answer: string) => {
    const newAnswers = [...quizAnswers, { question, answer }];
    setQuizAnswers(newAnswers);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  // Reset quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizAnswers([]);
    setShowResults(false);
    setShowQuiz(true);
  };

  // Get recommended products based on quiz answers
  const getRecommendedProducts = () => {
    if (quizAnswers.length === 0) return products;

    let recommended = [...products];
    
    // Filter by tags from answers
    const allTags: string[] = [];
    quizAnswers.forEach(answer => {
      const question = quizQuestions.find(q => q.question === answer.question);
      const option = question?.options.find(o => o.value === answer.answer);
      if (option && 'tags' in option && option.tags) {
        allTags.push(...option.tags);
      }
    });

    if (allTags.length > 0) {
      recommended = recommended.filter(product => 
        allTags.some(tag => product.category === tag)
      );
    }

    return recommended.length > 0 ? recommended : products;
  };

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter products by category or quiz results
  const filteredProducts = showResults && quizAnswers.length > 0
    ? getRecommendedProducts()
    : selectedCategory === 'All' 
      ? products 
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 md:py-28 pb-32 md:pb-40 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-sm font-medium tracking-wider">EXPLORE OUR COMPLETE RANGE</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Shop Digital Displays
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Browse our complete collection of digital signage and canvas solutions. 
            Configure your perfect display and get started today.
          </p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </section>

      {/* Product Finder Quiz */}
      {showQuiz && (
        <section className="py-8 md:py-10 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Quiz Header with Gradient */}
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white p-6 md:p-8">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
                </div>

                <div className="relative flex items-start justify-between">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm font-semibold tracking-wide">PRODUCT FINDER</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      Find Your Perfect Display
                    </h2>
                    <p className="text-base md:text-lg text-blue-100">
                      Answer 4 quick questions and we'll recommend the ideal solution for your needs
                    </p>
                  </div>
                  <button
                    onClick={() => setShowQuiz(false)}
                    className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg"
                    aria-label="Close quiz"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Quiz Content */}
              <div className="p-6 md:p-8">
                {!showResults ? (
                  <>
                    {/* Progress Bar */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-700">
                          Question {currentQuestion + 1} of {quizQuestions.length}
                        </span>
                        <span className="text-sm font-medium text-blue-600">
                          {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete
                        </span>
                      </div>
                      <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-full transition-all duration-700 ease-out shadow-lg"
                          style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Current Question */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center text-blue-600">
                          {quizQuestions[currentQuestion].icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          {quizQuestions[currentQuestion].question}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                          <button
                            key={option.value}
                            onClick={() => handleQuizAnswer(quizQuestions[currentQuestion].question, option.value)}
                            className="group relative p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-left overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                                    {option.icon}
                                  </div>
                                  <span className="text-base md:text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                                    {option.label}
                                  </span>
                                </div>
                                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </div>
                              <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-700">
                                {option.description}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      {currentQuestion > 0 ? (
                        <button
                          onClick={() => {
                            setCurrentQuestion(currentQuestion - 1);
                            setQuizAnswers(quizAnswers.slice(0, -1));
                          }}
                          className="flex items-center gap-2 px-5 py-2.5 text-blue-600 hover:text-blue-700 font-semibold hover:bg-blue-50 rounded-xl transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          Previous
                        </button>
                      ) : (
                        <div></div>
                      )}
                      
                      <div className="text-sm text-gray-500">
                        Select an option to continue
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Results */}
                    <div className="text-center py-6">
                      {/* Success Animation */}
                      <div className="relative inline-flex items-center justify-center mb-5">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-20"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Perfect Match Found!
                      </h3>
                      <p className="text-lg md:text-xl text-gray-600 mb-2">
                        We've found <span className="font-bold text-blue-600">{getRecommendedProducts().length}</span> {getRecommendedProducts().length === 1 ? 'product' : 'products'} that match your requirements
                      </p>
                      <p className="text-gray-500 mb-6">
                        Based on your answers, here are our expert recommendations
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                        <button
                          onClick={() => {
                            setShowQuiz(false);
                            setShowResults(false);
                            window.scrollTo({ top: document.querySelector('#products-section')?.getBoundingClientRect().top! + window.scrollY - 100, behavior: 'smooth' });
                          }}
                          className="group px-7 py-3.5 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white font-bold text-base md:text-lg rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        >
                          View My Recommendations
                          <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </button>
                        <button
                          onClick={resetQuiz}
                          className="px-7 py-3.5 bg-white text-blue-600 font-semibold text-base md:text-lg rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
                        >
                          Start Over
                        </button>
                      </div>

                      {/* Summary of Answers */}
                      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-5 max-w-2xl mx-auto">
                        <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Your Selections</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {quizAnswers.map((answer, index) => {
                            const question = quizQuestions.find(q => q.question === answer.question);
                            const option = question?.options.find(o => o.value === answer.answer);
                            return (
                              <div key={index} className="flex items-center gap-2.5 bg-white rounded-lg p-2.5 shadow-sm">
                                <div className="text-blue-600 flex-shrink-0">
                                  {option?.icon}
                                </div>
                                <div className="text-left">
                                  <div className="text-xs text-gray-500">Q{index + 1}</div>
                                  <div className="text-sm font-semibold text-gray-900">{option?.label}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Show Quiz Button (when hidden) */}
      {!showQuiz && (
        <section className="py-6 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <button
              onClick={() => {
                setShowQuiz(true);
                resetQuiz();
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Not sure which display to choose? Take our Product Finder Quiz
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {showResults && quizAnswers.length > 0 ? 'Recommended Products' : 'Filter by Category'}
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{filteredProducts.length} products</span>
              {showResults && quizAnswers.length > 0 && (
                <button
                  onClick={() => {
                    setShowResults(false);
                    setQuizAnswers([]);
                    setCurrentQuestion(0);
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
          {!showResults && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-section" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Stock Badge */}
                    <div className="absolute top-4 right-4">
                      {product.inStock ? (
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                          In Stock
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                          Out of Stock
                        </span>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                      {product.description}
                    </p>

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                      <div className="mb-4">
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start text-xs text-gray-600">
                              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Price */}
                    <div className="mb-4 pt-4 border-t">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-gray-500 uppercase">from</span>
                        <span className="text-2xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                        <span className="text-xs text-gray-400">+ VAT</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      <Link
                        href={`/products/${product.id}/shop`}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                      >
                        Configure & Purchase
                      </Link>
                      
                      <Link
                        href={`/products/${product.id}`}
                        className="w-full py-3 bg-white text-blue-600 font-medium rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Our team of experts is here to help you find the perfect digital display solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-glow hover:scale-105"
            >
              Contact Our Team
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free UK Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>3-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Expert Installation Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
