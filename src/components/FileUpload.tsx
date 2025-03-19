import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { supabase } from '../lib/supabase';

interface FileUploadProps {
  onUploadComplete: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUploadComplete }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files && files.length > 0) {
      try {
        for (const file of files) {
          const fileExt = file.name.split('.').pop();
          const fileName = `${Math.random()}.${fileExt}`;
          const filePath = `${fileName}`;

          const { error: uploadError } = await supabase.storage
            .from('files')
            .upload(filePath, file, {
              onUploadProgress: (progress) => {
                setUploadProgress((progress.loaded / progress.total) * 100);
              },
            });

          if (uploadError) {
            throw uploadError;
          }
        }
        onUploadComplete(files);
        setUploadProgress(0);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }, [onUploadComplete]);

  const handleFileInput = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      try {
        for (const file of files) {
          const fileExt = file.name.split('.').pop();
          const fileName = `${Math.random()}.${fileExt}`;
          const filePath = `${fileName}`;

          const { error: uploadError } = await supabase.storage
            .from('files')
            .upload(filePath, file, {
              onUploadProgress: (progress) => {
                setUploadProgress((progress.loaded / progress.total) * 100);
              },
            });

          if (uploadError) {
            throw uploadError;
          }
        }
        onUploadComplete(files);
        setUploadProgress(0);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }, [onUploadComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer
        ${isDragging ? 'border-cyber-blue bg-cyber-blue/5' : 'border-cyber-blue/30 hover:border-cyber-blue/50'}`}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleFileInput}
      />
      <div className="space-y-2">
        <div className="w-12 h-12 mx-auto bg-cyber-blue/10 rounded-full flex items-center justify-center">
          <CloudArrowUpIcon className="w-6 h-6 text-cyber-blue" />
        </div>
        <p className="text-sm text-gray-400">
          {isDragging ? 'Drop files here' : 'Drag and drop files here'}
        </p>
        <p className="text-xs text-gray-500">or click to browse</p>
      </div>

      {uploadProgress > 0 && (
        <div className="mt-4">
          <div className="h-1 bg-cyber-gray rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${uploadProgress}%` }}
              className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">{Math.round(uploadProgress)}% uploaded</p>
        </div>
      )}
    </motion.div>
  );
};

export default FileUpload; 