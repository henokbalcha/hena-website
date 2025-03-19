import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  fullScreen = false,
  text,
}) => {
  const sizeStyles = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const containerStyles = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-cyber-dark bg-opacity-80 z-50'
    : 'flex items-center justify-center';

  return (
    <div className={containerStyles}>
      <div className="text-center">
        <div className={`cyber-loading ${sizeStyles[size]} mx-auto`} />
        {text && (
          <p className="mt-4 text-cyber-blue neon-text animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Loading; 