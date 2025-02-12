import React from 'react';

interface CommentAreaProps {
  value?: string;
  title?: string;
  underline?: boolean;
  startContext?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  classNameInput?: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CommentArea: React.FC<CommentAreaProps> = ({
  value,
  title,
  underline = false,
  onChange,
  placeholder = '',
  disabled = false,
  className = '',
  classNameInput = '',
  startContext,
}) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {title && (
        <label className="text-sm font-medium text-gray-700">{title}</label>
      )}

      <div className="relative border border-t-0 border-x-0 py-2 border-black">
        {startContext && (
          <div className="absolute left-3 top-1 ">{startContext}</div>
        )}
        <textarea
          value={value}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          className={`${
            underline ? 'border-b' : 'border'
          } text-sm border-x-0 border-t-0 w-[100%]  mx-4 content-center bg-[#2F2F2F] rounded-xl border-[#2F2F2e] shadow-lg px-4  focus:outline-none ${
            startContext ? 'pl-10' : ''
          } ${classNameInput}`}
        />
      </div>
    </div>
  );
};

export default CommentArea;
