import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'pink';
  glow?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  glow = false,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium';

  const variantStyles = {
    blue: `
      bg-cyber-blue bg-opacity-20
      text-cyber-blue
      border border-cyber-blue
      ${glow ? 'shadow-neon-blue' : ''}
    `,
    purple: `
      bg-cyber-purple bg-opacity-20
      text-cyber-purple
      border border-cyber-purple
      ${glow ? 'shadow-neon-purple' : ''}
    `,
    pink: `
      bg-cyber-pink bg-opacity-20
      text-cyber-pink
      border border-cyber-pink
      ${glow ? 'shadow-neon-pink' : ''}
    `,
  };

  return (
    <span
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge; 