import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cyber-dark cyber-grid">
      {/* Navigation */}
      <nav className="glass fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="neon-text text-cyber-blue text-xl font-bold">
                CYBER<span className="text-cyber-purple">PORTFOLIO</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-cyber-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-cyber-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-cyber-pink px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-cyber-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="glass mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CYBERPORTFOLIO. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-purple transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-pink transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 