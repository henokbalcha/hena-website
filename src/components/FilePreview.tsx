import React from 'react';
import { motion } from 'framer-motion';
import {
  DocumentIcon,
  PhotoIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

interface FilePreviewProps {
  file: {
    name: string;
    type: string;
    size: number;
    url?: string;
  };
  onClose: () => void;
}

const FilePreview: React.FC<FilePreviewProps> = ({ file, onClose }) => {
  const getFileIcon = () => {
    const type = file.type.split('/')[0];
    switch (type) {
      case 'image':
        return <PhotoIcon className="w-8 h-8 text-cyber-purple" />;
      case 'video':
        return <VideoCameraIcon className="w-8 h-8 text-cyber-pink" />;
      case 'audio':
        return <MusicalNoteIcon className="w-8 h-8 text-cyber-blue" />;
      case 'text':
        return <CodeBracketIcon className="w-8 h-8 text-yellow-500" />;
      default:
        return <DocumentIcon className="w-8 h-8 text-gray-400" />;
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const renderPreview = () => {
    const type = file.type.split('/')[0];
    switch (type) {
      case 'image':
        return (
          <img
            src={file.url}
            alt={file.name}
            className="max-w-full h-auto rounded-lg"
          />
        );
      case 'video':
        return (
          <video
            src={file.url}
            controls
            className="max-w-full h-auto rounded-lg"
          />
        );
      case 'audio':
        return (
          <audio
            src={file.url}
            controls
            className="w-full"
          />
        );
      default:
        return (
          <div className="flex items-center justify-center p-8">
            {getFileIcon()}
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <motion.div
        className="bg-cyber-gray rounded-lg overflow-hidden max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-cyber-blue/20">
          <div className="flex items-center space-x-3">
            {getFileIcon()}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium text-white truncate">
                {file.name}
              </h3>
              <p className="text-sm text-gray-400">
                {formatFileSize(file.size)}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-cyber-blue/10 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-4">
          {renderPreview()}
        </div>

        <div className="p-4 border-t border-cyber-blue/20">
          <div className="flex justify-end space-x-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-cyber-blue/10 text-cyber-blue rounded-lg hover:bg-cyber-blue/20 transition-colors"
              onClick={onClose}
            >
              Close
            </motion.button>
            {file.url && (
              <motion.a
                href={file.url}
                download={file.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg hover:shadow-lg hover:shadow-cyber-blue/20 transition-shadow"
              >
                Download
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FilePreview; 