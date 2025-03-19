import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, FolderIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: HomeIcon, label: 'Dashboard' },
    { path: '/files', icon: FolderIcon, label: 'Files' },
    { path: '/settings', icon: Cog6ToothIcon, label: 'Settings' },
  ];

  return (
    <nav className="bg-cyber-gray/80 backdrop-blur-lg border-b border-cyber-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent"
            >
              CyberVault
            </motion.div>
          </Link>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyber-blue transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyber-blue"
                    />
                  )}
                </Link>
              );
            })}

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-300 hover:text-cyber-blue transition-colors"
            >
              <UserIcon className="w-5 h-5" />
              <span>Profile</span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 