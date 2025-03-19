import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'interactive';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const baseStyles = 'glass rounded-lg p-6';

  const variantStyles = {
    default: '',
    hover: 'hover:shadow-neon-blue transition-shadow duration-300',
    interactive: `
      hover:shadow-neon-blue
      transform
      hover:-translate-y-1
      transition-all
      duration-300
      cursor-pointer
    `,
  };

  return (
    <div
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      {children}
    </div>
  );
};

export default Card; 