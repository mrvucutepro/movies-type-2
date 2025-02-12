interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
}

export default function Loading({ size = 'xxl', className }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
    xxl: 'w-16 h-16',
  };

  return (
    <div
      className={`${className} flex border-4 border-[#d9b87a] border-t-transparent border-spacing-3 rounded-full animate-spin ${sizeClasses[size]}`}
    ></div>
  );
}
