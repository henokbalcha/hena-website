import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { 
  CloudArrowUpIcon, 
  DocumentIcon, 
  PhotoIcon, 
  VideoCameraIcon 
} from '@heroicons/react/24/outline';

const FileOrb = () => {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#00f6ff"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.8}
        wireframe
      />
    </Sphere>
  );
};

const Dashboard = () => {
  const storageStats = {
    used: 7.5,
    total: 10,
    percentage: 75,
  };

  const fileTypes = [
    { icon: DocumentIcon, label: 'Documents', count: 150 },
    { icon: PhotoIcon, label: 'Images', count: 300 },
    { icon: VideoCameraIcon, label: 'Videos', count: 45 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* 3D File Orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[400px] bg-cyber-gray/50 rounded-lg overflow-hidden"
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FileOrb />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </motion.div>

      {/* Storage Stats */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-cyber-gray/50 p-6 rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Storage Usage</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Used: {storageStats.used}GB</span>
              <span>Total: {storageStats.total}GB</span>
            </div>
            <div className="h-2 bg-cyber-gray rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${storageStats.percentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
              />
            </div>
          </div>
        </motion.div>

        {/* File Type Stats */}
        <div className="grid grid-cols-3 gap-4">
          {fileTypes.map((type, index) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-cyber-gray/50 p-4 rounded-lg text-center"
            >
              <type.icon className="w-8 h-8 mx-auto text-cyber-blue mb-2" />
              <div className="text-sm text-gray-300">{type.label}</div>
              <div className="text-xl font-semibold">{type.count}</div>
            </motion.div>
          ))}
        </div>

        {/* Upload Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyber-blue/20 transition-shadow"
        >
          <CloudArrowUpIcon className="w-5 h-5" />
          <span>Upload Files</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Dashboard; 