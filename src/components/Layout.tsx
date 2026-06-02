import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'History & Legacy', href: '/history' },
    { name: 'Ideology & Thought', href: '/ideology' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Contributions', href: '/contributions' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col font-sans text-navy-900 bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-saffron-600 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-inner">
                  HM
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl md:text-2xl leading-tight text-navy-900 tracking-tight">
                    Hindu Mahasabha
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 lg:space-x-8">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-saffron-500 text-saffron-600'
                        : 'border-transparent text-gray-600 hover:text-saffron-600 hover:border-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                to="/join"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold shadow-sm text-white bg-navy-900 hover:bg-navy-800 transition-colors uppercase tracking-wide"
              >
                Join Now
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                      isActive
                        ? 'bg-saffron-50 border-saffron-500 text-saffron-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                to="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 pr-4 py-3 border-l-4 border-transparent text-base font-bold text-navy-900 hover:bg-gray-50 uppercase tracking-wide"
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-saffron-50 text-navy-900 pt-16 pb-8 border-t border-saffron-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            
            {/* Column 1 - Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-saffron-600 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-inner">
                  HM
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl leading-tight text-navy-900 tracking-tight">Hindu Mahasabha</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                One of India's oldest political and socio-cultural organisations.
              </p>
              <p className="text-saffron-600 text-sm font-medium italic">
                "Rooted in History. Committed to Culture. Serving the Nation."
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-navy-800 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-600 hover:text-saffron-600 transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Organisation Info */}
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-navy-800 mb-6">Organisation</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><strong className="text-navy-900">Founded:</strong> 1915</li>
                <li><strong className="text-navy-900">Type:</strong> Registered Political & Socio-Cultural Organisation</li>
                <li><strong className="text-navy-900">Structure:</strong> National, State & Local Committees</li>
              </ul>
            </div>

            {/* Column 4 - Connect */}
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-navy-800 mb-6">Connect</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-saffron-600 transition-colors">Official Website</a></li>
                <li><a href="#" className="hover:text-saffron-600 transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-saffron-600 transition-colors">Facebook</a></li>
                <li className="pt-2"><a href="mailto:contact@hindumahasabha.org" className="text-saffron-600 font-medium hover:text-saffron-700">contact@hindumahasabha.org</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-saffron-200 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {currentYear} Hindu Mahasabha. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-saffron-600 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
