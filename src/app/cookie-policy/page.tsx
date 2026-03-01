'use client';

import Link from 'next/link';
import { useCookieStore } from '@/lib/cookie-store';

export default function CookiePolicyPage() {
  const { resetConsent } = useCookieStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-blue-200 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-blue-100">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Cookie Policy explains how Vizage Solutions ("we", "us", or "our") uses cookies and similar technologies 
              when you visit our website at vizagesolutions.com (the "Website"). This policy explains what these technologies 
              are, why we use them, and your rights to control our use of them.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our Website, you agree to the use of cookies in accordance with this Cookie Policy. If you do not 
              agree to our use of cookies, you should set your browser settings accordingly or not use our Website.
            </p>
          </section>

          {/* What are cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies set by the website owner (in this case, Vizage Solutions) are called "first-party cookies". 
              Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies 
              enable third-party features or functionality to be provided on or through the website.
            </p>
          </section>

          {/* Types of cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Necessary Cookies</h3>
                <p className="text-gray-700 mb-3">
                  These cookies are essential for the Website to function properly. They enable core functionality such as 
                  security, network management, and accessibility. You cannot opt-out of these cookies.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Examples:</strong> Session cookies, authentication cookies, shopping cart functionality
                </p>
              </div>

              <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                <p className="text-gray-700 mb-3">
                  These cookies enable the Website to provide enhanced functionality and personalisation. They may be set 
                  by us or by third-party providers whose services we have added to our pages.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Examples:</strong> Language preferences, region settings, user interface customisation, 
                  remembering your login details
                </p>
              </div>

              <div className="p-6 bg-purple-50 border-l-4 border-purple-600 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 mb-3">
                  These cookies help us understand how visitors interact with our Website by collecting and reporting 
                  information anonymously. This helps us improve the way our Website works.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Examples:</strong> Google Analytics, page view tracking, bounce rate analysis, user journey mapping
                </p>
              </div>

              <div className="p-6 bg-orange-50 border-l-4 border-orange-600 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-gray-700 mb-3">
                  These cookies are used to track visitors across websites. The intention is to display advertisements 
                  that are relevant and engaging for individual users.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Examples:</strong> Advertising networks, retargeting pixels, social media integration, 
                  conversion tracking
                </p>
              </div>
            </div>
          </section>

          {/* How we use cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>To enable certain functions of the Website</li>
              <li>To provide analytics and track Website performance</li>
              <li>To store your preferences and settings</li>
              <li>To enable social media features</li>
              <li>To deliver relevant advertising</li>
              <li>To improve user experience and Website functionality</li>
              <li>To understand how you use our Website</li>
            </ul>
          </section>

          {/* Third-party cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics 
              of the Website and deliver advertisements on and through the Website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These third-party services may include Google Analytics, social media platforms, and advertising networks. 
              Each of these services has its own privacy policy and cookie policy, which we encourage you to review.
            </p>
          </section>

          {/* Your choices */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Choices Regarding Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences 
              by clicking on the appropriate opt-out links provided in the cookie banner or by using the button below:
            </p>
            <button
              onClick={resetConsent}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Manage Cookie Preferences
            </button>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject 
              cookies, you may still use our Website, though your access to some functionality and areas may be restricted.
            </p>
          </section>

          {/* Browser settings */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Browser Settings</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit 
              the ability of websites to set cookies, you may worsen your overall user experience.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To find out more about cookies, including how to see what cookies have been set and how to manage and 
              delete them, visit:
            </p>
            <ul className="list-disc list-inside space-y-2 text-blue-600 ml-4">
              <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="hover:underline">www.allaboutcookies.org</a></li>
              <li><a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="hover:underline">www.youronlinechoices.eu</a></li>
            </ul>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay 
              informed about our use of cookies.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700"><strong>Vizage Solutions</strong></p>
              <p className="text-gray-700">Email: <a href="mailto:privacy@vizagesolutions.com" className="text-blue-600 hover:underline">privacy@vizagesolutions.com</a></p>
              <p className="text-gray-700">Website: <a href="/" className="text-blue-600 hover:underline">www.vizagesolutions.com</a></p>
            </div>
          </section>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
