import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Vizage
              </div>
              <div className="text-3xl font-light text-white">Solutions</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your business with innovative digital signage and art displays, 
              designed to captivate and engage your audience with unparalleled sophistication.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Digital Signage
                </Link>
              </li>
              <li>
                <Link href="/digital-canvas" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Digital Canvas
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">✓</span>
                Content Management
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">✓</span>
                Professional Installation
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">✓</span>
                24/7 Customer Support
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">✓</span>
                Art Curation Services
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Vizage Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/admin" className="hover:text-blue-400 transition-colors duration-300">Admin Portal</Link>
              <Link href="/cookie-policy" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</Link>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
