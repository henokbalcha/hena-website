import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface SearchBarProps {
  onSearch: (query: string, filters: SearchFilters) => void;
}

interface SearchFilters {
  type: string[];
  dateRange: 'all' | 'today' | 'week' | 'month' | 'year';
  size: 'all' | 'small' | 'medium' | 'large';
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    type: [],
    dateRange: 'all',
    size: 'all',
  });

  const fileTypes = [
    { id: 'document', label: 'Documents' },
    { id: 'image', label: 'Images' },
    { id: 'video', label: 'Videos' },
    { id: 'audio', label: 'Audio' },
  ];

  const dateRanges = [
    { id: 'all', label: 'All Time' },
    { id: 'today', label: 'Today' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'year', label: 'This Year' },
  ];

  const fileSizes = [
    { id: 'all', label: 'All Sizes' },
    { id: 'small', label: '< 10MB' },
    { id: 'medium', label: '10MB - 100MB' },
    { id: 'large', label: '> 100MB' },
  ];

  const handleSearch = () => {
    onSearch(query, filters);
  };

  const toggleFileType = (type: string) => {
    setFilters(prev => ({
      ...prev,
      type: prev.type.includes(type)
        ? prev.type.filter(t => t !== type)
        : [...prev.type, type],
    }));
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search files..."
            className="w-full bg-cyber-gray border border-cyber-blue/20 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyber-blue"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowFilters(!showFilters)}
          className={`p-2 rounded-lg transition-colors ${
            showFilters ? 'bg-cyber-blue text-white' : 'bg-cyber-gray text-gray-400 hover:bg-cyber-gray/80'
          }`}
        >
          <FunnelIcon className="w-5 h-5" />
        </motion.button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 w-full mt-2 bg-cyber-gray rounded-lg shadow-lg border border-cyber-blue/20 p-4"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">File Type</h3>
                <div className="flex flex-wrap gap-2">
                  {fileTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => toggleFileType(type.id)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        filters.type.includes(type.id)
                          ? 'bg-cyber-blue text-white'
                          : 'bg-cyber-gray/50 text-gray-400 hover:bg-cyber-gray/80'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">Date Range</h3>
                <select
                  value={filters.dateRange}
                  onChange={(e) => setFilters(prev => ({ ...prev, dateRange: e.target.value as SearchFilters['dateRange'] }))}
                  className="w-full bg-cyber-gray/50 border border-cyber-blue/20 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:border-cyber-blue"
                >
                  {dateRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">File Size</h3>
                <select
                  value={filters.size}
                  onChange={(e) => setFilters(prev => ({ ...prev, size: e.target.value as SearchFilters['size'] }))}
                  className="w-full bg-cyber-gray/50 border border-cyber-blue/20 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:border-cyber-blue"
                >
                  {fileSizes.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setFilters({ type: [], dateRange: 'all', size: 'all' });
                    handleSearch();
                  }}
                  className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Reset
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleSearch();
                    setShowFilters(false);
                  }}
                  className="px-3 py-1 text-sm bg-cyber-blue text-white rounded-lg hover:bg-cyber-blue/90 transition-colors"
                >
                  Apply Filters
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar; 