import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';

type Page = 'home' | 'treballs' | 'sobre-mi' | 'contacte';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => navigateToPage('home')}
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              Estela Penadés Gandia
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => navigateToPage('treballs')}
                className={`transition-colors ${
                  currentPage === 'treballs' ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Treballs
              </button>
              <button
                onClick={() => navigateToPage('sobre-mi')}
                className={`transition-colors ${
                  currentPage === 'sobre-mi' ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Sobre mi
              </button>
              <button
                onClick={() => navigateToPage('contacte')}
                className={`transition-colors ${
                  currentPage === 'contacte' ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Contacte
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => navigateToPage('treballs')}
                className="block w-full text-left text-gray-700 hover:text-gray-900 py-2"
              >
                Treballs
              </button>
              <button
                onClick={() => navigateToPage('sobre-mi')}
                className="block w-full text-left text-gray-700 hover:text-gray-900 py-2"
              >
                Sobre mi
              </button>
              <button
                onClick={() => navigateToPage('contacte')}
                className="block w-full text-left text-gray-700 hover:text-gray-900 py-2"
              >
                Contacte
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Pages */}
      {currentPage === 'home' && (
        <Hero onExploreClick={() => navigateToPage('treballs')} />
      )}
      
      {currentPage === 'treballs' && (
        <Work />
      )}
      
      {currentPage === 'sobre-mi' && (
        <About />
      )}
      
      {currentPage === 'contacte' && (
        <Contact />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Estela Penadés Gandia. Tots els drets reservats.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => navigateToPage('treballs')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Treballs
              </button>
              <button
                onClick={() => navigateToPage('sobre-mi')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sobre mi
              </button>
              <button
                onClick={() => navigateToPage('contacte')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contacte
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}