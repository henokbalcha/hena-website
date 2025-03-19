import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'glow';
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  variant = 'default',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = `
    glass
    px-4
    py-2
    rounded-md
    border
    focus:outline-none
    transition-all
    duration-200
    ${fullWidth ? 'w-full' : ''}
  `;

  const variantStyles = {
    default: `
      border-cyber-gray
      focus:border-cyber-blue
    `,
    glow: `
      border-cyber-blue
      shadow-neon-blue
      focus:shadow-neon-blue
    `,
  };

  const errorStyles = error
    ? 'border-cyber-pink shadow-neon-pink'
    : variantStyles[variant];

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        className={`
          ${baseStyles}
          ${errorStyles}
          placeholder:text-gray-500
          bg-transparent
          text-white
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-cyber-pink">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input; 