'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCookieStore, CookiePreferences } from '@/lib/cookie-store';

export default function CookieBanner() {
  const { hasConsented, showBanner, preferences, acceptAll, denyAll, savePreferences } = useCookieStore();
  const [showCustomize, setShowCustomize] = useState(false);
  const [customPrefs, setCustomPrefs] = useState<CookiePreferences>(preferences);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after a short delay if user hasn't consented
    if (!hasConsented && showBanner) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [hasConsented, showBanner]);

  if (hasConsented || !showBanner || !isVisible) {
    return null;
  }

  const handleSaveCustom = () => {
    savePreferences(customPrefs);
    setShowCustomize(false);
  };

  return (
    <>
      {/* Overlay */}
      {showCustomize && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          onClick={() => setShowCustomize(false)}
        />
      )}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[70] animate-slide-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="bg-white rounded-t-2xl shadow-2xl border-t-4 border-blue-600 p-6 md:p-8">
            {!showCustomize ? (
              <>
                {/* Main Banner */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900">Cookie Preferences</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalised content, and analyse our traffic. 
                      By clicking "Accept All", you consent to our use of cookies. You can customise your preferences or deny non-essential cookies.
                    </p>
                    <Link href="/cookie-policy" className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 inline-block">
                      Read our Cookie Policy →
                    </Link>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button
                      onClick={denyAll}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
                    >
                      Deny All
                    </button>
                    <button
                      onClick={() => setShowCustomize(true)}
                      className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium"
                    >
                      Customise
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Customise Panel */}
                <div className="max-h-[70vh] overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Customise Cookie Preferences</h3>
                    <button
                      onClick={() => setShowCustomize(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Necessary Cookies */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">Necessary Cookies</h4>
                          <p className="text-sm text-gray-600">
                            Essential for the website to function properly. These cannot be disabled.
                          </p>
                        </div>
                        <div className="ml-4">
                          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            Always Active
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Examples: Session management, security, shopping cart functionality
                      </p>
                    </div>

                    {/* Functional Cookies */}
                    <div className="p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">Functional Cookies</h4>
                          <p className="text-sm text-gray-600">
                            Enable enhanced functionality and personalisation, such as remembering your preferences.
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer ml-4">
                          <input
                            type="checkbox"
                            checked={customPrefs.functional}
                            onChange={(e) => setCustomPrefs({ ...customPrefs, functional: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Examples: Language preferences, region settings, user interface customisation
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">Analytics Cookies</h4>
                          <p className="text-sm text-gray-600">
                            Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer ml-4">
                          <input
                            type="checkbox"
                            checked={customPrefs.analytics}
                            onChange={(e) => setCustomPrefs({ ...customPrefs, analytics: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Examples: Google Analytics, page view tracking, user behaviour analysis
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">Marketing Cookies</h4>
                          <p className="text-sm text-gray-600">
                            Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer ml-4">
                          <input
                            type="checkbox"
                            checked={customPrefs.marketing}
                            onChange={(e) => setCustomPrefs({ ...customPrefs, marketing: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Examples: Advertising networks, retargeting, social media integration
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t">
                    <button
                      onClick={() => setShowCustomize(false)}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveCustom}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
