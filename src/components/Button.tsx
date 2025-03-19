import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    primary: 'bg-cyber-blue text-cyber-dark hover:shadow-neon-blue transform hover:-translate-y-0.5',
    secondary: 'bg-cyber-purple text-white hover:shadow-neon-purple transform hover:-translate-y-0.5',
    outline: 'border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transform hover:-translate-y-0.5',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed transform-none hover:transform-none';

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${disabled || isLoading ? disabledStyles : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="cyber-loading absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="opacity-0">{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button; 