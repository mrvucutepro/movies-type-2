interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Spinner({ size = 'lg' }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-20 h-20',
  };

  return (
    <div
      className={`flex border-4 border-red-500 border-t-transparent border-solid rounded-full animate-spin ${sizeClasses[size]}`}
    ></div>
  );
}
