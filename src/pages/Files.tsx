import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentIcon, 
  PhotoIcon, 
  VideoCameraIcon, 
  FolderIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

interface File {
  id: string;
  name: string;
  type: 'document' | 'image' | 'video' | 'folder';
  size: string;
  date: string;
}

const Files = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [files] = useState<File[]>([
    { id: '1', name: 'Project Report.pdf', type: 'document', size: '2.4 MB', date: '2024-02-20' },
    { id: '2', name: 'Vacation Photos', type: 'folder', size: '1.2 GB', date: '2024-02-19' },
    { id: '3', name: 'Presentation.pptx', type: 'document', size: '5.8 MB', date: '2024-02-18' },
    { id: '4', name: 'Meeting Recording.mp4', type: 'video', size: '256 MB', date: '2024-02-17' },
    { id: '5', name: 'Design Assets', type: 'folder', size: '3.4 GB', date: '2024-02-16' },
  ]);

  const getFileIcon = (type: File['type']) => {
    switch (type) {
      case 'document':
        return <DocumentIcon className="w-8 h-8 text-cyber-blue" />;
      case 'image':
        return <PhotoIcon className="w-8 h-8 text-cyber-purple" />;
      case 'video':
        return <VideoCameraIcon className="w-8 h-8 text-cyber-pink" />;
      case 'folder':
        return <FolderIcon className="w-8 h-8 text-yellow-500" />;
      default:
        return <DocumentIcon className="w-8 h-8 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex items-center space-x-4 bg-cyber-gray/50 p-4 rounded-lg">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-cyber-gray border border-cyber-blue/20 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyber-blue"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-cyber-gray rounded-lg hover:bg-cyber-gray/80 transition-colors"
        >
          <FunnelIcon className="w-5 h-5 text-gray-400" />
        </motion.button>
      </div>

      {/* File Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {files.map((file) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-cyber-gray/50 p-4 rounded-lg cursor-pointer hover:bg-cyber-gray/80 transition-colors"
          >
            <div className="flex items-center space-x-4">
              {getFileIcon(file.type)}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-white truncate">{file.name}</h3>
                <p className="text-xs text-gray-400">{file.size}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{file.date}</p>
          </motion.div>
        ))}
      </div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border-2 border-dashed border-cyber-blue/30 rounded-lg p-8 text-center hover:border-cyber-blue/50 transition-colors cursor-pointer"
      >
        <div className="space-y-2">
          <div className="w-12 h-12 mx-auto bg-cyber-blue/10 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <p className="text-sm text-gray-400">Drag and drop files here</p>
          <p className="text-xs text-gray-500">or click to browse</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Files; 