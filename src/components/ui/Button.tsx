import { ButtonProps } from '@/types';
import React from 'react';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`py-2.5 px-5 me-2 w-full text-sm font-medium focus:outline-none rounded-lg border
                    ${className}
                `}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
