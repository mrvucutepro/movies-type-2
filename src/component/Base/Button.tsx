import React from 'react';
import Spinner from '../Spinner';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}

const Button = ({
  label,
  type = 'button',
  onClick,
  className,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`flex-shrink-0 h-[26px] my-[3px] px-4 border-black rounded-lg text-white align-top text-sm bg-custom-gradient focus:outline-none  focus:text-[#EA1616] transition-all duration-200 ${className}`}
    >
      {loading ? <Spinner size="sm" /> : label}
    </button>
  );
};

export default Button;
