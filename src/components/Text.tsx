import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
  color?: 'default' | 'blue' | 'purple' | 'pink' | 'muted';
  glow?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color = 'default',
  glow = false,
  className = '',
  as: Component = 'div',
}) => {
  const variantStyles = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    body: 'text-base',
    small: 'text-sm',
  };

  const colorStyles = {
    default: 'text-white',
    blue: 'text-cyber-blue',
    purple: 'text-cyber-purple',
    pink: 'text-cyber-pink',
    muted: 'text-gray-400',
  };

  return (
    <Component
      className={`
        ${variantStyles[variant]}
        ${colorStyles[color]}
        ${glow ? 'neon-text' : ''}
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

export default Text; 